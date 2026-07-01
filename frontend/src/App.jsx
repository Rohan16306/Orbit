import React, { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

// Lazy load the heavy 3D background component
const Background3D = lazy(() => import('./components/Background3D'))

// Lazy load page components
const HomePage = lazy(() => import('./pages/HomePage'))
const ProductPage = lazy(() => import('./pages/ProductPage'))
const CartPage = lazy(() => import('./pages/CartPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const SignUpPage = lazy(() => import('./pages/SignUpPage'))
const Dashboard = lazy(() => import('./pages/Dashboard'))
const CategoriesPage = lazy(() => import('./pages/CategoriesPage'))

const OrbitLoader = () => (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0514]">
    <div className="relative flex items-center justify-center h-16 w-16">
      {/* Outer Neon Orbit Ring */}
      <div className="absolute animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00f0ff] filter drop-shadow-[0_0_8px_#00f0ff]"></div>
      {/* Inner Neon Orbit Ring (requires custom spin or just standard spin if animation not defined) */}
      <div className="absolute animate-spin rounded-full h-6 w-6 border-l-2 border-r-2 border-[#a777e3] filter drop-shadow-[0_0_8px_#a777e3]"></div>
    </div>
    <span className="mt-4 text-[#f0f4f8] text-sm tracking-widest font-sans uppercase opacity-80 animate-pulse">
      Initializing System...
    </span>
  </div>
);

function App() {
  return (
    <div className="relative min-h-screen font-sans">
      <Suspense fallback={null}>
        <Background3D />
      </Suspense>
      
      <div className="relative z-10 w-full h-full">
        <Navbar />
        <Suspense fallback={<OrbitLoader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignUpPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/categories" element={<CategoriesPage />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  )
}

export default App
