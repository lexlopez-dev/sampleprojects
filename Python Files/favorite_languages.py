# making dictionaries into lines

favorite_languages = {
    'jen': 'python',
    'john': 'java',
    'phil': 'c',
    'sarah': 'ruby',
    'alex': 'python',
}
# print("John's favorite language is " + favorite_languages['john'].title() + '.')


for name, language in favorite_languages.items():   # a better version of the above println
    print(name.title() + "'s favorite language is " + language.title() + '.')

print('\n')
for name in favorite_languages.keys():
    print(name.title())

print('\n')
for languages in favorite_languages.values():
    print(languages.title())

print('\n')
for languages in set(favorite_languages.values()):  # wrapping the value in 'set' removes any duplicates
    print(languages.title())




