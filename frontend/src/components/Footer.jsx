import { Link } from 'react-router-dom';

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
              <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-neonBlue transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5 2.8 12 3 12c.3.1.6.2 1 .2-1.6-1.1-2-3-2-3 .5.3 1.1.5 1.7.5-1.1-1.2-1.7-3.6-1-5.5 2.8 3.5 6.9 5.8 11.4 6-.4-2.8 1.6-5.4 4.4-5.4 1.1 0 2.2.5 3 1.2.9-.2 1.8-.5 2.6-1-.3 1-1 1.8-1.8 2.4.8-.1 1.6-.3 2.3-.6-.6.8-1.3 1.5-2 2z"></path></svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-slate-400 hover:text-neonPurple transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" aria-label="Github" className="text-slate-400 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
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
