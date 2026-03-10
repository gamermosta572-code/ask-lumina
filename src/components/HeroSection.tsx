import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Globe, value: 50, suffix: "+", label: "Countries" },
  { icon: Users, value: 5000, suffix: "+", label: "Happy Customers" },
  { icon: Award, value: 200, suffix: "+", label: "Expert Auditors" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const step = target / (duration / 16);
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Corporate office skyline" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/85 to-navy/60" />
      </div>

      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">



          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-primary-foreground leading-tight mb-6">
            Inspiring Progress,{" "}
            <span className="text-gold">Defining the Future.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg md:text-xl text-silver-light/90 mb-8 leading-relaxed">
            Empowering businesses with globally recognized International Management System Certifications ranging from Quality to growth and beyond.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 gap-2">
              Explore Services <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/60 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 text-base px-8">
              Get a Quote
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }} className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
          {stats.map(({ icon: Icon, value, suffix, label }) => (
            <div key={label} className="flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-5 border border-primary-foreground/10">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-foreground">
                  <Counter target={value} suffix={suffix} />
                </div>
                <div className="text-sm text-silver-light/70">{label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
