ENV['RACK_ENV'] ||= 'development'
require 'sinatra/base'
require 'json'
require 'data_mapper_setup'

class Thermostat < Sinatra::Base
  get '/' do
    @thermostat = Thermostat.
    :erb '../../interface'
  end

  post '/save' do
    Thermostat.create(temperature: params[:temperature].to_i, power_saving: params[:power_saving], city: params[:city])
  end


  run! if app_file == $0
end
