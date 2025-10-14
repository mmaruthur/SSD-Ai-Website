# WordPress to Next.js Migration Guide
## A Complete Framework for Modern Website Migrations

**Version:** 1.0
**Last Updated:** October 2025

---

## Table of Contents
1. [Introduction](#introduction)
2. [When to Migrate](#when-to-migrate)
3. [Pre-Migration Assessment](#pre-migration-assessment)
4. [Technology Stack Selection](#technology-stack-selection)
5. [Migration Phases](#migration-phases)
6. [Common Challenges & Solutions](#common-challenges--solutions)
7. [Best Practices](#best-practices)
8. [Testing & Quality Assurance](#testing--quality-assurance)
9. [Deployment Strategy](#deployment-strategy)
10. [Post-Migration Checklist](#post-migration-checklist)

---

## Introduction

This guide provides a framework for migrating WordPress websites to Next.js with React. It's based on real-world experience and covers common pitfalls, solutions, and best practices.

### Why Migrate from WordPress to Next.js?

**Performance Benefits:**
- 3-5x faster initial page load
- Better Core Web Vitals scores
- Optimized image loading
- Automatic code splitting

**Developer Experience:**
- Type-safe development with TypeScript
- Modern React ecosystem
- Component-based architecture
- Better version control

**Scalability:**
- Headless CMS flexibility
- API-first architecture
- Easier to integrate third-party services
- Better caching strategies

**SEO Benefits:**
- Server-side rendering
- Better structured data
- Faster page speeds
- Improved mobile experience

---

## When to Migrate

### Good Candidates for Migration

✅ **Sites that should migrate:**
- WordPress sites with performance issues
- Sites requiring frequent custom development
- Projects needing modern workflows (Git, TypeScript)
- Sites with complex integrations
- High-traffic sites requiring better caching
- Projects with dedicated development teams

❌ **Sites that should stay on WordPress:**
- Content-only sites with non-technical editors
- Sites with heavy plugin dependencies
- Projects without development budget
- Sites using WordPress-specific features (WooCommerce, etc.)
- Projects with frequent content updates by non-developers

---

## Pre-Migration Assessment

### 1. Content Audit

**Inventory all content types:**
```
Content Type         | Count | Custom Fields | Media
---------------------|-------|---------------|--------
Pages                | XX    | Yes/No        | XX GB
Blog Posts           | XX    | Yes/No        | XX GB
Custom Post Types    | XX    | Yes/No        | XX GB
Categories/Tags      | XX    | -             | -
Media Library        | XX    | -             | XX GB
Menus                | XX    | -             | -
Widgets              | XX    | -             | -
Forms                | XX    | -             | -
```

**Questions to answer:**
- Which content is still relevant?
- What custom fields exist?
- Are there any custom post types?
- How many images/videos need migration?
- What third-party integrations exist?

### 2. Technical Assessment

**Current WordPress setup:**
- [ ] WordPress version
- [ ] Active theme and its customizations
- [ ] List of active plugins
- [ ] Custom code (functions.php, custom plugins)
- [ ] Database size and structure
- [ ] Hosting environment
- [ ] Performance metrics (PageSpeed, GTmetrix)
- [ ] Analytics data (traffic patterns, popular pages)

**Dependencies to evaluate:**
- Contact forms (Gravity Forms, Contact Form 7, etc.)
- E-commerce (WooCommerce)
- Membership systems
- Payment gateways
- Email marketing integrations
- Social media integrations
- Third-party APIs

### 3. User Analysis

**Stakeholder needs:**
- Who edits content? How often?
- What's their technical skill level?
- What features do they use most?
- What pain points exist?
- Training budget/time available?

---

## Technology Stack Selection

### Core Framework
**Next.js** (Recommended for most projects)
- Latest version with App Router
- TypeScript for type safety
- Built-in image optimization
- Server-side rendering

**Alternatives:**
- Gatsby (better for static sites)
- Remix (better for complex applications)
- Astro (better for content-heavy sites)

### Styling
**Choose based on team preference:**

**Tailwind CSS** (Recommended)
- Utility-first approach
- Fast development
- Small bundle size
- Good for component libraries

**Alternatives:**
- Styled Components (CSS-in-JS)
- CSS Modules (scoped CSS)
- Sass/SCSS (traditional approach)

### Headless CMS
**Choose based on content management needs:**

**Sanity** (Recommended for flexibility)
- Real-time collaboration
- Customizable content studio
- Strong TypeScript support
- Excellent developer experience

**Alternatives:**
- **Contentful** (enterprise features)
- **Strapi** (self-hosted, open-source)
- **WordPress Headless** (keep WP as CMS only)
- **Prismic** (intuitive UI)
- **DatoCMS** (good for agencies)

### Hosting
**Choose based on requirements:**

**Vercel** (Recommended for Next.js)
- Built by Next.js creators
- Automatic deployments
- Edge functions
- Free tier available

**Alternatives:**
- **Netlify** (similar features)
- **AWS Amplify** (AWS integration)
- **Cloudflare Pages** (global CDN)
- **Self-hosted** (more control)

---

## Migration Phases

### Phase 1: Planning & Setup (Week 1-2)

#### Step 1.1: Project Initialization
```bash
# Create Next.js project
npx create-next-app@latest project-name

# Select options:
# ✓ TypeScript
# ✓ ESLint
# ✓ Tailwind CSS
# ✓ App Router
# ✓ Import alias (@/*)
```

#### Step 1.2: Install Essential Dependencies
```bash
# CMS SDK (example with Sanity)
npm install next-sanity @sanity/vision @sanity/image-url

# Additional tools
npm install -D @tailwindcss/typography
npm install sharp # for image optimization
```

#### Step 1.3: Configure Base Settings

**Tailwind config:**
```typescript
// tailwind.config.ts
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: 'YOUR_PRIMARY_COLOR',
        secondary: 'YOUR_SECONDARY_COLOR',
      },
    },
  },
}
```

**Next.js config:**
```typescript
// next.config.ts
export default {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'your-wordpress-domain.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}
```

#### Step 1.4: Project Structure
```
project-name/
├── public/                    # Static assets
│   ├── images/
│   └── favicon.ico
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Homepage
│   │   └── [routes]/         # Other pages
│   ├── components/
│   │   ├── layout/           # Header, Footer
│   │   ├── ui/               # Buttons, Cards, etc.
│   │   └── forms/            # Form components
│   ├── lib/                  # Utilities
│   │   ├── cms.ts           # CMS client
│   │   └── utils.ts         # Helper functions
│   └── types/                # TypeScript types
├── cms/                      # CMS configuration
└── .env.local               # Environment variables
```

### Phase 2: Content Extraction (Week 2-3)

#### Step 2.1: Database Export
```bash
# Export WordPress database
mysqldump -u username -p database_name > backup.sql

# Or use WP-CLI
wp db export backup.sql
```

#### Step 2.2: Parse WordPress Data

**Method 1: Direct Database Query**
```javascript
// Extract posts from SQL dump
const extractPosts = (sqlDump) => {
  // Parse SQL and extract from wp_posts table
  // WHERE post_status = 'publish'
  // AND post_type = 'post' or 'page'
}
```

**Method 2: WordPress REST API**
```bash
# Fetch all posts
curl https://your-site.com/wp-json/wp/v2/posts?per_page=100

# Fetch all pages
curl https://your-site.com/wp-json/wp/v2/pages?per_page=100

# Fetch media
curl https://your-site.com/wp-json/wp/v2/media?per_page=100
```

**Method 3: Web Scraping (Last resort)**
```javascript
// Use tools like Puppeteer to scrape live site
import { WebFetch } from 'your-scraping-tool';

const scrapePage = async (url) => {
  const content = await WebFetch(url, 'Extract all content');
  return content;
}
```

#### Step 2.3: Content Verification

**Critical: Always cross-reference with live site**
```javascript
// Create verification checklist
const verifyContent = {
  postsCount: extractedPosts.length === livePostsCount,
  pagesCount: extractedPages.length === livePagesCount,
  imagesCount: extractedImages.length === liveImagesCount,
  customFields: allCustomFieldsPresent(),
}
```

**Common issues:**
- Incomplete database backups
- Missing custom post types
- Lost metadata
- Outdated content
- Broken relationships

**Solution:**
Always fetch critical content from the live site as a backup.

### Phase 3: CMS Setup (Week 3)

#### Step 3.1: Define Content Schemas

**Example schema structure:**
```typescript
// cms/schemas/post.ts
export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      options: { source: 'title' }
    },
    {
      name: 'excerpt',
      type: 'text',
      rows: 3
    },
    {
      name: 'content',
      type: 'blockContent' // or 'array' of blocks
    },
    {
      name: 'featuredImage',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'author',
      type: 'reference',
      to: [{ type: 'author' }]
    },
    {
      name: 'categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }]
    },
    {
      name: 'publishedAt',
      type: 'datetime'
    },
    {
      name: 'seo',
      type: 'object',
      fields: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'text' },
        { name: 'keywords', type: 'array', of: [{ type: 'string' }] }
      ]
    }
  ]
}
```

#### Step 3.2: Create CMS Client

```typescript
// src/lib/cms.ts
import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
})

// Query helpers
export async function getAllPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    "imageUrl": featuredImage.asset->url,
    publishedAt
  }`

  try {
    return await client.fetch(query)
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}
```

### Phase 4: Component Development (Week 3-5)

#### Step 4.1: Layout Components

**Header component pattern:**
```tsx
'use client' // Only if interactive

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <nav className="container mx-auto px-4 py-4">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Site Logo"
            width={200}
            height={60}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          {/* ... */}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          Menu
        </button>
      </nav>
    </header>
  )
}
```

#### Step 4.2: Server vs Client Components

**Understanding the difference:**

**Server Components (default):**
```tsx
// No 'use client' directive
// Can fetch data directly
// Rendered on server
// Cannot use useState, useEffect, etc.

export default async function BlogPage() {
  const posts = await getAllPosts() // Direct async/await

  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
```

**Client Components:**
```tsx
'use client' // Required directive

// Can use hooks
// Can handle user interactions
// Rendered on client

export default function SearchBar() {
  const [query, setQuery] = useState('')

  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  )
}
```

**Hybrid pattern (recommended):**
```tsx
// page.tsx - Server Component
export default async function Page() {
  const data = await fetchData()
  return <ClientComponent data={data} />
}

// ClientComponent.tsx - Client Component
'use client'
export default function ClientComponent({ data }) {
  const [filtered, setFiltered] = useState(data)
  // ... interactive logic
}
```

#### Step 4.3: Fallback Data Pattern

**Critical for development:**
```tsx
// Define fallback data at top of file
const FALLBACK_POSTS = [
  {
    id: '1',
    title: 'Sample Post',
    slug: 'sample-post',
    excerpt: 'This is a sample post',
  },
  // ... more sample data
]

export default async function BlogPage() {
  try {
    // Try to fetch from CMS
    const posts = await getAllPosts()

    // Use CMS data if available, otherwise fallback
    const displayPosts = posts.length > 0 ? posts : FALLBACK_POSTS

    return <BlogList posts={displayPosts} />
  } catch (error) {
    console.error('CMS fetch failed:', error)
    // Use fallback on error
    return <BlogList posts={FALLBACK_POSTS} />
  }
}
```

**Why this pattern is essential:**
- Develop without waiting for CMS setup
- Handle CMS outages gracefully
- Provide instant preview for stakeholders
- Useful for testing and demos

### Phase 5: Page Migration (Week 4-6)

#### Step 5.1: Prioritize Pages

**Migration order:**
1. **Homepage** (most important, highest traffic)
2. **About/Contact** (frequently visited)
3. **Main content pages** (products, services)
4. **Blog listing** (if applicable)
5. **Blog posts** (dynamic routes)
6. **Secondary pages** (privacy, terms, etc.)

#### Step 5.2: Page Template Pattern

```tsx
// src/app/page.tsx - Homepage
import { getHomepageData } from '@/lib/cms'

export const metadata = {
  title: 'Home | Your Site',
  description: 'Welcome to our site',
}

export default async function HomePage() {
  const data = await getHomepageData()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold">{data.heroTitle}</h1>
          <p className="text-xl mt-4">{data.heroSubtitle}</p>
        </div>
      </section>

      {/* Additional sections */}
    </div>
  )
}
```

#### Step 5.3: Dynamic Routes

```tsx
// src/app/blog/[slug]/page.tsx
import { getPost, getAllPostSlugs } from '@/lib/cms'

// Generate static paths at build time
export async function generateStaticParams() {
  const posts = await getAllPostSlugs()
  return posts.map(post => ({ slug: post.slug }))
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug)
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function PostPage({ params }) {
  const post = await getPost(params.slug)

  return (
    <article>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  )
}
```

### Phase 6: Assets & Media (Week 5-6)

#### Step 6.1: Image Migration Strategy

**Option 1: Keep images on WordPress**
```typescript
// next.config.ts
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'old-site.com',
      pathname: '/wp-content/uploads/**',
    },
  ],
}
```

**Option 2: Migrate to CMS**
- Upload images to Sanity/Contentful
- Update all image references
- More control, but more work

**Option 3: Use CDN**
- Upload to Cloudinary/ImageKit
- Update image URLs
- Best performance

#### Step 6.2: Image Component Usage

```tsx
import Image from 'next/image'

// Always use Next.js Image component
<Image
  src={post.imageUrl}
  alt={post.imageAlt}
  width={800}
  height={600}
  className="rounded-lg"
  priority={isAboveFold} // For hero images
/>
```

### Phase 7: Forms & Functionality (Week 6-7)

#### Step 7.1: Contact Forms

**Replace WordPress forms with:**

**Option 1: Form service (easiest)**
```tsx
'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)

    // Send to Formspree, EmailJS, etc.
    const response = await fetch('https://formspree.io/f/YOUR_ID', {
      method: 'POST',
      body: formData,
      headers: { Accept: 'application/json' }
    })

    setStatus(response.ok ? 'success' : 'error')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" required />
      <textarea name="message" required />
      <button type="submit">Send</button>
    </form>
  )
}
```

**Option 2: API route**
```tsx
// app/api/contact/route.ts
export async function POST(request: Request) {
  const body = await request.json()

  // Send email via SendGrid, Mailgun, etc.
  await sendEmail(body)

  return Response.json({ success: true })
}
```

#### Step 7.2: Search Functionality

```tsx
'use client'
export default function Search() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    if (query.length > 2) {
      // Debounced search
      const timer = setTimeout(async () => {
        const data = await searchContent(query)
        setResults(data)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [query])

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />
      <SearchResults results={results} />
    </div>
  )
}
```

---

## Common Challenges & Solutions

### Challenge 1: CORS and External Resource Errors

**Symptom:**
```
Error: hostname "example.com" is not configured under images
```

**Solution:**
Always configure external domains early:
```typescript
// next.config.ts
images: {
  remotePatterns: [
    { hostname: 'wordpress-site.com' },
    { hostname: 'cdn.example.com' },
  ],
}
```

### Challenge 2: Unexpected Data from CMS

**Symptom:**
Pages showing wrong/old content despite code changes

**Root Cause:**
CMS has data that overrides fallback data

**Solution:**
```typescript
// Temporary: Use only fallback during development
const data = FALLBACK_DATA

// Production: Check CMS first
const data = cmsData.length > 0 ? cmsData : FALLBACK_DATA
```

**Debugging technique:**
```bash
# Check actual server output
curl -s http://localhost:3000/page | grep "specific-content"
```

### Challenge 3: React Hydration Mismatches

**Symptom:**
```
Warning: Text content did not match. Server: "X" Client: "Y"
```

**Common causes:**
- Date formatting (timezone differences)
- Random data in SSR
- Browser-only APIs used in server components

**Solutions:**
```tsx
// ❌ Wrong: Different on server/client
<div>{new Date().toLocaleDateString()}</div>

// ✅ Right: Same on server/client
<div suppressHydrationWarning>
  {new Date().toLocaleDateString()}
</div>

// ✅ Better: Only render on client
'use client'
const [mounted, setMounted] = useState(false)
useEffect(() => setMounted(true), [])
if (!mounted) return null
```

### Challenge 4: Slow Data Fetching

**Symptom:**
Pages load slowly during development

**Solution:**
```tsx
// Use React cache for repeated requests
import { cache } from 'react'

export const getCachedData = cache(async (id: string) => {
  const data = await fetchData(id)
  return data
})

// Can call multiple times without refetching
const data1 = await getCachedData('123')
const data2 = await getCachedData('123') // Cached!
```

### Challenge 5: TypeScript Errors

**Symptom:**
Missing type definitions for CMS data

**Solution:**
```typescript
// src/types/index.ts
export interface Post {
  id: string
  title: string
  slug: string
  excerpt?: string
  content: string
  imageUrl?: string
  publishedAt: string
  author: Author
  categories: Category[]
}

export interface Author {
  id: string
  name: string
  bio?: string
}

// Use in components
interface PostListProps {
  posts: Post[]
}

export default function PostList({ posts }: PostListProps) {
  // TypeScript knows the shape of posts
}
```

---

## Best Practices

### 1. Component Organization

**Good structure:**
```
components/
├── layout/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Sidebar.tsx
├── ui/              # Generic UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   └── Input.tsx
├── features/        # Feature-specific components
│   ├── blog/
│   │   ├── PostCard.tsx
│   │   ├── PostList.tsx
│   │   └── PostDetail.tsx
│   └── shop/
│       ├── ProductCard.tsx
│       └── Cart.tsx
└── shared/          # Shared across features
    ├── SearchBar.tsx
    └── Newsletter.tsx
```

### 2. Data Fetching Patterns

**Recommended approach:**
```tsx
// Centralize data fetching logic
// src/lib/api.ts
export async function getPost(slug: string) {
  try {
    // Try CMS first
    const post = await cms.getPost(slug)
    if (post) return post

    // Fallback to static data
    return FALLBACK_POSTS.find(p => p.slug === slug)
  } catch (error) {
    console.error('Error fetching post:', error)
    return FALLBACK_POSTS.find(p => p.slug === slug)
  }
}

// Use in pages
export default async function PostPage({ params }) {
  const post = await getPost(params.slug)
  if (!post) notFound()
  return <PostDetail post={post} />
}
```

### 3. Error Handling

**Implement error boundaries:**
```tsx
// app/error.tsx
'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <button onClick={reset}>Try again</button>
      </div>
    </div>
  )
}
```

### 4. SEO Optimization

**Implement metadata for all pages:**
```tsx
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title',
  description: 'Page description',
  openGraph: {
    title: 'Page Title',
    description: 'Page description',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Page Title',
    description: 'Page description',
  },
}
```

### 5. Performance Optimization

**Image optimization:**
```tsx
// Use appropriate sizing
<Image
  src={url}
  width={800}
  height={600}
  sizes="(max-width: 768px) 100vw, 800px"
  quality={85}
/>
```

**Code splitting:**
```tsx
// Dynamic imports for heavy components
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
})
```

---

## Testing & Quality Assurance

### Pre-Launch Checklist

#### Content Verification
- [ ] All pages migrated
- [ ] All images loading correctly
- [ ] All internal links working
- [ ] All external links working
- [ ] Forms submitting correctly
- [ ] Search functionality working

#### Technical Testing
- [ ] Test on Chrome, Firefox, Safari
- [ ] Test on mobile devices
- [ ] Test on tablets
- [ ] Page speed scores (aim for 90+)
- [ ] Lighthouse audit passed
- [ ] No console errors
- [ ] No 404 errors

#### SEO Testing
- [ ] All pages have metadata
- [ ] Sitemap generated
- [ ] robots.txt configured
- [ ] 301 redirects for old URLs
- [ ] Structured data implemented
- [ ] Open Graph tags

#### Analytics & Tracking
- [ ] Google Analytics installed
- [ ] Conversion tracking setup
- [ ] Error tracking (Sentry)
- [ ] Performance monitoring

---

## Deployment Strategy

### 1. Staging Environment

**Deploy to staging first:**
```bash
# Deploy to Vercel preview
vercel --prod=false

# Deploy to Netlify preview
netlify deploy

# Or use branch-based deployments
git push origin staging
```

**Staging checklist:**
- Test all functionality
- Verify CMS connection
- Check environment variables
- Test forms and submissions
- Verify analytics
- Load test if high traffic expected

### 2. DNS & Domain Setup

**Gradual rollout approach:**

**Week 1: Subdomain**
```
new.yoursite.com → Next.js site
yoursite.com → WordPress (existing)
```

**Week 2-3: Testing**
- Share new.yoursite.com with stakeholders
- Fix any issues
- Collect feedback

**Week 4: Full cutover**
```
yoursite.com → Next.js site
old.yoursite.com → WordPress (backup)
```

### 3. URL Redirects

**Critical: Set up 301 redirects for SEO**

**Option 1: In Next.js**
```typescript
// next.config.ts
async redirects() {
  return [
    {
      source: '/old-page',
      destination: '/new-page',
      permanent: true, // 301
    },
    {
      source: '/blog/:slug',
      destination: '/posts/:slug',
      permanent: true,
    },
  ]
}
```

**Option 2: Redirect map file**
```typescript
// redirects.ts
export const REDIRECTS = [
  { from: '/old-about', to: '/about' },
  { from: '/old-contact', to: '/contact' },
  // ... hundreds more
]

// next.config.ts
async redirects() {
  return REDIRECTS.map(r => ({
    source: r.from,
    destination: r.to,
    permanent: true,
  }))
}
```

---

## Post-Migration Checklist

### Week 1 After Launch
- [ ] Monitor error logs daily
- [ ] Check analytics (traffic drop/increase)
- [ ] Verify all forms receiving submissions
- [ ] Check page speed scores
- [ ] Monitor uptime
- [ ] Review user feedback

### Month 1
- [ ] SEO ranking comparison
- [ ] Performance metrics review
- [ ] User testing sessions
- [ ] Accessibility audit
- [ ] Security audit
- [ ] Cost analysis (hosting, CMS, etc.)

### Ongoing Maintenance
- [ ] Weekly: Check for broken links
- [ ] Monthly: Update dependencies
- [ ] Quarterly: Full security audit
- [ ] Yearly: Major version upgrades

---

## Success Metrics

### Performance Goals
- **First Contentful Paint:** < 1.0s
- **Largest Contentful Paint:** < 2.0s
- **Total Blocking Time:** < 200ms
- **Cumulative Layout Shift:** < 0.1
- **PageSpeed Score:** > 90/100

### Business Metrics
- **Conversion rate:** Equal or improved
- **Bounce rate:** Decreased by 10-20%
- **Average session duration:** Increased
- **Page views per session:** Increased
- **Mobile traffic:** Improved engagement

### SEO Metrics
- **Organic traffic:** Maintained or increased
- **Keyword rankings:** Stable or improved
- **Core Web Vitals:** All green
- **Indexed pages:** Same or more

---

## Common Migration Mistakes to Avoid

### ❌ Don't Do These:

1. **Migrating without backups**
   - Always keep WordPress running until fully tested

2. **Ignoring redirects**
   - Will lose SEO rankings without 301 redirects

3. **Not testing mobile**
   - 50%+ traffic is mobile, test thoroughly

4. **Relying only on database backups**
   - Cross-reference with live site content

5. **Forgetting forms**
   - Test all forms, especially in production

6. **Skipping analytics setup**
   - Can't measure success without data

7. **No error monitoring**
   - Will miss critical issues

8. **Launching without staging**
   - Always test in environment identical to production

9. **Not training content editors**
   - New CMS requires training time

10. **Underestimating timeline**
    - Add 50% buffer to estimates

---

## Timeline Template

### Small Site (5-10 pages)
- **Planning:** 1 week
- **Setup:** 1 week
- **Development:** 2-3 weeks
- **Testing:** 1 week
- **Launch:** 1 week
- **Total:** 6-8 weeks

### Medium Site (10-50 pages)
- **Planning:** 2 weeks
- **Setup:** 1 week
- **Development:** 4-6 weeks
- **Testing:** 2 weeks
- **Launch:** 1 week
- **Total:** 10-12 weeks

### Large Site (50+ pages)
- **Planning:** 3 weeks
- **Setup:** 2 weeks
- **Development:** 8-12 weeks
- **Testing:** 3 weeks
- **Launch:** 2 weeks
- **Total:** 18-22 weeks

---

## Budget Estimation

### Development Costs
- **Junior Developer:** $50-75/hr
- **Mid-level Developer:** $75-125/hr
- **Senior Developer:** $125-200/hr

### Service Costs (Monthly)
- **Hosting (Vercel/Netlify):** $20-200
- **CMS (Sanity/Contentful):** $0-200
- **Forms (Formspree):** $0-50
- **Email (SendGrid):** $0-50
- **Analytics:** $0-300
- **Monitoring:** $0-100
- **Total:** $20-900/month

### One-Time Costs
- **Domain transfer:** $10-50
- **SSL certificate:** $0 (free with hosting)
- **Design/branding:** $0-5,000
- **Content migration:** $500-5,000
- **Training:** $500-2,000

---

## Conclusion

Migrating from WordPress to Next.js is a significant undertaking that requires careful planning, execution, and testing. This guide provides a framework, but every project is unique.

### Key Takeaways:

1. **Plan thoroughly before coding**
2. **Verify content from live site, not just backups**
3. **Use fallback data patterns during development**
4. **Test extensively before launch**
5. **Monitor closely after launch**
6. **Keep WordPress backup running for 30+ days**

### When to Migrate:
✅ You have development resources
✅ Performance is critical
✅ You need modern workflows
✅ Long-term scalability matters

### When to Stay on WordPress:
❌ Pure content site with non-technical editors
❌ Heavy plugin dependencies
❌ Limited budget
❌ Short-term project

---

## Additional Resources

### Documentation
- **Next.js:** https://nextjs.org/docs
- **Sanity:** https://www.sanity.io/docs
- **Tailwind CSS:** https://tailwindcss.com/docs

### Tools
- **Web scraping:** Puppeteer, Playwright
- **Database tools:** MySQL Workbench, phpMyAdmin
- **Testing:** Playwright, Cypress
- **Performance:** Lighthouse, PageSpeed Insights

### Communities
- **Next.js Discord:** https://nextjs.org/discord
- **Reddit:** r/nextjs, r/react
- **Stack Overflow:** Tag [next.js]

---

**Document Version:** 1.0
**Last Updated:** October 2025
**Author:** Based on real-world migration experience

---

*This guide is a living document. Update it as you learn from each migration project.*
