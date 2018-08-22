import React from 'react'
import { expect, assert, should } from 'chai'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme'
import Jumbotron from '../js/components/Jumbotron'


const wrapper = shallow(<Jumbotron />)

describe('Jumbotron Component', () => {
  it('renders p.header', () => {
    expect(wrapper.find('p.header').text()).to.equal('Holy Mackerel')
  })
  // it('renders p', () => {
  //   expect(wrapper.find('p').text()).to.equal('A productive web framework that does not compromise speed and fun times.')
  // })
})
