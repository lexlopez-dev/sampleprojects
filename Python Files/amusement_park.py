#Amusement park admission fees = Under 4 is Free. 4-18 is $5. 18 or older is $10.

age = 15

if age < 4:
    print('Your admission is $0!')
elif age < 18:
    print("Your admission is $5!")
else:
    print("Your admission is $10!")

############################################

#Another way to do this

theage = 25

if theage < 4:
    price = 0
elif theage < 18:
    price = 5
elif theage > 65:
    price = 2
else:
    price = 10

print("Your admission cost is $" + str(price) + '!')