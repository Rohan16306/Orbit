import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

const SignUpPage = () => {
  const navigate = useNavigate();
  const setLoggedIn = useStore((state) => state.setLoggedIn);
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setLoggedIn(true);
    navigate('/dashboard');
  };

  return (
    <div className="pt-24 pb-12 px-6 max-w-[1400px] mx-auto min-h-[calc(100vh-80px)] flex items-center justify-center animate-fade-in">
      <div className="glass-panel p-8 w-full max-w-md">
        <h1 className="text-3xl font-black mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-neonBlue to-neonPurple">Join Orbit</h1>
        <p className="text-slate-500 text-center text-sm mb-6">Experience the pinnacle of technological engineering.</p>
        
        {/* Social SSO */}
        <div className="flex flex-col gap-3 mb-6">
          <button type="button" className="w-full flex items-center justify-center gap-2 bg-white text-slate-800 hover:bg-slate-100 py-3 rounded-xl font-bold transition-all shadow-sm">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>
          <button type="button" className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white hover:bg-black py-3 rounded-xl font-bold transition-all shadow-sm">
            <svg viewBox="0 0 384 512" className="w-5 h-5 fill-current"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
            Continue with Apple
          </button>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="h-px flex-1 bg-white/20"></div>
          <span className="text-slate-500 text-xs font-medium uppercase tracking-wider">Or register with email</span>
          <div className="h-px flex-1 bg-white/20"></div>
        </div>

        <form onSubmit={handleRegister} className="flex flex-col gap-5">
          <div className="relative group">
            <input 
              type="text" 
              id="name"
              className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-black/20 focus:outline-none focus:ring-2 focus:ring-neonBlue transition-all text-slate-800 dark:text-white shadow-[0_0_0_transparent] focus:shadow-[0_0_15px_rgba(0,240,255,0.2)]" 
              placeholder=" "
              required 
            />
            <label htmlFor="name" className="absolute left-4 top-4 text-slate-500 text-sm transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-neonBlue peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 pointer-events-none">
              Full Name
            </label>
          </div>

          <div className="relative group">
            <input 
              type="email" 
              id="email"
              className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-black/20 focus:outline-none focus:ring-2 focus:ring-neonBlue transition-all text-slate-800 dark:text-white shadow-[0_0_0_transparent] focus:shadow-[0_0_15px_rgba(0,240,255,0.2)]" 
              placeholder=" "
              required 
            />
            <label htmlFor="email" className="absolute left-4 top-4 text-slate-500 text-sm transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-neonBlue peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 pointer-events-none">
              Email Address
            </label>
          </div>
          
          <div className="relative group">
            <input 
              type={showPassword ? "text" : "password"} 
              id="password"
              className="peer w-full px-4 pt-6 pb-2 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-black/20 focus:outline-none focus:ring-2 focus:ring-neonPurple transition-all text-slate-800 dark:text-white shadow-[0_0_0_transparent] focus:shadow-[0_0_15px_rgba(167,119,227,0.2)]" 
              placeholder=" "
              required 
            />
            <label htmlFor="password" className="absolute left-4 top-4 text-slate-500 text-sm transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-neonPurple peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-placeholder-shown:text-slate-500 pointer-events-none">
              Password
            </label>
            <button 
              type="button" 
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-slate-500 hover:text-neonPurple transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
            <div className="h-1 w-full bg-slate-200 dark:bg-white/10 mt-1 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 w-[70%] opacity-50 peer-focus:opacity-100 transition-opacity"></div>
            </div>
          </div>
          
          <button type="button" onClick={handleRegister} className="glass-button-primary w-full mt-4">
            Create Account
          </button>
        </form>
        
        <p className="text-center mt-6 text-slate-500 dark:text-slate-400">
          Already have an account? <Link to="/login" className="text-slate-800 dark:text-white font-medium hover:text-neonBlue transition-colors">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
