'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ProjectsProps {
  setView: (view: string) => void;
}

export default function Projects({ setView }: ProjectsProps) {
  const projetos = [
    { title: 'Karime Fibra', desc: 'Provedor de internet', img: '/karimefibra.png', github: 'https://github.com' },
  ];

  return (
    <motion.div
      key="projects"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-7xl mx-auto z-10 mt-12 px-4"
    >
      {/* Navegação*/}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6 md:gap-0">
        <button 
          onClick={() => setView('home')} 
          className="flex items-center gap-3 text-white hover:text-purple-400 transition-colors group"
        >
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
            ✧
          </motion.div>
          <span className="font-mono tracking-widest text-lg group-hover:tracking-[0.2em] transition-all">dantona</span>
        </button>

        <nav className="flex gap-4 md:gap-8 font-mono text-sm">
          <button onClick={() => setView('about')} className="text-zinc-500 hover:text-white transition-colors">/sobre mim</button>
          <button className="text-white border-b border-white pb-1">/projetos</button>
          <button onClick={() => setView('contato')} className="text-zinc-500 hover:text-white transition-colors">/contato</button>
        </nav>
      </header>

      {/* Título */}
      <h1 className="text-4xl md:text-6xl font-mono text-white mb-12 flex items-baseline gap-4">
        projetos <span className="text-zinc-700 text-2xl md:text-4xl">[{projetos.length}]</span>
      </h1>

      {/*Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projetos.map((proj, idx) => (
          <a key={idx} href={proj.github} target="_blank" rel="noopener noreferrer">
            <motion.div 
              className="group"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-full aspect-[4/3] bg-zinc-900 mb-5 overflow-hidden rounded-sm relative">
                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={proj.img} 
                  alt={proj.title} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <h2 className="text-white text-xl font-mono tracking-tight">{proj.title}</h2>
              <p className="text-zinc-500 text-sm mt-2 font-mono">{proj.desc}</p>
            </motion.div>
          </a>
        ))}
      </div>
    </motion.div>
  );
}