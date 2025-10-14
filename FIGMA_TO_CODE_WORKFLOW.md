# Figma to Code Workflow - Complete Guide

## Overview

This guide shows you how to design in Figma first, then have Claude build it into your Next.js site.

---

## The Complete Workflow

### Phase 1: Design in Figma ✏️

**What you do:**
1. Open Figma
2. Create new design file
3. Design your new page/component/feature
4. Get feedback from team/stakeholders
5. Finalize the design

**Best practices:**
- Use your existing design system (colors from DESIGN_TOKENS.md)
- Label layers clearly
- Use consistent spacing
- Include both desktop and mobile views
- Add annotations for interactions/animations

---

### Phase 2: Export from Figma 📤

You have 3 options:

#### Option A: Export as Image (Best for Quick Implementation)

**Steps:**
1. Select your frame in Figma
2. Right panel → Export section
3. Choose PNG or JPG
4. Set scale to 2x (higher quality)
5. Click "Export [frame name]"
6. Save to Desktop or Downloads

**When to use:**
- Single component or page
- Quick implementation needed
- Design is final

#### Option B: Share Figma Link (Best for Complex Designs)

**Steps:**
1. Click "Share" button (top right in Figma)
2. Change to "Anyone with the link can view"
3. Click "Copy link"

**When to use:**
- Multiple pages/components
- Want me to see full design system
- Interactive prototype

#### Option C: Multiple Exports (Best for Large Projects)

**Steps:**
1. Mark multiple frames for export
2. Select all frames you want
3. Export → Bulk export
4. Creates ZIP file with all images

**When to use:**
- Redesigning entire section
- Multiple pages at once
- Complete site redesign

---

### Phase 3: Share with Claude 🤖

Once you have your design, share it with me:

#### Method 1: Image Attachment
```
Message: "I designed a new Services page. Here's the Figma design."
[Attach the exported PNG]

Additional info:
"The hero should have a gradient background, and the cards should
have hover effects that scale them up slightly."
```

#### Method 2: Figma Link
```
Message: "Here's my Figma design for the new homepage:
https://figma.com/file/abc123/Homepage-Redesign

Can you implement this? Focus on the 'Hero Section v2' frame."
```

#### Method 3: Multiple Images
```
Message: "I have 3 new sections designed:
1. [Attach hero-section.png]
2. [Attach features-grid.png]
3. [Attach testimonials.png]

Can you create these as components in the order shown?"
```

---

### Phase 4: Claude Builds It 💻

**What I do:**

1. **Analyze the design**
   - Review colors, fonts, spacing
   - Identify components needed
   - Note interactive elements

2. **Create the code**
   - Build React/Next.js components
   - Match design pixel-perfect
   - Add responsive behavior
   - Implement interactions

3. **Test it**
   - Run tests
   - Check responsive views
   - Verify accessibility

4. **Show you the result**
   - Files created/modified
   - Browser auto-refreshes with new design

---

### Phase 5: You Review & Iterate 🔄

**What you do:**

1. **View in browser** (auto-opened at localhost:3001)
2. **Check if it matches** your Figma design
3. **Give feedback**:
   - "Perfect, ship it!"
   - "Make the button bigger"
   - "Change font size from 24px to 28px"
   - "Add more spacing between sections"

4. **I make adjustments** in real-time
5. **Browser updates automatically**
6. **Repeat until perfect**

---

## Example: Real Project Flow

### Scenario: You Want a New "Team" Page

#### Step 1: Design in Figma (You)
```
Monday:
- Create "Team" page mockup in Figma
- Desktop: 1440px wide frame
- Mobile: 375px wide frame
- Include:
  - Hero section with title
  - Grid of team members (photos + bios)
  - "Join Our Team" CTA section
```

#### Step 2: Export (You)
```
- Select both frames (desktop + mobile)
- Export as PNG (2x)
- Saves: team-page-desktop.png, team-page-mobile.png
```

#### Step 3: Share with Claude (You)
```
Message to Claude:
"I designed a new Team page. Attached are desktop and mobile views.

Details:
- Hero should have gradient background like homepage
- Team member cards should be 3 columns on desktop, 1 on mobile
- Each card has: photo (circular), name, title, short bio
- CTA button should match our secondary color
- Add hover effect on team cards (slight shadow)

Can you create this as /team route?"

[Attach team-page-desktop.png]
[Attach team-page-mobile.png]
```

#### Step 4: Claude Builds (Me)
```
I will:
1. Create src/app/team/page.tsx
2. Build TeamMemberCard component
3. Implement responsive grid
4. Add gradient hero matching homepage
5. Add hover effects
6. Update navigation to include Team link
7. Add E2E tests
8. Capture screenshots
```

Response:
"✅ Created Team page at /team
- Hero with gradient background
- Responsive grid (3 cols → 1 col)
- Team member cards with hover effects
- Navigation updated
- Tests added

Your browser should show the new page at http://localhost:3001/team"

#### Step 5: You Review (You)
```
Option A: "Perfect! Exactly what I wanted."

Option B: "Almost there! Can you:
- Make member names larger (currently 20px, want 24px)
- Add more space between cards (currently 24px, want 32px)
- Change hover effect to lift up instead of shadow"

I make adjustments → Browser auto-updates → You verify
```

---

## Tips for Better Results

### 1. Include Specifications
When sharing design, include:
- **Colors**: Hex codes or "use our primary blue"
- **Fonts**: Sizes and weights
- **Spacing**: "32px gap between cards"
- **Interactions**: "Fade in on scroll" or "Hover shows description"

### 2. Multiple Views
Always provide:
- Desktop view (1440px width)
- Mobile view (375px width)
- Tablet view if significantly different

### 3. States
Show different states:
- Normal state
- Hover state
- Active/selected state
- Error state (for forms)

### 4. Annotations
Add notes in Figma:
- "This scrolls horizontally on mobile"
- "Auto-plays video on hover"
- "Links to /contact page"

### 5. Component Naming
Name your Figma layers clearly:
- ✅ "Hero Section"
- ✅ "CTA Button - Primary"
- ✅ "Team Member Card"
- ❌ "Rectangle 123"
- ❌ "Group 45"

---

## Common Use Cases

### Use Case 1: New Landing Page
```
You: Design entire page in Figma
Export: Full page PNG (desktop + mobile)
Share: "Build this as /landing page"
Claude: Creates new route with all sections
Time: 15-30 minutes
```

### Use Case 2: Update Existing Component
```
You: Redesign header in Figma
Export: Just the header section
Share: "Update our header to match this"
Claude: Modifies existing Header.tsx
Time: 5-10 minutes
```

### Use Case 3: New Component
```
You: Design testimonial slider in Figma
Export: Component with all states
Share: "Create reusable testimonial component"
Claude: Builds src/components/TestimonialSlider.tsx
Time: 10-15 minutes
```

### Use Case 4: Responsive Fixes
```
You: "Mobile view needs work" + mobile mockup
Export: Mobile view only
Share: "Make mobile match this layout"
Claude: Updates responsive CSS
Time: 5 minutes
```

---

## What I Can See from Your Figma Design

When you share a Figma link or image, I can identify:

✅ **Layout & Structure**
- Sections and their arrangement
- Grid systems
- Spacing between elements

✅ **Colors**
- Background colors
- Text colors
- Button colors
- Gradients

✅ **Typography**
- Font sizes
- Font weights (bold, regular)
- Line heights
- Letter spacing

✅ **Components**
- Buttons, cards, forms
- Images and their positions
- Icons

✅ **Responsive Behavior** (from multiple artboards)
- Desktop layout
- Mobile layout
- Breakpoint changes

⚠️ **What I Need You To Tell Me:**
- Animations (fade in, slide up, etc.)
- Hover effects beyond visible states
- Links/navigation destinations
- Forms - what happens on submit
- Any dynamic content/API calls

---

## Tools & Resources

### Figma Resources
- **Figma Tutorial**: https://help.figma.com/
- **Design Systems**: Browse Figma community for inspiration
- **Plugins**: Install "Stark" for accessibility checking

### Exporting Tips
- Use 2x or 3x resolution for crisp images
- PNG for designs with transparency
- JPG for full-page screenshots (smaller files)

### Sharing Best Practices
- Make links "view only" not "edit"
- Export flat images if design has sensitive info
- Include version number ("Homepage v2")

---

## Quick Reference

### To Start a New Feature:

1. **Design it** in Figma (your time)
2. **Export** PNG or share link (30 seconds)
3. **Tell Claude**: "Build this design" + attach/link (10 seconds)
4. **Claude codes** it (5-30 minutes depending on complexity)
5. **You review** in browser (instant preview)
6. **Iterate** if needed (quick tweaks)

### Message Templates:

**Simple change:**
```
"Update the homepage hero to match this design"
[Attach hero-new.png]
```

**New page:**
```
"Create a new /pricing page with this layout"
[Attach pricing-desktop.png]
[Attach pricing-mobile.png]
```

**Component:**
```
"Build a reusable 'FeatureCard' component from this design"
[Attach feature-card-design.png]

Should be used in: Homepage, Services page, About page
Props: title, description, icon, link
```

---

## Benefits of This Workflow

✅ **Design First** - See it before coding
✅ **Get Approval** - Stakeholders review mockups
✅ **Fast Implementation** - Claude codes it quickly
✅ **Pixel Perfect** - Matches design exactly
✅ **Iterate Fast** - Quick adjustments
✅ **Professional** - Industry standard workflow

---

## Summary

**Yes, you can absolutely design in Figma first, then have Claude code it!**

This is the **best way** to work because:
1. You control the design visually
2. Get approval before coding
3. Claude implements it accurately
4. You see results immediately
5. Easy to iterate and refine

**The workflow is:**
```
Figma Design → Export/Share → Claude Codes → Browser Preview → Feedback → Perfect!
```

Start designing in Figma whenever you want to create something new! 🎨
