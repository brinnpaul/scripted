var expect = require('chai').expect;
var assert = require('chai').assert;
var sinon = require('sinon');

var Arrays = require('../code/arrays');

describe('All About Arrays', function() {

    var numbers = Arrays.numberArray;
    sinon.spy(Arrays.numberArray, "forEach");
    sinon.spy(Arrays.numberArray, "reduce");
    sinon.spy(Arrays.numberArray, "filter");
    sinon.spy(Arrays.numberArray, "map");

    describe("Get Value at an index", function() {
       xit("Value at index 3", function() {
         expect(Arrays.getValueAtIndex(numbers, 3)).to.equal(4);
         });
       xit("Value at index 10", function() {
         expect(Arrays.getValueAtIndex(numbers, 10)).to.equal(undefined);
         });
      });

    describe("Get Sum of numberArray", function() {
      xit("Sum value of numberArray should equal 10", function() {
        expect(Arrays.getSum(numbers)).to.equal(10);
        });
      });

    describe("Get Sum forEach", function() {
      xit("Get sum of numberArray using forEach method", function() {
        expect(Arrays.getSumForEach(Arrays.numberArray)).to.equal(10);
        assert(Arrays.numberArray.forEach.calledOnce);
        });
      });

    describe("Get Sum reduce", function() {
      xit("Get sum of numberArray using reduce method", function() {
        expect(Arrays.getSumReduce(Arrays.numberArray)).to.equal(10);
        assert(Arrays.numberArray.reduce.calledOnce);
      });
    });

    describe("Get Numbers greater than 3", function() {
        xit("Should equal [4], use filter method", function() {
          expect(Arrays.getNumbersGreaterThan(numbers, 3)).to.eql([4]);
          assert(Arrays.numberArray.filter.calledOnce);
          });
      });

    describe("Get Even Numbers filter", function() {
        xit("Should equal 2, use filter method", function() {
          expect(Arrays.getEvenCountFilter(numbers)).to.equal(2);
          assert(Arrays.numberArray.filter.calledTwice);
          });
      });

    describe("Get Even Numbers map", function() {
        xit("Should equal 2, use map method", function() {
          expect(Arrays.getEvenCountMap(numbers)).to.equal(2);
          assert(Arrays.numberArray.map.calledOnce);
          });
      });
  });
