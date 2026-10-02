import React from 'react';

export default function Home({ onExplore }) {
  return (
    <div className="space-y-20 py-8 overflow-hidden relative">
     
      <div className="relative rounded-[3rem] overflow-hidden p-10 md:p-24 text-center border border-amber-400/50 bg-transparent backdrop-blur-[6px] shadow-[0_0_150px_rgba(251,191,36,0.2)]">
        
        
        <div className="absolute inset-0 z-0">
          <img 
            src="https://static.vecteezy.com/system/resources/thumbnails/054/877/566/small/majestic-waved-albatross-gliding-over-ocean-waves-photo.jpg" 
            alt="Majestic Waved Albatross gliding over ocean waves" 
            className="w-full h-full object-cover opacity-90 scale-105 filter brightness-65 contrast-155"
          />
         
          <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/50 via-[#0f172a]/65 to-[#020617]/90 backdrop-blur-[2px]"></div>
        </div>

       
        <div className="relative z-10 max-w-15xl mx-auto">
          <span className="text-xs uppercase tracking-[0.4em] text-amber-500 mb-9 block font-extrabold  animate-pulse drop-shadow-[0_1px_15px_rgba(251,191,36,0.6)]">
            ✨ The Eternal Romance of Sky & Crystalline Tides ✨
          </span>
          
          <h1 className="text-4xl md:text-5xl font-serif tracking-wide text-white mb-8 leading-tight drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
            Where <span className="text-sky-300 italic">Albatross Wings</span> Meet the <span className="text-amber-400 italic">Tears of Endless Love</span>
          </h1>
          
          <p className="max-w-2xl mx-auto text-sky-100/95 text-xl md:text-base mb-12 italic leading-relaxed font-extrabold drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Like the endless devotion of the ocean waves kissing the horizon, every drop of Albatross is an unspoken love story carved in the winds of time. Pure, eternal, and deeply enchanting.
          </p>

          <button 
            onClick={onExplore}
            className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-bold px-14 py-4 text-xs uppercase tracking-[0.3em] transition shadow-[0_0_40px_rgba(251,191,36,0.7)] rounded-full transform hover:-translate-y-1">
            Explore Collection (Sign In / Register)
          </button>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 relative z-10">
        
       
        <div className="relative rounded-3xl overflow-hidden border border-amber-400/40 p-8 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-amber-400 hover:scale-[1.02] transition duration-500 group">
         
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&q=80&w=800" 
              alt="Luxury Perfume Bottle" 
              className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/90 via-[#0f172a]/80 to-[#020617]/95 backdrop-blur-[3px]"></div>
          </div>
        
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-2xl mb-6 shadow-inner group-hover:bg-amber-400/20 transition">🌌</div>
            <h3 className="text-xl font-serif text-amber-300 mb-3">Flight of the Sky</h3>
            <p className="text-xs text-sky-100/90 leading-relaxed font-light">Soaring high above the endless blue, carrying a celestial essence that immortalizes your purest romantic moments.</p>
          </div>
        </div>

        
        <div className="relative rounded-3xl overflow-hidden border border-amber-400/40 p-8 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-amber-400 hover:scale-[1.02] transition duration-500 group">
        
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800" 
              alt="Perfume in Water" 
              className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/90 via-[#0f172a]/80 to-[#020617]/95 backdrop-blur-[3px]"></div>
          </div>
         
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-2xl mb-6 shadow-inner group-hover:bg-amber-400/20 transition">🌊</div>
            <h3 className="text-xl font-serif text-amber-300 mb-3">Whispers of the Tides</h3>
            <p className="text-xs text-sky-100/90 leading-relaxed font-light">Flowing currents carrying deep aquatic memories, keeping the warmth of first love alive through every gentle ripple.</p>
          </div>
        </div>

       
        <div className="relative rounded-3xl overflow-hidden border border-amber-400/40 p-8 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:border-amber-400 hover:scale-[1.02] transition duration-500 group">
         
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1583445013765-46c20c4a6772?auto=format&fit=crop&q=80&w=800" 
              alt="Golden Luxury Perfume" 
              className="w-full h-full object-cover opacity-40 group-hover:scale-110 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/90 via-[#0f172a]/80 to-[#020617]/95 backdrop-blur-[3px]"></div>
          </div>
         
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-2xl mb-6 shadow-inner group-hover:bg-amber-400/20 transition">⚜️</div>
            <h3 className="text-xl font-serif text-amber-300 mb-3">Boundless Passion</h3>
            <p className="text-xs text-sky-100/90 leading-relaxed font-light">A single fragrant mist that transforms ordinary seconds into an unforgettable romance written among the stars.</p>
          </div>
        </div>

      </div>
    </div>
  );
}