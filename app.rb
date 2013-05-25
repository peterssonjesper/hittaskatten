require 'sinatra'
require 'rabl'
require 'logger'
require 'json'

require_relative 'api/controllers/signup_controller'

set :views, File.dirname(__FILE__) + "/api/views"
set :root, File.dirname(__FILE__)
set :bind, '0.0.0.0'

Rabl.register!

configure do
  $logger = Logger.new(STDOUT)
end

get '/' do
  File.read(File.join('public', 'index.html'))
end

post '/api/signup' do
  content_type :json
  signup_controller = SignupController.new(request, params)
  response = signup_controller.signup
  render_response(response)
end

def render_response(response)
  status response[:status]
  render :rabl, :message, locals: response
end
