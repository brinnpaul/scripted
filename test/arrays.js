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
       xit("Index 3 should equal 4", function() {
         expect(Arrays.getValueAtIndex(sumArray, 3)).to.equal(4);
         });
       xit("Index 10 should equal undefined", function() {
         expect(Arrays.getValueAtIndex(sumArray, 10)).to.equal(undefined);
         });
      });

    describe("Get sum of numberArray anyway you want", function() {
      xit("Should equal 10", function() {
        expect(Arrays.getSum(sumArray.slice())).to.equal(10);
        });
      });

    describe("Get sum using forEach method", function() {
      xit("Should equal 10", function() {
        expect(Arrays.getSumForEach(sumArray)).to.equal(10);
        assert(Arrays.sumArray.forEach.calledOnce);
        });
      });

    describe("Get sum using reduce method", function() {
      xit("Should equal 10", function() {
        expect(Arrays.getSumReduce(sumArray)).to.equal(10);
        assert(Arrays.sumArray.reduce.calledOnce);
      });
    });

    describe("Get numbers greater than 3 using filter method", function() {
        xit("Should equal [5,6]", function() {
          expect(Arrays.getNumbersGreaterThanFilter(greaterThanArray, 3)).to.eql([5,6]);
          assert(Arrays.greaterThanArray.filter.calledOnce);
          });
      });

    describe("Get numbers greater than 3 using reduce method", function() {
        xit("Should equal [5,6]", function() {
          expect(Arrays.getNumbersGreaterThanReduce(greaterThanArray, 3)).to.eql([5,6]);
          assert(Arrays.greaterThanArray.reduce.calledOnce);
          });
      });

    describe("Get even numbers using filter method", function() {
        xit("Should equal 2", function() {
          expect(Arrays.getEvenCountFilter(evenCountArray)).to.equal(2);
          assert(Arrays.evenCountArray.filter.calledOnce);
          });
      });

    describe("Get even numbers using map method", function() {
        xit("Should equal 2", function() {
          expect(Arrays.getEvenCountMap(evenCountArray)).to.equal(2);
          assert(Arrays.evenCountArray.map.calledOnce);
          });
      });
  });
