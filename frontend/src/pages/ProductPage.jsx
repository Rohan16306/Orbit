import { useState } from 'react';
import { 
  ChevronRight, Star, ShieldCheck, Truck, RotateCcw, 
  ShoppingCart, Zap, CheckCircle2, AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  const [activeTab, setActiveTab] = useState('specs');
  const [selectedColor, setSelectedColor] = useState('Nebula White');
  const [selectedSize, setSelectedSize] = useState('Standard');
  const [mainImage, setMainImage] = useState(
    'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=1200&q=80'
  );

  const images = [
    'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80'
  ];

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12 pt-28">
      
      {/* SECTION 1: Navigation & Trust Bar */}
      <div className="glass-panel p-4 mb-8 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center text-sm font-medium text-slate-500">
          <Link to="/" className="hover:text-neonBlue transition-colors">Orbit</Link>
          <ChevronRight size={16} className="mx-2" />
          <Link to="/audio" className="hover:text-neonBlue transition-colors">Audio Equipment</Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-slate-800">Sony WH-1000XM5</span>
        </div>

        <div className="flex items-center gap-6">
          {/* Vendor Identity */}
          <Link to="/vendor/sony-official" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=100&q=80" 
              alt="Sony Official" 
              className="w-10 h-10 rounded-full object-cover border-2 border-white/40"
            />
            <div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-slate-800">Sony Official Store</span>
                <ShieldCheck size={16} className="text-neonBlue" />
              </div>
              <div className="flex items-center text-xs text-slate-500 font-medium">
                <Star size={12} className="text-yellow-500 fill-yellow-500 mr-1" />
                4.9 (12,450 reviews)
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* SECTION 2: Visual Core (Left Side) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="glass-panel p-2 overflow-hidden relative group aspect-[4/3] flex items-center justify-center">
            <img 
              src={mainImage} 
              alt="Product" 
              className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110 cursor-crosshair"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-xl pointer-events-none"></div>
            <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
              3D View Available
            </div>
          </div>

          {/* Media Gallery Strip */}
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {images.map((img, idx) => (
              <button 
                key={idx} 
                onClick={() => setMainImage(img)}
                className={`flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden glass-panel p-1 transition-all ${mainImage === img ? 'ring-2 ring-neonBlue scale-105' : 'opacity-70 hover:opacity-100'}`}
              >
                <img src={img} className="w-full h-full object-cover rounded-lg" alt={`Thumbnail ${idx}`} />
              </button>
            ))}
          </div>
        </div>

        {/* SECTION 3: The Action Center (Right Side) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="glass-panel p-8">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1">
                <CheckCircle2 size={14} /> IN STOCK
              </span>
              <span className="text-slate-500 text-sm">SKU: SNY-1000X-WH</span>
            </div>
            
            <h1 className="text-4xl font-bold text-slate-800 mb-2 leading-tight">Sony WH-1000XM5 Wireless Headphones</h1>
            
            <div className="flex items-end gap-3 mb-6">
              <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-500">
                $348.00
              </span>
              <span className="text-lg text-slate-400 line-through mb-1">$398.00</span>
            </div>

            {/* Variants */}
            <div className="mb-6">
              <h3 className="font-semibold text-slate-700 mb-3 text-sm uppercase tracking-wider">Color: <span className="text-neonBlue">{selectedColor}</span></h3>
              <div className="flex gap-3">
                <button onClick={() => setSelectedColor('Nebula White')} className={`w-12 h-12 rounded-full bg-white border-2 shadow-md transition-all ${selectedColor === 'Nebula White' ? 'border-neonBlue scale-110' : 'border-transparent'}`}></button>
                <button onClick={() => setSelectedColor('Void Black')} className={`w-12 h-12 rounded-full bg-slate-900 border-2 shadow-md transition-all ${selectedColor === 'Void Black' ? 'border-neonBlue scale-110' : 'border-transparent'}`}></button>
                <button onClick={() => setSelectedColor('Stardust Silver')} className={`w-12 h-12 rounded-full bg-slate-300 border-2 shadow-md transition-all ${selectedColor === 'Stardust Silver' ? 'border-neonBlue scale-110' : 'border-transparent'}`}></button>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold text-slate-700 mb-3 text-sm uppercase tracking-wider">Edition</h3>
              <div className="flex gap-3">
                <button onClick={() => setSelectedSize('Standard')} className={`glass-button flex-1 ${selectedSize === 'Standard' ? 'ring-2 ring-neonPurple bg-white/90' : ''}`}>Standard</button>
                <button onClick={() => setSelectedSize('Creator Bundle')} className={`glass-button flex-1 ${selectedSize === 'Creator Bundle' ? 'ring-2 ring-neonPurple bg-white/90' : ''}`}>Creator Bundle</button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button className="glass-button w-full h-14 text-lg justify-center hover:bg-slate-100">
                <ShoppingCart size={20} /> Add to Cart
              </button>
              <button className="glass-button-primary w-full h-14 text-lg justify-center">
                <Zap size={20} /> Buy Now (Express)
              </button>
            </div>
          </div>

          <div className="glass-panel p-6 flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-neonBlue/10 rounded-xl text-neonBlue"><Truck size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-800">Free Next-Day Delivery</h4>
                <p className="text-sm text-slate-500">Order within 2h 45m for delivery tomorrow.</p>
              </div>
            </div>
            <div className="h-px w-full bg-slate-200/50"></div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-neonPurple/10 rounded-xl text-neonPurple"><RotateCcw size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-800">30-Day Zero-Gravity Returns</h4>
                <p className="text-sm text-slate-500">Not satisfied? Return it seamlessly via our portal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4: The Deep Dive */}
      <div className="mt-12 glass-panel p-8">
        <div className="flex gap-8 border-b border-white/40 mb-8">
          <button 
            onClick={() => setActiveTab('specs')}
            className={`pb-4 font-bold text-lg transition-colors relative ${activeTab === 'specs' ? 'text-neonBlue' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Technical Specifications
            {activeTab === 'specs' && <div className="absolute bottom-0 left-0 w-full h-1 bg-neonBlue rounded-t-full"></div>}
          </button>
          <button 
            onClick={() => setActiveTab('reviews')}
            className={`pb-4 font-bold text-lg transition-colors relative ${activeTab === 'reviews' ? 'text-neonBlue' : 'text-slate-500 hover:text-slate-700'}`}
          >
            Customer Reviews (4.8)
            {activeTab === 'reviews' && <div className="absolute bottom-0 left-0 w-full h-1 bg-neonBlue rounded-t-full"></div>}
          </button>
        </div>

        {activeTab === 'specs' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fade-in">
            <div>
              <h3 className="font-bold text-xl mb-4 text-slate-800">Engineering Details</h3>
              <ul className="space-y-3">
                <li className="flex justify-between border-b border-white/30 pb-2"><span className="text-slate-500">Driver Unit</span> <span className="font-medium text-slate-800">30mm, specially designed</span></li>
                <li className="flex justify-between border-b border-white/30 pb-2"><span className="text-slate-500">Frequency Response</span> <span className="font-medium text-slate-800">4Hz - 40,000Hz</span></li>
                <li className="flex justify-between border-b border-white/30 pb-2"><span className="text-slate-500">Battery Life</span> <span className="font-medium text-slate-800">Up to 30 Hours (NC ON)</span></li>
                <li className="flex justify-between border-b border-white/30 pb-2"><span className="text-slate-500">Weight</span> <span className="font-medium text-slate-800">Approx. 250g</span></li>
                <li className="flex justify-between border-b border-white/30 pb-2"><span className="text-slate-500">Bluetooth Version</span> <span className="font-medium text-slate-800">Version 5.2</span></li>
              </ul>
            </div>
            <div>
               <h3 className="font-bold text-xl mb-4 text-slate-800">In The Box</h3>
               <div className="glass-panel p-4 bg-white/40 border-none flex items-center gap-4">
                 <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-slate-400 border border-slate-200">IMG</div>
                 <div>
                   <p className="font-bold text-slate-800">Carrying Case</p>
                   <p className="text-sm text-slate-500">Premium collapsible case</p>
                 </div>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="animate-fade-in text-slate-600">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-5xl font-extrabold text-slate-800">4.8</div>
              <div>
                <div className="flex text-yellow-500 mb-1">
                  <Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" />
                </div>
                <p className="text-sm text-slate-500">Based on 12,450 reviews</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="glass-panel p-6 bg-white/40 border-none">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-neonBlue to-neonPurple rounded-full text-white flex items-center justify-center font-bold">JD</div>
                    <div>
                      <p className="font-bold text-slate-800">John Doe <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full ml-2">Verified</span></p>
                      <p className="text-xs text-slate-500">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-500"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                </div>
                <p className="text-slate-700 leading-relaxed">Absolutely incredible noise cancellation. I wore these on a 12-hour flight and forgot I was even on a plane. The new design is much sleeker than the XM4s.</p>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default ProductPage;
