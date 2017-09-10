require 'json'
require 'fuzzy_match'

top_mba = JSON.parse(File.read('top-mba.json'))
us_mba = JSON.parse(File.read('colleges_rank_usnews.json'))
rejected = []
us_rank = us_mba['us-news-ranking'].map do |rank|
	university = rank['college_name']
	school = /.+\((.+)\)/.match(university)
	if not school.nil 
		return school[1]
	else 
		rejected.push(school)
	end
end

top_mba['colleges'].each do |college|
	college_name = college['school_name']
	us_rank.each |k,v|
	val = us_rank.index(college_name)
	rank = val ? 'US News Rank -' + val.to_s: 'US News Rank -'
	
end
