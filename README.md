# David Navarro - Senior AI Engineer Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS. This portfolio showcases my work as a Senior AI Engineer with a clean, professional design and smooth animations.

## 🚀 Live Demo

**Live Site:** [https://davidnavarrosaiz.github.io/davidnavarro.github.io](https://davidnavarrosaiz.github.io/davidnavarro.github.io)

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 14, React 18, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Powered by Framer Motion
- **Contact Form**: Functional contact form with email integration
- **Project Showcase**: Dynamic project filtering and detailed project pages
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Static Export**: Optimized for GitHub Pages deployment
- **Machine-Readable Exports**: Public JSON, Markdown, and `llms.txt` portfolio exports

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Frontend**: React 18
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email**: EmailJS for static-hosting-compatible contact forms
- **Deployment**: GitHub Pages with GitHub Actions

## 📁 Project Structure

```
davidnavarro.github.io/
├── components/                 # Reusable React components
│   ├── about/                 # About page components
│   │   ├── AboutAchievements.jsx
│   │   ├── AboutEducation.jsx
│   │   ├── AboutExperience.jsx
│   │   ├── AboutMeBio.jsx
│   │   ├── AboutSkills.jsx
│   │   └── ExperienceItem.jsx
│   ├── contact/               # Contact page components
│   │   ├── ContactDetails.jsx
│   │   └── ContactForm.jsx
│   ├── layout/                # Layout components
│   │   └── DefaultLayout.jsx
│   ├── projects/              # Project-related components
│   │   ├── CaseStudy.jsx
│   │   ├── ProjectsFilter.jsx
│   │   ├── ProjectsGrid.jsx
│   │   ├── ProjectSingle.jsx
│   │   └── RelatedProjects.jsx
│   ├── reusable/              # Reusable UI components
│   │   ├── Button.jsx
│   │   └── FormInput.jsx
│   ├── shared/                # Shared components
│   │   ├── AppBio.jsx
│   │   ├── AppFooter.jsx
│   │   ├── AppFooterCopyright.jsx
│   │   ├── AppHeader.jsx
│   │   └── AppHero.jsx
│   ├── HireMeModal.jsx
│   └── PagesMetaHead.jsx
├── data/                      # Static data files
│   ├── aboutMeData.js         # Personal information
│   ├── projectsData.js        # Project portfolio data
├── hooks/                     # Custom React hooks
│   ├── useScrollToTop.jsx     # Scroll to top functionality
│   └── useThemeSwitcher.jsx   # Dark/light theme toggle
├── pages/                     # Next.js pages
│   ├── api/                   # Optional server API handlers (not used by the static export)
│   │   ├── hello.js
│   │   └── send-email.js      # Optional server-side email handler
│   ├── projects/              # Project pages
│   │   ├── [id].jsx          # Dynamic project page
│   │   └── index.jsx         # Projects listing page
│   ├── _app.jsx              # App wrapper
│   ├── about.jsx             # About page
│   ├── contact.jsx           # Contact page
│   └── index.jsx             # Home page
├── public/                    # Static assets
│   ├── files/                # Downloadable files (CV)
│   ├── fonts/                # Custom fonts
│   └── images/               # Images and icons
├── styles/                    # Global styles
│   ├── components.css        # Component-specific styles
│   └── globals.css           # Global styles
├── .github/                   # GitHub configuration
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment
├── next.config.js            # Next.js configuration
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
└── postcss.config.js         # PostCSS configuration
```

## 🧩 Component Architecture

### Core Components

- **`DefaultLayout.jsx`**: Main layout wrapper with header, footer, and navigation
- **`PagesMetaHead.jsx`**: SEO meta tags and page titles
- **`AppHeader.jsx`**: Navigation header with mobile menu
- **`AppFooter.jsx`**: Site footer with links and social media

### Page-Specific Components

#### Home Page (`index.jsx`)
- **`AppHero.jsx`**: Hero section with introduction
- **`AppBio.jsx`**: Personal bio and summary

#### About Page (`about.jsx`)
- **`AboutMeBio.jsx`**: Detailed personal information
- **`AboutSkills.jsx`**: Technical skills showcase
- **`AboutEducation.jsx`**: Educational background
- **`AboutAchievements.jsx`**: Speaking, research, and project achievements

#### Experience Page (`experience.jsx`)
- **`AboutExperience.jsx`**: Employment timeline with filters
- **`ExperienceItem.jsx`**: Individual experience entries

#### Projects Page (`projects/index.jsx`)
- **`ProjectsFilter.jsx`**: Category and search filtering
- **`ProjectsGrid.jsx`**: Project cards grid layout
- **`ProjectSingle.jsx`**: Individual project details
- **`RelatedProjects.jsx`**: Related projects suggestions

#### Contact Page (`contact.jsx`)
- **`ContactForm.jsx`**: Contact form with validation
- **`ContactDetails.jsx`**: Contact information display

### Reusable Components

- **`Button.jsx`**: Customizable button component
- **`FormInput.jsx`**: Form input with validation
- **`HireMeModal.jsx`**: Modal for hire me functionality

## 🎨 Styling & Theming

- **Tailwind CSS**: Utility-first CSS framework
- **Custom Components**: Component-specific styles in `components.css`
- **Dark Mode**: Theme switching with `useThemeSwitcher` hook
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Custom Fonts**: GeneralSans font family for modern typography

## 🚀 Deployment Process

### GitHub Pages with GitHub Actions

The project is configured for automatic deployment to GitHub Pages using GitHub Actions:

1. **Static Export Configuration** (`next.config.js`):
   ```javascript
   module.exports = {
     reactStrictMode: true,
     output: 'export',           // Enables static export
     trailingSlash: true,        // Adds trailing slashes to URLs
     images: {
       unoptimized: true         // Disables Next.js image optimization
     }
   }
   ```

2. **GitHub Actions Workflow** (`.github/workflows/deploy.yml`):
   - Triggers on push to `main` branch
   - Sets up Node.js environment
   - Installs dependencies with caching
   - Builds the Next.js application
   - Exports static files to `out` directory
   - Deploys to GitHub Pages

3. **Deployment Steps**:
   ```bash
   # 1. Make changes to your code
   git add .
   git commit -m "Update portfolio"
   git push origin main
   
   # 2. GitHub Actions automatically:
   #    - Builds the Next.js app
   #    - Exports static files
   #    - Deploys to GitHub Pages
   ```

The GitHub Pages build uses the repository base path `/davidnavarro.github.io`
and copies the committed machine-readable exports from `public/` into the
static output: `portfolio.json`, `portfolio.md`, and `llms.txt`.

### Manual Deployment

If you prefer manual deployment:

```bash
# Install dependencies
npm install

# Build the application
npm run build

# The static files will be in the 'out' directory
# Upload the contents of 'out' to your hosting provider
```

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/DavidNavarroSaiz/davidnavarro.github.io.git

# Navigate to project directory
cd davidnavarro.github.io

# Install dependencies
npm install

# Start development server
npm run dev
```

### Available Scripts

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run start` - Preview the static production export from `out/` (run `npm run build` first)
- `npm run lint` - Run ESLint

## 📧 Contact Form Setup

The contact form uses EmailJS so it works with the static GitHub Pages export.
See [EMAILJS_SETUP_INSTRUCTIONS.md](EMAILJS_SETUP_INSTRUCTIONS.md) for the
service and template setup. Local builds need these public environment variables
in `.env.local`; the GitHub Actions workflow provides them from repository
secrets:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🎯 Customization

### Personal Information

Update the following files with your information:

- `data/aboutMeData.js` - Personal bio and information
- `data/projectsData.js` - Your projects and portfolio
- `public/files/CV_DavidNavarro_Senior_AI_Engineer.pdf` - Your CV

### Styling

- Modify `tailwind.config.js` for custom colors and themes
- Update `styles/globals.css` for global styles
- Customize component styles in `styles/components.css`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/davidnavarro/davidnavarro.github.io/issues).

## 📞 Contact

**David Navarro** - Senior AI Engineer
- Portfolio: [https://davidnavarrosaiz.github.io/davidnavarro.github.io](https://davidnavarrosaiz.github.io/davidnavarro.github.io)
- GitHub: [@DavidNavarroSaiz](https://github.com/DavidNavarroSaiz)

---

⭐ If you found this project helpful, please give it a star!
