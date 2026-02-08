# Architect & Builder Company Website

A professional, static website for an architectural and builder company built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 📱 Fully responsive design for mobile and desktop
- 🎨 Modern, clean UI with Tailwind CSS
- ⚡ Fast performance with Next.js 14 App Router
- 📝 Static pages: Home, About, Services, Projects, Gallery, Contact
- 💬 WhatsApp integration for contact form
- 🎯 SEO-friendly structure
- 🚀 Ready for free deployment on Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Configuration

### WhatsApp Integration

To enable WhatsApp contact form:

1. Open `app/contact/page.tsx`
2. Find line 12: `const whatsappNumber = "1234567890";`
3. Replace with your WhatsApp number (include country code, no + or spaces)
   - Example: For +1 234-567-8900, use: `1234567890`

### Update Contact Information

Update your business details in:
- `app/contact/page.tsx` - Contact page details
- `components/Footer.tsx` - Footer contact info

### Customize Content

All pages are in the `app/` directory:
- `app/page.tsx` - Home page
- `app/about/page.tsx` - About page
- `app/services/page.tsx` - Services page
- `app/projects/page.tsx` - Projects page
- `app/gallery/page.tsx` - Gallery page
- `app/contact/page.tsx` - Contact page

## Deployment (FREE)

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Sign up with GitHub
4. Click "New Project"
5. Import your repository
6. Click "Deploy"

Your site will be live in seconds with a free `.vercel.app` domain!

### Option 2: Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

## Project Structure

```
├── app/
│   ├── about/          # About page
│   ├── contact/        # Contact page with WhatsApp form
│   ├── gallery/        # Gallery page
│   ├── projects/       # Projects portfolio
│   ├── services/       # Services page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── Footer.tsx      # Footer component
│   └── Navbar.tsx      # Navigation component
├── public/             # Static assets (add images here)
└── tailwind.config.ts  # Tailwind configuration
```

## Adding Images

1. Add images to the `public/` folder
2. Reference in code: `<img src="/your-image.jpg" />`
3. Or use Next.js Image component:
   ```tsx
   import Image from 'next/image'
   <Image src="/your-image.jpg" width={500} height={300} alt="Description" />
   ```

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    // Modify these values
    500: '#0ea5e9',
    600: '#0284c7',
    // ...
  }
}
```

### Fonts

To change fonts, edit `app/layout.tsx`:

```typescript
import { Inter } from "next/font/google";
// Change to any Google Font
```

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** React Icons
- **Deployment:** Vercel/Netlify

## Support

For issues or questions:
1. Check the [Next.js Documentation](https://nextjs.org/docs)
2. Visit [Tailwind CSS Docs](https://tailwindcss.com/docs)
3. Review [Vercel Deployment Guide](https://vercel.com/docs)

## License

This project is open source and available for personal and commercial use.

---

**Next Steps:**
1. Run `npm install` to install dependencies
2. Update WhatsApp number in contact form
3. Customize content and colors
4. Add your project images
5. Deploy to Vercel for free!
