/* eslint-disable no-undef */
import { getProducts } from '../../src/js/controllers/products';
import { allProducts } from '../../src/js/services/services';

describe('get products in list and send to view',  () => {
  beforeEach(async () => {
    var products = await allProducts();

    localStorage.clear();

    localStorage.setItem('allProducts', JSON.stringify(products));
  });

  it('should return a list product to view', async () => {
    getProducts();
  });

});