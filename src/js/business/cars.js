import { appendListCars } from '../../views/cars';

function addCars(cars){
  cars.forEach(car => {
    if(car.quantity >= 1){
      appendListCars(car);
    }
  });
}

// remove item to car
function removeItemToCar(id){
  var cars = JSON.parse(localStorage.getItem('car'));
  var car = getCar(id);
  var carsNew = cars.filter(function(car){
    return car.id !== id;
  });
  localStorage.setItem('car', JSON.stringify(carsNew));
  addQauntityProduct(car[0].id, car[0].quantity);
  window.location.reload();
}

// add quantity to list product
function addQauntityProduct(id, quantity){
  var products = JSON.parse(localStorage.getItem('allProducts'));
  products.products.forEach(product=>{
    if (product.id === id) {
      product.quantity = quantity;
    }
  });

  localStorage.setItem('allProducts', JSON.stringify(products));
}

// return product in array
function getCar(id){
  var cars = JSON.parse(localStorage.getItem('car'));
  return cars.filter(function(car){
    return car.id == id;
  });
}

export { addCars, removeItemToCar };