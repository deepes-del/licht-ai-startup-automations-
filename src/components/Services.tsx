import { Bot, MessageSquare, Building2, TrendingUp, Workflow, DollarSign, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            AI Automation <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Looking to save time and boost efficiency? We design tailor-made automation solutions for your business
          </p>
        </div>

        {/* Business Solutions Section */}
        <div className="mb-20">
          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 p-8 mb-12">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Our Specializations</h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-card/60 rounded-lg p-4 border border-border/20">
                        <h4 className="font-semibold text-primary mb-2">Real Estate Agencies</h4>
                        <p className="text-sm text-muted-foreground">Automated lead processing & client management</p>
                      </div>
                      <div className="bg-card/60 rounded-lg p-4 border border-border/20">
                        <h4 className="font-semibold text-accent mb-2">Clinics & Hospitals</h4>
                        <p className="text-sm text-muted-foreground">Patient scheduling & record management</p>
                      </div>
                      <div className="bg-card/60 rounded-lg p-4 border border-border/20">
                        <h4 className="font-semibold text-primary mb-2">Restaurants</h4>
                        <p className="text-sm text-muted-foreground">Order & reservation system automation</p>
                      </div>
                      <div className="bg-card/60 rounded-lg p-4 border border-border/20">
                        <h4 className="font-semibold text-accent mb-2">Small Call Centers</h4>
                        <p className="text-sm text-muted-foreground">Intelligent call routing & response systems</p>
                      </div>
                    </div>
                    
                    <div className="bg-card/60 rounded-lg p-4 border border-border/20">
                      <h4 className="font-semibold text-primary mb-2">Lead Capture → CRM</h4>
                      <p className="text-sm text-muted-foreground">Seamless lead management and nurturing</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Additional Services</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Auto social posting</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-muted-foreground">Data scraping + classification</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">Security alerts (CTI, fraud, fintech, e-commerce monitoring)</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Premium Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Bot className="mr-2 h-5 w-5" />
                  AI Chatbots & Voice Agents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Intelligent conversational AI for customer support and engagement</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-accent">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Virtual Receptionists
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">24/7 automated receptionist services with natural language processing</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Building2 className="mr-2 h-5 w-5" />
                  Smart Booking Systems
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Automated scheduling and booking management with smart notifications</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-accent">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Real Estate Automations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Lead qualification, property matching, and client communication automation</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Workflow className="mr-2 h-5 w-5" />
                  Custom Business Automations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Tailor-made automation solutions built specifically for your workflow</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30 hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-accent">
                  <DollarSign className="mr-2 h-5 w-5" />
                  Flexible Payment Options
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Including Cash on Delivery-like solutions and custom payment terms</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold text-foreground mb-4">Perfect Fit for Any Scale</h4>
                <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                  💡 Whether you run a small business or a large company, we create automation that fits your workflow perfectly.
                </p>
                <div className="flex items-center justify-center text-primary font-semibold">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Contact us today to discuss your project and get your own custom automation built
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Automation & AI Solutions – Pricing</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              We design custom AI Voice Agents, Chatbots, and Business Automations that save you time, reduce costs, and generate more revenue. 
              Pricing depends on complexity, API usage, and integration effort.
            </p>
          </div>

          <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h4 className="text-xl font-bold text-primary mb-3">60 Built Automations</h4>
                  <p className="text-muted-foreground">All solutions designed with intermediate complexity</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-accent mb-3">Custom Pricing</h4>
                  <p className="text-muted-foreground">Based on your specific requirements and integration needs</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-3">ROI Focused</h4>
                  <p className="text-muted-foreground">Solutions designed to generate revenue and reduce operational costs</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;