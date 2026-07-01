import { useState, useEffect } from 'react';
import { 
  ChevronRight, Star, ShieldCheck, Truck, RotateCcw, 
  ShoppingCart, Zap, CheckCircle2
} from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const products = {
  "1": {
    name: "Sony WH-1000XM5 Wireless Headphones",
    category: "Audio Equipment",
    price: 348.00,
    originalPrice: 398.00,
    sku: "SNY-1000X-WH",
    images: [
      'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: [
      { label: "Driver Unit", value: "30mm, specially designed" },
      { label: "Frequency Response", value: "4Hz - 40,000Hz" },
      { label: "Battery Life", value: "Up to 30 Hours (NC ON)" },
      { label: "Weight", value: "Approx. 250g" },
      { label: "Bluetooth Version", value: "Version 5.2" }
    ]
  },
  "2": {
    name: "MacBook Pro 16\"",
    category: "Laptops",
    price: 2499.00,
    originalPrice: 2699.00,
    sku: "APL-MBP16-M3",
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512446816042-444d641267d4?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: [
      { label: "Processor", value: "M3 Max" },
      { label: "Memory", value: "36GB Unified Memory" },
      { label: "Storage", value: "1TB SSD" },
      { label: "Display", value: "Liquid Retina XDR" }
    ]
  },
  "3": {
    name: "Keychron Q1 Pro",
    category: "Accessories",
    price: 199.00,
    originalPrice: 219.00,
    sku: "KCH-Q1P-WL",
    images: [
      'https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: [
      { label: "Layout", value: "75% (81 Keys)" },
      { label: "Switches", value: "Keychron K Pro Mechanical" },
      { label: "Connectivity", value: "Bluetooth 5.1 & Type-C" },
      { label: "Body", value: "Full CNC Machined Aluminum" }
    ]
  },
  "4": {
    name: "Sony A7 IV",
    category: "Cameras",
    price: 2498.00,
    originalPrice: 2698.00,
    sku: "SNY-A7M4-B",
    images: [
      'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=80'
    ],
    specs: [
      { label: "Sensor", value: "33MP Full-Frame Exmor R CMOS" },
      { label: "Video", value: "Up to 4K 60p 10-bit 4:2:2" },
      { label: "Autofocus", value: "759-Point Fast Hybrid AF" },
      { label: "Screen", value: "Vari-angle touchscreen LCD" }
    ]
  }
};

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = products[id] || products["1"]; // Fallback to Sony if ID not found

  const [activeTab, setActiveTab] = useState('specs');
  const [selectedColor, setSelectedColor] = useState('Nebula White');
  const [selectedSize, setSelectedSize] = useState('Standard');
  const [mainImage, setMainImage] = useState(product.images[0]);

  // Update main image if the product changes
  useEffect(() => {
    setMainImage(product.images[0]);
  }, [product]);

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12 pt-28">
      
      {/* SECTION 1: Navigation & Trust Bar */}
      <div className="glass-panel p-4 mb-8 flex flex-wrap justify-between items-center gap-4">
        <div className="flex items-center text-sm font-medium text-slate-500">
          <Link to="/" className="hover:text-neonBlue transition-colors">Orbit</Link>
          <ChevronRight size={16} className="mx-2" />
          <span className="hover:text-neonBlue transition-colors cursor-pointer" onClick={() => navigate(-1)}>{product.category}</span>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-slate-800 dark:text-slate-200">{product.name}</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&w=100&q=80" 
              alt="Official Store" 
              className="w-10 h-10 rounded-full object-cover border-2 border-white/40"
            />
            <div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-slate-800 dark:text-white">Official Store</span>
                <ShieldCheck size={16} className="text-neonBlue" />
              </div>
              <div className="flex items-center text-xs text-slate-500 font-medium">
                <Star size={12} className="text-yellow-500 fill-yellow-500 mr-1" />
                4.9 (12,450 reviews)
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* SECTION 2: Visual Core (Left Side) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <div className="glass-panel p-2 overflow-hidden relative group aspect-[4/3] flex items-center justify-center">
            <img 
              src={mainImage} 
              alt={product.name} 
              className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110 cursor-crosshair"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-xl pointer-events-none"></div>
            <div className="absolute top-4 left-4 bg-white/80 dark:bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-slate-800 dark:text-white shadow-sm">
              3D View Available
            </div>
          </div>

          {/* Media Gallery Strip */}
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {product.images.map((img, idx) => (
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
              <span className="text-slate-500 text-sm">SKU: {product.sku}</span>
            </div>
            
            <h1 className="text-4xl font-bold text-slate-800 dark:text-white mb-2 leading-tight">{product.name}</h1>
            
            <div className="flex items-end gap-3 mb-6">
              <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-neonBlue to-neonPurple">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-lg text-slate-400 line-through mb-1">${product.originalPrice.toFixed(2)}</span>
            </div>

            {/* Variants */}
            <div className="mb-6">
              <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-3 text-sm uppercase tracking-wider">Color: <span className="text-neonBlue">{selectedColor}</span></h3>
              <div className="flex gap-3">
                <button onClick={() => setSelectedColor('Nebula White')} className={`w-12 h-12 rounded-full bg-white border-2 shadow-md transition-all ${selectedColor === 'Nebula White' ? 'border-neonBlue scale-110' : 'border-transparent'}`}></button>
                <button onClick={() => setSelectedColor('Void Black')} className={`w-12 h-12 rounded-full bg-slate-900 border-2 shadow-md transition-all ${selectedColor === 'Void Black' ? 'border-neonBlue scale-110' : 'border-transparent'}`}></button>
                <button onClick={() => setSelectedColor('Stardust Silver')} className={`w-12 h-12 rounded-full bg-slate-300 border-2 shadow-md transition-all ${selectedColor === 'Stardust Silver' ? 'border-neonBlue scale-110' : 'border-transparent'}`}></button>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-semibold text-slate-700 dark:text-slate-300 mb-3 text-sm uppercase tracking-wider">Edition</h3>
              <div className="flex gap-3">
                <button onClick={() => setSelectedSize('Standard')} className={`glass-button flex-1 ${selectedSize === 'Standard' ? 'ring-2 ring-neonPurple bg-white/90 dark:bg-white/10' : ''}`}>Standard</button>
                <button onClick={() => setSelectedSize('Creator Bundle')} className={`glass-button flex-1 ${selectedSize === 'Creator Bundle' ? 'ring-2 ring-neonPurple bg-white/90 dark:bg-white/10' : ''}`}>Creator Bundle</button>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <button className="glass-button w-full h-14 text-lg justify-center hover:bg-slate-100 dark:hover:bg-white/5">
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
                <h4 className="font-bold text-slate-800 dark:text-white">Free Next-Day Delivery</h4>
                <p className="text-sm text-slate-500">Order within 2h 45m for delivery tomorrow.</p>
              </div>
            </div>
            <div className="h-px w-full bg-slate-200/50 dark:bg-white/10"></div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-neonPurple/10 rounded-xl text-neonPurple"><RotateCcw size={24} /></div>
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white">30-Day Zero-Gravity Returns</h4>
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
              <h3 className="font-bold text-xl mb-4 text-slate-800 dark:text-white">Engineering Details</h3>
              <ul className="space-y-3">
                {product.specs.map((spec, i) => (
                  <li key={i} className="flex justify-between border-b border-white/30 dark:border-white/10 pb-2">
                    <span className="text-slate-500">{spec.label}</span> 
                    <span className="font-medium text-slate-800 dark:text-slate-200">{spec.value}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
               <h3 className="font-bold text-xl mb-4 text-slate-800 dark:text-white">In The Box</h3>
               <div className="glass-panel p-4 bg-white/40 dark:bg-white/5 border-none flex items-center gap-4">
                 <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 border border-slate-200 dark:border-slate-700">IMG</div>
                 <div>
                   <p className="font-bold text-slate-800 dark:text-white">Standard Accessories</p>
                   <p className="text-sm text-slate-500">Everything you need to get started.</p>
                 </div>
               </div>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="animate-fade-in text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-5xl font-extrabold text-slate-800 dark:text-white">4.8</div>
              <div>
                <div className="flex text-yellow-500 mb-1">
                  <Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" />
                </div>
                <p className="text-sm text-slate-500">Based on 12,450 reviews</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="glass-panel p-6 bg-white/40 dark:bg-white/5 border-none">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-neonBlue to-neonPurple rounded-full text-white flex items-center justify-center font-bold">JD</div>
                    <div>
                      <p className="font-bold text-slate-800 dark:text-white">John Doe <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full ml-2">Verified</span></p>
                      <p className="text-xs text-slate-500">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex text-yellow-500"><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /><Star size={16} fill="currentColor" /></div>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">Absolutely incredible product. The build quality and the design aesthetic perfectly match the premium feel of this site. Worth every penny.</p>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};

export default ProductPage;
