'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
    const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div>
            <motion.div
      ref={ref}
      style={{ opacity }}
      className="w-full h-screen bg-[url('/Images/herobg-hd.webp')] bg-cover bg-center"
    >
    {/* <div className="w-full h-screen bg-[url('/Images/herobg-hd.webp')] bg-cover bg-center"> */}
    <div className="w-full h-screen bg-[url('/Images/clouds.jpg')] bg-cover bg-center">
      <div className="flex flex-col md:flex-row items-center justify-center h-full text-center md:text-left max-w-7xl mx-auto gap-10 md:gap-20 px-4">
        {/* Left Side: Title */}
        <motion.div
          className="w-full md:w-1/2 mt-24 xs:mt-32 md:mt-0 flex items-center justify-center text-center md:text-left"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="font-inukit text-4xl sm:text-5xl md:text-5xl lg:text-7xl xl:text-8xl leading-tight">
            DESIGNER<span className="align-top text-base md:text-lg">&</span><br />
            DEVELOPER
          </h1>
        </motion.div>

        {/* Right Side: Description + Button */}
        <div className="w-full flex flex-col justify-between min-h-[30vh] md:min-h-[60vh] md:h-[80%]">
          <div className="hidden md:block h-[20%]"></div>
          <motion.div
            className="space-y-6 mt-6 md:mt-0"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          >
            <motion.p
              className="font-jacques text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              I am a developer and UX/UI designer based in India.
              Although just started UI, I have built some unique website designs.
              I love minimal and brutalist design, also chocolates and arts are &gt;&gt;
            </motion.p>
            <div className="flex justify-center md:justify-start">
              <motion.button
                className="text-white font-roboto rounded-full px-6 py-3 border-2 border-white shadow-lg hover:bg-white/10 hover:scale-110 hover:rotate-[-1deg] hover:border-yellow-300 hover:shadow-[4px_4px_0_rgba(255,255,0,0.6)] transition-all duration-300 ease-out"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, type: 'spring', stiffness: 400, damping: 17 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact ME
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </motion.div>
    </div>
  );
}
