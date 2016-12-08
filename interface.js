$(document).ready(function() {

var thermostat = new Thermostat

$("#current-temperature").text(thermostat.temperature);

$(document).click(function(){displayTemperature();});

$("#regulation-up").click(function(){thermostat.up();});

$("#regulation-down").click(function(){thermostat.down();});

$("#reset").click(function(){Thermostat.reset();});







function displayTemperature(){
  $("#current-temperature").text(thermostat.temperature);
};












});
