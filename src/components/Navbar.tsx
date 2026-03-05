import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Home, BookOpen, Users, Phone, ChevronRight, Briefcase, Image as ImageIcon, GraduationCap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { PrimaryButton } from './ui/Buttons';
import NotificationBar from './NotificationBar';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const totalScroll =
        document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (windowHeight > 0) {
        setScrollProgress((totalScroll / windowHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (to: string) => {
    navigate(to);
    window.scrollTo(0, 0);
    setIsOpen(false);
  };

  const menuItems = [
    { name: 'Home', to: '/', icon: <Home size={20} /> },
    { name: 'About Us', to: '/about', icon: <Users size={20} /> },
    { name: 'Classes', to: '/courses', icon: <BookOpen size={20} /> },
    { name: 'Industrial Training', to: '#', icon: <Briefcase size={20} /> },
    { name: 'Gallery', to: '/gallery', icon: <ImageIcon size={20} /> },
    { name: 'Results', to: '/results', icon: <GraduationCap size={20} /> },
    { name: 'Contact', to: '/contact', icon: <Phone size={20} /> },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 flex flex-col
      ${
        isHome
          ? 'bg-white shadow-md border-b border-gray-100'
          : scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200'
          : 'bg-white shadow-sm'
      }`}
    >
      <NotificationBar />
      
      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] z-[60]">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 transition-all duration-200 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => window.scrollTo(0, 0)}
          >
            <img
              src="/logo.png"
              alt="Astro Om Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.to)}
                className={`text-sm font-medium transition-all duration-300 ${
                  location.pathname === item.to
                    ? 'text-indigo-600'
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                {item.name}
              </button>
            ))}

            <PrimaryButton
              className="px-6 py-2 text-sm bg-indigo-600 hover:bg-indigo-700 shadow-md transition-all hover:scale-105"
              onClick={() => handleNavigation('/admission')}
            >
              Admission Open
            </PrimaryButton>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-white border-b border-gray-200 shadow-xl absolute top-full left-0 w-full"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {menuItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.to)}
                  className={`flex items-center justify-between w-full px-4 py-3 rounded-lg text-base font-medium transition-all ${
                    location.pathname === item.to
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    {item.name}
                  </div>
                  <ChevronRight size={16} />
                </button>
              ))}

              <PrimaryButton
                className="w-full justify-center py-3 mt-3 bg-indigo-600 hover:bg-indigo-700"
                onClick={() => handleNavigation('/admission')}
              >
                Admission Open
              </PrimaryButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
