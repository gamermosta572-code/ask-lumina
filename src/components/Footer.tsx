import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-navy-dark text-primary-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={logo} alt="Ask Lumina" className="h-20 w-auto" />
          </div>
          <p className="text-silver/70 text-sm leading-relaxed">Inspiring progress, defining the future through globally recognized certification services.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-silver">Quick Links</h4>
          <ul className="space-y-2 text-sm text-silver/70">
            <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
            <li><Link to="/about-us" className="hover:text-accent transition-colors">About Us</Link></li>
            <li><Link to="/organisational-certification" className="hover:text-accent transition-colors">Services</Link></li>
            <li><Link to="/industries" className="hover:text-accent transition-colors">Industries</Link></li>
            <li><Link to="/resources" className="hover:text-accent transition-colors">Resources</Link></li>
            <li><Link to="/contact-us" className="hover:text-accent transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Popular Standards */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-silver">Popular Standards</h4>
          <ul className="space-y-2 text-sm text-silver/70">
            <li><Link to="/iso-9001" className="hover:text-accent transition-colors">ISO 9001</Link></li>
            <li><Link to="/iso-27001" className="hover:text-accent transition-colors">ISO 27001</Link></li>
            <li><Link to="/iso-45001" className="hover:text-accent transition-colors">ISO 45001</Link></li>
            <li><Link to="/iso-14001" className="hover:text-accent transition-colors">ISO 14001</Link></li>
            <li><Link to="/iso-22000" className="hover:text-accent transition-colors">ISO 22000</Link></li>
            <li><Link to="/iso-42001" className="hover:text-accent transition-colors">ISO 42001</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-silver">Contact</h4>
          <div className="space-y-3 text-sm text-silver/70">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
              <span>F. Haque Tower, Level-03, 107 Bir Uttam C.R Datta Road, Dhaka-1205</span>
            </div>
            <div className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
              <div className="flex flex-col gap-1">
                <a href="tel:+8801323577502" className="hover:text-accent transition-colors">+880 1323-577502</a>
                <a href="tel:+8801711205697" className="hover:text-accent transition-colors">+880 1711-205697</a>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-accent" />
              <a href="mailto:info@asklumina.com" className="hover:text-accent transition-colors">info@asklumina.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-primary-foreground/10">
      <div className="container py-5 flex flex-col sm:flex-row justify-between items-center text-xs text-silver/50 gap-2">
        <span>© {new Date().getFullYear()} Ask Lumina. All rights reserved.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
