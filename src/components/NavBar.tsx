import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";
import { FaWhatsapp } from 'react-icons/fa';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      // Get current scroll position
      const scrollY = window.scrollY;
      // Apply styles to lock scroll
      body.style.overflow = 'hidden';
      body.style.position = 'fixed'; // Add position fixed
      body.style.width = '100%'; // Prevent width collapsing
      body.style.top = `-${scrollY}px`; // Maintain scroll position
      
    } else {
      // Read the scroll position from the style
      const scrollY = body.style.top;
      // Remove locking styles
      body.style.overflow = '';
      body.style.position = '';
      body.style.width = '';
      body.style.top = '';
      // Restore scroll position
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }

    // Cleanup function
    return () => {
       // Ensure styles are reset if component unmounts while open
      const scrollY = body.style.top;
      body.style.overflow = '';
      body.style.position = '';
      body.style.width = '';
      body.style.top = '';
      // Avoid scrolling if it wasn't locked
      if (scrollY) {
         window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center">
          <img 
            src="/brandlogo_transparent.png" 
            alt="TheStaffCompany.com Logo" 
            className="h-10 md:h-12"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['Home', 'About', 'Staff', /*'Partners', */ ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              {item}
            </a>
          ))}
          <a 
              href="https://wa.me/9835126411" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-secondary flex items-center gap-2 bg-[#44d379] hover:bg-[#57d85c] text-white"
            >
              <FaWhatsapp className="w-10 h-10" /> 
              WhatsApp Us
            </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-foreground focus:outline-none z-50 relative"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
          fixed inset-0 bg-background/100 backdrop-blur-sm z-40 transform transition-transform duration-300 ease-in-out 
          ${isOpen ? 'translate-x-0' : 'translate-x-full'} 
          md:hidden flex flex-col items-center justify-center space-y-6
        `}>
        <a href="#home" className="text-2xl text-foreground hover:text-primary" onClick={toggleMenu}>Home</a>
        <a href="#about" className="text-2xl text-foreground hover:text-primary" onClick={toggleMenu}>About</a>
        <a href="#services" className="text-2xl text-foreground hover:text-primary" onClick={toggleMenu}>Staff</a>
        <a 
              href="https://wa.me/9835126411" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-secondary flex items-center gap-2 bg-[#44d379] hover:bg-[#57d85c] text-white"
            >
              <FaWhatsapp className="w-10 h-10" /> 
              WhatsApp Us
            </a>
      </div>
    </header>
  );
};

export default NavBar;
