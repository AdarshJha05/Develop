const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Set the port number

// Serve static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Route for handling 404 errors
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
