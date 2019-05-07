import $ from 'jquery';

function addProducts(products){
  products.products.forEach(product => {
    if(product.quantity >= 1){
      appendListProducts(product);
    }
  });
}

function appendListProducts(product){
  console.log('prod', product);
  product.unid = 1;
  var item = `<li>
  <div class="wrapimg">
      <div>
        <img src=${product.image} width="175" />
      </div>
      <div class="addPro"> 
      <a class="addCard" id=${product.id} > + Add ao carrinho</a> 
      </div>
  </div>
  <div class="titlePro">
    <a href="">${product.description}</a>
    <span>R$ ${product.price * product.unid}</span> <br>
    <button class="btnUnid"> - </button><input type="text" class="${product.id}" value="1"/><button class="btnUnidPlus" id="${product.id}"> + </button>
  </div>
</li>`;

  $('.list-products').append(item);
}

$('.list-products').on('click', '.btnUnidPlus', function(){
  var unid = $(`.${this.id}`).val()
  console.log(parseInt() += 1);
});

$('.list-products').on('click', '.addCard', function(){
  var product = getProduct(this.id);
  addCard(product);

  var listProduct = JSON.parse(localStorage.getItem('allProducts'));
  removeQuantityProduct(listProduct, this.id);
});

function btnUnidPlus(){
  console.log('onclick');
}

function removeQuantityProduct(obj, id) {
  obj.products.forEach(el => {
    if(el.id === id){
      el.quantity -= 1;
    }
  });
  
  localStorage.setItem('allProducts', JSON.stringify(obj));
}

function getProduct(id){
  var products = JSON.parse(localStorage.getItem('allProducts'));
  return products.products.filter(function(product){
    return product.id == id;
  });
}

function addCard(product){
  var card = JSON.parse(localStorage.getItem('card'));
  if (card === null) {
    product[0].quantity = 1;
    localStorage.setItem('card', JSON.stringify(product));
  } else {
    for (var x in card){
      if(card[x].id === product[0].id) {
        card[x].quantity += 1;
      } else {
        card.push(product[0]);
        break;
      }
      break;
    }
    localStorage.setItem('card', JSON.stringify(card));
  }
  window.location.reload();
}

export { addProducts };