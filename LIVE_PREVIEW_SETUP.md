# Live Preview Setup - See Changes in Real-Time

## The Best Solution: Browser + Hot Reload

Your Next.js dev server already has live preview built-in! Here's how to use it:

---

## Setup (30 seconds)

### Step 1: Start Dev Server
```bash
npm run dev
```

Server will start at: http://localhost:3000

### Step 2: Open Browser
Open your browser and visit:
```
http://localhost:3000
```

### Step 3: Position Your Windows

**Option A - Side by Side:**
```
┌─────────────────┬─────────────────┐
│                 │                 │
│   VS Code       │    Browser      │
│   (Claude)      │  (Live Site)    │
│                 │                 │
│                 │                 │
└─────────────────┴─────────────────┘
```

**Option B - Separate Monitors:**
- Claude Code/VS Code on one monitor
- Browser on second monitor

---

## How It Works

When I make changes to your code:

1. **I save the file** (e.g., edit `Header.tsx`)
2. **Next.js detects the change** (within 1 second)
3. **Browser auto-refreshes** (Hot Module Replacement)
4. **You see the update** (instantly!)

No manual refresh needed! ✨

---

## Example Workflow

**You say**: "Make the header background darker"

**What happens**:
1. I edit `src/components/layout/Header.tsx`
2. Change `bg-white` to `bg-gray-900`
3. Save the file
4. Your browser automatically shows the dark header (within 1 second)

**You see it immediately** and can say "perfect!" or "let's try something else"

---

## Advanced: Multiple Viewports

Want to see desktop AND mobile at the same time?

### Option 1: Browser DevTools
1. Open browser to `http://localhost:3000`
2. Press `F12` (DevTools)
3. Click "Toggle device toolbar" icon (or `Cmd+Shift+M` on Mac)
4. Select "iPhone 14 Pro" or "Responsive"
5. Resize to see mobile view

### Option 2: Multiple Browser Windows
```bash
# Open multiple browsers
open -a "Google Chrome" http://localhost:3000
open -a "Safari" http://localhost:3000
```

Arrange them side by side:
```
┌──────────┬──────────┬──────────┐
│          │  Chrome  │  Safari  │
│  VS Code │ Desktop  │  Mobile  │
│          │  View    │  View    │
└──────────┴──────────┴──────────┘
```

### Option 3: Responsive Design Mode
Most browsers have responsive mode:
- **Chrome**: `Cmd+Opt+I` → Click phone icon
- **Safari**: `Cmd+Opt+R`
- **Firefox**: `Cmd+Opt+M`

---

## Pro Tips

### Tip 1: Auto-Refresh on Error
If you see an error overlay, I'll fix it and the page auto-refreshes when fixed.

### Tip 2: Network Tab
Open DevTools → Network tab to see:
- Page load times
- Image sizes
- API calls

### Tip 3: Console
Open DevTools → Console to see:
- JavaScript errors
- Warnings
- Debug messages

### Tip 4: Fast Feedback Loop
Perfect workflow:
1. **You**: "Change button color to blue"
2. **Me**: Makes change
3. **Browser**: Auto-updates (1 second)
4. **You**: "Looks good!" or "Try darker blue"

---

## What About Figma?

**Short answer**: Figma can't auto-sync with live code in real-time.

**Long answer**:
- Figma is for design **before** coding
- Once coded, browser preview is better
- Figma would require manual screenshot updates

**Better approach**:
1. Use **browser preview** for development (real-time)
2. Use **Figma** for planning new features (before coding)
3. Update **Figma screenshots** when major changes complete

---

## Figma Use Cases

### When to Use Figma:
- Planning a new page layout before coding
- Sharing design mockups with stakeholders
- Creating marketing materials
- Documenting final design

### When to Use Browser:
- ✅ Development (making changes with Claude)
- ✅ Testing functionality
- ✅ Real-time preview
- ✅ Responsive testing
- ✅ Performance testing

---

## Browser Extensions for Better Preview

### Recommended Extensions:

**1. Window Resizer (Chrome/Firefox)**
- Quickly switch between device sizes
- Test responsive breakpoints

**2. Responsive Viewer (Chrome)**
- Shows multiple devices at once
- Perfect for responsive testing

**3. ColorZilla (Chrome/Firefox)**
- Pick colors from screen
- Verify exact color values

**4. Dimensions (Chrome)**
- Measure spacing/sizes on page
- Perfect for matching designs

---

## Screen Recording

Want to record changes as you make them?

### Mac (Built-in):
```bash
# Open QuickTime Player
# File → New Screen Recording
```

### Chrome DevTools:
1. Open DevTools
2. Click three dots (⋮) → More tools → Recorder
3. Record interactions

---

## Mobile Device Testing

Want to see on actual phone?

### Step 1: Find Your Local IP
```bash
ifconfig | grep "inet " | grep -v 127.0.0.1
```

### Step 2: Connect Phone to Same WiFi
Make sure your phone is on same network as computer

### Step 3: Visit on Phone
```
http://YOUR_IP_ADDRESS:3000
```

Example: `http://192.168.1.100:3000`

Now changes appear on your phone too! 📱

---

## Comparison: Browser vs Figma

| Feature | Browser Preview | Figma |
|---------|----------------|-------|
| Real-time updates | ✅ Automatic (1 sec) | ❌ Manual only |
| Actual functionality | ✅ Full interactions | ❌ Static mockup |
| Responsive testing | ✅ Any viewport | ⚠️ Fixed artboards |
| Performance testing | ✅ Real metrics | ❌ Not applicable |
| Animations | ✅ Real animations | ⚠️ Limited |
| Forms/interactions | ✅ Fully functional | ❌ Not functional |
| Sharing | ⚠️ Need server | ✅ Easy link sharing |
| Design planning | ⚠️ Need code first | ✅ Before coding |

---

## Recommended Setup

```
YOUR WORKFLOW:

1. Start dev server: npm run dev

2. Position windows:
   ┌─────────────┬─────────────┐
   │   VS Code   │   Browser   │
   │  (Claude)   │ localhost   │
   └─────────────┴─────────────┘

3. Make requests to Claude

4. See changes instantly in browser

5. Iterate quickly!
```

---

## Quick Start Commands

```bash
# Start dev server
npm run dev

# Open in default browser
open http://localhost:3000

# Open in Chrome specifically
open -a "Google Chrome" http://localhost:3000

# Open multiple browsers
open -a "Google Chrome" http://localhost:3000 && \
open -a "Safari" http://localhost:3000
```

---

## Summary

**For real-time preview while working with Claude:**

✅ **Use browser preview** - It's instant, automatic, and shows real functionality

❌ **Don't rely on Figma** - It requires manual updates and doesn't show live changes

**Best workflow:**
1. Browser open to `localhost:3000`
2. Claude makes changes
3. Browser auto-refreshes (within 1 second)
4. You see changes immediately
5. Give feedback, iterate quickly

This is exactly how professional developers work! 🚀
