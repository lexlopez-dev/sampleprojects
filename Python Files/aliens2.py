#alien_0 = {'color': 'green', 'points': '5'}
#alien_1 = {'color': 'purple', 'points': '10'}
#alien_2 = {'color': 'yellow', 'points': '15'}

#aliens = [alien_0, alien_1, alien_2]

#for alien in aliens:
 #   print(alien)

####################################################

# creating a fleet of aliens

aliens = []

#making aliens
for alien_number in range(30):
    new_alien = {'color': 'green', 'points': 5, 'speed': 'slow'}
    aliens.append(new_alien)


for alien in aliens[0:10]:
    if alien['color'] == 'green':
        alien['color'] = 'yellow'
        alien['speed'] = 'medium'
        alien['points'] = 10
    elif alien['color'] == 'yellow':
        alien['color'] = 'red'
        alien['speed'] = 'fast'
        alien['points'] = 15

for alien in aliens[:10]:
    print(alien)