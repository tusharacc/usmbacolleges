import json
from fuzzywuzzy import fuzz
from fuzzywuzzy import process

top_mba = json.load(open('top-mba.json','r'))
us_news = json.load(open('colleges_rank_usnews.json','r'))

us_news_rank = filter(lambda x: x['college_name'], us_news['us-news-ranking'])
for college in top_mba['colleges']:
	school_name = college['school_name']
	match, rank = process.extractOne(school_name, us_news_rank)
	print ( match + " " + rank)

