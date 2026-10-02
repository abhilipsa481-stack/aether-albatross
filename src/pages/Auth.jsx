import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export default function Auth({ onCancel }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAuth = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#020617]/90 backdrop-blur-xl flex items-center justify-center z-50 p-6">
      <div className="max-w-md w-full bg-gradient-to-b from-[#0b192c] to-[#020617] border border-amber-500/40 p-8 rounded-3xl shadow-[0_0_80px_rgba(14,165,233,0.3)] relative animate-in fade-in zoom-in duration-300">
        {onCancel && (
          <button onClick={onCancel} className="absolute top-6 right-6 text-sky-300 hover:text-white text-xl">✕</button>
        )}
        <div className="text-center mb-8">
          <div className="w-12 h-12 mx-auto rounded-full bg-gradient-to-tr from-sky-400 to-amber-400 p-[1px] mb-3 flex items-center justify-center">
            <div className="w-full h-full bg-[#020617] rounded-full flex items-center justify-center text-lg">🪶</div>
          </div>
          <h2 className="text-3xl font-serif text-amber-400 tracking-wide">Aether Albatross</h2>
          <p className="text-xs text-sky-200/70 tracking-[0.2em] uppercase mt-1">
            {isLogin ? 'Sign In to Access Dashboard' : 'Create Account to Explore'}
          </p>
        </div>

        {error && <div className="mb-4 p-3 bg-red-500/20 border border-red-500/40 text-red-200 text-xs rounded-xl text-center">{error}</div>}

        <form onSubmit={handleAuth} className="space-y-5">
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-sky-300 mb-2 font-medium">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#020617] border border-sky-400/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition"
              placeholder="name@example.com"
            />
          </div>
          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-sky-300 mb-2 font-medium">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#020617] border border-sky-400/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 transition"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold py-3.5 text-xs uppercase tracking-[0.25em] transition rounded-xl shadow-[0_0_20px_rgba(251,191,36,0.3)]">
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="text-center mt-6">
          <button 
            onClick={() => setIsLogin(!isLogin)} 
            className="text-xs text-sky-300 hover:text-amber-400 transition tracking-wider">
            {isLogin ? "Don't have an account? Create Account" : "Already have an account? Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
}