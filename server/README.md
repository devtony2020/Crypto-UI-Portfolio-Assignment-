# Coinbase Clone Backend

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Create .env File
Copy `.env.example` to `.env` and fill in your values:
```bash
PORT=5000
MONGODB_URI=mongodb://localhost:27017/coinbase-clone
JWT_SECRET=your_jwt_secret_key_here
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

### 3. Start MongoDB
Make sure MongoDB is running on your machine or use MongoDB Atlas.

### 4. Run the Server
```bash
npm start          # Production
npm run dev        # Development (with nodemon)
```

The server will run on `http://localhost:5000`

### 5. Seed Database (Optional)
After starting the server, seed the database with initial cryptocurrencies:
```bash
POST http://localhost:5000/api/seed
```

Or using cURL:
```bash
curl -X POST http://localhost:5000/api/seed
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

### Cryptocurrency
- `GET /api/crypto` - Get all cryptocurrencies
- `GET /api/crypto/gainers` - Get top 10 gainers
- `GET /api/crypto/new` - Get top 10 new listings
- `POST /api/crypto` - Add new cryptocurrency (protected)
- `PUT /api/crypto/:id` - Update cryptocurrency (protected)
- `DELETE /api/crypto/:id` - Delete cryptocurrency (protected)

### Utilities
- `POST /api/seed` - Seed database with initial data
- `GET /api/health` - Health check

## Full API Documentation

See [API_DOCUMENTATION.md](./API_DOCUMENTATION.md) for detailed endpoint documentation, request/response examples, and cURL testing commands.

## Database Schema

### User Model
- `name` - User's full name
- `email` - User's email (unique)
- `password` - Hashed password (bcrypt)
- `createdAt` - Account creation timestamp
- `updatedAt` - Last update timestamp

### Crypto Model
- `name` - Cryptocurrency name
- `symbol` - Cryptocurrency symbol (unique, uppercase)
- `price` - Current price
- `change24h` - 24-hour change percentage
- `image` - Image/logo URL
- `addedBy` - User ID of the creator (optional)
- `createdAt` - Creation timestamp
- `updatedAt` - Last update timestamp

## Project Structure
```
server/
├── config/
│   └── db.js                 # MongoDB connection
├── controllers/
│   ├── authController.js     # Auth logic
│   └── cryptoController.js   # Crypto logic
├── middleware/
│   └── authMiddleware.js     # JWT verification
├── models/
│   ├── User.js              # User schema
│   └── Crypto.js            # Crypto schema
├── routes/
│   ├── authRoutes.js        # Auth routes
│   ├── cryptoRoutes.js      # Crypto routes
│   └── seedRoutes.js        # Seed routes
├── data/
│   └── seedData.js          # Seed data
├── utils/
│   ├── seedDatabase.js      # Seed utility
│   └── validation.js        # Input validation
├── server.js                # Express server
├── package.json
├── .env.example
└── .gitignore
```

## Technologies Used
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - JSON Web Token for authentication
- **bcryptjs** - Password hashing
- **CORS** - Cross-Origin Resource Sharing
- **Dotenv** - Environment variables

## Environment Variables
- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection URI
- `JWT_SECRET` - Secret key for JWT signing
- `NODE_ENV` - Environment (development/production)
- `CLIENT_URL` - Frontend client URL for CORS
