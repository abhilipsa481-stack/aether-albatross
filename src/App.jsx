import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';

export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState('home');
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [showAuthModal, setShowAuthModal] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        setShowAuthModal(false);
        // Jaise hi user login ya create account kare, use dashboard/shop par bhej dein
        setCurrentView('shop');
      }
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020617] flex items-center justify-center text-amber-400 tracking-widest font-serif">
        LOADING AETHER ALBATROSS...
      </div>
    );
  }

  // Explore button click handler: Agar logged in nahi hai toh Login/Create account modal khulega
  const handleExploreClick = () => {
    if (!user) {
      setShowAuthModal(true);
    } else {
      setCurrentView('shop');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#091b33] to-[#020617] text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Luxury Navbar */}
      <nav className="border-b border-amber-500/20 bg-[#020617]/90 backdrop-blur-xl sticky top-0 z-50 px-8 py-5 flex justify-between items-center shadow-2xl">
        <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => setCurrentView('home')}>
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-sky-400 to-amber-400 p-[1px] flex items-center justify-center">
            <div className="w-full h-full bg-[#020617] rounded-full flex items-center justify-center text-xs">🪶</div>
          </div>
          <span className="text-xl tracking-[0.25em] font-serif text-amber-400 font-medium">AETHER ALBATROSS</span>
        </div>
        <div className="flex space-x-8 text-xs tracking-[0.2em] uppercase font-medium">
          <button onClick={() => setCurrentView('home')} className={`hover:text-amber-400 transition ${currentView === 'home' ? 'text-amber-400 border-b-2 border-amber-400 pb-1' : 'text-slate-300'}`}>Home</button>
          <button onClick={handleExploreClick} className={`hover:text-amber-400 transition ${currentView === 'shop' ? 'text-amber-400 border-b-2 border-amber-400 pb-1' : 'text-slate-300'}`}>Dashboard / Shop</button>
          <button onClick={() => { if (!user) setShowAuthModal(true); else setCurrentView('wishlist'); }} className={`hover:text-amber-400 transition ${currentView === 'wishlist' ? 'text-amber-400 border-b-2 border-amber-400 pb-1' : 'text-slate-300'}`}>Wishlist ({wishlist.length})</button>
          <button onClick={() => { if (!user) setShowAuthModal(true); else setCurrentView('cart'); }} className={`hover:text-amber-400 transition ${currentView === 'cart' ? 'text-amber-400 border-b-2 border-amber-400 pb-1' : 'text-slate-300'}`}>Cart ({cart.length})</button>
        </div>
        {user ? (
          <button 
            onClick={() => { signOut(auth); setCurrentView('home'); }} 
            className="text-[10px] tracking-[0.25em] border border-amber-500/40 px-5 py-2.5 hover:bg-amber-500 hover:text-slate-950 transition rounded-none uppercase font-semibold text-amber-300">
            Sign Out
          </button>
        ) : (
          <button 
            onClick={() => setShowAuthModal(true)} 
            className="text-[10px] tracking-[0.25em] bg-amber-400 hover:bg-amber-300 text-slate-950 px-6 py-2.5 transition rounded-full uppercase font-bold shadow-md">
            Sign In / Register
          </button>
        )}
      </nav>

      {/* Main View Renderer */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {currentView === 'home' && <Home onExplore={handleExploreClick} />}
        {currentView === 'shop' && user && <Shop cart={cart} setCart={setCart} wishlist={wishlist} setWishlist={setWishlist} />}
        {currentView === 'shop' && !user && (
          <div className="text-center py-20 space-y-6">
            <h2 className="text-3xl font-serif text-amber-400">Authentication Required</h2>
            <p className="text-sky-200 text-sm">Please sign in or create an account to access the dashboard and explore products.</p>
            <button onClick={() => setShowAuthModal(true)} className="bg-amber-400 text-slate-950 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">Sign In / Create Account</button>
          </div>
        )}
        {currentView === 'cart' && user && <Cart cart={cart} setCart={setCart} />}
        {currentView === 'wishlist' && user && <Wishlist wishlist={wishlist} setWishlist={setWishlist} cart={cart} setCart={setCart} />}
      </main>

      {/* Auth Modal Popup for Login / Create Account */}
      {showAuthModal && <Auth onCancel={() => setShowAuthModal(false)} />}
    </div>
  );
}