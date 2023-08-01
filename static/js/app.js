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
  