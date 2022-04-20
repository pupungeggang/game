window = None
scene = 'title'
state = ''

class Cursor():
    class Title():
        menu = 0

    class Save_Select():
        save = 0

    class Roguelike_Menu():
        level = 0
        character = 0

    class Roguelike_Start():
        select = 0

class Save():
    data = {
        0 : '',
        1 : '',
        2 : '',
    }

class Select():
    class Roguelike_Menu():
        level = 0
        character = 0

class Pool():
    card = { 
        'all' : [],
        'fire' : [],
        'water' : [],
        'nature' : [],
        'earth' : [],
        'light' : [],
        'normal' : []
    }

    item = {
        'common' : [],
    }

class Field():
    wall = []
    thing = []
    portal = []

class Player():
    level = 0
    exp = 0
    exp_max = 0
    life = 20

    card = []
    equip = []
    item = []

class Player_Rogue():
    level = 0
    exp = 0
    exp_max = 0
    life = 20

    deck = []
    equip = []
    item = []
