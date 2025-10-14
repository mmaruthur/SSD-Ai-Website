# Sanity CMS Setup Guide

## 🎉 What We've Built

Sanity CMS is now configured in your Next.js project! Here's what's ready:

### ✅ Content Types Created:

1. **Providers** (Doctors, PA's, NP's, etc.)
   - Name, title, photo
   - Biography (short and long)
   - Education & certifications
   - Specialties
   - Multiple locations

2. **Services** (Treatments offered)
   - Service name & category
   - Images & descriptions
   - Benefits list
   - Before/After photo gallery
   - FAQs
   - Featured flag for homepage

3. **Locations** (Office addresses)
   - Address, phone, email
   - Hours of operation
   - Map coordinates
   - Office photos
   - Parking & accessibility info

---

## 🚀 Next Step: Create Your Sanity Account

**You need to do this to activate the CMS:**

### Step 1: Go to Sanity.io

1. Open your browser and go to: **https://sanity.io**
2. Click "Sign up" or "Get started"
3. Sign up with:
   - GitHub account (recommended - easiest)
   - OR Google account
   - OR email/password

### Step 2: Create a New Project

1. After signing in, you'll be asked to create a project
2. **Project Name**: `Southern Skies Dermatology`
3. **Dataset**: `production` (this is default)
4. **Region**: Choose closest to you (e.g., US West for Arizona)

### Step 3: Get Your Project ID

After creating the project:
1. You'll see a **Project ID** (looks like: `abc123xyz`)
2. **Copy this ID** - you'll need it!

### Step 4: Create an API Token

1. In your Sanity dashboard, go to **Settings** → **API**
2. Click **Add API Token**
3. Give it a name: `Website Editor`
4. Permissions: Select **Editor**
5. Click **Add Token**
6. **COPY THE TOKEN IMMEDIATELY** - you'll only see it once!

---

## 🔧 Step 5: Update Your Environment Variables

Now update your `.env.local` file with the real values:

```env
# Replace these with your actual values from Sanity:
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz    ← Your Project ID here
NEXT_PUBLIC_SANITY_DATASET=production      ← Keep this as-is
SANITY_API_TOKEN=sk_abc123...              ← Your API Token here
```

**Where to find this file:**
- Location: `ssd-nextjs/.env.local`
- Open it in any text editor
- Replace the placeholder values
- Save the file

---

## 🎨 Accessing Sanity Studio

Once you've updated the `.env.local` file:

### Option 1: In Your Browser (Recommended)

1. Make sure your development server is running
2. Go to: **http://localhost:3000/studio**
3. You'll see the Sanity Studio interface!
4. You may need to log in with your Sanity account

### Option 2: Standalone Studio

You can also run Sanity Studio separately:
```bash
npx sanity dev
```

---

## 📝 How to Add Content

Once you're in Sanity Studio (http://localhost:3000/studio):

### Adding a Provider (Doctor):

1. Click **"Provider"** in the left sidebar
2. Click the **"+"** button (Create new)
3. Fill in the fields:
   - **Name**: Dr. John Smith
   - **Slug**: Click "Generate" (it will create: dr-john-smith)
   - **Professional Title**: MD, Dermatologist
   - **Upload Image**: Click to upload profile photo
   - **Short Bio**: 2-3 sentences for cards
   - **Biography**: Full detailed bio
   - **Education**: Add degrees (click + to add multiple)
   - **Certifications**: Board certifications
   - **Specialties**: List areas of expertise
   - **Locations**: Select which offices they work at
   - **Display Order**: 1 (appears first), 2 (second), etc.
   - **Active**: Check this box to show on website
4. Click **"Publish"** when done

### Adding a Service:

1. Click **"Service"** in left sidebar
2. Click **"+"**
3. Fill in:
   - **Service Name**: Botox
   - **Slug**: Click "Generate"
   - **Category**: Choose from dropdown
   - **Featured Image**: Upload photo
   - **Short Description**: For service cards
   - **Full Description**: Detailed info
   - **Benefits**: List benefits
   - **FAQs**: Add common questions
   - **Featured Service**: Check to show on homepage
   - **Display Order**: Determines order on page
4. Click **"Publish"**

### Adding a Location:

1. Click **"Location"** in left sidebar
2. Click **"+"**
3. Fill in:
   - **Location Name**: Scottsdale Office
   - **Slug**: Click "Generate"
   - **Address, City, State, Zip**
   - **Phone Number**
   - **Hours**: Add each day (Monday: 8am-5pm, etc.)
   - **Map Coordinates**: Get from Google Maps (right-click → "What's here?")
   - **Office Photo**: Upload
   - **Parking Info**: Describe parking
4. Click **"Publish"**

---

## 🔗 Connecting to Your Website

The content you add in Sanity will automatically be available to your Next.js website through the Sanity client we already installed.

**Next steps after adding content:**
1. Create pages to display the content (we'll do this together)
2. Build components to show Providers, Services, Locations
3. Style everything to match your brand

---

## 💡 Tips

**Draft vs Published:**
- **Draft**: Only you can see it (for work in progress)
- **Published**: Will appear on website

**Editing Content:**
- Click any item in the list to edit
- Make changes
- Click **"Publish"** to save

**Deleting Content:**
- Click the "..." menu
- Select "Delete"
- Confirm

**Uploading Images:**
- Click the image field
- Drag & drop or browse for file
- Use the **hotspot** tool to crop (click and drag)

---

## 🆘 Troubleshooting

**Problem: Can't access http://localhost:3000/studio**
- Solution: Make sure your dev server is running (`npm run dev`)
- Check that you've updated `.env.local` with real values
- Restart the dev server after updating environment variables

**Problem: "Project not found" error**
- Solution: Double-check your Project ID in `.env.local`
- Make sure it matches exactly from Sanity dashboard

**Problem: Can't upload images**
- Solution: Make sure your API token has "Editor" permissions
- Try logging out and back in to Sanity Studio

---

## 📊 What's Next?

After adding some content in Sanity:

1. **Fetch content in Next.js** - Create queries to get data
2. **Display on pages** - Show providers, services, locations
3. **Style components** - Make them look great
4. **Add interactivity** - Filters, search, etc.

---

## 🎓 Learning Resources

- [Sanity Docs](https://www.sanity.io/docs)
- [Schema Types](https://www.sanity.io/docs/schema-types)
- [Sanity Studio](https://www.sanity.io/docs/sanity-studio)

---

**Ready to start?** Follow the steps above to create your Sanity account and add your first content!
