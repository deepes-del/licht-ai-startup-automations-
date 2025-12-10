import { ArrowRight, Brain, Zap, TrendingUp, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import BookMeeting from './BookMeeting';

const Hero = () => {
  useEffect(() => {
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-accent/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-primary/20 rounded-full animate-float blur-2xl"></div>
      <div className="absolute top-40 right-20 w-20 h-20 bg-accent/20 rounded-full animate-float blur-xl" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-primary/30 rounded-full animate-float blur-xl" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-accent/40 rounded-full animate-float blur-lg" style={{animationDelay: '3s'}}></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center space-y-10 animate-fade-in">
          {/* Logo and Company Name */}
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl animate-pulse"></div>
              <img 
                src="/lovable-uploads/e5c4ceca-75b5-44af-bfc5-c1053552ed08.png" 
                alt="Licht AI Logo" 
                className="w-24 h-24 object-contain relative z-10"
              />
            </div>
            <div className="text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground tracking-tight">
                Licht AI
              </h1>
              <div className="flex items-center space-x-2 mt-2">
                <Sparkles className="w-5 h-5 text-accent animate-pulse" />
                <span className="text-lg text-muted-foreground font-medium">AI Automation Agency</span>
              </div>
            </div>
          </div>

          {/* Main Tagline */}
          <div className="space-y-6 animate-slide-up">
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight max-w-4xl mx-auto">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                Automations at the speed of light.
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Smarter AI automation to save time, reduce costs, and improve decision-making across your business.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up pt-4" style={{animationDelay: '0.2s'}}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-10 py-6 rounded-2xl font-semibold shadow-2xl hover:shadow-primary/25 transition-all duration-300 group text-lg"
              onClick={() => scrollToSection('services')}
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <BookMeeting />
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 animate-fade-in max-w-4xl mx-auto" style={{animationDelay: '0.4s'}}>
            <div className="group hover:scale-105 transition-all duration-300 bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/30 hover:border-primary/50 hover:bg-card/50">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">60+</div>
              </div>
              <div className="text-sm text-muted-foreground font-medium">Automations Built</div>
            </div>
            <div className="group hover:scale-105 transition-all duration-300 bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/30 hover:border-accent/50 hover:bg-card/50">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">75%</div>
              </div>
              <div className="text-sm text-muted-foreground font-medium">Efficiency Boost</div>
            </div>
            <div className="group hover:scale-105 transition-all duration-300 bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/30 hover:border-primary/50 hover:bg-card/50">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">24/7</div>
              </div>
              <div className="text-sm text-muted-foreground font-medium">Business Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
