
var voitures = [];

function generateVehicules(data) {
    var rueIndex = getRandomInt(data.features.length);
    var rueDirection = data.features[rueIndex].properties.vertical;
    var posIndex = getRandomInt(data.features[rueIndex].geometry.coordinates.length);
    var posXVehicule = data.features[rueIndex].geometry.coordinates[posIndex][0];
    var posYVehicule = data.features[rueIndex].geometry.coordinates[posIndex][1];
    voitures.push({posX:posXVehicule, posY:posYVehicule, direction: rueDirection });
}



function redrawVehicules(){
    voitures.forEach(function (voiture) {
        drawVehicule(voiture);
    });
}

function drawVehicule(vehicule){
    var c = document.getElementById("mon_canvas");
    var ctx = c.getContext("2d");
    var decalage = 1;
    var imageCar = new Image();
    imageCar.onload = function () {
        ctx.drawImage(imageCar, vehicule.posX - decalage, vehicule.posY - decalage, 2, 2);
    };
    if (vehicule.direction) {
        imageCar.src = './image/car1.png';
    } else {
        imageCar.src = './image/car0.png';
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}



function roule() {
    voitures.forEach(function (voiture) {
       voiture.posX += 1; 
        //vehicule.posX
    });
    redrawVehicules();
}