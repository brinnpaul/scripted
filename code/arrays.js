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
  // ForEach Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
}

function getSumReduce(array) {
  // Your code here
  // You have to use the reduce method to pass the test!
  // Test based on sumArray
  // Reduce Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
}


var greaterThanArray = [0,2,5,6];

function getNumbersGreaterThanFilter(array, value) {
  // Your code here
  // You have to use the filter method to pass the test!
  // Test based on greaterThanArray
  // Filter Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
}

function getNumbersGreaterThanReduce(array, value) {
  // Your code here
  // You have to use the reduce method to pass the test!
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
  // Map Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
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
  getNumbersGreaterThanFilter: getNumbersGreaterThanFilter,
  getNumbersGreaterThanReduce: getNumbersGreaterThanReduce,
  getEvenCountFilter: getEvenCountFilter,
  getEvenCountMap: getEvenCountMap
};
