import { ArrowDownCircle } from 'lucide-react';
import {FaWhatsapp} from 'react-icons/fa';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-background -z-10"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOC45OTgtNC4yMTggMi41OTgtNS41NzVhOS4yNyA5LjI3IDAgMCAxLTEuNDU2LTQuOTZDMzcuMTQyIDE1LjUzIDQzLjY3MyA5IDE1MS45MzMgOWM4LjI2IDAgMTQuOTcgNi43MSAxNC45NyAxNC45NyAwIDYuOTI2LTQuNzIgMTIuNzQ4LTExLjEzNiAxNC40NDFDMTU2Ljg2NSA0My44NiAxNTggNDYuODIzIDE1OCA1MGMwIDcuNzMyLTYuMjY4IDE0LTE0IDE0cy0xNC02LjI2OC0xNC0xNGMwLTMuMTc3IDEuMTM1LTYuMTQgMi45OTctOC40Ni02LjQxNS0xLjY5My0xMS4xMzUtNy41MTUtMTEuMTM1LTE0LjQ0MSAwLTQuNDE4IDEuOTM0LTguMzggNC45Ni0xMS4xMzVDMTI0LjIxOCAxNy45OTggMTIyLjIxIDE5IDEyMCAxOWMtOS45NDEgMC0xOC04LjA1OS0xOC0xOGg5YzAgNC45NzEgNC4wMjkgOSA5IDlzOS00LjAyOSA5LTloOWMwIDkuOTQxLTguMDU5IDE4LTE4IDE4WiIvPjwvZz48L2c+PC9zdmc+')] -z-10"></div>

      <div className="container-custom z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="/logo2_transparent.png" 
              alt="TheStaffCompany.com Logo" 
              className="h-32 sm:h-40 md:h-48 lg:h-56 w-auto object-contain"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight animate-fade-in">
            Get the Right Staff, <br></br><span className="text-primary">At the Right Time!</span>
          </h1>
          
          <p className="mt-6 text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          The only service you'll ever need for your staff requirements (seriously)!
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* <a 
              href="https://wa.me/9835126411" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button-primary"
            >
              Contact us on WhatsApp
            </a> */}
            {/* Optional: Add a WhatsApp icon button */}
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
        </div>
      </div>
      
      <button 
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-primary/70 hover:text-primary transition-colors animate-float"
        aria-label="Scroll down"
      >
        <ArrowDownCircle size={40} />
      </button>
    </section>
  );
};

export default Hero;
