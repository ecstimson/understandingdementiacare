# Understanding Dementia Care - Website

Professional Astro website with Sanity CMS for Mary Donnelly's dementia consulting practice.

## 🚀 Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable Astro & React components
│   ├── layouts/         # Page layouts
│   ├── lib/            # Utilities (Sanity client, types)
│   ├── pages/          # File-based routing
│   │   ├── api/        # API endpoints for forms
│   │   └── speaking/   # Speaking sub-pages
│   └── styles/         # Global CSS
├── sanity-studio/      # Sanity CMS configuration (separate)
└── astro.config.mjs    # Astro configuration
```

## 📋 Prerequisites

- Node.js 18+ installed
- Sanity account (sign up at sanity.io)
- Resend account for email (resend.com)
- Vercel account for deployment (optional)

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Sanity Studio

Navigate to the `sanity-studio` directory and install dependencies:

```bash
cd ../sanity-studio
npm install
```

Initialize your Sanity project (if not already done):

```bash
npx sanity init
```

Follow the prompts:
- Create new project or use existing
- Choose "Production" dataset
- Note your Project ID

Deploy Sanity Studio:

```bash
npm run deploy
```

### 3. Configure Environment Variables

Create a `.env` file in the Astro project root:

```env
# Sanity Configuration
PUBLIC_SANITY_PROJECT_ID=your_project_id_here
PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_read_token_here

# Resend Email Configuration
RESEND_API_KEY=your_resend_api_key_here

# Contact Email
CONTACT_EMAIL=mary@understandingdementiacare.com
```

**Getting Sanity API Token:**
1. Go to sanity.io/manage
2. Select your project
3. Go to API → Tokens
4. Add new token with "Read" permissions

**Getting Resend API Key:**
1. Sign up at resend.com
2. Go to API Keys
3. Create new API key
4. Verify your sending domain

### 4. Populate Content in Sanity Studio

Access your Sanity Studio at the deployed URL or run locally:

```bash
cd ../sanity-studio
npm run dev
```

Create the following content:

#### Site Settings
- Site title, description
- Contact email and address
- Social media links

#### Testimonials
Add testimonials with:
- Name and role
- Quote
- Mark 2-3 as "featured" for homepage

#### Speaking Topics
Add presentation topics with:
- Title and description
- Duration and target audience
- Display order

#### FAQ Items
Add frequently asked questions with:
- Question and answer
- Display order

### 5. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:4321`

## 📝 Content Management

### Adding New Testimonials

1. Log into Sanity Studio
2. Create new "Testimonial" document
3. Fill in name, role, and quote
4. Toggle "Featured" to show on homepage
5. Publish

### Managing Speaking Topics

1. Edit or create "Speaking Topic" documents
2. Set display order (lower numbers appear first)
3. Include duration and target audience for better display

### Updating FAQ

1. Edit "FAQ" documents
2. Use rich text for answers
3. Order determines display sequence

## 🔧 Development

### Commands

```bash
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Form Testing

Forms require environment variables to be set. Test in development:

1. Set up `.env` file with Resend API key
2. Submit forms through the UI
3. Check console for any errors
4. Verify emails are received

## 🚀 Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Import repository in Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

**Environment Variables to Set in Vercel:**
- `PUBLIC_SANITY_PROJECT_ID`
- `PUBLIC_SANITY_DATASET`
- `SANITY_API_TOKEN`
- `RESEND_API_KEY`
- `CONTACT_EMAIL`

### Domain Configuration

1. Add custom domain in Vercel dashboard
2. Update DNS records:
   - A record: 76.76.19.19
   - Or CNAME: cname.vercel-dns.com
3. SSL certificate automatically provisioned

### Sanity Studio Deployment

Deploy to Sanity's hosting:

```bash
cd ../sanity-studio
npm run deploy
```

Or deploy to custom domain (see Sanity docs).

## 📚 Key Features

- **Luxury Minimalist Design:** Clean, sophisticated aesthetic
- **Sanity CMS:** Easy content management without code
- **Form Handling:** Inquiry forms with email notifications
- **SEO Optimized:** Schema markup, meta tags, sitemap
- **Performance:** Astro's island architecture for fast loading
- **Responsive:** Mobile-first design

## 🎨 Design System

### Colors
- Brand Blue: `#246794`
- Stone neutrals: 50-900 scale
- Grayscale image filters with color on hover

### Typography
- Headings: Playfair Display (serif)
- Body: Inter (sans-serif)
- Uppercase labels with wide letter spacing

### Components
- Buttons: Primary, Outline, Text variants
- Cards: Minimal borders with hover effects
- Sections: Generous whitespace, alternating backgrounds

## 📧 Email Configuration

Forms send two emails per submission:
1. **Admin Notification** - Sent to Mary with form data
2. **Confirmation** - Sent to submitter acknowledging receipt

Customize email templates in:
- `/src/pages/api/consulting-inquiry.ts`
- `/src/pages/api/speaking-inquiry.ts`
- `/src/pages/api/contact.ts`

## 🐛 Troubleshooting

### Forms not submitting
- Check Resend API key in environment variables
- Verify domain is verified in Resend dashboard
- Check browser console for errors

### Sanity content not showing
- Verify project ID in environment variables
- Check API token has read permissions
- Ensure content is published in Sanity Studio

### Build errors
- Run `npm install` to ensure all dependencies are installed
- Check for TypeScript errors with `npx astro check`
- Verify environment variables are set

## 📄 License

Copyright © 2025 Mary Donnelly. All rights reserved.

## 🤝 Support

For questions or issues, contact the development team.
