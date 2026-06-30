import { Package, Users, DollarSign, Activity } from 'lucide-react';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [apiStatus, setApiStatus] = useState('Checking connection...');

  useEffect(() => {
    fetch('/api/status')
      .then(res => res.json())
      .then(data => setApiStatus(`Connected to Node.js! Message: ${data.message}`))
      .catch(() => setApiStatus('Backend connection failed. Is the Express server running?'));
  }, []);

  const stats = [
    { title: 'Total Revenue', value: '$45,231.89', icon: DollarSign, color: '#10b981' },
    { title: 'Active Users', value: '2,314', icon: Users, color: '#6366f1' },
    { title: 'New Orders', value: '143', icon: Package, color: '#f59e0b' },
    { title: 'Conversion Rate', value: '3.4%', icon: Activity, color: '#ec4899' },
  ];

  return (
    <div className="page-wrapper container animate-fade-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', marginBottom: '3rem' }}>
        <h1 className="section-title" style={{ margin: 0 }}>Dashboard overview</h1>
        <div className="glass-panel" style={{ padding: '0.5rem 1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: apiStatus.includes('Connected') ? '#10b981' : '#ef4444' }}></div>
          {apiStatus}
        </div>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="glass-panel" style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: '500' }}>{stat.title}</div>
                <div style={{ background: `${stat.color}20`, color: stat.color, padding: '0.5rem', borderRadius: '8px' }}>
                  <Icon size={20} />
                </div>
              </div>
              <div style={{ fontSize: '2rem', fontWeight: '700' }}>{stat.value}</div>
            </div>
          );
        })}
      </div>
      
      <div className="glass-panel" style={{ padding: '2rem', minHeight: '400px' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Recent Orders</h2>
        <div style={{ color: 'var(--text-secondary)', textAlign: 'center', marginTop: '4rem' }}>
          Data table will be populated here
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
