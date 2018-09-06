import React from 'react';
import { expect, assert, should } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import RestaurantDetail from '../js/components/RestaurantDetail';
import { BrowserRouter } from 'react-router-dom';

const chai = require('chai');
const chaiFetch = require('chai-fetch');
chai.use(chaiFetch)
chai.use(chaiEnzyme())

const props = {
    match : {
        params: {
            name: 'Foo'
        },
    },
    location :{
        state: {
            id: 1
        }
    }
};
const restaurant = {
    name: 'Balthazar',
    address1: '88 Spring Street',
    address2: '',
    city: 'New York',
    state: 'NY',
    phone: '212-965-1414',
    website: 'https://balthazarny.com/'
}

const wrapper = shallow(<RestaurantDetail {...props}/>)
wrapper.setState({ restaurant: restaurant });

describe('the main container', () => {

    it('renders the RestaurantDetail component', () => {
        expect(wrapper.find('span.name').text()).to.equal('Balthazar')
        expect(wrapper.find('span.address1').text()).to.equal('88 Spring Street')
    })
})