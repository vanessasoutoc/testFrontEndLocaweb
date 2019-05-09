import $ from 'jquery';
import { allCars } from '../services/services';
import { addCars } from '../business/cars';

$('a.list').on('click', function(){
  $('.cars ul').toggleClass('list');
  return false;
});

$('a.grid').on('click', function(){
  $('.cars ul').toggleClass('list');
  return false;
});

async function getCars(){
  var cars = await allCars();
  addCars(cars);
}

getCars();