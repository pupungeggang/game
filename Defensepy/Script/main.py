import pygame
import sys

import var
import font

import title

clock = pygame.time.Clock()

def main():
    var.screen = pygame.display.set_mode((1280, 720))
    pygame.display.set_caption('Bounce Defense')
    font_init()

    while True:
        loop()

def loop():
    clock.tick(40)
    loop_scene()
    input_handle()
    pass

def loop_scene():
    if var.scene == 'title':
        title.loop()

def input_handle():
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            sys.exit()

def font_init():
    pygame.font.init()
    font.Font.title = pygame.font.SysFont(None, 60)

main()