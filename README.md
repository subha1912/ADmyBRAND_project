# AI SaaS Platform Landing Page

This project is a fully responsive, modern SaaS-style landing page built with React, Vite, Tailwind CSS, and Framer Motion. It features AI-generated content, a custom cursor, animations, and various interactive components.

## Features

- **Custom Cursor:** A unique elastic circle cursor with a red control point, visible and functional on all interactions.
- **Theme Toggle:** Light red + white theme with support for dark/light mode toggle at the top-right corner.
- **Animations & Loading Effects:** Smooth page loading animation (bouncing vertical lines) and page entry transitions using Framer Motion.
- **Hero Section:** Center-aligned typography with AI-relevant illustrations and minimalistic visuals.
- **Pricing Calculator:** A live, interactive component to calculate pricing based on user input and plan selection.
- **Blog/Article Section:** Each article includes relevant AI-generated thumbnails and detailed content.
- **Call-to-Action Buttons:** "Start Free Trial" and "Watch Demo" buttons prominently displayed.
- **Responsive Design:** Fully responsive across all devices, ensuring a consistent user experience.
- **Professional Footer:** Minimal, clean, and consistent footer design across all pages.
- **AI-Generated Assets:** All images and media content are AI-generated and visually aligned with the site's color and theme.

## Technologies Used

- **React.js:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool for modern web projects.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **Framer Motion:** A production-ready motion library for React.
- **Lucide React:** A collection of beautiful open-source icons.

## Setup and Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or higher)
- pnpm (or npm/yarn)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd saas-landing-page
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    # or npm install
    # or yarn install
    ```

3.  **Run the development server:**
    ```bash
    pnpm run dev
    # or npm run dev
    # or yarn dev
    ```

    The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Project Structure

```
saas-landing-page/
├── public/
├── src/
│   ├── assets/             # AI-generated images and other static assets
│   ├── components/         # Reusable React components (e.g., Navigation, Footer, HeroSection)
│   │   ├── CustomCursor.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── PricingCalculator.jsx
│   │   ├── BlogSection.jsx
│   │   └── FeaturesSection.jsx
│   ├── App.css             # Global styles and Tailwind CSS imports
│   ├── App.jsx             # Main application component and routing
│   ├── index.css           # Base styles
│   └── main.jsx            # Entry point for React application
├── index.html              # Main HTML file
├── package.json            # Project metadata and dependencies
├── vite.config.js          # Vite configuration
└── ... (other config files)
```

## Deployment

This project is optimized for deployment on platforms like Vercel. To build the project for production:

```bash
pnpm run build
# or npm run build
# or yarn build
```

The optimized static assets will be generated in the `dist` directory.

