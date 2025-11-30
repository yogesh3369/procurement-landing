import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  LayoutDashboard, 
  Users, 
  Zap, 
  Menu, 
  X,
  CreditCard,
  BellRing,
  BarChart,
  ShieldCheck,
  Search,
  Sparkles
} from 'lucide-react';
import { 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid
} from 'recharts';

// --- Shared UI Components ---

const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  onClick 
}: { 
  children?: React.ReactNode, 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost', 
  className?: string,
  onClick?: () => void
}) => {
  const baseStyle = "inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark shadow-[0_2px_10px_rgba(108,71,255,0.3)] hover:shadow-[0_4px_16px_rgba(108,71,255,0.4)]",
    secondary: "bg-gray-900 text-white hover:bg-gray-800 shadow-sm",
    outline: "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300 shadow-sm",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100/50"
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

const Card = ({ children, className = '' }: { children?: React.ReactNode, className?: string }) => (
  <div className={`bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-card hover:shadow-card-hover hover:border-primary/20 transition-all duration-300 overflow-hidden ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, variant = 'blue' }: { children?: React.ReactNode, variant?: 'blue' | 'green' | 'purple' }) => {
  const styles = {
    blue: "bg-blue-50 text-blue-700 ring-blue-700/10",
    green: "bg-green-50 text-green-700 ring-green-700/10",
    purple: "bg-purple-50 text-purple-700 ring-purple-700/10"
  };
  
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset ${styles[variant]}`}>
      {children}
    </span>
  );
};

// --- Section Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm group-hover:scale-105 transition-transform">
              P
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">ProcureFlow</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Features</a>
            <a href="#workflow" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">How it Works</a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Pricing</a>
            <a href="#docs" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">Docs</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">Sign In</a>
            <Button variant="primary" className="px-5 py-2 text-sm">Join Waitlist</Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-900 p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-4 py-4 space-y-4 shadow-lg">
          <a href="#features" className="block text-base font-medium text-gray-600 hover:text-primary">Features</a>
          <a href="#workflow" className="block text-base font-medium text-gray-600 hover:text-primary">How it Works</a>
          <a href="#pricing" className="block text-base font-medium text-gray-600 hover:text-primary">Pricing</a>
          <Button variant="primary" className="w-full justify-center">Join Waitlist</Button>
        </div>
      )}
    </nav>
  );
};

const HeroDiagram = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] bg-white/50 backdrop-blur-sm rounded-3xl border border-gray-200 shadow-2xl overflow-hidden flex items-center justify-center p-8 select-none group">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 via-transparent to-transparent opacity-50"></div>
      
      {/* Central Hub */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Connection Lines */}
        <div className="absolute inset-0 pointer-events-none">
           {/* Vertical Line */}
           <div className="absolute top-1/2 left-1/2 w-px h-32 bg-gray-200 -translate-x-1/2 -translate-y-[8rem]"></div>
           
           {/* Horizontal Branch */}
           <div className="absolute top-1/2 left-1/2 w-64 h-px bg-gray-200 -translate-x-1/2 translate-y-12"></div>
           
           {/* Vertical Branches to Nodes */}
           <div className="absolute top-1/2 left-1/2 w-px h-8 bg-gray-200 -translate-x-[8rem] translate-y-12"></div>
           <div className="absolute top-1/2 left-1/2 w-px h-8 bg-gray-200 translate-x-0 translate-y-12"></div>
           <div className="absolute top-1/2 left-1/2 w-px h-8 bg-gray-200 translate-x-[8rem] translate-y-12"></div>
        </div>

        {/* Main Request Card */}
        <div className="w-72 bg-white rounded-xl shadow-card border border-gray-200 p-5 mb-16 relative z-20 hover:scale-[1.02] transition-transform duration-300">
          <div className="flex items-center gap-3 mb-4 border-b border-gray-100 pb-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center ring-4 ring-primary/5">
               <Zap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-sm font-bold text-gray-900">PR #4092</div>
              <div className="text-[11px] text-gray-500">Marketing Software</div>
            </div>
            <div className="ml-auto">
               <Badge variant="purple">Processing</Badge>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center text-xs text-gray-500">
                <span>Budget Check</span>
                <span className="text-green-600 font-medium">Passed</span>
            </div>
            <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-primary rounded-full"></div>
            </div>
            <div className="flex gap-2 mt-2">
                <div className="h-2 w-16 bg-gray-100 rounded"></div>
                <div className="h-2 w-10 bg-gray-100 rounded"></div>
            </div>
          </div>
        </div>

        {/* Distributed Nodes */}
        <div className="flex gap-8 md:gap-16 relative z-10 mt-2">
          {/* Manager Node */}
          <div className="w-36 bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col items-center gap-3 hover:-translate-y-1 transition-all duration-300 hover:shadow-md hover:border-green-200">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 ring-4 ring-green-50/50">
              <CheckCircle2 size={18} />
            </div>
            <span className="text-xs font-semibold text-gray-700">Approval</span>
          </div>

          {/* Vendor Node */}
          <div className="w-36 bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col items-center gap-3 hover:-translate-y-1 transition-all duration-300 hover:shadow-md hover:border-blue-200">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 ring-4 ring-blue-50/50">
              <Users size={18} />
            </div>
            <span className="text-xs font-semibold text-gray-700">Vendor Portal</span>
          </div>

          {/* Finance Node */}
          <div className="w-36 bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex flex-col items-center gap-3 hover:-translate-y-1 transition-all duration-300 hover:shadow-md hover:border-orange-200">
             <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 ring-4 ring-orange-50/50">
              <CreditCard size={18} />
            </div>
            <span className="text-xs font-semibold text-gray-700">Payment</span>
          </div>
        </div>
      </div>

      {/* Floating Elements for decor */}
      <div className="absolute top-10 left-10 p-3 bg-white/90 backdrop-blur rounded-lg border border-gray-200 shadow-lg hidden md:block animate-bounce-slow">
        <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          System Operational
        </div>
      </div>

       <div className="absolute bottom-10 right-10 p-3 bg-white/90 backdrop-blur rounded-lg border border-gray-200 shadow-lg hidden md:block">
        <div className="flex items-center gap-3 text-xs font-medium text-gray-600">
          <div className="p-1.5 bg-yellow-50 rounded-md text-yellow-600">
            <BellRing size={14} />
          </div>
          <div>
            <div>Contract Renewal</div>
            <div className="text-gray-400 font-normal">Salesforce • 30 Days</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden relative">
      {/* Background Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none -z-10"></div>
      
      <div className="text-center max-w-4xl mx-auto mb-16 relative">
        <div className="inline-flex items-center rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm px-4 py-1.5 text-sm text-gray-600 mb-8 shadow-sm hover:border-primary/30 transition-colors cursor-default">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
          <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">v1.0 Public Beta is Live</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
          Modern Procurement.<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Unified.</span>
        </h1>
        
        <p className="text-xl text-gray-500 mb-12 leading-relaxed max-w-2xl mx-auto">
          The operating system for mid-market companies to manage Purchase Requests, Vendor Portals, and Contract Intelligence. 
          <span className="hidden md:inline"> No more spreadsheets.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your work email" 
            className="w-full px-6 py-3.5 rounded-full border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm placeholder:text-gray-400"
          />
          <Button className="w-full sm:w-auto px-8 py-3.5 h-[54px] shadow-glow">
            Get Early Access
          </Button>
        </div>
        <p className="mt-6 text-xs text-gray-400 font-medium">
          <span className="flex items-center justify-center gap-2">
            <ShieldCheck size={14} className="text-gray-400" />
            SOC2 Compliant &bullet; No credit card required
          </span>
        </p>
      </div>

      <HeroDiagram />
    </section>
  );
};

// --- Mock Data for Charts ---
const spendData = [
  { name: 'Jan', marketing: 4000, engineering: 2400 },
  { name: 'Feb', marketing: 3000, engineering: 1398 },
  { name: 'Mar', marketing: 2000, engineering: 9800 },
  { name: 'Apr', marketing: 2780, engineering: 3908 },
  { name: 'May', marketing: 1890, engineering: 4800 },
  { name: 'Jun', marketing: 2390, engineering: 3800 },
  { name: 'Jul', marketing: 3490, engineering: 4300 },
];

const BentoGrid = () => {
  return (
    <section id="features" className="py-24 relative">
       {/* Section Background Decor */}
       <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
       
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles size={16} className="text-primary" />
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider">Features</h2>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Engineered for Efficiency</h3>
          <p className="text-lg text-gray-500">
            A complete toolkit designed to replace rigid ERP modules and chaotic spreadsheets with a modern, API-first architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 auto-rows-[minmax(320px,auto)]">
          {/* Feature 1: Workflow Engine */}
          <Card className="md:col-span-2 p-8 flex flex-col justify-between group">
            <div className="mb-8 relative z-10">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-primary mb-5 ring-1 ring-purple-100">
                <LayoutDashboard />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">Smart Approval Workflows</h4>
              <p className="text-gray-500 max-w-lg">
                Automate routing based on department, budget, or custom rules. 
                Reduce cycle time by 40-60% with multi-level role-based matrices.
              </p>
            </div>
            
            {/* Visual: Workflow Schematic */}
            <div className="w-full bg-gray-50/50 rounded-xl border border-gray-100 p-6 relative overflow-hidden h-48 flex items-center justify-center group-hover:bg-gray-50 transition-colors">
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
              <div className="flex items-center gap-3 relative z-10">
                 <div className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-xs font-mono text-gray-600 flex flex-col items-center gap-1">
                    <span className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center"><Users size={12}/></span>
                    Requester
                 </div>
                 
                 <div className="w-12 h-px bg-gray-300 relative">
                   <div className="absolute top-1/2 left-0 w-2 h-2 bg-primary rounded-full -translate-y-1/2 animate-flow-horiz"></div>
                 </div>
                 
                 <div className="px-4 py-2 bg-white border border-primary/30 rounded-lg shadow-sm text-xs font-mono text-primary font-bold flex flex-col items-center gap-1 ring-2 ring-primary/5">
                    <span className="w-6 h-6 rounded bg-primary/10 flex items-center justify-center"><CheckCircle2 size={12}/></span>
                    Manager
                 </div>
                 
                 <div className="w-12 h-px bg-gray-300 relative">
                    <div className="absolute top-1/2 left-0 w-2 h-2 bg-gray-400 rounded-full -translate-y-1/2 animate-flow-horiz" style={{animationDelay: '0.5s'}}></div>
                 </div>

                 <div className="px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-xs font-mono text-gray-600 flex flex-col items-center gap-1">
                    <span className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center"><CreditCard size={12}/></span>
                    Finance
                 </div>
              </div>
            </div>
          </Card>

          {/* Feature 2: Vendor Portal */}
          <Card className="p-8 flex flex-col justify-between group">
             <div className="mb-6 relative z-10">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-5 ring-1 ring-blue-100">
                <Users />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Vendor Portal</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Self-service onboarding, RFQ submissions, and automated compliance checks (KYC) in a unified hub.
              </p>
            </div>
            <div className="bg-gray-50/50 rounded-xl border border-gray-100 p-4 h-44 relative group-hover:bg-gray-50 transition-colors">
               <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 mb-2 transform group-hover:translate-x-1 transition-transform">
                 <div className="h-2 w-1/3 bg-gray-200 rounded mb-2"></div>
                 <div className="h-2 w-2/3 bg-gray-100 rounded"></div>
               </div>
               <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 opacity-60 transform scale-95 group-hover:scale-95 group-hover:translate-x-1 transition-all delay-75">
                 <div className="h-2 w-1/4 bg-gray-200 rounded mb-2"></div>
               </div>
               <div className="absolute bottom-4 right-4 bg-blue-600 text-white text-[10px] font-medium px-3 py-1.5 rounded-full shadow-lg shadow-blue-600/20 flex items-center gap-1 group-hover:scale-110 transition-transform">
                 <FileText size={10} />
                 Upload Quote
               </div>
            </div>
          </Card>

          {/* Feature 3: Spend Analytics */}
          <Card className="p-8 flex flex-col justify-between group">
             <div className="mb-6 relative z-10">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center text-green-600 mb-5 ring-1 ring-green-100">
                <BarChart className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Spend Intelligence</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Real-time visibility into burn rates, category spend, and budget vs actuals.
              </p>
            </div>
            <div className="h-44 w-full -mx-2">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={spendData}>
                  <defs>
                    <linearGradient id="colorMarketing" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#6C47FF" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#6C47FF" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}
                    itemStyle={{ color: '#6C47FF' }}
                    cursor={{ stroke: '#6C47FF', strokeWidth: 1, strokeDasharray: '4 4' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="marketing" 
                    stroke="#6C47FF" 
                    strokeWidth={2}
                    fillOpacity={1} 
                    fill="url(#colorMarketing)" 
                    activeDot={{ r: 4, strokeWidth: 0, fill: '#6C47FF' }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </Card>

          {/* Feature 4: Contract Lifecycle */}
          <Card className="md:col-span-2 p-8 flex flex-col justify-between group">
            <div className="flex flex-col md:flex-row md:items-start gap-8">
              <div className="flex-1">
                 <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 mb-5 ring-1 ring-orange-100">
                  <FileText />
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-3">Contract Lifecycle Management</h4>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  Never miss a renewal. Centralized repository with AI-driven metadata extraction and automated 30/60/90 day alerts.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="green">Auto-renewal prevention</Badge>
                  <Badge variant="blue">SLA compliance tracking</Badge>
                  <Badge variant="purple">Metadata Extraction</Badge>
                </div>
              </div>
              
              <div className="flex-1 bg-gray-50/50 rounded-xl border border-gray-100 p-6 group-hover:bg-gray-50 transition-colors">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 shadow-sm group-hover:border-primary/20 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">AWS Enterprise</div>
                        <div className="text-[10px] text-gray-500">Expiring in 5 days</div>
                      </div>
                    </div>
                    <Button variant="outline" className="h-7 px-3 text-[10px] rounded-md border-red-100 text-red-600 hover:bg-red-50">Review</Button>
                  </div>
                   <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200 shadow-sm opacity-75">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div>
                        <div className="text-xs font-bold text-gray-900">Salesforce Seats</div>
                        <div className="text-[10px] text-gray-500">Expiring in 45 days</div>
                      </div>
                    </div>
                    <Button variant="ghost" className="h-7 px-3 text-[10px] rounded-md">View</Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

const ValueProp = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-primary"></span>
              <h2 className="text-sm font-bold text-primary uppercase tracking-wider">Why ProcureFlow?</h2>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Designed for the <br/>Modern Mid-Market</h3>
            <p className="text-lg text-gray-500 mb-8 leading-relaxed">
              Enterprise suites like SAP Ariba are too expensive and complex. SMB tools like spreadsheets break at scale. ProcureFlow bridges the gap.
            </p>
            
            <div className="space-y-8">
              {[
                { title: "No more rogue spending", desc: "Gain 100% visibility into where money goes before it's spent." },
                { title: "Unified Platform", desc: "Integrates PR, PO, RFQ, and Contracts in one place. No more siloed tools." },
                { title: "Quick Deployment", desc: "Go live in days, not months. Modern API-first architecture." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="mt-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <CheckCircle2 size={20} />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <Card className="relative p-8 md:p-10 border-gray-200/60 shadow-xl bg-white/60 backdrop-blur-xl">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8 border-b border-gray-100 pb-4 flex items-center justify-between">
                  <span>Validated Pain Points</span>
                  <Search size={14} />
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors -mx-3">
                    <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">Manual Excel Chaos</div>
                      <div className="text-sm text-gray-500 mt-1 italic">"Approval cycles take days, lost requests, no visibility."</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors -mx-3">
                     <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">Missed Renewals</div>
                      <div className="text-sm text-gray-500 mt-1 italic">"Wasted budget on auto-renews and unwanted services."</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors -mx-3">
                     <div className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">No Vendor Insights</div>
                      <div className="text-sm text-gray-500 mt-1 italic">"Selection based on gut feel rather than performance scorecards."</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="text-sm text-gray-400 mb-1 font-medium">Average company loses</div>
                  <div className="flex items-baseline gap-2">
                    <div className="text-4xl font-bold text-gray-900 tracking-tight">8.6%</div>
                    <div className="text-sm font-medium text-gray-500">of contract value due to poor CLM</div>
                  </div>
                </div>
             </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="bg-white rounded-[2rem] p-12 md:p-20 border border-gray-200 shadow-2xl relative overflow-hidden group">
          {/* Decorative background effects */}
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-colors duration-700"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">Stop leaking revenue. <br/>Start controlling spend.</h2>
            <p className="text-gray-500 text-xl mb-12 max-w-2xl mx-auto">
              Join the waitlist today and get early access to the only unified procurement OS built for the modern mid-market.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="work@company.com" 
                className="w-full px-6 py-3.5 rounded-full border border-gray-200 bg-white text-gray-900 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all shadow-sm placeholder:text-gray-400"
              />
              <Button variant="primary" className="w-full sm:w-auto px-8 py-3.5 h-[54px] shadow-glow">
                Request Access
              </Button>
            </div>
            <p className="mt-6 text-sm text-gray-400">
               Limited spots available for Q3 2024
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-sm">P</div>
              <span className="font-bold text-xl text-gray-900">ProcureFlow</span>
            </div>
            <p className="text-sm text-gray-500 mb-6 max-w-xs leading-relaxed">
              The first deeply integrated Procurement + Vendor + Contract system engineered for mid-market efficiency.
            </p>
            <div className="flex space-x-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors cursor-pointer">
                 <span className="sr-only">Twitter</span>
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
              </div>
              <div className="w-8 h-8 bg-gray-50 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-colors cursor-pointer">
                 <span className="sr-only">LinkedIn</span>
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></svg>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-6 text-sm uppercase tracking-wide">Product</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary transition-colors">Workflows</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Vendor Portal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contracts</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-6 text-sm uppercase tracking-wide">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 mb-6 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-4 text-sm text-gray-600">
              <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Legal</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} ProcureFlow Inc. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm text-gray-400 font-medium">
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-surface-subtle selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <Hero />
      <BentoGrid />
      <ValueProp />
      <CTA />
      <Footer />
    </div>
  );
}