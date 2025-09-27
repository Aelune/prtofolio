'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/ui/Navbar/navbar';
import Hero from '@/components/ui/Hero/hero';
import AboutSection from '@/components/ui/about/about';
import Work from '@/components/ui/work/work';
import Contact from '@/components/ui/Connect/connect';
import Background from '@/components/Background';
import WelcomeAnimation from '@/components/Text/welcome';

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
      {/* Always present behind everything */}
      <div className="fixed inset-0 z-0">
        <Background />
      </div>

      {/* Welcome Screen */}
      <WelcomeAnimation
        welcomeDone={welcomeDone}
        setWelcomeDone={setWelcomeDone}
      />

      {/* Main Content */}
      <AnimatePresence>
        {welcomeDone && (
          <motion.div
            className="relative z-10 h-screen scroll-smooth"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2
            }}
          >
            <Navbar />

            <section id="hero" className="h-screen">
              <Hero />
            </section>

            <section id="about" className="min-h-screen flex items-center justify-center">
              <AboutSection
                heading="Hi, I'm Dawood"
                description="I'm a frontend developer and designer passionate about minimalism, brutalism, and everything in between. I build intuitive web interfaces with love for aesthetics and usability."
                imageSrc="/Images/me.jpg"
              />
            </section>

            <section id="experience" className="min-h-screen flex items-center justify-center">
              <Work />
            </section>

            {/* Uncomment these sections as needed
            <section id="projects" className="min-h-screen flex items-center justify-center">
              Add your Projects component or content here
            </section>

            <section id="blogs" className="min-h-screen flex items-center justify-center">
              Add your Blogs component or content here
            </section>

            <section id="videos" className="min-h-screen flex items-center justify-center">
              Add your Videos component or content here
            </section>
            */}

            <section id="contact" className="min-h-screen flex items-center justify-center mt-20">
              <Contact />
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
