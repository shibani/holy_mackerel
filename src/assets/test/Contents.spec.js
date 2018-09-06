import React from 'react';
import { expect, assert, should } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import Contents from '../js/components/Contents';
import Restaurants from '../js/components/Restaurants';
import { MemoryRouter } from 'react-router-dom';

const wrapper = mount(<MemoryRouter><Contents /></MemoryRouter>)

describe('the main container', () => {

    it('renders the Restaurants component', () => {
        expect(wrapper).to.containMatchingElement(<Restaurants />);
    })

    /*it('ComponentDidMount', () => {
        wrapper = shallow(<Contents  {...props}/>)
        wrapper.instance().componentDidMount()
        expect(loadData.calledOnce).toBe(true)
    })*/
})