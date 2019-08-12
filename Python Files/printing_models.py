# Designs that need to be printed
unprinted_designs = ['iPhone case', 'camera bag', 'robot toy']
completed_models = []

# Simulate printing them and then moves them to the completed models list
while unprinted_designs:
    current_design = unprinted_designs.pop()
    # Simulate creating a 3D print of the design
    print("Printing model: " + current_design)
    completed_models.append(current_design)

# Display all completed models
print("\nThe following models have been printed: ")
for completed_model in completed_models:
    print(completed_model.title())