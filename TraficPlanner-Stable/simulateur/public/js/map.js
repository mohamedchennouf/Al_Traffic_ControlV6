var flagModifCarte = false;

function drawRoute(data) {
    var rues = data.features;
    var c = document.getElementById("mon_canvas");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "grey";
    rues.forEach(function (rue, rueIndex) {
        ctx.beginPath();
        posX1 = rue.geometry.coordinates[0][0];
        posX2 = rue.geometry.coordinates[0][1];
        ctx.moveTo(posX1, posX2);
        rue.geometry.coordinates.forEach(function (position, positionIndex) {
            ctx.lineTo(position[0], position[1]);
        });
        ctx.stroke();
    });
}

function zoom() {
    var c = document.getElementById("mon_canvas");
    var ctx = c.getContext("2d");
    ctx.scale(10, 10);
}


var cpt = 0;

function AddStreet() {

    /*flagModifCarte = true;
    var logger = document.getElementById("logger");
    logger.innerHTML = "appuyer sur 2 points de la carte pour ajouter une route"
    var c = document.getElementById("mon_canvas");
    var ctx = c.getContext("2d");
    cpt = 0;
    var newFeature = { "properties": { "vertical": true }, "geometry": { "coordinates": [] } }
    c.addEventListener("click", function (event) {
        var posX = event.pageX / 10;
        var posY = event.pageY / 10;
        if (cpt === 0) {
            newFeature.geometry.coordinates.push([posX, posY]);
            //ctx.moveTo(posX, posX);
        }
        console.log(posX + " " + posY + " cpt " + cpt);
        if (cpt === 1) {
            newFeature.geometry.coordinates.push([posX, posY]);
            Nice.features.push(newFeature);
            console.log(Nice);
            clearCanvas();
            drawRoute(Nice);
            redrawLights();
        }
        cpt++;
    });*/
    var StartPosX = prompt("Qu'elle est la position de votre nouvelle route (startPosX)");
    var StartPosY = prompt("Qu'elle est la position de votre nouvelle route(startPosY)");
    var EndPosX = prompt("Qu'elle est la position de votre nouvelle route(endPosX)");
    var EndPosY = prompt("Qu'elle est la position de votre nouvelle route(endPosY)");
    var newFeature = { "properties": { "vertical": true }, "geometry": { "coordinates": [] } }
    newFeature.geometry.coordinates.push([parseFloat(StartPosX), parseFloat(StartPosY)]);
    newFeature.geometry.coordinates.push([parseFloat(EndPosX), parseFloat(EndPosY)]);
    Nice.features.push(newFeature);
    clearCanvas();
    drawRoute(Nice);
    redrawLights();
    
}


if (cpt > 1) {
    ctx.removeEventListener("click", AddStreet(), false);
}

function RemoveStreet() {
    var NameDelateRoute = prompt("Qu'elle route voulez vous supprimer (nom rue)");
    //voitures.splice(voitureIndex, 1);

    Nice.features.forEach(function (rue, rueIndex) {
        if (rue.properties.name === NameDelateRoute) {
            Nice.features.slice(rueIndex, 1);
        }
    });
    clearCanvas();
    drawRoute(Nice);
    redrawLights();
}
