# Complete Backend Setup & Testing Guide

## ⚙️ Prerequisites

Before you begin, make sure you have:
- Node.js installed (v14 or higher) - [Download](https://nodejs.org/)
- MongoDB installed locally OR MongoDB Atlas account - [Download MongoDB Community](https://www.mongodb.com/try/download/community) or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- npm or Yarn package manager
- A code editor (VS Code recommended)
- Postman or Thunder Client (optional, for testing API)

---

## 📦 Step 1: Install Dependencies

Navigate to the server directory and install all dependencies:

```bash
cd server
npm install
```

This will install:
- `express` - Web framework
- `mongoose` - MongoDB object modeling
- `jsonwebtoken` - JWT authentication
- `bcryptjs` - Password hashing
- `cors` - Cross-origin resource sharing
- `dotenv` - Environment variables
- `nodemon` - Auto-reload during development

---

## 🔐 Step 2: Create .env File

Create a `.env` file in the server directory based on `.env.example`:

```bash
# Copy the example file
cp .env.example .env

# Or create manually and add:
PORT=5000
MONGODB_URI=mongodb://localhost:27017/coinbase-clone
JWT_SECRET=your_super_secret_jwt_key_12345
NODE_ENV=development
CLIENT_URL=http://localhost:5173
```

### Environment Variable Details:
- **PORT**: Server port (default: 5000)
- **MONGODB_URI**: 
  - Local: `mongodb://localhost:27017/coinbase-clone`
  - Atlas: `mongodb+srv://username:password@cluster.mongodb.net/coinbase-clone`
- **JWT_SECRET**: Long random string for token signing (change this in production!)
- **NODE_ENV**: `development` or `production`
- **CLIENT_URL**: Frontend URL (for CORS)

---

## 📊 Step 3: Setup MongoDB

### Option A: Local MongoDB
1. Install MongoDB Community Edition
2. Start the MongoDB service:
   ```bash
   # Windows
   net start MongoDB
   
   # macOS (homebrew)
   brew services start mongodb-community
   
   # Linux
   sudo systemctl start mongod
   ```
3. Verify connection: `mongodb://localhost:27017`

### Option B: MongoDB Atlas (Cloud)
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a cluster
4. Generate connection string
5. Update `MONGODB_URI` in `.env`:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/coinbase-clone?retryWrites=true&w=majority
   ```

---

## 🚀 Step 4: Start the Server

### Development Mode (with auto-reload)
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

**Expected Output:**
```
MongoDB connected: localhost
Server is running on port 5000
```

If you see these messages, your server is ready! ✅

---

## 🌱 Step 5: Seed the Database

Open a new terminal and seed the database with initial cryptocurrencies:

```bash
# Using cURL
curl -X POST http://localhost:5000/api/seed

# Or using Postman:
# Method: POST
# URL: http://localhost:5000/api/seed
```

**Expected Response:**
```json
{
  "success": true,
  "message": "Database seeded successfully with cryptocurrency data"
}
```

This adds 10 cryptocurrencies to your database (Bitcoin, Ethereum, Cardano, etc.)

---

## 🧪 Step 6: Test the API

### Health Check
```bash
curl -X GET http://localhost:5000/api/health
```

### Register User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

**Response:** Get a JWT token
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {...}
}
```

### Login User
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Get All Cryptocurrencies
```bash
curl -X GET http://localhost:5000/api/crypto
```

### Get Top Gainers
```bash
curl -X GET http://localhost:5000/api/crypto/gainers
```

### Get New Listings
```bash
curl -X GET http://localhost:5000/api/crypto/new
```

### Add New Cryptocurrency (Protected)
```bash
curl -X POST http://localhost:5000/api/crypto \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Bitcoin Cash",
    "symbol": "BCH",
    "price": 450.50,
    "change24h": 2.8,
    "image": "https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png"
  }'
```

Replace `YOUR_TOKEN_HERE` with the token received from login

### Get User Profile (Protected)
```bash
curl -X GET http://localhost:5000/api/auth/profile \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

---

## 🛠️ Using Postman for Testing

### Setup Collection:

1. **Create New Request**
   - Name: Seed Database
   - Method: POST
   - URL: `http://localhost:5000/api/seed`

2. **Create New Request**
   - Name: Register
   - Method: POST
   - URL: `http://localhost:5000/api/auth/register`
   - Body (JSON):
     ```json
     {
       "name": "Test User",
       "email": "test@example.com",
       "password": "password123"
     }
     ```

3. **Create New Request**
   - Name: Get All Cryptos
   - Method: GET
   - URL: `http://localhost:5000/api/crypto`

4. **For Protected Routes (Add to Headers)**
   - Add key: `Authorization`
   - Add value: `Bearer <token_from_login>`

---

## 🐛 Common Issues & Solutions

### Issue 1: "Cannot find module" Error
```
Error: Cannot find module 'express'
```
**Solution:** Run `npm install`

### Issue 2: MongoDB Connection Error
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution:** 
- Make sure MongoDB is running
- Check MONGODB_URI in .env
- For Atlas, ensure IP is whitelisted

### Issue 3: Port Already in Use
```
Error: listen EADDRINUSE: address already in use :::5000
```
**Solution:** 
```bash
# Change PORT in .env or kill process using port 5000
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :5000
kill -9 <PID>
```

### Issue 4: JWT Token Expired
```
Error: "Invalid or expired token"
```
**Solution:** Get a new token by logging in again

### Issue 5: CORS Error in Frontend
```
Access to XMLHttpRequest blocked by CORS policy
```
**Solution:** 
- Check CLIENT_URL in .env matches your frontend URL
- Ensure CORS middleware is configured in server.js

---

## 📝 Database Structure

### Users Collection
```javascript
{
  "_id": ObjectId,
  "name": "John Doe",
  "email": "john@example.com",
  "password": "hashed_password",
  "createdAt": ISODate,
  "updatedAt": ISODate
}
```

### Cryptos Collection
```javascript
{
  "_id": ObjectId,
  "name": "Bitcoin",
  "symbol": "BTC",
  "price": 45000,
  "change24h": 2.5,
  "image": "https://...",
  "addedBy": ObjectId or null,
  "createdAt": ISODate,
  "updatedAt": ISODate
}
```

---

## ✅ Checklist Before Deployment

- [ ] All dependencies installed (`npm install`)
- [ ] `.env` file created with correct values
- [ ] MongoDB connection verified
- [ ] Server starts without errors (`npm run dev`)
- [ ] Database seeded with data
- [ ] All endpoints tested and working
- [ ] JWT token generation working
- [ ] Protected routes authenticated
- [ ] CORS configured correctly
- [ ] Error handling in place

---

## 📤 Frontend Integration

To connect your frontend to this backend:

1. **Update API Base URL** in frontend (e.g., `src/api/config.js`):
   ```javascript
   export const API_BASE_URL = 'http://localhost:5000/api';
   ```

2. **Store JWT Token** in local storage or cookies:
   ```javascript
   localStorage.setItem('token', response.data.token);
   ```

3. **Send Token in Requests**:
   ```javascript
   headers: {
     'Authorization': `Bearer ${token}`
   }
   ```

4. **Handle Token Expiration**:
   - Redirect to login on 401 error
   - Clear stored token

---

## 🚢 Production Deployment

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed deployment instructions on Render, Heroku, or other platforms.

---

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/)
- [JWT Documentation](https://jwt.io/)
- [CORS Explanation](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

---

## ❓ Getting Help

If you encounter issues:
1. Check console error messages carefully
2. Review this guide's troubleshooting section
3. Check MongoDB connection
4. Verify .env file configuration
5. Run `npm install` again
6. Clear browser cache and cookies
7. Check API_DOCUMENTATION.md for endpoint details
