# Content Migration Guide

This guide helps you migrate content from the Google AI Studio React app to the Astro + Sanity CMS site.

## Overview

Content needs to be manually entered into Sanity Studio since it's currently hardcoded in the React components. This is a one-time task that enables future content management without code changes.

## Setup Sanity Studio

1. **Navigate to sanity-studio directory:**
   ```bash
   cd sanity-studio
   npm install
   ```

2. **Initialize Sanity project:**
   ```bash
   npx sanity init
   ```
   - Create a new project or select existing
   - Choose "Production" dataset
   - Note your Project ID

3. **Update sanity.config.ts:**
   Replace `'your_project_id'` with your actual Sanity Project ID

4. **Run Sanity Studio locally:**
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:3333`

## Content to Migrate

### 1. Site Settings (Single Document)

Create one "Site Settings" document with:

- **Site Title:** Mary Donnelly | Dementia Consultant & Educator
- **Description:** Nationally recognized dementia consultant and educator helping families and professionals navigate the journey of dementia with expert guidance and deep humanity.
- **Contact Email:** mary@understandingdementiacare.com
- **Address:** Asheville, North Carolina
- **Social Links:** (Add as available)
  - LinkedIn URL
  - Facebook URL
  - Twitter URL

### 2. Testimonials

From `mary-donnelly-_-dementia-consultant/pages/Home.tsx` and `Testimonials.tsx`:

#### Testimonial 1
- **Name:** The Richardson Family
- **Role:** (leave empty)
- **Quote:** "Mary transformed our fear into understanding. She gave us the tools to connect with our father again."
- **Featured:** ✓ (check this box)

#### Testimonial 2
- **Name:** Sarah M.
- **Role:** Director of Nursing, Senior Living Community
- **Quote:** "Her presentation to our staff was incredible. The communication strategies she shared have made a real difference in how we interact with our residents."
- **Featured:** ☐

#### Testimonial 3
- **Name:** Jennifer L.
- **Role:** Family Caregiver
- **Quote:** "I've attended many dementia trainings, but Mary's approach is different. She combines clinical knowledge with genuine compassion in a way that really resonates."
- **Featured:** ☐

#### Testimonial 4
- **Name:** David and Linda C.
- **Role:** (leave empty)
- **Quote:** "Mary helped us understand that difficult behaviors weren't personal. She taught us to see things from my mother's perspective, and everything changed."
- **Featured:** ☐

#### Testimonial 5
- **Name:** Michael R.
- **Role:** Administrator, Memory Care Unit
- **Quote:** "The strategies Mary shared in her workshop have become standard practice at our facility. Our staff feel more confident, and our residents are calmer."
- **Featured:** ☐

#### Testimonial 6
- **Name:** Patricia W.
- **Role:** (leave empty)
- **Quote:** "Mary doesn't just teach techniques—she helps you understand the 'why' behind them. That understanding has made all the difference for our family."
- **Featured:** ☐

### 3. Speaking Topics

From `mary-donnelly-_-dementia-consultant/pages/SpeakingTopics.tsx`:

#### Topic 1
- **Title:** Understanding Dementia: Beyond the Basics
- **Description:** A comprehensive overview of dementia types, progression, and how brain changes affect behavior and cognition. Perfect for families and professional caregivers seeking foundational knowledge.
- **Duration:** 60-90 minutes
- **Target Audience:** Healthcare Professionals & Family Caregivers
- **Order:** 1

#### Topic 2
- **Title:** Communication Strategies That Work
- **Description:** Learn practical techniques for connecting with individuals living with dementia. Includes body language, tone, word choice, and validation strategies.
- **Duration:** 90 minutes - 2 hours
- **Target Audience:** All Caregivers
- **Order:** 2

#### Topic 3
- **Title:** Managing Challenging Behaviors
- **Description:** Explore the root causes of behaviors like aggression, wandering, and resistance. Learn to respond with compassion rather than correction.
- **Duration:** 2-3 hours
- **Target Audience:** Professional Caregivers & Facility Staff
- **Order:** 3

#### Topic 4
- **Title:** Self-Care for the Caregiver
- **Description:** Address caregiver burnout, guilt, and the importance of boundaries. Learn sustainable practices for long-term caregiving.
- **Duration:** 60 minutes
- **Target Audience:** Family & Professional Caregivers
- **Order:** 4

### 4. FAQ Items

From `mary-donnelly-_-dementia-consultant/pages/FAQ.tsx` (if exists) or common questions:

#### FAQ 1
- **Question:** What can I expect from a family consulting session?
- **Answer:** During our consultation, we'll discuss your loved one's current situation, behaviors, and challenges. I'll ask questions to understand the full context, then provide practical strategies tailored to your specific circumstances. Sessions are conducted via Zoom for convenience, and you'll receive a written summary with actionable steps after our call.
- **Order:** 1

#### FAQ 2
- **Question:** Do you work with families outside of North Carolina?
- **Answer:** Yes! I provide family consulting services nationwide via Zoom. This virtual format allows me to support families wherever they are while maintaining the personalized, one-on-one attention that makes consulting effective.
- **Order:** 2

#### FAQ 3
- **Question:** How long is a typical speaking presentation?
- **Answer:** Speaking engagements range from 45-minute keynotes to full-day workshops. The format depends on your goals, audience, and topics you want to cover. I'm happy to customize presentations to fit your event's schedule and needs.
- **Order:** 3

#### FAQ 4
- **Question:** What topics do you cover in your presentations?
- **Answer:** I cover a wide range of topics including communication strategies, behavior management, caregiver self-care, understanding dementia progression, and person-centered care approaches. Visit the Speaking Topics page for a complete list.
- **Order:** 4

#### FAQ 5
- **Question:** What is your approach to dementia care?
- **Answer:** My approach is rooted in person-centered care and the Positive Approach to Care® developed by Teepa Snow. I focus on understanding behavior as communication, meeting people where they are, and preserving dignity throughout the dementia journey. The goal is always to improve quality of life for both the person living with dementia and their care partners.
- **Order:** 5

#### FAQ 6
- **Question:** How do I book a consultation or speaking engagement?
- **Answer:** Simply fill out the inquiry form on the Consulting or Speaking page, and I'll get back to you within 24 hours to discuss your needs and schedule.
- **Order:** 6

### 5. Images

Upload images for:
- **Mary's portrait** (for About page)
- **Mary with Tom and Sammy** (for About page)
- **Book cover** (for Book page)
- **Testimonial photos** (optional)
- **Hero image** (homepage)

**Image Guidelines:**
- Use high-quality, professional photos
- Recommended dimensions: 
  - Portrait: 600x800px or larger
  - Hero: 1200x1500px or larger
  - Book cover: 600x800px or larger
- Include descriptive alt text for accessibility

## After Migration

1. **Update Environment Variables:**
   In the Astro project (understanding-dementia-care-site), create `.env`:
   ```env
   PUBLIC_SANITY_PROJECT_ID=your_project_id_here
   PUBLIC_SANITY_DATASET=production
   SANITY_API_TOKEN=your_api_token_here
   RESEND_API_KEY=your_resend_key_here
   CONTACT_EMAIL=mary@understandingdementiacare.com
   ```

2. **Get Sanity API Token:**
   - Go to sanity.io/manage
   - Select your project
   - API → Tokens → Add API Token
   - Create with "Viewer" (read) permissions
   - Copy token to .env file

3. **Test the Site:**
   ```bash
   cd understanding-dementia-care-site
   npm run dev
   ```
   Visit http://localhost:4321 and verify:
   - Homepage shows featured testimonials
   - Speaking Topics page displays all topics
   - FAQ page shows all questions
   - Testimonials page shows all testimonials

4. **Deploy Sanity Studio:**
   ```bash
   cd sanity-studio
   npm run deploy
   ```
   This creates a publicly accessible studio for future content updates.

## Tips

- **Preview Changes:** Sanity Studio has a preview pane (if configured)
- **Draft vs. Published:** Don't forget to publish documents after creating them
- **Order Matters:** Use the "Order" field to control display sequence
- **Rich Text:** FAQ answers support rich text (bold, italic, links)
- **Validation:** Required fields are marked with asterisks

## Maintenance

After initial migration, content can be updated anytime through Sanity Studio without touching code:
- Edit testimonials
- Add new speaking topics
- Update FAQ
- Modify site settings

Changes appear on the live site immediately (or after redeployment for static builds).

## Need Help?

If you encounter issues:
1. Check Sanity Studio console for errors
2. Verify all required fields are filled
3. Ensure documents are published (not just drafts)
4. Check API token permissions in Sanity dashboard

