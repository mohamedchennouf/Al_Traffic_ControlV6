function drawMap(model) {
    zoom();
    drawRoute(model);
    drawLights(model);
}

drawMap(Nice);
//makeEvent();

function PopCars() {
    var nbCar = prompt("Combien de véhicule souhaite aller à cette évènement ?");
    for (var i = 0; i < nbCar; i++) {
        generateVehicules(Nice);
    }
    redrawVehicules();
}


function runAnimation() {
    runAnimationLights();
    runAnimationCars();
}

var intervalAnimationsCars;
var intervalAnimationsLights;
var flag = 1;

function runAnimationLights() {
    intervalAnimationsLights = setInterval(changeState, 3000);
}

function runAnimationCars() {
    intervalAnimationsCars = setInterval(mainloop,200);
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
    redrawLights();
    drawEvents();
    roule();
    //measureFPS();
    flag++;
    if (flag >= 200) {
        clearInterval(intervalAnimationsCars);
        clearInterval(intervalAnimationsLights);
        storeData(10);
       // sendData(myData);
    }
    if (voitures.length === 0) {
        flag = 200;
    }
}

function storeData(nb) {
  console.log("Store");
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3002/store", true);
  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      console.log("readyState ")
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.send(null);
}
