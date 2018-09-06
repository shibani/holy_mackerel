import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { friendlyize } from '../utils/string-utils';

class RestaurantItem extends Component {

  render(){
    const { restId, name  } = this.props;

    const linkTo = { 
      pathname: "/restaurants/" + friendlyize(name), 
      state: {id: restId}
    };

    return (
      <li 
      className="RestaurantItem" 
      id={`item-${restId}`} 
      key={restId}>
      <Link to={linkTo}>{ name }</Link>
      </li>
    );
  }
}

export default RestaurantItem;