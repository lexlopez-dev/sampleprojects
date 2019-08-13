pets = ['dog', 'cat', 'fish', 'cat', 'rabbit', 'goldfish', 'dog']
print(pets)

while 'cat' in pets:
    pets.remove('cat')

print(pets)

######################################################################3

def describe_pet(animal_type, pet_name):
    """Display info about a pet."""

    print("\nI have a " + animal_type + ".")
    print("My " + animal_type + "'s name is " + pet_name.title() + ".")

describe_pet('hamster', 'harry')