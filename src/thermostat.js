function Thermostat(){
  this.temperature = 20;
  this.powerSaving = true;
  this.usage = "medium-usage";
};

const MINIMUM_TEMPERATURE = 10;
const POWER_SAVING_MAXIMUM_TEMPERATURE = 25;
const MAXIMUM_TEMPERATURE = 32;
const LOW_USAGE_THRESHOLD = 17;
const HIGH_USAGE_THRESHOLD = 25;

Thermostat.prototype.up = function(){
  this.checkMaxMin();
  this.temperature += 1;
  this.setUsage();
};

Thermostat.prototype.down = function(){
  this.checkMaxMin();
  this.temperature -= 1;
  this.setUsage();
};

Thermostat.prototype.setPowerSaving = function(){
  this.powerSaving = !this.powerSaving;
  this.autoRegulate();
};

Thermostat.prototype.autoRegulate = function(){
  if (this.powerSaving && this.temperature > 25) {
    this.temperature = 25;
  }
};

Thermostat.prototype.reset = function(){
  this.temperature = 20;
};

Thermostat.prototype.checkMaxMin = function() {
  if (this.powerSaving === true && this.temperature > POWER_SAVING_MAXIMUM_TEMPERATURE ) {
    throw new Error("Power saving on. Max temperature 25 degrees.")
  };
  if (this.temperature >= MAXIMUM_TEMPERATURE ) {
    throw new Error("Maximum temperature reached.")
  };
  if (this.temperature <= MINIMUM_TEMPERATURE) {
    throw new Error("Minimum temperature 10 degrees")
  };
};

Thermostat.prototype.setUsage = function(){
  if (this.temperature <= LOW_USAGE_THRESHOLD) {
    this.usage = "low-usage";
  };
  if (this.temperature <= HIGH_USAGE_THRESHOLD && this.temperature > LOW_USAGE_THRESHOLD) {
    this.usage = "medium-usage";
  };
  if (this.temperature > HIGH_USAGE_THRESHOLD) {
    this.usage = "high-usage";
  };
};
