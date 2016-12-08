$(document).ready(function() {

var thermostat = new Thermostat

$("#current-temperature").text(thermostat.temperature);

$(document).click(function(){displayTemperature();});

$("#regulation-up").click(function(){thermostat.up();});

$("#regulation-down").click(function(){thermostat.down();});

$("#reset").click(function(){thermostat.reset();});

$("#power-saving").click(function(){
  thermostat.setPowerSaving();
  var message;
  if (thermostat.powerSaving) {
    message = "OFF";
  } else {
    message = "ON";
  }
  $("#power-saving").text("Turn Power Saving " + message);
});


function displayTemperature(){
  $("#current-temperature").text(thermostat.temperature);
};












});
