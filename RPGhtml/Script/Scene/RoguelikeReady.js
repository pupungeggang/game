var UIRoguelikeReady = {
    titleText : [8, 60],
    backButton : [1160, 40, 80, 80],
    level : [[160, 160, 80, 80], [240, 160, 80, 80], [320, 160, 80, 80], [400, 160, 80, 80], [480, 160, 80, 80], [560, 160, 80, 80]],
    character : [[160, 400, 80, 80], [240, 400, 80, 80], [320, 400, 80, 80] ,[400, 400, 80, 80], [480, 400, 80, 80], [560, 400, 80, 80]],
    startButton : [1080, 600, 160, 80],
};

function loopRoguelikeReady() {
    displayRoguelikeReady();
}

function displayRoguelikeReady() {
    displayInit();
    
    context.clearRect(0, 0, 1280, 720);
    context.fillText(`Select level and character`, UIRoguelikeReady.titleText[0], UIRoguelikeReady.titleText[1]);

    strokeRectArray(UIRoguelikeReady.backButton);

    for (var i = 0; i < 6; i++) {
        strokeRectArray(UIRoguelikeReady.level[i]);
        strokeRectArray(UIRoguelikeReady.character[i]);
    }

    context.strokeStyle = 'Orange';
    context.lineWidth = 5;

    if (select.roguelikeLevel != -1) {
        strokeRectArray(UIRoguelikeReady.level[select.roguelikeLevel]);
    }

    if (select.roguelikeCharacter != -1) {
        strokeRectArray(UIRoguelikeReady.character[select.roguelikeCharacter]);
    }

    context.strokeStyle = 'Black';
    context.lineWidth = 2;
    strokeRectArray(UIRoguelikeReady.startButton);
}

function roguelikeInit() {
    select.numOfCard = 0;
    playerRoguelike.playerType = roguelikeSelectElement[select.roguelikeCharacter];
    playerRoguelike.level = 1;
    playerRoguelike.exp = 0;
    playerRoguelike.expMax = 20;
    playerRoguelike.life = 20;
    playerRoguelike.skill = -1;

    playerRoguelike.deck = [];
    playerRoguelike.equip = [];
    playerRoguelike.item = [];

    skillPoolGenerate();
    cardPoolGenerate();
}

function mouseUpRoguelikeReady(x, y) {
    if (state === '') {
        if (pointInsideRectArray(x, y, UIRoguelikeReady.backButton)) {
            scene = 'Title';
        }

        for (var i = 0; i < 6; i++) {
            if (pointInsideRectArray(x, y, UIRoguelikeReady.level[i])) {
                select.roguelikeLevel = i;
            }

            if (pointInsideRectArray(x, y, UIRoguelikeReady.character[i])) {
                select.roguelikeCharacter = i;
            }
        }

        if (pointInsideRectArray(x, y, UIRoguelikeReady.startButton)) {
            if (select.roguelikeCharacter != -1 && select.roguelikeLevel != -1) {
                roguelikeInit();
                scene = 'RoguelikeSelect';
                state = 'SelectSkill';
                select.selectThree = selectThreeFromPool('Skill', ['Normal', playerRoguelike.playerType]);
            }
        }
    }
}
