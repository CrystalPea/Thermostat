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
  var message2;
  if (thermostat.powerSaving) {
    message = "OFF";
    message2 = "ON";
  } else {
    message = "ON";
    message2 = "OFF";
  }
  $("#power-saving").text("Turn Power Saving " + message);
  $("#power-saving-status").text("Power Saving mode is " + message2);
});


function displayTemperature(){
  $("#current-temperature").text(thermostat.temperature);
};












});
