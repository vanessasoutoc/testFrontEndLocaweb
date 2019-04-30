import $ from 'jquery';
import { allProducts } from './services';
import { appendListProducts } from './business';

$('.view a').on('click', function(){
  $('.products ul').toggleClass('list');
  return false;
});

async function getProducts(){
  var idListProducts = JSON.parse(localStorage.getItem('allProducts')) ? JSON.parse(localStorage.getItem('allProducts')).id : null ;
  
  var products = await allProducts();
  if (idListProducts === null || idListProducts != products.id) {
    localStorage.setItem('allProducts', JSON.stringify(products));
  }
  
  products.products.forEach(product => {
    appendListProducts(product);
  });
}

getProducts();