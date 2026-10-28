This repo generates the Protocol Guild [documentation](https://www.protocolguild.org/docs).

It was heavily refactored in May 2024 to properly document the Pilot and the new components/processes of PGv2, and again in July 2025 to condense the number of pages - if you've linked here in external posts, there may be broken links!

For members: the membership list now lives [here](./docs/01-membership.md).

Please note that we do not accept pull requests for minor corrections, such as typos. Instead, we encourage you to open an issue to report these items, and we will compile them into a single update. Thank you!

![image](https://github.com/user-attachments/assets/e4758b49-bfda-45f7-b1cc-7195b84ff8a4)

---

# Protocol Guild Website

This repository contains the source code for the Protocol Guild website, a React-based web application that showcases Protocol Guild's mission, members, and initiatives in supporting Ethereum core development.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation and Local Development

```bash
# Clone the repository
git clone https://github.com/johncpalmer/protocol-guild.git
cd protocol-guild

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173`. The app features hot reloading, so any changes you make to the source files will automatically update in the browser.

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
/
├── public/         # Static files served directly
├── posts/          # Markdown posts to be shown on the blog page
├── src/
│   ├── assets/     # Images, fonts, and other static assets
│   ├── components/ # Reusable UI components
│   ├── content/    # Content configuration files
│   ├── pages/      # Page components
│   ├── theme/      # Theme configuration
│   ├── App.tsx     # Main application component
│   └── index.tsx   # Application entry point
├── index.html      # HTML template
└── package.json    # Project dependencies and scripts
```

## 🔧 Making Changes

### Updating Content

All website content is managed through TypeScript configuration files in the `src/content` directory:

- `home.ts`: Home page content (mission statement, featured sections)
- `about.ts`: About page content (team members, history, funding stats)
- `pledge.ts`: Pledge page content (pledge information, ecosystem stats)
- `navigation.ts`: Navigation menu and footer content
- `members.ts`: Member list and profile information

To update content:

1. Navigate to the appropriate content file
2. Modify the text values within the TypeScript objects
3. Save the file - changes will hot-reload in development
4. Run `npm run build` to verify changes in production build

### Managing Members

To update the list of members displayed in the MemberFaces component:

1. Open `src/content/members.ts`
2. Add or modify member entries in the following format:
   ```typescript
   export const members = [
     {
       name: 'Full Name',
       username: '@handle',
       pfp: 'URL to profile picture',
       link: 'https://github.com/handle',
     },
     // ... more members
   ]
   ```

### Managing Donors and Partners

1. Add donor/partner logos:

   - Add regular logo to `src/assets/images/donors/[name].svg`
   - Add white version to `src/assets/images/donors/[name]-white.svg`
   - Image requirements:
     - SVG format
     - White version should be pure white (#FFFFFF)
     - Recommended size: height 40-60px, width proportional

2. Update `src/components/DonorSection.tsx`:

   ```typescript
   // Import new logos
   import newDonorSvg from '../assets/images/donors/new-donor.svg'
   import newDonorWhiteSvg from '../assets/images/donors/new-donor-white.svg'

   // Add to appropriate array
   const donors = [
     {
       name: 'New Donor',
       logo: newDonorSvg,
       logoWhite: newDonorWhiteSvg,
       url: 'https://donor-website.com',
     },
     // ... existing donors
   ]
   ```

   For pledge partners, add to the `partners` array instead of `donors`.

### Updating Styles

The website uses a combination of Tailwind CSS and CSS modules:

1. **Global Styles**

   - `src/App.css`: Global CSS rules
   - `src/theme/colors.ts`: Color variables (--primary, --secondary, etc.)
   - `tailwind.config.js`: Tailwind configuration and theme customization

2. **Component Styles**
   - Most styles use Tailwind's utility classes directly in components
   - Custom styles are in `src/components/*.module.css`
   - SVG icons should use camelCase attributes (strokeWidth instead of stroke-width)

### Adding New Pages

1. Create content file in `src/content/[page-name].ts`:

   ```typescript
   export const pageContent = {
     title: 'Page Title',
     sections: [
       /* ... */
     ],
   }
   ```

2. Create page component in `src/pages/[PageName].tsx`:

   ```typescript
   import { pageContent } from '../content/[page-name]'

   export default function PageName() {
     return (
       <div className="container mx-auto">
         <h1>{pageContent.title}</h1>
         {/* ... */}
       </div>
     )
   }
   ```

3. Add route in `App.tsx`:

   ```typescript
   import PageName from './pages/PageName';

   // In the router configuration:
   {
     path: '/page-url',
     element: <PageName />
   }
   ```

4. Add navigation link in `src/content/navigation.ts`

### Deployment

1. Build the project:

   ```bash
   npm run build
   ```

2. The production files will be in the `dist/` directory

3. Deploy using your preferred hosting service (e.g., Netlify, Vercel)

## 🛠 Technology Stack

- **Framework**: React 18
- **Language**: TypeScript 5
- **Build Tool**: Vite 4
- **Styling**:
  - Tailwind CSS 3
  - CSS Modules
- **Routing**: React Router 6
- **Development**:
  - ESLint for linting
  - Prettier for code formatting

## 🤝 Contributing

1. Create a new branch for your changes
2. Make your changes following the guidelines above
3. Test thoroughly in development (`npm run dev`)
4. Build and test production version (`npm run build && npm run preview`)
5. Submit a pull request

## 📝 License

All rights reserved © Protocol Guild
