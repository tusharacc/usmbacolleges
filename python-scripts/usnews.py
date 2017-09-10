from bs4 import BeautifulSoup
import json
college_details = []
for x in range(1,11):
    f = open('page-'+str(x)+'.txt','r')
    lines = f.readlines()
    school_name = [BeautifulSoup(x,'html.parser').a.text for x in [e for e in lines if e.find('class="school-name"') > 0]]
    city_state = [BeautifulSoup(x,'html.parser').p.text for x in [e for e in lines if e.find('class="location"') > 0]]
    college_details += list(zip(school_name,city_state))
    f.close()

colleges = []
for key,value in enumerate(college_details):
    details = {}
    rank = key + 1
    print (value)
    college_name, location = value
    details['college_name'] = college_name
    details['location'] = location
    details['rank'] = rank
    colleges.append(details)


w = open('colleges_rank_usnews.json','w')
json.dump({"colleges":colleges},w,indent=4)