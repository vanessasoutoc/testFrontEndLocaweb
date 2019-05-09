import $ from 'jquery';
import { allProducts } from '../services/services';
import { addProducts } from '../business/products';

$('a.list').on('click', function(){
  $('.products ul').toggleClass('list');
  return false;
});

$('a.grid').on('click', function(){
  $('.products ul').toggleClass('list');
  return false;
});

async function getProducts(){
  var idListProducts = JSON.parse(localStorage.getItem('allProducts')) ? JSON.parse(localStorage.getItem('allProducts')).id : null ;
  
  var products;
  if (idListProducts == null) {
    products = await allProducts();
    localStorage.setItem('allProducts', JSON.stringify(products));
  } else {
    products = JSON.parse(localStorage.getItem('allProducts'));
  }
  addProducts(products);
}

getProducts();