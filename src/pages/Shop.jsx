import React, { useState } from 'react';
const products = [
  
  { id: 1, name: "Aetherial Azure", category: "Unisex", type: "Oceanic Extrait", price: "$280", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnRvgNrhK_mTqB3HMQcZuvVhPG0K6VM8PAcRGISjRc6THeuOljzfgzzsJQ&s=10", description: "Inspired by high-altitude glacial winds meeting deep ocean tides.", notes: "Top: Sea Salt, Bergamot | Heart: Blue Lotus, Ambergris | Base: Cedar, White Musk" },
  { id: 2, name: "Celestial Mist", category: "Unisex", type: "Atmospheric Extract", price: "$295", image: "https://mosaitalia.in/cdn/shop/files/9AF72269-3D45-424E-B903-4C7C39A810B2.jpg?v=1786227482", description: "Light airy notes fused with rich riverbed moss and white florals.", notes: "Top: Ozone, Morning Dew | Heart: Lily of the Valley | Base: Vetiver, Amber" },
  { id: 3, name: "Starlight Current", category: "Unisex", type: "Nocturnal Elixir", price: "$310", image: "https://ikyk.in/cdn/shop/files/1_6f99ef12-bac9-44ae-9ec3-f12784c5c1a5.jpg?v=1760526057", description: "Reflections of a midnight river under a canopy of starlit skies.", notes: "Top: Star Anise, Aldehydes | Heart: Iris, Violet Leaf | Base: Sandalwood, Cashmeran" },
  { id: 4, name: "Glacial Drift", category: "Unisex", type: "Pure Essence", price: "$265", image: "https://media6.ppl-media.com/tr:h-750,w-750,c-at_max,dpr-2,q-40/static/img/product/408771/la-french-nautical-noir-unisex-perfume-100-ml-perfume-perfume-for-men-and-women-long-lasting-and-sophisticated-fragrance_1_display_1766387359_11ac0828.jpg", description: "Crisp glacial water accords blended with silver pine needles.", notes: "Top: Frozen Mint, Pine | Heart: Crystal Water, Sage | Base: Fir Balsam, Moss" },
  { id: 5, name: "River Zephyr", category: "Unisex", type: "Cologne Intense", price: "$250", image: "https://kperfume.in/cdn/shop/files/Noir00010.webp?v=1780337514&width=533", description: "A gentle breeze passing over flowing river banks at dawn.", notes: "Top: Lemon Blossom, Neroli | Heart: River Reed, Green Tea | Base: White Cedar" },
  { id: 6, name: "Aether Tide", category: "Unisex", type: "Grand Reserve", price: "$330", image: "https://m.media-amazon.com/images/I/71SSzRLdSfL._AC_UF350,350_QL80_.jpg", description: "Deep oceanic mineral notes intertwined with high-altitude ozone.", notes: "Top: Sea Mineral, Ozone | Heart: Blue Hyacinth | Base: Ambergris, Driftwood" },
  { id: 7, name: "Zenith Stream", category: "Unisex", type: "Extrait de Parfum", price: "$315", image: "https://bellavitaorganic.com/cdn/shop/files/Fresh_100_ml.jpg?v=1728034537&width=1000", description: "At the peak of the mountain where rivers begin their descent.", notes: "Top: Juniper Berry, Grapefruit | Heart: Alpine Flower | Base: Clear Wood, Musk" },
  { id: 8, name: "Ethereal Flow", category: "Unisex", type: "Signature Blend", price: "$290", image: "https://rukminim3.flixcart.com/image/480/480/xif0q/perfume/x/h/u/50-yuva-oud-unisex-perfume-extrait-de-parfum-yuvva-luxury-men-original-imahnfghyawky2dy.jpeg?q=80", description: "Harmonious balance of sky clarity and river fluidity.", notes: "Top: Aquzone, Mandarin | Heart: Water Lily | Base: White Amber, Vetiver" },
  { id: 9, name: "Horizon Whisper", category: "Unisex", type: "Nocturnal Elixir", price: "$305", image: "https://images.meesho.com/images/products/1044491892/fjn9l_512.webp?width=512", description: "Soft whispers of wind across the distant water horizon.", notes: "Top: Pear, Ambrette | Heart: Iris, Orris Root | Base: Musk, Amber" },
  { id: 10, name: "Albatross Sky", category: "Unisex", type: "Limited Edition", price: "$350", image: "https://www.frenchessence.com/cdn/shop/files/SQUARE-URBAN-6.jpg?v=1783768282", description: "The signature scent embodying free flight over boundless waters.", notes: "Top: Sky Air, Cardamom | Heart: Blue Sage | Base: Rare Woods, Leather" },

 
  { id: 11, name: "Gilded Albatross", category: "Men", type: "Golden Reserve", price: "$340", image: "https://images-static.nykaa.com/media/catalog/product/0/7/07334556293708700455ab_ab5.jpg?tr=w-500", description: "A majestic blend of warm golden resins and rare oceanic woods.", notes: "Top: Saffron, Golden Amber | Heart: Orris, Jasmine | Base: Oud, Vanilla Bean" },
  { id: 12, name: "Titanium Stream", category: "Men", type: "Power Extrait", price: "$290", image: "https://assets.myntassets.com/w_200,q_50,,dpr_3,fl_progressive,f_webp/assets/images/2026/SEPTEMBER/9/3f0616ada18a4be4bd8d27f022f8f9f4.jpg", description: "Strong, commanding river currents with metallic freshness.", notes: "Top: Black Pepper, Bergamot | Heart: Metallic Accord, Lavender | Base: Cedar, Patchouli" },
  { id: 13, name: "Abyssal Storm", category: "Men", type: "Intense Parfum", price: "$320", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPak1H27CEr7clqjc35UCEl6wLsahLPHD8QSMFugqXyNcf5VAvVtmp140&s=10", description: "Dark stormy skies over raging midnight ocean trenches.", notes: "Top: Cardamom, Sea Salt | Heart: Dark Cypress, Incense | Base: Amber, Leather" },
  { id: 14, name: "Alpine Current", category: "Men", type: "Sport Reserve", price: "$270", image: "https://assets.myntassets.com/w_412,q_50,,dpr_3,fl_progressive,f_webp/assets/images/2026/JULY/10/JgC0t2Ad_105e1730867c4e3182d606d4665aa499.jpg", description: "Invigorating high-altitude river splash for the active gentleman.", notes: "Top: Grapefruit, Mint | Heart: Marine Accord | Base: Vetiver, Oakmoss" },
  { id: 15, name: "Sovereign Sky", category: "Men", type: "Grand Reserve", price: "$360", image: "https://khusboi.in/uploads/images/202606/img_1920x_6a38f0b65485b7-57816152-71599537.jpg", description: "Regal presence inspired by high-flying altitude and power.", notes: "Top: Clary Sage, Mandarin | Heart: Nutmeg, Tobacco | Base: Agarwood, Amber" },
  { id: 16, name: "Steel Horizon", category: "Men", type: "Extrait de Parfum", price: "$310", image: "https://p16-oec-general-useast5.ttcdn-us.com/tos-useast5-i-omjb5zjo8w-tx/45efcd38744b494e9df3fe43f3fa712a~tplv-fhlh96nyum-resize-webp:800:800.webp?dr=12190&t=555f072d&ps=933b5bde&shp=8dbd94bf&shcp=948674b7&idc=useast5&from=2378011839", description: "Sleek modern masculinity meeting timeless river depths.", notes: "Top: Lemon, Ozonic Note | Heart: Geranium, Cedar | Base: Vetiver, Musk" },
  { id: 17, name: "Onyx Tide", category: "Men", type: "Nocturnal Elixir", price: "$335", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJO18KGl5tyUPpYTp_hMm-l4hXSZjlhKUYSgqJKcsQK0i3J2zi2OslYe_D&s=10", description: "Mysterious dark waters under moonless mountain skies.", notes: "Top: Black Basil, Grapefruit | Heart: Pine Bark, Smoke | Base: Dark Oud, Leather" },
  { id: 18, name: "Vanguard Air", category: "Men", type: "Atmospheric Extract", price: "$285", image: "https://rukminim3.flixcart.com/image/480/640/xif0q/perfume/t/q/w/-original-imahzwffbprtzdww.jpeg?q=90", description: "Leading the charge with sharp altitude freshness.", notes: "Top: Bergamot, Rosemary | Heart: Sea Water, Geranium | Base: Cedarwood, Amber" },
  { id: 19, name: "Raging Albatross", category: "Men", type: "Signature Blend", price: "$345", image: "https://goldenauraperfumes.com/wp-content/uploads/2024/05/Beloved-bottle-%E2%80%93-luxury-extrait-de-parfum-for-men-in-India-500x500.webp", description: "Fierce energy of winds crossing turbulent waters.", notes: "Top: Pink Pepper, Lemon | Heart: Marine Salt, Cedar | Base: Patchouli, Amber" },
  { id: 20, name: "Apex River", category: "Men", type: "Limited Edition", price: "$375", image: "https://assets.myntassets.com/w_412,q_50,,dpr_3,fl_progressive,f_webp/assets/images/2026/JANUARY/22/b2KN3FSC_77e10843ba974a52ac42b917bce9c4c6.jpg", description: "The ultimate peak expression of strength and fluidity.", notes: "Top: Bergamot, Elemi | Heart: Blue Iris, Cashmere | Base: Rich Oud, Musk" },

  
  { id: 21, name: "Midnight Horizon", category: "Women", type: "Nocturnal Elixir", price: "$310", image: "https://khalisperfumes.com/cdn/shop/files/ILLUSION.jpg?v=1742368150", description: "Capturing the serene mystery of starry skies over silent midnight waters.", notes: "Top: Black Currant, Star Anise | Heart: Midnight Orchid, Smoke | Base: Leather, Patchouli" },
  { id: 22, name: "Celestial Blossom", category: "Women", type: "Floral Extrait", price: "$290", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs3WJpmIy4NTojcCuo-I2PAQ0xtRjzPp4sAPVnnSSFP329yqR0rNCBj_B9&s=10", description: "Blooming night flowers kissed by high-altitude morning mist.", notes: "Top: Bergamot, Pear Blossom | Heart: Night Jasmine, Peony | Base: White Musk, Vanilla" },
  { id: 23, name: "River Opal", category: "Women", type: "Grand Reserve", price: "$330", image: "https://i.pinimg.com/videos/thumbnails/originals/aa/79/99/aa7999c8f712d5bd7fc4adbb852f3dfd.0000000.jpg", description: "Iridescent shimmer of sunlight on pristine river ripples.", notes: "Top: Mandarin, Watermelon | Heart: Lotus, Magnolia | Base: Sandalwood, Amber" },
  { id: 24, name: "Azure Goddess", category: "Women", type: "Signature Blend", price: "$315", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLoIdZRztJimXIroxiv0wJb96cgtcJVLc44XAbJYFGwT2S3-sF_7gkln8&s=10", description: "Graceful elegance inspired by endless blue skies and tranquil bays.", notes: "Top: Bergamot, Water Accord | Heart: Rose, Freesia | Base: Cedar, Soft Musk" },
  { id: 25, name: "Starlit Cascade", category: "Women", type: "Extrait de Parfum", price: "$340", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5cXSnFvYNhZ82n2E4ap6EWsU94-bdFPf8yYaKedp2zYgH3IsYSHvIy-ts&s=10", description: "Waterfalls glowing under starlight and ethereal moonlight.", notes: "Top: Peach, Dewdrop | Heart: Tuberose, Jasmine | Base: Amber, Cashmere Wood" },
  { id: 26, name: "Silver Albatross", category: "Women", type: "Luxury Essence", price: "$350", image: "https://images.stockcake.com/public/c/c/d/ccdfd7d0-f160-4d67-abfd-15f0b1505d2f_large/forest-perfume-bottle-stockcake.jpg", description: "Silky smoothness of flight gliding across crystal-clear water.", notes: "Top: Aldehydes, Pear | Heart: Iris, Lily | Base: White Amber, Vanilla" },
  { id: 27, name: "Lunar Stream", category: "Women", type: "Nocturnal Elixir", price: "$300", image: "https://cdn.shopify.com/s/files/1/2953/8806/files/Izmir-Mobile-Banner.webp", description: "Moonbeams reflecting off winding mountain streams.", notes: "Top: Neroli, Bergamot | Heart: Orange Blossom, Rose | Base: Benzoin, Musk" },
  { id: 28, name: "Ethereal Pearl", category: "Women", type: "Atmospheric Extract", price: "$285", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS45dwZXiMklbudLR0DIW0X0aRHfW5S3mLAyiQ0Nv0to2r0szGQnOh17Y4&s=10", description: "Pure pearl elegance born from high-altitude atmospheric purity.", notes: "Top: Freesia, Green Apple | Heart: Lotus, Peony | Base: Cedarwood, Musk" },
  { id: 29, name: "Mystic Current", category: "Women", type: "Intense Parfum", price: "$325", image: "https://lovecraftgift.com/cdn/shop/files/Personalized_Ramsons_Scent_Of_Wonder_perfume_with_custom_name.jpg?v=1779273894&width=1780", description: "Enchanting depths of hidden forest rivers at dusk.", notes: "Top: Plum, Black Currant | Heart: Orchid, Iris | Base: Vanilla, Patchouli" },
  { id: 30, name: "Aura of Albatross", category: "Women", type: "Limited Edition", price: "$380", image: "https://imaraperfumes.com/cdn/shop/files/flora-woman-luxury-perfume-for-women-50-ml-50ml-imara-perfumes-258000.jpg?v=1715418002", description: "The ultimate feminine masterpiece celebrating sky and river harmony.", notes: "Top: Mandarin, Bergamot | Heart: Rose de Mai, Jasmine | Base: Rare Oud, Amber" }
];

export default function Shop({ cart, setCart, wishlist, setWishlist }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (product) => {
    setCart([...cart, product]);
    alert(`${product.name} added to cart successfully.`);
  };

  const toggleWishlist = (product) => {
    if (wishlist.some(item => item.id === product.id)) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <div className="space-y-12 py-6">
    
<div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
  <span className="text-xs uppercase tracking-[0.5em] text-amber-300 mb-4 block font-semibold animate-pulse drop-shadow">
    ✨ Sanctuary of Scents ✨
  </span>
  
  <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
    The <span className="text-amber-400 italic">Albatross Vault</span> of Timeless Fragrances
  </h2>
  
  <p className="text-sky-100/90 text-sm md:text-base leading-relaxed font-light">
    Journey through our exquisite curation of ethereal extractions. Seamlessly filter between Men, Women, and Unisex creations designed to capture eternal romance in every bottle.
  </p>

        
      
        <div className="flex justify-center space-x-4 pt-6">
          {['All', 'Men', 'Women', 'Unisex'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 text-xs uppercase tracking-[0.25em] transition rounded-full border ${
                selectedCategory === cat 
                  ? 'bg-amber-400 text-slate-950 border-amber-400 font-bold shadow-lg' 
                  : 'border-sky-400/30 text-sky-200 hover:border-amber-400/60 bg-[#020617]/50'
              }`}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => {
          const isWishlisted = wishlist.some(item => item.id === product.id);
          return (
            <div key={product.id} className="bg-[#0b192c]/80 border border-sky-400/20 p-6 rounded-3xl backdrop-blur-xl flex flex-col justify-between hover:border-amber-500/50 transition-all duration-500 shadow-2xl group">
              <div>
                <div className="h-64 rounded-2xl overflow-hidden border border-sky-400/20 mb-6 relative group-hover:scale-[1.02] transition duration-500">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b192c] via-transparent to-transparent"></div>
                </div>

                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] text-amber-400 uppercase tracking-[0.25em] font-semibold">{product.type}</span>
                  <span className="text-[10px] px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-200 uppercase tracking-widest">{product.category}</span>
                </div>
                
                <h3 className="text-2xl font-serif text-white mb-2">{product.name}</h3>
                <p className="text-xs text-sky-100/70 font-light leading-relaxed mb-6">{product.description}</p>
                <div className="text-2xl font-serif text-amber-300 font-medium mb-6">{product.price}</div>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={() => setSelectedProduct(product)}
                  className="w-full border border-sky-400/40 text-sky-200 hover:bg-sky-500/20 py-3 text-xs uppercase tracking-[0.2em] transition rounded-xl font-medium">
                  View Olfactory Notes
                </button>

                <div className="flex space-x-3">
                  <button 
                    onClick={() => addToCart(product)}
                    className="flex-1 bg-amber-400 hover:bg-amber-300 text-slate-950 py-3 text-xs uppercase tracking-[0.2em] font-bold transition rounded-xl shadow-lg">
                    Add to Cart
                  </button>
                  <button 
                    onClick={() => toggleWishlist(product)}
                    className={`px-4 border transition rounded-xl ${isWishlisted ? 'border-amber-400 bg-amber-400/20 text-amber-400' : 'border-sky-400/30 text-sky-300 hover:text-white'}`}>
                    ♥
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

     
      {selectedProduct && (
        <div className="fixed inset-0 bg-[#020617]/90 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-[#0b192c] border border-amber-500/50 max-w-lg w-full p-8 rounded-3xl relative shadow-[0_0_80px_rgba(251,191,36,0.15)]">
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-6 right-6 text-sky-300 hover:text-white text-xl">
              ✕
            </button>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-amber-400 uppercase tracking-[0.25em] font-semibold">{selectedProduct.type}</span>
              <span className="text-xs px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-200 uppercase">{selectedProduct.category}</span>
            </div>
            <h3 className="text-3xl font-serif text-white mb-3">{selectedProduct.name}</h3>
            <p className="text-sm text-sky-100/80 font-light mb-6 leading-relaxed">{selectedProduct.description}</p>
            
            <div className="bg-[#020617] p-5 rounded-2xl border border-sky-400/20 mb-6 shadow-inner">
              <h4 className="text-xs uppercase tracking-[0.2em] text-amber-400 mb-2 font-semibold">Olfactory Pyramid & Notes</h4>
              <p className="text-xs text-sky-200 leading-relaxed font-light">{selectedProduct.notes}</p>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-3xl font-serif text-amber-300 font-medium">{selectedProduct.price}</span>
              <button 
                onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); }}
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 px-8 py-3 text-xs uppercase tracking-[0.2em] font-bold transition rounded-xl shadow-lg">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}