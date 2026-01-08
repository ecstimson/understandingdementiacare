import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'About', path: '/about' },
  { label: 'Consulting', path: '/consulting' },
  { label: 'Speaking', path: '/speaking' },
  { label: 'Book', path: '/book' },
  { label: 'Contact', path: '/contact' },
];

const secondaryNav: NavItem[] = [
  { label: 'Speaking Topics', path: '/speaking-topics' },
  { label: 'Testimonials', path: '/testimonials' },
  { label: 'FAQ', path: '/faq' },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen bg-stone-50 font-sans text-stone-600">
      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled ? 'bg-stone-50/95 backdrop-blur-sm py-4 border-stone-200' : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <div className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
          <Link to="/" className="z-50 group">
            <h1 className="font-serif text-2xl text-stone-900 tracking-tight group-hover:text-brand transition-colors duration-300">
              Mary Donnelly
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm tracking-wide transition-colors duration-300 ${
                  location.pathname === item.path
                    ? 'text-stone-900 font-medium'
                    : 'text-stone-500 hover:text-brand'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden z-50 p-2 text-stone-800 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Overlay */}
          <div
            className={`fixed inset-0 bg-stone-50 z-40 transform transition-transform duration-500 ease-in-out ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {[...navItems, ...secondaryNav].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-2xl font-serif text-stone-800 hover:text-brand transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 md:pt-32">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#246794] text-white py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24">
            <div className="col-span-1 md:col-span-2">
              <h3 className="font-serif text-2xl text-white mb-6">Mary Donnelly</h3>
              <p className="font-light leading-relaxed max-w-sm mb-8 text-white/80">
                Guiding families and organizations through the complexities of dementia with dignity, expertise, and profound compassion.
              </p>
              <div className="flex space-x-6">
                {/* Social placeholders */}
                <a href="#" className="hover:text-white/80 transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white/80 transition-colors">Instagram</a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium tracking-wide mb-6 text-sm uppercase">Explore</h4>
              <ul className="space-y-4 font-light text-white/80">
                {[...navItems, ...secondaryNav].slice(0, 5).map(item => (
                   <li key={item.path}>
                     <Link to={item.path} className="hover:text-white transition-colors">
                       {item.label}
                     </Link>
                   </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium tracking-wide mb-6 text-sm uppercase">Legal & Info</h4>
              <ul className="space-y-4 font-light text-white/80">
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><span className="text-white/60 cursor-not-allowed">Privacy Policy</span></li>
              </ul>
              <div className="mt-12">
                 <p className="text-xs text-white/60">&copy; {new Date().getFullYear()} Mary Donnelly.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;