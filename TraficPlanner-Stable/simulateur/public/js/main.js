var myData = 'toto va a la plage';
//var http = require('http');

var options = {
  host: 'localhost',
  port: 3001,
  path: '/stats'
};

function sendData(data) {
  console.log("Send Data");
  /*http.get(options, function(res) {
    console.log("Got response: " + res.statusCode + " data : " + data );
    res.on('data', function (chunk) {
      console.log('BODY: ' + chunk);
    });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });

  res.send("Succes");
  */
}


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
    intervalAnimationsCars = setInterval(mainloop, 200);
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
    if (flag >= 50) {
        clearInterval(intervalAnimationsCars);
        clearInterval(intervalAnimationsLights);
        sendData(myData);
    }
    if (voitures.length === 0) {
        flag = 200;
    }
}



function sendData3(data) {
    var http = new XMLHttpRequest();
    var url = "http://localhost:7500";

    var params = JSON.stringify({ data: data });
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/json");

    http.onreadystatechange = function () {//Call a function when the state changes.
        //document.getElementById("log").innerHTML = status;
        if (http.readyState == XMLHttpRequest.DONE && http.status == 200) {
            console.log('oui');
        }
    };
    http.send(JSON.stringify({ data: data }));
}

function sendData2(dataStatistiaue) {
    $.post("http://localhost:7500", {data:dataStatistiaue}, function (data) {
        if (data === 'done') {
            alert("ouiiii");
        }
    });
}

