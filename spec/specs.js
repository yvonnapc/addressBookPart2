describe('Contact', function(){
  it("Creates a new contact with the given properties", function(){
    var testContact = new Contact("Rita", "Moreno");
    expect(testContact.firstName).to.equal("Rita");
    expect(testContact.lastName).to.equal("Moreno");
    expect(testContact.addresses).to.eql([]);
  });
  it("adds the fullName method to a contact", function(){
    var testContact = new Contact("Peter", "Pan");
    expect(testContact.fullName()).to.equal("Peter Pan");
  });
});

describe('Address', function(){
  it("created a new address with the given input", function(){
    var testAddress = new Address("123 Main Street", "Test City", "Test State");
    expect(testAddress.street).to.equal("123 Main Street");
    expect(testAddress.city).to.equal("Test City");
    expect(testAddress.state).to.equal("Test State");
  });
  it("adds the fullAddress method to all addresses", function() {
    var testAddress = new Address("123 Main St", "Test City","Test State");
    expect(testAddress.fullAddress()).to.equal("123 Main St, Test City, Test State");
  });
});
