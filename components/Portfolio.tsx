
import React, { useState, useEffect } from 'react';
import { Eye, Filter, ArrowRight, Sparkles, Zap, Camera } from 'lucide-react';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [animatedCards, setAnimatedCards] = useState<Set<number>>(new Set());

  // Extract unique categories from portfolio items
  const portfolioItems = [
    {
      id: 1,
      category: 'REAL ESTATE',
      title: 'Luxury Villa Enhancement',
      image: '../src/assets/real after second.jpg',
      description: 'HDR processing and sky replacement for stunning property showcase',
      tags: ['HDR', 'Sky Replacement', 'Color Grading']
    },
    {
      id: 2,
      category: 'PORTRAIT',
      title: 'Professional Product Enhancement',
      image: '../src/assets/Motto brand shoot_001.jpg',
      description: 'Clean background removal for professional e-commerce listings',
      tags: ['Background Removal', 'Color Correction', 'Product Enhancement']
    },
    {
      id: 3,
      category: 'HDR',
      title: 'Professional HDR Processing',
      image: '../src/assets/hdr aft.jpg',
      description: 'Natural HDR enhancement with perfect lighting balance',
      tags: ['HDR Processing', 'Lighting', 'Dynamic Range']
    },
    {
      id: 4,
      category: 'AERIAL PHOTOS',
      title: 'Aerial Photography Enhancement',
      image: '../src/assets/top aft.jpg',
      description: 'Professional aerial photo editing and color grading',
      tags: ['Aerial Photography', 'Color Grading', 'Landscape']
    },
    {
      id: 5,
      category: 'DAY TO DUSK',
      title: 'Day to Dusk Conversion',
      image: '../src/assets/day aft.jpg',
      description: 'Professional day to dusk transformation for real estate',
      tags: ['Day to Dusk', 'Real Estate', 'Lighting Effects']
    },
    {
      id: 6,
      category: '360 PHOTOS',
      title: '360 Photo Enhancement',
      image: '../src/assets/360 aft.jpg',
      description: '360-degree photo editing and stitching services',
      tags: ['360 Photography', 'Panoramic', 'Virtual Tours']
    },
    {
      id: 7,
      category: 'TWILIGHT',
      title: 'Real Twilight Enhancement',
      image: '../src/assets/tiwilight.jpg',
      description: 'Magical twilight hour photography enhancement',
      tags: ['Twilight', 'Golden Hour', 'Atmospheric']
    },
    {
      id: 8,
      category: 'SINGLE IMAGES',
      title: 'Single Image Enhancement',
      image: '../src/assets/single bef.jpg',
      description: 'Professional single image retouching and enhancement',
      tags: ['Retouching', 'Enhancement', 'Professional']
    },
    {
      id: 9,
      category: 'FLASH AMBIENT',
      title: 'Flash Ambient Blending',
      image: '../src/assets/flash aft.jpg',
      description: 'Perfect flash and ambient light blending techniques',
      tags: ['Flash Photography', 'Ambient Lighting', 'Blending']
    },
    {
      id: 10,
      category: 'LAND ENHANCEMENT',
      title: 'Landscape Enhancement',
      image: '../src/assets/land bef.jpg',
      description: 'Natural landscape photography enhancement services',
      tags: ['Landscape', 'Nature', 'Enhancement']
    },
    {
      id: 11,
      category: 'NATURAL EDIT',
      title: 'Natural Photo Editing',
      image: '../src/assets/natual aft.jpg',
      description: 'Subtle and natural photo editing techniques',
      tags: ['Natural Editing', 'Subtle Enhancement', 'Organic Look']
    },
    {
      id: 12,
      category: 'OUTDOOR',
      title: 'Outdoor Photography Enhancement',
      image: '../src/assets/outdoor aft.jpg',
      description: 'Professional outdoor photography editing services',
      tags: ['Outdoor Photography', 'Nature', 'Adventure']
    }
  ];

  const categories = ['all', ...Array.from(new Set(portfolioItems.map(item => item.category)))];

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  // Animation effect for cards
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedCards(new Set(filteredItems.map(item => item.id)));
    }, 100);
    return () => clearTimeout(timer);
  }, [filteredItems]);

  const getServiceIcon = (category: string) => {
    switch (category) {
      case 'REAL ESTATE':
      case 'DAY TO DUSK':
        return <Camera className="w-5 h-5" />;
      case 'HDR':
      case 'FLASH AMBIENT':
        return <Zap className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-34 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 min-h-screen">
      {/* <div className="container mx-auto px-6 max-w-7xl"> */}
        <div className="container mx-auto px-6 max-w-[1600px]">

        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 rounded-full border border-purple-500/20 mb-6">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm font-medium">Our Services</span>
          </div>
          
          <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            Photo Enhancement
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Transform your images with our professional editing services. From real estate to portraits, 
            we bring your vision to life with stunning results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-4 h-4 text-purple-400" />
            <span className="text-slate-300 text-sm font-medium">Filter by category:</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 w-full">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 text-sm uppercase tracking-wider ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50 hover:border-purple-500/30'
                }`}
              >
                {category.replace('-', ' ')}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`group relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/30 hover:border-purple-500/50 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10 ${
                animatedCards.has(item.id) ? 'animate-fadeInUp opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 ${
                  hoveredItem === item.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-purple-500/20 backdrop-blur-sm rounded-md text-xs text-purple-200 border border-purple-400/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-white/90 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                {/* View Icon */}
                <div className={`absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 ${
                  hoveredItem === item.id ? 'scale-110 bg-purple-500/20' : 'scale-100'
                }`}>
                  <Eye className="w-4 h-4 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                    {getServiceIcon(item.category)}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-white truncate">
                      {item.category}
                    </h3>
                  </div>
                  
                  <ArrowRight className={`w-4 h-4 text-purple-400 transition-transform duration-300 ${
                    hoveredItem === item.id ? 'translate-x-1' : 'translate-x-0'
                  }`} />
                </div>
                
                <div className="h-1 bg-slate-700/50 rounded-full overflow-hidden">
                  <div className={`h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000 ${
                    hoveredItem === item.id ? 'w-full' : 'w-0'
                  }`} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg shadow-purple-500/25">
            <Sparkles className="w-5 h-5" />
            <span>View All Services</span>
            <ArrowRight className="w-5 h-5" />
          </div>
          
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Ready to transform your photos? Contact us for a free consultation and see how we can bring your vision to life.
          </p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Portfolio;