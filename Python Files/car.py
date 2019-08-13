class Car():
    """A simple attempt to represent a car."""

    def __init__(self, make, model, year):
        """Initializes attributes to describe a car"""
        self.make = make
        self.model = model
        self.year = year
        self.odometer_reading = 0

    def get_descriptive_name(self):
        """Return a neatly formatted descriptive name."""
        long_name = str(self.year) + ' ' + self.make + ' ' + self.model
        return long_name.title()

    def read_odometer(self):
        """Prints a statement of the car's mileage"""
        print("This car has  " + str(self.odometer_reading) + " miles on it.")

    def update_odometer(self, mileage):
        """Updates the cars miles, and doesn't allow if to be lowered"""
        if mileage >= self.odometer_reading:
            self.odometer_reading = mileage
        else:
            print("You can't roll back an odometer!")

    def increment_odometer(self, miles):
        """Increases the cars miles, and doesn't allow if to be lowered"""
        if miles > 0:
            self.odometer_reading += miles
        else:
            print("You can't roll back an odometer!")


class Battery():
    """A simple attempt tto model a battery for an electric car"""

    def __init__(self, battery_size=70):
        """Initializes the attributes of the battery"""
        self.battery_size = battery_size

    def describe_battery(self):
        """Print a statement describing the battery size."""
        print("This car has a " + str(self.battery_size) + "kWhh battery.")

    def get_range(self):
        """Print a statement about the range this battery provides."""
        if self.battery_size == 70:
            range = 240
        elif self.battery_size == 85:
            range = 270

        message = "This car can go approximately " + str(range)
        message += " miles on a full charge."
        print(message)


##################################################################################
# Adding child classes


class ElectricCar(Car):
    """Represents aspects of a car, specific to electric vehicles"""

    def __init__(self, make, model, year):
        """Initializes attributes of the parent class. And also attributes specific to the child class"""
        super().__init__(make, model, year)
        self.battery = Battery()

#    def describe_battery(self):
#       """Print statement describing the battery"""
#        print("This car has a " + str(self.battery_size) + "kWh battery.")
        
    def fill_gas_tank(self):
        """Electric car don't have gas tanks"""
        print("This car doesn't use gas!")


my_tesla = ElectricCar('tesla', 'model s', '2016')
print(my_tesla.get_descriptive_name())
my_tesla.battery.describe_battery()
my_tesla.battery.get_range()

print('\n')


# my_new_car = Car('audi', 'a4', 2016)
# print(my_new_car.get_descriptive_name())
# my_new_car.read_odometer()
