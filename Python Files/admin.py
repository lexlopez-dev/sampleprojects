#users = []
users = ['john', 'sally', 'sean', 'admin', 'billy']

if users:
    for user in users:
        if user != 'admin':
            print('Hello, ' + user.title() + '.')
        else:
            print('Hello, Admin. Would you like to see a usage report?')
else:
    print("We need to find some users!")


