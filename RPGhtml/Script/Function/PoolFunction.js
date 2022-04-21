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