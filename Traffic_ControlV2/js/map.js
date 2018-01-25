

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

function zoom(){
    var c = document.getElementById("mon_canvas");
    var ctx = c.getContext("2d");
    ctx.scale(10, 10);
}




