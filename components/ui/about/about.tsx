'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  sectionVariants,
  textVariants,
  tagVariants,
  imageVariants,
} from '@/components/variants/aboutSectionVariants';

type AboutSectionProps = {
  heading: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  tags?: string[];
};

export default function AboutSection({
  heading,
  description,
  imageSrc,
  imageAlt = 'Profile photo',
  tags = ['Designer', 'Developer', 'UI Craftsman'],
}: AboutSectionProps) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-full min-h-screen py-12 px-4 text-white overflow-hidden
                 xs:py-16 xs:px-6
                 sm:py-20 sm:px-8
                 md:py-24 md:px-12
                 lg:px-20
                 xl:px-32
                 2xl:px-40"
    >
      {/* Enhanced Grid Integration Effects */}
      <div className="absolute inset-0 opacity-30 pointer-events-none z-10">
        {/* Grid intersection highlights */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#fb7185] rounded-full blur-sm animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#caa56e] rounded-full blur-sm animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-2.5 h-2.5 bg-[#60a5fa] rounded-full blur-sm animate-pulse delay-2000" />
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-[#34d399] rounded-full blur-sm animate-pulse delay-500" />

        {/* Grid line highlights */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#fb7185]/20 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#caa56e]/15 to-transparent" />
        <div className="absolute left-0 top-1/3 w-full h-px bg-gradient-to-r from-transparent via-[#60a5fa]/15 to-transparent" />
        <div className="absolute left-0 bottom-1/4 w-full h-px bg-gradient-to-r from-transparent via-[#34d399]/10 to-transparent" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [-20, -40, -20],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
            }}
          />
        ))}
      </div>

      {/* Enhanced Ambient Glows */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-15">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-[#fb7185]/30 via-[#fb7185]/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-[#caa56e]/25 via-[#caa56e]/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-radial from-[#60a5fa]/20 to-transparent rounded-full blur-2xl"
          animate={{
            rotate: 360,
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            rotate: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </div>

      {/* Content Wrapper */}
      <div className="relative z-30 flex flex-col mt-30 items-center justify-center gap-8
                      xs:gap-12 xs:h-[80%]
                      sm:gap-16
                      md:flex-row md:justify-between md:items-center
                      lg:gap-20
                      xl:gap-24">

        {/* Enhanced Text Content */}
        <motion.div
          className="w-full max-w-md h-[50%] relative overflow-hidden
                      xs:max-w-lg
                      sm:max-w-xl
                      md:flex-1 md:max-w-none"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          {/* Glass morphism background */}
          <div className="absolute inset-0 backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-transparent border border-white/20 rounded-2xl shadow-2xl" />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-30"
               style={{
                 backgroundImage: `
                   linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                   linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                 `,
                 backgroundSize: '20px 20px'
               }}
          />

          {/* Content */}
          <div className="relative p-8 z-10">
            <motion.h2
              variants={textVariants}
              className="relative text-xl font-jacques font-bold bg-gradient-to-r from-[#fb7185] via-[#fda4af] to-[#fecaca] bg-clip-text text-transparent tracking-wide leading-tight drop-shadow-sm
                         xs:text-2xl
                         sm:text-3xl sm:leading-snug
                         md:text-3xl
                         lg:text-4xl
                         xl:text-5xl xl:leading-tight"
            >
              {heading}
            </motion.h2>

            {/* Enhanced Divider */}
            <motion.div
              className="flex items-center my-6"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <div className="h-px bg-gradient-to-r from-transparent via-[#fb7185] to-[#caa56e] flex-1"></div>
              <motion.div
                className="mx-4 text-[#fb7185] text-xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                ❦
              </motion.div>
              <div className="h-px bg-gradient-to-r from-[#caa56e] via-[#fb7185] to-transparent flex-1"></div>
            </motion.div>

            {/* Enhanced Drop Cap Paragraph */}
            <motion.div variants={textVariants}>
              <motion.span
                className="float-left text-5xl leading-none font-gloock mr-3 mt-1 bg-gradient-to-br from-[#fb7185] to-[#caa56e] bg-clip-text text-transparent drop-shadow-lg
                           xs:text-6xl
                           sm:text-7xl"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                {description.charAt(0)}
              </motion.span>
              <p className="text-gray-100 text-sm leading-relaxed font-light font-WDXL
                            xs:text-base xs:leading-relaxed
                            sm:text-base
                            md:text-lg">
                {description.slice(1)}
              </p>
            </motion.div>

            {/* Enhanced Tags */}
            <div className="mt-8 flex flex-wrap gap-3">
              {tags.map((tag, i) => (
                <motion.span
                  key={tag}
                  variants={tagVariants(i)}
                  className="relative text-sm px-4 py-2 font-Gloock rounded-full text-white
                             overflow-hidden cursor-pointer group
                             xs:text-sm xs:px-4
                             sm:px-4 sm:py-2"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#fb7185]/30 to-[#caa56e]/30 rounded-full" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#60a5fa]/20 to-[#34d399]/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 border border-white/30 rounded-full" />

                  {/* Tag content */}
                  <span className="relative z-10">{tag}</span>

                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Image Panel */}
        <motion.div
          variants={imageVariants}
          className="relative w-64 h-64 rounded-2xl overflow-hidden z-10
                     xs:w-72 xs:h-72
                     sm:w-80 sm:h-80
                     md:w-72 md:h-72
                     lg:w-80 lg:h-80
                     xl:w-96 xl:h-96"
          whileHover={{ rotate: 1, scale: 1.03, y: -5 }}
          transition={{ duration: 0.4 }}
        >
          {/* Animated background rings */}
          <motion.div
            className="absolute -inset-8 rounded-2xl opacity-60 z-10"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full rounded-2xl border-2 border-dashed border-[#fb7185]/30 z-10" />
          </motion.div>

          <motion.div
            className="absolute -inset-6 rounded-2xl opacity-40 z-10"
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-full h-full rounded-2xl border border-[#caa56e]/40" />
          </motion.div>

          {/* Glow effect */}
          {/* <div className="absolute -inset-4 bg-gradient-to-br from-[#fb7185]/30 via-[#fda4af]/20 to-[#caa56e]/30 rounded-2xl blur-xl opacity-70" /> */}

          {/* Main image container */}
          <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/30 shadow-2xl backdrop-blur-sm">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-[#fb7185]/10"></div>

            {/* <div className="absolute inset-0 opacity-20"
                 style={{
                   backgroundImage: `
                     linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
                     linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
                   `,
                   backgroundSize: '40px 40px'
                 }}
            /> */}
          </div>

          {/* Enhanced Corner Accents */}
          {[
            { pos: 'top-0 left-0', delay: 0 },
            { pos: 'top-0 right-0', delay: 0.2 },
            { pos: 'bottom-0 left-0', delay: 0.4 },
            { pos: 'bottom-0 right-0', delay: 0.6 }
          ].map(({ pos, delay }, idx) => (
            <motion.div
              key={idx}
              className={`absolute ${pos} w-4 h-4 -translate-x-2 -translate-y-2`}
              initial={{ scale: 0, rotate: 45 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ delay, duration: 0.5, type: "spring" }}
            >
              <div className={`w-full h-full border-2 border-l-[#fb7185] border-t-[#fb7185] border-r-[#caa56e] border-b-[#caa56e] rounded-sm rotate-45 backdrop-blur-sm shadow-lg`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
