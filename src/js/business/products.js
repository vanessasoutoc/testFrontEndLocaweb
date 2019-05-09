import { appendListProducts } from '../../views/products';

function addProducts(products){
  products.products.forEach(product => {
    if(product.quantity >= 1){
      appendListProducts(product);
    }
  });
}

// remove quantity if product add in car
function removeQuantityProduct(obj, unity, id) {
  obj.products.forEach(el => {
    if(el.id === id){
      el.quantity -= unity;
    }
  });
  
  localStorage.setItem('allProducts', JSON.stringify(obj));
}

// return product in array
function getProduct(id){
  var products = JSON.parse(localStorage.getItem('allProducts'));
  return products.products.filter(function(product){
    return product.id == id;
  });
}

// function add product to car
function addCar(product, unity){
  var car = JSON.parse(localStorage.getItem('car'));

  if (car === null) {
    product[0].quantity = unity;
    localStorage.setItem('car', JSON.stringify(product));
  } else {
    product[0].quantity = unity;
    if(car.length > 0){
      for (var x in car){
        if(car[x].id === product[0].id) {
          car[x].quantity += unity;
        } else {
          car.push(product[0]);
          break;
        }
        break;
      }
    } else {
      car.push(product[0]);
    }
    localStorage.setItem('car', JSON.stringify(car));
  }
  window.location.reload();
}

export { addProducts, getProduct, addCar, removeQuantityProduct };