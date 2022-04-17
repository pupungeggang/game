import sys
import platform
import curses
import traceback

import var
import const

import title
import saveselect
import field
import battle
import shop

def main():
    curses_init()

    if platform.system == 'Windows':
        color_change()

    while 1:
        loop()

def loop():
    input_handle()
    scene_loop()

def curses_init():
    curses.initscr()
    var.window = curses.newwin(30, 96, 0, 0)
    curses.cbreak()
    curses.noecho()
    curses.curs_set(0)
    curses.start_color()
    curses.use_default_colors()

    for i in range(1, 16):
        curses.init_pair(i, i, -1)

    var.window.timeout(25)

def color_change():
    const.Color.blue = 1
    const.Color.cyan = 3
    const.Color.red = 4
    const.Color.yellow = 6
    const.Color.l_blue = 9
    const.Color.l_cyan = 11
    const.Color.l_red = 12
    const.Color.l_yellow = 14

def input_handle():
    key = var.window.getch()

    if key == 27:
        sys.exit()

    elif var.scene == 'title':
        title.input_handle(key)

def scene_loop():
    if var.scene == 'title':
        title.loop()

try:
    main()

except:
    curses.endwin()
    traceback.print_exc()
    sys.exit()
