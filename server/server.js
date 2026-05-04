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
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Coinbase Clone API</title>
      <style>
        body { margin: 0; padding: 0; background-color: #f8fafc; }
        .container { 
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          padding: 80px 20px;
          line-height: 1.6;
          max-width: 500px;
          margin: 0 auto;
          color: #1a1b1d;
          text-align: center;
        }
        .card {
          background: white;
          padding: 40px;
          border-radius: 24px;
          box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
          border: 1px solid #e2e8f0;
        }
        h1 { color: #0052ff; font-size: 28px; margin-bottom: 8px; }
        p { color: #64748b; font-size: 16px; margin-bottom: 24px; }
        .status-box {
          background: #f4f7f9;
          padding: 20px;
          border-radius: 16px;
          text-align: left;
          border: 1px solid #e2e8f0;
        }
        .status-box p { margin: 8px 0; font-size: 14px; color: #1a1b1d; }
        a { color: #0052ff; font-weight: bold; text-decoration: none; }
        a:hover { text-decoration: underline; }
        .dot { color: #05b169; margin-right: 4px; }
        .footer { margin-top: 32px; font-size: 13px; color: #94a3b8; }
        
        @media (max-width: 640px) {
          .container { padding: 40px 16px; }
          .card { padding: 30px 20px; }
          h1 { font-size: 24px; }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="card">
          <h1>Coinbase Clone</h1>
          <p>API is Operational</p>
          <div class="status-box">
            <p><strong>Primary API:</strong> <a href="/api">/api</a></p>
            <p><strong>Status:</strong> <span class="dot">●</span> Online</p>
          </div>
        </div>
        <p class="footer">Developed by Anthony Gudu</p>
      </div>
    </body>
    </html>
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
