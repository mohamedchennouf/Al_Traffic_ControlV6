
var voitures = [];
var voituresArriver = [];
var NBruesPossible = 10 ;


function generateVehicules(data) {
    var rueIndex = getRandomInt(NBruesPossible);
    var rueDirection = data.features[rueIndex].properties.vertical;
    var posIndex = getRandomMinMax(1, data.features[rueIndex].geometry.coordinates.length - 2);
    var posXVehicule = data.features[rueIndex].geometry.coordinates[posIndex][0];
    var posYVehicule = data.features[rueIndex].geometry.coordinates[posIndex][1];
    var sens = null;
    var rand = getRandomInt(2);
    if (rueDirection) {
        if (rand === 0) {
            sens = 'bas';
        } else {
            sens = 'haut';
        }
    } else {
        if (rand === 0) {
            sens = 'droite';
        } else {
            sens = 'gauche';
        }
    }
    voitures.push({ posX: posXVehicule, posY: posYVehicule, sens: sens, coef: null, origine: null });
}



function redrawVehicules() {
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
    if (vehicule.sens === 'bas') {
        imageCar.src = './image/carBas.png';
    }
    else if (vehicule.sens === 'haut') {
        imageCar.src = './image/carHaut.png';
    }
    else if (vehicule.sens === 'gauche') {
        imageCar.src = './image/carGauche.png';
    } else {
        imageCar.src = './image/carDroite.png';
    }
}



function roule() {
    var destination = null;
    if (Event.length > 0) {
        destination = Event[0];
    }
    voitures.forEach(function (voiture,voitureIndex) {
        if (destination === null) {
            if (isIntersection(voiture, Nice)) {
                changeSensRandom(voiture);
            }
        } else {
            if (isIntersection(voiture, Nice)) {
                changeSensEvent(voiture, Event[0]);
            }
        }
        if(dist(voiture.posX,voiture.posY,Event[0].posX,Event[0].posY)<=4){
            voiture.posX =  Event[0].posX;
            voiture.posY = Event[0].posY;
            voituresArriver.push(voiture);
            voitures.splice(voitureIndex, 1);
        }else{
            avance(voiture);
        }
    });
    redrawVehicules();
}


function changeSensEvent(voiture, event) {
    var nextIntersection = null;
    var coef = null;
    var origine = null;
    if (voiture.posX > event.posX && diff(voiture.posX,event.posX) > 4) {
        voiture.sens = 'gauche';
    }
    else if (voiture.posY > event.posY) {
        voiture.sens = 'haut';
    }
    else if (voiture.posX < event.posX && diff(voiture.posX,event.posX) > 4) {
        voiture.sens = 'droite';
    }
    else if (voiture.posY < event.posY) {
        voiture.sens = 'bas';
    }
    nextIntersection = trouveProchaineIntersection(voiture.sens, voiture.posX, voiture.posY, Nice);
    coef = coefficientDirecteur(voiture.posX, voiture.posY, nextIntersection.posX, nextIntersection.posY);
    origine = ordonnneeOrigine(voiture.posX, voiture.posY, coef);
    voiture.coef = coef;
    voiture.origine = origine;
}

function changeSensRandom(voiture) {
    var rand = getRandomInt(4);
    var nextIntersection = null;
    var coef = null;
    var origine = null;
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
    nextIntersection = trouveProchaineIntersection(voiture.sens, voiture.posX, voiture.posY, Nice);
    coef = coefficientDirecteur(voiture.posX, voiture.posY, nextIntersection.posX, nextIntersection.posY);
    origine = ordonnneeOrigine(voiture.posX, voiture.posY, coef);
    voiture.coef = coef;
    voiture.origine = origine;
}

function trouveProchaineIntersection(sens, posx, posy, data) {
    var prochaineDestination = {};
    var rues = data.features;
    var distance = 1000;
    rues.forEach(function (rue, rueIndex) {
        var position = rue.geometry.coordinates;
        position.forEach(function (pos, posIndex) {
            if (sens === 'gauche') {
                if (pos[0] < posx && normeSoustraction(pos[1], posy) < 8) {
                    if (dist(pos[0], pos[1], posx, posy) < distance) {
                        prochaineDestination = { posX: pos[0], posY: pos[1] };
                        distance = dist(pos[0], pos[1], posx, posy);
                    }
                }
            } else if (sens === 'droite') {
                if (pos[0] > posx && normeSoustraction(pos[1], posy) < 8) {
                    if (dist(pos[0], pos[1], posx, posy) < distance) {
                        prochaineDestination = { posX: pos[0], posY: pos[1] };
                        distance = dist(pos[0], pos[1], posx, posy);
                    }
                }
            }
            else if (sens === 'bas') {
                if (pos[1] > posy && normeSoustraction(pos[0], posx) < 8) {
                    if (dist(pos[0], pos[1], posx, posy) < distance) {
                        prochaineDestination = { posX: pos[0], posY: pos[1] };
                        distance = dist(pos[0], pos[1], posx, posy);
                    }
                }
            }
            else if (sens === 'haut') {
                if (pos[1] < posy && normeSoustraction(pos[0], posx) < 8) {
                    if (dist(pos[0], pos[1], posx, posy) < distance) {
                        prochaineDestination = { posX: pos[0], posY: pos[1] };
                        distance = dist(pos[0], pos[1], posx, posy);
                    }
                }
            }
        });
    });

    if(prochaineDestination === {}){
        sens = randSens();
        trouveProchaineIntersection(sens, posx, posy, data);
    }
    return prochaineDestination;
}


function randSens(){
    var rand = getRandomInt(4);
    var sens = null;
    if (rand === 0) {
        sens = 'droite';
    }
    else if (rand === 1) {
        sens = 'gauche';
    }
    else if (rand === 2) {
        sens = 'bas';
    }
    else if (rand === 3) {
        sens = 'haut';
    }
    return sens;
}

function avance(voiture) {
    //console.log('avant X :' + voiture.posX);
    //console.log('avant Y :' + voiture.posY);
    var canvas, w, h;
    canvas = document.querySelector("#mon_canvas");
    w = canvas.width;
    h = canvas.height;

    if ((voiture.sens === 'droite') && (voiture.posX<w)) {
        voiture.posX += 1;
        if (voiture.coef !== 0) {

            voiture.posY = (voiture.coef * voiture.posX) + voiture.origine;
        }
    }
    if ((voiture.sens === 'gauche')&& (voiture.posX > 0)){
        voiture.posX = voiture.posX - 1;
        if (voiture.coef !== 0) {
            voiture.posY = (voiture.coef * voiture.posX) + voiture.origine;
        }
    }
    if ((voiture.sens === 'bas')&& (voiture.posY<h)){
        voiture.posY += 1;
        if (voiture.coef !== 0) {
            voiture.posX = (voiture.posY - voiture.origine) / voiture.coef;
        }
    }
    if ((voiture.sens === 'haut')&&(voiture.posY > 0)) {
        voiture.posY = voiture.posY - 1;
        if (voiture.coef !== 0) {
            voiture.posX = (voiture.posY - voiture.origine) / voiture.coef;
        }
    }
    demiTour(voiture);
    
    //console.log('--apres X :' + voiture.posX);
    //console.log('--apres Y :' + voiture.posY);
}



function isIntersection(voiture, data) { //TODO
    var intersection = false;
    var rues = data.features;
    rues.forEach(function (rue, rueIndex) {
        if (rue.properties.vertical) {
            var position = rue.geometry.coordinates;
            position.forEach(function (pos, posIndex) {
                var distance = dist(voiture.posX, voiture.posY, pos[0], pos[1]);
                if (distance < 1) {
                    intersection = true;
                }
            });
        }
    });
    return intersection;
}


function demiTour(voiture){
    var canvas, w, h;
    canvas = document.querySelector("#mon_canvas");
    w = canvas.width;
    h = canvas.height;
    if(voiture.posX<=0){
        voiture.sens = 'droite';
    }else if( voiture.posX>=w){
        voiture.sens = 'gauche';
    }else if( voiture.posY<=0){
        voiture.sens = 'bas';
    }else if( voiture.posY>=h){
        voiture.sens = 'haut';
    }
    nextIntersection = trouveProchaineIntersection(voiture.sens, voiture.posX, voiture.posY, Nice);
    coef = coefficientDirecteur(voiture.posX, voiture.posY, nextIntersection.posX, nextIntersection.posY);
    origine = ordonnneeOrigine(voiture.posX, voiture.posY, coef);
    voiture.coef = coef;
    voiture.origine = origine;
}
