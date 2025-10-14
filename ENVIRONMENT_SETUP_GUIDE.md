# Environment Variables Setup Guide

This guide explains what each environment variable does and how to get the values you need.

## 📁 File Location

The file is located at: `ssd-nextjs/.env.local`

**Important:** This file is SECRET and should NEVER be shared or committed to Git. It contains your API keys and passwords.

---

## 🔑 Environment Variables Explained

### 1. Sanity CMS (Content Management System)

**What it does:** Sanity is where you'll manage all your website content (like blog posts, doctor profiles, services, etc.) - similar to WordPress admin but more modern.

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
```

**How to get these values:**

1. Go to https://www.sanity.io/
2. Sign up for a free account
3. Create a new project called "Southern Skies Dermatology"
4. After creating the project:
   - **Project ID** will be shown on your dashboard (looks like: `abc123xyz`)
   - **Dataset** - keep as "production" (default)
   - **API Token** - Go to "API" section → "Tokens" → Create a new token with "Editor" permissions

**Status:** ⚠️ **Not set up yet** - You'll need to create a Sanity account

---

### 2. Google Maps API

**What it does:** This allows the website to show interactive maps for each of your office locations.

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key
```

**How to get this:**

1. Go to https://console.cloud.google.com/
2. Sign in with your Google account
3. Create a new project called "SSD Website"
4. Enable these APIs:
   - Maps JavaScript API
   - Places API
   - Geocoding API
5. Go to "Credentials" → "Create Credentials" → "API Key"
6. Copy the API key

**Cost:** Free for up to 28,000 map loads per month (plenty for a medical website)

**Status:** ⚠️ **Not set up yet** - You'll need to create a Google Cloud account

---

### 3. Email Settings (for Contact Forms)

**What it does:** When someone fills out a contact form on your website, this sends you an email notification.

```
SENDGRID_API_KEY=your_sendgrid_key
CONTACT_EMAIL=info@southernskiesdermatology.com
```

**How to get SendGrid API Key:**

1. Go to https://sendgrid.com/
2. Sign up for free account (100 emails/day free)
3. Verify your email address
4. Go to "Settings" → "API Keys" → "Create API Key"
5. Give it "Full Access" permissions
6. Copy the API key (you'll only see it once!)

**Alternative Options:**
- Use your existing email service (Gmail, Office 365)
- Use Formspree (easier setup, no coding needed)
- Use Resend (modern alternative to SendGrid)

**CONTACT_EMAIL:** Change this to your actual email address where you want to receive contact form submissions.

**Status:** ⚠️ **Not set up yet** - Choose an email service

---

### 4. Google Analytics (Optional)

**What it does:** Tracks how many people visit your website, which pages they view, etc.

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

**How to get this:**

1. Go to https://analytics.google.com/
2. Sign in with your Google account
3. Create a new property for "southernskiesdermatology.com"
4. Get your Measurement ID (starts with "G-")

**Status:** ⏸️ **Optional** - Can add later

---

## ✅ Current Status of Your .env.local File

Your current file has placeholder values:

```
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id          ❌ Needs to be replaced
NEXT_PUBLIC_SANITY_DATASET=production                  ✅ This is fine
SANITY_API_TOKEN=your_api_token                        ❌ Needs to be replaced

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key  ❌ Needs to be replaced

# Email (for forms)
SENDGRID_API_KEY=your_sendgrid_key                     ❌ Needs to be replaced
CONTACT_EMAIL=info@southernskiesdermatology.com        ⚠️  Update if different

# Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX             ⏸️  Optional - add later
```

---

## 📋 Priority Order (What to Set Up First)

### **Immediate (to see the website work):**
None! The website works without these. They're only needed when you want to:
- Add real content (Sanity)
- Show maps (Google Maps)
- Receive contact form emails (SendGrid)

### **Short Term (within a few weeks):**
1. **Sanity CMS** - To manage content easily
2. **Google Maps** - To show office locations

### **Later (when going live):**
3. **SendGrid/Email** - For contact forms
4. **Google Analytics** - To track visitors

---

## 🚀 Quick Start (For Development)

**For now, you can continue developing WITHOUT setting these up!**

The website will work fine for:
- Design and layout
- Creating pages
- Testing features
- Building components

You only need these when you want to:
- Add real dynamic content
- Show location maps
- Make contact forms send emails
- Track website visitors

---

## 🔒 Security Notes

1. **Never share your .env.local file** - It contains secret keys
2. **Don't commit it to Git** - It's already in `.gitignore`
3. **Use different keys for development vs production** - When you deploy live, use separate API keys
4. **Keep backups** - Save your keys somewhere safe (password manager)

---

## ❓ Questions?

**Q: What if I don't set these up right away?**
A: That's fine! The website will work, you just won't have maps, dynamic content, or email forms yet.

**Q: Are these services free?**
A: Yes, all have free tiers that are plenty for a medical practice website:
- Sanity: Free for 3 users, unlimited API requests
- Google Maps: Free up to 28,000 loads/month
- SendGrid: Free for 100 emails/day
- Google Analytics: Completely free

**Q: Can I change these later?**
A: Yes! You can update the `.env.local` file anytime. Just restart the development server after changes.

---

## 📞 Next Steps

1. **For now**: Leave the file as-is and continue development
2. **This week**: Set up Sanity CMS (30 minutes)
3. **Next week**: Set up Google Maps (20 minutes)
4. **Before launch**: Set up email service (15 minutes)

The website is already working at http://localhost:3000 - these are just for added features!
