import { Trash2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  return (
    <div className="page-wrapper container animate-fade-in">
      <h1 className="section-title" style={{ textAlign: 'left', marginTop: '2rem' }}>Your Cart</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
        <div className="glass-panel" style={{ padding: '2rem' }}>
          {[1, 2].map((item) => (
            <div key={item} style={{ display: 'flex', gap: '2rem', paddingBottom: '2rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-color)' }}>
              <img 
                src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=200&q=80" 
                alt="Product" 
                style={{ width: '120px', height: '120px', objectFit: 'cover', borderRadius: '8px' }} 
              />
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Sony WH-1000XM5</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Color: Black</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'var(--bg-secondary)', padding: '0.25rem 1rem', borderRadius: '4px' }}>
                    <button style={{ color: 'var(--text-primary)' }}>-</button>
                    <span>1</span>
                    <button style={{ color: 'var(--text-primary)' }}>+</button>
                  </div>
                  <div style={{ fontWeight: '600', fontSize: '1.25rem' }}>$348.00</div>
                </div>
              </div>
              <button style={{ color: 'var(--accent-secondary)' }}><Trash2 size={20} /></button>
            </div>
          ))}
        </div>
        
        <div className="glass-panel" style={{ padding: '2rem', height: 'fit-content' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Order Summary</h2>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
            <span>Subtotal</span>
            <span style={{ color: 'var(--text-primary)' }}>$696.00</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--text-secondary)' }}>
            <span>Shipping</span>
            <span style={{ color: 'var(--text-primary)' }}>Free</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
            <span>Tax</span>
            <span style={{ color: 'var(--text-primary)' }}>$55.68</span>
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--border-color)', fontSize: '1.25rem', fontWeight: '700' }}>
            <span>Total</span>
            <span className="gradient-text">$751.68</span>
          </div>
          
          <button className="btn btn-primary" style={{ width: '100%', padding: '1rem' }}>
            Proceed to Checkout <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
