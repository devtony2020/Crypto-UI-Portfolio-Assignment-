const express = require('express');
const router = express.Router();
const seedDatabase = require('../utils/seedDatabase');

// Seed database endpoint
router.post('/', async (req, res) => {
  try {
    await seedDatabase();
    res.status(200).json({
      success: true,
      message: 'Database seeded successfully with cryptocurrency data',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Error seeding database',
    });
  }
});

module.exports = router;
