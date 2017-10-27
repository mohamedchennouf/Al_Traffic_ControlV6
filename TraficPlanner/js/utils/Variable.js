/**
 * Created by ThiernoMamadouCellou on 10/25/2017.
 */
var map;
var directionDisplay;
var directionsService;
var stepDisplay;

var position;
var Car = [];
var Light = [];
var polyline = [];
var poly2 = [];
var poly = null;
var startLocation = [];
var endLocation = [];
var timerHandle = [];
var feu = 300;
var tempsFeu = 10000;


//var start = document.getElementById("start").value;
//var end = document.getElementById("end").value;

var speed = 0.000000005, wait = 1;
var infowindow = null;

var myPano;
var panoClient;
var nextPanoId;


var Colors = ["#FF0000", "#00FF00", "#0000FF"];



var lastVertex = 1;
var stepnum=0;
var step = 20; // 5; // metres
var tick = 50; // milliseconds
var eol= [];
