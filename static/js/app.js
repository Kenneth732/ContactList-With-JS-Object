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
  
  // Function to handle form submission and add a new contact
  function handleFormSubmit(event) {
    event.preventDefault();
  
    var firstName = document.getElementById("firstNameInput").value;
    var lastName = document.getElementById("lastNameInput").value;
    var phoneNumber = document.getElementById("phoneInput").value;
    var email = document.getElementById("emailInput").value;
  
    var newContact = new Contact(firstName, lastName, phoneNumber, email);
    addressBook.addContact(newContact);
  
    // Clear the input fields after adding a new contact
    document.getElementById("firstNameInput").value = "";
    document.getElementById("lastNameInput").value = "";
    document.getElementById("phoneInput").value = "";
    document.getElementById("emailInput").value = "";
  
    displayContacts(addressBook);
  }
  
// Function to handle contact editing and deletion
function handleEdit(event) {
    if (event.target.classList.contains("edit-button")) {
      var contactId = parseInt(event.target.getAttribute("data-id"));
      var contact = addressBook.findContact(contactId);
      if (contact) {
        var firstNameInput = document.getElementById("firstNameInput");
        var lastNameInput = document.getElementById("lastNameInput");
        var phoneInput = document.getElementById("phoneInput");
        var emailInput = document.getElementById("emailInput");
  
        // Fill the form with the contact details for editing
        firstNameInput.value = contact.firstName;
        lastNameInput.value = contact.lastName;
        phoneInput.value = contact.phoneNumber;
        emailInput.value = contact.email;
  
        // Remove the old contact temporarily while editing
        delete addressBook.contacts[contactId];
  
        // Disable the form submission temporarily while editing
        form.removeEventListener("submit", handleFormSubmit);
  
        // Change the form submission button to an update button
        var submitButton = document.querySelector("button[type='submit']");
        submitButton.textContent = "Update Contact";
        submitButton.removeEventListener("click", handleFormSubmit);
        submitButton.addEventListener("click", function (event) {
          handleUpdate(event, contactId);
        });
      }
    } else if (event.target.classList.contains("delete-button")) {
      var contactId = parseInt(event.target.getAttribute("data-id"));
      var isDeleted = addressBook.deleteContact(contactId);
      if (isDeleted) {
        // Refresh the contact list if contact is successfully deleted
        displayContacts(addressBook);
      }
    }
  }
  
  