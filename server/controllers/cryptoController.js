const Crypto = require('../models/Crypto');
const { validateCryptoSymbol, validatePrice, validateUrl } = require('../utils/validation');

// Get all cryptocurrencies
exports.getAllCryptos = async (req, res) => {
  try {
    const cryptos = await Crypto.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: cryptos.length,
      data: cryptos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching cryptocurrencies',
    });
  }
};

// Get top gainers (sorted by 24h change descending)
exports.getTopGainers = async (req, res) => {
  try {
    const gainers = await Crypto.find()
      .sort({ change24h: -1 })
      .limit(10);

    res.status(200).json({
      success: true,
      count: gainers.length,
      data: gainers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching top gainers',
    });
  }
};

// Get new listings (sorted by createdAt descending)
exports.getNewListings = async (req, res) => {
  try {
    const newListings = await Crypto.find()
      .sort({ createdAt: -1 })
      .limit(10);

    res.status(200).json({
      success: true,
      count: newListings.length,
      data: newListings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Error fetching new listings',
    });
  }
};

// Add new cryptocurrency (Protected route)
exports.addCrypto = async (req, res) => {
  try {
    const { name, symbol, price, change24h, image } = req.body;

    // Validate input
    if (!name || !symbol || price === undefined || !image) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, symbol, price, and image',
      });
    }

    if (!validateCryptoSymbol(symbol)) {
      return res.status(400).json({
        success: false,
        message: 'Symbol must be 1-10 alphanumeric characters',
      });
    }

    if (!validatePrice(price)) {
      return res.status(400).json({
        success: false,
        message: 'Price must be a non-negative number',
      });
    }

    if (!validateUrl(image)) {
      return res.status(400).json({
        success: false,
        message: 'Image must be a valid URL',
      });
    }

    // Check if symbol already exists
    const existingCrypto = await Crypto.findOne({ symbol: symbol.toUpperCase() });
    if (existingCrypto) {
      return res.status(400).json({
        success: false,
        message: 'Cryptocurrency with this symbol already exists',
      });
    }

    // Create cryptocurrency
    const crypto = new Crypto({
      name,
      symbol: symbol.toUpperCase(),
      price,
      change24h: change24h || 0,
      image,
      addedBy: req.user.id,
    });

    await crypto.save();

    res.status(201).json({
      success: true,
      message: 'Cryptocurrency added successfully',
      data: crypto,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Error adding cryptocurrency',
    });
  }
};

// Delete cryptocurrency (Optional - for admin/creator)
exports.deleteCrypto = async (req, res) => {
  try {
    const { id } = req.params;

    const crypto = await Crypto.findById(id);

    if (!crypto) {
      return res.status(404).json({
        success: false,
        message: 'Cryptocurrency not found',
      });
    }

    // Allow deletion only if user is the one who added it or admin
    if (crypto.addedBy.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this cryptocurrency',
      });
    }

    await Crypto.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: 'Cryptocurrency deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Error deleting cryptocurrency',
    });
  }
};

// Update cryptocurrency (Optional)
exports.updateCrypto = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, change24h, image } = req.body;

    let crypto = await Crypto.findById(id);

    if (!crypto) {
      return res.status(404).json({
        success: false,
        message: 'Cryptocurrency not found',
      });
    }

    // Allow update only if user is the one who added it
    if (crypto.addedBy && crypto.addedBy.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this cryptocurrency',
      });
    }

    // Update fields
    if (name) crypto.name = name;
    if (price !== undefined) crypto.price = price;
    if (change24h !== undefined) crypto.change24h = change24h;
    if (image) crypto.image = image;

    await crypto.save();

    res.status(200).json({
      success: true,
      message: 'Cryptocurrency updated successfully',
      data: crypto,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message || 'Error updating cryptocurrency',
    });
  }
};
