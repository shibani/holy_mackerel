import React, { Component } from "react";
import Restaurants from "./Restaurants";
import { fetchRestaurantsApi } from '../utils/fetch-utils';

const fetch = require('isomorphic-fetch');
let location = window.location.protocol + "//" + window.location.host;
let path = '/api/restaurants';
let restaurantsUrl = location + path;

class MainPageBody extends Component {
  constructor(props){
    super(props);
    this.state = {items : [] }
  }

  componentDidMount() {
    this.loadData(restaurantsUrl);
  }

  loadData(url) {
    fetchRestaurantsApi(url)
      .then(response => this.setState({ items: response })
    )
  }

  render(){
    return (
      <div className="contents">
        {<Restaurants listItems={this.state.items} />}
      </div>
    );
  }
}

export default MainPageBody;