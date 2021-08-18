class User():
    def __init__(self, firstName, lastName, address):
        
        self.firstName = firstName
        self.lastName = lastName    
        self.address = address
        address = []
        
    def addAddress(self, address):    
        address.append(Address)
        print(address)
        
        
class Address(User):
    def __init__(self, firstName, lastName, street, city, state, zipCode, address):
        super().__init__(firstName, lastName, address)
        self.street = street
        self.city = city
        self.state = state
        self.zipCode = zipCode
        # addresses.append
        
        
        
# class AddressToAdd(Address):
#     def addAddress(self, street, city, state, zipCode):
#         super().__init__(street, city, state, zipCode)
#         Address
        
        
        
        
# newUser = User("Dustin", "Clisbee")
newUser = Address("Dustin", "Clisbee", "Dolan Springs", "Tomball", "TX", "77377", ["Dustin", "Clisbee", "Dolan Springs", "Tomball", "TX", "77377"] )
print(newUser.street)
# addAddress = AddressToAdd()
# input(print("Add address: " + ))
print(newUser.addAddress)