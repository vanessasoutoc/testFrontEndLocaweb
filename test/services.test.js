/* eslint-disable no-undef */
import { allProducts, allCars } from '../src/js/services/services';

describe('return products list', () => {
  it('should return a list product > 0', async () => {
    var products = await allProducts();
    expect(products.products.length).toBeGreaterThan(0);
  });
});

describe('return list product add in car localstorage', () => {
  beforeEach(async () => {
    var products = await allProducts();
    var cars = [];
    cars.push(products.products[0]);

    localStorage.clear();

    localStorage.setItem('allProducts', JSON.stringify(products));

    localStorage.setItem('car', JSON.stringify(cars));
  });

  it('should return a list cars in localstorage', async () => {
    var cars = await allCars();

    expect(cars.length).toBeGreaterThan(0);
  });
});