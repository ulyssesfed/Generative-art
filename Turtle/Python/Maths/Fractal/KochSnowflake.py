import turtle

#place the center of the snowflake at the center of the screen
turtle.penup()
turtle.goto(-400, 260)
turtle.pendown()

turtle.tracer(0, 0)
def koch_snowflake(order, size):
    if order == 0:
        turtle.forward(size)
        turtle.update()
    else:
        for angle in [60, -120, 60, 0]:
            koch_snowflake(order-1, size/3)
            turtle.left(angle)
            turtle.update()

turtle.speed('fastest')
for _ in range(3):
    koch_snowflake(6, 900)
    turtle.right(120)
    turtle.update()

turtle.exitonclick()
