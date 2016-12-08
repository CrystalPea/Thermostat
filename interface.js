$(document).ready(function() {
var thermostat = new Thermostat
$.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ec56c5c96e6052e6e3abed6270cd50bf&units=metric', function(data) {
  $("#temperature-outside").text(data.main.temp + "°C");
});


$("#current-temperature").text(thermostat.temperature + "°C");

$(document).click(function(){
  displayTemperature();
});

$("#regulation-up").click(function(){
  thermostat.up();
});

$("#regulation-down").click(function(){
  thermostat.down();
});

$("#reset").click(function(){
  thermostat.reset();
});

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
  $("#current-temperature").text(thermostat.temperature + "°C");
  $("#current-temperature").attr('class', thermostat.usage);
};












});
