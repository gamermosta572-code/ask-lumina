import { useState } from "react";
import { Search, Shield, GraduationCap, Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { waLink } from "@/lib/whatsapp";
import logo from "@/assets/logo.png";

const certLinks = [
  { label: "ISO 9001 – Quality Management", to: "/iso-9001" },
  { label: "ISO 27001 – Information Security", to: "/iso-27001" },
  { label: "ISO 14001 – Environmental", to: "/iso-14001" },
  { label: "ISO 45001 – Health & Safety", to: "/iso-45001" },
  { label: "ISO 22000 – Food Safety", to: "/iso-22000" },
  { label: "ISO 13485 – Medical Devices", to: "/iso-13485" },
  { label: "ISO 42001 – AI Management", to: "/iso-42001" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-navy text-primary-foreground text-sm py-2">
        <div className="container flex justify-between items-center">
          <span className="hidden md:block opacity-80">Envisioning Trusted Excellence — Accredited by IAS & UAF</span>
          <div className="flex gap-4 ml-auto">
            <a href="#verify" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <Shield className="w-3.5 h-3.5" /> Verify Certificate
            </a>
            <a href="#verify-training" className="flex items-center gap-1.5 hover:text-gold transition-colors">
              <GraduationCap className="w-3.5 h-3.5" /> Verify Training
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Ask Lumina" className="h-12 w-auto" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link to="/" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-accent transition-colors rounded-md hover:bg-secondary">
              Home
            </Link>
            <Link to="/about-us" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-accent transition-colors rounded-md hover:bg-secondary">
              About Us
            </Link>

            {/* Services Dropdown with Subcategories */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-accent transition-colors rounded-md hover:bg-secondary flex items-center gap-1">
                Services <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-80 bg-card rounded-lg shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-3">
                {/* Organisational Certification */}
                <div className="mb-2">
                  <Link to="/organisational-certification" className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-foreground hover:bg-secondary rounded-md transition-colors">
                    <Shield className="w-4 h-4 text-accent" /> Organisational Certification
                  </Link>
                  <div className="pl-9 space-y-0.5">
                    {certLinks.map((s) => (
                      <Link key={s.to} to={s.to} className="block px-3 py-1.5 text-xs text-muted-foreground hover:text-accent hover:bg-secondary rounded-md transition-colors">
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="border-t border-border my-2" />
                {/* People Training */}
                <Link to="/people-training-certification" className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-foreground hover:bg-secondary rounded-md transition-colors">
                  <GraduationCap className="w-4 h-4 text-accent" /> People Training Certification
                </Link>
              </div>
            </div>

            <Link to="/industries" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-accent transition-colors rounded-md hover:bg-secondary">
              Industries
            </Link>
            <Link to="/resources" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-accent transition-colors rounded-md hover:bg-secondary">
              Resources
            </Link>
            <Link to="/contact-us" className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-accent transition-colors rounded-md hover:bg-secondary">
              Contact Us
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="icon"><Search className="w-4 h-4" /></Button>
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 gap-2">
              <a href={waLink("Hi Ask Lumina, I'd like a quote for certification services.")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" /> Get a Quote
              </a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-background p-4 space-y-2">
            <Link to="/" className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary rounded-md" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link to="/about-us" className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary rounded-md" onClick={() => setMobileOpen(false)}>
              About Us
            </Link>
            <div className="pl-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Organisational Certification</div>
            <Link to="/organisational-certification" className="block px-3 py-2 text-sm font-medium text-accent hover:bg-secondary rounded-md" onClick={() => setMobileOpen(false)}>
              View All Services
            </Link>
            {certLinks.map((s) => (
              <Link key={s.to} to={s.to} className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary rounded-md pl-6" onClick={() => setMobileOpen(false)}>
                {s.label}
              </Link>
            ))}
            <div className="pl-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">People Training</div>
            <Link to="/people-training-certification" className="block px-3 py-2 text-sm font-medium text-accent hover:bg-secondary rounded-md" onClick={() => setMobileOpen(false)}>
              View Training Programs
            </Link>
            <Link to="/industries" className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary rounded-md" onClick={() => setMobileOpen(false)}>
              Industries
            </Link>
            <Link to="/resources" className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary rounded-md" onClick={() => setMobileOpen(false)}>
              Resources
            </Link>
            <Link to="/contact-us" className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary rounded-md" onClick={() => setMobileOpen(false)}>
              Contact Us
            </Link>
            <Button asChild className="w-full bg-accent text-accent-foreground mt-2 gap-2">
              <a href={waLink("Hi Ask Lumina, I'd like a quote for certification services.")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" /> Get a Quote
              </a>
            </Button>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
