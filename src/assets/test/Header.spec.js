import React from 'react'
import { expect, assert, should } from 'chai'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme'
import Header from '../js/components/Header'


const wrapper = shallow(<Header />)

describe('Header Component', () => {
  it('renders the header', () => {
    expect(wrapper.find('p.site-header').text()).to.equal('Holy Mackerel')
  })
  it('renders the site description', () => {
    expect(wrapper.find('p.site-description').text()).to.equal('A yelp for foodies')
  })
})
