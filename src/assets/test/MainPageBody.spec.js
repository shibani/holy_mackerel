import React from 'react';
import { expect, assert, should } from 'chai';
import { configure } from 'enzyme';
import sinon from 'sinon';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import Contents from '../js/components/MainPageBody';
import Restaurants from '../js/components/Restaurants';
import { MemoryRouter } from 'react-router-dom';

sinon.spy(Contents.prototype, 'componentDidMount');
const wrapper = mount(<MemoryRouter><Contents /></MemoryRouter>)

describe('the main container', () => {
    it('renders the Restaurants component', () => {
        expect(wrapper).to.containMatchingElement(<Restaurants />);
    })

    it('calls componentDidMount', () => {
        expect(Contents.prototype.componentDidMount.calledOnce).to.equal(true);
    });
})