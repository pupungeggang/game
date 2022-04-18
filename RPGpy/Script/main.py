import pygame
import sys

import var

pygame.init()

def main():
    var.screen = pygame.display.set_mode((1280, 720))
    pygame.display.set_caption('Desserterria RPG')

    while True:
        loop()

def loop():
    input_handle()

def input_handle():
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            sys.exit()

main()