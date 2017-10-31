
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    console.log(rawFile);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
                    console.log("ok");
            callback(rawFile.responseText);
        }
    }
    rawFile.send();
}


/**
 * 
 */
var lat = 43.7072147873511;
var long = 7.282862241802945;
var lightJM1 = [];
lightJM1.push( { // jean Medecin
    lat :43.701167,
    long :7.269628,
    state : true
});
lightJM1.push( { // jean Medecin
    lat : 43.70063391298877,
    long : 7.268080382534663,
    state : false
});
lightJM1.push({ // jean Medecin
    lat : 43.702614,
    long :7.266871,
    state : false,
});
lightJM1.push({ // jean Medecin
    lat : 43.703141,
    long : 7.268432,
    state : false,
});
lightJM1.push({
    lat : 43.70315,
    long :7.268335,
    state : true,
});
lightJM1.push({ // Marechal Joffre
    lat : 43.699502920305015,
    long :7.267470588325864,
    state : false,
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
    state : false,
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
    fr = new FileReader();
    //fr.onload = receivedText;
    var f = new File([""], "./trafficLight.json");
    fr.onload = function(file) {
        return function(e) {
            console.log("ok");
        }
    }
    fr.readAsText(f);

    var myLatLng = {lat: lightJM1.lat, lng: lightJM1.long};
    for(var i = 0; i < lightJM1.length; i++){
        var lightLatLg = {lat: lightJM1[i].lat, lng: lightJM1[i].long};
        var image = lightJM1[i].state ? "img/green.png" : "img/red.jpg";
        var marker = new google.maps.Marker({
            position: lightLatLg,
            map: map,
            // icon: iconBase + 'firedept.png',
            icon: image,
            title: 'feu'
        });
    }

}


