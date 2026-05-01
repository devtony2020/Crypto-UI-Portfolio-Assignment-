const express = require('express');
const router = express.Router();
const {
  getAllCryptos,
  getTopGainers,
  getNewListings,
  addCrypto,
  deleteCrypto,
  updateCrypto,
} = require('../controllers/cryptoController');
const authMiddleware = require('../middleware/authMiddleware');

// Public routes
router.get('/', getAllCryptos);
router.get('/gainers', getTopGainers);
router.get('/new', getNewListings);

// Protected routes
router.post('/', authMiddleware, addCrypto);
router.put('/:id', authMiddleware, updateCrypto);
router.delete('/:id', authMiddleware, deleteCrypto);

module.exports = router;
