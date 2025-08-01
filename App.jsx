import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Components
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import PricingCalculator from './components/PricingCalculator';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');
  const [isDark, setIsDark] = useState(false);

  // Handle theme toggle
  const handleThemeToggle = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  // Handle loading completion
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Page change handler
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Save theme preference
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroSection />
            <FeaturesSection />
            <PricingCalculator />
            <BlogSection />
          </>
        );
      case 'features':
        return <FeaturesSection />;
      case 'pricing':
        return <PricingCalculator />;
      case 'blog':
        return <BlogSection />;
      case 'contact':
        return (
          <section className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-foreground mb-4">Contact Us</h1>
              <p className="text-muted-foreground">Get in touch with our team</p>
            </div>
          </section>
        );
      default:
        return (
          <>
            <HeroSection />
            <FeaturesSection />
            <PricingCalculator />
            <BlogSection />
          </>
        );
    }
  };

  return (
    <div className="App">
      <CustomCursor />
      
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          className="page-enter"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Navigation
            currentPage={currentPage}
            onPageChange={handlePageChange}
            isDark={isDark}
            onThemeToggle={handleThemeToggle}
          />
          
          <main className="pt-20">
            {renderPage()}
          </main>
          
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;

