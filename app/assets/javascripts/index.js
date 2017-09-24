function initMap(state=null) {
  console.log("State value in index.js",state);
  var latLng,zoomlevel;
  if (Boolean(state)){
    stateLatLng.forEach (function(elem){
      if (Object.keys(elem)[0] == state){
        latLng = {lat: elem[state][0], lng: elem[state][1]}
      }

    });
    zoomlevel = 8;
  } else {
    latLng = {lat: 38.83, lng: -98.58}
    zoomlevel = 3;

  }
  console.log('Latitude n Longtitude :',latLng);
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: zoomlevel,
    center: latLng
  });

  // Create an array of alphabetical characters used to label the markers.
  var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var infoWin = new google.maps.InfoWindow();
  
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  var markers = colleges.map(function(college, i) {
    var marker =  new google.maps.Marker({
      position: college.latlng,
      label: labels[i % labels.length],
      title: college.name
    });
    google.maps.event.addListener(marker, 'click', function(evt) {
      infoWin.setContent(college.ranking + '<br>' + college.name);
      infoWin.open(map, marker);
    })
    return marker;
  });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

  populateAccordion();
}

function populateAccordion (){

  var accordion,h1,div,p,h1,p;
  colleges.forEach(function(college){

    accordion = document.getElementById('accordion');
    div = document.createElement('div'); 
    h6 = document.createElement('h6'); 
    p1 = document.createElement('p');
    p2 = document.createElement('p');
    h6.appendChild(document.createTextNode(college.name));    
    p1.appendChild(document.createTextNode(college.location));   
    p2.appendChild(document.createTextNode(college.ranking));    
    div.className  += ' wrapper';
    h6.className += ' header';                         
      
    accordion.appendChild(h6); 
    accordion.appendChild(div);
    div.appendChild(p1); 
    div.appendChild(p2); 

  });
                    
}

function FilterState(){
  
  var state = document.getElementById('stateInput').value;
  var rank = document.querySelector('input[name = "inlineRadioOptions"]:checked').value;
  var doNotCheckLocation = false;
  if (!Boolean(state)){
    doNotCheckLocation = true;
  }
  
  colleges = gon.colleges;
  var start=0,end=0;
  switch (rank) {
    case '25':
      start = 0;
      end = 26;
      break;
    case '50':
      start = 26;
      end = 51;
      break;
    default:
      start = 0;
      end = colleges.length;
      break;
  }

  var filteredArray = [];
  for (i = start; i < end; i++){
    location_array = colleges[i].location.split(',');
    college_state = location_array[location_array.length-1];
    if (college_state.trim() == state || doNotCheckLocation) {
      filteredArray.push(colleges[i]);
    }
  }
  colleges = filteredArray;

  initMap(state);
}

var colleges = gon.colleges;
      
var stateLatLng =  [{'Alabama':[32.806671,-86.791130]},
                    {'Alaska':[61.370716, -152.404419]},
                    {'Arizona':[33.729759,-111.431221]},
                    {'Arkansas':[34.969704,-92.373123]},
                    {'California':[36.116203,-119.681564]},
                    {'Colorado':[39.059811,-105.311104]},
                    {'Connecticut':[41.597782,-72.755371]},
                    {'Delaware':[39.318523,-75.507141]},
                    {'District of Columbia':[38.897438,-77.026817]},
                    {'Florida':[27.766279,  -81.686783]},
                    {'Georgia':[33.040619,-83.643074]},
                    {'Hawaii':[21.094318,-157.498337]},
                    {'Idaho':[44.240459,-114.478828]},
                    {'Illinois':[40.349457,-88.986137]},
                    {'Indiana':[39.849426,-86.258278]},
                    {'Iowa':[42.011539,-93.210526]},
                    {'Kansas':[38.5266,-96.726486]},
                    {'Kentucky':[37.66814,-84.670067]},
                    {'Louisiana':[31.169546,-91.867805]},
                    {'Maine':[44.693947,-69.381927]},
                    {'Maryland':[39.063946,-76.802101]},
                    {'Massachusetts':[42.230171,-71.530106]},
                    {'Michigan':[43.326618,-84.536095]},
                    {'Minnesota':[45.694454,-93.900192]},
                    {'Mississippi':[32.741646,-89.678696]},
                    {'Missouri':[38.456085,-92.288368]},
                    {'Montana':[46.921925,-110.454353]},
                    {'Nebraska':[41.12537,-98.268082]},
                    {'Nevada':[38.313515,-117.055374]},
                    {'New Hampshire':[43.452492,-71.563896]},
                    {'New Jersey':[40.298904,-74.521011]},
                    {'New Mexico':[34.840515,-106.248482]},
                    {'New York':[42.165726,-74.948051]},
                    {'North Carolina':[35.630066,-79.806419]},
                    {'North Dakota':[47.528912,-99.784012]},
                    {'Ohio':[40.388783,-82.764915]},
                    {'Oklahoma':[35.565342,-96.928917]},
                    {'Oregon':[44.572021,-122.070938]},
                    {'Pennsylvania':[40.590752,-77.209755]},
                    {'Rhode Island':[41.680893,-71.51178]},
                    {'South Carolina':[33.856892,-80.945007]},
                    {'South Dakota':[44.299782,-99.438828]},
                    {'Tennessee':[35.747845,-86.692345]},
                    {'Texas':[31.054487,-97.563461]},
                    {'Utah':[40.150032,-111.862434]},
                    {'Vermont':[44.045876,-72.710686]},
                    {'Virginia':[37.769337,-78.169968]},
                    {'Washington':[47.400902,-121.490494]},
                    {'West Virginia':[38.491226,-80.954453]},
                    {'Wisconsin':[44.268543,-89.616508]},
                    {'Wyoming':[42.755966,-107.30249]}
];

const states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

