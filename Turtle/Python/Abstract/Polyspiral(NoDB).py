import colorsys
import turtle

from turtle import *
from random import randint
import time

def turtlefunc():
    t = Turtle()
    t.clear()
    t.penup()
    t.goto(0, 0)
    t.pendown()
    colormode(255)
    duration = 100
    angle = randint(48, 360)
    t.pensize(randint(2, 4))
    colour1 = randint(0, 255)
    colour2 = randint(0, 255)
    colour3 = randint(0, 255)
    colour12 = randint(0, 255)
    colour22 = randint(0, 255)
    colour32 = randint(0, 255)
    rand = 1300
    pencolor(0, 0, 0)
    j = 0

    start_time = time.time()

    t.speed(0)

    start_color = (colour1, colour2, colour3)
    end_color = (colour12, colour22, colour32)

    rainbowMode = input("Do you want to use rainbow mode? (y/n) ")

    if rainbowMode.lower() == "n":

        gradient_cycles = int(duration / 10)  # number of times to repeat the gradient
        cycle_duration = duration / gradient_cycles  # duration for each cycle
        start_time = time.time()  # reset the start time for each cycle

        for cycle in range(gradient_cycles):
            cycle_start_time = time.time()  # start time for this cycle

            while time.time() - cycle_start_time < cycle_duration:
                # Calculate the value of i based on the current time and the cycle duration
                i = (time.time() - cycle_start_time) / cycle_duration

                j += 1

                # Interpolate between the start and end colors based on i
                r = int(start_color[0] * (1 - i) + end_color[0] * i)
                g = int(start_color[1] * (1 - i) + end_color[1] * i)
                b = int(start_color[2] * (1 - i) + end_color[2] * i)

                t.forward(j)
                t.left(angle)
                t.pencolor(r, g, b)

            # Update the start time for the next cycle
            start_time += cycle_duration
        t.hideturtle()


    else:
        print("Rainbow mode activated.")
        while time.time() - start_time < duration:
            # Calculate the value of i based on the current time
            i = (time.time() - start_time) / duration

            j += 1

            # Generate a smooth gradient between the start and end colors
            r, g, b = [int(x * 255) for x in colorsys.hsv_to_rgb(i, 1, 1)]

            t.forward(j)
            t.left(angle)
            t.pencolor(r, g, b)
        t.hideturtle()


    screen = Screen()
    screen.exitonclick()

if __name__ == '__main__':
    turtlefunc()
