import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const featuredProducts = [
    { id: 1, name: 'Sony WH-1000XM5', category: 'Audio', price: 348.00, img: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=500&q=80' },
    { id: 2, name: 'MacBook Pro 16"', category: 'Laptops', price: 2499.00, img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=80' },
    { id: 3, name: 'Keychron Q1 Pro', category: 'Accessories', price: 199.00, img: 'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=500&q=80' },
    { id: 4, name: 'Sony A7 IV', category: 'Cameras', price: 2498.00, img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=500&q=80' },
  ];

  return (
    <div className="pt-24 pb-12 px-6 max-w-[1400px] mx-auto min-h-screen">
      
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row items-center gap-12 mb-20 mt-8">
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="text-5xl md:text-7xl font-black text-slate-800 dark:text-white leading-tight">
            Discover The Future Of <br/>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-neonBlue to-neonPurple">Tech</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-xl">
            Premium gadgets, unparalleled quality. Experience the next generation of electronics today with Orbit.
          </p>
          <div className="flex gap-4 mt-4">
            <Link to="/products" className="glass-button-primary">Shop Now <ArrowRight size={18} /></Link>
            <Link to="/deals" className="glass-button">View Deals</Link>
          </div>
        </div>
        
        <div className="flex-1 w-full max-w-xl">
          <div className="glass-panel p-2 transform hover:-translate-y-2 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=800&q=80" 
              alt="Premium Tech" 
              className="w-full h-auto rounded-xl object-cover" 
            />
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section>
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Trending Products</h2>
          <Link to="/categories" className="text-neonBlue hover:text-neonPurple transition-colors font-medium flex items-center gap-1">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div className="glass-panel p-4 flex flex-col gap-3 group" key={product.id}>
              <div className="relative overflow-hidden rounded-xl aspect-square mb-2 bg-white/50 dark:bg-black/20">
                <img 
                  src={product.img} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              
              <div className="text-xs font-bold uppercase tracking-wider text-neonPurple">{product.category}</div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white line-clamp-1">{product.name}</h3>
              
              <div className="flex items-center gap-1 text-yellow-500 mb-2">
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <Star size={14} fill="currentColor" />
                <span className="text-slate-500 dark:text-slate-400 text-xs ml-1">(124)</span>
              </div>
              
              <div className="text-xl font-black text-slate-800 dark:text-white mt-auto mb-3">
                ${product.price.toFixed(2)}
              </div>
              
              <Link to={`/product/${product.id}`} className="glass-button w-full justify-center text-sm">
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default HomePage;
