import var
import draw

class UI():
    title_text = [2, 2]
    start_text = [4, 4]
    mode_text = [6, 4]
    about_text = [8, 4]
    cursor = [[4, 2], [6, 2], [8, 2]]
    version_text = [27, 2]

    about_rect = [4, 10, 22, 76]

def loop():
    display()

def display():
    var.window.erase()
    var.window.border('#', '#', '#', '#', '#', '#', '#', '#')

    var.window.addstr(UI.title_text[0], UI.title_text[1], 'Desserterria-RPG')
    var.window.addstr(UI.start_text[0], UI.start_text[1], 'Start Game')
    var.window.addstr(UI.mode_text[0], UI.mode_text[1], 'Roguelike')
    var.window.addstr(UI.about_text[0], UI.about_text[1], 'About')

    var.window.addstr(UI.cursor[var.Cursor.Title.menu][0], UI.cursor[var.Cursor.Title.menu][1], '>')

    if var.state == 'about':
        draw.draw_rect(UI.about_rect[0], UI.about_rect[1], UI.about_rect[2], UI.about_rect[3], 7)

def input_handle(key):
    if var.state == '':
        if key == 101:
            if var.Cursor.Title.menu == 0:
                var.scene = 'save_select'

            elif var.Cursor.Title.menu == 1:
                var.scene = 'roguelike_menu'

            elif var.Cursor.Title.menu == 2:
                var.state = 'about'

        elif key == 119:
            if var.Cursor.Title.menu > 0:
                var.Cursor.Title.menu -= 1

        elif key == 115:
            if var.Cursor.Title.menu < 2:
                var.Cursor.Title.menu += 1

    elif var.state == 'about':
        if key == 101:
            var.state = ''