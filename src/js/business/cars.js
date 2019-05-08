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
    <a href="">${car.description}</a>
    <button class="btnUnidSub" id="${car.id}" > - </button><input type="text" class="${car.id}" readonly value="1"/><button class="btnUnidPlus" id="${car.id}"> + </button> <br>
    <span id="value${car.id}">R$ ${car.price}</span>
    
  </div>
</li>`;

  $('.list-cars').append(item);
}

export { addCars };