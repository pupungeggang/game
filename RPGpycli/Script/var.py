window = None
scene = 'title'
state = ''

class Cursor():
    class Title():
        menu = 0

    class Roguelike_Menu():
        level = 0
        character = 0

    class Save_Select():
        save = 0

class Select():
    class Roguelike_Menu():
        level = 0
        character = 0

class Pool():
    card = { 
        'fire' : [],
        'water' : [],
        'nature' : [],
        'earth' : [],
        'light' : [],
        'normal' : []
    },

    item = {
        'common' : [],
    },