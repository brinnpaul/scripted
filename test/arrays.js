var expect = require('chai').expect;
var assert = require('chai').assert;
var sinon = require('sinon');

var Arrays = require('../code/arrays');

describe('All About Arrays', function() {

    var sumArray = Arrays.sumArray;
    var greaterThanArray = Arrays.greaterThanArray;
    var evenCountArray = Arrays.evenCountArray;

    var spyOn = [sumArray, greaterThanArray, evenCountArray];
    var functions = ["forEach", "reduce", "filter", "map"];
    spyOn.forEach(array => {
        functions.forEach(f => {
            sinon.spy(array, f);
          });
      });

    describe("Get Value at an index", function() {
       xit("Value at index 3", function() {
         expect(Arrays.getValueAtIndex(sumArray, 3)).to.equal(4);
         });
       xit("Value at index 10", function() {
         expect(Arrays.getValueAtIndex(sumArray, 10)).to.equal(undefined);
         });
      });

    describe("Get Sum of numberArray", function() {
      xit("Sum value of numberArray should equal 10", function() {
        expect(Arrays.getSum(sumArray.slice())).to.equal(10);
        });
      });

    describe("Get Sum forEach", function() {
      xit("Get sum of numberArray using forEach method", function() {
        expect(Arrays.getSumForEach(sumArray)).to.equal(10);
        assert(Arrays.sumArray.forEach.calledOnce);
        });
      });

    describe("Get Sum reduce", function() {
      xit("Get sum of numberArray using reduce method", function() {
        expect(Arrays.getSumReduce(sumArray)).to.equal(10);
        assert(Arrays.sumArray.reduce.calledOnce);
      });
    });

    describe("Get Numbers greater than 3", function() {
        xit("Should equal [5,6], use filter method", function() {
          expect(Arrays.getNumbersGreaterThanFilter(greaterThanArray, 3)).to.eql([5,6]);
          assert(Arrays.greaterThanArray.filter.calledOnce);
          });

        xit("Should equal [5,6], use reduce method", function() {
          expect(Arrays.getNumbersGreaterThanReduce(greaterThanArray, 3)).to.eql([5,6]);
          assert(Arrays.greaterThanArray.reduce.calledOnce);
          });
      });

    describe("Get Even Numbers filter", function() {
        xit("Should equal 2, use filter method", function() {
          expect(Arrays.getEvenCountFilter(evenCountArray)).to.equal(2);
          assert(Arrays.evenCountArray.filter.calledOnce);
          });
      });

    describe("Get Even Numbers map", function() {
        xit("Should equal 2, use map method", function() {
          expect(Arrays.getEvenCountMap(evenCountArray)).to.equal(2);
          assert(Arrays.evenCountArray.map.calledOnce);
          });
      });
  });
