def greet_users(names):
    """Print a simplle greeting to each user in a list"""
    for name in names:
        msg = "Hello, " + name.title() + "!"
        print(msg)


peoples = ['john', 'bill', 'jimmy']
greet_users(peoples)