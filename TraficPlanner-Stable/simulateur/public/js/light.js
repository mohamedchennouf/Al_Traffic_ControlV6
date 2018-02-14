
var lights = [];
function buildFeux(data) {
    var rues = data.features;
    rues.forEach(function (rue, rueIndex) {
        if (rue.properties.vertical) {
            var position = rue.geometry.coordinates;
            position.forEach(function (posLight, posIndex) {
                var rand = getRandomInt(2);
                if(rand===0){
                    lights.push({ posX: posLight[0], posY: posLight[1], state: 'red' });
                }else{
                    lights.push({ posX: posLight[0], posY: posLight[1], state: 'green' });
                }
            });
        }
    });
    
    return lights;
}


function drawLights(data) {
    buildFeux(data);
    redrawLights();
}

function redrawLights() {
    lights.forEach(function (light) {
        drawLight(light);
    });
}



function changeState() {
    lights.forEach(function (light) {
        if (light.state === 'green') {
            light.state = 'red';
        } else {
            light.state = 'green';
        }
    });
}



function drawLight(light) {
    var ctx = document.getElementById('mon_canvas').getContext('2d');
    var imageLight = new Image();
    imageLight.onload = function () {
        ctx.drawImage(imageLight, light.posX, light.posY, 2, 2);
    };
    if (light.state === 'green') {
        imageLight.src = './image/lightgreen.png';
    } else {
        imageLight.src = './image/lightred.png';
    }
}


module.exports ={lights,buildFeux,drawLights,redrawLights,changeState,drawLight}

