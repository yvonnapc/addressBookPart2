function Contact(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

function Address(street, city, state, typeAddress) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.typeAddress = typeAddress;
}

Contact.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
}

Address.prototype.fullAddress = function () {
  return this.typeAddress + ": " + this.street + ", " + this.city + ", " + this.state;
}

$(document).ready(function() {
  $("#add-address").click(function(){
    $("#main-address").append('<div class="new-addresses">'+
                                  '<form id="new-contact">' +
                                    '<label for="addressType">Address Type</label>' +
                                    '<select class="address-type" class="form-control">' +
                                      '<option value="Home">Home</option>' +
                                      '<option value="Work">Work</option>' +
                                      '<option value="Restaurant">Restaurant</option>' +
                                      '<option value="Shopping">Shopping</option>' +
                                      '<option value="Cabin">Cabin</option>' +
                                    '</select><br>' +
                                '<div class="form-group">'+
                                  '<label for="new-street">Street</label>' +
                                  '<input type="text" class="form-control new-street" >' +
                                '</div>' +
                                '<div class="form-group">' +
                                  '<label for="new-city">City</label>' +
                                  '<input type="text" class="form-control new-city">' +
                                '</div>' +
                                '<div class="form-group">' +
                                  '<label for="new-state">State</label>' +
                                  '<input type="text" class="form-control new-state">' +
                                '</div>' +
                              '</div>');
  });
  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-addresses").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var inputtedType = $(this).find(".address-type").val();
      var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState, inputtedType);
      newContact.addresses.push(newAddress)
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");


  $(".contact").last().hover(function(){
    $("#show-contact").fadeToggle(800);
    $("#show-contact h2").text(newContact.fullName());
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    $("ul#addresses").text("");

    newContact.addresses.forEach(function(address) {
      $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
        });
    });

  });
});
// });
