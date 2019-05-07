import $ from 'jquery';

function addProducts(products){
  products.products.forEach(product => {
    if(product.quantity >= 1){
      appendListProducts(product);
    }
  });
}

function appendListProducts(product){
  var item = `<li>
  <div class="wrapimg">
      <div style="background-image: url('${product.image}')">
        <!--<img src=${product.image} style="width:230px;height: auto;"/>-->
      </div>
      <div class="addPro"> 
      <a class="addCard" id=${product.id} > + Add ao carrinho</a> 
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

$('.list-products').on('click', '.addCard', function(){
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