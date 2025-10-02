import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/Picturelogo.png"; // ✅ Add your logo here

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const services = [
    { name: 'Portrait Photography', path: '/services/portrait' },
    { name: 'HDR Enhancement', path: '/services/hdr' },
    { name: 'Arial Photos', path: '/services/arial-photos' },
    { name: 'Day to Dusk', path: '/services/day-to-dusk' },
    { name: 'Photos from Videos', path: '/services/photos-from-videos' },
    { name: '360° Photography', path: '/services/360' },
    { name: 'Real Twilight', path: '/services/real-twilight' },
    { name: 'Single Images', path: '/services/single-images' },
    { name: 'Flash Ambient', path: '/services/flash-ambient' },
    { name: 'Land Enhancement', path: '/services/land-enhancement' },
    { name: 'Natural Edit', path: '/services/natural-edit' },
    { name: 'Outdoor Photography', path: '/services/outdoor' },
    { name: 'Patch Removals', path: '/services/patch-removals' }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-b border-white/20 shadow-2xl' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
     {/* <div className="flex items-center space-x-3 cursor-pointer">
  {/* The logo is wrapped in a small, slightly rounded div with a background */}

  {/* <img
    src={logo}
    alt="Propic Logo"
    className="h-24 w-auto object-contain hover:scale-110 transition-transform duration-300"
  />
  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
    PROPIC
  </span>
</div> */} 
<div className="flex items-center space-x-4 cursor-pointer group">
  {/* Logo inside gradient circle */}
  {/* <div className="p-1.5 rounded-2xl bg-gradient-to-tr from-purple-500 to-pink-500 shadow-lg group-hover:scale-110 transition-transform duration-300"> */}
    <img
  src={logo}
  alt="Propic Logo"
  className="h-24 w-16 object-contain rounded-xl p-1 transform transition-transform duration-300 hover:scale-225"
/>

  {/* </div> */}

  {/* Company Name */}
  <span className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
    PROPICINFO
  </span>
</div>



          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {location.pathname === '/' && (
              <>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative group"
                >
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button
                  onClick={() => scrollToSection('process')}
                  className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative group"
                >
                  Process
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative group"
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </>
            )}

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative group flex items-center space-x-1"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 transition-all duration-300 group-hover:w-full"></span>
              </button>

              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-md border border-white/20 rounded-lg shadow-2xl z-50"
                >
                  <div className="py-2">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-full text-white font-medium hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-purple-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 py-6 space-y-4">
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white/80 hover:text-white transition-colors w-full text-left py-2"
              >
                Home
              </Link>

              {location.pathname === '/' && (
                <>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="block text-white/80 hover:text-white transition-colors w-full text-left py-2"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection('process')}
                    className="block text-white/80 hover:text-white transition-colors w-full text-left py-2"
                  >
                    Process
                  </button>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="block text-white/80 hover:text-white transition-colors w-full text-left py-2"
                  >
                    Contact
                  </button>
                </>
              )}

              {/* Mobile Services */}
              <div className="border-t border-white/20 pt-4">
                <div className="text-white/60 text-sm font-medium mb-2">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-white/80 hover:text-white transition-colors w-full text-left py-1 pl-4"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-full text-white font-medium w-full">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
