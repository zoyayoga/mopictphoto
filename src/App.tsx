import { Camera, Mail, Globe, Share2 } from 'lucide-react';
import { motion } from 'motion/react';

const links = [
  { name: 'PORTOFOLIO', url: '#', icon: <Globe className="w-5 h-5" /> },
  { name: 'CONTACT', url: '#', icon: <Mail className="w-5 h-5" /> },
];

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans selection:bg-white selection:text-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
        style={{ 
          backgroundImage: `url('https://lh3.googleusercontent.com/d/10G1A-UhBQzZa5tCuav91okGvL5H48Nd1')`,
          filter: 'brightness(0.3) contrast(1.1)'
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-transparent to-black/80" />

      {/* Main Content */}
      <main className="relative z-20 flex flex-col items-center justify-center min-h-screen px-6 py-12 text-center max-w-2xl mx-auto">
        
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <img 
            src="https://lh3.googleusercontent.com/d/1HqTisSxHZWZ20pc7S-K6XVEz6SYLc8I4" 
            alt="MOPICT Studio Logo" 
            className="h-16 md:h-20 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Header Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="space-y-3 md:space-y-4 mb-6 md:mb-8"
        >
          <p className="text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] font-medium opacity-80 uppercase">
            Best Quality Services Photo Product
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight leading-tight px-2">
            PHOTOGRAPHY<br />PRODUCT
          </h2>
        </motion.div>

        {/* Icon & Subtitle Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-full space-y-4 md:space-y-6 mb-8 md:mb-12"
        >
          <div className="flex items-center justify-center gap-3 md:gap-4">
            <div className="h-[1px] flex-1 bg-white/20 md:bg-white/30" />
            <Camera className="w-8 h-8 md:w-10 md:h-10 stroke-[1px] opacity-90" />
            <div className="h-[1px] flex-1 bg-white/20 md:bg-white/30" />
          </div>
          
          <div className="space-y-1 px-4">
            <p className="text-[9px] md:text-[11px] tracking-[0.15em] md:tracking-[0.2em] font-light opacity-90 uppercase leading-relaxed">
              FASHION PRODUCT | SPORT PRODUCT
            </p>
            <p className="text-[9px] md:text-[11px] tracking-[0.15em] md:tracking-[0.2em] font-light opacity-90 uppercase leading-relaxed">
              SKINCARE PRODUCT | ACCESSORIES PRODUCT & MORE,
            </p>
          </div>
          
          <div className="h-[1px] w-1/4 md:w-1/3 mx-auto bg-white/20 md:bg-white/30" />
        </motion.div>

        {/* Links Section */}
        <div className="w-full space-y-3 md:space-y-4 max-w-[280px] sm:max-w-sm">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              className="glass-button block py-3 md:py-4 px-6 md:px-8 rounded-full text-base md:text-lg tracking-[0.1em] md:tracking-[0.15em] font-light group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {link.name}
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="mt-16 text-[10px] tracking-[0.2em] opacity-40 uppercase"
        >
          &copy; {new Date().getFullYear()} MOPICT STUDIO. ALL RIGHTS RESERVED.
        </motion.footer>

        {/* Floating Share Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="fixed bottom-8 right-8 p-4 rounded-full glass-button"
        >
          <Share2 className="w-5 h-5" />
        </motion.button>
      </main>
    </div>
  );
}
