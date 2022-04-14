function saveInit() {
    if (localStorage.getItem('DesserterriaRPG') === null || localStorage.getItem('DesserterriaRPG') === '[object Object]') {
        localStorage.setItem('DesserterriaRPG', JSON.stringify(emptySave));
    }

    loadData();
}

function saveData() {
    localStorage.setItem('DesserterriaRPG', save);
}

function loadData() {
    save = JSON.parse(localStorage.getItem('DesserterriaRPG'));
}

function clearData() {
    localStorage.setItem('DesserterriaRPG', JSON.stringify(emptySave));
    loadData();
}

function startNewGame() {
    field.place = 'HomeTown';
    loadField(field.place);

    field.playerPos = [1, 1];
    field.camera = [0, 0];
}

function loadField(place) {
    field.floor = [];
    field.wall = [];
    field.thing = [];
    field.portal = [];
    
    var temp = [];

    for (i = 0; i < mapData[place]['Floor'].length; i++) {
        temp = [];

        for (j = 0; j < mapData[place]['Floor'][0].length; j++) {
            temp.push(mapData[place]['Floor'][i][j]);
        }

        field.floor.push(temp);
    }

    for (i = 0; i < mapData[place]['Wall'].length; i++) {
        temp = [];

        for (j = 0; j < mapData[place]['Wall'][0].length; j++) {
            temp.push(mapData[place]['Wall'][i][j]);
        }

        field.wall.push(temp);
    }

    for (i = 0; i < mapData[place]['Thing'].length; i++) {
        for (j = 0; j < 3; j++) {
            temp.push(mapData[place]['Thing'][i][j]);
        }

        field.thing.push(temp);
    }

    for (i = 0; i < mapData[place]['Portal'].length; i++) {
        temp = [];

        for (j = 0; j < 7; j++) {
            temp.push(mapData[place]['Portal'][i][j]);
        }

        field.portal.push(temp);
    }
}
