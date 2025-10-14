# Sanity Studio Setup - Fix CORS Errors

## The Error You're Seeing

You're getting CORS (Cross-Origin Resource Sharing) errors because your Sanity project doesn't recognize `http://localhost:3001` as an authorized origin.

## Quick Fix (5 minutes)

### Step 1: Go to Sanity Dashboard
1. Open https://www.sanity.io/manage in your browser
2. Sign in if needed
3. Select your project: **Southern Skies Dermatology** (Project ID: hc70bxo7)

### Step 2: Add CORS Origins
1. In the left sidebar, click **API** (under Settings)
2. Scroll down to **CORS Origins** section
3. Click **Add CORS origin** button
4. Add the following origins (one at a time):

   **First Origin:**
   - Origin: `http://localhost:3001`
   - Allow credentials: ✅ **YES**
   - Click **Add**

   **Second Origin:**
   - Origin: `http://localhost:3000`
   - Allow credentials: ✅ **YES**
   - Click **Add**

### Step 3: Refresh Your Browser
1. Go back to `http://localhost:3001/studio`
2. Hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
3. The errors should be gone and Sanity Studio should load!

## What is CORS?

CORS is a security feature that prevents websites from making requests to different domains unless explicitly allowed. Sanity needs to know which domains are allowed to access your CMS.

## For Production

When you deploy your website to production, you'll need to add your production domain as well:
- Example: `https://southernskiesdermatology.com`
- Also check "Allow credentials"

## Verification

After adding the CORS origins, you should be able to:
- Access Sanity Studio at http://localhost:3001/studio
- See your imported providers, services, and locations
- Add/edit content
- Upload images

## If You Still See Errors

1. Make sure you clicked **Add** after entering each origin
2. Try clearing your browser cache
3. Make sure your `.env.local` has the correct Project ID:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=hc70bxo7
   ```
4. Restart your dev server:
   ```bash
   # Stop the server (Ctrl+C)
   # Start it again
   npm run dev
   ```

## Need Help?

If you're still having issues:
1. Double-check the Project ID in your Sanity dashboard matches `.env.local`
2. Verify the CORS origins were saved (they should appear in the list)
3. Check that the API token in `.env.local` is still valid
