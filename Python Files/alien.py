alien_color = 'yellow'


if alien_color == 'green':
    print("You earned 5 points!")
elif alien_color == 'yellow':
    print('You earned 10 points!')
elif alien_color == 'red':
    print("You earned 15 points!")

print('\n\n')
################################################

# Dictionaries

alien_0 = {'color': 'green', 'points': 5}

print(alien_0['color'])
print(alien_0['points'])

new_points =  alien_0['points']
print("You just earned " + str(new_points) + " points!")
print('\n')

# adding new key value pairs to the dictionary
print(alien_0)

alien_0['x_position'] = 0
alien_0['y_position'] = 25
alien_0['speed'] = 'medium'
print(alien_0)

alien_1 = {}    # creating an empty dict and adding to it below

alien_1['color'] = 'purple'
alien_1['points'] = 10
alien_1['x_position'] = 0
alien_1['y_position'] = 35
alien_1['speed'] = 'slow'

print('\n' + str(alien_1))

#determining the new positions based on speed

if alien_0['speed'] == 'slow':
    x_increment = 1
elif alien_0['speed'] == 'medium':
    x_increment = 2
else:
    x_increment = 3

alien_0['x_position'] = alien_0['x_position'] + x_increment

print("New x_position: " + str(alien_0['x_position']))