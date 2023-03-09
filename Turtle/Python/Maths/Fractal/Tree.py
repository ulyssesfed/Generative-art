import turtle

def draw_tree(branch_length, pen_size):
    if branch_length > 5:
        turtle.pensize(pen_size)
        turtle.pencolor(0, 1 - branch_length/100.0, 0)
        turtle.forward(branch_length)
        turtle.right(20)
        draw_tree(branch_length - 15, pen_size * 0.8)
        turtle.left(40)
        draw_tree(branch_length - 15, pen_size * 0.8)
        turtle.right(20)
        turtle.backward(branch_length)

turtle.speed('fastest')
turtle.left(90)
turtle.penup()
turtle.backward(100)
turtle.pendown()
draw_tree(100, 7) # increased initial branch length
turtle.exitonclick()
