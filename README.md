
1. `function AddressBook() { ... }`: This defines the constructor function `AddressBook` to create instances of an address book. It initializes the `contacts` object to store contacts and the `currentId` variable to keep track of the contact IDs.

2. `AddressBook.prototype.addContact = function(contact) { ... }`: This adds the `addContact` method to the `AddressBook` prototype. The `addContact` method takes a `contact` object, assigns a unique ID to it, and adds it to the `contacts` object using the ID as the key.

3. `AddressBook.prototype.assignId = function() { ... }`: This adds the `assignId` method to the `AddressBook` prototype. It increments the `currentId` by one and returns the new ID.

4. `AddressBook.prototype.findContact = function(id) { ... }`: This adds the `findContact` method to the `AddressBook` prototype. It takes an `id` as input and returns the contact object with that specific ID, if it exists in the `contacts` object.

5. `AddressBook.prototype.deleteContact = function(id) { ... }`: This adds the `deleteContact` method to the `AddressBook` prototype. It takes an `id` as input, checks if the contact with that ID exists in the `contacts` object, and if so, deletes it.

6. `function Contact(firstName, lastName, phoneNumber, email) { ... }`: This defines the constructor function `Contact` to create contact instances. It assigns the provided values to the contact's properties (`firstName`, `lastName`, `phoneNumber`, and `email`).

7. `Contact.prototype.fullName = function() { ... }`: This adds the `fullName` method to the `Contact` prototype. It returns the full name of the contact by concatenating `firstName` and `lastName`.

8. `function displayContacts(addressBook) { ... }`: This defines the `displayContacts` function, which takes an `addressBook` as input. It is responsible for rendering the contacts on the webpage. It iterates through the contacts in the `addressBook` and creates HTML elements to display each contact's details. It also adds "Edit" and "Delete" buttons for each contact.

9. `function handleFormSubmit(event) { ... }`: This defines the `handleFormSubmit` function, which is called when the form is submitted. It extracts the values from the form fields, creates a new `Contact` object, adds it to the `addressBook`, and then clears the input fields. Finally, it calls `displayContacts` to update the contact list on the webpage.

10. `function handleEdit(event) { ... }`: This defines the `handleEdit` function, which handles contact editing. When the "Edit" button is clicked, this function extracts the contact ID, retrieves the corresponding contact from the `addressBook`, and pre-fills the form fields with the contact details. It also changes the "Add Contact" button to "Update Contact" temporarily, allowing the user to edit the contact. When the user clicks "Update Contact," it calls the `handleUpdate` function.

11. `function handleUpdate(event, contactId) { ... }`: This defines the `handleUpdate` function, which is called when the "Update Contact" button is clicked after editing a contact. It extracts the new contact details from the form fields, creates a new `Contact` object with the updated details, and adds it to the `addressBook`. It then clears the input fields, changes the "Update Contact" button back to "Add Contact," and refreshes the contact list by calling `displayContacts`.

12. `var addressBook = new AddressBook();`: This creates a new instance of the `AddressBook` class, initializing an empty address book.

13. `var form = document.getElementById("form");`: This retrieves the form element with the ID "form" from the DOM.

14. `var contactsDiv = document.getElementById("contacts");`: This retrieves the div element with the ID "contacts" from the DOM.

15. `form.addEventListener("submit", handleFormSubmit);`: This attaches the `handleFormSubmit` function to the form's "submit" event, so that when the form is submitted, it triggers the form submission handling.

16. `contactsDiv.addEventListener("click", handleEdit);`: This attaches the `handleEdit` function to the div's "click" event, so that when the "Edit" button is clicked for any contact, it triggers the contact editing handling.

