from sys import displayhook


import pygame

import var
import const
import font

class UI():
    title_text = [8, 8]

def loop():
    display()

def display():
    var.screen.fill(const.Color.white)
    var.screen.blit(font.Font.title.render('Bounce Defense', True, const.Color.black), UI.title_text)
    pygame.display.flip()