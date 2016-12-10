require './app/app'

RSpec.feature "Saving user settings", :type => :feature do
  scenario "User changed thermostat settings. They should be saved now" do
  DatabaseCleaner.clean
  visit '/'
  thermostat = Thermostat.new(temperature: 23, power_saving: false, city: "tokyo")
  end
end
