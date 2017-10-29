/**
 * Created by ThiernoMamadouCellou on 10/25/2017.
 */
function setRoutes(){
    if(nbEvent > 0){
    var directionsDisplay = new Array();

    for (var i=0; i< startLoc.length; i++){

        var rendererOptions = {
            map: map,
            suppressCars : false,
            preserveViewport: true
        }
        directionsService = new google.maps.DirectionsService();

        var travelMode = google.maps.DirectionsTravelMode.DRIVING;

        var request = {
            origin: startLoc[i],
            destination: Evenement.position,
            travelMode: travelMode
        };

        directionsService.route(request,makeRouteCallback(i,directionsDisplay[i]));
        //Light[0] = createCar(lightLatLg,"start",legs[i].start_address,getRandomColor());//createLight();

    }

    function makeRouteCallback(routeNum,disp){
        if (polyline[routeNum] && (polyline[routeNum].getMap() != null)) {
            startAnimation(routeNum);
            return;
        }
        return function(response, status){

            if (status == google.maps.DirectionsStatus.OK){

                var bounds = new google.maps.LatLngBounds();
                var route = response.routes[0];
                startLocation[routeNum] = new Object();
                endLocation[routeNum] = new Object();

                polyline[routeNum] = new google.maps.Polyline({
                    path: [],
                    strokeColor: getRandomColor(),
                    strokeWeight: 3
                });

                poly2[routeNum] = new google.maps.Polyline({
                    path: [],
                    strokeColor: getRandomColor(),
                    strokeWeight: 3
                });
                // For each route, display summary information.
                var path = response.routes[0].overview_path;
                var legs = response.routes[0].legs;


                disp = new google.maps.DirectionsRenderer(rendererOptions);
                disp.setMap(map);
                disp.setDirections(response);
                //Cars
                for (i=0;i<legs.length;i++) {
                    if (i == 0) {
                        startLocation[routeNum].latlng = legs[i].start_location;
                        startLocation[routeNum].address = legs[i].start_address;
                        // Car = google.maps.Car({map:map,position: startLocation.latlng});
                        Car[routeNum] = createCar(legs[i].start_location,"start",legs[i].start_address,getRandomColor());
                    }
                    endLocation[routeNum].latlng = legs[i].end_location;
                    endLocation[routeNum].address = legs[i].end_address;
                    var steps = legs[i].steps;

                    for (j=0;j<steps.length;j++) {
                        var nextSegment = steps[j].path;
                        var nextSegment = steps[j].path;

                        for (k=0;k<nextSegment.length;k++) {
                            polyline[routeNum].getPath().push(nextSegment[k]);
                            //bounds.extend(nextSegment[k]);
                        }

                    }
                }

            }
            // Ligth

            //Light[0] = createCar(lightLatLg,"start",legs[i].start_address,getRandomColor());//createLight();
            polyline[routeNum].setMap(map);

            startAnimation(routeNum);

        }
    }
    }else{
        alert("Veuillez placer un évènement sur la carte avant lancer la simulation");
    }

}
function updatePoly(i,d) {
// Spawn a new polyline every 20 vertices, because updating a 100-vertex poly is too slow
    if (poly2[i].getPath().getLength() > 20) {
        poly2[i]=new google.maps.Polyline([polyline[i].getPath().getAt(lastVertex-1)]);
        // map.addOverlay(poly2)
    }

    if (polyline[i].GetIndexAtDistance(d) < lastVertex+2) {
        if (poly2[i].getPath().getLength()>1) {
            poly2[i].getPath().removeAt(poly2[i].getPath().getLength()-1)
        }
        poly2[i].getPath().insertAt(poly2[i].getPath().getLength(),polyline[i].GetPointAtDistance(d));
    } else {
        poly2[i].getPath().insertAt(poly2[i].getPath().getLength(),endLocation[i].latlng);
    }
}
