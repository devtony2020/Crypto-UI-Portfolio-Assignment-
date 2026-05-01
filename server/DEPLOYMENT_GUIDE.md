# Deployment Guide - Coinbase Clone Backend

## 🚀 Deploy to Render (Recommended)

Render is the recommended platform for deploying this backend. It's free, easy to use, and supports MongoDB.

### Prerequisites:
- GitHub account
- Render account (free at [render.com](https://render.com))
- MongoDB Atlas account (free at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas))

---

### Step 1: Prepare MongoDB Atlas

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create database user (remember username & password)
4. Whitelist all IPs (0.0.0.0/0) for development
5. Get connection string:
   - Click "Connect" > "Connect your application"
   - Copy connection string
   - Replace `<username>` and `<password>` with your credentials
   - Replace database name if needed

**Example:**
```
mongodb+srv://user:password@cluster0.xxxxx.mongodb.net/coinbase-clone?retryWrites=true&w=majority
```

---

### Step 2: Push to GitHub

1. Initialize Git (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Create repository on GitHub

3. Push code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/coinbase-clone.git
   git branch -M main
   git push -u origin main
   ```

---

### Step 3: Deploy on Render

1. Go to [render.com](https://render.com) and sign up/login

2. Click **"New"** > **"Web Service"**

3. Select **"Build and deploy from a Git repository"**

4. Connect your GitHub account and select the repository

5. Fill in the configuration:
   - **Name**: `coinbase-clone-api` (or any name)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: Free (or paid for better reliability)

6. Add Environment Variables:
   - Click **"Add Environment Variable"**
   - Add these variables:
     ```
     PORT=5000
     MONGODB_URI=mongodb+srv://user:password@cluster0.xxxxx.mongodb.net/coinbase-clone
     JWT_SECRET=your_super_secret_jwt_key_here_change_this
     NODE_ENV=production
     CLIENT_URL=https://your-frontend-url.vercel.app
     ```

7. Click **"Create Web Service"**

8. **Wait for deployment** (usually 3-5 minutes)

9. Once deployed, you'll get a URL like: `https://coinbase-clone-api.onrender.com`

---

### Step 4: Seed Database on Render

Once deployed, seed your Render database:

```bash
curl -X POST https://coinbase-clone-api.onrender.com/api/seed
```

Or test with a simple GET request to verify it's working:
```bash
curl https://coinbase-clone-api.onrender.com/api/health
```

---

## 🔧 Alternative: Deploy to Heroku

**Note:** Heroku free tier is being discontinued. This is for reference.

### Steps:
1. Install Heroku CLI
2. Create Heroku app: `heroku create coinbase-clone-api`
3. Add MongoDB URI: `heroku config:set MONGODB_URI=...`
4. Add JWT_SECRET: `heroku config:set JWT_SECRET=...`
5. Deploy: `git push heroku main`

---

## 🐳 Deploy with Docker

Create a `Dockerfile` for containerized deployment:

```dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t coinbase-clone-api .
docker run -p 5000:5000 --env-file .env coinbase-clone-api
```

---

## 📋 Pre-Deployment Checklist

- [ ] Code committed to Git
- [ ] `.env` file NOT committed (added to `.gitignore`)
- [ ] MongoDB Atlas cluster created and running
- [ ] Connection string tested locally
- [ ] `npm install` works without errors
- [ ] `npm start` runs successfully
- [ ] Environment variables configured on hosting platform
- [ ] JWT_SECRET is strong and unique
- [ ] Frontend URL added to CORS whitelist
- [ ] Database has seed data or seeding endpoint works

---

## 🔐 Security Checklist for Production

- [ ] Change `NODE_ENV` to `production`
- [ ] Use strong JWT_SECRET (min 32 characters)
- [ ] Enable MongoDB IP whitelisting (don't use 0.0.0.0/0 in production)
- [ ] Use HTTPS URLs only
- [ ] Update CORS to allow only your frontend domain
- [ ] Consider rate limiting for API
- [ ] Add request validation (already done)
- [ ] Enable MongoDB encryption
- [ ] Use environment variables for all secrets
- [ ] Monitor logs for errors
- [ ] Set up error tracking (e.g., Sentry)

---

## 📊 Monitoring & Logs

### On Render:
- Log into Render dashboard
- Select your service
- Check "Logs" tab for real-time logs
- Check "Events" tab for deployment history

### MongoDB Atlas:
- Check "Metrics" for database performance
- Check "Alerts" for issues
- Monitor connection limits

---

## 🔄 Updating Deployed App

After making changes:

```bash
git add .
git commit -m "Update: description of changes"
git push origin main
```

Render will automatically redeploy (you can disable auto-deploy in settings)

---

## ⚠️ Common Deployment Issues

### Issue 1: "Cannot find module"
**Solution**: Ensure `npm install` runs successfully in build command

### Issue 2: MongoDB Connection Timeout
**Solution**: 
- Check connection string in environment variables
- Ensure IP is whitelisted in MongoDB Atlas
- Add `serverSelectionTimeoutMS=5000` to connection string

### Issue 3: Build Failed
**Solution**:
- Check build logs on hosting platform
- Ensure Node version is compatible
- Verify all dependencies are in package.json

### Issue 4: CORS Error
**Solution**: Update CLIENT_URL to match your deployed frontend URL

### Issue 5: Service sleeping (Render Free Tier)
**Solution**: Upgrade to paid tier or use a service that pings your app regularly

---

## 📈 Scaling Tips

For production use:
1. **Database**: Use MongoDB Atlas M0 (free) or larger for more connections
2. **Server**: Start with Render standard tier, upgrade if needed
3. **Caching**: Add Redis for caching frequently accessed data
4. **APIs**: Consider API Gateway for rate limiting
5. **Monitoring**: Use monitoring tools like NewRelic or Datadog

---

## 📞 Support Resources

- Render Support: https://render.com/docs
- MongoDB Atlas Support: https://docs.mongodb.com/
- Node.js Deployment: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

---

## Deployed URLs to Submit

After deployment, you'll have:

1. **Backend API URL**: `https://your-backend.onrender.com/api`
2. **Frontend URL**: (deployed separately)
3. **GitHub Repository**: Your GitHub repo URL

Submit all three to your Google Form!
