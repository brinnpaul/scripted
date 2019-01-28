'use strict';


var sumArray = [1,2,3,4];

function getValueAtIndex(array, index) {
  // Your code here
  // Test based on sumArray
}

function getSum(array) {
  // Your code here
  // Get the sum of the array anyway you want!
  // Test based on sumArra
}

function getSumForEach(array) {
  // Your code here
  // You have to use the forEach method to pass the test!
  // Test based on sumArray
}

function getSumReduce(array) {
  // Your code here
  // You have to use the reduce method to pass the test!
  // Test based on sumArray
}


var greaterThanArray = [0,2,5,6];

function getNumbersGreaterThan(array, value) {
  // Your code here
  // You have to use the filter method to pass the test!
  // Test based on greaterThanArray
}


var evenCountArray = [2,3,4,7];

function getEvenCountFilter(array) {
  // Your code here
  // You have to use the filter method to pass the test!
  // Test based on evenCountArray
}

// helper method for getEvenCountFilter
function isEven(number) {
  // A number is even if its remainder when divided by 2 is 0
  return number % 2 == 0;
}

function getEvenCountMap(array) {
  // Your code here
  // You have to use the map method to pass the test!
  // Test based on evenCountArray
}

// helper method for getEvenCountMap
function evenModulo(number) {
  // the remainer of a number divided by 2 is either 0 or 1
  return number % 2;
}

module.exports = {
  sumArray: sumArray,
  greaterThanArray: greaterThanArray,
  evenCountArray: evenCountArray,
  getValueAtIndex: getValueAtIndex,
  getSum: getSum,
  getSumForEach: getSumForEach,
  getSumReduce: getSumReduce,
  getNumbersGreaterThan: getNumbersGreaterThan,
  getEvenCountFilter: getEvenCountFilter,
  getEvenCountMap: getEvenCountMap
};
