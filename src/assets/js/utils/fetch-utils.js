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

export function postToRestaurantsApi(url, json){
    return fetch(url, {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({ restaurant: json}),
    })
    .then(response => {
        if (response.ok) {
            return response;
        }
    })
}
    