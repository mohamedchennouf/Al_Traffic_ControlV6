
function initialize() {

    infowindow = new google.maps.InfoWindow({
            size: new google.maps.Size(150,75)
    });

    var myOptions = {
        zoom: 19,
        //center: {lat: -33.8667, lng: 151.1955},
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

    address = 'Nice Etoile,Nice'
    geocoder = new google.maps.Geocoder();
    geocoder.geocode( { 'address': address}, function(results, status) {
        map.fitBounds(results[0].geometry.viewport);

    });
    //createLight();

    //createLight(latlng, label, html)
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
    //console.log("timerHandle[index] " + timerHandle[index]);
    if (timerHandle[index]) clearTimeout(timerHandle[index]);
    eol[index]=polyline[index].Distance();
    map.setCenter(polyline[index].getPath().getAt(0));

    poly2[index] = new google.maps.Polyline({path: [polyline[index].getPath().getAt(0)], strokeColor:getRandomColor(), strokeWeight:3});

    timerHandle[index] = setTimeout("animate("+index+",100)",2000);  // Allow time for the initial map display
}

