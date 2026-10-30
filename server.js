const express = require("express");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
const PORT = 3000;

// Parse incoming JSON request bodies.
app.use(express.json());

// Register all contact routes under /contacts.
app.use("/contacts", contactRoutes);

// Handle unknown endpoints.
app.use((req, res) => {
    res.status(404).json({
        message: "Endpoint not found"
    });
});

// Start the server.
app.listen(PORT, () => {
    console.log(`CRUD API running at http://localhost:${PORT}`);
});