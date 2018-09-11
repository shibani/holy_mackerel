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
 
    beforeEach(() => {
        fetchRestaurantsStub = sinon.stub(apis, 'fetchRestaurantsApi').returns('success');
    });
    
    afterEach(() => {
        apis.fetchRestaurantsApi.restore();
    });

    it('Mounting the MainBodyPage component should invoke the fetchRestaurantsApi fetch call', async () => {
        const wrapper = await shallow(<MainBodyPage />)
        await wrapper.update()
        expect(fetchRestaurantsStub.calledOnce).to.equal(true);
    });
})