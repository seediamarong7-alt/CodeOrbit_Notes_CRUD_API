const contactData = require("../data/contactData");

// Validate contact input.
function validateContact(name, email) {
    return (
        typeof name === "string" &&
        typeof email === "string" &&
        name.trim() !== "" &&
        email.trim() !== "" &&
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    );
}

// GET: Retrieve all contacts.
function getAllContacts(req, res) {
    res.status(200).json(contactData.getAllContacts());
}

// GET: Retrieve one contact.
function getContactById(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "A valid contact ID is required"
        });
    }

    const contact = contactData.getContactById(id);

    if (!contact) {
        return res.status(404).json({
            message: "Contact not found"
        });
    }

    res.status(200).json(contact);
}

// POST: Create a contact.
function createContact(req, res) {
    const { name, email } = req.body;

    if (!validateContact(name, email)) {
        return res.status(400).json({
            message: "A valid name and email are required"
        });
    }

    const contact = contactData.createContact(
        name.trim(),
        email.trim()
    );

    res.status(201).json({
        message: "Contact created successfully",
        contact
    });
}

// PUT: Update a contact.
function updateContact(req, res) {
    const id = Number(req.params.id);
    const { name, email } = req.body;

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "A valid contact ID is required"
        });
    }

    if (!validateContact(name, email)) {
        return res.status(400).json({
            message: "A valid name and email are required"
        });
    }

    const contact = contactData.updateContact(
        id,
        name.trim(),
        email.trim()
    );

    if (!contact) {
        return res.status(404).json({
            message: "Contact not found"
        });
    }

    res.status(200).json({
        message: "Contact updated successfully",
        contact
    });
}

// DELETE: Delete a contact.
function deleteContact(req, res) {
    const id = Number(req.params.id);

    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "A valid contact ID is required"
        });
    }

    const contact = contactData.deleteContact(id);

    if (!contact) {
        return res.status(404).json({
            message: "Contact not found"
        });
    }

    res.status(200).json({
        message: "Contact deleted successfully",
        contact
    });
}

module.exports = {
    getAllContacts,
    getContactById,
    createContact,
    updateContact,
    deleteContact
};