/**
 * Created by ThiernoMamadouCellou on 10/25/2017.
 */
var car = "M17.402,0H5.643C2.526,0,0,3.467,0,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759c3.116,0,5.644-2.527,5.644-5.644 V6.584C23.044,3.467,20.518,0,17.402,0z M22.057,14.188v11.665l-2.729,0.351v-4.806L22.057,14.188z M20.625,10.773 c-1.016,3.9-2.219,8.51-2.219,8.51H4.638l-2.222-8.51C2.417,10.773,11.3,7.755,20.625,10.773z M3.748,21.713v4.492l-2.73-0.349 V14.502L3.748,21.713z M1.018,37.938V27.579l2.73,0.343v8.196L1.018,37.938z M2.575,40.882l2.218-3.336h13.771l2.219,3.336H2.575z M19.328,35.805v-7.872l2.729-0.355v10.048L19.328,35.805z";
var icon = {
    path: car,
    scale: .7,
    strokeColor: 'red',
    strokeWeight: .10,
    fillOpacity: 1,
    fillColor: '#404040',
    offset: '5%',
    // rotation: parseInt(heading[i]),
    anchor: new google.maps.Point(10, 25) // orig 10,50 back of car, 10,0 front of car, 10,25 center of car
};

function createCar(latlng, label, html) {
// alert("createCar("+latlng+","+label+","+html+","+color+")");

    var contentString = '<b>'+label+'</b><br>'+html;
    var c = getRandomColor();
    var Car = new google.maps.Marker({
        position: latlng,
        map: map,
        title: label,
        color : c,
        zIndex: Math.round(latlng.lat()*-100000)<<5
    });
    Car.myname = label;
    google.maps.event.addListener(Car, 'click', function() {
        infowindow.setContent(contentString);
        infowindow.open(map,Car);
    });

    return Car;
}
