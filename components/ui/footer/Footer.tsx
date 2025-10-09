'use client';

import React from 'react';
import { motion } from 'framer-motion';

type footerButtonsProps = {
text: string,
link: string
};

type footerButtons ={
    buttons: footerButtonsProps[]
}
const Footer: React.FC<footerButtons> = ({buttons}) => {
return(
<motion.footer
                className="absolute bottom-0 left-0 right-0 p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="max-w-4xl mx-auto">
                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6" />

                  {/* Footer Content */}
                 <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
  <motion.div
    className="text-white/60 text-sm"
    whileHover={{ color: "rgba(255,255,255,0.8)" }}
  >
    © 2025 DΛωσσd. Crafted with passion.
  </motion.div>

  {/* Move flex and spacing to ul */}
  <ul className="flex space-x-6">
    {buttons.map((button, index) => (
      <li key={index}>
        <a
          href={button.link}
          className="text-white/40 hover:text-white/70 text-sm transition-colors"
        >
          {button.text}
        </a>
      </li>
    ))}
  </ul>
</div>

                </div>
              </motion.footer>
)}

export default Footer
