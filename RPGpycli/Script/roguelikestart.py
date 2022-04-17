import var
import const

class UI():
    title_text = [2, 2]
    select_text = [4, 2]
    equip_name = [[6, 4], [12, 4], [18, 4]]

    card_name = [[6, 4], [12, 4], [18, 4]]
    card_stat = [[7, 4], [13, 4], [19, 4]]

def loop():
    display()

def display():
    var.window.erase()

    var.window.border('#', '#', '#', '#', '#', '#', '#', '#')

    var.window.addstr(UI.title_text[0], UI.title_text[1], 'Entering')

    # Select Part
    if var.state == 'select_equip':
        var.window.addstr(UI.select_text[0], UI.select_text[1], 'Select Equipment')

    elif var.state == 'select_card':
        var.window.addstr(UI.select_text[0], UI.select_text[1], 'Select Card')

def input_handle(key):
    pass
