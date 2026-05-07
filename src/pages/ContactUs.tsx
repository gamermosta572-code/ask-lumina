import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { waLink } from "@/lib/whatsapp";

const ContactUs = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <section className="bg-navy text-primary-foreground py-20">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
          <span className="text-gold font-medium text-sm tracking-widest uppercase">Get In Touch</span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-6">Contact Us</h1>
          <p className="text-silver-light/90 text-lg leading-relaxed">Have questions about certification? We're here to help. Reach out to us and our team will respond promptly.</p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Send Us a Message</h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="bg-card" />
                <Input placeholder="Company Name" className="bg-card" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input type="email" placeholder="Email Address" className="bg-card" />
                <Input type="tel" placeholder="Phone Number" className="bg-card" />
              </div>
              <Input placeholder="Subject" className="bg-card" />
              <Textarea placeholder="Your Message" rows={5} className="bg-card" />
              <div className="flex flex-wrap gap-3">
                <Button type="submit" size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 px-8">Send Message</Button>
                <Button asChild type="button" size="lg" variant="outline" className="gap-2 border-accent/40 text-accent hover:bg-accent hover:text-accent-foreground">
                  <a href={waLink("Hi Ask Lumina, I'd like to get in touch.")} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Contact Information</h2>
            <div className="space-y-5">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Office Address</h4>
                  <p className="text-sm text-muted-foreground">F. Haque Tower, Level-03, 107 Bir Uttam C.R Datta Road, Dhaka-1205</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border">
                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                  <p className="text-sm text-muted-foreground">
                    <a href="tel:+8801323577502" className="hover:text-accent transition-colors">+880 1323-577502</a>
                    <br />
                    <a href="tel:+8801711205697" className="hover:text-accent transition-colors">+880 1711-205697</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-sm text-muted-foreground">
                    <a href="mailto:info@asklumina.com" className="hover:text-accent transition-colors">info@asklumina.com</a>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border">
                <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                  <p className="text-sm text-muted-foreground">Sunday – Thursday: 9:00 AM – 6:00 PM<br />Friday – Saturday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default ContactUs;
