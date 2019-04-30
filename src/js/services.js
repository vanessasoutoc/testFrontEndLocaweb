'use strict';

var allProducts = async () => {
  return await fetch('http://demo3825282.mockable.io/carts/065fd718-f807-4788-96f1-ae8fac39361a').then(
    response => response.json()
  );
};

export { allProducts };