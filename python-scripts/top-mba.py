import requests,json
import googlemaps,time
from bs4 import BeautifulSoup

gmaps = googlemaps.Client(key='AIzaSyBpe4NOxTx13eR5ynd40gV85BjTHH8HU_E')
BASE_URL = 'https://find-mba.com/schools/usa?page='
array = []
school_dict = {}
for i in range(1,101):
	print (str(i))
	res = requests.get(BASE_URL+str(i))
	try:
		res.raise_for_status()
		soup = BeautifulSoup(res.text,'html.parser')
		school_list_items = soup.find_all('div',class_="school-list-items")[0].find_all('div','school-list-item')
		for school in school_list_items:
			school_dict = {}
			rating = school.find_all('div',class_='school-list-counter')[0].text
			school_name = school.find_all('div',class_='school-list-title')[0].a.text
			location = school.find_all('span',class_='school-list-location')[0].text
			try:
				programs = [x.text for x in school.find_all('div',class_='school-list-programs')[0].find_all('strong')]
			except IndexError:
				print ('problem while identifying the programs'+school_name)
				programs = ''
			geocode_result = gmaps.geocode(school_name +' , '+location)
			school_dict['rating'] = int(rating[1:-2])
			school_dict['school_name'] = school_name
			school_dict['location'] = location
			school_dict['latlng'] = geocode_result[0]['geometry']['location']
			school_dict['programs'] = programs
			array.append(school_dict)
			time.sleep(0.5)
	except Exception as exc:
			print(school)
			print('There was a problem: %s' % (exc))

w = open('colleges_top_mba.json','w')
json.dump({"colleges":array},w)