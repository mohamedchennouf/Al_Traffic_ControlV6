
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}




var data = [];
var task1 = function (){
  return new Promise (function(resolve, reject){
    readTextFile("./trafficLights.json", function(text){
    data = JSON.parse(text);
    }); 
  });
};
Promise.race(task1());

var  icons = [];     
var features = [];

function createLight() { 
 
    var myLatLng = {lat: data.lat, lng: data.long};
    for(var i = 0; i < data.length; i++){
        features.push({position: new google.maps.LatLng(data[i].lat,data[i].long),
            type:data[i].state ? "img/green.png" : "img/red.jpg" });
        //var image = data[i].state ? "img/green.png" : "img/red.jpg";
        //icons.push(image);
    }
      /*  var marker= new google.maps.Marker({
            position: lightLatLg,
            map: map,
            icon: image,
            title: 'feu'
        });
    */
 features.forEach(function(feature) {
          var marker = new google.maps.Marker({
            position: feature.position,
            icon:feature.type,
            map: map
          });
        });

}


