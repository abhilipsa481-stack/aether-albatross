import React from 'react';

export default function Cart({ cart, setCart }) {
  const removeFromCart = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  const totalPrice = cart.reduce((sum, item) => {
    const num = parseFloat(item.price.replace('$', ''));
    return sum + num;
  }, 0);

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="text-center">
        <h2 className="text-3xl font-serif text-amber-400 mb-2">Your Shopping Cart</h2>
        <p className="text-sm text-slate-400">Review your selected luxury fragrances.</p>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-16 bg-slate-900/40 border border-sky-500/20 rounded-xl">
          <p className="text-slate-400 text-sm mb-4">Your cart is currently empty.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item, index) => (
            <div key={index} className="bg-slate-900/60 border border-sky-500/20 p-6 rounded-xl flex justify-between items-center backdrop-blur-md">
              <div className="flex items-center space-x-4">
                <span className="text-3xl bg-slate-950 p-3 rounded-lg border border-slate-800">{item.image}</span>
                <div>
                  <h3 className="text-lg font-serif text-white">{item.name}</h3>
                  <span className="text-xs text-amber-400 uppercase tracking-widest">{item.category}</span>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <span className="text-lg font-semibold text-amber-300">{item.price}</span>
                <button 
                  onClick={() => removeFromCart(index)}
                  className="text-xs text-red-400 hover:text-red-300 uppercase tracking-widest border border-red-500/30 px-3 py-1.5 transition">
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="bg-slate-900/80 border border-amber-500/40 p-6 rounded-xl flex justify-between items-center mt-6">
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-widest block">Total Amount</span>
              <span className="text-2xl font-serif text-amber-400">${totalPrice.toFixed(2)}</span>
            </div>
            <button 
              onClick={() => alert("Checkout flow coming soon!")}
              className="bg-amber-400 hover:bg-amber-500 text-slate-950 px-8 py-3 text-xs uppercase tracking-widest font-semibold transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}