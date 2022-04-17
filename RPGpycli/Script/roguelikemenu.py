import var
import const
from curses import color_pair as cp

class UI():
    title_text = [2, 2]
    level_text = [4, 2]

    level = [[6, 4], [8, 4], [10, 4], [12, 4], [14, 4], [16, 4]]
    level_cursor = [[6, 2], [8, 2], [10, 2], [12, 2], [14, 2], [16, 2]]

    character = [[6, 52], [8, 52], [10, 52], [12, 52], [14, 52], [16, 52]]
    character_cursor = [[6, 50], [8, 50], [10, 50], [12, 50], [14, 50], [16, 50]]

def loop():
    display()

def display():
    var.window.erase()

    var.window.border('#', '#', '#', '#', '#', '#', '#', '#')

    var.window.addstr(UI.title_text[0], UI.title_text[1], 'RougeLike')
    var.window.addstr(UI.level_text[0], UI.title_text[1], 'Select Level')

    for i in range(6):
        var.window.addstr(UI.level[i][0], UI.level[i][1], 'Chapter' + str(i + 1))

    if var.state == 'select_level':
        var.window.addstr(UI.level_cursor[var.Cursor.Roguelike_Menu.level][0], UI.level_cursor[var.Cursor.Roguelike_Menu.level][1], '>')

    else:
        var.window.addstr(UI.level_cursor[var.Cursor.Roguelike_Menu.level][0], UI.level_cursor[var.Cursor.Roguelike_Menu.level][1], '>', cp(const.Color.yellow))


    var.window.addstr(UI.character[0][0], UI.character[0][1], 'Fire')
    var.window.addstr(UI.character[1][0], UI.character[1][1], 'Water')
    var.window.addstr(UI.character[2][0], UI.character[2][1], 'Nature')
    var.window.addstr(UI.character[3][0], UI.character[3][1], 'Earth')
    var.window.addstr(UI.character[4][0], UI.character[4][1], 'Light')
    var.window.addstr(UI.character[5][0], UI.character[5][1], 'Dark')

    var.window.addstr(UI.character_cursor[var.Cursor.Roguelike_Menu.character][0], UI.character_cursor[var.Cursor.Roguelike_Menu.character][1], '>')

def input_handle(key):
    if key != -1:
        if var.state == 'select_level':
            if key == 113:
                var.scene = 'title'
                var.state = ''

            elif key == 119:
                if var.Cursor.Roguelike_Menu.level > 0:
                    var.Cursor.Roguelike_Menu.level -= 1

            elif key == 115:
                if var.Cursor.Roguelike_Menu.level < 5:
                    var.Cursor.Roguelike_Menu.level += 1

            elif key == 101:
                var.state = 'select_character'
                var.Select.Roguelike_Menu.level = var.Cursor.Roguelike_Menu.level

        elif var.state == 'select_character':
            if key == 113:
                var.state = 'select_level'

            elif key == 119:
                if var.Cursor.Roguelike_Menu.character > 0:
                    var.Cursor.Roguelike_Menu.character -= 1

            elif key == 115:
                if var.Cursor.Roguelike_Menu.character < 5:
                    var.Cursor.Roguelike_Menu.character += 1

            elif key == 101:
                var.scene = 'roguelike_start'
                var.state = 'equip_select'
