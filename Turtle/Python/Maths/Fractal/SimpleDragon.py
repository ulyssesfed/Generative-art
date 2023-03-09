import turtle

#start the turtle at the very bottom of the screen
turtle.penup()
turtle.setpos(0, -250)
turtle.pendown()



turtle.tracer(0,0)
def dragon_curve(order, size, direction=1):
    if order == 0:
        turtle.forward(size)
        turtle.update()
        turtle.hideturtle()
    else:
        root_half = 0.5 ** 0.5
        dragon_curve(order-1, size*root_half, 1)
        turtle.right(direction * 90)
        dragon_curve(order-1, size*root_half, -1)
        turtle.update()
        turtle.hideturtle()


turtle.speed(0)
dragon_curve(14, 500)
turtle.hideturtle()

turtle.exitonclick()
