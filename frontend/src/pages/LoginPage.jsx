import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate login
    navigate('/dashboard');
  };

  return (
    <div className="page-wrapper animate-fade-in" style={{ display: 'flex', alignItems: 'center' }}>
      <div className="auth-container glass-panel">
        <h1 className="auth-title gradient-text">Welcome Back</h1>
        
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input type="email" className="form-input" placeholder="you@example.com" required />
          </div>
          
          <div className="form-group">
            <label className="form-label">Password</label>
            <input type="password" className="form-input" placeholder="••••••••" required />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', fontSize: '0.875rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)' }}>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" style={{ color: 'var(--accent-primary)' }}>Forgot Password?</a>
          </div>
          
          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginBottom: '1.5rem' }}>Sign In</button>
        </form>
        
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>
          Don't have an account? <Link to="/register" style={{ color: 'var(--text-primary)', fontWeight: '500' }}>Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
