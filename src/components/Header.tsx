import { useState } from "react";
import { Search, Shield, GraduationCap, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
          <a href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-navy flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg font-display">AL</span>
            </div>
            <div className="leading-tight">
              <span className="font-display font-bold text-lg text-navy">Ask Lumina</span>
              <span className="block text-[10px] text-muted-foreground tracking-widest uppercase">Digital Trust</span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {["Home", "About Us"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-accent transition-colors rounded-md hover:bg-secondary">
                {item}
              </a>
            ))}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-accent transition-colors rounded-md hover:bg-secondary flex items-center gap-1">
                Services <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-64 bg-card rounded-lg shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2">
                {["Management System Certifications", "IT & InfoSec Solutions", "Professional Training"].map((s) => (
                  <a key={s} href={`#${s.toLowerCase().replace(/ /g, "-")}`} className="block px-3 py-2 text-sm text-foreground/80 hover:bg-secondary hover:text-accent rounded-md transition-colors">
                    {s}
                  </a>
                ))}
              </div>
            </div>
            {["Industries", "Training", "Resources", "Contact Us"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-accent transition-colors rounded-md hover:bg-secondary">
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="icon"><Search className="w-4 h-4" /></Button>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Get a Quote</Button>
          </div>

          {/* Mobile toggle */}
          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-border bg-background p-4 space-y-2">
            {["Home", "About Us", "Services", "Industries", "Training", "Resources", "Contact Us"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(" ", "-")}`} className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary rounded-md" onClick={() => setMobileOpen(false)}>
                {item}
              </a>
            ))}
            <Button className="w-full bg-accent text-accent-foreground mt-2">Get a Quote</Button>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
