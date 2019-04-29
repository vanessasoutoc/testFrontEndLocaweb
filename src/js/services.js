"use strict";
const $ = require('jquery');
/*
 @ElmahdiMahmoud
 May 19, 2013
*/
$('.view a').on('click', function(){
  $('.products ul').toggleClass('list');
  return false;
});

async function logger()  {
  try {
    var products = fetch('http://demo3825282.mockable.io/carts/065fd718-f807-4788-96f1-ae8fac39361a').then(
      (result) => { return result.json(); }
    );
    return products;
  }
  catch (error) {
    console.error('Error:', error) 
  }
}
var prod = logger().then(result => {return result;});
console.log(prod);

