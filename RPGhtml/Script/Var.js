var canvas;
var context;
var canvasRext;
var gameInstance;

var scene = 'Title';
var state = '';

var select = {
    roguelikeLevel : -1,
    roguelikeCharacter : -1,
    numOfCard : 0,
};

var pool = {
    card : {
        'Fire' : [],
        'Water' : [],
        'Nature' : [],
        'Earth' : [],
        'Light' : [],
        'Dark' : [],
        'Normal' : [],
    },

    equip : {
        'Fire' : [],
        'Water' : [],
        'Nature' : [],
        'Earth' : [],
        'Light' : [],
        'Dark' : [],
        'Normal' : [],
    },

    skill : {
        'Fire' : [],
        'Water' : [],
        'Nature' : [],
        'Earth' : [],
        'Light' : [],
        'Dark' : [],
        'Normal' : [],
    },
};

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
    life : 0,

    card : [],
    equip : [],
    item : [],
    deck : [],
    techTree : [],
};

var varRoguelike = {
    floor : 0,
    map : [[0, 1, 1, 1, 1],
           [1, 1, 1, 1, 1],
           [1, 1, 1, 1, 1],
           [1, 1, 1, 1, 1],
           [1, 1, 1, 1, 5]],
};

var playerRoguelike = {
    playerID : 0,
    playerType : '',
    level : 0,
    exp : 0,
    expMax : 0,
    life : 0,
    skill : 0,

    deck : [],
    equip : [],
    item : [],
    techTree : [],
};