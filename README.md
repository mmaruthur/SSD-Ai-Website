# Southern Skies Dermatology - Next.js Website

Modern, performant website for Southern Skies Dermatology built with Next.js 14+, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router with Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui + Radix UI
- **Forms**: React Hook Form + Zod validation
- **CMS**: Sanity (Headless CMS)
- **Animation**: Framer Motion
- **Sliders**: Swiper
- **Maps**: Google Maps API
- **Testing**: Jest + Playwright
- **Code Quality**: ESLint + Prettier + Husky

## 📦 Installation

```bash
# Install dependencies (already done)
npm install

# Copy environment variables
cp .env.local.example .env.local
# Then edit .env.local with your actual API keys

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🛠️ Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run type-check` - Run TypeScript compiler check
- `npm run test` - Run Jest unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:e2e` - Run Playwright E2E tests

## 📁 Project Structure

```
ssd-nextjs/
├── src/
│   ├── app/              # Next.js App Router pages
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Homepage
│   │   └── globals.css  # Global styles
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components (Button, Card, Form, Dialog)
│   │   └── ...          # Custom components (to be created)
│   └── lib/             # Utilities and helpers
│       └── utils.ts     # Utility functions
├── public/              # Static assets
├── tests/               # Test files
│   └── e2e/            # Playwright E2E tests
├── .husky/             # Git hooks
└── ...config files
```

## 🎨 Development Roadmap

### Phase 1: Core Pages ⏳
- [ ] Homepage with hero section
- [ ] Services overview page
- [ ] Provider directory page
- [ ] Individual provider pages
- [ ] Location pages with interactive maps
- [ ] Contact page

### Phase 2: Components 🧩
- [ ] Responsive navigation with mobile menu
- [ ] Provider profile cards with hover effects
- [ ] Service cards with animations (Framer Motion)
- [ ] Location map overlays (Google Maps)
- [ ] Contact form with validation
- [ ] Application form (replacing WordPress Gravity Forms)
- [ ] Video testimonial slider (Swiper)
- [ ] Testimonial carousel
- [ ] Footer with multiple columns

### Phase 3: Content & CMS 📝
- [ ] Set up Sanity Studio
- [ ] Create Sanity schemas (providers, services, locations)
- [ ] Migrate WordPress content to Sanity
- [ ] Implement dynamic content rendering
- [ ] Add SEO metadata with next-seo
- [ ] Implement structured data for medical practice
- [ ] Optimize images with Next.js Image component

### Phase 4: Forms & Integrations 🔌
- [ ] Contact form with React Hook Form + Zod
- [ ] Application form (multi-step)
- [ ] Form submission API routes
- [ ] Email notifications (SendGrid or Nodemailer)
- [ ] Google Maps integration
- [ ] Phone number click-to-call
- [ ] Analytics integration (Google Analytics)

### Phase 5: Testing & QA 🧪
- [ ] Write unit tests for components
- [ ] E2E tests for critical user flows
- [ ] Cross-browser testing
- [ ] Mobile responsiveness testing
- [ ] Performance optimization
- [ ] Accessibility audit (WCAG compliance)

### Phase 6: Deployment 🚀
- [ ] Deploy to Vercel staging
- [ ] Set up environment variables
- [ ] Configure custom domain
- [ ] Set up 301 redirects from WordPress URLs
- [ ] Test in production environment
- [ ] Go live!

## 🎨 Brand Colors

Configured in `src/app/globals.css`:
- **Primary Blue**: `#0b61c7` - Used for buttons, links, accents
- **Secondary Gold**: `#ffd700` - Used for highlights, hover states
- **Fonts**:
  - Headings: Futura PT Bold
  - Body: Roboto

## 🔧 Configuration Files

- `package.json` - Dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint rules
- `.prettierrc` - Prettier formatting rules
- `jest.config.js` - Jest testing configuration
- `playwright.config.ts` - Playwright E2E testing
- `components.json` - shadcn/ui configuration

## 🌐 Environment Variables

Create `.env.local` with these variables:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key

# Email (for forms)
SENDGRID_API_KEY=your_sendgrid_key
CONTACT_EMAIL=info@southernskiesdermatology.com

# Analytics (optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 📝 Migration from WordPress

This project replaces the existing WordPress site with these improvements:

| Feature | WordPress | Next.js |
|---------|-----------|---------|
| **Performance** | Server-rendered PHP | Static generation + SSR |
| **Forms** | Gravity Forms | React Hook Form |
| **CMS** | WordPress Admin | Sanity Studio |
| **Theme** | Divi + Custom CSS | Tailwind + Custom Components |
| **Animations** | CSS + jQuery | Framer Motion |
| **Developer Experience** | PHP + jQuery | TypeScript + React |
| **Build Process** | None | Optimized builds |

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to staging
vercel

# Deploy to production
vercel --prod
```

### Alternative Platforms
- **Netlify**: Connect Git repo for auto-deploy
- **AWS/Google Cloud**: Use Docker container
- **Custom Server**: Build and run with `npm run build && npm start`

## 🧪 Testing

```bash
# Run all unit tests
npm run test

# Run tests in watch mode (during development)
npm run test:watch

# Run E2E tests (make sure dev server is running)
npm run test:e2e
```

## 📚 Documentation & Resources

- [Next.js 14 Docs](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Sanity CMS](https://www.sanity.io/docs)
- [React Hook Form](https://react-hook-form.com)
- [Framer Motion](https://www.framer.com/motion)

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/new-component`
2. Make your changes
3. Run tests and linting: `npm run lint && npm run test`
4. Commit with clear message: `git commit -m "Add: New provider card component"`
5. Push and create PR

## 📄 License

Private - Southern Skies Dermatology © 2025
