from tkinter import Tk, Button, Label

def on_button_click():
    # This function updates the label's text to "Grow Hungry" when the button is clicked
    label.config(text="Grow Hungry")

# Create the main window
root = Tk()
root.title("Interactive Button")

# Create a label that will display the text
label = Label(root, text="")
label.pack(pady=20)

# Create a button and assign the `on_button_click` function to be called when it's pressed
button = Button(root, text="Press Me", command=on_button_click)
button.pack(pady=20)

# Start the GUI application
root.mainloop()

