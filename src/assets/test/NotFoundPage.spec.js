import React from 'react'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import { expect, assert, should } from 'chai'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';
import NotFoundPage from '../js/components/NotFoundPage';
chai.use(chaiEnzyme())

const wrapper = shallow(<NotFoundPage />)

describe('NotFoundPage Component', () => {
    it('renders 404 Page not found text', () => {
        expect(wrapper.find('.not-found')).to.contain.text("not found");
    });
});