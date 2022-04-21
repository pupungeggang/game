// Card data format
// ID Name Type Rarity Element Energy Attack Life Ability Play

const cardDataIndex = {
    'ID' : 0, 'Name' : 1, 'Type' : 2, 'Rarity' : 3, 'Element' : 4, 'Energy' : 5, 'Attack' : 6, 'Life' : 7, 'Ability' : 8, 'Play' : 9
};

const cardData = {
    1001 : [1001, 'Energy Bolt', 'Unit', 'Common', 'Fire', 1, 1, 1, 'Play', 'UnitUnit'],
    1002 : [1002, 'Charge Token', 'Spell', 'Common', 'Fire', 1, 0, 0, '', 'Instant'],
    1003 : [1003, 'Energy Cell', 'Spell', 'Common', 'Fire', 2, 0, 0, '', 'Instant'],
    2001 : [2001, 'Ice cream Warrior', 'Unit', 'Common', 'Water', 2, 2, 3, '', 'UnitNormal'],
    2002 : [2002, 'Snowflakes', 'Spell', 'Common', 'Water', 1, 0, 0, '', 'Instant'],
    2003 : [2003, 'Ice Archer', 'Unit', 'Common', 'Water', 2, 2, 2, 'Play', 'UnitUnit'],
    3001 : [3001, 'Sapling', 'Spell', 'Common', 'Nature', 1, 0, 0, 'Instant'],
    3002 : [3002, 'Gardener', 'Unit', 'Common', 'Nature', 3, 2, 2, 'UnitUnit'],
    3003 : [3003, 'Herb Guardian', 'Unit', 'Common', 'Nature', 4, 4, 5, 'Guard', 'UnitNormal'],
    4001 : [4001, 'Armor Up', 'Spell', 'Common', 'Earth', 1, 0, 0, '', 'Instant'],
    4002 : [4002, 'Stone Warrior', 'Unit', 'Common', 'Earth', 2, 1, 4, '', 'UnitNormal'],
    4003 : [4003, 'Shield Warrior', 'Unit', 'Common', 'Earth', 2, 2, 3, 'Guard', 'UnitNormal'],
    5001 : [5001, 'Heal', 'Spell', 'Common', 'Light', 1, 0, 0, '', 'Unit'],
    5002 : [5002, 'Draw', 'Spell', 'Common', 'Light', 2, 0, 0, '', 'Instant'],
    5003 : [5003, 'Light Cake', 'Unit', 'Common', 'Light', 2, 2, 2, 'Play', 'UnitNormal'],
    6001 : [6001, 'Sugar Warrior', 'Unit', 'Common', 'Dark', 1, 2, 2, 'Play', 'UnitNormal'],
    6002 : [6002, 'Altar', 'Unit', 'Common', 'Dark', 3, 4, 5, 'Play', 'UnitNormal'],
    6003 : [6003, 'Draw', 'Spell', 'Common', 'Dark', 3, 0, 0, '', 'Instant'],
    7001 : [7001, 'Cookie Warrior', 'Unit', 'Common', 'Normal', 1, 1, 2, '', 'UnitNormal'],
    7002 : [7002, 'Biscuit Warrior', 'Unit', 'Common', 'Normal', 2, 2, 3, '', 'UnitNormal'],
    7003 : [7003, 'Cake Warrior', 'Unit', 'Common', 'Normal', 3, 3, 4, '', 'UnitNormal'],
};

const cardDescription = {
    1001 : 'Play : Deal 1 Damage.',
    1002 : 'Gain +1 Energy.',
    1003 : 'Gain +1 Max Energy.',
    2001 : 'Whenever this unit gains frost, Gain +1/+1',
    2002 : 'Give a character Frost.',
    2003 : 'Play : Give a character frost.',
    3001 : 'Summon two 1/1 Saplings.',
    3002 : 'Play : Give a unit +2/+2.',
    3003 : 'Guard',
    4001 : 'Gain +4 Shield.',
    4002 : 'If this unit is damaged, Gain +2 Attack',
    4003 : 'Guard',
    5001 : 'Restore 4 Life.',
    5002 : 'Draw 1 card. If your life is less than half, Draw 2 cards instead.',
    5003 : 'If your list is less than half, Gain +2/+2.',
    6001 : 'Lifecost : 1',
    6002 : 'Play : Discard 1 card from your hand.',
    6003 : 'Draw 2 cards.',
    7001 : '',
    7002 : '',
    7003 : '',
};