import $ from 'jquery';
import localStorage from 'localStorage';

function addProducts(products){
  products.products.forEach(product => {
    if(product.quantity >= 1){
      appendListProducts(product);
    }
  });
}

function appendListProducts(product){
  product.unid = 1;
  var item = `<li>
  <div class="wrapimg">
      <div>
        <img src=${product.image} width="175" />
      </div>
      <div class="addPro"> 
      <a class="addCar" id=${product.id} > + Add ao carrinho</a> 
      </div>
  </div>
  <div class="titlePro">
    <a href="">${product.description}</a>
    <button class="btnUnidSub" id="${product.id}" > - </button><input type="text" class="${product.id}" readonly value="1"/><button class="btnUnidPlus" id="${product.id}"> + </button> <br>
    <span id="value${product.id}">R$ ${product.price}</span>
    
  </div>
</li>`;

  $('.list-products').append(item);
}

// add unid
$('.list-products').on('click', '.btnUnidPlus', function(){
  var unid = parseInt($(`.${this.id}`).val());
  var product = getProduct(this.id);
  if(product[0].quantity > 1 && unid < product[0].quantity) {
    unid += 1;
    $(`.${this.id}`).val(unid);
    
    var total = (parseFloat(product[0].price) * unid);
    $('#value'+this.id).text(`R$ ${total}`);
  }
});


// sub unid 
$('.list-products').on('click', '.btnUnidSub', function(){
  var unidOld = parseInt($(`.${this.id}`).val());
  var product = getProduct(this.id);
  if(unidOld > 1 && unidOld <= product[0].quantity) {
    var unid = unidOld - 1;
    $(`.${this.id}`).val(unid);
    var total = ((parseFloat(product[0].price) * unidOld) - parseFloat(product[0].price));
    $('#value'+this.id).text(`R$ ${total}`);
  }
});

// add to car
$('.list-products').on('click', '.addCar', function(){
  var unity = parseInt($(`.${this.id}`).val());
  var product = getProduct(this.id);
  addCar(product, unity);

  var listProduct = JSON.parse(localStorage.getItem('allProducts'));
  removeQuantityProduct(listProduct, unity, this.id);
});

// remove quantity if product add in car
function removeQuantityProduct(obj, unity, id) {
  obj.products.forEach(el => {
    if(el.id === id){
      el.quantity -= unity;
    }
  });
  
  localStorage.setItem('allProducts', JSON.stringify(obj));
}

// return product in array
function getProduct(id){
  var products = JSON.parse(localStorage.getItem('allProducts'));
  return products.products.filter(function(product){
    return product.id == id;
  });
}

// function add product to car
function addCar(product, unity){
  var car = JSON.parse(localStorage.getItem('car'));

  if (car === null) {
    product[0].quantity = unity;
    localStorage.setItem('car', JSON.stringify(product));
  } else {
    product[0].quantity = unity;
    if(car.length > 0){
      for (var x in car){
        if(car[x].id === product[0].id) {
          car[x].quantity += unity;
        } else {
          car.push(product[0]);
          break;
        }
        break;
      }
    } else {
      car.push(product[0]);
    }
    localStorage.setItem('car', JSON.stringify(car));
  }
  window.location.reload();
}

export { addProducts, getProduct, addCar };