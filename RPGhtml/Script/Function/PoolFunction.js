function cardPoolGenerate() {

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

    if (type === 'Skill') {
        for (var i = 0; i < keyword.length; i++) {
            for (var j = 0; j < pool.skill[keyword[i]].length; j++) {
                tempPool.push(pool.skill[keyword[i]][j]);
            }
        }
    }

    for (var i = 0; i < 3; i++) {
        tempIndex = Math.floor(Math.random() * tempPool.length);
        result[i] = tempPool.splice(tempIndex, 1)[0];
    }

    return result;
}
