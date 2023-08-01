// Business Logic for AddressBook ---------
function AddressBook() {
    Object.defineProperty(this, "contacts", {
      value: {},
      writable: true,
    });
  
    Object.defineProperty(this, "currentId", {
      value: 0,
      writable: true,
    });
  }
  
  AddressBook.prototype.addContact = function (contact) {
    contact.id = this.assignId();
    this.contacts[contact.id] = contact;
  };
  
  AddressBook.prototype.assignId = function () {
    this.currentId += 1;
    return this.currentId;
  };
  
  AddressBook.prototype.findContact = function (id) {
    if (this.contacts[id] !== undefined) {
      return this.contacts[id];
    }
    return false;
  };
  
  AddressBook.prototype.deleteContact = function (id) {
    if (this.contacts[id] === undefined) {
      return false;
    }
    delete this.contacts[id];
    return true;
  };
  
  // Business Logic for Contacts ---------
  function Contact(firstName, lastName, phoneNumber, email) {
    Object.defineProperty(this, "firstName", {
      value: firstName,
      writable: true,
    });
  
    Object.defineProperty(this, "lastName", {
      value: lastName,
      writable: true,
    });
  
    Object.defineProperty(this, "phoneNumber", {
      value: phoneNumber,
      writable: true,
    });
  
    Object.defineProperty(this, "email", {
      value: email,
      writable: true,
    });
  }
  
  Contact.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
  
  // Function to display contacts on the webpage
  function displayContacts(addressBook) {
    var contactsDiv = document.getElementById("contacts");
    contactsDiv.innerHTML = "";
  
    for (var contactId in addressBook.contacts) {
      var contact = addressBook.contacts[contactId];
      var contactElement = document.createElement("div");
      contactElement.className = "contact";
      contactElement.innerHTML = `
        <p>Name: ${contact.fullName()}</p>
        <p>Phone: ${contact.phoneNumber}</p>
        <p>Email: ${contact.email}</p>
        <button class="edit-button" data-id="${contact.id}">Edit</button>
        <button class="delete-button" data-id="${contact.id}">Delete</button>
      `;
      contactsDiv.appendChild(contactElement);
    }
  }