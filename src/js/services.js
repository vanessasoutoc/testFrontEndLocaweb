"use strict";

function getJSON(URL) {
  return fetch(URL);
}

var products = getJSON("http://demo3825282.mockable.io/carts/065fd718-f807-4788-96f1-ae8fac39361a")
.then(function(res) {
  return res.json();
}).then(function(json) {
  console.log('Success: ', json);
})
.catch(function(error) {
  console.log('Error: ', error);
}); 

export { products };


