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
