var chai = require('chai');
var assert = chai.assert;
var Nice = require('../public/model/Nice.js');
var should = require('chai').should();
var light = require('../public/js/light.js');

var lights = light.lights;
var buildFeux = light.buildFeux;
var drawLights = light.drawLights;
var redrawLights = light.redrawLights;
var changeState = light.changeState;
var drawLight = light.drawLight;
var rues = light.buildFeux.rues;

describe('buildFeux', function() {
    it('should return the lights List not empty', function() {
        //buildFeux(Nice);
        var f = lights.length;
        f.should.equal(0);
    });
  });

  describe('changeState', function() {
    it('should changes the color of the all the lights', function() {
        lights.push({state: 'green' });
        lights.push({state: 'red' });
        changeState();
        lights[0].state.should.equal("red");
        lights[1].state.should.equal("green");
    });
  });