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
    var StartPosX = prompt("Qu'elle est la position de votre nouvelle route (startPosX)");
    var StartPosY = prompt("Qu'elle est la position de votre nouvelle route(startPosY)");
    var EndPosX = prompt("Qu'elle est la position de votre nouvelle route(endPosX)");
    var EndPosY = prompt("Qu'elle est la position de votre nouvelle route(endPosY)");
    var newFeature = { "properties": { "vertical": true }, "geometry": { "coordinates": [] } }
    newFeature.geometry.coordinates.push([parseFloat(StartPosX), parseFloat(StartPosY)]);
    newFeature.geometry.coordinates.push([parseFloat(EndPosX), parseFloat(EndPosY)]);
    model.features.push(newFeature);
    clearCanvas();
    drawRoute(model);
    drawLights(model);
    
}


if (cpt > 1) {
    ctx.removeEventListener("click", AddStreet(), false);
}

function RemoveStreet() {
    var NameDelateRoute = prompt("Qu'elle route voulez vous supprimer (nom rue)");
    console.log(NameDelateRoute);

    model.features.forEach(function (rue, rueIndex) {
        if (rue.properties.name === NameDelateRoute) {
            console.log(NameDelateRoute);
            model.features.splice(rueIndex, 1);
            console.log(model);
        }
    });
    console.log(model);
    clearCanvas();
    drawRoute(model);
    drawLights(model);
}
