# Chris Henry - Neural Rewiring Landing Page

A modern, mobile-first MVP landing page for Chris Henry's Neural Rewiring process, built with Next.js, TailwindCSS, and Framer Motion.

## 🚀 Features

- **Mobile-First Design**: Optimized for mobile devices with responsive layouts
- **High Conversion**: Strategic placement of CTAs and lead capture forms
- **Modern UI**: Clean design with smooth animations and professional styling
- **SEO Optimized**: Complete meta tags, structured data, and accessibility features
- **Marketing Ready**: Integration points for analytics and tracking pixels
- **Performance Optimized**: Fast loading with optimized components

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Main layout with SEO and tracking
│   ├── page.tsx            # Homepage with all sections
│   └── globals.css         # Global styles and CSS variables
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── Navigation.tsx      # Sticky navigation with mobile menu
│   ├── HeroSection.tsx     # Hero with video background
│   ├── SocialProofSection.tsx # Testimonials and logos
│   ├── ProblemProcessProofSection.tsx # 3-step process explanation
│   ├── ProductOfferSection.tsx # Course details and pricing
│   ├── LeadCaptureSection.tsx # Contact form and lead magnet
│   ├── AboutChrisSection.tsx # Bio and credentials
│   ├── FAQSection.tsx      # FAQ accordion
│   ├── FinalCTASection.tsx # Final CTA with scarcity
│   └── Footer.tsx          # Footer with links and contact
└── lib/
    └── utils.ts            # Utility functions
```

## 🎨 Design Guidelines

- **Color Scheme**: Black background with blue accent colors (as per user preferences)
- **Typography**: Inter font family (SF Pro fallback for premium feel)
- **Animations**: Subtle Framer Motion animations for engagement
- **Mobile-First**: Responsive design optimized for mobile devices

## 📝 Content Placeholders

The following content needs to be replaced with actual assets:

### Images & Videos
- `/public/hero-video.mp4` - Hero section background video
- `/public/hero-video.webm` - WebM fallback for hero video
- `/public/og-image.jpg` - Open Graph image (1200x630px)
- `/public/chris-henry-profile.jpg` - Chris Henry professional headshot
- `/public/testimonials/` - Testimonial photos
- `/public/logos/` - Company logos for social proof

### Text Content
- Company names in social proof section
- Actual testimonial content and names
- Real contact information and social media links
- Course pricing and specific program details

## 🔧 Marketing Integration Setup

### Analytics & Tracking
1. **Google Analytics 4**
   - Replace `GA_MEASUREMENT_ID` in `layout.tsx`
   - Set up conversion tracking for form submissions

2. **Meta Pixel (Facebook)**
   - Replace `YOUR_PIXEL_ID` in `layout.tsx`
   - Configure custom events for lead tracking

3. **LinkedIn Pixel**
   - Replace `YOUR_PARTNER_ID` in `layout.tsx`
   - Set up conversion tracking

### Form Integration
The contact form in `LeadCaptureSection.tsx` is ready for integration with:
- **HubSpot**: Use HubSpot Forms API
- **ActiveCampaign**: Use ActiveCampaign API
- **Mailchimp**: Use Mailchimp API
- **Custom Backend**: Modify form submission handler

### CRM Integration Points
- Form submissions trigger CRM contact creation
- Lead scoring based on form data
- Automated email sequences
- Follow-up task creation

## 🚀 Deployment

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Production Build
```bash
# Build for production
npm run build

# Start production server
npm start
```

### Deployment Options
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Custom VPS**

## 📊 Performance Optimization

- **Image Optimization**: Use Next.js Image component
- **Video Optimization**: Compress hero video for fast loading
- **Code Splitting**: Automatic with Next.js
- **Caching**: Configure appropriate cache headers
- **CDN**: Use a CDN for static assets

## 🔒 Security & Compliance

### GDPR Compliance
- Privacy policy linked in footer
- Cookie consent (add if required)
- Data processing transparency
- Right to deletion implementation

### Form Security
- CSRF protection
- Input validation
- Rate limiting
- Spam protection (reCAPTCHA if needed)

## 📈 Conversion Optimization

### A/B Testing Setup
- Test different headlines
- Test CTA button colors and text
- Test form fields and placement
- Test pricing presentation

### Analytics Events
Track key conversion events:
- Hero CTA clicks
- Form submissions
- Video plays
- Scroll depth
- Time on page

## 🛠️ Customization

### Brand Colors
Update colors in `tailwind.config.ts`:
```typescript
colors: {
  primary: "#your-brand-color",
  // ... other colors
}
```

### Fonts
Update font in `layout.tsx`:
```typescript
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
```

### Content Updates
- All text content is in component files
- Images are referenced in components
- Easy to update without touching layout code

## 📞 Support

For technical support or customization requests, contact the development team.

## 📄 License

This project is proprietary and confidential. All rights reserved.

---

**Built with ❤️ for peak performance conversion**