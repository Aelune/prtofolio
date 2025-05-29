'use client';
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
    <motion.section
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

      {/* Ambient Background Blobs - Updated to match golden theme */}
      <div className="absolute inset-0 opacity-15 pointer-events-none z-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-radial from-[#caa56e]/30 via-[#b8956a]/20 to-transparent rounded-full blur-2xl
                        xs:w-80 xs:h-80 xs:blur-3xl
                        sm:w-96 sm:h-96" />
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-radial from-[#caa56e]/25 via-[#d4af73]/15 to-transparent rounded-full blur-2xl
                        xs:w-64 xs:h-64 xs:blur-3xl
                        sm:w-80 sm:h-80" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-radial from-[#caa56e]/20 to-transparent rounded-full blur-xl
                        xs:w-40 xs:h-40
                        sm:w-48 sm:h-48" />
      </div>

      {/* Ornamental Corners - Updated with golden colors */}
      {/* <div className="hidden sm:block">
        {['tl', 'tr', 'bl', 'br'].map((pos) => (
          <div
            key={pos}
            className={`absolute ${pos.includes('t') ? 'top-4 sm:top-6 md:top-8' : 'bottom-4 sm:bottom-6 md:bottom-8'}
                       ${pos.includes('l') ? 'left-4 sm:left-6 md:left-8' : 'right-4 sm:right-6 md:right-8'}
                       w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16
                       border-${pos.includes('l') ? 'l' : 'r'}-2 sm:border-${pos.includes('l') ? 'l' : 'r'}-3 md:border-${pos.includes('l') ? 'l' : 'r'}-4
                       border-${pos.includes('t') ? 't' : 'b'}-2 sm:border-${pos.includes('t') ? 't' : 'b'}-3 md:border-${pos.includes('t') ? 't' : 'b'}-4
                       border-[#caa56e]/40 rounded-${pos}-lg shadow-lg shadow-[#caa56e]/10`}
          />
        ))}
      </div> */}

      {/* Subtle geometric patterns */}
      {/* <div className="absolute inset-0 z-10 opacity-5 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-24 h-24 border border-white/30 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-16 h-16 border border-[#caa56e]/20 rotate-45" />
      </div> */}

      {/* Content Wrapper */}
      <div className="relative z-30 flex flex-col mt-30 items-center justify-center gap-8
                      xs:gap-12 xs:h-[80%]
                      sm:gap-16
                      md:flex-row md:justify-between md:items-center
                      lg:gap-20
                      xl:gap-24">

        {/* Text Content - Updated styling */}
<div className="w-full max-w-md h-[50%] backdrop-blur-sm bg-black/20 border border-[#fb7185]/20 hover:shadow-[#fb7185]/20 p-6 rounded-xl relative overflow-hidden
                xs:max-w-lg xs:p-7
                sm:max-w-xl sm:shadow-[0_0_50px_rgba(251,113,133,0.20)]
                md:flex-1 md:max-w-none md:p-8
                lg:shadow-[0_0_60px_rgba(251,113,133,0.25)]
                hover:shadow-[0_0_80px_rgba(251,113,133,0.30)] transition-all duration-500">



          {/* Veil Overlay - Updated with golden tint */}
          {/* <div className="absolute inset-0 bg-gradient-to-b from-[#fb7185]/10 via-transparent to-[#fb7185]/20 pointer-events-none" /> */}


          <motion.h2
            variants={textVariants}
            className="relative text-xl font-jacques font-bold bg-gradient-to-r from-[#caa56e] via-[#d4af73] to-[#e8c085] bg-clip-text text-[#C0C0C0] tracking-wide leading-tight drop-shadow-sm
                       xs:text-2xl
                       sm:text-3xl sm:leading-snug
                       md:text-3xl
                       lg:text-4xl
                       xl:text-5xl xl:leading-tight"
          >
            {heading}
          </motion.h2>

          {/* Divider - Updated with golden colors */}
          <div className="flex items-center my-4
                          xs:my-5
                          sm:my-6">
            <div className="h-px bg-gradient-to-r from-transparent via-[#caa56e] to-transparent flex-1"></div>
            <div className="mx-3 text-[#C0C0C0] text-lg
                            xs:mx-4 xs:text-xl">❦</div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#caa56e] to-transparent flex-1"></div>
          </div>

          {/* Drop Cap Paragraph - Updated colors */}
          <motion.div variants={textVariants}>
            <span className="float-left text-4xl leading-none font-inukit text-white/60 mr-2 mt-1 font-gloock drop-shadow-sm
                             xs:text-5xl xs:mr-3
                             sm:text-6xl">
              {description.charAt(0)}
            </span>
            <p className="text-gray-100 text-sm leading-relaxed font-light font-WDXL
                          xs:text-base xs:leading-relaxed
                          sm:text-base
                          md:text-lg">
              {description.slice(1)}
            </p>
          </motion.div>

          {/* Tags - Updated with golden theme */}
          <div className="mt-6 flex flex-wrap gap-2
                          xs:mt-7 xs:gap-3
                          sm:mt-8">
            {tags.map((tag, i) => (
              <motion.span
                key={tag}
                variants={tagVariants(i)}
                className="text-xs px-3 py-2 font-Gloock rounded-full text-[#fb7185] bg-gradient-to-r from-[#fb7185]/20 to-white/10 border border-[#caa56e]/30 hover:from-[#fb7185]/30 hover:to-white/20 hover:scale-105 hover:shadow-lg hover:hover:shadow-[#fb7185]/20 transition-all duration-300 backdrop-blur-sm
                           xs:text-sm xs:px-4
                           sm:px-4 sm:py-2"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Image Panel - Updated with golden accents */}
      <motion.div
  variants={imageVariants}
  className="relative w-64 h-64 rounded-xl overflow-hidden shadow-2xl shadow-[#fb7185]/20
             xs:w-72 xs:h-72
             sm:w-80 sm:h-80
             md:w-72 md:h-72
             lg:w-80 lg:h-80
             xl:w-96 xl:h-96"
  whileHover={{ rotate: 1, scale: 1.03 }}
>
  <div className="absolute -inset-4 bg-gradient-to-br from-[#fb7185]/40 via-[#fda4af]/30 to-[#f87171]/20 rounded-xl transform rotate-1 opacity-70 blur-sm
                  xs:-inset-5
                  sm:-inset-6"></div>

  <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-[#fb7185]/40
                  sm:border-3
                  md:border-4">
    <Image
      src={imageSrc}
      alt={imageAlt}
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-[#fb7185]/08"></div>
  </div>

  {/* Embellished Corners - Coral theme */}
  {['top-[-0.5rem] left-[-0.5rem]', 'top-[-0.5rem] right-[-0.5rem]', 'bottom-[-0.5rem] left-[-0.5rem]', 'bottom-[-0.5rem] right-[-0.5rem]'].map((pos, idx) => (
    <div
      key={idx}
      className={`absolute ${pos} w-6 h-6 border-2 rounded-full shadow-lg backdrop-blur-sm
                 xs:w-7 xs:h-7 xs:border-3 xs:${pos.replace('-0.5rem', '-0.75rem')}
                 sm:w-8 sm:h-8 sm:border-4 sm:${pos.replace('-0.5rem', '-1rem')} ${
        idx % 2 === 0 ? 'border-[#fb7185]/50 bg-[#fb7185]/25' : 'border-[#fda4af]/50 bg-[#fda4af]/20'
      }`}
    />
  ))}
</motion.div>

      </div>

      {/* Footer Bar - Updated with golden gradient */}
      {/* <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#caa56e]/40 to-transparent opacity-60 sm:h-1 sm:via-[#caa56e]/50 sm:opacity-70"></div> */}
    </motion.section>
  );
}
