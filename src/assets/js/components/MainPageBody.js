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
    this.state = {
      items : [],
      errorStatus: ''
     }
  }

  async componentDidMount() {
    try{
      const response = await fetchRestaurantsApi(restaurantsUrl)
      this.setState({items: response})
    } catch(err){
      this.setState({errorStatus: 'Error fetching restaurants'});
    }
  }

  render(){
    const { errorStatus, items } = this.state;

    return (
      <div className="contents">
        { errorStatus && <p className="error">{errorStatus}</p> }
        {<Restaurants listItems={items} />}
      </div>
    );
  }
}

export default MainPageBody;