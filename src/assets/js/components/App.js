import React, { Component } from "react";
import Jumbotron from "./Jumbotron";
import Restaurants from "./Restaurants";
import { fetchRestaurantsApi } from '../utils/fetch-utils';

const fetch = require('isomorphic-fetch');

let location = '';
const hostname = window && window.location && window.location.hostname;


if (hostname === 'localhost') {
  location = 'http://localhost:4000'
  console.log(location)
} else {
  location = 'https://holy-mackerel.gigalixirapp.com'
  console.log(location)
}

let path = '/api/restaurants';
let restaurantsUrl = location + path;

class App extends Component {
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
      <div className="app">
        <Jumbotron />
        <Restaurants listItems={this.state.items} />
      </div>
    );
  }
}

export default App; 