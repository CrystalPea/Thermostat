'use strict';

describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe("#new", function(){

    it("should initialize with a temperature property set to 20", function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it("should initialize with powerSaving set to true", function() {
      expect(thermostat.powerSaving).toBeTruthy();
    });

    it ("should initialize with usage set to medium-usage", function(){
      expect(thermostat.usage).toEqual("medium-usage")
    });

  });

  describe("#up", function(){

    it("should raise the temperature when up is called", function(){
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });

  });

  describe("#down", function(){

    it("should decrease the temperature when down is called", function(){
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });

    it("should not be possible to reduce temperature below 10 degrees", function(){
      for (var i = 0; i < 10; i++) {
        thermostat.down();
      }
      expect(function(){thermostat.down();}).toThrowError("Minimum temperature 10 degrees")
    });

  });

  describe("#reset", function(){
    it("should reset temperature to 20", function(){
      thermostat.up();
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20)
    });
  });

  describe("#power saving", function(){

    it("should be possible to turn power saving on", function() {
      expect(thermostat.powerSaving).toBeTruthy();
    });

    it("should be possible to turn power saving off", function(){
      thermostat.setPowerSaving();
      expect(thermostat.powerSaving).toBeFalsy();
    });

    it("should not be possible to increase temperature >25 if power saving is on", function(){
      for (var i = 0; i < 5; i++) {
        thermostat.up();
      }
      var message = "Power saving on. Max temperature 25 degrees."
      expect(function(){thermostat.up();}).toThrowError(message)
    });

    it("should not be possible to increase temperature > 32 if power saving is off", function(){
      thermostat.setPowerSaving();
      for (var i = 0; i < 12; i++) {
        thermostat.up();
      }
      expect(function(){thermostat.up();}).toThrowError("Maximum temperature reached.")
    });

    it("should bring temp down to 25 if it's above that and power saving mode being turned on", function(){
      thermostat.setPowerSaving();
      for (var i = 0; i < 7; i++) {
        thermostat.up();
      }
      thermostat.setPowerSaving();
      expect(thermostat.temperature).toEqual(25);
    });

  });

  describe("usage", function(){

    it("should return low-usage for temps <18 degrees", function(){
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      }
      expect(thermostat.usage).toEqual("low-usage");
    });

    it("should return medium-usage if decreased, then raised above 17 degrees", function(){
      for (var i = 0; i < 3; i++) {
        thermostat.down();
      }
      thermostat.up();
      expect(thermostat.usage).toEqual("medium-usage");
    });

    it("should return high-usage for temps >25 degrees", function(){
      thermostat.setPowerSaving(false);
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.usage).toEqual("high-usage");
    });

    it("should return medium-usage if increased, then decreased below 25 degrees", function(){
      thermostat.setPowerSaving(false);
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      thermostat.down();
      expect(thermostat.usage).toEqual("medium-usage");
    });

  });

});
