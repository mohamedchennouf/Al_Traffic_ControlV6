var frameCount = 0;
var lastTime;
var fps;
var time=0;

var measureFPS = function (newTime) {
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
    //console.log(fps);  // and display it in an element we appended to the
    // document in the start() function
    document.getElementById("fps").innerHTML = 'FPS: ' + fps;
    frameCount++;
};



function StatistiqueTimer() {
    var d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
}

function StatistiqueData(){
    if(flag < 200 ){
        document.getElementById("dataStatistique").innerHTML = 'wait the end of simulation' ;
    }else{ //TODO display the real data in the canvas
        document.getElementById("dataStatistique").innerHTML = 'data are present in http://localhost:7500/statistique ';
    }
    
}


function UI_Statistique(){
    StatistiqueTimer();
    StatistiqueData();
}