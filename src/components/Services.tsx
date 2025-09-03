import { useState } from 'react';
import { TrendingUp, BarChart3, Users, Building2, Bot, MessageSquare, DollarSign, Activity, Workflow, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Chart from './Chart';

const Services = () => {
  const [activeTab, setActiveTab] = useState('finance');

  const financeData = [
    { name: 'Revenue', value: 85 },
    { name: 'Expenses', value: 65 },
    { name: 'Profit', value: 95 },
    { name: 'Growth', value: 78 }
  ];

  const tradingData = [
    { name: 'Wins', value: 73 },
    { name: 'Losses', value: 27 }
  ];

  const businessData = [
    { name: 'Q1', value: 65 },
    { name: 'Q2', value: 78 },
    { name: 'Q3', value: 82 },
    { name: 'Q4', value: 95 }
  ];

  const hrData = [
    { name: 'Productivity', value: 88 },
    { name: 'Satisfaction', value: 92 },
    { name: 'Retention', value: 85 }
  ];

  const clientWorkflows = [
    {
      id: 1,
      title: "Multi-Platform Data Processing",
      description: "Complex automation workflow integrating multiple data sources with AI agents for intelligent processing and routing.",
      image: "/lovable-uploads/86d80948-98ce-4ce9-a985-6d923f77b443.png",
      tags: ["AI Agents", "Data Processing", "Multi-Platform", "Automation"]
    },
    {
      id: 2,
      title: "Smart Form Processing System",
      description: "Automated form submission handling with AI-powered data extraction, validation, and intelligent routing to multiple endpoints.",
      image: "/lovable-uploads/2bf2d0d7-f29e-4153-81bd-47049e510458.png",
      tags: ["Form Processing", "AI Integration", "Data Validation", "Smart Routing"]
    },
    {
      id: 3,
      title: "Advanced Workflow Orchestration",
      description: "Sophisticated workflow system with conditional logic, parallel processing, and intelligent decision-making capabilities.",
      image: "/lovable-uploads/59cc99c3-bd7b-4e28-933f-3303179a56dd.png",
      tags: ["Workflow Engine", "Conditional Logic", "Parallel Processing", "Decision Making"]
    }
  ];

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
                        <p className="text-sm text-muted-foreground">Order/reservation system automation</p>
                      </div>
                      <div className="bg-card/60 rounded-lg p-4 border border-border/20">
                        <h4 className="font-semibold text-accent mb-2">Small Call Centers</h4>
                        <p className="text-sm text-muted-foreground">Lead capture → CRM integration</p>
                      </div>
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
                <p className="text-muted-foreground text-sm">Tailor-made automation solutions built specifically for your business needs</p>
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

        {/* Client Workflows Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Client Success Stories</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real automation workflows we've built for our clients, showcasing the power and complexity of our AI solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {clientWorkflows.map((workflow, index) => (
              <Card key={workflow.id} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm overflow-hidden animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden">
                  <img 
                    src={workflow.image} 
                    alt={workflow.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Workflow className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {workflow.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {workflow.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {workflow.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="flex items-center">
                      <Activity className="w-4 h-4 mr-1" />
                      Live Workflow
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-foreground mb-3">Ready for Your Custom Solution?</h4>
                <p className="text-muted-foreground mb-6">
                  These are just examples of what we can build. Every business is unique, and we create custom automation workflows tailored to your specific needs.
                </p>
                <div className="flex items-center justify-center text-primary font-semibold">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Contact us to discuss your automation requirements
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-12 bg-card/80 backdrop-blur-sm border border-border/20 rounded-2xl p-2 animate-slide-up">
            <TabsTrigger 
              value="finance" 
              className="flex items-center space-x-2 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 hover:bg-primary/20"
            >
              <TrendingUp className="h-4 w-4" />
              <span>Finance</span>
            </TabsTrigger>
            <TabsTrigger 
              value="trading" 
              className="flex items-center space-x-2 rounded-xl data-[state=active]:bg-accent data-[state=active]:text-primary-foreground transition-all duration-300 hover:bg-accent/20"
            >
              <BarChart3 className="h-4 w-4" />
              <span>Trading</span>
            </TabsTrigger>
            <TabsTrigger 
              value="business" 
              className="flex items-center space-x-2 rounded-xl data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300 hover:bg-primary/20"
            >
              <Building2 className="h-4 w-4" />
              <span>Business</span>
            </TabsTrigger>
            <TabsTrigger 
              value="hr" 
              className="flex items-center space-x-2 rounded-xl data-[state=active]:bg-accent data-[state=active]:text-primary-foreground transition-all duration-300 hover:bg-accent/20"
            >
              <Users className="h-4 w-4" />
              <span>HR</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="finance" className="animate-fade-in">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Description */}
              <div className="lg:col-span-1 space-y-6">
                <h3 className="text-3xl font-bold text-foreground">Financial Intelligence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Transform your financial operations with AI-powered analytics, automated reporting, and predictive insights that drive smarter business decisions.
                </p>
                
                {/* Analytics Widget */}
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 hover:animate-card-hover transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-primary flex items-center">
                      <Activity className="mr-2 h-5 w-5" />
                      Performance Score
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-2">94%</div>
                    <div className="flex items-center justify-center">
                      <Chart type="pie" data={financeData} size="sm" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Feature Cards */}
              <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-xl hover:animate-card-hover transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <DollarSign className="mr-2 h-5 w-5" />
                      Cash Flow Automation
                    </CardTitle>
                    <CardDescription>Automated financial reporting and cash flow predictions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Chart type="bar" data={financeData} colors={['hsl(var(--primary))']} size="md" />
                    <div className="mt-4 flex justify-between text-sm text-muted-foreground">
                      <span>Automated Reports: 500+</span>
                      <span>Accuracy: 98.5%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl hover:animate-card-hover transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center text-accent">
                      <Bot className="mr-2 h-5 w-5" />
                      Risk Assessment AI
                    </CardTitle>
                    <CardDescription>Real-time risk analysis and mitigation strategies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Chart type="line" data={financeData} colors={['hsl(var(--accent))']} size="md" />
                    <div className="mt-4 flex justify-between text-sm text-muted-foreground">
                      <span>Risk Score: Low</span>
                      <span>Confidence: 95%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl hover:animate-card-hover transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Financial Chatbot Assistant
                    </CardTitle>
                    <CardDescription>24/7 AI assistant for financial queries and support</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                      <div className="bg-primary text-primary-foreground p-3 rounded-lg ml-8">
                        "Show me this month's expense breakdown"
                      </div>
                      <div className="bg-card p-3 rounded-lg mr-8 border">
                        Your expenses this month: Marketing (35%), Operations (25%), Salaries (40%). Would you like a detailed report?
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between text-sm text-muted-foreground">
                      <span>Queries Handled: 1,250+</span>
                      <span>Response Time: &lt;2s</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="trading" className="animate-fade-in">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-6">
                <h3 className="text-3xl font-bold text-foreground">Trading Automation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Advanced algorithmic trading systems with real-time market analysis, automated execution, and comprehensive risk management.
                </p>
                
                <Card className="bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20 hover:animate-card-hover transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-accent flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5" />
                      Win Rate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-accent mb-2">73%</div>
                    <div className="flex items-center justify-center">
                      <Chart type="pie" data={tradingData} colors={['hsl(var(--accent))', 'hsl(var(--primary))']} size="sm" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-xl hover:animate-card-hover transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center text-accent">
                      <BarChart3 className="mr-2 h-5 w-5" />
                      Algorithmic Trading
                    </CardTitle>
                    <CardDescription>Automated trading strategies and execution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Chart type="line" data={businessData} colors={['hsl(var(--accent))']} size="md" />
                    <div className="mt-4 flex justify-between text-sm text-muted-foreground">
                      <span>Trades: 2,450+</span>
                      <span>Success Rate: 73%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl hover:animate-card-hover transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <Activity className="mr-2 h-5 w-5" />
                      Market Analysis
                    </CardTitle>
                    <CardDescription>Real-time market sentiment and trend analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Chart type="bar" data={tradingData} colors={['hsl(var(--primary))']} size="md" />
                    <div className="mt-4 flex justify-between text-sm text-muted-foreground">
                      <span>Markets Tracked: 50+</span>
                      <span>Update Frequency: 1s</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl hover:animate-card-hover transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center text-accent">
                      <Bot className="mr-2 h-5 w-5" />
                      Risk Management System
                    </CardTitle>
                    <CardDescription>Automated position sizing and stop-loss management</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">2.5%</div>
                        <div className="text-sm text-muted-foreground">Max Drawdown</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent">1.8:1</div>
                        <div className="text-sm text-muted-foreground">Risk/Reward</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">99.9%</div>
                        <div className="text-sm text-muted-foreground">Uptime</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="business" className="animate-fade-in">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-6">
                <h3 className="text-3xl font-bold text-foreground">Business Intelligence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive business automation solutions including workflow optimization, data analytics, and intelligent decision support systems.
                </p>
                
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 hover:animate-card-hover transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-primary flex items-center">
                      <Building2 className="mr-2 h-5 w-5" />
                      Growth Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-2">+18%</div>
                    <div className="flex items-center justify-center">
                      <Chart type="line" data={businessData} colors={['hsl(var(--primary))']} size="sm" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-xl hover:animate-card-hover transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <BarChart3 className="mr-2 h-5 w-5" />
                      Process Automation
                    </CardTitle>
                    <CardDescription>Streamlined workflows and task automation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Chart type="bar" data={businessData} colors={['hsl(var(--primary))']} size="md" />
                    <div className="mt-4 flex justify-between text-sm text-muted-foreground">
                      <span>Processes: 150+</span>
                      <span>Time Saved: 40%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl hover:animate-card-hover transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center text-accent">
                      <TrendingUp className="mr-2 h-5 w-5" />
                      Predictive Analytics
                    </CardTitle>
                    <CardDescription>Data-driven insights and forecasting</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Chart type="line" data={businessData} colors={['hsl(var(--accent))']} size="md" />
                    <div className="mt-4 flex justify-between text-sm text-muted-foreground">
                      <span>Accuracy: 94%</span>
                      <span>Forecasts: Daily</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl hover:animate-card-hover transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Business Intelligence Dashboard
                    </CardTitle>
                    <CardDescription>Real-time KPI monitoring and reporting</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-primary">$2.4M</div>
                        <div className="text-sm text-muted-foreground">Revenue</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-accent">156</div>
                        <div className="text-sm text-muted-foreground">Active Projects</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">98.2%</div>
                        <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-primary">+23%</div>
                        <div className="text-sm text-muted-foreground">Growth Rate</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="hr" className="animate-fade-in">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1 space-y-6">
                <h3 className="text-3xl font-bold text-foreground">HR Automation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Revolutionize human resources with AI-powered recruitment, employee management, and performance analytics systems.
                </p>
                
                <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20 hover:animate-card-hover transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-primary flex items-center">
                      <Users className="mr-2 h-5 w-5" />
                      Employee Score
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary mb-2">88%</div>
                    <div className="flex items-center justify-center">
                      <Chart type="pie" data={hrData} colors={['hsl(var(--primary))', 'hsl(var(--accent))', 'hsl(var(--primary))']} size="sm" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                <Card className="hover:shadow-xl hover:animate-card-hover transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <Users className="mr-2 h-5 w-5" />
                      Recruitment AI
                    </CardTitle>
                    <CardDescription>Automated candidate screening and matching</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Chart type="bar" data={hrData} colors={['hsl(var(--primary))']} size="md" />
                    <div className="mt-4 flex justify-between text-sm text-muted-foreground">
                      <span>Candidates: 1,200+</span>
                      <span>Match Rate: 92%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl hover:animate-card-hover transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center text-accent">
                      <Activity className="mr-2 h-5 w-5" />
                      Performance Analytics
                    </CardTitle>
                    <CardDescription>Employee performance tracking and insights</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Chart type="line" data={hrData} colors={['hsl(var(--accent))']} size="md" />
                    <div className="mt-4 flex justify-between text-sm text-muted-foreground">
                      <span>Employees: 850+</span>
                      <span>Engagement: 88%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-xl hover:animate-card-hover transition-all duration-300 border-0 bg-card/80 backdrop-blur-sm md:col-span-2">
                  <CardHeader>
                    <CardTitle className="flex items-center text-accent">
                      <Bot className="mr-2 h-5 w-5" />
                      HR Chatbot & Support
                    </CardTitle>
                    <CardDescription>24/7 employee support and HR query resolution</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted/50 rounded-lg p-4 space-y-3">
                      <div className="bg-accent text-primary-foreground p-3 rounded-lg ml-8">
                        "How many vacation days do I have left?"
                      </div>
                      <div className="bg-card p-3 rounded-lg mr-8 border">
                        You have 12 vacation days remaining this year. Would you like to submit a time-off request?
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between text-sm text-muted-foreground">
                      <span>Queries Resolved: 5,600+</span>
                      <span>Satisfaction: 94%</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Services;
