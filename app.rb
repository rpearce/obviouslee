require 'rubygems'
require 'sinatra'

PAGES = ['the-om-way', 'crew', 'work', 'capabilities', 'connect', 'blog']

get '/' do
  html :index
end

PAGES.each do |page|
  get "/#{page}" do
    erb :"#{page}"
  end
end
