import React, { Component } from "react";
import RestaurantItem from './RestaurantItem'

class Restaurants extends Component {
  render(){
    const { listItems } = this.props;

    return (
      <div className="restaurants">
        <ul>
          {
            listItems.map((el) => {
            return <RestaurantItem
            key={el.id}
            restId={el.id}
            name={el.name}
            ></RestaurantItem>
            })
          }
        </ul>
      </div>
    );
  }
}

export default Restaurants;