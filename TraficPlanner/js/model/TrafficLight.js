/**
 * Created by ThiernoMamadouCellou on 10/25/2017.
 */
var lat = 43.7072147873511;
var long = 7.282862241802945;
var lightJM1 = [];
lightJM1.push( { // jean Medecin
    lat : 43.70063391298877,
    long : 7.268080382534663,
    state : false
});
lightJM1.push({ // jean Medecin
    lat : 43.700594160841476,
    long :7.267940237113635,
    state : true,
});
lightJM1.push({ // jean Medecin
    lat : 43.70053477496256,
    long :7.267747453340689,
    state : true,
});
lightJM1.push({
    lat : 43.70014840172638,
    long :7.267597249635855,
    state : true,
});
lightJM1.push({ // Marechal Joffre
    lat : 43.699502920305015,
    long :7.267470588325864,
    state : true,
});
lightJM1.push({ // jean Medecin
    lat : 43.69969683649873,
    long :7.268057321547872,
    state : true,
});
lightJM1.push({ // jean Medecin
    lat : 43.69982409366,
    long :7.268423778354531,
    state : true,
});
lightJM1.push({ // jean Medecin
    lat : 43.69986384631788,
    long :7.2685347547525225,
    state : true,
});
lightJM1.push({ // jean Medecin
    lat : 43.70012151077225,
    long :7.269316618680364,
    state : true,
});
lightJM1.push({ // jean Medecin
    lat : 43.69986384631788,
    long :7.2685347547525225,
    state : true,
});
lightJM1.push({ // jean Medecin
    lat : 43.69986384631788,
    long :7.2685347547525225,
    state : true,
});




/*var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Feu'
});
*/
function createLight() {
    var myLatLng = {lat: lightJM1.lat, lng: lightJM1.long};
    for(var i = 0; i < lightJM1.length; i++){
        var lightLatLg = {lat: lightJM1[i].lat, lng: lightJM1[i].long};
        var image = "img/feu.png";
        var marker = new google.maps.Marker({
            position: lightLatLg,
            map: map,
            // icon: iconBase + 'firedept.png',
            icon: image,
            title: 'feu'
        });
    }

}


