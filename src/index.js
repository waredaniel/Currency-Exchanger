import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './ExchangeRate.js';

function getExchangeRate(response) {
  if (response) {
    $('.showCost').html(`<p>${response.conversion_result} ${response.target_code}</p>`);
  } else {
    $('showError').text("Error- we could locate that currency.");
  }
}



async function makeApiCall (suppliedCurrency, desiredCurrency, transactionAmount) {
  const response = await ExchangeRate.getExchangeRate(suppliedCurrency, desiredCurrency, transactionAmount);
  getExchangeRate(response);
}

$(document).ready(function() {
  $("#submit").click(() => {
    let transactionAmount = $('#transactionAmount').val();
    let suppliedCurrency = $('#suppliedCurrency').val();
    let desiredCurrency = $('#desiredCurrency').val();
    makeApiCall(suppliedCurrency, desiredCurrency, transactionAmount);
  });
});
