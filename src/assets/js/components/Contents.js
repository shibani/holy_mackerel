import React, { Component } from "react";
import Restaurants from "./Restaurants";
import { fetchRestaurantsApi } from '../utils/fetch-utils';

const fetch = require('isomorphic-fetch');
let location = '';
const hostname = window && window.location && window.location.hostname;

if (hostname === 'localhost') {
  location = 'http://localhost:4000'
} else {
  location = 'https://holy-mackerel.gigalixirapp.com'
}

let path = '/api/restaurants';
let restaurantsUrl = location + path;

class Contents extends Component {
  constructor(props){
    super(props);
    this.state = {items : [] }
  }

  componentDidMount() {
    this.loadData('restaurants');
  }

  loadData(context) {
    if(context == 'restaurants'){
      fetchRestaurantsApi(restaurantsUrl)
      .then(response => this.setState({ items: response })
    )}
  }

  render(){
    return (
      <div className="contents">
        {<Restaurants listItems={this.state.items} />}
      </div>
    );
  }
}

export default Contents;