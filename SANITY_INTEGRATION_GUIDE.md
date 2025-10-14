# 🎯 Sanity CMS Integration Guide

## Current Status

✅ **Website is fully functional with mock data**
- All pages working perfectly
- All features implemented
- Ready to connect to Sanity CMS

⏳ **Sanity CMS Ready to Connect**
- Schemas created (Provider, Service, Location)
- Import script ready
- Queries written
- Just needs your Sanity account

---

## 🚀 How to Connect Sanity CMS

### Step 1: Create Your Sanity Account (5 minutes)

1. Go to **https://sanity.io**
2. Click **"Get started"** or **"Sign up"**
3. Sign up with:
   - GitHub (recommended - easiest)
   - OR Google
   - OR Email

### Step 2: Create a New Project

1. After signing in, click **"Create new project"**
2. **Project Name**: `Southern Skies Dermatology`
3. **Dataset**: `production` (leave as default)
4. **Region**: Choose closest to you (e.g., `US West` for Arizona)

### Step 3: Get Your Project ID

After creating the project:
1. You'll see a **Project ID** (looks like: `abc123xyz`)
2. **COPY THIS ID** - you'll need it!

### Step 4: Create an API Token

1. In your Sanity dashboard, go to **Settings** → **API**
2. Click **"Add API Token"**
3. **Token name**: `Website Editor`
4. **Permissions**: Select **Editor**
5. Click **"Add Token"**
6. **COPY THE TOKEN IMMEDIATELY** - you'll only see it once!

### Step 5: Update Environment Variables

Open `.env.local` and update these lines:

```env
# Replace with your actual values:
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz    ← Your Project ID
NEXT_PUBLIC_SANITY_DATASET=production      ← Keep as-is
SANITY_API_TOKEN=sk_abc123...              ← Your API Token
```

### Step 6: Restart Development Server

```bash
# Stop the current server (Ctrl+C in terminal)
# Then restart:
npm run dev
```

### Step 7: Import Your Content

Run the import script to populate Sanity with your WordPress data:

```bash
node scripts/import-to-sanity.js
```

This will:
- Import 3 providers (with real WordPress data)
- Create 3 sample services
- Create 2 sample locations

### Step 8: Access Sanity Studio

Visit **http://localhost:3000/studio** to:
- View imported content
- Add images to providers
- Edit and customize content
- Add more services and locations

---

## 📝 What Happens After Setup?

### Immediate Benefits:
1. **Easy Content Updates** - Edit content via beautiful Sanity Studio interface
2. **Image Management** - Upload and manage all images in one place
3. **No Code Needed** - Your team can update content without touching code
4. **Version History** - Undo changes anytime
5. **Real-time Updates** - Changes appear on website instantly

### Current Setup (Mock Data):
```
Website Pages → Mock Data (hardcoded in files)
```

### After Sanity Setup:
```
Website Pages → Sanity CMS → Real Database
                    ↑
              Sanity Studio (Easy editing interface)
```

---

## 🎨 Using Sanity Studio

Once connected, you can manage content at **http://localhost:3000/studio**

### Adding a Provider:
1. Click **"Provider"** in sidebar
2. Click **"+"** to create new
3. Fill in:
   - Name
   - Professional Title
   - Bio
   - Upload photo
   - Add education, certifications
4. Click **"Publish"**

### Adding a Service:
1. Click **"Service"** in sidebar
2. Click **"+"** to create new
3. Fill in:
   - Service name
   - Category
   - Description
   - Upload image
4. Click **"Publish"**

### Adding a Location:
1. Click **"Location"** in sidebar
2. Click **"+"** to create new
3. Fill in:
   - Office name
   - Address, phone, hours
   - Upload office photo
4. Click **"Publish"**

---

## 🔄 Updating Website to Use Sanity Data

After importing content, you'll need to update the pages to fetch from Sanity instead of using mock data. Here's what needs to change:

### Pages to Update:
1. `src/app/page.tsx` - Homepage (featured providers/services)
2. `src/app/providers/page.tsx` - Providers listing
3. `src/app/providers/[slug]/page.tsx` - Individual provider pages
4. `src/app/services/page.tsx` - Services listing
5. `src/app/locations/page.tsx` - Locations listing

### Example Change (Homepage):

**Before (Mock Data):**
```typescript
const featuredProviders = [
  { name: 'Dr. Malia Downing', ... },
  // hardcoded data
];
```

**After (Sanity Data):**
```typescript
import { getFeaturedProviders } from '@/lib/sanity.queries';

export default async function Home() {
  const featuredProviders = await getFeaturedProviders(3);
  // data from Sanity CMS
}
```

---

## ⚠️ Important Notes

### If You Don't Set Up Sanity:
- Website will continue working with mock data
- You'll need to edit code files to update content
- No easy content management interface
- No image management

### After Setting Up Sanity:
- Update content via web interface
- No code changes needed for content updates
- Team members can manage content easily
- Professional content management system

---

## 🆘 Troubleshooting

**Problem: "Project not found" error**
- Check Project ID in `.env.local` matches Sanity dashboard
- Make sure you restarted dev server after updating `.env.local`

**Problem: Can't access Studio**
- Make sure dev server is running (`npm run dev`)
- Check that environment variables are set correctly

**Problem: Import script fails**
- Make sure API token has "Editor" permissions
- Check that `.env.local` has correct values
- Verify you ran `npm install` after cloning

---

## 📊 Summary

| Feature | Without Sanity | With Sanity |
|---------|---------------|-------------|
| **Content Updates** | Edit code files | Use web interface |
| **Images** | Manual upload | Drag & drop in Studio |
| **Team Access** | Developers only | Anyone with login |
| **Version History** | Git only | Built-in |
| **Learning Curve** | Need coding | Click and type |

---

## 🎯 Next Steps

**Option 1: Set Up Sanity Now** (Recommended)
- Follow steps above
- Takes ~15 minutes
- Get full content management

**Option 2: Use Mock Data for Now**
- Website works perfectly as-is
- Set up Sanity later when ready
- Content is hardcoded in files

**Ready to proceed?** Follow Step 1 above and you'll be managing content like a pro in minutes! 🚀
