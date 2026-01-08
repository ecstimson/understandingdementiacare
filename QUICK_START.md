# Quick Start Guide

Get the Understanding Dementia Care website up and running in 30 minutes.

## 🚀 What's Been Built

A complete, production-ready website with:
- ✅ 9 fully functional pages
- ✅ Sanity CMS for easy content management
- ✅ Working contact forms with email
- ✅ SEO optimized with schema markup
- ✅ Luxury minimalist design
- ✅ Mobile responsive

## 📂 Project Location

```
/Users/ericstimson/Documents/understanding-dementia-care/
├── understanding-dementia-care-site/  ← Main Astro website
├── sanity-studio/                     ← CMS configuration
├── mary-donnelly-_-dementia-consultant/ ← Design reference
└── *.md files                         ← Documentation
```

## ⚡ Run Locally (5 minutes)

### 1. Install Dependencies

```bash
cd understanding-dementia-care-site
npm install
```

### 2. Create Environment File

Create `.env` file in `understanding-dementia-care-site/`:

```env
# Temporary values for local testing
PUBLIC_SANITY_PROJECT_ID=temp
PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=temp
RESEND_API_KEY=temp
CONTACT_EMAIL=mary@understandingdementiacare.com
```

**Note:** Site will work with placeholder values, but forms and CMS won't function until you set up real credentials.

### 3. Start Development Server

```bash
npm run dev
```

Visit: **http://localhost:4321**

## 🎨 What You'll See

The site will load with:
- ✅ All 9 pages working
- ✅ Navigation and footer
- ✅ Placeholder content (hardcoded fallbacks)
- ✅ Forms (won't send emails without Resend)
- ⚠️ No CMS content yet (needs Sanity setup)

## 📋 Next Steps (Choose Your Path)

### Path A: Just Browse the Code
- Explore the pages in `src/pages/`
- Check out components in `src/components/`
- Review the design system in `src/styles/global.css`

### Path B: Set Up CMS (15 minutes)
1. Read: `CONTENT_MIGRATION_GUIDE.md`
2. Create Sanity account at sanity.io
3. Run `cd sanity-studio && npm install && npx sanity init`
4. Update `.env` with real Sanity credentials
5. Populate content via Sanity Studio

### Path C: Deploy to Production (30 minutes)
1. Read: `DEPLOYMENT_GUIDE.md`
2. Push code to GitHub
3. Connect to Vercel
4. Set environment variables
5. Deploy!

## 📖 Documentation Files

| File | Purpose |
|------|---------|
| `PROJECT_SUMMARY.md` | Complete overview of what was built |
| `README.md` | Technical documentation and setup |
| `CONTENT_MIGRATION_GUIDE.md` | How to populate Sanity CMS |
| `DEPLOYMENT_GUIDE.md` | How to deploy to Vercel |
| `QUICK_START.md` | This file - fastest way to get started |

## 🔑 Required Services (For Full Functionality)

### 1. Sanity (CMS)
- **Cost:** Free tier sufficient
- **Setup time:** 10 minutes
- **Purpose:** Content management
- **Sign up:** sanity.io

### 2. Resend (Email)
- **Cost:** Free tier (3,000 emails/month)
- **Setup time:** 10 minutes
- **Purpose:** Contact form emails
- **Sign up:** resend.com

### 3. Vercel (Hosting)
- **Cost:** Free tier sufficient
- **Setup time:** 10 minutes
- **Purpose:** Website hosting
- **Sign up:** vercel.com

## 🎯 Project Structure Overview

```
understanding-dementia-care-site/
├── src/
│   ├── pages/              ← All 9 website pages
│   │   ├── index.astro     ← Homepage
│   │   ├── about.astro     ← About page
│   │   ├── consulting.astro
│   │   ├── speaking.astro
│   │   ├── book.astro
│   │   ├── testimonials.astro
│   │   ├── faq.astro
│   │   ├── contact.astro
│   │   ├── speaking/
│   │   │   └── topics.astro
│   │   └── api/            ← Form handlers
│   │       ├── consulting-inquiry.ts
│   │       ├── speaking-inquiry.ts
│   │       └── contact.ts
│   ├── components/         ← Reusable UI components
│   ├── layouts/            ← Page layouts
│   ├── lib/                ← Utilities
│   └── styles/             ← Global CSS
├── public/                 ← Static files
└── astro.config.mjs        ← Configuration
```

## 🛠️ Common Commands

```bash
# Development
npm run dev              # Start dev server (port 4321)

# Building
npm run build            # Build for production
npm run preview          # Preview production build

# Sanity Studio
cd sanity-studio
npm run dev              # Run Sanity Studio (port 3333)
npm run deploy           # Deploy Sanity Studio
```

## ✅ Verify Everything Works

### Local Checklist
- [ ] Dev server starts without errors
- [ ] Homepage loads at localhost:4321
- [ ] All navigation links work
- [ ] Pages are mobile responsive
- [ ] Forms display correctly

### With Sanity Setup
- [ ] Testimonials appear on homepage
- [ ] Speaking topics load
- [ ] FAQ items display

### With Resend Setup
- [ ] Forms submit successfully
- [ ] Admin emails received
- [ ] Confirmation emails sent

## 🐛 Troubleshooting

### "Cannot find module" errors
```bash
cd understanding-dementia-care-site
rm -rf node_modules package-lock.json
npm install
```

### Port already in use
```bash
# Kill process on port 4321
lsof -ti:4321 | xargs kill -9
```

### Build errors
```bash
# Check for TypeScript errors
npx astro check
```

## 💡 Tips

1. **Start Simple:** Run locally first before setting up services
2. **One Service at a Time:** Set up Sanity, then Resend, then deploy
3. **Use Fallback Content:** Site works without CMS for testing
4. **Check Documentation:** Each guide has detailed troubleshooting
5. **Test Forms Last:** Requires Resend setup to actually send emails

## 📞 Need Help?

1. Check the relevant documentation file
2. Look for error messages in browser console
3. Check terminal output for build errors
4. Review environment variables are set correctly

## 🎉 Success!

If you can see the homepage at localhost:4321, you're all set! 

The website is fully functional and ready to:
- ✅ Be customized with real content
- ✅ Have forms connected to email
- ✅ Be deployed to production
- ✅ Be managed via Sanity CMS

---

**Total Time Investment:**
- Browse locally: 5 minutes
- Full CMS setup: 30 minutes
- Production deployment: 60 minutes

**What You Get:**
A professional, production-ready website that Mary can manage herself through Sanity Studio, with working contact forms and SEO optimization.

Ready to dive deeper? Start with `PROJECT_SUMMARY.md` for a complete overview!

