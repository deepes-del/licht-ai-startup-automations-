import { useState } from 'react';
import { TrendingUp, BarChart3, Users, Building2, Bot, MessageSquare, DollarSign, Activity } from 'lucide-react';
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

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            AI Automation <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive suite of AI-powered automation tools designed to revolutionize your industry operations
          </p>
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
