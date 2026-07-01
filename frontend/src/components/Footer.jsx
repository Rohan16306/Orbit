import { Link } from 'react-router-dom';
import { Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 w-full border-t border-slate-200 dark:border-white/10 bg-white/50 dark:bg-[#0a0514]/80 backdrop-blur-xl mt-20">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-black tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-neonBlue to-neonPurple inline-block mb-4">
              ORBIT
            </Link>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mb-6">
              The premier destination for high-end, uncompromising technology. Engineered for the elite.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-neonBlue transition-colors"><Twitter size={20} /></a>
              <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-neonPurple transition-colors"><Instagram size={20} /></a>
              <a href="#" aria-label="Github" className="text-slate-400 hover:text-white transition-colors"><Github size={20} /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-4">Store</h2>
            <ul className="flex flex-col gap-2">
              <li><Link to="/categories" className="text-slate-500 dark:text-slate-400 hover:text-neonBlue transition-colors">Categories</Link></li>
              <li><Link to="/deals" className="text-slate-500 dark:text-slate-400 hover:text-neonBlue transition-colors">Special Deals</Link></li>
              <li><Link to="/product/1" className="text-slate-500 dark:text-slate-400 hover:text-neonBlue transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-4">Support</h2>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-neonBlue transition-colors">Help Center</a></li>
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-neonBlue transition-colors">Returns</a></li>
              <li><a href="#" className="text-slate-500 dark:text-slate-400 hover:text-neonBlue transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            © {new Date().getFullYear()} Orbit Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-neonBlue transition-colors">Terms of Service</a>
            <a href="#" className="text-slate-500 dark:text-slate-400 hover:text-neonBlue transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
