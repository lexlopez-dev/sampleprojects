#Working with IF statements

cars = ['audi', 'bmw', 'chevy', 'toyota', 'subaru']

for car in cars:
    if car == 'bmw':
        print(car.upper())   #this code finds bmw and captializes the whole thing
    else:
        print(car.title())  #this part prints the cars as titles

##################################################################################

#Topping Code

print('\n\n______________________________')

requested_toppings = 'mushrooms'

if requested_toppings != 'anchovies':
    print('Hold the anchovies!')


#####################################################

#Code for numerical values

print('\n\n_______________________________')

answer = 17

if answer != 54:
    print("This is wrong!")

