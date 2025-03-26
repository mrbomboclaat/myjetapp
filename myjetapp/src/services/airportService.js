const express = require('express');
const router = express.Router();

// Sample data for available airports
const airports = [
    { code: 'JFK', name: 'John F. Kennedy International Airport' },
    { code: 'LAX', name: 'Los Angeles International Airport' },
    { code: 'DFW', name: 'Dallas/Fort Worth International Airport' },
    { code: 'DEN', name: 'Denver International Airport' },
    // Add more airports as needed
];

// Get all airports
router.get('/airports', (req, res) => {
    res.status(200).json(airports);
});

module.exports = router;
