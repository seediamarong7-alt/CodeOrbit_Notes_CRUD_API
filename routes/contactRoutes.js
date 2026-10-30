const express = require("express");
const router = express.Router();

const contactController = require("../controllers/contactController");

// GET: Retrieve all contacts.
router.get("/", contactController.getAllContacts);

// GET: Retrieve a contact by ID.
router.get("/:id", contactController.getContactById);

// POST: Create a contact.
router.post("/", contactController.createContact);

// PUT: Update a contact.
router.put("/:id", contactController.updateContact);

// DELETE: Delete a contact.
router.delete("/:id", contactController.deleteContact);

module.exports = router;