require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();

// Connect to MongoDB
connectDB();

console.log('JWT_SECRET loaded:', !!process.env.JWT_SECRET);

// Middleware
const allowedOrigins = [
  process.env.CLIENT_URL,
  'http://localhost:5173',
  'http://localhost:5174', // Backup Vite port
  'https://agudu-coinbase-clone1.netlify.app',
  'https://agudu-crypto-ui-clone.netlify.app'
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      var msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
}));
app.use(express.json());

// Root Landing Page
app.get('/', (req, res) => {
  res.status(200).send(`
    <div style="font-family: sans-serif; padding: 50px; line-height: 1.6; max-width: 600px; margin: 0 auto; color: #1a1b1d;">
      <h1 style="color: #0052ff;">Coinbase Clone Backend</h1>
      <p>The API is up and running successfully!</p>
      <div style="background: #f4f7f9; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0;">
        <p><strong>Primary API Endpoint:</strong> <a href="/api" style="color: #0052ff; font-weight: bold; text-decoration: none;">/api</a></p>
        <p><strong>Status:</strong> <span style="color: #05b169;">● Operational</span></p>
      </div>
      <p style="margin-top: 30px; font-size: 14px; color: #64748b;">Developed by Anthony Gudu.</p>
    </div>
  `);
});

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/crypto', require('./routes/cryptoRoutes'));
app.use('/api/seed', require('./routes/seedRoutes'));

// Welcome / Status Route
app.get('/api', (req, res) => {
  res.status(200).json({
    status: 'online',
    message: 'Welcome to the Coinbase Clone API',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
    endpoints: {
      auth: '/api/auth',
      crypto: '/api/crypto',
      health: '/api/health'
    },
    documentation: 'https://github.com/devtony2020/Crypto-UI-Portfolio-Assignment-'
  });
});

// Basic health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
