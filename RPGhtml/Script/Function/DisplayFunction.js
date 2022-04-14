function displayInit() {
    context.fillStyle = 'Black';
    context.strokeStyle = 'Black';
    context.font = '60px Opensans';
    context.lineWidth = 2;
}

function strokeRectArray(rect) {
    context.strokeRect(rect[0], rect[1], rect[2], rect[3]);
}

function fillRectArray(rect) {
    context.fillRect(rect[0], rect[1], rect[2], rect[3]);
}
