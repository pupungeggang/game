import sys
import platform
import curses
import traceback

import var

import title
import saveselect
import field
import battle
import shop

def main():
    curses_init()

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
        curses.init_pair(i, -1, i)

    var.window.timeout(25)

def input_handle():
    key = var.window.getch()

    if key == 27:
        sys.exit()

def scene_loop():
    if var.scene == 'title':
        title.loop()

try:
    main()

except:
    curses.endwin()
    traceback.print_exc()
    sys.exit()
