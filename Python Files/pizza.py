def make_pizza(size, *toppings):
    """Summarize the the pizza we're about to make."""
    print("\nMaking a " + str(size) + "-inch pizza with the following toppings:")
    for topping in toppings:
        print("- " + topping)