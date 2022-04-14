var UITitle = {
    titleText : [8, 60],
    startButton : [160, 160, 960, 160],
    startText : [168, 220],
    optionButton : [160, 320, 960, 160],
    optionText : [168, 380],
    aboutButton : [160, 480, 960, 160],
    aboutText : [168, 540],
    versionText : [8, 700],
};

function loopTitle() {
    displayTitle();
}

function displayTitle() {
    displayInit();

    context.clearRect(0, 0, 1280, 720);

    context.fillText(`Desserterria-RPG`, UITitle.titleText[0], UITitle.titleText[1]);

    context.fillStyle = 'White';
    fillRectArray(UITitle.startButton);
    strokeRectArray(UITitle.startButton);
    fillRectArray(UITitle.optionButton);
    strokeRectArray(UITitle.optionButton);
    fillRectArray(UITitle.aboutButton);
    strokeRectArray(UITitle.aboutButton);

    context.fillStyle = 'Black';
    context.fillText(`Start Game`, UITitle.startText[0], UITitle.startText[1]);
    context.fillText(`Option`, UITitle.optionText[0], UITitle.optionText[1]);
    context.fillText(`About`, UITitle.aboutText[0], UITitle.aboutText[1]);
    context.fillText(`Version 0.0.1`, UITitle.versionText[0], UITitle.versionText[1]);
}

function mouseUpTitle(x, y) {
    if (state === '') {
        if (pointInsideRectArray(x, y, UITitle.startButton)) {
            scene = 'SaveSelect';
        }
    }    
}
