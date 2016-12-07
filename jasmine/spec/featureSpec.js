'use strict';

describe("Feature Test", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should initialize at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("should increase temperature with up function", function(){
    thermostat.up();
    thermostat.up();
    expect(thermostat.temperature).toEqual(22);
  });

  it("should decrease temperature with down function", function(){
    thermostat.down();
    thermostat.down();
    expect(thermostat.temperature).toEqual(18);
  });

});
