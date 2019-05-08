var allProducts = async () => {
  return await fetch('http://demo3825282.mockable.io/carts/065fd718-f807-4788-96f1-ae8fac39361a').then(
    response => response.json()
  ).catch((e)=>{
    return JSON.parse(localStorage.getItem('allProducts'));
  });
};

var allCars = async () => {
  return await JSON.parse(localStorage.getItem('car'));
};

module.exports = { allProducts, allCars };