class IndexController < ApplicationController

	require 'firebase'
  	require 'gon'
  	require 'fuzzy_match'

	def home
		base_uri = 'https://mbacolleges-26651.firebaseio.com/'
	  	firebase = Firebase::Client.new(base_uri)
	  	colleges = firebase.get('/colleges').body
	  	us_news_college_ranking = firebase.get('us-news-ranking').body
	  	college_all = []
	  	# us_news_college_aray = us_news_college_ranking.map do |college|
	  	# 	college['college_name']
  		# end
	  	# colleges.each do |college|
	  	# 	college_all.push({'latlng':college['latlng'],'name':college['school_name'],'ranking':'Top MBA Ranking -' + college['rating'].to_s,'US-News-Ranking':us_news_college_aray.find(FuzzyMatch.new(us_news_college_ranking).find(college['school_name']))})
	  	# end
	  	colleges.each do |college|
	  		college_all.push({'latlng':college['latlng'],'name':college['school_name'],'ranking':'Top MBA Ranking -' + college['rating'].to_s,'location':college['location']})
	  	end
	  	
	  	gon.colleges = college_all
	  	logger.debug "The latlngs are #{gon.colleges}"

	end
end
