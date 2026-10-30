let contacts = [
    { id: 1, name: "Ibrahim", email: "ibrahim@example.com" },
    { id: 2, name: "Musa", email: "musa@example.com" }
];

let nextId = 3;

// Retrieve all contacts.
function getAllContacts() {
    return contacts;
}

// Find a contact by ID.
function getContactById(id) {
    return contacts.find(contact => contact.id === id);
    
}



// Create a contact.
function createContact(name, email) {
    const contact = {
        id: nextId++,
        name,
        email
    };

    contacts.push(contact);
    return contact;
}

// Update a contact.
function updateContact(id, name, email) {
    const contact = getContactById(id);

    if (!contact) {
        return null;
    }

    contact.name = name;
    contact.email = email;

    return contact;
}

// Delete a contact.
function deleteContact(id) {
    const index = contacts.findIndex(contact => contact.id === id);

    if (index === -1) {
        return null;
    }

    return contacts.splice(index, 1)[0];
}

// Export functions for use in other files.
module.exports = {
    getAllContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact
};