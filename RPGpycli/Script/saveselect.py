import var
import const
import fieldfunction

class UI():
    title_text = [2, 2]

    save_text = [[4, 4], [8, 4], [12, 4]]
    content_1 = [[5, 4], [9, 4], [13, 4]]
    content_2 = [[6, 4], [10, 4], [14, 4]]
    cursor = [[4, 2], [8, 2], [12, 2]]

def loop():
    display()

def display():
    var.window.erase()

    var.window.border('#', '#', '#', '#', '#', '#', '#', '#')

    var.window.addstr(UI.title_text[0], UI.title_text[1], 'Select save file')

    for i in range(3):
        var.window.addstr(UI.save_text[i][0], UI.save_text[i][1], 'Save' + str(i + 1))

        if var.Save.data[i] == 'new':
            var.window.addstr(UI.content_1[i][0], UI.content_1[i][1], 'New')

    var.window.addstr(UI.cursor[var.Cursor.Save_Select.save][0], UI.cursor[var.Cursor.Save_Select.save][1], '>')

def input_handle(key):
    if key != -1:
        if var.state == '':
            if key == 119:
                if var.Cursor.Save_Select.save > 0:
                    var.Cursor.Save_Select.save -= 1

            elif key == 115:
                if var.Cursor.Save_Select.save < 2:
                    var.Cursor.Save_Select.save += 1

            elif key == 101:
                var.scene = 'field'