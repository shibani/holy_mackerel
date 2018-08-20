import React from 'react'
import chai from 'chai'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
var expect = require('chai').expect;
var assert = chai.assert;
import { shallow, mount, render } from 'enzyme'
import Jumbotron from '../js/components/Jumbotron'


const wrapper = shallow(<Jumbotron />)

describe('Jumbotron Component', () => {
  it('renders h2', () => {
    expect(wrapper.find('h2').text()).to.equal('Welcome to Phoenix with Webpack and React')
  })
  it('renders p', () => {
    expect(wrapper.find('p').text()).to.equal('A productive web framework thatdoes not compromise speed and maintainability.')
  })
})
