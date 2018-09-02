import React, { Component } from "react";

export function fetchRestaurantsApi(url) {
    return fetch(url)
    .then(response => {
        if (response.ok) {
        return response;
      }
    })
    .then(response => response.json())
    .then(json => { return(json.data)})
}