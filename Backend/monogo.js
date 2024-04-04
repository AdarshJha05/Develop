const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Serve static files (e.g., HTML, CSS, images)
app.use(express.static(__dirname)); // Assuming CSS file is in the same directory

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/student')
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));


// Define schema
const Schema = mongoose.Schema;
const clientSchema = new Schema({
  name:  String,  
  email: String,
  message: String
});

// Create model
const Client = mongoose.model('Client', studentSchema, 'contactform'); // 'contactform' is the collection name

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('../Contact-us/Contact-us.html', (req, res) => {
    res.sendFile(__dirname + '../Contact-us/Contact-us.html');
});

// Handle form submission
app.post('../Contact-us/Contact-us.html', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        // Create new student document
        const newClient = new Client({ name, email, message });
        // Save to database
        await newClient.save();
        res.redirect('../index.html');
    } catch (error) {
        console.error('Error saving student:', error);
        res.status(500).send('Error saving student');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
