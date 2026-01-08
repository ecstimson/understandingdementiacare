# PRODUCT REQUIREMENTS DOCUMENT
Understanding Dementia Care
Mary Donnelly | Dementia Consultant & Educator
understandingdementiacare.com
January 2026
Version 1.0

Table of Contents
## 1. Project Overview
## 2. Goals & Success Metrics
## 3. Target Audience
## 4. Technical Architecture
## 5. Site Architecture & Pages
## 6. Design System
## 7. Sanity CMS Schema
## 8. Form & Email Specifications
## 9. SEO & Schema Markup
## 10. Development Workflow
## 11. Deployment & Hosting
## 12. Future Considerations
## 13. Acceptance Criteria

## 1. Project Overview
## 1.1 Executive Summary
Build a professional, luxury-minimalist website for Mary Donnelly, a nationally-known dementia consultant and educator based in Asheville, NC. The site will serve as her primary digital presence to attract family consulting clients, speaking engagement bookings, and book sales.
## 1.2 About Mary Donnelly
Past Board President for MemoryCare (nationally-recognized nonprofit clinic)
Founder and Coordinator of the MemoryCaregivers Network
Author of The MemoryCaregivers Collection (2025)
Staff member of Teepa Snow: Trainer, Consultant, and Mentor
Steering Committee member, Dementia Friendly Western NC
Based in Asheville, NC
## 1.3 Services Offered

## 2. Goals & Success Metrics
## 2.1 Primary Goals
Establish Mary Donnelly as a recognized dementia expert online
Generate qualified leads for family consulting services
Attract speaking engagement inquiries from organizations
Drive book sales through Amazon
## 2.2 Success Metrics
5+ consulting inquiry form submissions per month within 6 months
2+ speaking engagement inquiries per month within 6 months
Rank for "dementia consultant asheville" and related local keywords
Page 1 rankings for "mary donnelly dementia" branded searches
Google Knowledge Panel for Mary Donnelly (long-term)

## 3. Target Audience

## 4. Technical Architecture
## 4.1 Tech Stack Overview

## 4.2 Project Structure


## 5. Site Architecture & Pages
## 5.1 Sitemap

## 5.2 Page Specifications
Homepage (/)
Sections:
Hero: Full-viewport with tagline, grayscale image, primary CTA
Services Overview: Cards for Consulting, Speaking, Book
About Teaser: Brief intro with photo, link to full bio
Testimonials: 2-3 featured quotes
CTA: "Schedule a Consultation" or "Book Mary to Speak"
About (/about)
Content:
Professional headshot (grayscale, color on hover)
Full biography
Credentials and affiliations (MemoryCare, Teepa Snow, DFWNC)
Personal touch (husband Tom, dog Sammy)
Person schema markup (critical for Knowledge Panel)
Consulting (/consulting)
Content:
Service description and benefits
Session options: 30 min, 1 hour, 2 hour
Process explanation (Zoom call → written report)
Who this is for
Inquiry form (name, email, phone, situation description, preferred session length)
Speaking (/speaking)
Content:
Overview of speaking services
Venue types: churches, retirement communities, organizations
Format options: keynote, workshop, half-day program
Link to topics page
Booking inquiry form

Speaking Topics (/speaking/topics)
List all available presentation topics:

Book (/book)
Content:
Book cover image
Title: The MemoryCaregivers Collection
Description and table of contents/topics covered
CTA: "Buy on Amazon" button (external link)
Note about proceeds supporting MemoryCare
Book schema markup

## 6. Design System
The site follows a Luxury Minimalist design aesthetic - sophisticated, understated, and timeless. Design will be prototyped in Google AI Studio and exported for implementation in Cursor.
## 6.1 Typography

## 6.2 Color Palette

## 6.3 Component Specifications
Buttons
Primary: bg-neutral-900, text-white, px-8 py-3
Secondary: border-neutral-900, text-neutral-900, px-8 py-3
Text style: UPPERCASE, tracking-wide
Hover: translate-y-0.5 upward, shadow enhancement, 300ms ease-out
Cards
Minimal border-radius (rounded-sm) or sharp corners
Border: 1px solid neutral-100
Default shadow: 0 2px 8px rgba(0,0,0,0.06)
Hover shadow: 0 12px 24px rgba(0,0,0,0.1), translate-y-1
Images
Default: grayscale filter applied
Hover: remove grayscale, scale-105
Aspect ratios: 4/3 for cards, 4/5 for features
Subtle gradient or black/5 overlay

## 6.4 Navigation
Fixed header with backdrop-blur-md when scrolled
Height: h-20 (80px)
Links: UPPERCASE, text-sm, tracking-wide
Mobile: Full-screen overlay with large serif text
## 6.5 Footer
Dark background (bg-neutral-900)
White text, neutral-400 for secondary
3-column grid on desktop
Padding: pt-24 pb-12
## 7. Sanity CMS Schema
## 7.1 Content Types

## 7.2 Sanity Studio Configuration
Hosted at: sanity.studio/understanding-dementia-care (or custom subdomain)
Enable: Live preview, image hotspot cropping, revision history
Dataset: production (with dev dataset for testing)

## 8. Form & Email Specifications
## 8.1 Form Types
Consulting Inquiry Form

Speaking Inquiry Form

## 8.2 Resend Email Configuration
Email Triggers:
Admin Notification: Sent to Mary on every form submission
Confirmation Email: Sent to user confirming receipt
Email Templates:
Minimal, text-based design matching site aesthetic
From address: hello@understandingdementiacare.com (or similar)
Reply-to: submitter's email (for admin notifications)

## 9. SEO & Schema Markup
## 9.1 Schema Implementation

## 9.2 Technical SEO Requirements
XML Sitemap: Auto-generated at /sitemap.xml
Robots.txt: Allow all, reference sitemap
Canonical URLs: Self-referencing on all pages
Open Graph tags: Title, description, image for social sharing
Twitter Cards: Summary with large image
Core Web Vitals: Target all green metrics (Astro advantage)
## 9.3 Target Keywords
Primary: "mary donnelly dementia", "dementia consultant asheville"
Secondary: "dementia family consulting", "dementia speaker"
Long-tail: "how to communicate with dementia patient", "dementia caregiver support"
## 10. Development Workflow
## 10.1 Design Phase
Create component designs in Google AI Studio
Design key pages: Homepage, About, Consulting, Speaking, Book
Export design assets and style specifications
Document design tokens for Tailwind configuration
## 10.2 Development Phase (Cursor)
Initialize Astro project with Tailwind integration
Set up Sanity Studio and create schemas
Build reusable components from design exports
Implement pages with Sanity data fetching
Create API routes for form handling
Integrate Resend for email notifications
Add schema markup to all pages
## 10.3 Git Workflow
main: Production branch, protected, deploy to Vercel
develop: Integration branch for testing
feature/*: Feature branches for individual tasks

## 11. Deployment & Hosting
## 11.1 Vercel Configuration
Framework preset: Astro
Build command: npm run build
Output directory: dist
Node.js version: 18.x
## 11.2 Environment Variables

## 11.3 Domain Configuration
Primary domain: understandingdementiacare.com
Redirect www to non-www (or vice versa)
SSL: Automatic via Vercel
DNS: Point A record to Vercel
## 12. Future Considerations
The following features are out of scope for initial launch but may be added later:
Events Calendar: Public calendar of speaking engagements with Event schema
Newsletter: Email signup integration (ConvertKit, Mailchimp, etc.)
Blog: Educational content for SEO traffic growth
Online Scheduling: Calendly or similar integration for booking consultations
Video Content: Educational videos with VideoObject schema
E-commerce: Direct book sales (vs. Amazon referral)
## 13. Acceptance Criteria
## 13.1 Functional Requirements
All pages render correctly on desktop, tablet, and mobile
All forms submit successfully and send email notifications
Content is editable via Sanity Studio
All external links open in new tabs
Site is accessible (WCAG 2.1 AA minimum)
## 13.2 Performance Requirements
Lighthouse Performance score: 90+
Lighthouse SEO score: 95+
Lighthouse Accessibility score: 90+
Core Web Vitals: All green
Time to First Byte: < 200ms
## 13.3 SEO Requirements
All schema markup validates in Google Rich Results Test
XML sitemap is accessible and valid
All pages have unique title tags and meta descriptions
All images have alt text
No broken internal or external links