import var
import curses

def draw_rect(r, c, rs, cs, color):
    for i in range(r, r + rs):
        for j in range(c, c + cs):
            var.window.addstr(i, j, ' ')

    for i in range(r, r + rs):
        var.window.addstr(i, c, '#', curses.color_pair(color))
        var.window.addstr(i, c + cs - 1, '#', curses.color_pair(color))

    for i in range(c, c + cs):
        var.window.addstr(r, i, '#', curses.color_pair(color))
        var.window.addstr(r + rs - 1, i, '#', curses.color_pair(color))