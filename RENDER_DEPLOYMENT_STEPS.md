# 🚀 Render Deployment Guide - Step by Step

This guide will walk you through deploying your Coinbase Clone backend to Render.

---

## Prerequisites ✅

- [x] GitHub repository pushed with code
- [x] MongoDB Atlas cluster created
- [x] MongoDB connection string ready
- [x] Render account (create at [render.com](https://render.com))

**Your MongoDB Connection String:**
```
mongodb+srv://agudu50:Blankson50$@cluster0.dun8exe.mongodb.net/coinbase-clone?retryWrites=true&w=majority
```

---

## Step 1: Login to Render Dashboard

1. Go to [render.com](https://render.com)
2. Click **"Sign In"** (use GitHub to sign in)
3. You'll see the dashboard with your services

**Dashboard URL:** https://dashboard.render.com/

---

## Step 2: Create a New Web Service

1. Click **"New +"** button (top right)
2. Select **"Web Service"**
3. Choose **"Build and deploy from a Git repository"**
4. Click **"Connect"** next to your GitHub account
5. Find and select your **"coinbase-clone"** repository
6. Click **"Connect"**

---

## Step 3: Configure Build Settings

Fill in the following fields:

### Basic Information
```
Name: coinbase-clone-api
Environment: Node
Region: Choose closest to you (e.g., Frankfurt, North Virginia)
Branch: main
```

### Build Command
```
npm --prefix server install
```

### Start Command
```
npm --prefix server start
```

### Instance Type
```
Free (or Starter if you want better performance)
```

**DO NOT click "Create Web Service" yet!** We need to add environment variables first.

---

## Step 4: Add Environment Variables

Before deploying, click on **"Advanced"** section and add these environment variables:

### Environment Variables to Add:

```
PORT=5000

MONGODB_URI=mongodb+srv://agudu50:Blankson50$@cluster0.dun8exe.mongodb.net/coinbase-clone?retryWrites=true&w=majority

JWT_SECRET=your_super_secret_jwt_key_12345_change_this_in_production_67890

NODE_ENV=production

CLIENT_URL=https://coinbase-clone.vercel.app
```

**⚠️ Important Notes:**
- Replace `CLIENT_URL` with your actual netlify frontend URL (we'll get this after deploying frontend)
- For now, you can use a placeholder URL
- Copy the `MONGODB_URI` exactly as provided (includes your credentials)
- Change the `JWT_SECRET` to something unique and secure

### How to Add Each Variable:
1. Click **"Add Environment Variable"**
2. Enter the key (e.g., `PORT`)
3. Enter the value (e.g., `5000`)
4. Click **"Add"** to add more
5. Repeat for all 5 variables

---

## Step 5: Deploy to Render

1. Once all environment variables are added, click **"Create Web Service"**
2. Render will start building your application
3. **Wait 3-5 minutes** for deployment to complete
4. You'll see a URL like: `https://coinbase-clone-api.onrender.com`
5. Status will show "Live" when ready

**Monitor the deployment:**
- Click on your service to see logs
- Look for: `Server is running on port 5000` and `MongoDB connected`

---

## Step 6: Verify Backend Deployment

Once deployed, test your backend:

### Health Check
```bash
curl https://YOUR_RENDER_URL.onrender.com/api/health
```

**Expected Response:**
```json
{"message":"Server is running"}
```

### Test API Endpoint
```bash
curl https://YOUR_RENDER_URL.onrender.com/api/crypto
```

You should get a list of cryptocurrencies.

### Seed Database (Optional)
```bash
curl -X POST https://YOUR_RENDER_URL.onrender.com/api/seed
```

---

## Step 7: Update .env for Frontend

Your backend is now live! Now update your frontend to use it.

### Update `client/.env`

```
VITE_API_URL=https://YOUR_RENDER_URL.onrender.com/api
```

Replace `YOUR_RENDER_URL` with your actual Render domain (without `/api`).

**Example:**
```
VITE_API_URL=https://coinbase-clone-api.onrender.com/api
```

---

## Step 8: Build Frontend for Production

```bash
cd client
npm run build
```

This creates a `dist` folder with optimized files ready for deployment.

---

## Step 9: Deploy Frontend to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click **"Add New Site"** > **"Import an Existing Project"**
3. Select your GitHub account and choose the repository
4. Select your repository: **"coinbase-clone"**
5. Configure build settings:
   ```
   Base Directory: client
   Build Command: npm run build
   Publish Directory: dist
   ```
6. Add Environment Variables:
   ```
   VITE_API_URL=https://coinbase-clone-api.onrender.com/api
   ```
7. Click **"Deploy Site"**
8. Wait for deployment (2-3 minutes)
9. Get your Netlify URL (e.g., `https://agudu-coinbase-clone.netlify.app/`)

---

## Step 10: Update Backend CORS (Important!)

Your netlify frontend URL is now live! Update the backend to allow requests from it.

1. Go back to [render.com dashboard](https://dashboard.render.com/)
2. Select your **"coinbase-clone-api"** service
3. Go to **"Environment"** tab
4. Update `CLIENT_URL` variable:
   ```
   CLIENT_URL=https://YOUR_NETLIFY_URL.netlify.app
   ```
   **Example:**
   ```
   CLIENT_URL=https://agudu-coinbase-clone.netlify.app
   ```
5. Click **"Save Changes"**
6. Render will auto-redeploy (takes 1-2 minutes)

---

## Testing Your Deployment

### Test Frontend Loading
1. Open your Vercel URL in browser
2. You should see the Coinbase Clone homepage
3. Try signing up/logging in

### Test API Connection
Open browser console (F12) and check for any CORS errors.

### Test API Directly
```bash
# Test registration
curl -X POST https://your-render-url.onrender.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123"
  }'

# Get all cryptos
curl https://your-render-url.onrender.com/api/crypto
```

---

## Deployment Checklist

- [ ] GitHub repository created and code pushed
- [ ] MongoDB Atlas cluster set up with credentials
- [ ] Render account created
- [ ] Backend deployed to Render
- [ ] Backend environment variables configured
- [ ] Backend health check passing
- [ ] Frontend `.env` updated with Render URL
- [ ] Frontend built with `npm run build`
- [ ] Frontend deployed to Vercel
- [ ] Backend CORS updated with Vercel URL
- [ ] Full end-to-end testing completed

---

## Your Live URLs

Once deployment is complete:

**Backend API:**
```
https://coinbase-clone-api.onrender.com
```

**Frontend:**
```
https://coinbase-clone.vercel.app
```

---

## Troubleshooting

### Backend not responding
1. Check Render logs (click on service > Logs tab)
2. Look for `MongoDB connected` message
3. Verify `MONGODB_URI` environment variable is correct
4. Ensure IP whitelist allows all IPs in MongoDB Atlas

### CORS errors in browser
1. Verify `CLIENT_URL` on Render matches your Vercel URL
2. Hard refresh browser (Ctrl+Shift+R)
3. Check CORS middleware in `server.js`

### Frontend showing 404
1. Verify build was successful (`npm run build` completed)
2. Check Vercel logs for build errors
3. Ensure `VITE_API_URL` is set correctly

### Database connection fails
1. Check MongoDB URI syntax
2. Verify username and password are correct
3. Ensure special characters in password are URL-encoded
4. Check MongoDB Atlas IP whitelist (should be 0.0.0.0/0)

---

## Next Steps

1. Monitor your applications in the dashboards
2. Set up error tracking (Sentry, Rollbar)
3. Add custom domain names
4. Set up CI/CD for auto-deployment
5. Add monitoring and alerts

---

## Quick Reference

| Platform | Dashboard | Logs | Settings |
|----------|-----------|------|----------|
| **Render** | [dashboard.render.com](https://dashboard.render.com) | Click service > Logs | Click service > Settings |
| **Vercel** | [netlify.com/dashboard](https://vercel.com/dashboard) | Click project > Logs | Click project > Settings |
| **MongoDB** | [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas) | Logs in Atlas UI | Project Settings |

---

**Your deployment is ready! Follow the steps above to go live. 🚀**
