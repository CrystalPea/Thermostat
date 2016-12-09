require 'sinatra/base'

class Thermostat < Sinatra::Base
  get '/' do
    :erb '../../interface'
  end

  post '/' do
    Thermostat.create(temperature: params[:temperature].to_i, power_saving: params[:power_saving], city: params[:city])
  end


  run! if app_file == $0
end
