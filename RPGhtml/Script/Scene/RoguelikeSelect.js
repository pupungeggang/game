var UIRoguelikeSelect = {
    titleText : [8, 60],

    description : [80, 80, 640, 160],
    descriptionText1 : [88, 100],
    descriptionText2 : [88, 120],
    selectThree : [[160, 400, 160, 160], [320, 400, 160, 160], [480, 400, 160, 160]],
    selectButton : [[160, 560, 160, 80], [320, 560, 160, 80], [480, 560, 160, 80]],
};

function loopRoguelikeSelect() {
    displayRoguelikeSelect();
}

function displayRoguelikeSelect() {
    displayInit();

    context.clearRect(0, 0, 1280, 720);
    strokeRectArray(UIRoguelikeSelect.description);

    if (state === 'SelectSkill') {
        context.fillText(`Select Skill`, UIRoguelikeSelect.titleText[0], UIRoguelikeSelect.titleText[1]);

        if (select.roguelikeDescription != -1) {
            context.font = '20px Opensans';
            context.fillText(`${skillData[select.selectThree[select.roguelikeDescription]][skillDataIndex['Name']]}`, UIRoguelikeSelect.descriptionText1[0], UIRoguelikeSelect.descriptionText1[1]);
            context.fillText(`${skillDescription[select.selectThree[select.roguelikeDescription]]}`, UIRoguelikeSelect.descriptionText2[0], UIRoguelikeSelect.descriptionText2[1]);
        }
    } else if (state === 'SelectEquip') {
        context.fillText(`Select start equipment`, UIRoguelikeSelect.titleText[0], UIRoguelikeSelect.titleText[1]);
    } else if (state === 'SelectCard') {
        context.fillText(`Select Card ${select.numOfCard}/12`, UIRoguelikeSelect.titleText[0], UIRoguelikeSelect.titleText[1]);

        if (select.roguelikeDescription != -1) {
            context.font = '20px Opensans';
            context.fillText(`${cardData[select.selectThree[select.roguelikeDescription]][cardDataIndex['Name']]}`, UIRoguelikeSelect.descriptionText1[0], UIRoguelikeSelect.descriptionText1[1]);
            context.fillText(`${cardDescription[select.selectThree[select.roguelikeDescription]]}`, UIRoguelikeSelect.descriptionText2[0], UIRoguelikeSelect.descriptionText2[1]);
        }
    }

    for (var i = 0; i < 3; i++) {
        strokeRectArray(UIRoguelikeSelect.selectThree[i]);
        strokeRectArray(UIRoguelikeSelect.selectButton[i]);
    }
}

function mouseUpRoguelikeSelect(x, y) {
    if (state === 'SelectSkill') {
        for (var i = 0; i < 3; i++) {
            if (pointInsideRectArray(x, y, UIRoguelikeSelect.selectThree[i])) {
                select.roguelikeDescription = i;
            }
        }

        for (var i = 0; i < 3; i++) {
            if (pointInsideRectArray(x, y, UIRoguelikeSelect.selectButton[i])) {
                select.roguelikeDescription = -1;
                select.selectThree = selectThreeFromPool('Card', ['Normal', playerRoguelike.playerType]);
                state = 'SelectCard';
            }
        }
    } else if (state === 'SelectCard') {
        for (var i = 0; i < 3; i++) {
            if (pointInsideRectArray(x, y, UIRoguelikeSelect.selectThree[i])) {
                select.roguelikeDescription = i;
            }
        }
    }
}
