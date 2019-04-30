'use strict';

import $ from 'jquery';

function appendListProducts(product){
  var item = `<li>
  <div class="wrapimg">
      <img src=${product.image} style="width:230px;"/>
      <div class="addPro"> <a class="addCard" id=${product.id} >+ Add to shopping cart</a> 
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
  addCard(product)
});


function getProduct(id){
  var products = JSON.parse(localStorage.getItem('allProducts'));
  return products.products.filter(function(product){
    return product.id == id;
  });
}

function addCard(product){
  localStorage.setItem('card', JSON.stringify(product));
}

export { appendListProducts };