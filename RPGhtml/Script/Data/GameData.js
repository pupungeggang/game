// Skill Data format
// ID Name Element Energy Play

const skillDataIndex = {
    'ID' : 0, 'Name' : 1, 'Element' : 2, 'Energy' : 3, 'Play' : 4
};

const skillData = {
    101 : [101, 'Energy Restore', 'Fire', 0, 'Instant'],
    201 : [201, 'Snowball', 'Water', 1, 'SpellUnit'],
    301 : [301, 'Growth', 'Nature', 2, 'SpellUnit'],
    401 : [401, 'Earth Armor', 'Earth', 2, 'Instant'],
    501 : [501, 'Heal', 'Light', 2, 'SpellUnit'],
    601 : [601, 'Draw', 'Dark', 1, 'Instant'],
    701 : [701, 'Choco stone', 'Normal', 2, 'Instant'],
    702 : [702, 'Strike', 'Normal', 2, 'SpellUnit']
}

const skillDescription = {
    101 : 'Restore 1 energy.',
    201 : 'Give character frost.',
    301 : 'Give unit +1/+2.',
    401 : 'Gain 3 shield.',
    501 : 'Restore 3 life.',
    601 : 'LifeCost 3, Draw a card.',
    701 : 'Summon 2/1 Choco Warrior.',
    702 : 'Deal 2 Damage to a unit.'
}