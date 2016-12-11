
$(document).ready(function() {
  var thermostat = new Thermostat
  $("#temp-display").text(thermostat.temperature + "°C");
  $(document).click(function(){
    updateTemperature();
    updatePowerSaving();
  })

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=ec56c5c96e6052e6e3abed6270cd50bf&units=metric', function(data) {
  $("#temp-outside").text("Temperature outside: " + data.main.temp + "°C");
});

$('#current-city').change(function() {
  var city = $('#current-city').val();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#temp-outside').text("Temperature outside: " + data.main.temp + "°C");
  });
});

// saving settings to database
// $("#save-settings").click(function(){
//     $.post('/app/save',
//     {
//         temperature: thermostat.temperature
//         power_saving: thermostat.isPowerSaving
//         city: $('#current-city').val();
//     }, function(data){
//         $("#saving-confirmation").text("Saved settings: temperature: " + thermostat.temperature + ", power-saving: " + thermostat.isPowerSaving + ", city: " + $('#current-city').val(););
//     });
// });

  $("#regulation-up").click(function() {
    thermostat.up();
  });
  $("#regulation-down").click(function() {
    thermostat.down();
  })
  jQuery('#reset').click(function(){
    thermostat.reset();
  })
  $('#power-saving').click(function(){
    thermostat.changePowerSavingMode();
    var message;
    if (thermostat.isPowerSaving){
      message = "OFF";
    } else {
      message = "ON";
    }
    $('#power-saving').text("Turn Power Saving "+message);
  })

  function updateTemperature(){
    $("#temp-display").text(thermostat.temperature + "°C");
    $('#temp-display').attr('class', thermostat.energyUsage());
  }
  function updatePowerSaving() {
    $('#power-saving-display').text(function(){
      if (thermostat.isPowerSaving){
        return "Power saving mode is ON";
      } else {
        return "Power saving mode is OFF";
      }
    });
  }

});
