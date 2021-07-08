import React from 'react'
import { expect, assert, should } from 'chai'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';
import { Route, Link, MemoryRouter } from 'react-router-dom'
import Footer from '../js/components/Footer'


const wrapper = shallow(<Footer />)

describe('Footer Component', () => {

  it('has a link to the homepage', () => {
    expect(wrapper.find('ul li').first()).to.have.html('<li><Link to="/" replace={false}>Home</Link></li>');
  });
})
