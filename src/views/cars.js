import $ from 'jquery';
import { removeItemToCar } from '../js/business/cars';

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
  <div class="cars-titlePro">
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

export { appendListCars };