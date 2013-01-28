var canvasElement = document.getElementById("game");
var canvasContext = canvasElement.getContext("2d");
var CANVAS_WIDTH = canvasElement.width;
var CANVAS_HEIGHT = canvasElement.height;

var displayItems = new displayItemMap(canvasContext);
