'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { Terminal, Cpu, Send, ChevronRight, Mail } from 'lucide-react';

import Projects from './components/Projetos';
import Sobremim from './components/Sobremim';
import Contato from './components/Contato';


const CyberStarFollower = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 25);
      mouseY.set(e.clientY - 25);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div style={{ x, y }} className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference hidden md:block">
      <svg width="50" height="50" viewBox="0 0 100 100" fill="none" className="opacity-90">
        <path d="M50 0L54 42L96 46L54 50L50 92L46 50L4 46L46 42L50 0Z" fill="white" />
        <path d="M50 20L52 48L75 50L52 52L50 75L48 52L25 50L48 48L50 20Z" fill="black" />
        <circle cx="50" cy="50" r="1.5" fill="white" />
      </svg>
    </motion.div>
  );
};
const GlitchText = ({ text }: { text: string }) => {
  return (
    <motion.h1 className="text-4xl md:text-6xl font-mono font-bold tracking-tighter text-white relative" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
      <span className="relative z-10">{text}</span>
      <motion.span className="absolute top-0 left-0 -z-10 text-red-500 opacity-70" animate={{ x: [-2, 2, -1], y: [1, -1, 0] }} transition={{ repeat: Infinity, duration: 0.2, repeatType: "mirror" }}>{text}</motion.span>
      <motion.span className="absolute top-0 left-0 -z-10 text-blue-500 opacity-70" animate={{ x: [2, -2, 1], y: [-1, 1, 0] }} transition={{ repeat: Infinity, duration: 0.2, repeatType: "mirror", delay: 0.1 }}>{text}</motion.span>
    </motion.h1>
  );
};

// MENU PRINCIPAL
const HomeMenu = ({ setView }: { setView: (view: string) => void }) => {
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const sections = [
    { id: 'about', label: '/sobre mim', icon: <Terminal size={18} /> },
    { id: 'projects', label: '/projetos', icon: <Cpu size={18} /> },
     { id: 'contato', label: '/contato', icon: <Mail size={18} /> },
  ];

  return (
    <motion.main key="home" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }} transition={{ duration: 0.5 }} className="max-w-2xl w-full space-y-10 z-10 relative m-auto">
      <header className="space-y-6 text-center md:text-left">
        <GlitchText text="Gabriel Fernando" />
        <p className="text-lg leading-relaxed text-zinc-400 max-w-xl">Entusiasta de programação. Desenvolvo soluções para melhorar o meu dia a dia utilizando código. 
          Meus projetos orbitam entre sites complexos, trabalhos para terceiros, utilidades práticas, experimentos da faculdade e soluções que não encontrei em nenhum outro lugar para os meus próprios problemas.</p>
      </header>
      <nav className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
        {sections.map((section) => (
          <motion.button key={section.id} onClick={() => setView(section.id)} onMouseEnter={() => setIsHovered(section.id)} onMouseLeave={() => setIsHovered(null)} className="group relative flex items-center justify-between p-5 border border-zinc-900 bg-zinc-950/40 backdrop-blur-sm hover:border-zinc-500 transition-all duration-500 rounded-sm overflow-hidden min-w-[180px]" whileHover={{ y: -4 }}>
            <div className="flex items-center gap-3">
              <span className="text-zinc-600 group-hover:text-white transition-colors duration-300">{section.icon}</span>
              <span className="text-sm tracking-[0.1em] group-hover:text-white transition-colors duration-300 uppercase">{section.label}</span>
            </div>
            <ChevronRight size={16} className={`transition-all duration-500 ${isHovered === section.id ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`} />
          </motion.button>
        ))}
      </nav>
    </motion.main>
  );
};

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="min-h-screen bg-black text-zinc-400 selection:bg-white selection:text-black flex flex-col items-center p-6 overflow-x-hidden font-mono md:cursor-none">
      <CyberStarFollower />
      <div className="fixed inset-0 pointer-events-none opacity-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="fixed inset-0 pointer-events-none scanline opacity-20"></div>

      <div className="w-full max-w-7xl relative flex-grow flex flex-col">
        <AnimatePresence mode="wait">
          {currentView === 'home' && <HomeMenu setView={setCurrentView} />}
          {currentView === 'about' && <Sobremim setView={setCurrentView} />}
          {currentView === 'projects' && <Projects setView={setCurrentView} />}
          {currentView === 'contato' && <Contato setView={setCurrentView} />}
          
        </AnimatePresence>
      </div>

      <style jsx global>{`
        .scanline { background: linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%); height: 10px; width: 100%; animation: scan 4s linear infinite; }
        @keyframes scan { 0% { transform: translateY(-100vh); } 100% { transform: translateY(100vh); } }
      `}</style>
    </div>
  );
}