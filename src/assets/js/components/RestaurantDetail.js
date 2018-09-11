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

  async loadData(name) {
    let restaurantUrl = location + path + name;
    try{
      const response = await fetchRestaurantsApi(restaurantUrl)
      this.setState({restaurant: response})
    } catch(err){
      this.setState({errorStatus: 'Error fetching restaurant'});
    }
  }

  render(){
    const { errorStatus, restaurant } = this.state;
    return (
      <div className="restaurant-detail">
      { errorStatus && <p className="error">{errorStatus}</p> }
      <span className="name">{restaurant.name}</span><br />
      <span className="address1">{restaurant.address1}</span><br />
      <span className="address2">{restaurant.address2 ? restaurant.address2.length + <br /> : ''}</span>
      <span className="city-state">{restaurant.city}, {restaurant.state}</span><br />
      <span className="phone">Ph: {restaurant.phone}</span><br />
      <span className="website"><a href={restaurant.website}>{restaurant.website}</a></span>
      </div>
    );
  }
};

export default RestaurantDetail;