import React from 'react';
import { expect, assert, should } from 'chai';
import { configure } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';
import MainBodyPage from '../js/components/MainPageBody';
import Restaurants from '../js/components/Restaurants';
import { MemoryRouter } from 'react-router-dom';
import 'isomorphic-fetch';
import * as apis from '../js/utils/fetch-utils';


sinon.spy(MainBodyPage.prototype, 'componentDidMount');
const wrapper = mount(<MemoryRouter><MainBodyPage /></MemoryRouter>)

describe('The MainPageBody is rendered', () => {

    it('renders the Restaurants component', () => {
        expect(wrapper).to.containMatchingElement(<Restaurants />);
    })
})

describe('React Lifecycle actions triggered', () => {

    it('calls componentDidMount', () => {
        expect(MainBodyPage.prototype.componentDidMount.calledOnce).to.equal(true);
    });
})

describe('FetchRestaurantsApi is called', () => {
    
    let fetchRestaurantsStub;
 
    before(() => {
        fetchRestaurantsStub = sinon.stub(apis, 'fetchRestaurantsApi').returns('success');
    });
    
    after(() => {
        apis.fetchRestaurantsApi.restore();
    });

    it('Mounting the MainBodyPage component should invoke the fetchRestaurantsApi fetch call', async () => {
        const wrapper = await shallow(<MainBodyPage />)
        await wrapper.update()
        expect(fetchRestaurantsStub.calledOnce).to.equal(true);
    });
});


describe('FetchRestaurantsApi sets the MainBodyPage component if the fetch call succeeds', () => {

    let data = [{"website":"https://balthazarny.com/","state":"NY","slug":"balthazar","phone":"212-965-1414","name":"Balthazar","id":10,"city":"New York","address2":"","address1":"88 Spring Street"},{"website":"https://ssambar.momofuku.com/","state":"NY","slug":"momofuku-ssam","phone":"212-254-3500","name":"Momofuku Ssam","id":11,"city":"New York","address2":"","address1":"207 Second Avenue"}]
 
    before(() => {
        sinon.stub(apis, 'fetchRestaurantsApi').returns(data);
    });
    
    after(() => {
        apis.fetchRestaurantsApi.restore();
    });
    
    it('ensures the state is set', async () => { 
        const wrapper = await mount(<MemoryRouter><MainBodyPage /></MemoryRouter>)
        await wrapper.update()
        expect(wrapper.text()).to.contain('Balthazar'); 
    });
})

describe('FetchRestaurantsApi sets the MainBodyPage component if the fetch call succeeds but there are no records', () => {

    let data = []
 
    before(() => {
        sinon.stub(apis, 'fetchRestaurantsApi').returns(data);
    });
    
    after(() => {
        apis.fetchRestaurantsApi.restore();
    });
    
    it('ensures the state is set', async () => { 
        const wrapper = await mount(<MemoryRouter><MainBodyPage /></MemoryRouter>)
        await wrapper.update()
        expect(wrapper.text()).to.not.contain('Balthazar'); 
    });
})

describe('FetchRestaurantsApi sets the MainBodyPage component to show an error if the fetch call fails', () => {
 
    before(() => {
        var stub = sinon.stub(apis, 'fetchRestaurantsApi')
        stub.throws()
    });
    
    after(() => {
        apis.fetchRestaurantsApi.restore();
    });
    
    it('ensures the state is set', async () => { 
        const wrapper = await mount(<MemoryRouter><MainBodyPage /></MemoryRouter>)
        await wrapper.update()
        expect(wrapper.text()).to.contain('Error'); 
    });
})