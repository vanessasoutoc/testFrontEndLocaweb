import $ from 'jquery';

function addCars(cars){
  cars.forEach(car => {
    if(car.quantity >= 1){
      appendListCars(car);
    }
  });
}

function appendListCars(car){
  car.unid = 1;
  var item = `<li>
  <div class="wrapimg">
      <div>
        <img src=${car.image} width="175" />
      </div>
      <div class="addPro"> 
      <a class="addCar" id=${car.id} > + Add ao carrinho</a> 
      </div>
  </div>
  <div class="titlePro">
    <a class="icon-remove removeItemCar" id="${car.id}" style="float:right"></a>
    <a href="">${car.description}</a>
    <input type="text" class="${car.id}" readonly value="${car.quantity}"/><br>
    <span id="value${car.id}">R$ ${parseFloat(car.price) * parseFloat(car.quantity)}</span>
  </div>
</li>`;

  $('.list-cars').append(item);
}

// add unid
$('.list-cars').on('click', '.removeItemCar', function(){
  removeItemToCar(this.id);
});

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

export { addCars };