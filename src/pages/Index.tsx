
import { useEffect, useRef } from "react";
import { Monitor, Zap, Shield, Globe, Wifi, Code, Database, Cloud } from "lucide-react";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  useEffect(() => {
    // Animation for elements that should animate when they enter the viewport
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const techStackItems = [
    {
      icon: Globe,
      title: "WebRTC Integration",
      description: "Real-time peer-to-peer communication for instant file sharing without servers",
      color: "from-blue-400 to-purple-600",
      delay: "delay-100"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Direct browser-to-browser transfers with zero latency file streaming",
      color: "from-yellow-400 to-orange-500",
      delay: "delay-200"
    },
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "Military-grade encryption ensures your files remain private and secure",
      color: "from-green-400 to-teal-500",
      delay: "delay-300"
    },
    {
      icon: Code,
      title: "Modern Web APIs",
      description: "Built with cutting-edge browser technologies for seamless performance",
      color: "from-pink-400 to-red-500",
      delay: "delay-400"
    }
  ];

  const architectureFlow = [
    { step: "1", title: "File Selection", desc: "User selects files from device" },
    { step: "2", title: "WebRTC Connection", desc: "Establish P2P connection" },
    { step: "3", title: "Data Channel", desc: "Create secure data channel" },
    { step: "4", title: "Transfer", desc: "Direct file transmission" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative overflow-hidden py-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 animate-fade-in">
            Nowhile.com
          </h1>
          <p className="text-2xl text-gray-300 mb-8 animate-fade-in delay-100">
            Revolutionary File Sharing Platform
          </p>
          <div className="text-lg text-gray-400 animate-fade-in delay-200">
            Powered by <span className="text-blue-400 font-semibold">WebRTC</span> • 
            Built with <span className="text-green-400 font-semibold">Modern Web Technologies</span>
          </div>
        </div>
      </header>

      {/* How It Works Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent animate-on-scroll">
            How Nowhile.com Works
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-semibold text-white mb-6">
                🚀 Revolutionary P2P Architecture
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Nowhile.com eliminates traditional file servers by leveraging WebRTC technology. 
                Files are transferred directly between browsers, ensuring maximum speed and privacy.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <Wifi className="w-5 h-5 text-blue-400 mr-3" />
                  No file size limitations
                </li>
                <li className="flex items-center">
                  <Shield className="w-5 h-5 text-green-400 mr-3" />
                  Zero server storage
                </li>
                <li className="flex items-center">
                  <Zap className="w-5 h-5 text-yellow-400 mr-3" />
                  Instant transfers
                </li>
              </ul>
            </div>
            
            <div className="animate-on-scroll delay-200">
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-8 border border-purple-500/20">
                <h4 className="text-xl font-semibold text-white mb-4">WebRTC Data Flow</h4>
                <div className="space-y-4">
                  {architectureFlow.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        {item.step}
                      </div>
                      <div>
                        <div className="text-white font-medium">{item.title}</div>
                        <div className="text-gray-400 text-sm">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-on-scroll">
            Our Technology Stack
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStackItems.map((item, index) => (
              <div 
                key={index}
                className={`animate-on-scroll ${item.delay} group hover:scale-105 transition-all duration-300`}
              >
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WebRTC Deep Dive */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent animate-on-scroll">
            WebRTC Integration Deep Dive
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="animate-on-scroll delay-100">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl p-6 border border-blue-500/20">
                <Database className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Data Channels</h3>
                <p className="text-gray-400">Reliable, ordered data transmission using SCTP protocol for guaranteed file integrity</p>
              </div>
            </div>
            
            <div className="animate-on-scroll delay-200">
              <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-2xl p-6 border border-green-500/20">
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">DTLS Encryption</h3>
                <p className="text-gray-400">Industry-standard encryption ensures all file transfers are completely secure</p>
              </div>
            </div>
            
            <div className="animate-on-scroll delay-300">
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20">
                <Cloud className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">ICE Candidates</h3>
                <p className="text-gray-400">Smart NAT traversal ensures connections work across any network configuration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Monitor className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Nowhile.com/file
            </span>
          </div>
          <p className="text-gray-400">
            Next-generation file sharing • Zero storage • Maximum privacy
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
