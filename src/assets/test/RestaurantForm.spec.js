import React from 'react';
import { expect, assert, should } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';
import chaiEnzyme from 'chai-enzyme';
import RestaurantForm from '../js/components/RestaurantForm';

const wrapper = shallow(<RestaurantForm />)

describe('RestaurantForm Component', () => {

});