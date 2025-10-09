'use client';
import React, { MouseEvent, useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, spring } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const handleSmoothScroll = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const targetElement = document.getElementById(href.slice(1));
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [, setScrolled] = useState(false);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: spring,
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2 }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05
      }
    }
  };

  const mobileItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
<motion.nav
  initial="hidden"
  animate="visible"
  variants={navVariants}
  className="
    fixed top-4 left-1/2 w-[95%] max-w-6xl -translate-x-1/2 z-50
    transition-all duration-500
    bg-white/10 backdrop-blur-xl
    border border-white/20
    shadow-lg shadow-black/40
    rounded-2xl
  "
>      {/* Background Pattern */}
<div className="absolute inset-0 rounded-2xl opacity-50 pointer-events-none">
  <div
    className="w-full h-full rounded-2xl"
    style={{
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    //   backgroundImage: `
    //     linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
    //     linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
    //   `,
      backgroundSize: "20px 20px",
    }}
  />
</div>


      {/* Glowing Border */}
      {/* <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#fb7185]/20 via-[#caa56e]/20 to-[#60a5fa]/20 blur-sm -z-10" /> */}

      <div className="relative max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Enhanced Logo */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="#hero"
            className="relative group"
            onClick={(e) => handleSmoothScroll(e, '#hero')}
          >
            {/* Logo Background Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#fb7185]/20 to-[#caa56e]/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Main Logo */}
            <span className="relative text-2xl md:text-3xl font-extrabold tracking-widest bg-gradient-to-r from-[#fb7185] via-white to-[#caa56e] bg-clip-text text-transparent">
              DΛωσσd
            </span>

            {/* Animated Underline */}
            <motion.div
              className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#fb7185] to-[#caa56e]"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.ul
          className="hidden md:flex items-center space-x-8"
          variants={itemVariants}
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <motion.li
                key={item.href}
                variants={itemVariants}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={item.href}
                  className="relative group text-white text-sm md:text-base font-medium tracking-wide transition-colors duration-300"
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                >
                  {/* Active Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -inset-2  rounded-lg"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  {/* Text */}
                  <span className={`relative z-10 transition-colors duration-300 ${
                    isActive
                      ? 'text-white'
                      : 'text-white/80 hover:text-white group-hover:text-[#fb7185]'
                  }`}>
                    {item.label}
                  </span>

                  {/* Hover Line */}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#fb7185] to-[#caa56e]"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Floating Dots */}
                  <motion.div
                    className="absolute -top-2 left-1/2 w-1 h-1 bg-[#fb7185] rounded-full opacity-0"
                    animate={isActive ? { opacity: 1, scale: [0, 1.2, 1] } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Enhanced Mobile Menu Button */}
        <motion.div
          className="md:hidden relative"
          variants={itemVariants}
        >
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="relative p-2 text-white hover:text-[#fb7185] transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {/* Button Background */}
            <div className="absolute inset-0 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10" />

            {/* Icon */}
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? 'close' : 'menu'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative z-10"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden relative"
          >
            {/* Mobile Menu Background */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl rounded-b-2xl border-t border-white/10" />

            {/* Mobile Menu Content */}
            <div className="relative px-6 py-4 space-y-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <motion.div
                    key={item.href}
                    variants={mobileItemVariants}
                  >
                    <Link
                      href={item.href}
                      className={`relative block py-3 px-4 rounded-xl text-lg font-medium transition-all duration-300 ${
                        isActive
                          ? 'text-white bg-gradient-to-r from-[#fb7185]/20 to-[#caa56e]/20 border border-[#fb7185]/30'
                          : 'text-white/80 hover:text-white hover:bg-white/10 border border-transparent'
                      }`}
                      onClick={(e) => {
                        handleSmoothScroll(e, item.href);
                        setIsOpen(false);
                      }}
                    >
                      {/* Active Indicator */}
                      {isActive && (
                        <motion.div
                          className="absolute left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-[#fb7185] to-[#caa56e] rounded-full"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ delay: 0.1 }}
                        />
                      )}

                      {/* Text with Icon */}
                      <div className="flex items-center space-x-3">
                        <span>{item.label}</span>
                        {isActive && (
                          <motion.div
                            className="w-2 h-2 bg-[#fb7185] rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2 }}
                          />
                        )}
                      </div>
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile Menu Footer */}
              <motion.div
                className="pt-4 mt-4 border-t border-white/10 text-center"
                variants={mobileItemVariants}
              >
                <p className="text-white/60 text-sm">
                  © 2025 DΛωσσd
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${30 + i * 25}%`,
              top: `${20 + i * 30}%`,
            }}
            animate={{
              y: [-5, -15, -5],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>
    </motion.nav>
  );
}
