// console.log('loaded');
$(document).ready(function() {
    $(".button-collapse").sideNav();
    $(".parallax").parallax();
});


var subtotal = document.querySelector('#subtotal');
var tax = document.querySelector('#tax')
var total = document.querySelector('#total')

// EVENT LISTENER FOR BURGER
var orderBurger = document.querySelector('#royaleCheese');

orderBurger.addEventListener ('click', function () {
  var createTR = document.createElement('tr')
  var tdProduct = document.createElement('td');
  tdProduct.innerText = 'Royale with Cheese';
  createTR.appendChild(tdProduct);
  var tdPrice = document.createElement('td');
  tdPrice.innerText = '$8.99';
  tdPrice.classList.add('right-align');
  createTR.appendChild(tdPrice);
  var table = document.querySelector('#table');
  table.appendChild(createTR);
  subtotal.innerText += 8.99;
  tax.innerText += 0.63;
  total.innerText += 9.62;
});

// EVENT LISTENER FOR PIE
var orderPie = document.querySelector('#arugulaPie');

orderPie.addEventListener ('click', function () {
  var createTR = document.createElement('tr')
  var tdProduct = document.createElement('td');
  tdProduct.innerText = 'Arugula Pie';
  createTR.appendChild(tdProduct);
  var tdPrice = document.createElement('td');
  tdPrice.innerText = '$11.99';
  tdPrice.classList.add('right-align');
  createTR.appendChild(tdPrice);
  var table = document.querySelector('#table');
  table.appendChild(createTR);
});

// EVENT LISTENER FOR SMOKED SWINE
var orderSwine = document.querySelector('#smokedSwine');

orderSwine.addEventListener ('click', function () {
  var createTR = document.createElement('tr')
  var tdProduct = document.createElement('td');
  tdProduct.innerText = 'Smoked Swine';
  createTR.appendChild(tdProduct);
  var tdPrice = document.createElement('td');
  tdPrice.innerText = '$14.99';
  tdPrice.classList.add('right-align');
  createTR.appendChild(tdPrice);
  var table = document.querySelector('#table');
  table.appendChild(createTR);
});

// EVENT LISTENER FOR ICE CREAM
var orderIceCream = document.querySelector('#iceCream');

orderIceCream.addEventListener ('click', function () {
  var createTR = document.createElement('tr')
  var tdProduct = document.createElement('td');
  tdProduct.innerText = 'Ice Cream Biscut';
  createTR.appendChild(tdProduct);
  var tdPrice = document.createElement('td');
  tdPrice.innerText = '$7.99';
  tdPrice.classList.add('right-align');
  createTR.appendChild(tdPrice);
  var table = document.querySelector('#table');
  table.appendChild(createTR);
});

// ORDER BUTTON EVENT LISTENER
var placeOrder = document.querySelector('#placeOrder');
