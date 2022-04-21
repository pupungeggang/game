var UITitle = {
    titleText : [8, 60],
    startButton : [160, 160, 960, 80],
    startText : [168, 220],
    roguelikeButton : [160, 240, 960, 80],
    roguelikeText : [168, 300],
    optionButton : [160, 320, 960, 80],
    optionText : [168, 380],
    aboutButton : [160, 400, 960, 80],
    aboutText : [168, 460],
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
    fillRectArray(UITitle.roguelikeButton);
    strokeRectArray(UITitle.roguelikeButton);
    fillRectArray(UITitle.optionButton);
    strokeRectArray(UITitle.optionButton);
    fillRectArray(UITitle.aboutButton);
    strokeRectArray(UITitle.aboutButton);

    context.fillStyle = 'Black';
    context.fillText(`Start Game`, UITitle.startText[0], UITitle.startText[1]);
    context.fillText(`Roguelike`, UITitle.roguelikeText[0], UITitle.roguelikeText[1]);
    context.fillText(`Option`, UITitle.optionText[0], UITitle.optionText[1]);
    context.fillText(`About`, UITitle.aboutText[0], UITitle.aboutText[1]);
    context.fillText(`Version 0.0.1`, UITitle.versionText[0], UITitle.versionText[1]);
}

function mouseUpTitle(x, y) {
    if (state === '') {
        if (pointInsideRectArray(x, y, UITitle.startButton)) {
            scene = 'SaveSelect';
        } else if (pointInsideRectArray(x, y, UITitle.roguelikeButton)) {
            scene = 'RoguelikeReady';
        }
    }    
}
