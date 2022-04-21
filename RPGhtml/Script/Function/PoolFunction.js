function cardPoolGenerate() {
    pool.card['Fire'] = [];
    pool.card['Water'] = [];
    pool.card['Nature'] = [];
    pool.card['Earth'] = [];
    pool.card['Light'] = [];
    pool.card['Dark'] = [];
    pool.card['Normal'] = [];

    for (var i = 0; i < allCard.length; i++) {
        if (cardData[allCard[i]][cardDataIndex['Element']] === 'Fire') {
            pool.card['Fire'].push(allCard[i]);
        }

        if (cardData[allCard[i]][cardDataIndex['Element']] === 'Water') {
            pool.card['Water'].push(allCard[i]);
        }

        if (cardData[allCard[i]][cardDataIndex['Element']] === 'Nature') {
            pool.card['Nature'].push(allCard[i]);
        }

        if (cardData[allCard[i]][cardDataIndex['Element']] === 'Earth') {
            pool.card['Earth'].push(allCard[i]);
        }

        if (cardData[allCard[i]][cardDataIndex['Element']] === 'Light') {
            pool.card['Light'].push(allCard[i]);
        }

        if (cardData[allCard[i]][cardDataIndex['Element']] === 'Dark') {
            pool.card['Dark'].push(allCard[i]);
        }

        if (cardData[allCard[i]][cardDataIndex['Element']] === 'Normal') {
            pool.card['Normal'].push(allCard[i]);
        }
    }
}

function skillPoolGenerate() {
    pool.skill['Fire'] = [];
    pool.skill['Water'] = [];
    pool.skill['Nature'] = [];
    pool.skill['Earth'] = [];
    pool.skill['Light'] = [];
    pool.skill['Dark'] = [];
    pool.skill['Normal'] = [];

    for (var i = 0; i < allSkill.length; i++) {
        if (skillData[allSkill[i]][skillDataIndex['Element']] === 'Fire') {
            pool.skill['Fire'].push(allSkill[i]);
        }

        if (skillData[allSkill[i]][skillDataIndex['Element']] === 'Water') {
            pool.skill['Water'].push(allSkill[i]);
        }

        if (skillData[allSkill[i]][skillDataIndex['Element']] === 'Nature') {
            pool.skill['Nature'].push(allSkill[i]);
        }

        if (skillData[allSkill[i]][skillDataIndex['Element']] === 'Earth') {
            pool.skill['Earth'].push(allSkill[i]);
        }

        if (skillData[allSkill[i]][skillDataIndex['Element']] === 'Light') {
            pool.skill['Light'].push(allSkill[i]);
        }

        if (skillData[allSkill[i]][skillDataIndex['Element']] === 'Dark') {
            pool.skill['Dark'].push(allSkill[i]);
        }

        if (skillData[allSkill[i]][skillDataIndex['Element']] === 'Normal') {
            pool.skill['Normal'].push(allSkill[i]);
        }
    }
}

function selectThreeFromPool(type, keyword, operator = 'Or') {
    var result = ['None', 'None', 'None'];
    var tempPool = [];
    var tempIndex = 0;

    if (operator === 'Or') {
        if (type === 'Skill') {
            for (var i = 0; i < keyword.length; i++) {
                for (var j = 0; j < pool.skill[keyword[i]].length; j++) {
                    tempPool.push(pool.skill[keyword[i]][j]);
                }
            }
        } else if (type === 'Card') {
            for (var i = 0; i < keyword.length; i++) {
                for (var j = 0; j < pool.card[keyword[i]].length; j++) {
                    tempPool.push(pool.card[keyword[i]][j]);
                }
            }
        }

        for (var i = 0; i < 3; i++) {
            tempIndex = Math.floor(Math.random() * tempPool.length);
            result[i] = tempPool.splice(tempIndex, 1)[0];
        }
    }

    return result;
}
