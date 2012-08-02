require 'rubygems'
require 'sinatra/base'
require 'rack-flash'

class App < Sinatra::Base
  use Rack::Flash
  
  enable :static, :sessions
  set :app_file, __FILE__
  set :root, File.dirname(__FILE__)
  
  get '/' do
    erb :index
  end
  
  get '/:page' do
    if File.exists?('views/'+params[:page]+'.erb')
      erb params[:page].to_sym
    else 
      flash[:notice] = "huh. whatever you were looking for doesn't exist"
      redirect '/'
    end   
  end
  
  post '/' do 
      require 'pony'
       Pony.mail(
        :from => params[:name] + "<" + params[:email] + ">",
        :to => 'sethvincent@gmail.com',
        :subject => params[:name] + " has contacted you",
        :body => params[:message],
        :port => '587',
        :via => :smtp,
        :via_options => { 
          :address              => 'smtp.sendgrid.net', 
          :port                 => '587', 
          :enable_starttls_auto => true, 
          :user_name            => ENV['SENDGRID_USERNAME'], 
          :password             => ENV['SENDGRID_PASSWORD'], 
          :authentication       => :plain, 
          :domain               => ENV['SENDGRID_DOMAIN']
        })
      flash[:notice] = "Oh! Thanks for the email, bud!"
      redirect '/'
  end
  
end