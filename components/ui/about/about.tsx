'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  sectionVariants,
  textVariants,
  tagVariants,
  imageVariants,
} from '@/components/variants/aboutSectionVariants';

export default function AboutSection({
  heading,
  description,
  imageSrc,
  imageAlt = 'Profile photo',
  tags = ['Renaissance Coder', 'Aesthetic Dev', 'UI Craftsman'],
}) {
  return (
    <motion.section
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-full min-h-screen py-24 px-6 md:px-20 lg:px-40 bg-gradient-to-br from-[#201010] via-[#1a0c0c] to-[#100b05] text-white overflow-hidden"
    >
      {/* Ambient Background Blobs */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-radial from-[rgba(160,156,152,0.25)] via-[rgba(93,94,101,0.15)] to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-radial from-[rgba(64,18,3,0.15)] via-[rgba(160,156,152,0.12)] to-transparent rounded-full blur-3xl" />
      </div>

      {/* Ornamental Corners */}
      {['tl', 'tr', 'bl', 'br'].map((pos) => (
        <div
          key={pos}
          className={`absolute ${pos.includes('t') ? 'top-8' : 'bottom-8'} ${pos.includes('l') ? 'left-8' : 'right-8'} w-16 h-16 border-${pos.includes('l') ? 'l' : 'r'}-4 border-${pos.includes('t') ? 't' : 'b'}-4 border-amber-400/60 rounded-${pos}-lg`}
        />
      ))}

      {/* Floating Symbols */}
     <div className="absolute top-20 left-20 text-amber-300/40 text-4xl animate-pulse">❦</div>
      <div className="absolute top-1/3 right-24 text-rose-300/40 text-3xl animate-bounce" style={{animationDelay: '1s'}}>✧</div>
      <div className="absolute bottom-1/4 left-1/4 text-orange-300/40 text-5xl animate-pulse" style={{animationDelay: '2s'}}>⚜</div>

      {/* Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-20">

        {/* Text Content */}
        <div className="flex-1  shadow-[0_0_60px_rgba(160,156,152,0.10)] backdrop-blur-lg p-8 rounded-xl max-w-xl relative overflow-hidden">
          {/* Veil Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[rgba(64,18,3,0.09)] pointer-events-none" />

          <motion.h2
  variants={textVariants}
  className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold bg-gradient-to-r from-amber-200 via-orange-200 to-rose-200 bg-clip-text text-transparent tracking-wide leading-tight drop-shadow-sm"
>
  {heading}
</motion.h2>


          {/* Divider */}
         <div className="flex items-center my-6">
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1"></div>
            <div className="mx-4 text-amber-400 text-xl">❦</div>
            <div className="h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent flex-1"></div>
          </div>
          {/* Drop Cap Paragraph */}
          <motion.div variants={textVariants}>
            <span className="float-left text-6xl leading-none text-[rgba(160,156,152,0.85)] font-bold mr-3 mt-1 font-serif drop-shadow-sm">
              {description.charAt(0)}
            </span>
            <p className="text-stone-100 text-sm sm:text-base md:text-lg leading-relaxed font-light font-serif">
  {description.slice(1)}
</p>

          </motion.div>

          {/* Tags */}
          <div className="mt-8 flex flex-wrap gap-3">
            {tags.map((tag, i) => (
            //   <motion.span
            //     key={tag}
            //     variants={tagVariants(i)}
            //     className="bg-gradient-to-r from-[rgba(93,94,101,0.23)] to-[rgba(160,156,152,0.21)] backdrop-blur-sm border border-[rgba(160,156,152,0.24)] text-sm px-4 py-2 rounded-full font-serif text-[rgba(160,156,152,0.95)] shadow-inner hover:from-[rgba(93,94,101,0.35)] hover:to-[rgba(160,156,152,0.38)] hover:scale-105 transition-all duration-300"
            //   >
            //     {tag}
            //   </motion.span>
            <motion.span
  key={tag}
  variants={tagVariants(i)}
  className="text-xs sm:text-sm px-4 py-2 rounded-full font-serif text-amber-100 shadow-inner bg-gradient-to-r from-amber-700/30 to-orange-600/30 backdrop-blur-sm border border-amber-500/30 hover:from-amber-500/50 hover:to-orange-500/50 hover:scale-105 transition-all duration-300"
>
  {tag}
</motion.span>

            ))}
          </div>
        </div>

        {/* Image Panel */}
        <motion.div
          variants={imageVariants}
          className="relative w-72 h-72 md:w-96 md:h-96 rounded-xl overflow-hidden shadow-2xl"
          whileHover={{ rotate: 1, scale: 1.03 }}
        >
          <div className="absolute -inset-6 bg-gradient-to-br from-[rgba(160,156,152,0.5)] via-[rgba(93,94,101,0.2)] to-[rgba(64,18,3,0.25)] rounded-xl transform rotate-1 opacity-70"></div>
          {/* <div className="absolute -inset-4 bg-gradient-to-br from-[#201010] via-[#1a0c0c] to-[#100b05] rounded-xl"></div> */}

          <div className="relative w-full h-full rounded-xl overflow-hidden border-4 border-[rgba(160,156,152,0.32)]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-[rgba(160,156,152,0.08)]"></div>
          </div>

          {/* Embellished Corners */}
          {['top-[-1rem] left-[-1rem]', 'top-[-1rem] right-[-1rem]', 'bottom-[-1rem] left-[-1rem]', 'bottom-[-1rem] right-[-1rem]'].map((pos, idx) => (
            <div
              key={idx}
              className={`absolute ${pos} w-8 h-8 border-4 rounded-full ${
                idx % 2 === 0 ? 'border-[rgba(160,156,152,0.5)] bg-[rgba(160,156,152,0.25)]' : 'border-[rgba(93,94,101,0.5)] bg-[rgba(93,94,101,0.18)]'
              } shadow-lg`}
            />
          ))}
        </motion.div>
      </div>

      {/* Footer Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[rgba(160,156,152,0.5)] to-transparent opacity-60"></div>
    </motion.section>
  );
}
