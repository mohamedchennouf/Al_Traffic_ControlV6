
var chai = require('chai');
var assert = chai.assert;
var should = require('chai').should();
var utils = require('../public/utils/utils.js');
var normeSoustraction = utils.normeSoustraction;
var dist = utils.dist;
var getRandomInt =utils.getRandomInt;
var coefficientDirecteur = utils.coefficientDirecteur;
var ordonnneeOrigine = utils.ordonnneeOrigine;
var getRandomMinMax = utils.getRandomMinMax;
var diff = utils.diff;

describe('getRandomInt', function() {
  it('should return a number', function() {
    var foo = getRandomInt(100);
    foo.should.be.a('number');
  });
});

describe('coefficientDirecteur', function() {
  it('should return a coeff', function() {
    var f = coefficientDirecteur(2,4,4,8);
    f.should.equal(2);
  });
});

describe('ordonnneeOrigine', function() {
  it('should return the origin x', function() {
    var f =ordonnneeOrigine(2,4,2);
    f.should.equal(0);
  });
});

describe('diff', function() {
  it('should return the difference (positive) between two number', function() {
    var f =diff(-2,4);
    f.should.equal(6);
  });
});

describe('dist', function() {
  it('should return the distance between tow points ', function() {
    var f =dist(3,4,6,8);
    f.should.equal(5);
  });
});

describe('normeSoustraction', function() {
  it('should return a absoly value  ', function() {
    assert.equal(normeSoustraction(4,2),2);
  });
});

describe('getRandomMinMax', function() {
  it('should return a number between Min and Max ', function() {
    var f =getRandomMinMax(10,100);
    assert.equal(true,(f < 100));
    assert.equal(false,(f < 10));
  });
});