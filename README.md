# Nexus Shift - Digital Transformation Website

A modern, responsive website for Nexus Shift, built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Multi-page Architecture**: Home, About, Services, Case Studies, Our Approach, Contact
- **Dark/Light Mode**: Complete theme switching with next-themes
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Component-based**: Reusable, scalable component architecture
- **TypeScript**: Full type safety throughout the application
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Performance**: Optimized images and code splitting

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes

## 🎨 Component Architecture & Style Guidelines

### Component Structure

Our components follow a hierarchical structure for maximum reusability and maintainability:

\`\`\`
components/
├── ui/                    # Base UI components (shadcn/ui)
│   ├── button.tsx        # Reusable button component
│   ├── card.tsx          # Card layouts
│   └── ...               # Other primitive components
├── sections/             # Page-specific sections
│   ├── hero-section.tsx  # Homepage hero
│   ├── services-section.tsx
│   └── ...               # Other content sections
└── layout/               # Layout components
    ├── header-nav.tsx    # Navigation header
    └── footer.tsx        # Site footer
\`\`\`

### Design System

#### Color Palette
- **Primary**: `#0B1F3A` (Midnight Navy) - Main brand color
- **Secondary**: `#00C2CB` (Electric Teal) - Accent and highlights  
- **Accent**: `#A45EE5` (Neon Purple) - Call-to-action elements
- **Neutral**: Tailwind gray scale for text and backgrounds

#### Typography Scale
- **Headings**: `font-bold` with responsive sizing (`text-2xl md:text-4xl`)
- **Body**: `text-base` with `leading-relaxed` for readability
- **Captions**: `text-sm text-muted-foreground`

#### Spacing System
- Consistent use of Tailwind's spacing scale (4, 8, 12, 16, 24, 32px)
- Section padding: `py-16 md:py-24` for vertical rhythm
- Container max-width: `max-w-7xl mx-auto px-4`

### Component Guidelines

1. **Props Interface**: Always define TypeScript interfaces for component props
2. **Responsive Design**: Mobile-first approach with `md:` and `lg:` breakpoints
3. **Accessibility**: Include ARIA labels, semantic HTML, and keyboard navigation
4. **Performance**: Use `next/image` for all images, lazy loading by default

### File Naming Conventions
- Components: `kebab-case.tsx` (e.g., `hero-section.tsx`)
- Pages: `page.tsx` in respective folders
- Types: `index.ts` in `types/` directory
- Utilities: `kebab-case.ts` in `lib/` directory

## 📸 Visual Overview

### Homepage Layout
\`\`\`
┌─────────────────────────────────────┐
│ Header Navigation                   │
├─────────────────────────────────────┤
│ Hero Section                        │
│ - Main headline & CTA               │
│ - Background animation              │
├─────────────────────────────────────┤
│ Services Grid                       │
│ - 3-column responsive layout        │
├─────────────────────────────────────┤
│ About Section                       │
│ - Company overview                  │
├─────────────────────────────────────┤
│ Case Studies                        │
│ - Project showcases                 │
├─────────────────────────────────────┤
│ Testimonials                        │
│ - Client feedback carousel          │
├─────────────────────────────────────┤
│ Footer                              │
│ - Links, contact, social            │
└─────────────────────────────────────┘
\`\`\`

### Portal Dashboard Layout
\`\`\`
┌─────────────────────────────────────┐
│ Dashboard Header                    │
├─────────────────────────────────────┤
│ Stats Cards Row                     │
│ [Total] [Active] [Pending]          │
├─────────────────────────────────────┤
│ Clients Table                       │
│ - Sortable columns                  │
│ - Action buttons                    │
│ - Pagination                        │
└─────────────────────────────────────┘
\`\`\`

## 📁 Project Structure

\`\`\`
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── case-studies/      # Case studies page
│   ├── contact/           # Contact page
│   ├── our-approach/      # Our approach page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── sections/         # Page sections
│   ├── ui/               # UI components (shadcn/ui)
│   └── theme-provider.tsx
├── types/                # TypeScript type definitions
├── public/               # Static assets
└── lib/                  # Utility functions
\`\`\`

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm 8.0.0 or higher

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/your-username/nexus-shift-website.git
cd nexus-shift-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 🎨 Customization

### Brand Colors

The website uses a custom color palette defined in `tailwind.config.ts`:

- **Primary**: Midnight Navy (#0B1F3A)
- **Secondary**: Electric Teal (#00C2CB)
- **Accent**: Neon Purple (#A45EE5)

### Adding New Pages

1. Create a new folder in the `app/` directory
2. Add a `page.tsx` file with your page component
3. Update navigation in `components/layout/header-nav.tsx`
4. Add footer links in `components/layout/footer.tsx`

### Component Development

All components are built with:
- TypeScript for type safety
- Tailwind CSS for styling
- Radix UI for accessibility
- Responsive design principles

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Manual Build

\`\`\`bash
npm run build
npm run start
\`\`\`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

\`\`\`env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

### SEO Configuration

Update meta tags in `app/layout.tsx` and individual page files.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is proprietary and confidential. All rights reserved by Nexus Shift.

## 📞 Support

For support, email hello@nexusshift.co.uk or create an issue in this repository.

---

Built with ❤️ by the Nexus Shift team
