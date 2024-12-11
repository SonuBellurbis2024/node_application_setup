const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use('/api', routes);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/Users', )
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
