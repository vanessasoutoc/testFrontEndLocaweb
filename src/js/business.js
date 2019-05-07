'use strict';

import $ from 'jquery';

function appendListProducts(product){
  var item = `<li>
  <div class="wrapimg">
      <div style="background-image: url('${product.image}')">
        <!--<img src=${product.image} style="width:230px;height: auto;"/>-->
      </div>
      <div class="addPro"> 
      <a class="addCard" id=${product.id} >+ Add to shopping cart</a> 
      </div>
  </div>
  <div class="titlePro">	<a href="">${product.description}</a>
<span>R$ ${product.price}</span>

      <p class="descTitle">${product.description}</p>
      <p></p>
  </div>
</li>`;

  $('.list-products').append(item);
}

$('.addCard').on((e)=>{
  console.log(e)
});

$('.list-products').on('click', '.addCard', function(){
  console.log(this.id);
  var product = getProduct(this.id);
  addCard(product);

  var listProduct = JSON.parse(localStorage.getItem('allProducts'));
  removeQuantityProduct(listProduct, this.id);
});

function removeQuantityProduct(obj, id) {
  obj.products.forEach(el => {
    if(el.id === id){
      el.quantity -= 1;
    }
  });
  console.log('prods', obj);
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
  if (card == null) {
    localStorage.setItem('card', JSON.stringify(product));
  } else {
    card.push(product[0]);
  }
  
}

export { appendListProducts };