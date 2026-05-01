const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide cryptocurrency name'],
      trim: true,
    },
    symbol: {
      type: String,
      required: [true, 'Please provide cryptocurrency symbol'],
      trim: true,
      uppercase: true,
      unique: true,
    },
    price: {
      type: Number,
      required: [true, 'Please provide cryptocurrency price'],
      min: 0,
    },
    change24h: {
      type: Number,
      required: [true, 'Please provide 24h change percentage'],
      default: 0,
    },
    image: {
      type: String,
      required: [true, 'Please provide cryptocurrency image URL'],
    },
    addedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Crypto', cryptoSchema);
