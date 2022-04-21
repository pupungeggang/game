var UIRoguelikeSelect = {
    titleText : [8, 60],
};

function loopRoguelikeSelect() {
    displayRoguelikeSelect();
}

function displayRoguelikeSelect() {
    displayInit();

    context.clearRect(0, 0, 1280, 720);

    if (state === 'SelectSkill') {
        context.fillText(`Select Skill`, UIRoguelikeSelect.titleText[0], UIRoguelikeSelect.titleText[1]);
    } else if (state === 'SelectEquip') {
        context.fillText(`Select start equipment`, UIRoguelikeSelect.titleText[0], UIRoguelikeSelect.titleText[1]);
    } else if (state === 'SelectCard') {
        context.fillText(`Select Card ${select.numOfCard}/12`, UIRoguelikeSelect.titleText[0], UIRoguelikeSelect.titleText[1]);
    }
}

function mouseUpRogueliekSelect(x, y) {

}