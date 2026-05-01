const Crypto = require('../models/Crypto');
const seedCryptos = require('../data/seedData');

const seedDatabase = async () => {
  try {
    // Clear existing cryptocurrencies
    await Crypto.deleteMany({});
    console.log('Cleared existing cryptocurrencies');

    // Insert seed data
    await Crypto.insertMany(seedCryptos);
    console.log(`Seeded database with ${seedCryptos.length} cryptocurrencies`);
  } catch (error) {
    console.error('Error seeding database:', error);
    throw error;
  }
};

module.exports = seedDatabase;
