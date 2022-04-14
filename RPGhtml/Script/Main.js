window.onload = main;
window.onerror = errorHandle;

function main() {
    canvas = document.getElementById('game');
    context = canvas.getContext('2d');
    canvasRect = canvas.getBoundingClientRect();

    canvas.addEventListener('mouseup', mouseUp, false);
    window.addEventListener('keydown', keyDown, false); 

    saveInit();
    gameInstance = setInterval(loop, 25);
}

function errorHandle(a, b, c) {
    clearInterval(gameInstance);
    console.log(`${a} ${b} ${c}`);
}

function loop() {
    if (scene === 'Title') {
        loopTitle();
    } else if (scene === 'SaveSelect') {
        loopSaveSelect();
    }
}

function mouseUp(event) {
    var x = event.clientX - canvasRect.left;
    var y = event.clientY - canvasRect.top;

    if (scene === 'Title') {
        mouseUpTitle(x, y);
    } else if (scene === 'SaveSelect') {
        mouseUpSaveSelect(x, y);
    }
}

function keyDown(event) {
}
