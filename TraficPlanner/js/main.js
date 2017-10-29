var nbEvent = 0;
var endLoc = null;



function initialize() {

    var myOptions = {   // les options en l'occurence le zoom
        zoom: 16,
         mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions); // on crer un objet map
    // code qui centre la carte sur Nice Etoile
    address = 'Nice Etoile,Nice'
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address}, function(results, status) {
        if (status == 'OK') {
        map.setCenter(results[0].geometry.location);

        //ajout d'un évènement
        map.addListener('click', function(e) {
            if(nbEvent<1){
                var nomEvent = prompt("Veuillez nous donner le nom de l'évènement que vous souhaiter ajouter");
                var nbCar = prompt("Combien de véhicule souhaite aller à cette évènement ?");
                Evenement.nom = nomEvent;
                Evenement.nbCars = nbCar;
                Evenement.position = e.latLng;
                console.log(Evenement.decrire());
                Evenement.placeEvenement(e.latLng, map);
                map.setCenter(Evenement.position);
                endLoc = Evenement.position;
                nbEvent++;
            }else{
                alert("Actuellement vous ne pouvez mettre qu'un seul évènement");
            }
        });
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
}

function animate(index,d) {
    if (d>eol[index]) {
        Car[index].setPosition(endLocation[index].latlng);
        return;
    }

    var p = polyline[index].GetPointAtDistance(d);
    /*
     console.log("Eol : " + eol[index]);
     console.log("distance d : " + d);
     console.log("get point aty Distance p: " + p);

     console.log("tick : " + tick);
     */
    //map.panTo(p);
    var lastPosn = Car[index].getPosition();

    Car[index].setPosition(p);

    var heading = google.maps.geometry.spherical.computeHeading(lastPosn, p);
    icon.rotation = heading;

    Car[index].setIcon(icon);
    updatePoly(index,d);
    timerHandle[index] = setTimeout("animate("+index+","+(d+step)+")", tick);
    //console.log(p.lat);

    if(d > feu){
        //console.log("distance parcourus superieur à 5000 "  + d);
        clearTimeout(timerHandle[index]);
        sleep(tempsFeu);
        //console.log("reveille");
        feu = feu * 2;
        timerHandle[index] = setTimeout("animate("+index+","+(d+step)+")", tick);

    }
}

//-------------------------------------------------------------------------

function startAnimation(index) {
    console.log(polyline[index]);
    if (timerHandle[index]) clearTimeout(timerHandle[index]);
    eol[index]=polyline[index].Distance();
    map.setCenter(polyline[index].getPath().getAt(0));

    poly2[index] = new google.maps.Polyline({path: [polyline[index].getPath().getAt(0)], strokeColor:getRandomColor(), strokeWeight:3});

    timerHandle[index] = setTimeout("animate("+index+",100)",2000);  // Allow time for the initial map display
}

