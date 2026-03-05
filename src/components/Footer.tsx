import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-navy-dark text-primary-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold font-display">AL</span>
            </div>
            <span className="font-display font-bold text-lg">Ask Lumina</span>
          </div>
          <p className="text-silver/70 text-sm leading-relaxed">Formerly SIS Certifications. Inspiring progress, defining the future through globally recognized certification services.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-silver">Quick Links</h4>
          <ul className="space-y-2 text-sm text-silver/70">
            {["About Us", "Services", "Industries", "Training", "Resources", "Contact Us"].map((link) => (
              <li key={link}><a href={`#${link.toLowerCase().replace(" ", "-")}`} className="hover:text-accent transition-colors">{link}</a></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-silver">Popular Standards</h4>
          <ul className="space-y-2 text-sm text-silver/70">
            {["ISO 9001", "ISO 27001", "ISO 45001", "ISO 14001", "ISO 22000", "ISO 42001"].map((s) => (
              <li key={s}><a href="#" className="hover:text-accent transition-colors">{s}</a></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-silver">Contact</h4>
          <div className="space-y-3 text-sm text-silver/70">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
              <span>Unit No – 514, 5th Floor, Vipul Business Park, Sector – 48, Sohna Road, Gurgaon, Haryana 122018, India</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-accent" />
              <a href="tel:+918882213680" className="hover:text-accent transition-colors">+91 8882213680</a>
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
        <span>© 2023 ASK LUMINA – ALL RIGHTS RESERVED.</span>
        <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
      </div>
    </div>
  </footer>
);

export default Footer;
