import $ from 'jquery';
import { allCars } from '../services/services';
import { addCars } from '../business/cars';

$('.view a').on('click', function(){
  $('.cars ul').toggleClass('list');
  return false;
});

async function getCars(){
  var cars = await allCars();
  addCars(cars);
}

getCars();