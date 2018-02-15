var model = null;

function drawMap(model) {
    zoom();
    drawRoute(model);
    drawLights(model);
}



function PopCars() {
    var nbCar = prompt("Combien de véhicule souhaite aller à cette évènement ?");
    for (var i = 0; i < nbCar; i++) {
        generateVehicules(model);
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
    intervalAnimationsLights = setInterval(changeState, 2000);
}

function runAnimationCars() {
    intervalAnimationsCars = setInterval(mainloop, 40);
}


function clearCanvas() {
    var canvas, ctx, w, h;
    canvas = document.querySelector("#mon_canvas");
    w = canvas.width;
    h = canvas.height;
    ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, w, h);
    drawRoute(model);
}

function mainloop() {
    clearCanvas();
    drawRoute(model);
    redrawLights();
    drawEvents();
    roule();
    flag++;
    if (flag >= 500) {
        clearInterval(intervalAnimationsCars);
        clearInterval(intervalAnimationsLights);
        storeData(10);
        // sendData(myData);
    }
    if (voitures.length === 0) {
        flag = 500;
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



function ChangeModel(){
    var select = document.getElementById("selectModel");
    var selectedModel = select.options[select.selectedIndex].value;
    if(selectedModel === 'Nice Est'){
        model = Nice;

    }else{
         model = Nice2;
    }
    clearCanvas();
    drawRoute(model);
    drawLights(model);
}


ChangeModel();
drawMap(model);


