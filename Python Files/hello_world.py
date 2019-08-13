cars = ['bmw', 'audi', 'ford', 'toyota', 'jeep', 'chevy', 'dodge']
for maker in cars:
    print(maker.title()+ " is a great car manufacturer!")

print('\nThese are all good options for a car.')

print('\n')

squares=[]
for value in range(1,11):
    #square = value**2
    #squares.append(square)
    squares.append(value**2)  #this does the same thing as the above 2 lines

print(squares)

#######################################################################################
#'tuples' are objects that cannot change
#use () instead of [] to define a tuple

print('\n\nThis is the original tuple!')

dimensions = (200,50,60,85) #tuple
print(dimensions[0])
print(dimensions[1])

for dimension in dimensions:
    print(dimension)


#tuples can only be changed by defining the variable again

print("\nThis is newly defined tuple!")
dimensions = (80,70,10)
for dimension in dimensions:
    print(dimension)

#Try it yourself

print("\nOriginal Buffet Tuple\n")

foods = ('pizza', 'cheesecake', 'pasta', 'tacos', 'burritos')
for food in foods:
    print(food)

print('\nNew Buffet Tuple\n')

foods = ("sandwhiches", "burgers")
for food in foods:
    print(food)