var assert = chai.assert;
var request = require('supertest');
var should = require('chai').should();
var app = require('../app.js');
var Nice = require('../public/model/Nice.js');
var main = require('../public/js/main.js');
var light = require('../public/js/light.js');
var map = require('../public/js/map.js');
var voiture = require('../public/js/voiture.js');
var event = require('../public/js/event.js');
var utils = require('../public/utils/utils.js');

describe('Integration Tests', function() {
    describe('#GET / stats', function() { 
      it('should get all tasks', function(done) { 
        request(app) .get('/stats')
          .end(function(err, res) { 
            expect(res.statusCode).to.equal(200); 
            expect(res.body).to.be.an('array'); 
            expect(res.body).to.be.empty; 
            done(); 
          }); 
      });
    });
  });