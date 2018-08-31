import React from 'react';
import { expect, assert, should } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import App from '../js/components/App';
import Jumbotron from '../js/components/Jumbotron'
import Restaurants from '../js/components/Restaurants'

const chai = require('chai');
const chaiFetch = require('chai-fetch');
chai.use(chaiFetch)
chai.use(chaiEnzyme())

const wrapper = mount(<App />)

describe('the main container', () => {

    it('renders the Jumbotron component', () => {
        expect(wrapper).to.containMatchingElement(<Jumbotron />);
    })

    it('renders the Restaurants component', () => {
        expect(wrapper).to.containMatchingElement(<Restaurants />);
    })
})