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
    <div className="pt-24 pb-12 px-6 max-w-[1400px] mx-auto min-h-screen animate-fade-in">
      <div className="flex justify-between items-center mt-8 mb-12">
        <h1 className="text-3xl font-bold text-slate-800 dark:text-white m-0">Dashboard overview</h1>
        <div className="glass-panel px-4 py-2 inline-flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
          <div className={`w-2 h-2 rounded-full ${apiStatus.includes('Connected') ? 'bg-green-500' : 'bg-red-500'}`}></div>
          {apiStatus}
        </div>
      </div>
      
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-8 mb-12">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <div key={idx} className="glass-panel p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.title}</div>
                <div 
                  className="p-2 rounded-lg"
                  style={{ backgroundColor: `${stat.color}20`, color: stat.color }}
                >
                  <Icon size={20} />
                </div>
              </div>
              <div className="text-3xl font-bold text-slate-800 dark:text-white">{stat.value}</div>
            </div>
          );
        })}
      </div>
      
      <div className="glass-panel p-8 min-h-[400px]">
        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-8">Recent Orders</h2>
        <div className="text-slate-500 dark:text-slate-400 text-center mt-16">
          Data table will be populated here
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
