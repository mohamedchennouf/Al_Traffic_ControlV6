
var Event = [];

function makeEvent() {
        var c = document.getElementById("mon_canvas");
        var ctx = c.getContext("2d");
        c.addEventListener("click", function (event) {
            var evenement = confirm("Voulez vous ajouter un evenement ?");
            if (evenement == true) {
                var posX = event.pageX / 10;
                var posY = event.pageY / 10;
                Event.push({ posX: posX, posY: posY });
                drawEvent({ posX: posX, posY: posY });
            }
        });
}

 makeEvent();

function drawEvents() {
    Event.forEach(function (ev) {
        drawEvent(ev);
    });
}

function drawEvent(ev) {
    var c = document.getElementById("mon_canvas");
    var ctx = c.getContext("2d");
    var imageEvent = document.getElementById("event");
    ctx.drawImage(imageEvent, ev.posX, ev.posY, 3, 3);
}