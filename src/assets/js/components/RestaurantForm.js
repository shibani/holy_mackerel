import React, { Component } from "react";
import { postToRestaurantsApi } from '../utils/fetch-utils';

const fetch = require('isomorphic-fetch');
let location = window.location.protocol + "//" + window.location.host;
let path = '/api/restaurants';
let restaurantsUrl = location + path;

class RestaurantForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address1: '',
            address2: '',
            city: '',
            state: '',
            phone: '',
            website: '',
            formSubmitted: false,
            errorStatus: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.processForPost = this.processForPost.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name] : event.target.value});
    }
    
    handleSubmit(event) {
        this.validateForm();
        event.preventDefault();
    }

    validateForm(){
        if(this.state.name.length < 5){
            this.setState({ errorStatus: 'Name is invalid' })
        } else {
            this.setState({ 
                errorStatus: false , 
                formSubmitted: true }, this.processForPost )
        }
    }

    processForPost() {
        const restaurant = this.state
        postToRestaurantsApi(restaurantsUrl, restaurant)
    }
    
    render(){
        
        return(
            <div className="create-restaurant">
                <h2>Create a New Restaurant</h2>
                { this.state.errorStatus && <p className="error">{this.state.errorStatus}</p> }
                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br />
                    <label htmlFor="address1">Address1:</label>
                    <input type="text" name="address1" value={this.state.address1} onChange={this.handleChange} />
                    <label htmlFor="address2">Address2:</label>
                    <input type="text" name="address2" value={this.state.address2} onChange={this.handleChange} />
                    <label htmlFor="city">City:</label>
                    <input type="text" name="city" value={this.state.city} onChange={this.handleChange} />
                    <label htmlFor="state">State:</label>
                    <input type="text" name="state" value={this.state.state} onChange={this.handleChange} />
                    <label htmlFor="phone">Phone:</label>
                    <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} />
                    <label htmlFor="website">Website:</label>
                    <input type="text" name="website" value={this.state.website} onChange={this.handleChange} />
                    <input type="submit" name="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default RestaurantForm;