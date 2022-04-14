var canvas;
var context;
var canvasRext;
var gameInstance;

var scene = 'Title';
var state = '';

var field = {
    place : '',
    floor : [],
    wall : [],
    thing : [],
    portal : [],

    camera : [0, 0],
    playerPosition : [0, 0]
};

var player = {
    level : 0,
    exp : 0,
    expMax : 0,

    card : [],
    equip : [],
    item : [],
    deck : [],
    techTree : [],
};