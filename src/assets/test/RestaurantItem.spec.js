import React from 'react'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { expect, assert, should } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import RestaurantItem from '../js/components/RestaurantItem';
chai.use(chaiEnzyme())


const wrapper = mount(<MemoryRouter><RestaurantItem restId="3" name="foo" /></MemoryRouter>)

describe('Restaurant Item Component', () => {
  
  it('renders a list that contains restaurant names', () => {
    expect(wrapper.find('li').text()).to.equal('foo')
  })

  it('renders a list where each list item has an id', () => {
    expect(wrapper.find('li').first()).to.have.id('item-3')
  })

  it('renders a list where each list item is a link', () => {
    expect(wrapper.find('li').first()).to.have.id('item-3')
  })
})