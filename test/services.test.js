import { allProducts } from '../src/js/services/services'

describe('return products list', () => {
    it('should return a list product > 0', async () => {
      var products = await allProducts();
      expect(products.products.length).toBeGreaterThan(0);
    })
})