var UISaveSelect = {
    titleText : [8, 60],
    fileButton : [[160, 160, 960, 160], [160, 320, 960, 160], [160, 480, 960, 160]],
    fileText1 : [[168, 220], [168, 380], [168, 540]],
    fileText2 : [[168, 300], [168, 460], [168, 620]],
};

function loopSaveSelect() {
    displaySaveSelect();
}

function displaySaveSelect() {
    displayInit();

    context.clearRect(0, 0, 1280, 720);

    context.fillText(`Select save file`, UISaveSelect.titleText[0], UISaveSelect.titleText[1]);

    context.fillStyle = 'White';
    
    for (var i = 0; i < 3; i++) {
        fillRectArray(UISaveSelect.fileButton[i]);
        strokeRectArray(UISaveSelect.fileButton[i]);
    }

    context.fillStyle = 'Black';
    
    for (var i = 0; i < 3; i++) {
        context.fillText(`Save ${i + 1}`, UISaveSelect.fileText1[i][0], UISaveSelect.fileText1[i][1]);

        if (save[i] === 'New') {
            context.fillText(`New`, UISaveSelect.fileText2[i][0], UISaveSelect.fileText2[i][1]);
        }
    }
}

function mouseUpSaveSelect(x, y) {
    if (state === '') {
        for (var i = 0; i < 3; i++) {
            if (pointInsideRectArray(x, y, UISaveSelect.fileButton[i])) {
                if (save[i] === 'New') {
                    startNewGame();
                }
                scene = 'Field';
            }
        }
    }
}
