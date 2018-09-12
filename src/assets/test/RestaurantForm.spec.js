import React from 'react';
import { expect, assert, should } from 'chai';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow, mount, render } from 'enzyme';
import RestaurantForm from '../js/components/RestaurantForm';
import { spy } from 'sinon';

describe('RestaurantForm Component', () => {
    let wrapper;
    let responseState;

    beforeEach(() => {

        wrapper = mount(
            <RestaurantForm />
        )

        wrapper.setState({ 
            name: "Foo", 
            address1: "111 Main Street", 
            address2: 'address',
            city: 'New York',
            state: 'NY',
            phone: '212-222-2222',
            website: 'http://www.foo.com',
            submitted: false
        })
    })

    it('should have a title', () => {
        expect(wrapper.text()).to.have.string('Create a New Restaurant');
    });

    it('should have a name field', () => {
        expect(wrapper.find('input[name="name"]')).to.be.present()
        expect(wrapper.find('label[htmlFor="name"]')).to.be.present()
    });

    it('displays the correct name value', () => {
        expect(wrapper.find('input[name="name"]')).to.have.value('Foo');
    });

    it('handles changes to the name field', () => {
        wrapper.find('input[name="name"]').simulate('change', {target: {name: 'name', value: 'Bar'}});
        expect(wrapper.find('input[name="name"]')).to.have.value('Bar');
    });

    it('should have an address1 field', () => {
        expect(wrapper.find('input[name="address1"]')).to.be.present()
        expect(wrapper.find('label[htmlFor="address1"]')).to.be.present()
    });

    it('displays the correct address1 value', () => {
        expect(wrapper.find('input[name="address1"]')).to.have.value('111 Main Street');
    });

    it('handles changes to the address1 field', () => {
        wrapper.find('input[name="address1"]').simulate('change', {target: {name: 'address1', value: '222 Side Street'}});
        expect(wrapper.find('input[name="address1"]')).to.have.value('222 Side Street');
    });

    it('should have an address2 field', () => {
        expect(wrapper.find('input[name="address2"]')).to.be.present()
        expect(wrapper.find('label[htmlFor="address2"]')).to.be.present()
    });

    it('displays the correct address2 value', () => {
        expect(wrapper.find('input[name="address2"]')).to.have.value('address');
    });

    it('handles changes to the address2 field', () => {
        wrapper.find('input[name="address2"]').simulate('change', {target: {name: 'address2', value: 'address2'}});
        expect(wrapper.find('input[name="address2"]')).to.have.value('address2');
    });

    it('should have a city field', () => {
        expect(wrapper.find('input[name="city"]')).to.be.present()
        expect(wrapper.find('label[htmlFor="city"]')).to.be.present()
    });

    it('displays the correct city value', () => {
        expect(wrapper.find('input[name="city"]')).to.have.value('New York');
    });

    it('handles changes to the city field', () => {
        wrapper.find('input[name="city"]').simulate('change', {target: {name: 'city', value: 'Boston'}});
        expect(wrapper.find('input[name="city"]')).to.have.value('Boston');
    });

    it('should have a state field', () => {
        expect(wrapper.find('input[name="state"]')).to.be.present()
        expect(wrapper.find('label[htmlFor="state"]')).to.be.present()
    });

    it('displays the correct state value', () => {
        expect(wrapper.find('input[name="state"]')).to.have.value('NY');
    });

    it('handles changes to the state field', () => {
        wrapper.find('input[name="state"]').simulate('change', {target: {name: 'state', value: 'MA'}});
        expect(wrapper.find('input[name="state"]')).to.have.value('MA');
    });

    it('should have an phone field', () => {
        expect(wrapper.find('input[name="phone"]')).to.be.present()
        expect(wrapper.find('label[htmlFor="phone"]')).to.be.present()
    });

    it('displays the correct phone value', () => {
        expect(wrapper.find('input[name="phone"]')).to.have.value('212-222-2222');
    });

    it('handles changes to the phone field', () => {
        wrapper.find('input[name="phone"]').simulate('change', {target: {name: 'phone', value: '212-111-1111'}});
        expect(wrapper.find('input[name="phone"]')).to.have.value('212-111-1111');
    });

    it('should have an website field', () => {
        expect(wrapper.find('input[name="website"]')).to.be.present()
        expect(wrapper.find('label[htmlFor="website"]')).to.be.present()
    });

    it('displays the correct website value', () => {
        expect(wrapper.find('input[name="website"]')).to.have.value('http://www.foo.com');
    });

    it('handles changes to the website field', () => {
        wrapper.find('input[name="website"]').simulate('change', {target: {name: 'website', value: 'http://www.bar.com'}});
        expect(wrapper.find('input[name="website"]')).to.have.value('http://www.bar.com');
    });

    it('should have an submit button', () => {
        expect(wrapper.find('input[type="submit"]')).to.be.present()
    });

    it('triggers a submit event when submit is clicked', () => {
        const form = wrapper.find('form')
        expect(wrapper.state().submitted).to.equal(false)
        form.simulate('submit')
        expect(wrapper.state().submitted).to.equal(true)
    });
});