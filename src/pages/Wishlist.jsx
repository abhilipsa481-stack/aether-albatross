import React from 'react';

export default function Wishlist({ wishlist, setWishlist, cart, setCart }) {
  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  const moveToCart = (product) => {
    setCart([...cart, product]);
    setWishlist(wishlist.filter(item => item.id !== product.id));
    alert(`${product.name} moved to cart!`);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-serif text-amber-400 mb-2">Your Wishlist</h2>
        <p className="text-sm text-slate-400">Curated fragrances saved for your collection.</p>
      </div>

      {wishlist.length === 0 ? (
        <div className="text-center py-16 bg-slate-900/40 border border-sky-500/20 rounded-xl">
          <p className="text-slate-400 text-sm mb-4">Your wishlist is empty.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {wishlist.map((item) => (
            <div key={item.id} className="bg-slate-900/60 border border-sky-500/20 p-6 rounded-xl backdrop-blur-md flex flex-col justify-between">
              <div>
                <div className="text-4xl mb-4 p-4 bg-slate-950/50 rounded-lg inline-block border border-slate-800">{item.image}</div>
                <h3 className="text-xl font-serif text-white">{item.name}</h3>
                <span className="text-xs text-amber-400 uppercase tracking-widest">{item.category}</span>
                <p className="text-sm text-slate-300 mt-2">{item.price}</p>
              </div>
              <div className="flex space-x-3 mt-6">
                <button 
                  onClick={() => moveToCart(item)}
                  className="flex-1 bg-amber-400 hover:bg-amber-500 text-slate-950 py-2.5 text-xs uppercase tracking-widest font-medium transition">
                  Move to Cart
                </button>
                <button 
                  onClick={() => removeFromWishlist(item.id)}
                  className="px-4 border border-red-500/30 text-red-400 hover:bg-red-500/10 text-xs uppercase tracking-widest transition">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}