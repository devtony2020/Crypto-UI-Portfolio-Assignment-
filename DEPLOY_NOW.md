# ✅ Backend Deployment Instructions - Render

## Quick Deploy (5 Minutes)

### Step 1: Go to Render Dashboard
1. Visit [https://dashboard.render.com](https://dashboard.render.com)
2. Sign in with GitHub
3. Click **"New +"** → **"Web Service"**

---

### Step 2: Connect Repository
1. Click **"Build and deploy from a Git repository"**
2. Click **"Connect GitHub"** and authorize Render
3. Select your **"coinbase-clone"** repository
4. Click **"Connect"**

---

### Step 3: Configure Service
Fill in these exact values:

**Name:** 
```
coinbase-clone-api
```

**Environment:** 
```
Node
```

**Region:** 
```
Choose nearest (US or EU)
```

**Build Command:**
```
npm --prefix server install
```

**Start Command:**
```
npm --prefix server start
```

**Instance Type:**
```
Free
```

---

### Step 4: Add Environment Variables

**Click on "Advanced" section, then "Add Environment Variable" for each:**

| Key | Value |
|-----|-------|
| PORT | 5000 |
| MONGODB_URI | mongodb+srv://agudu50:Blankson50$@cluster0.dun8exe.mongodb.net/coinbase-clone?retryWrites=true&w=majority |
| JWT_SECRET | your_super_secret_jwt_key_12345_change_in_production |
| NODE_ENV | production |
| CLIENT_URL | https://placeholder.netlify.app |

---

### Step 5: Deploy
1. Click **"Create Web Service"**
2. **Wait 3-5 minutes** for deployment
3. Look for: `Server is running on port 5000` and `MongoDB connected` in logs

---

### Step 6: Get Your Backend URL

Once deployed, Render shows your URL at the top:

```
https://coinbase-clone-api.onrender.com
```

**Test it:**
```bash
curl https://coinbase-clone-api.onrender.com/api/health
```

Should return:
```json
{"message":"Server is running"}
```

---

## Your Backend URL

Once deployed, add this to your GitHub project:

```
Backend API: https://coinbase-clone-api.onrender.com
Health Check: https://coinbase-clone-api.onrender.com/api/health
API Docs: https://coinbase-clone-api.onrender.com/api
```

---

## What to Add to GitHub Classroom Project

In your project README or submission, include:

```markdown
## Deployment Links

- **Backend API:** https://coinbase-clone-api.onrender.com
- **Database:** MongoDB Atlas (cluster0.dun8exe.mongodb.net)
- **API Health:** https://coinbase-clone-api.onrender.com/api/health

### Test Backend:
```bash
curl https://coinbase-clone-api.onrender.com/api/crypto
```
```

---

## Verification Steps

After deployment, run these to verify everything works:

### 1. Health Check
```bash
curl https://YOUR_BACKEND_URL.onrender.com/api/health
```

### 2. Get Cryptocurrencies
```bash
curl https://YOUR_BACKEND_URL.onrender.com/api/crypto
```

### 3. Test Registration
```bash
curl -X POST https://YOUR_BACKEND_URL.onrender.com/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123"
  }'
```

All should return valid JSON responses.

---

## ⚠️ Important Notes

- Your MongoDB connection is **already configured** and tested locally
- Free tier on Render may **sleep after 15 minutes of inactivity** (takes ~30 seconds to wake up)
- All credentials are in `.env` file (not in code)
- Once deployed, you'll get a permanent URL to add to GitHub classroom

---

## Next Steps After Backend is Live

1. ✅ Backend deployed & URL obtained
2. ⬜ Update frontend `.env` with backend URL
3. ⬜ Deploy frontend to Netlify
4. ⬜ Add both URLs to GitHub Classroom project

---

**Ready? Go to [https://render.com](https://render.com) and follow Steps 1-6 above!**

Once deployed, share your backend URL with us and we'll update the frontend and complete the deployment.
