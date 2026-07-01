import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    navigate('/dashboard');
  };

  return (
    <div className="pt-24 pb-12 px-6 max-w-[1400px] mx-auto min-h-[calc(100vh-80px)] flex items-center justify-center animate-fade-in">
      <div className="glass-panel p-8 w-full max-w-md">
        <h1 className="text-3xl font-black mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-neonBlue to-neonPurple">Welcome Back</h1>
        
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
            <input 
              type="email" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-black/20 focus:outline-none focus:ring-2 focus:ring-neonBlue transition-all dark:text-white" 
              placeholder="you@example.com" 
              required 
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-black/20 focus:outline-none focus:ring-2 focus:ring-neonBlue transition-all dark:text-white" 
              placeholder="••••••••" 
              required 
            />
          </div>
          
          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-slate-500 dark:text-slate-400 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-neonBlue focus:ring-neonBlue" /> 
              Remember me
            </label>
            <a href="#" className="text-neonBlue hover:text-neonPurple transition-colors font-medium">Forgot Password?</a>
          </div>
          
          <button type="submit" className="glass-button-primary w-full mt-2">
            Sign In
          </button>
        </form>
        
        <p className="text-center mt-6 text-slate-500 dark:text-slate-400">
          Don't have an account? <Link to="/register" className="text-slate-800 dark:text-white font-medium hover:text-neonBlue transition-colors">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
