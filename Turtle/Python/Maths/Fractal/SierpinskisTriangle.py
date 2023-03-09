import turtle
turtle.tracer(0, 0)

turtle.penup()
turtle.left(180)
turtle.forward(880)
turtle.left(90)
turtle.forward(490)
turtle.right(270)
turtle.pendown()
def sierpinski(order, size):


    if order == 0:
        for _ in range(3):
            turtle.forward(size)
            turtle.left(120)
            turtle.update()
    else:
        sierpinski(order-1, size/2)
        turtle.forward(size/2)
        sierpinski(order-1, size/2)
        turtle.backward(size/2)
        turtle.left(60)
        turtle.forward(size/2)
        turtle.right(60)
        sierpinski(order-1, size/2)
        turtle.left(60)
        turtle.backward(size/2)
        turtle.right(60)
        turtle.update()

turtle.speed(0)

sierpinski(8, 1050)

turtle.exitonclick()
