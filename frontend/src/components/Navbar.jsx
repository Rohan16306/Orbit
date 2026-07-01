import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Search, LogOut } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useStore } from '../store/useStore';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoggedIn, setLoggedIn } = useStore();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Force remove dark mode if it was previously set
    document.documentElement.classList.remove('dark');
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    setLoggedIn(false);
    navigate('/');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel !rounded-none !border-x-0 !border-t-0' : 'bg-transparent py-4'}`}>
      <div className="max-w-[1400px] mx-auto px-6 flex justify-between items-center h-16">
        <Link to="/" className="text-2xl font-black tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-neonBlue to-neonPurple">ORBIT</Link>
        
        <div className="hidden md:flex gap-8 font-medium">
          <Link to="/" className={`hover:text-neonBlue transition-colors ${location.pathname === '/' ? 'text-neonBlue' : 'text-slate-700 dark:text-slate-300'}`}>Home</Link>
          <Link to="/deals" className={`hover:text-neonBlue transition-colors text-slate-700 dark:text-slate-300`}>Deals</Link>
          <Link to="/categories" className={`hover:text-neonBlue transition-colors text-slate-700 dark:text-slate-300`}>Categories</Link>
        </div>

        <div className="flex items-center gap-4">
          <button aria-label="Search" className="text-slate-700 hover:text-neonBlue transition-colors"><Search size={20} /></button>
          
          {isLoggedIn ? (
            <button aria-label="Logout" onClick={handleLogout} className="text-slate-700 hover:text-neonPurple transition-colors" title="Logout">
              <LogOut size={20} />
            </button>
          ) : (
            <Link aria-label="Login" to="/login" className="text-slate-700 hover:text-neonBlue transition-colors" title="Login">
              <User size={20} />
            </Link>
          )}

          <Link aria-label="3 items in cart" to="/cart" className="relative text-slate-700 dark:text-slate-300 hover:text-neonBlue transition-colors">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-neonPurple text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow-[0_0_10px_rgba(167,119,227,0.5)]">3</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
