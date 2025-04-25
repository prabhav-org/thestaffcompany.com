
import { Heart, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-border/50">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-12">
          <div className="animate-fade-in">
            <div className="mb-4">
              <a href="#" className="text-2xl font-semibold tracking-tight flex items-center">
                <span className="text-primary">TheStaff</span>
                <span>Company</span><span className='text-md text-secondary'>.com</span>
              </a>
            </div>
            <p className="text-foreground/70 mb-6">
              Connecting & supporting underserved workers with businesses and making a real social impact.
            </p>
            <div className="flex items-center">
              <Heart className="text-primary mr-2" size={16} />
              <p className="text-sm">Making a difference, one staff at a time!</p>
            </div>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "#home" },
                { label: "About Us", href: "#about" },
                { label: "Staff", href: "#staff" },
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms of Service", href: "/terms-of-service" }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-foreground/70">
                  Atal Incubation Centre,<br />
                  Banaras Hindu University (BHU),<br />
                  India, 221005.
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a href="tel:+917304216059" className="text-foreground/70 hover:text-primary transition-colors">
                  +91 7304216059
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <a target="_blank" 
                href="mailto:contact@thestaffcompany.com" 
                className="text-foreground/70 hover:text-primary transition-colors">
                  contact@TheStaffCompany.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-foreground/70 mb-4">
              Subscribe to our newsletter for the latest impact job opportunities and insights.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 rounded-l-md border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button className="bg-primary text-white rounded-r-md px-4 py-2 hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div> */}
        </div>
        
        <div className="border-t border-border/50 pt-8 text-center animate-fade-in">
          <div className="flex justify-center space-x-6 mb-4">
            {['instagram'].map((social) => (
              <a 
                key={social}
                href="https://instagram.com/thestaffcompany"
                target='_blank'
                className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-foreground/70 hover:bg-primary hover:text-white transition-colors"
                aria-label={`Follow us on ${social}`}
              >
                <svg 
                  className="w-5 h-5" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            ))}
          </div>
          
          <p className="text-sm text-foreground/60">
            &copy; {new Date().getFullYear()} TheStaffCompany. All rights reserved.
            <br/>
            Built with 🧡 by Sujān
          </p>
          
          <div className="flex justify-center space-x-4 mt-2 text-xs text-foreground/50">
            <a href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
