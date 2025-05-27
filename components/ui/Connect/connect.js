'use client';
import React, { useState, useRef } from 'react';
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion, useInView } from 'framer-motion';

const Contact = () => {
  const [activeCard, setActiveCard] = useState(null);
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, threshold: 0.2 });

  const contactLinks = [
    {
      id: 'github',
      icon: FaGithub,
      label: 'dwukn',
      href: 'https://github.com/dwukn',
      color: 'from-gray-600 to-gray-800',
      hoverColor: 'from-gray-500 to-gray-700',
      description: 'Code Repository'
    },
    {
      id: 'linkedin',
      icon: FaLinkedin,
      label: 'dwukn',
      href: 'https://linkedin.com/in/dwukn',
      color: 'from-blue-600 to-blue-800',
      hoverColor: 'from-blue-500 to-blue-700',
      description: 'Professional Network'
    },
    {
      id: 'email',
      icon: MdEmail,
      label: 'dawood220a@gmail.com',
      href: 'mailto:dawood220a@gmail.com',
      color: 'from-green-600 to-green-800',
      hoverColor: 'from-green-500 to-green-700',
      description: 'Direct Message'
    },
    {
      id: 'youtube',
      icon: FaYoutube,
      label: 'blunebear',
      href: 'https://youtube.com/@blunebear',
      color: 'from-red-500 to-red-700',
      hoverColor: 'from-red-400 to-red-600',
      description: 'Video Content'
    }
  ];

  return (
    <section
      ref={containerRef}
      className="relative w-full max-h-screen flex flex-col justify-center items-center text-white px-4 py-12 sm:px-6 md:px-12 lg:px-16 overflow-y-auto"
    >
      <div className="relative z-20 w-full max-w-[120rem] flex flex-col items-center">

        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-14 px-2"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-inukit mb-4 tracking-wide leading-tight">
            <span className="bg-gradient-to-r from-[#caa56e] via-yellow-400 to-[#caa56e] bg-clip-text text-transparent animate-pulse">
              Let&apos;s
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-[#caa56e] to-white bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-transparent via-[#caa56e] to-transparent mx-auto mb-6 sm:mb-8 rounded-full shadow-lg shadow-[#caa56e]/50" />
          <p className="text-base font-WDXL sm:text-lg md:text-lg text-gray-300 max-w-xl mx-auto leading-relaxed">
            Ready to collaborate on something <span className="text-[#caa56e] font-semibold">extraordinary</span>? Let&apos;s build the future together.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-5xl px-4 mb-10"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {contactLinks.map((contact) => {
            const IconComponent = contact.icon;
            return (
              <motion.a
                key={contact.id}
                href={contact.href}
                target={contact.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                onMouseEnter={() => setActiveCard(contact.id)}
                onMouseLeave={() => setActiveCard(null)}
                className="group relative"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <div className="relative p-6 sm:p-8 rounded-2xl transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2">
                  <div className={`absolute inset-0 bg-gradient-to-br ${activeCard === contact.id ? contact.hoverColor : contact.color} rounded-2xl opacity-20 group-hover:opacity-40 transition-all duration-500`} />
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-2xl border border-[#caa56e]/20 group-hover:border-[#caa56e]/50 transition-all duration-500" />
                  <div className={`absolute inset-0 bg-gradient-to-br ${contact.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`} />

                  <div className="relative z-10 flex items-center gap-4 sm:gap-6">
                    <div className="relative">
                      <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${contact.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="text-xl sm:text-2xl text-white" />
                      </div>
                      <div className={`absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-50 blur-lg transition-all duration-500`} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-sm sm:text-base font-semibold font-gloock text-[#caa56e] mb-1 group-hover:text-yellow-400 transition-colors">
                        {contact.description}
                      </h3>
                      <p className="text-sm sm:text-lg font-medium text-white font-roboto group-hover:text-gray-100 transition-colors break-all">
                        {contact.label}
                      </p>
                    </div>

                    {/* <div className="text-[#caa56e] group-hover:text-yellow-400 group-hover:translate-x-2 transition-all duration-300">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>f
                    </div> */}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        {/* <motion.div
          className="relative group mb-10"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button className="relative px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-[#caa56e] to-yellow-600 text-black font-bold text-base sm:text-xl rounded-full transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-[#caa56e]/50">
            <span className="relative z-10">Start a Conversation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-[#caa56e] rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
          </button>
          <div className="absolute inset-0 border-2 border-[#caa56e] rounded-full opacity-0 group-hover:opacity-100 animate-ping" />
        </motion.div> */}
          {/* Quote */}
        <motion.div
          className="text-center px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-sm sm:text-base italic font-WDXL text-gray-400 max-w-xl mx-auto">
            &quot;Great things are never done by one person.
            <span className="text-[#caa56e]"> They&apos;re done by a team of people.</span>&quot;
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
