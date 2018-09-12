import React, { Component } from "react";

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
            submitted: false,
            formErrors: {name: ''},
            nameValid: false,
            formValid: false
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name] : event.target.value});
    }
    
    handleSubmit(event) {
        this.setState({ submitted: true })
        console.log('A name was submitted: ' + this.state.name);
        console.log(this.state)
        event.preventDefault();
    }
    
    render(){
        return(
            <form onSubmit={ this.handleSubmit }>
                <h2>Create a New Restaurant</h2>
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
        );
    }
}

export default RestaurantForm;