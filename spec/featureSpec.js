'use strict';

describe("Feature Test", function() {
  var thermostat;


  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should initialize at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("should initialize with power saving on", function() {
    expect(thermostat.powerSaving).toBeTruthy();
  });

  it ("should initialize with usage set to medium-usage", function(){
    expect(thermostat.usage).toEqual("medium-usage")
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

  it("should not be possible to reduce temperature below 10 degrees", function(){
    for (var i = 0; i < 10; i++) {
      thermostat.down();
    }
    expect(function(){thermostat.down();}).toThrowError("Minimum temperature 10 degrees")
  });

  it("should not be possible to increase temperature >25 if power saving is on", function(){
    for (var i = 0; i < 5; i++) {
      thermostat.up();
    }
    expect(function(){thermostat.up();}).toThrowError("Power saving on. Max temperature 25 degrees.")
  });

  it("should not be possible to increase temperature > 32 if power saving is off", function(){
    thermostat.setPowerSaving();
    for (var i = 0; i < 12; i++) {
      thermostat.up();
    }
    expect(function(){thermostat.up();}).toThrowError("Maximum temperature reached.")
  });

  // it("should return low usage for temps <18 degrees", function(){
  //   for (var i = 0; i < 3; i++) {
  //     thermostat.down();
  //   }
  //   expect(thermostat.usage).toEqual("low usage");
  // });

});
