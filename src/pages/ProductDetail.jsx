import React, { useState } from 'react';

export default function ProductDetail({ product, onAddToCart, onAddToWishlist, setCurrentPage }) {
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#020c1b] text-slate-100 flex flex-col items-center justify-center">
        <p className="text-slate-400 mb-4">No product selected.</p>
        <button 
          onClick={() => setCurrentPage('shop')}
          className="bg-amber-500 text-slate-950 px-6 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020c1b] text-slate-100 py-16 px-6 lg:px-20">
      
      <button 
        onClick={() => setCurrentPage('shop')}
        className="text-amber-400 text-xs uppercase tracking-widest mb-8 hover:underline flex items-center space-x-2"
      >
        <span>← Back to Catalog</span>
      </button>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
      
        <div className="relative bg-[#0a192f] border border-amber-500/20 rounded-2xl overflow-hidden shadow-2xl p-6 flex items-center justify-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-[450px] object-cover rounded-xl"
          />
          <span className="absolute top-8 left-8 bg-[#020c1b]/80 backdrop-blur-md text-amber-400 text-xs px-4 py-1.5 rounded-full uppercase tracking-widest border border-amber-500/30">
            {product.category}
          </span>
        </div>

       
        <div>
          <div className="flex items-center space-x-2 text-amber-400 text-sm tracking-widest mb-2">
            <span>★ {product.rating}</span>
            <span>•</span>
            <span>Exquisite Extrait</span>
          </div>

          <h1 className="font-serif text-3xl lg:text-4xl font-bold text-slate-100 mb-4">
            {product.name}
          </h1>

          <p className="text-amber-400 font-serif text-2xl font-bold mb-6">
            ${product.price}
          </p>

          <p className="text-slate-300 text-sm leading-relaxed mb-8">
            {product.description}
          </p>

         
          {product.notes && (
            <div className="bg-[#0a192f] border border-amber-500/20 rounded-xl p-5 mb-8 space-y-3">
              <h3 className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-3">Olfactory Pyramid</h3>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div>
                  <span className="block text-slate-400 uppercase tracking-wider mb-1">Top</span>
                  <span className="text-slate-200">{product.notes.top}</span>
                </div>
                <div>
                  <span className="block text-slate-400 uppercase tracking-wider mb-1">Heart</span>
                  <span className="text-slate-200">{product.notes.heart}</span>
                </div>
                <div>
                  <span className="block text-slate-400 uppercase tracking-wider mb-1">Base</span>
                  <span className="text-slate-200">{product.notes.base}</span>
                </div>
              </div>
            </div>
          )}

         
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center border border-amber-500/30 rounded-lg bg-[#0a192f]">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-4 py-2.5 text-amber-400 hover:bg-amber-500/10 transition-colors"
              >
                -
              </button>
              <span className="px-4 py-2.5 text-slate-100 text-sm font-bold">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-4 py-2.5 text-amber-400 hover:bg-amber-500/10 transition-colors"
              >
                +
              </button>
            </div>

            <button 
              onClick={() => onAddToCart({ ...product, quantity })}
              className="flex-1 bg-amber-500 text-slate-950 font-bold py-3 px-6 rounded-lg uppercase tracking-wider text-xs hover:bg-amber-400 transition-all shadow-lg"
            >
              Add to Cart • ${(product.price * quantity)}
            </button>
          </div>

          <button 
            onClick={() => onAddToWishlist(product)}
            className="w-full border border-amber-500/40 text-amber-400 py-3 rounded-lg text-xs font-semibold uppercase tracking-widest hover:bg-amber-500/10 transition-colors"
          >
            ♥ Add to Wishlist
          </button>

        </div>

      </div>

    </div>
  );
}