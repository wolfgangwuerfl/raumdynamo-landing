
import React, { useEffect } from 'react';
import Navbar from '@/components/Layout/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Spaces from '@/components/Spaces';
import Contact from '@/components/Contact';
import Footer from '@/components/Layout/Footer';

const Index = () => {
  useEffect(() => {
    // Smooth scroll animation for navigation links
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            window.scrollTo({
              top: element.offsetTop - 80,
              behavior: 'smooth',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Spaces />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
