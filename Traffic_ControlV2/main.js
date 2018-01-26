
/*
var frameCount = 0;
var lastTime;
var fpsContainer;
var fps;



window.onload = function init() {
    var simulation = new Simulation();
    // Launch the game, start the animation loop, etc.
    simulation.start();
};


var Simulation = function () {
    var canvas, ctx, w, h;
    canvas = document.querySelector("#mon_canvas");
    // Often useful
    w = canvas.width;
    h = canvas.height;
    // Important, we will draw with this object
    ctx = canvas.getContext('2d');
    // necessary to take into account CSS boudaries
    var rect = canvas.getBoundingClientRect();




    var measureFPS = function (newTime) {
        // test for the very first invocation
        if (lastTime === undefined) {
            lastTime = newTime;
            return;
        }
        // calculate the delta between last & current frame
        var diffTime = newTime - lastTime;
        if (diffTime >= 1000) {
            fps = frameCount;
            frameCount = 0;
            lastTime = newTime;
        }
        // and display it in an element we appended to the
        // document in the start() function
        fpsContainer.innerHTML = 'FPS: ' + fps;
        frameCount++;
    };


    function clearCanvas() {
        ctx.clearRect(0, 0, w, h);
    }

    function drawSimulation(data) {
        // Draw a big monster!
        // Head
        // BEST practice: save the context, use 2D transformations
        ctx.save();
        
        drawRoute(data,ctx);
        redrawLights(ctx);
        if(voitures.length!==0){
            console.log('ooo');
            redrawVehicules(ctx);
        }


        ctx.restore();
    }





    var mainLoop = function (time) {
        // main function, called each frame
        //document.body.innerHTML = Math.random();
        // call the animation loop every 1/60th of second
        measureFPS(time);
        clearCanvas();
        drawSimulation(Nice);
        requestAnimationFrame(mainLoop);
    };

    var start = function () {
        // adds a div for displaying the fps value
        fpsContainer = document.querySelector("#fps");
        //document.body.appendChild(fpsContainer);
        canvas = document.querySelector("#mon_canvas");
        // often useful
        w = canvas.width;
        h = canvas.height;
        // important, we will draw with this object
        ctx = canvas.getContext('2d');
        zoom();
        buildFeux(Nice);
        // Start the animation
        requestAnimationFrame(mainLoop);
    };


    // Our GameFramework returns a public API visible from outside its scope
    // Here we only expose the start method, under the "start" property name.
    return {
        start: start
    };
};


function writeMessage(canvas, message) {
    var ctx = canvas.getContext('2d');
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '18pt Calibri';
    ctx.fillStyle = 'black';
    ctx.fillText(message, 10, 25);
    ctx.restore();
}

function getMousePos(canvas, evt) {
    // necessary to take into account CSS boudaries
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
*/