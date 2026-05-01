# API Documentation - Coinbase Clone Backend

## Base URL
```
http://localhost:5000/api
```

## Authentication
- JWT token is returned after registration or login
- Include token in request header: `Authorization: Bearer <token>`
- Requests to protected endpoints without valid token will return 401 status

---

## Authentication Endpoints

### 1. Register User
**Endpoint:** `POST /auth/register`

**Description:** Create a new user account

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Email already registered"
}
```

---

### 2. Login User
**Endpoint:** `POST /auth/login`

**Description:** Authenticate user and get JWT token

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Error Response (401):**
```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

---

### 3. Get User Profile
**Endpoint:** `GET /auth/profile`

**Description:** Fetch authenticated user's profile (Protected)

**Headers:**
```
Authorization: Bearer <token>
```

**Success Response (200):**
```json
{
  "success": true,
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2026-04-22T10:30:00Z"
  }
}
```

**Error Response (401):**
```json
{
  "success": false,
  "message": "Invalid or expired token"
}
```

---

## Cryptocurrency Endpoints

### 1. Get All Cryptocurrencies
**Endpoint:** `GET /crypto`

**Description:** Fetch all available cryptocurrencies

**Query Parameters:** None

**Success Response (200):**
```json
{
  "success": true,
  "count": 10,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439011",
      "name": "Bitcoin",
      "symbol": "BTC",
      "price": 45000,
      "change24h": 2.5,
      "image": "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
      "addedBy": null,
      "createdAt": "2026-04-22T10:00:00Z",
      "updatedAt": "2026-04-22T10:00:00Z"
    }
  ]
}
```

---

### 2. Get Top Gainers
**Endpoint:** `GET /crypto/gainers`

**Description:** Fetch top 10 cryptocurrencies with highest 24h percentage increase

**Success Response (200):**
```json
{
  "success": true,
  "count": 10,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439012",
      "name": "Polygon",
      "symbol": "MATIC",
      "price": 0.85,
      "change24h": 7.2,
      "image": "https://cryptologos.cc/logos/polygon-matic-logo.png",
      "addedBy": null,
      "createdAt": "2026-04-22T10:00:00Z",
      "updatedAt": "2026-04-22T10:00:00Z"
    }
  ]
}
```

---

### 3. Get New Listings
**Endpoint:** `GET /crypto/new`

**Description:** Fetch top 10 most recently added cryptocurrencies

**Success Response (200):**
```json
{
  "success": true,
  "count": 10,
  "data": [
    {
      "_id": "507f1f77bcf86cd799439020",
      "name": "New Crypto",
      "symbol": "NEW",
      "price": 125.5,
      "change24h": 15.3,
      "image": "https://example.com/new-logo.png",
      "addedBy": "507f1f77bcf86cd799439011",
      "createdAt": "2026-04-22T15:00:00Z",
      "updatedAt": "2026-04-22T15:00:00Z"
    }
  ]
}
```

---

### 4. Add New Cryptocurrency
**Endpoint:** `POST /crypto`

**Description:** Add new cryptocurrency to database (Protected)

**Headers:**
```
Authorization: Bearer <token>
Content-Type: application/json
```

**Request Body:**
```json
{
  "name": "Bitcoin Cash",
  "symbol": "BCH",
  "price": 450.50,
  "change24h": 2.8,
  "image": "https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Cryptocurrency added successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439021",
    "name": "Bitcoin Cash",
    "symbol": "BCH",
    "price": 450.50,
    "change24h": 2.8,
    "image": "https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png",
    "addedBy": "507f1f77bcf86cd799439011",
    "createdAt": "2026-04-22T15:30:00Z",
    "updatedAt": "2026-04-22T15:30:00Z"
  }
}
```

**Error Response (400):**
```json
{
  "success": false,
  "message": "Cryptocurrency with this symbol already exists"
}
```

---

### 5. Update Cryptocurrency
**Endpoint:** `PUT /crypto/:id`

**Description:** Update cryptocurrency details (Protected - Only for creator)

**Headers:**
```
Authorization: Bearer <token>
```

**URL Parameters:**
- `id` - Cryptocurrency ID

**Request Body:**
```json
{
  "name": "Bitcoin Cash Updated",
  "price": 455.75,
  "change24h": 3.2
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Cryptocurrency updated successfully",
  "data": {
    "_id": "507f1f77bcf86cd799439021",
    "name": "Bitcoin Cash Updated",
    "symbol": "BCH",
    "price": 455.75,
    "change24h": 3.2,
    "image": "https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png",
    "addedBy": "507f1f77bcf86cd799439011",
    "createdAt": "2026-04-22T15:30:00Z",
    "updatedAt": "2026-04-22T16:00:00Z"
  }
}
```

---

### 6. Delete Cryptocurrency
**Endpoint:** `DELETE /crypto/:id`

**Description:** Delete cryptocurrency from database (Protected - Only for creator)

**Headers:**
```
Authorization: Bearer <token>
```

**URL Parameters:**
- `id` - Cryptocurrency ID

**Success Response (200):**
```json
{
  "success": true,
  "message": "Cryptocurrency deleted successfully"
}
```

**Error Response (403):**
```json
{
  "success": false,
  "message": "Not authorized to delete this cryptocurrency"
}
```

---

## Utility Endpoints

### Seed Database
**Endpoint:** `POST /seed`

**Description:** Populate database with initial cryptocurrency data

**Success Response (200):**
```json
{
  "success": true,
  "message": "Database seeded successfully with cryptocurrency data"
}
```

---

## Health Check

**Endpoint:** `GET /health`

**Description:** Check if server is running

**Success Response (200):**
```json
{
  "message": "Server is running"
}
```

---

## Error Responses

### 400 - Bad Request
```json
{
  "success": false,
  "message": "Please provide required fields"
}
```

### 401 - Unauthorized
```json
{
  "success": false,
  "message": "No authorization token provided"
}
```

### 403 - Forbidden
```json
{
  "success": false,
  "message": "Not authorized to perform this action"
}
```

### 404 - Not Found
```json
{
  "success": false,
  "message": "Resource not found"
}
```

### 500 - Server Error
```json
{
  "success": false,
  "message": "Internal Server Error"
}
```

---

## Testing with cURL

### Register
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Get All Cryptos
```bash
curl -X GET http://localhost:5000/api/crypto
```

### Add Crypto (Replace TOKEN with your JWT)
```bash
curl -X POST http://localhost:5000/api/crypto \
  -H "Authorization: Bearer TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Bitcoin Cash",
    "symbol": "BCH",
    "price": 450.50,
    "change24h": 2.8,
    "image": "https://cryptologos.cc/logos/bitcoin-cash-bch-logo.png"
  }'
```

### Seed Database
```bash
curl -X POST http://localhost:5000/api/seed
```
