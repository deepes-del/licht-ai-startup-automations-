
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Operations Manager",
      company: "TechFlow Solutions",
      content: "Licht AI transformed our data processing workflow. What used to take hours now happens automatically in minutes. The ROI has been incredible!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c2cd?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Finance Director",
      company: "Global Dynamics",
      content: "The automation workflows they built for our financial reporting saved us 20+ hours per week. Professional, reliable, and exactly what we needed.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emma Rodriguez",
      role: "HR Manager",
      company: "Innovation Labs",
      content: "Our employee onboarding process is now seamless thanks to their AI automation. New hires are processed and integrated in half the time.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-accent/5 via-background to-primary/5 relative overflow-hidden transition-colors duration-300">
      {/* Background Effects */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-float transition-colors duration-300"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-float transition-colors duration-300" style={{animationDelay: '3s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground transition-colors duration-300">
            Client <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto transition-colors duration-300">
            See how our AI automation solutions have transformed businesses across various industries.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-md border-border/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:animate-card-hover animate-slide-in-left" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current transition-colors duration-300" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary/30 mb-4 transition-colors duration-300" />
                <p className="text-muted-foreground leading-relaxed mb-6 transition-colors duration-300">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground transition-colors duration-300">{testimonial.role}</p>
                    <p className="text-sm text-accent transition-colors duration-300">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Automation Workflows */}
        <div className="text-center mb-12 animate-fade-in">
          <h3 className="text-3xl font-bold mb-4 text-foreground transition-colors duration-300">
            Previously Contracted <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Automation Workflows</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto transition-colors duration-300">
            Real automation workflows we've built for our clients, showcasing the complexity and efficiency of our AI solutions.
          </p>
        </div>

        {/* Workflow Images */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-card/80 backdrop-blur-md border-border/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:animate-card-hover animate-slide-in-left">
            <CardContent className="p-6">
              <img 
                src="/lovable-uploads/9deb0f1e-b1cb-450c-97db-581fdee49400.png" 
                alt="Complex Multi-Branch Automation Workflow"
                className="w-full h-auto rounded-lg border border-border/20 mb-4"
              />
              <h4 className="font-semibold text-foreground mb-2 transition-colors duration-300">Multi-Branch Processing</h4>
              <p className="text-sm text-muted-foreground transition-colors duration-300">
                Complex workflow handling multiple data sources with conditional processing and automated notifications.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-md border-border/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:animate-card-hover animate-slide-in-left" style={{animationDelay: '0.1s'}}>
            <CardContent className="p-6">
              <img 
                src="/lovable-uploads/f929f29d-cba6-4520-9027-f38a37ffa7cd.png" 
                alt="AI-Powered Data Integration Workflow"
                className="w-full h-auto rounded-lg border border-border/20 mb-4"
              />
              <h4 className="font-semibold text-foreground mb-2 transition-colors duration-300">AI Data Integration</h4>
              <p className="text-sm text-muted-foreground transition-colors duration-300">
                Intelligent data merging and processing with AI agents handling complex decision-making processes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-md border-border/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:animate-card-hover animate-slide-in-left" style={{animationDelay: '0.2s'}}>
            <CardContent className="p-6">
              <img 
                src="/lovable-uploads/0909bc59-c3c8-4d20-ab06-d0cd9fc1453c.png" 
                alt="Subworkflow Automation System"
                className="w-full h-auto rounded-lg border border-border/20 mb-4"
              />
              <h4 className="font-semibold text-foreground mb-2 transition-colors duration-300">Subworkflow System</h4>
              <p className="text-sm text-muted-foreground transition-colors duration-300">
                Advanced modular workflow architecture with reusable components and nested automation loops.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
