import React, { Component } from "react";

class RestaurantItem extends Component {
  render(){
    const { restId, name } = this.props;

    return (
      <li 
      className="RestaurantItem" 
      id={`item-${restId}`} 
      key={restId}>
      { name }
      </li>
    );
  }
}

export default RestaurantItem;