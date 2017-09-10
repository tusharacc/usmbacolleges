
__author__ = "Tushar Saurabh"

import wikipedia, us, json
#from bs4 import BeautifulSoup
table = {}
array = []
f = open('colleges.txt','r')
for line in f:
	try:
		state,school,college,city,acc =line.split('$')
		table['state'] = state
		table['school'] = school
		table['college'] = college
		table['city'] = city
		table['acc'] = acc
		array.append(table)
	except ValueError:
		print (line)
w = open('colleges.json','w')
json.dump({"colleges":array},w)

'<a class="dropdown-item" href="#">Alabama</a>\n<a class="dropdown-item" href="#">Alaska</a>\n<a class="dropdown-item" href="#">Arizona</a>\n<a class="dropdown-item" href="#">Arkansas</a>\n<a class="dropdown-item" href="#">California</a>\n<a class="dropdown-item" href="#">Colorado</a>\n<a class="dropdown-item" href="#">Connecticut</a>\n<a class="dropdown-item" href="#">Delaware</a>\n<a class="dropdown-item" href="#">District of Columbia</a>\n<a class="dropdown-item" href="#">Florida</a>\n<a class="dropdown-item" href="#">Georgia</a>\n<a class="dropdown-item" href="#">Hawaii</a>\n<a class="dropdown-item" href="#">Idaho</a>\n<a class="dropdown-item" href="#">Illinois</a>\n<a class="dropdown-item" href="#">Indiana</a>\n<a class="dropdown-item" href="#">Iowa</a>\n<a class="dropdown-item" href="#">Kansas</a>\n<a class="dropdown-item" href="#">Kentucky</a>\n<a class="dropdown-item" href="#">Louisiana</a>\n<a class="dropdown-item" href="#">Maine</a>\n<a class="dropdown-item" href="#">Maryland</a>\n<a class="dropdown-item" href="#">Massachusetts</a>\n<a class="dropdown-item" href="#">Michigan</a>\n<a class="dropdown-item" href="#">Minnesota</a>\n<a class="dropdown-item" href="#">Mississippi</a>\n<a class="dropdown-item" href="#">Missouri</a>\n<a class="dropdown-item" href="#">Montana</a>\n<a class="dropdown-item" href="#">Nebraska</a>\n<a class="dropdown-item" href="#">Nevada</a>\n<a class="dropdown-item" href="#">New Hampshire</a>\n<a class="dropdown-item" href="#">New Jersey</a>\n<a class="dropdown-item" href="#">New Mexico</a>\n<a class="dropdown-item" href="#">New York</a>\n<a class="dropdown-item" href="#">North Carolina</a>\n<a class="dropdown-item" href="#">North Dakota</a>\n<a class="dropdown-item" href="#">Ohio</a>\n<a class="dropdown-item" href="#">Oklahoma</a>\n<a class="dropdown-item" href="#">Oregon</a>\n<a class="dropdown-item" href="#">Pennsylvania</a>\n<a class="dropdown-item" href="#">Rhode Island</a>\n<a class="dropdown-item" href="#">South Carolina</a>\n<a class="dropdown-item" href="#">South Dakota</a>\n<a class="dropdown-item" href="#">Tennessee</a>\n<a class="dropdown-item" href="#">Texas</a>\n<a class="dropdown-item" href="#">Utah</a>\n<a class="dropdown-item" href="#">Vermont</a>\n<a class="dropdown-item" href="#">Virginia</a>\n<a class="dropdown-item" href="#">Washington</a>\n<a class="dropdown-item" href="#">West Virginia</a>\n<a class="dropdown-item" href="#">Wisconsin</a>\n<a class="dropdown-item" href="#">Wyoming</a>'
