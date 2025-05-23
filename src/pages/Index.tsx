
import { useEffect, useRef } from "react";
import { Monitor, Zap, Shield, Globe, Wifi, Code, Database, Cloud, FileText, Lock, Users, Rocket, Star, CheckCircle, ArrowRight } from "lucide-react";

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
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50",
      delay: "delay-100"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Direct browser-to-browser transfers with zero latency file streaming",
      color: "from-yellow-500 to-orange-600",
      bgColor: "bg-yellow-50",
      delay: "delay-200"
    },
    {
      icon: Shield,
      title: "End-to-End Encryption",
      description: "Military-grade encryption ensures your files remain private and secure",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      delay: "delay-300"
    },
    {
      icon: Code,
      title: "Modern Web APIs",
      description: "Built with cutting-edge browser technologies for seamless performance",
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      delay: "delay-400"
    },
    {
      icon: Lock,
      title: "Zero Storage",
      description: "Files never touch our servers - complete privacy guaranteed",
      color: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50",
      delay: "delay-500"
    },
    {
      icon: Rocket,
      title: "Instant Connection",
      description: "Connect with any device in seconds using our smart peer discovery",
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-violet-50",
      delay: "delay-600"
    }
  ];

  const architectureFlow = [
    { step: "1", title: "File Selection", desc: "User selects files from device", icon: FileText, color: "from-blue-500 to-cyan-500" },
    { step: "2", title: "WebRTC Connection", desc: "Establish P2P connection", icon: Wifi, color: "from-green-500 to-teal-500" },
    { step: "3", title: "Data Channel", desc: "Create secure data channel", icon: Database, color: "from-purple-500 to-pink-500" },
    { step: "4", title: "Transfer", desc: "Direct file transmission", icon: ArrowRight, color: "from-orange-500 to-red-500" }
  ];

  const features = [
    { text: "No file size limits", icon: CheckCircle },
    { text: "Zero server storage", icon: CheckCircle },
    { text: "End-to-end encryption", icon: CheckCircle },
    { text: "Cross-platform support", icon: CheckCircle },
    { text: "Real-time progress tracking", icon: CheckCircle },
    { text: "Multiple file support", icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative overflow-hidden py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-purple-100/30"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Monitor className="w-16 h-16 text-blue-600 animate-bounce mr-4" />
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
              Nowhile.com
            </h1>
          </div>
          <p className="text-2xl text-gray-700 mb-8 animate-fade-in delay-100">
            <span className="underline-animation font-semibold">Revolutionary File Sharing Platform</span>
          </p>
          <div className="text-lg text-gray-600 animate-fade-in delay-200">
            Powered by <span className="text-blue-600 font-semibold underline-animation">WebRTC</span> • 
            Built with <span className="text-green-600 font-semibold underline-animation">Modern Web Technologies</span>
          </div>
        </div>
      </header>

      {/* Animated Icons Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 animate-on-scroll">
            <span className="underline-animation">Why Choose Nowhile.com?</span>
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="animate-on-scroll group" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <feature.icon className="w-12 h-12 text-green-600 mx-auto mb-4 group-hover:animate-pulse" />
                  <p className="text-gray-700 font-medium">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent animate-on-scroll">
            <span className="underline-animation">How Nowhile.com Works</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-on-scroll">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                🚀 <span className="underline-animation">Revolutionary P2P Architecture</span>
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Nowhile.com eliminates traditional file servers by leveraging <span className="text-blue-600 font-semibold underline-animation">WebRTC technology</span>. 
                Files are transferred directly between browsers, ensuring maximum speed and privacy.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Wifi className="w-5 h-5 text-blue-500 mr-3 animate-pulse" />
                  <span className="underline-animation">No file size limitations</span>
                </li>
                <li className="flex items-center">
                  <Shield className="w-5 h-5 text-green-500 mr-3 animate-pulse" />
                  <span className="underline-animation">Zero server storage</span>
                </li>
                <li className="flex items-center">
                  <Zap className="w-5 h-5 text-yellow-500 mr-3 animate-pulse" />
                  <span className="underline-animation">Instant transfers</span>
                </li>
              </ul>
            </div>
            
            <div className="animate-on-scroll delay-200">
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border-2 border-purple-200 shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                  <span className="underline-animation">WebRTC Data Flow</span>
                </h4>
                <div className="space-y-4">
                  {architectureFlow.map((item, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center text-white font-semibold group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="text-gray-800 font-medium underline-animation">{item.title}</div>
                        <div className="text-gray-600 text-sm">{item.desc}</div>
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
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent animate-on-scroll">
            <span className="underline-animation">Our Technology Stack</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {techStackItems.map((item, index) => (
              <div 
                key={index}
                className={`animate-on-scroll ${item.delay} group hover:scale-105 transition-all duration-300`}
              >
                <div className={`${item.bgColor} rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg`}>
                    <item.icon className="w-8 h-8 text-white animate-pulse" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    <span className="underline-animation">{item.title}</span>
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WebRTC Deep Dive */}
      <section className="py-20 px-6 bg-gradient-to-r from-green-50 to-cyan-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent animate-on-scroll">
            <span className="underline-animation">WebRTC Integration Deep Dive</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="animate-on-scroll delay-100 group">
              <div className="bg-white rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Database className="w-12 h-12 text-blue-500 mx-auto mb-4 group-hover:animate-spin" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  <span className="underline-animation">Data Channels</span>
                </h3>
                <p className="text-gray-600">Reliable, ordered data transmission using SCTP protocol for guaranteed file integrity</p>
              </div>
            </div>
            
            <div className="animate-on-scroll delay-200 group">
              <div className="bg-white rounded-2xl p-6 border-2 border-green-200 hover:border-green-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Shield className="w-12 h-12 text-green-500 mx-auto mb-4 group-hover:animate-bounce" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  <span className="underline-animation">DTLS Encryption</span>
                </h3>
                <p className="text-gray-600">Industry-standard encryption ensures all file transfers are completely secure</p>
              </div>
            </div>
            
            <div className="animate-on-scroll delay-300 group">
              <div className="bg-white rounded-2xl p-6 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Cloud className="w-12 h-12 text-purple-500 mx-auto mb-4 group-hover:animate-pulse" />
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  <span className="underline-animation">ICE Candidates</span>
                </h3>
                <p className="text-gray-600">Smart NAT traversal ensures connections work across any network configuration</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Statistics */}
      <section className="py-16 px-6 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "0ms", label: "Latency", icon: Zap, color: "text-yellow-600" },
              { number: "100%", label: "Secure", icon: Shield, color: "text-green-600" },
              { number: "∞", label: "File Size", icon: Database, color: "text-blue-600" },
              { number: "0", label: "Servers Used", icon: Cloud, color: "text-purple-600" }
            ].map((stat, index) => (
              <div key={index} className="animate-on-scroll group" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <stat.icon className={`w-12 h-12 ${stat.color} mx-auto mb-4 group-hover:animate-bounce`} />
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Copyright */}
      <footer className="py-12 px-6 bg-gradient-to-r from-gray-50 to-slate-50 border-t-2 border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Monitor className="w-8 h-8 text-blue-600 animate-pulse" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Nowhile.com/file
              </span>
              <Star className="w-8 h-8 text-yellow-500 animate-spin" />
            </div>
            <p className="text-gray-600 mb-6">
              <span className="underline-animation font-semibold">Next-generation file sharing</span> • 
              <span className="underline-animation font-semibold"> Zero storage</span> • 
              <span className="underline-animation font-semibold"> Maximum privacy</span>
            </p>
          </div>
          
          <div className="border-t border-gray-300 pt-8 text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <span className="text-xl">©</span>
              <span className="font-medium">2024 Nowhile.com - All rights reserved</span>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Powered by WebRTC technology for secure, peer-to-peer file sharing
            </p>
          </div>
        </div>
      </footer>

      <style>{`
        .underline-animation {
          position: relative;
          display: inline-block;
          cursor: pointer;
        }
        
        .underline-animation::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 2px;
          bottom: 0;
          left: 0;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6, #ef4444);
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.3s ease-out;
        }
        
        .underline-animation:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      `}</style>
    </div>
  );
};

export default Index;
