import React, { useState, useEffect } from "react";

// --- DOMINANT ANIMATED SVG COMPONENTS ---

const AnimatedInstallation = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible drop-shadow-[0_0_60px_rgba(59,130,246,0.6)]">
      <path d="M 50 150 L 150 150 M 100 100 L 100 200" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4 4" className="opacity-40" />
      <g className="animate-[bounce_4s_infinite_ease-in-out]">
        <rect x="65" y="50" width="70" height="70" rx="8" fill="none" stroke="#3b82f6" strokeWidth="6" />
        <rect x="75" y="60" width="50" height="50" rx="4" fill="#3b82f6" fillOpacity="0.3" />
        <line x1="100" y1="-20" x2="100" y2="50" stroke="#3b82f6" strokeWidth="4" strokeDasharray="8 8" className="opacity-80" />
      </g>
      <ellipse cx="100" cy="150" rx="60" ry="15" fill="#3b82f6" fillOpacity="0.4" className="animate-[pulse_2s_infinite]" />
    </svg>
  </div>
);

const AnimatedCommissioning = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible drop-shadow-[0_0_60px_rgba(16,185,129,0.6)]">
      <circle cx="100" cy="100" r="70" fill="none" stroke="#10b981" strokeWidth="4" strokeOpacity="0.3" />
      <circle cx="100" cy="100" r="70" fill="none" stroke="#10b981" strokeWidth="10" strokeDasharray="440" strokeDashoffset="440" className="animate-[dash_3s_infinite_ease-in-out]" strokeLinecap="round" transform="rotate(-90 100 100)" />
      <g className="animate-[spin_4s_infinite_ease-in-out]" style={{ transformOrigin: "100px 100px" }}>
        <line x1="100" y1="100" x2="100" y2="40" stroke="#10b981" strokeWidth="6" strokeLinecap="round" />
        <circle cx="100" cy="100" r="12" fill="#10b981" />
      </g>
      <path d="M 130 50 L 145 65 L 175 25" stroke="#10b981" strokeWidth="8" fill="none" strokeLinecap="round" strokeLinejoin="round" className="animate-[pulse_1.5s_infinite]" />
    </svg>
    <style>{`@keyframes dash { 0% { stroke-dashoffset: 440; } 50% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: 440; } }`}</style>
  </div>
);

const AnimatedGuidance = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible drop-shadow-[0_0_60px_rgba(245,158,11,0.6)]">
      <rect x="20" y="40" width="160" height="120" rx="12" fill="none" stroke="#f59e0b" strokeWidth="8" />
      <rect x="30" y="50" width="140" height="100" rx="6" fill="#f59e0b" fillOpacity="0.15" />
      <line x1="45" y1="75" x2="135" y2="75" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" className="animate-[pulse_1.5s_infinite]" />
      <line x1="45" y1="100" x2="155" y2="100" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" className="animate-[pulse_2s_infinite]" />
      <line x1="45" y1="125" x2="105" y2="125" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" className="animate-[pulse_2.5s_infinite]" />
      <path d="M 140 120 L 155 160 L 160 145 L 180 165 L 190 155 L 170 135 L 185 130 Z" fill="#f59e0b" className="animate-[bounce_2s_infinite]" />
    </svg>
  </div>
);

const AnimatedMaintenance = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible drop-shadow-[0_0_60px_rgba(99,102,241,0.6)]">
      <g className="animate-[spin_10s_linear_infinite]" style={{ transformOrigin: "100px 100px" }}>
        <circle cx="100" cy="100" r="60" fill="none" stroke="#6366f1" strokeWidth="12" />
        {[0, 45, 90, 135].map(deg => (
          <line key={deg} x1="100" y1="20" x2="100" y2="180" stroke="#6366f1" strokeWidth="16" transform={`rotate(${deg} 100 100)`} />
        ))}
        <circle cx="100" cy="100" r="35" fill="#030712" />
      </g>
      <g className="animate-[pulse_3s_infinite_ease-in-out]" style={{ transformOrigin: "100px 100px", transform: "scale(1.2)" }}>
        <path d="M 150 50 L 180 20 A 15 15 0 0 0 150 -10 A 15 15 0 0 0 120 20 L 150 50 Z" fill="none" stroke="#6366f1" strokeWidth="8" />
        <line x1="150" y1="50" x2="50" y2="150" stroke="#6366f1" strokeWidth="16" strokeLinecap="round" />
        <circle cx="50" cy="150" r="12" fill="#6366f1" />
      </g>
    </svg>
  </div>
);

const AnimatedAssistance = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible drop-shadow-[0_0_60px_rgba(225,29,72,0.6)]">
      <circle cx="100" cy="100" r="20" fill="none" stroke="#e11d48" strokeWidth="8" className="animate-[ping_3s_infinite]" />
      <circle cx="100" cy="100" r="80" fill="none" stroke="#e11d48" strokeWidth="4" strokeDasharray="20 20" className="animate-[spin_10s_linear_infinite]" style={{ transformOrigin: "100px 100px" }} />
      <circle cx="100" cy="100" r="50" fill="none" stroke="#e11d48" strokeWidth="2" strokeDasharray="10 30" className="animate-[spin_5s_linear_infinite_reverse]" style={{ transformOrigin: "100px 100px" }} />
      <circle cx="100" cy="100" r="10" fill="#e11d48" className="animate-pulse" />
    </svg>
  </div>
);

const AnimatedAfterSales = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible drop-shadow-[0_0_60px_rgba(6,182,212,0.6)]">
      <g className="animate-[bounce_4s_infinite]">
        <polygon points="100,20 160,50 160,110 100,140 40,110 40,50" fill="none" stroke="#06b6d4" strokeWidth="8" strokeLinejoin="round" />
        <line x1="100" y1="20" x2="100" y2="80" stroke="#06b6d4" strokeWidth="8" strokeLinecap="round" />
        <line x1="100" y1="80" x2="40" y2="110" stroke="#06b6d4" strokeWidth="8" strokeLinecap="round" />
        <line x1="100" y1="80" x2="160" y2="110" stroke="#06b6d4" strokeWidth="8" strokeLinecap="round" />
      </g>
      <ellipse cx="100" cy="170" rx="50" ry="10" fill="#06b6d4" fillOpacity="0.4" className="animate-[pulse_2s_infinite]" />
    </svg>
  </div>
);

const steps = [
  { id: "01", title: "Installation", desc: "Professional machinery installation at your facility. Flawlessly connected to utilities.", bg: "bg-blue-500", glow: "shadow-[0_0_60px_rgba(59,130,246,0.8)]", color: "#3b82f6", Graphic: AnimatedInstallation },
  { id: "02", title: "Commissioning", desc: "Full machine testing and pressure calibration. We confirm 100% correct operation.", bg: "bg-emerald-500", glow: "shadow-[0_0_60px_rgba(16,185,129,0.8)]", color: "#10b981", Graphic: AnimatedCommissioning },
  { id: "03", title: "Operator Guidance", desc: "Comprehensive on-the-floor training for your operators on safety and best practices.", bg: "bg-amber-500", glow: "shadow-[0_0_60px_rgba(245,158,11,0.8)]", color: "#f59e0b", Graphic: AnimatedGuidance },
  { id: "04", title: "Maintenance", desc: "Structured guidance on routine maintenance and rapid technical assistance.", bg: "bg-indigo-500", glow: "shadow-[0_0_60px_rgba(99,102,241,0.8)]", color: "#6366f1", Graphic: AnimatedMaintenance },
  { id: "05", title: "Technical Assistance", desc: "On-call technical support to rapidly diagnose and resolve operational issues.", bg: "bg-rose-500", glow: "shadow-[0_0_60px_rgba(225,29,72,0.8)]", color: "#e11d48", Graphic: AnimatedAssistance },
  { id: "06", title: "After-Sales Support", desc: "Priority spare parts assistance and ongoing structural service support.", bg: "bg-cyan-500", glow: "shadow-[0_0_60px_rgba(6,182,212,0.8)]", color: "#06b6d4", Graphic: AnimatedAfterSales }
];

export default function AboutCarousel() {
  const [activeStep, setActiveStep] = useState(0);
  const activeColor = steps[activeStep].color;

  // AUTO-MOVE EVERY 4 SECONDS
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[750px] md:h-[850px] rounded-[3rem] overflow-hidden border border-neutral-800 shadow-2xl bg-[#030712] flex flex-col">
      
      {/* Holographic Grid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" style={{ perspective: "1000px" }}>
        <div 
          className="absolute inset-[-100%] z-0 opacity-20 transition-all duration-1000 ease-in-out"
          style={{
            backgroundImage: `linear-gradient(${activeColor}33 2px, transparent 2px), linear-gradient(90deg, ${activeColor}33 2px, transparent 2px)`,
            backgroundSize: "50px 50px",
            transform: `rotateX(60deg) rotateZ(${activeStep * 15}deg) translateY(${activeStep * -100}px)`,
            transformOrigin: "center center",
          }}
        ></div>
        <div 
          className="absolute inset-0 z-0 opacity-50 mix-blend-screen transition-all duration-1000 ease-in-out"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${activeColor}88 0%, transparent 60%)`
          }}
        ></div>
      </div>

      {/* HTML UI Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between p-8 md:p-12">
        
        {/* Top Controls (Centered) */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 z-30">
          {steps.map((step, index) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className={`w-12 h-12 md:w-14 md:h-14 rounded-full font-bold transition-all duration-500 z-30 flex items-center justify-center text-sm md:text-lg ${activeStep === index ? `${step.bg} text-white ${step.glow} scale-110` : 'bg-white/5 text-white/50 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-white/30'}`}
            >
              {step.id}
            </button>
          ))}
        </div>
        
        {/* THE CENTERED DOMINANT GRAPHICS */}
        <div className="absolute top-28 bottom-48 left-0 right-0 z-10 flex items-center justify-center pointer-events-none">
          {steps.map((step, index) => {
            const Graphic = step.Graphic;
            return (
              <div 
                key={step.id}
                className="absolute transition-all duration-700 ease-in-out w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] flex items-center justify-center"
                style={{
                  opacity: activeStep === index ? 1 : 0,
                  transform: `scale(${activeStep === index ? 1 : 0.8})`,
                  visibility: activeStep === index ? 'visible' : 'hidden'
                }}
              >
                <div className="w-full h-full drop-shadow-[0_0_80px_rgba(255,255,255,0.15)]">
                  <Graphic />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Content Card */}
        <div className="z-30 transition-all duration-500 ease-in-out flex justify-center w-full">
          <div className="bg-white/5 backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-3xl w-full max-w-4xl text-center text-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            <div 
              className="absolute left-0 top-0 right-0 h-[2px] transition-colors duration-500" 
              style={{ 
                background: `linear-gradient(90deg, transparent, ${activeColor}, transparent)`,
                boxShadow: `0 0 20px ${activeColor}` 
              }}
            ></div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 transition-colors duration-500" style={{ color: activeColor }}>
              {steps[activeStep].title}
            </h3>
            <p className="text-lg text-white/80 leading-relaxed max-w-2xl mx-auto font-medium">
              {steps[activeStep].desc}
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
}