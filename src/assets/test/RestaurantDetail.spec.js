import React from 'react';
import { expect, assert, should } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import RestaurantDetail from '../js/components/RestaurantDetail';
import 'isomorphic-fetch';
import sinon from 'sinon';
import fetchMock from 'fetch-mock'
import * as apis from '../js/utils/fetch-utils';

sinon.spy(RestaurantDetail.prototype, 'componentDidMount');
const chai = require('chai');
const chaiFetch = require('chai-fetch');
chai.use(chaiFetch)
chai.use(chaiEnzyme())

const props = {
    match : {
        params: {
            id: 'Foo'
        }
    }
};
const restaurant = {
    name: 'Foo',
    address1: '88 Spring Street',
    address2: '',
    city: 'New York',
    state: 'NY',
    phone: '212-965-1414',
    website: 'https://foo.com/'
}

const wrapper = shallow(<RestaurantDetail {...props}/>)
wrapper.setState({ restaurant: restaurant });

describe('the main container', () => {

    it('renders the RestaurantDetail component', () => {
        expect(wrapper.find('span.name').text()).to.equal('Foo')
        expect(wrapper.find('span.address1').text()).to.equal('88 Spring Street')
    })
})

describe('React Lifecycle actions triggered', () => {
    it('calls componentDidMount', () => {
        expect(RestaurantDetail.prototype.componentDidMount.calledOnce).to.equal(true);
    });
})

describe('FetchRestaurantsApi is called', () => {
    let fetchRestaurantsStub;
 
    beforeEach(() => {
        fetchRestaurantsStub = sinon.stub(apis, 'fetchRestaurantsApi').returns('success');
    });
    
    afterEach(() => {
        apis.fetchRestaurantsApi.restore();
    });

    it('Mounting the RestaurantDetail component should invoke the fetchRestaurantsApi fetch call', async () => {
        const match = { params: { id: 'foo' } }
        const wrapper = await shallow(<RestaurantDetail match={match}/>)
        await wrapper.update()
        expect(fetchRestaurantsStub.calledOnce).to.equal(true);
    });
})

describe('FetchRestaurantsApi sets the RestaurantDetails component if the fetch call succeeds', () => {

    let data = {"website":"https://balthazarny.com/","state":"NY","slug":"balthazar","phone":"212-965-1414","name":"Balthazar","id":3,"city":"New York","address2":null,"address1":"88 Spring Street"}
 
    before(() => {
        sinon.stub(apis, 'fetchRestaurantsApi').returns(data);
    });
    
    after(() => {
        apis.fetchRestaurantsApi.restore();
    });
    
    it('ensures the state is set', async () => { 
        const wrapper = await shallow(<RestaurantDetail {...props}/>)
        await wrapper.update()
        expect(wrapper.text()).to.contain('Balthazar'); 
    });
})

describe('FetchRestaurantsApi sets the RestaurantDetails component to show an error if the fetch call fails', () => {
 
    before(() => {
        var stub = sinon.stub(apis, 'fetchRestaurantsApi')
        stub.throws()
    });
    
    after(() => {
        apis.fetchRestaurantsApi.restore();
    });
    
    it('ensures the state is set', async () => { 
        const wrapper = await shallow(<RestaurantDetail {...props}/>)
        await wrapper.update()
        expect(wrapper.text()).to.contain('Error'); 
    });
})