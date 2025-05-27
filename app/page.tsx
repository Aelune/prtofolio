'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Navbar from '@/components/ui/Navbar/navbar';
import Hero from '@/components/ui/Hero/hero';
import AboutSection from '@/components/ui/about/about';
import Work from '@/components/ui/work/work';
import Contact from '@/components/ui/Connect/connect';
export default function Home() {
  const [welcomeDone, setWelcomeDone] = useState(false);

  // Prevent scrolling until welcome is done
  useEffect(() => {
    if (!welcomeDone) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [welcomeDone]);

  return (
    <>
      {/* Welcome Screen */}
      <AnimatePresence>
        {!welcomeDone && (
          <motion.div
            key="welcome"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white text-4xl font-bold"
            onAnimationComplete={() => {
              // We don't get onAnimationComplete for initial/animate, so use setTimeout below
            }}
          >
            DΛωσσd PORTFOLIO
            {/* We'll use a timer to hide this */}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Timer to hide welcome screen after 3 seconds */}
      { !welcomeDone && setTimeout(() => setWelcomeDone(true), 3000) }

      {/* Main Content */}
      {welcomeDone && (
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
          <Navbar />
          <section className="h-screen snap-start">
            <Hero />
          </section>
          <section className="min-h-screen mt-10 snap-start flex items-center justify-center" key="about">
            <AboutSection
              heading="Hi, I'm Dawood"
              description="I'm a frontend developer and designer passionate about minimalism, brutalism, and everything in between. I build intuitive web interfaces with love for aesthetics and usability."
              imageSrc="/Images/hero1.jpg"
              subImageSrc="/Images/sisypus.jpg"
            />
          </section>
          <section className="min-h-screen snap-start flex items-center justify-center">
            <Work />
          </section>
          <section className="min-h-screen snap-start flex items-center w-full justify-center">
            <Contact />
          </section>
        </div>
      )}
    </>
  );
}
