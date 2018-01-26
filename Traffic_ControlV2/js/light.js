
var lights = [];
function buildFeux(data) {
    /*var intersection = trouverIntersection();
    intersection.forEach(function (interSection, interSectionIndex) {
        var rand = getRandomInt(2);
        if (rand === 0) {
            lights.push({ posX: interSection[0], posY: interSection[1], state: 'red' });
        } else {
            lights.push({ posX: interSection[0], posY: interSection[1], state: 'green' });
        }
    });*/
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

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
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
    //redrawLights();
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











// TODO  avoir un vrai algo pour plus tard
function trouverIntersection() {
    var intersection = [];
    intersection.push([10, 10]);
    intersection.push([70, 10]);
    intersection.push([90, 10]);
    intersection.push([30, 20]);
    intersection.push([30, 35]);
    intersection.push([90, 35]);
    intersection.push([30, 40]);
    intersection.push([70, 40]);
    intersection.push([40, 40]);
    intersection.push([37, 60]);
    intersection.push([30, 70]);
    intersection.push([80, 70]);
    intersection.push([40, 80]);
    intersection.push([90, 80]);
    intersection.push([70, 88]);
    return intersection;
}