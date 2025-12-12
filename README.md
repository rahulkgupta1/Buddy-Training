# PANHA Buddy Training Certification - Landing Page

A modern, conversion-focused landing page for the PANHA Buddy Training Certification program. Built with Next.js, React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Hero Section** - Full-screen immersive design with gradient text effects
- **Smooth Animations** - Scroll animations using Framer Motion
- **Responsive Design** - Mobile-first approach, works on all devices
- **Conversion Optimized** - Multiple CTAs, floating buttons, urgency messaging
- **Performance** - Optimized images, fast loading, SEO-friendly
- **Accessibility** - WCAG compliant with proper semantic HTML

## 📋 Sections

1. **Hero Section** - Eye-catching headline with trust badges and CTA
2. **Benefits Section** - 3-column card layout showcasing program benefits
3. **Program Overview** - Expandable accordion with 10 modules
4. **Who Is This For** - Target audience with checklist
5. **How It Works** - 5-step visual timeline
6. **Pricing Section** - Clear pricing with feature list
7. **Social Proof** - Testimonials, stats, and partner logos
8. **FAQ Section** - Expandable Q&A
9. **Final CTA** - Closing call-to-action with urgency
10. **Floating Elements** - Sticky CTA button and back-to-top button

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Language**: TypeScript

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Setup Steps

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open in browser**:
Navigate to `http://localhost:3000`

## 🎨 Color Palette

- **Primary Dark**: `#1e3a8a` (Deep Blue)
- **Primary**: `#2563eb` (Blue)
- **Light**: `#0ea5e9` (Cyan)
- **Accent**: `#f59e0b` (Amber/Orange)
- **Background**: White with subtle gradients

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Customization

### Update Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  panha: {
    dark: '#1e3a8a',
    primary: '#2563eb',
    light: '#0ea5e9',
    accent: '#f59e0b',
  },
}
```

### Update Content
Edit individual component files in `/components`:
- `HeroSection.tsx` - Main headline and CTA
- `PricingSection.tsx` - Pricing and features
- `SocialProof.tsx` - Testimonials and stats

### Update Fonts
Edit `app/layout.tsx` to change Google Fonts import

## 📊 Performance

- Optimized bundle size
- Lazy loading for images
- CSS-in-JS with Tailwind
- Server-side rendering with Next.js

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `.next` folder
3. Configure build settings

### Deploy to Other Platforms

```bash
npm run build
npm run start
```

## 📝 Environment Variables

Create `.env.local` for any environment-specific variables:
```
NEXT_PUBLIC_API_URL=your_api_url
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Clear Cache
```bash
rm -rf .next
npm run dev
```

### Module Not Found Errors
```bash
rm -rf node_modules
npm install
```

## 📄 License

This project is proprietary to PANHA.

## 📞 Support

For questions or issues, contact the development team.

## 🎯 Next Steps

1. Add enrollment form with payment integration
2. Integrate with email service for confirmations
3. Add analytics tracking
4. Set up SEO optimization
5. Add blog section for content marketing
6. Implement user authentication system

---

**Last Updated**: November 2024
