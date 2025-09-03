
import { ArrowRight, Brain, Zap, TrendingUp, Sparkles, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    // Force dark mode only
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background transition-colors duration-500">

      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10 transition-colors duration-500"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float blur-xl transition-colors duration-500"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/20 rounded-full animate-float blur-lg transition-colors duration-500" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary/30 rounded-full animate-float blur-lg transition-colors duration-500" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-10 w-8 h-8 bg-accent/40 rounded-full animate-float blur-sm transition-colors duration-500" style={{animationDelay: '3s'}}></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center space-y-12 animate-fade-in">
          {/* Logo and Company Name */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <img 
              src="/lovable-uploads/e5c4ceca-75b5-44af-bfc5-c1053552ed08.png" 
              alt="Licht AI Logo" 
              className="w-20 h-20 object-contain animate-pulse transition-all duration-300"
            />
            <div className="text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground transition-colors duration-300">
                Licht AI
              </h1>
              <div className="flex items-center space-x-2 mt-2">
                <Sparkles className="w-5 h-5 text-accent animate-bounce transition-colors duration-300" />
                <span className="text-lg text-muted-foreground transition-colors duration-300">AI Automation</span>
              </div>
            </div>
          </div>

          {/* Main Tagline with Glow Effect */}
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-3xl lg:text-5xl font-bold leading-tight animate-glow transition-colors duration-300">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%]">
                Automations at the speed of light.
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
              Transform your business operations with cutting-edge AI automation 
              across Finance, Trading, Business Intelligence, and HR Management.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-slide-up" style={{animationDelay: '0.2s'}}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-10 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
              onClick={() => scrollToSection('services')}
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </Button>
          </div>

          {/* Stats Section - Updated for intermediate level */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="text-center group hover:animate-card-hover transition-all duration-300 bg-card/50 rounded-2xl p-6 border border-border/20">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Brain className="w-8 h-8 text-primary transition-colors duration-300" />
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">60+</div>
              </div>
              <div className="text-sm text-muted-foreground transition-colors duration-300">Automations Built</div>
            </div>
            <div className="text-center group hover:animate-card-hover transition-all duration-300 bg-card/50 rounded-2xl p-6 border border-border/20">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <Zap className="w-8 h-8 text-accent transition-colors duration-300" />
                <div className="text-3xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">75%</div>
              </div>
              <div className="text-sm text-muted-foreground transition-colors duration-300">Efficiency Boost</div>
            </div>
            <div className="text-center group hover:animate-card-hover transition-all duration-300 bg-card/50 rounded-2xl p-6 border border-border/20">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <TrendingUp className="w-8 h-8 text-primary transition-colors duration-300" />
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">12/5</div>
              </div>
              <div className="text-sm text-muted-foreground transition-colors duration-300">Business Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
