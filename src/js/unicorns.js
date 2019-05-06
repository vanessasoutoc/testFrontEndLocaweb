console.log('Hello, unicorns!')
import $ from 'jquery';
import { products } from './services';
/*
 @ElmahdiMahmoud
 May 19, 2013
*/
$('.view a').on('click', function(){
  $('.products ul').toggleClass('list');
  return false;
});

/* var prod = async () => {
  return await products().then(
  (result) => {
    console.log(result)
    return result;
  }).catch((error) => { return error;});
}*/

async function appendProduct() {
  var prod = products;
};
appendProduct(); 