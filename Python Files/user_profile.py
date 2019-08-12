def build_profile(first, last, **user_info):
    """Buils a dictionary containing everything we know about a user"""
    profile = {}
    profile['first_nmae'] = first
    profile['last_name'] = last
    for key, value in user_info.items():
        profile[key] = value
    return profile

user_profile = build_profile('albert', 'einstein', location='princeton', field='physics', IQ=200)
print(user_profile)