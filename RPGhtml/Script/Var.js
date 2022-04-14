var canvas;
var context;
var canvasRext;
var gameInstance;

var scene = 'Title';
var state = '';

var field = {
    floor : [],
    wall : [],
    thing : [],
    portal : [],

    camera : [0, 0],
    playerPosition : [0, 0]
};

var player = {

};