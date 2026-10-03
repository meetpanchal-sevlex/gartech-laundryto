import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Installation",
    color: "bg-blue-500",
    textColor: "text-blue-600",
    shadow: "shadow-blue-500/20",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-500"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    ),
    description: "Professional machinery installation at your facility. Our engineers ensure machines are correctly positioned, laser-levelled, and flawlessly connected to your utility infrastructure."
  },
  {
    id: "02",
    title: "Commissioning",
    color: "bg-emerald-500",
    textColor: "text-emerald-600",
    shadow: "shadow-emerald-500/20",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-emerald-500"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    ),
    description: "Full machine testing, pressure calibration, and thermal validation after installation. We confirm 100% correct operation before your team ever touches the equipment."
  },
  {
    id: "03",
    title: "Operator Guidance",
    color: "bg-amber-500",
    textColor: "text-amber-600",
    shadow: "shadow-amber-500/20",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-amber-500"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    description: "Comprehensive, on-the-floor training for your operators. We teach correct machine settings, safety protocols, and best practices tailored to the specific textiles you process."
  },
  {
    id: "04",
    title: "Ongoing Maintenance",
    color: "bg-indigo-500",
    textColor: "text-indigo-600",
    shadow: "shadow-indigo-500/20",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-indigo-500"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
    description: "Structured guidance on routine maintenance. We provide preventive schedules and rapid technical assistance to resolve operational bottlenecks and minimize downtime."
  }
];

export default function ServiceCarousel() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Horizontal Tabs */}
      <div className="flex flex-col md:flex-row justify-between items-center relative mb-12 gap-4 md:gap-0">
        
        {/* Background Track (Desktop only) */}
        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-neutral-200 -translate-y-1/2 z-0 rounded-full"></div>
        
        {/* Active Progress Bar (Desktop only) */}
        <motion.div 
          className="hidden md:block absolute top-1/2 left-0 h-1 bg-zinc-950 -translate-y-1/2 z-0 rounded-full"
          initial={false}
          animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        ></motion.div>

        {steps.map((step, index) => {
          const isActive = index === activeStep;
          const isPassed = index < activeStep;
          
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(index)}
              className="relative z-10 flex items-center justify-center group focus:outline-none w-full md:w-auto"
            >
              <motion.div 
                className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center font-bold text-xl md:text-2xl transition-colors duration-300 shadow-lg border-4 ${isActive || isPassed ? 'bg-zinc-950 text-white border-zinc-950' : 'bg-white text-neutral-400 border-neutral-200 group-hover:border-neutral-300'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {step.id}
              </motion.div>
              {/* Title indicator for desktop below the circle */}
              <div className="absolute top-24 hidden md:block whitespace-nowrap">
                <span className={`text-sm font-semibold transition-colors duration-300 ${isActive ? 'text-zinc-950' : 'text-neutral-400'}`}>
                  {step.title}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Spacing for the absolute titles on desktop */}
      <div className="hidden md:block h-12"></div>

      {/* Content Carousel */}
      <div className="relative bg-white rounded-[2rem] border border-neutral-200/80 shadow-xl overflow-hidden min-h-[300px] md:min-h-[250px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute inset-0 p-8 md:p-12 flex flex-col justify-center"
          >
            <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-neutral-50 border border-neutral-200 w-max mb-6`}>
              {steps[activeStep].icon}
              <span className={`text-sm font-bold uppercase tracking-wider ${steps[activeStep].textColor}`}>
                Step {steps[activeStep].id}
              </span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-zinc-950 mb-4">
              {steps[activeStep].title}
            </h3>
            
            <p className="text-lg text-neutral-500 leading-relaxed max-w-3xl">
              {steps[activeStep].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}