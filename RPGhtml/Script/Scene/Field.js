var UIField = {
    info : {
        rect : [160, 160, 960, 400]
    }
};

function loopField() {
    displayField();
}

function displayField() {
    displayInit();

    context.clearRect(0, 0, 1280, 720);

    for (var i = 0; i < field.wall.length; i++) {
        for (var j = 0; j < field.wall[0].length; j++) {
            context.strokeRect((j - field.camera[0]) * 80, (i - field.camera[1]) * 80, 80, 80);
        }
    }

    if (state === 'Info') {
        context.fillStyle = 'White';
        fillRectArray(UIField.info.rect);
        strokeRectArray(UIField.info.rect);
    }
}

function mouseUpField(x, y) {

}

function keyDownField(key) {
    if (state === '') {
        if (key === 73 || key === 105) {
            state = 'Info';
        }
    } else if (state === 'Info') {
        if (key === 73 || key === 105) {
            state = '';
        }
    }
}