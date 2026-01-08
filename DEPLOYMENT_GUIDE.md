# Deployment Guide

Complete guide for deploying the Understanding Dementia Care website to Vercel.

## Prerequisites

- GitHub account
- Vercel account (sign up at vercel.com)
- Sanity project set up (see CONTENT_MIGRATION_GUIDE.md)
- Resend account with API key (resend.com)

## Step 1: Prepare Repository

### Initialize Git Repository

```bash
cd understanding-dementia-care-site
git init
git add .
git commit -m "Initial commit: Astro + Sanity CMS website"
```

### Create GitHub Repository

1. Go to github.com and create a new repository
2. Name it: `understanding-dementia-care`
3. Don't initialize with README (we already have one)
4. Copy the remote URL

### Push to GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/understanding-dementia-care.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

### Connect Repository

1. Go to vercel.com and log in
2. Click "Add New Project"
3. Import your GitHub repository
4. Select `understanding-dementia-care-site` as the root directory

### Configure Build Settings

Vercel should auto-detect Astro. Verify these settings:

- **Framework Preset:** Astro
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`
- **Root Directory:** `understanding-dementia-care-site`

### Set Environment Variables

Add these environment variables in Vercel dashboard:

```
PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_read_token
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=mary@understandingdementiacare.com
```

**How to get these values:**

1. **Sanity Project ID:**
   - Go to sanity.io/manage
   - Select your project
   - Copy Project ID from dashboard

2. **Sanity API Token:**
   - In Sanity dashboard → API → Tokens
   - Create new token with "Viewer" permissions
   - Copy the token (you won't see it again!)

3. **Resend API Key:**
   - Go to resend.com dashboard
   - API Keys → Create API Key
   - Copy the key

4. **Contact Email:**
   - Use Mary's actual email address

### Deploy

1. Click "Deploy"
2. Wait for build to complete (2-3 minutes)
3. Vercel will provide a URL: `your-project.vercel.app`

## Step 3: Configure Custom Domain

### Add Domain in Vercel

1. In Vercel project dashboard → Settings → Domains
2. Add domain: `understandingdementiacare.com`
3. Add www subdomain: `www.understandingdementiacare.com`
4. Choose redirect preference (www → non-www or vice versa)

### Update DNS Records

In your domain registrar (GoDaddy, Namecheap, etc.):

#### Option A: Using A Records (Recommended)

Add these A records:

```
Type: A
Name: @
Value: 76.76.19.19
TTL: 3600

Type: A
Name: www
Value: 76.76.19.19
TTL: 3600
```

#### Option B: Using CNAME

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
```

**Note:** DNS propagation can take 24-48 hours, but usually completes within 1-2 hours.

### Verify SSL Certificate

1. Vercel automatically provisions SSL certificates
2. Check status in Vercel dashboard → Domains
3. Wait for "Valid" status (usually < 5 minutes after DNS propagates)

## Step 4: Deploy Sanity Studio

### Option A: Deploy to Sanity's Hosting (Recommended)

```bash
cd sanity-studio
npm run deploy
```

This creates a URL like: `your-project.sanity.studio`

### Option B: Deploy to Custom Domain

See Sanity documentation for custom domain setup.

### Configure CORS

1. Go to sanity.io/manage
2. Select your project
3. API → CORS Origins
4. Add your production domain:
   - `https://understandingdementiacare.com`
   - `https://www.understandingdementiacare.com`
5. Allow credentials: Yes

## Step 5: Configure Resend Email

### Verify Domain

1. Go to resend.com dashboard
2. Domains → Add Domain
3. Add: `understandingdementiacare.com`
4. Add DNS records provided by Resend:
   - SPF record
   - DKIM records
   - DMARC record (optional but recommended)

### Update From Address

If using custom domain, update API routes to use:
- From: `noreply@understandingdementiacare.com`

## Step 6: Post-Deployment Testing

### Test Checklist

- [ ] Homepage loads correctly
- [ ] All 9 pages are accessible
- [ ] Navigation works on desktop and mobile
- [ ] Forms submit successfully
- [ ] Email notifications are received
- [ ] Sanity content displays correctly
- [ ] Images load properly
- [ ] Mobile responsive design works
- [ ] SSL certificate is active (https://)

### Test Forms

1. Fill out consulting inquiry form
2. Verify admin email received
3. Verify confirmation email received
4. Check spam folders if emails don't arrive

### Test Sanity Integration

1. Log into Sanity Studio
2. Edit a testimonial
3. Refresh production site
4. Verify changes appear (may need to redeploy for static builds)

## Step 7: Set Up Automatic Deployments

### Configure Webhooks (Optional)

To auto-deploy when Sanity content changes:

1. In Sanity dashboard → API → Webhooks
2. Create new webhook
3. URL: Your Vercel deploy hook URL
4. Trigger on: Create, Update, Delete
5. Dataset: production

Get Vercel deploy hook:
1. Vercel project → Settings → Git
2. Deploy Hooks → Create Hook
3. Copy URL and paste into Sanity webhook

### Branch Deployments

Vercel automatically deploys:
- `main` branch → Production
- Other branches → Preview deployments

## Troubleshooting

### Build Fails

**Error: Missing environment variables**
- Solution: Add all required env vars in Vercel dashboard

**Error: Sanity connection failed**
- Solution: Verify Project ID and API token are correct

### Forms Not Working

**Emails not sending**
- Check Resend API key is set
- Verify domain is verified in Resend
- Check Resend dashboard for error logs

**Form submission errors**
- Check browser console for errors
- Verify API routes are deployed
- Check Vercel function logs

### Content Not Showing

**Sanity data not loading**
- Verify API token has read permissions
- Check CORS is configured for production domain
- Ensure content is published (not draft)

### DNS Issues

**Domain not resolving**
- Wait 24-48 hours for DNS propagation
- Use DNS checker tools (whatsmydns.net)
- Verify A records point to correct IP

**SSL certificate not provisioning**
- Ensure DNS is fully propagated
- Check domain ownership verification
- Contact Vercel support if issue persists

## Monitoring & Maintenance

### Analytics (Optional)

Add analytics in Vercel dashboard:
- Vercel Analytics (built-in)
- Google Analytics
- Plausible Analytics

### Performance Monitoring

Check Vercel dashboard for:
- Build times
- Function execution times
- Bandwidth usage
- Error rates

### Regular Maintenance

- Monitor form submissions
- Check email delivery rates
- Update dependencies monthly
- Review Vercel function logs
- Backup Sanity content regularly

## Costs

### Vercel
- **Hobby Plan:** Free
  - Unlimited personal projects
  - 100GB bandwidth/month
  - Serverless functions included

- **Pro Plan:** $20/month (if needed)
  - More bandwidth
  - Better performance
  - Team collaboration

### Sanity
- **Free Plan:**
  - 3 users
  - 100K API requests/month
  - 5GB assets
  - Usually sufficient for this project

### Resend
- **Free Plan:**
  - 3,000 emails/month
  - 100 emails/day
  - Should be sufficient for contact forms

## Support

### Getting Help

- **Vercel:** vercel.com/support
- **Sanity:** sanity.io/help
- **Resend:** resend.com/docs

### Logs & Debugging

- **Vercel Logs:** Project → Functions → View Logs
- **Sanity Logs:** Studio → Vision tab
- **Browser Console:** F12 → Console tab

## Next Steps

After successful deployment:

1. ✅ Test all functionality
2. ✅ Set up monitoring/analytics
3. ✅ Configure automatic backups
4. ✅ Document any custom configurations
5. ✅ Train Mary on Sanity Studio usage
6. ✅ Set up regular content update schedule
7. ✅ Monitor form submissions and email delivery
8. ✅ Plan for ongoing maintenance and updates

## Rollback Procedure

If deployment has issues:

1. Go to Vercel dashboard → Deployments
2. Find previous working deployment
3. Click three dots → Promote to Production
4. Or: Revert git commit and push to trigger new deployment

```bash
git revert HEAD
git push origin main
```

## Security Checklist

- [ ] Environment variables are not committed to git
- [ ] API tokens have minimal required permissions
- [ ] CORS is configured for production domain only
- [ ] SSL certificate is active
- [ ] Form validation is in place
- [ ] Rate limiting considered for API routes (if needed)
- [ ] Sanity Studio access is restricted to authorized users

---

**Deployment Complete! 🎉**

Your website should now be live at: https://understandingdementiacare.com

