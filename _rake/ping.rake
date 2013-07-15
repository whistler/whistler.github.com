desc 'Ping pubsubhubbub server.'
task :ping do
  require 'cgi'
  require 'net/http'
  require 'open-uri'
  puts 'Pinging pubsubhubbub server'
  data = 'hub.mode=publish&hub.url=' + CGI::escape("http://ibrahimmuhammad.com/atom.xml")
  http = Net::HTTP.new('pubsubhubbub.appspot.com', 80)
  resp, data = http.post('http://pubsubhubbub.appspot.com/publish',
                         data,
                         {'Content-Type' => 'application/x-www-form-urlencoded'})

  puts "Ping error: #{resp}, #{data}" unless resp.code == "204"
  
  puts "Pinging Bing"
  http = open("http://www.bing.com/webmaster/ping.aspx?siteMap=http://ibrahimmuhammad.com/sitemap.txt")
  
  puts "Pinging Google"
  http = open("http://www.google.com/webmasters/sitemaps/ping?sitemap=http://ibrahimmuhammad.com/sitemap.txt")
end