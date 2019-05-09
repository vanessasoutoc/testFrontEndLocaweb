import $ from 'jquery';
import { getProduct, addCar, removeQuantityProduct} from '../js/business/products';

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

export { appendListProducts };