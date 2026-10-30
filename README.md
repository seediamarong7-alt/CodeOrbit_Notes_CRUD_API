# Contact Management API – Structured CRUD

## Project Overview

This project is a RESTful API built with Node.js and Express.js. It provides CRUD operations for managing contact records.

The application follows a modular architecture by separating routes, controllers, and data handling logic.

## Technologies Used

* Node.js
* Express.js
* JavaScript
* Postman

## Project Structure

```text
CodeOrbit_Notes_CRUD_API/
│
├── controllers/
│   └── contactController.js
│
├── data/
│   └── contactData.js
│
├── routes/
│   └── contactRoutes.js
│
├── server.js
├── package.json
└── README.md
```

## Features

* Create new contacts.
* Retrieve all contacts.
* Retrieve individual contacts by ID.
* Update existing contacts.
* Delete contacts.
* Validate contact information.
* Handle invalid IDs and missing records.
* Return appropriate HTTP status codes.

## API Endpoints

| Method | Endpoint        | Description              |
| ------ | --------------- | ------------------------ |
| GET    | `/contacts`     | Retrieve all contacts    |
| GET    | `/contacts/:id` | Retrieve a contact by ID |
| POST   | `/contacts`     | Create a contact         |
| PUT    | `/contacts/:id` | Update a contact         |
| DELETE | `/contacts/:id` | Delete a contact         |

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone YOUR_REPOSITORY_LINK
   ```

2. Navigate into the project directory:

   ```bash
   cd CodeOrbit_Notes_CRUD_API
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the server:

   ```bash
   node server.js
   ```

5. Access the API at:

   `http://localhost:3000`

## Architecture

The application is organized into three main layers:

* **Routes:** Define the API endpoints.
* **Controllers:** Handle incoming requests, validation, and responses.
* **Data Layer:** Manages contact records and CRUD operations.

## Data Storage

The application currently uses an in-memory JavaScript array for storing contacts. Data resets when the server restarts.

## Testing

All CRUD endpoints were tested using Postman.

## Author

Developed as part of the CodeOrbit Tech Backend Development Internship.

## Internship

CodeOrbit Tech – Backend Development Internship, October 2026.
