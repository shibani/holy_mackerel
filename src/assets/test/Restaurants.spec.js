import React from 'react'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { expect, assert, should } from 'chai'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme'
import Restaurants from '../js/components/Restaurants'
import RestaurantItem from '../js/components/RestaurantItem'
chai.use(chaiEnzyme())


const listItems = [ 
  { id: 0, name:'Balthazar' }, 
  { id: 1, name:'Momofuku' }, 
  { id: 2, name:'Five Leaves' }
]
const wrapper = mount(<Restaurants listItems={listItems} />)

describe('Restaurants Component', () => {
  it('renders three <RestaurantItems /> components', () => {
    expect(wrapper.find(RestaurantItem)).to.have.lengthOf(3);
  });

  it('each component is wrapped in an li tag', () => {
    expect(wrapper.find('#item-0')).to.have.tagName('li')
  });

  it('renders a list that contains Balthazar', () => {
    expect(wrapper.find('#item-0')).to.have.text('Balthazar');
  })

  it('renders a list that contains Momofuku Ssam', () => {
    expect(wrapper.find('#item-1')).to.have.text('Momofuku')
  })

  it('renders a list that contains Five Leaves', () => {
    expect(wrapper.find('#item-2')).to.have.text('Five Leaves')
  })
})