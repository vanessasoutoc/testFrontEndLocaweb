/* eslint-disable no-undef */
import { getProduct, addProducts } from '../../src/js/business/products';
import { allProducts } from '../../src/js/services/services';

describe('return products list', () => {
  beforeEach(async () => {
    var products = await allProducts();

    localStorage.clear();

    localStorage.setItem('allProducts', JSON.stringify(products));
  });

  it('should return a list product on local > 0', async () => {
    
    var products = JSON.parse(localStorage.getItem('allProducts'));

    expect(products.products.length).toEqual(5);
  });

  it('should return first product id in list localStorage equal first product id in json', async () => {
    var productsService = await allProducts();
    var products = JSON.parse(localStorage.getItem('allProducts'));

    expect(products.products[0].id).toEqual(productsService.products[0].id);
  });

  it('should return product with function getProduct', async () => {
    var productsService = await allProducts();
    var product = getProduct(productsService.products[0].id);

    expect(product[0].id).toEqual(productsService.products[0].id);
  });
});




