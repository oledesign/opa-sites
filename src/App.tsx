import React from 'react';
import HeroBackground from './components/hero/HeroBackground';
import HeroContent from './components/hero/HeroContent';
import PropertiesGrid from './components/properties/PropertiesGrid';
import ContactSection from './components/contact/ContactSection';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-screen">
        <HeroBackground />
        <HeroContent />
      </div>
      <PropertiesGrid />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;