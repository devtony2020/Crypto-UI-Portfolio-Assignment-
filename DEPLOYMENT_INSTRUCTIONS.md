# Complete Deployment Guide - Coinbase Clone

This guide covers deploying both the frontend and backend to production.

---

## 🔧 Prerequisites

- GitHub account
- Render account (render.com)
- Netlify account (netlify.com) for frontend, or any other hosting
- MongoDB Atlas account (free)
- Git installed locally

---

## Part 1: Backend Deployment (Node.js API)

### Step 1: Prepare MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Sign in or create an account
3. Create a free cluster:
   - Click "Create a Project"
   - Create a cluster (M0 free tier)
4. Create database user:
   - Go to Database Access
   - Click "Add New Database User"
   - Set username and password (save these!)
5. Allow IP access:
   - Go to Network Access
   - Click "Add IP Address"
   - Enter `0.0.0.0/0` (allows all IPs - fine for development)
6. Get connection string:
   - Click "Databases" > "Connect"
   - Choose "Connect your application"
   - Copy connection string
   - Replace `<username>` and `<password>` with your credentials
   - Example: `mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/coinbase-clone?retryWrites=true&w=majority`

### Step 2: Push to GitHub

```bash
# Navigate to project root
cd c:\DCIT\ 323\ LAB\ WORKS\interim-ass\interim-assesment-agudu50

# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit: Coinbase Clone project"

# Create new repository on GitHub
# https://github.com/new

# Add remote and push
git remote add origin https://github.com/YOUR_USERNAME/coinbase-clone.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy Backend to Render

1. Go to [render.com](https://render.com) and sign in
2. Click **"New +"** → **"Web Service"**
3. Select **"Build and deploy from a Git repository"**
4. Connect GitHub and select your repository
5. Fill in deployment settings:
   ```
   Name: coinbase-clone-api
   Environment: Node
   Build Command: npm --prefix server install
   Start Command: npm --prefix server start
   Instance Type: Free (or Starter for better performance)
   ```
6. Add environment variables:
   - Click **"Environment"** tab
   - Add these variables:
     ```
     PORT=5000
     MONGODB_URI=mongodb+srv://user:password@cluster0.xxxxx.mongodb.net/coinbase-clone
     JWT_SECRET=your_super_secret_jwt_key_here_change_this
     NODE_ENV=production
     CLIENT_URL=https://your-frontend-url.com
     ```
7. Click **"Create Web Service"**
8. Wait 3-5 minutes for deployment
9. Once done, you'll get a URL like: `https://coinbase-clone-api.onrender.com`

### Step 4: Test Backend Deployment

```bash
# Test health endpoint
curl https://coinbase-clone-api.onrender.com/api/health

# Expected response:
# {"message":"Server is running"}

# Seed database
curl -X POST https://coinbase-clone-api.onrender.com/api/seed
```

---

## Part 2: Frontend Deployment (React)

### Step 1: Build Production Bundle

```bash
# Navigate to client directory
cd client

# Build for production
npm run build

# This creates a 'dist' folder with optimized files
```

### Step 2: Deploy to Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"New Project"**
3. Select your GitHub repository
4. Vercel auto-detects it's a React/Vite project
5. Configure:
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Root Directory: ./client
   ```
6. Add environment variables:
   - `VITE_API_URL=https://coinbase-clone-api.onrender.com/api`
7. Click **"Deploy"**
8. Get your frontend URL, e.g., `https://coinbase-clone.vercel.app`

### Step 3: Update Backend CORS

Now that you have your frontend URL, update the backend:

1. Go back to Render dashboard
2. Select your backend service
3. Go to **"Environment"**
4. Update `CLIENT_URL=https://your-vercel-url.com`
5. Changes auto-deploy

---

## Part 3: Verification

### Backend Health Check
```bash
curl https://coinbase-clone-api.onrender.com/api/health
# Should return: {"message":"Server is running"}
```

### Frontend Load Test
- Open `https://your-vercel-url.com` in a browser
- Test registration and login flows
- Check browser console for API errors

### Test API Endpoints
```bash
# Register new user
curl -X POST https://coinbase-clone-api.onrender.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123"
  }'

# Get all cryptos
curl https://coinbase-clone-api.onrender.com/api/crypto
```

---

## Troubleshooting

### Backend not responding
- Check MongoDB Atlas connection string
- Verify IP whitelist allows all IPs
- Check Render logs: `Deploy` > `View Logs`
- Ensure `NODE_ENV=production` is set

### CORS errors in browser
- Verify `CLIENT_URL` matches your frontend URL
- Clear browser cache and hard refresh (Ctrl+Shift+R)

### Database connection issues
- Test MongoDB URI locally first
- Check credentials in `.env`
- Verify whitelist includes `0.0.0.0/0`

### Deployment fails
1. Check Render build logs
2. Ensure all dependencies in `package.json`
3. No hardcoded localhost URLs
4. Test locally first: `npm start` (server) & `npm run dev` (client)

---

## Next Steps

1. **Setup CI/CD**: Auto-deploy on Git push
2. **Add monitoring**: Set up alerts for errors
3. **Custom domain**: Add your own domain
4. **HTTPS**: Already enabled on Render & Vercel
5. **Analytics**: Add tracking to understand usage

---

## Environment Variables Checklist

**Backend (.env)**
- [ ] `PORT=5000`
- [ ] `MONGODB_URI=mongodb+srv://...`
- [ ] `JWT_SECRET=your_secret_key`
- [ ] `NODE_ENV=production`
- [ ] `CLIENT_URL=https://your-frontend.com`

**Frontend (.env)**
- [ ] `VITE_API_URL=https://your-backend.onrender.com/api`

---

## Quick Links

- [Render Dashboard](https://dashboard.render.com/)
- [Vercel Dashboard](https://vercel.com/)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [GitHub](https://github.com/)

---

## Support

If you encounter issues:
1. Check the relevant logs (Render/Vercel/MongoDB)
2. Test locally first
3. Verify all environment variables are set
4. Check CORS and firewall settings
