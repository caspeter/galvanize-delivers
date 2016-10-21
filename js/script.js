// console.log('loaded');
$(document).ready(function() {
    $(".button-collapse").sideNav();
    $(".parallax").parallax();
});


var subtotal = document.querySelector('#subtotal');
var tax = document.querySelector('#tax');
var total = document.querySelector('#total');

subtotal.innerText = '$0.00';
tax.innerText = '$0.00';
total.innerText = '$0.00';
// var pricePattern = /([0-9\.]+)/g;

// var someRegEx = /[\w]/

// EVENT LISTENER FOR BURGER
var orderBurger = document.querySelector('#royaleCheese');

orderBurger.addEventListener ('click', function () {
  event.preventDefault();
  // Add row with data to table
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

  // Add price to subtotal
  //pricePattern says get the digits and decimals for whatever this is applyed to. the g means global
  var pricePattern = /([\d\.]+)/g;
  //remove $ using the regEx
  var matchesSubtotal = pricePattern.exec(subtotal.innerText);
  var subtotalNum = parseFloat(matchesSubtotal[1]);
  //add the shown price for one Royale to the current subtotal
  subtotalNum += 8.99;
  //make sure that it only returns two decimals
  var fixedSubNum = subtotalNum.toFixed(2)
  //add the fixedTaxNum to the tax inner text with a $
  subtotal.innerText = ('$' + fixedSubNum);

  //Add price to tax
  //remove $
  var sliceTax = tax.innerText.slice(1);
  //make sliceTax a number
  var taxNum = parseFloat(sliceTax);
  //add the tax for one Royale to the current tax
  taxNum += 0.26;
  //make sure that it only returns two decimals
  var fixedTaxNum = taxNum.toFixed(2);
  //add the fixedTaxNum to the tax inner text with a $
  tax.innerText = '$' + fixedTaxNum;

  //Add price to total
  //remove $
  var sliceTotal = total.innerText.slice(1);
  //make sliceTotal a number
  var totalNum = parseFloat(sliceTotal);
  //add the subtotal to the tax to the previous total
  totalNum += 9.25;
  //make sure that it only returns two decimals
  var fixedTotalNum = totalNum.toFixed(2);
  //add the fixedTaxNum to the tax inner text with a $
  total.innerText = '$' + fixedTotalNum;
});

// EVENT LISTENER FOR PIE
var orderPie = document.querySelector('#arugulaPie');

orderPie.addEventListener ('click', function () {
  event.preventDefault();
  // Add row with data to table
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

  // Add price to subtotal
  //pricePattern says get the digits and decimals for whatever this is applyed to. the g means global
  var pricePattern = /([\d\.]+)/g;
  //remove $ using the regEx
  var matchesSubtotal = pricePattern.exec(subtotal.innerText);
  var subtotalNum = parseFloat(matchesSubtotal[1]);
  //add the shown price for one Royale to the current subtotal
  subtotalNum += 11.99;
  //make sure that it only returns two decimals
  var fixedSubNum = subtotalNum.toFixed(2)
  //add the fixedTaxNum to the tax inner text with a $
  subtotal.innerText = ('$' + fixedSubNum);

  //Add price to tax
  //remove $
  var sliceTax = tax.innerText.slice(1);
  //make sliceTax a number
  var taxNum = parseFloat(sliceTax);
  //add the tax for one Royale to the current tax
  taxNum += 0.34;
  //make sure that it only returns two decimals
  var fixedTaxNum = taxNum.toFixed(2);
  //add the fixedTaxNum to the tax inner text with a $
  tax.innerText = '$' + fixedTaxNum;

  //Add price to total
  //remove $
  var sliceTotal = total.innerText.slice(1);
  //make sliceTotal a number
  var totalNum = parseFloat(sliceTotal);
  //add the subtotal to the tax to the previous total
  totalNum += 12.33;
  //make sure that it only returns two decimals
  var fixedTotalNum = totalNum.toFixed(2);
  //add the fixedTaxNum to the tax inner text with a $
  total.innerText = '$' + fixedTotalNum;
});

// EVENT LISTENER FOR SMOKED SWINE
var orderSwine = document.querySelector('#smokedSwine');

orderSwine.addEventListener ('click', function () {
  event.preventDefault();
  // Add row with data to table
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

  // Add price to subtotal
  //pricePattern says get the digits and decimals for whatever this is applyed to. the g means global
  var pricePattern = /([\d\.]+)/g;
  //remove $ using the regEx
  var matchesSubtotal = pricePattern.exec(subtotal.innerText);
  var subtotalNum = parseFloat(matchesSubtotal[1]);
  //add the shown price for one Royale to the current subtotal
  subtotalNum += 14.99;
  //make sure that it only returns two decimals
  var fixedSubNum = subtotalNum.toFixed(2)
  //add the fixedTaxNum to the tax inner text with a $
  subtotal.innerText = ('$' + fixedSubNum);

  //Add price to tax
  //remove $
  var sliceTax = tax.innerText.slice(1);
  //make sliceTax a number
  var taxNum = parseFloat(sliceTax);
  //add the tax for one Royale to the current tax
  taxNum += 0.43;
  //make sure that it only returns two decimals
  var fixedTaxNum = taxNum.toFixed(2);
  //add the fixedTaxNum to the tax inner text with a $
  tax.innerText = '$' + fixedTaxNum;

  //Add price to total
  //remove $
  var sliceTotal = total.innerText.slice(1);
  //make sliceTotal a number
  var totalNum = parseFloat(sliceTotal);
  //add the subtotal to the tax to the previous total
  totalNum += 15.42;
  //make sure that it only returns two decimals
  var fixedTotalNum = totalNum.toFixed(2);
  //add the fixedTaxNum to the tax inner text with a $
  total.innerText = '$' + fixedTotalNum;
});

// EVENT LISTENER FOR ICE CREAM
var orderIceCream = document.querySelector('#iceCream');

orderIceCream.addEventListener ('click', function () {
  event.preventDefault();
  // Add row with data to table
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

  // Add price to subtotal
  //pricePattern says get the digits and decimals for whatever this is applyed to. the g means global
  var pricePattern = /([\d\.]+)/g;
  //remove $ using the regEx
  var matchesSubtotal = pricePattern.exec(subtotal.innerText);
  var subtotalNum = parseFloat(matchesSubtotal[1]);
  //add the shown price for one Royale to the current subtotal
  subtotalNum += 7.99;
  //make sure that it only returns two decimals
  var fixedSubNum = subtotalNum.toFixed(2)
  //add the fixedTaxNum to the tax inner text with a $
  subtotal.innerText = ('$' + fixedSubNum);

  //Add price to tax
  //remove $
  var sliceTax = tax.innerText.slice(1);
  //make sliceTax a number
  var taxNum = parseFloat(sliceTax);
  //add the tax for one Royale to the current tax
  taxNum += 0.23;
  //make sure that it only returns two decimals
  var fixedTaxNum = taxNum.toFixed(2);
  //add the fixedTaxNum to the tax inner text with a $
  tax.innerText = '$' + fixedTaxNum;

  //Add price to total
  //remove $
  var sliceTotal = total.innerText.slice(1);
  //make sliceTotal a number
  var totalNum = parseFloat(sliceTotal);
  //add the subtotal to the tax to the previous total
  totalNum += 8.22;
  //make sure that it only returns two decimals
  var fixedTotalNum = totalNum.toFixed(2);
  //add the fixedTaxNum to the tax inner text with a $
  total.innerText = '$' + fixedTotalNum;
});

// ORDER BUTTON EVENT LISTENER
var placeOrder = document.querySelector('#placeOrder');

var nameInput = document.querySelector('#name');
var phoneInput = document.querySelector('#phone_number');
var addressInput = document.querySelector('#address')

placeOrder.addEventListener('click', function () {
  if (total.innerText === '$0.00') {
    Materialize.toast('Cannot place an empty order.', 4000, 'pink')
  }
  if (nameInput.value === '') {
    Materialize.toast('Please enter your name.', 4000, 'pink')
  }
  if (phoneInput.value === '') {
    Materialize.toast('Please enter your phone number.', 4000, 'pink')
  }
  if (addressInput.value === '') {
    Materialize.toast('Please enter your address.', 4000, 'pink')
  }
})
