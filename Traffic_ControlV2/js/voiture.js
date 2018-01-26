
var voitures = [];

function generateVehicules(data) {
    var rueIndex = getRandomInt(data.features.length);
    var rueDirection = data.features[rueIndex].properties.vertical;
    var posIndex = getRandomInt(data.features[rueIndex].geometry.coordinates.length);
    var posXVehicule = data.features[rueIndex].geometry.coordinates[posIndex][0];
    var posYVehicule = data.features[rueIndex].geometry.coordinates[posIndex][1];
    var sens = null;
    if (rueDirection) {
        sens = 'bas';
    } else {
        sens = 'droite';
    }
    voitures.push({ posX: posXVehicule, posY: posYVehicule, direction: rueDirection, sens: sens });
}



function redrawVehicules() {
    //console.log(voitures.length);
    voitures.forEach(function (voiture) {
        drawVehicule(voiture);
    });
}

function drawVehicule(vehicule) {
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
    var destination = null;
    if (Event.length > 0) {
        destination = Event[0];
    }
    voitures.forEach(function (voiture) {
        if (destination === null) {
            if (isIntersection(voiture, Nice)) {
                changeSensRandom(voiture);
            }
        } else {
            if (isIntersection(voiture, Nice)) {
                changeSensEvent(voiture, Event[0]);
            }
        }
        avance(voiture);
    });
    redrawVehicules();
}


function changeSensEvent(voiture, event) {
    if (voiture.posX > event.posX) {
        voiture.sens = 'gauche';
    }
    else if (voiture.posX < event.posX) {
        voiture.sens = 'droite';
    }
    else if (voiture.posY > event.posY) {
        voiture.sens = 'haut';
    }
    else if (voiture.posY < event.posY) {
        voiture.sens = 'bas';
    }
}

function changeSensRandom(voiture) {
    var rand = getRandomInt(4);
    if (rand === 0) {
        voiture.sens = 'droite';
    }
    else if (rand === 1) {
        voiture.sens = 'gauche';
    }
    else if (rand === 2) {
        voiture.sens = 'bas';
    }
    else if (rand === 3) {
        voiture.sens = 'haut';
    }
}

function avance(voiture) {
    if (voiture.sens === 'droite') {
        console.log('droite');
        voiture.posX += 1;
    }
    if (voiture.sens === 'gauche') {
        console.log('gauche');
        voiture.posX = voiture.posX - 1;
    }
    if (voiture.sens === 'bas') {
        console.log('bas');
        voiture.posY += 1;
    }
    if (voiture.sens === 'haut') {
        console.log('haut');
        voiture.posY = voiture.posY - 1;
    }
}



function isIntersection(voiture, data) { //TODO
    var intersection = false;
    var rues = data.features;
    rues.forEach(function (rue, rueIndex) {
        var position = rue.geometry.coordinates;
        position.forEach(function (pos, posIndex) {
            var distance = dist(voiture.posX, voiture.posY, pos[0], pos[1]);
            if (distance < 1) {
                intersection = true;
            }
        });
    });
    return intersection;
}


function diff(num1, num2) {
    if (num1 > num2) {
        return (num1 - num2);
    } else {
        return (num2 - num1);
    }
}

function dist(x1, y1, x2, y2) {
    var deltaX = diff(x1, x2);
    var deltaY = diff(y1, y2);
    var dist = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    return (dist);
}