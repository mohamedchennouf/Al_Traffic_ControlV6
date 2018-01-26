function drawMap(model) {
    zoom();
    drawRoute(model);
    drawLights(model);
}

drawMap(Nice);
makeEvent();

function PopCars() {
    var nbCar = prompt("Combien de véhicule souhaite aller à cette évènement ?");
    for (var i = 0; i < nbCar; i++) {
        generateVehicules(Nice);
    }
    redrawVehicules();
}


function runAnimation() {
    //requestAnimationFrame(mainloop);
    runAnimationLights();
    runAnimationCars();
}


function runAnimationLights() {
    setInterval(changeState, 3000);
}

function runAnimationCars() {
    setInterval(mainloop, 200);
}


function clearCanvas() {
    var canvas, ctx, w, h;
    canvas = document.querySelector("#mon_canvas");
    w = canvas.width;
    h = canvas.height;
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, w, h);
}

function mainloop() {
    clearCanvas();
    drawRoute(Nice);
    //changeState();
    redrawLights();
    drawEvents();
    roule();
    StatistiqueTimer();
    measureFPS();
    //requestAnimationFrame(mainloop);
}