#!/usr/bin/env node

/**
 * Quick Test Suite for Coinbase Clone Backend
 * Run this after starting the server: node test-api.js
 */

const http = require('http');

const API_URL = 'http://localhost:5000/api';
let testsPassed = 0;
let testsFailed = 0;
let token = '';

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
};

function makeRequest(method, endpoint, data = null) {
  return new Promise((resolve, reject) => {
    // Properly construct the full URL
    const fullUrl = API_URL + endpoint;
    const url = new URL(fullUrl);
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (token) {
      options.headers['Authorization'] = `Bearer ${token}`;
    }

    const req = http.request(url, options, (res) => {
      let body = '';
      res.on('data', (chunk) => (body += chunk));
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          resolve({ status: res.statusCode, data: parsed });
        } catch {
          resolve({ status: res.statusCode, data: body });
        }
      });
    });

    req.on('error', reject);

    if (data) {
      req.write(JSON.stringify(data));
    }

    req.end();
  });
}

async function test(name, fn) {
  try {
    await fn();
    console.log(`${colors.green}✓${colors.reset} ${name}`);
    testsPassed++;
  } catch (error) {
    console.log(`${colors.red}✗${colors.reset} ${name}`);
    console.log(`  ${error.message}`);
    testsFailed++;
  }
}

async function runTests() {
  console.log(
    `\n${colors.blue}🧪 Testing Coinbase Clone Backend API${colors.reset}\n`
  );

  // Health Check
  await test('Health Check - GET /health', async () => {
    const res = await makeRequest('GET', '/health');
    if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
  });

  // Register User
  await test('Register User - POST /auth/register', async () => {
    const res = await makeRequest('POST', '/auth/register', {
      name: 'Test User',
      email: `test${Date.now()}@example.com`,
      password: 'password123',
    });
    if (res.status !== 201) throw new Error(`Expected 201, got ${res.status}`);
    if (!res.data.token) throw new Error('No token in response');
    token = res.data.token;
  });

  // Get All Cryptos
  await test('Get All Cryptos - GET /crypto', async () => {
    const res = await makeRequest('GET', '/crypto');
    if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
    if (!Array.isArray(res.data.data)) throw new Error('Data is not an array');
  });

  // Get Top Gainers
  await test('Get Top Gainers - GET /crypto/gainers', async () => {
    const res = await makeRequest('GET', '/crypto/gainers');
    if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
    if (!Array.isArray(res.data.data)) throw new Error('Data is not an array');
  });

  // Get New Listings
  await test('Get New Listings - GET /crypto/new', async () => {
    const res = await makeRequest('GET', '/crypto/new');
    if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
    if (!Array.isArray(res.data.data)) throw new Error('Data is not an array');
  });

  // Get User Profile (Protected)
  await test('Get User Profile - GET /auth/profile (Protected)', async () => {
    const res = await makeRequest('GET', '/auth/profile');
    if (res.status !== 200) throw new Error(`Expected 200, got ${res.status}`);
    if (!res.data.user) throw new Error('No user in response');
  });

  // Add New Crypto (Protected)
  await test('Add Crypto - POST /crypto (Protected)', async () => {
    const randomSuffix = Math.random().toString(36).substring(2, 6).toUpperCase();
    const res = await makeRequest('POST', '/crypto', {
      name: 'Test Coin',
      symbol: `TST${randomSuffix}`,
      price: 100,
      change24h: 5,
      image: 'https://example.com/logo.png',
    });
    if (res.status !== 201) throw new Error(`Expected 201, got ${res.status}`);
    if (!res.data.data._id) throw new Error('No crypto ID in response');
  });

  // Test Without Token (Should Fail)
  await test('Verify Authentication - POST /crypto without token (should fail)', async () => {
    const savedToken = token;
    token = ''; // Remove token
    const res = await makeRequest('POST', '/crypto', {
      name: 'Unauthorized Coin',
      symbol: 'UNAUTH',
      price: 100,
      change24h: 5,
      image: 'https://example.com/logo.png',
    });
    token = savedToken; // Restore token
    if (res.status !== 401) throw new Error(`Expected 401, got ${res.status}`);
  });

  console.log(`\n${colors.blue}Test Results:${colors.reset}`);
  console.log(
    `${colors.green}Passed: ${testsPassed}${colors.reset} | ${colors.red}Failed: ${testsFailed}${colors.reset}\n`
  );

  if (testsFailed === 0) {
    console.log(
      `${colors.green}🎉 All tests passed! Your backend is working correctly.${colors.reset}\n`
    );
  } else {
    console.log(`${colors.red}❌ Some tests failed. Check your setup.${colors.reset}\n`);
    process.exit(1);
  }
}

// Run tests
runTests().catch((error) => {
  console.error(
    `${colors.red}Error running tests: ${error.message}${colors.reset}`
  );
  console.log(`\n${colors.yellow}Make sure the server is running on port 5000!${colors.reset}\n`);
  process.exit(1);
});
