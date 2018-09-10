import React, { Component } from "react";
import { fetchRestaurantsApi } from '../utils/fetch-utils';

const fetch = require('isomorphic-fetch');
let location = window.location.protocol + "//" + window.location.host;
let path = '/api/restaurants/';

class RestaurantDetail extends Component {
  constructor(props){
    super(props);
    this.state = { restaurant: {} }
  }

  componentDidMount () {
    const name = this.props.match.params.id
    this.loadData(name);
  }

  loadData(name) {
    let restaurantUrl = location + path + name;
    console.log("url: " + restaurantUrl)
    fetchRestaurantsApi(restaurantUrl)
      .then(response => this.setState({ restaurant: response })
    )
  }

  render(){
    return (
      <div className="restaurant-detail">
      <span className="name">{this.state.restaurant.name}</span><br />
      <span className="address1">{this.state.restaurant.address1}</span><br />
      <span className="address2">{this.state.restaurant.address2 ? this.state.restaurant.address2.length + <br /> : ''}</span>
      <span className="city-state">{this.state.restaurant.city}, {this.state.restaurant.state}</span><br />
      <span className="phone">Ph: {this.state.restaurant.phone}</span><br />
      <span className="website"><a href={this.state.restaurant.website}>{this.state.restaurant.website}</a></span>
      </div>
    );
  }
};

export default RestaurantDetail;