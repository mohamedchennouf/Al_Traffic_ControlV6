
var Evenement = {
        nom : "",
        nbCars : 0,
        position : null,
  

  	// Renvoie la description de l'évènement
    decrire: function () {
        var description = Evenement.nom + " peut contenire " + Evenement.nbCars + " véhicules et a comme position " + Evenement.position ;
        return description;
    },


    placeEvenement : function (latLng, map) {
        var marker = new google.maps.Marker({
          position: latLng,
          map: map
        });
        map.panTo(latLng);
      }
};

var endLoc = Evenement.position;