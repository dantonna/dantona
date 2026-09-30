'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SiJavascript, SiTypescript, SiHtml5, SiCss, SiNextdotjs, SiReact, SiTailwindcss, SiFramer, SiSpringboot, SiFigma, SiGit, SiGithub } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

interface SobremimProps {
  setView: (view: string) => void;
}

export default function Sobremim({ setView }: SobremimProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <motion.div
      key="about"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-4xl mx-auto z-10 mt-12 px-4 font-mono pb-20"
    >
      {/* Navegação*/}
      <header className="flex flex-col items-center mb-16 gap-6">
        <button 
          onClick={() => setView('home')} 
          className="flex items-center gap-3 text-white hover:text-purple-400 transition-colors group"
        >
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
            ✧
          </motion.div>
          <span className="tracking-widest text-lg group-hover:tracking-[0.2em] transition-all">dantona</span>
        </button>

        <nav className="flex gap-4 md:gap-8 text-sm">
          <button className="text-white border-b border-white pb-1">/sobre mim</button>
          <button onClick={() => setView('projects')} className="text-zinc-500 hover:text-white transition-colors">/projetos</button>
          <button onClick={() => setView('contato')} className="text-zinc-500 hover:text-white transition-colors">/contato</button>
        </nav>
      </header>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Título e Bio */}
          <motion.section variants={itemVariants} className="space-y-6">
            <h1 className="text-4xl md:text-5xl text-white tracking-tight flex items-center gap-2">
              sobre mim
              <motion.span 
                animate={{ opacity: [1, 0] }} 
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                className="w-3 h-8 bg-white inline-block"
              />
            </h1>
            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              Olá, meu nome é Gabriel, tenho 22 anos e sou estudante de Tecnologia, e moro em Manaus. Meu primeiro contato com programação aconteceu aos 9 anos de idade, quando quis criar um servidor para SA-MP, a versão online de Grand Theft Auto: San Andreas. Na época, utilizava a linguagem PAWN para modificar o jogo e criar experiências do meu próprio jeito.

Desde então, a vontade de construir coisas para mim mesmo sempre foi o que mais me moveu. Muitas das coisas que aprendi vieram justamente dessa curiosidade constante de criar soluções, experimentar ideias e transformar o que eu imaginava em algo funcional.

Sou apaixonado por desenvolver coisas estéticas e bem construídas. Hoje concentro meus estudos em criar sistemas que sejam ao mesmo tempo bonitos, funcionais e bem estruturados. Meu objetivo é me tornar um arquiteto de sistemas, capaz de projetar e construir arquiteturas grandes, sólidas e elegantes.
            </p>
          </motion.section>

          {/* Habilidades*/}
          <motion.section variants={itemVariants} className="space-y-6">
            <h2 className="text-white text-xl tracking-tight">habilidades</h2>
            <div className="grid grid-cols-4 gap-6">
              {/* Linguagens */}
              <div className="space-y-4">
                <h3 className="text-zinc-400 text-sm font-medium text-center">linguagens</h3>
                <div className="flex flex-col gap-4">
                  {[
                    { 
                      name: 'JavaScript', 
                      icon: <SiJavascript size={48} color="#F7DF1E" />
                    },
                    { 
                      name: 'TypeScript', 
                      icon: <SiTypescript size={48} color="#3178C6" />
                    },
                    { 
                      name: 'HTML', 
                      icon: <SiHtml5 size={48} color="#E34C26" />
                    },
                    { 
                      name: 'CSS', 
                      icon: <SiCss size={48} color="#1572B6" />
                    },
                    { 
                      name: 'Python', 
                      icon: <Image src="/python-icon.png" alt="Python" width={48} height={48} style={{ width: 48, height: 48, objectFit: 'contain' }} />
                    },
                    { 
                      name: 'Java', 
                      icon: <Image src="/java-icon.png" alt="Java" width={48} height={48} style={{ width: 48, height: 48, objectFit: 'contain' }} />
                    },
                  ].map((tech, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1, duration: 0.3 }}
                      className="flex justify-center items-center p-3 rounded-lg bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors group cursor-default"
                      title={tech.name}
                    >
                      {tech.icon}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Frameworks & Bibliotecas */}
              <div className="space-y-4">
                <h3 className="text-zinc-400 text-sm font-medium text-center">frameworks</h3>
                <div className="flex flex-col gap-4">
                  {[
                    { 
                      name: 'Next.js', 
                      icon: <SiNextdotjs size={48} color="#FFFFFF" />
                    },
                    { 
                      name: 'React', 
                      icon: <SiReact size={48} color="#61DAFB" />
                    },
                    { 
                      name: 'Tailwind CSS', 
                      icon: <SiTailwindcss size={48} color="#06B6D4" />
                    },
                    { 
                      name: 'Framer Motion', 
                      icon: <SiFramer size={48} color="#0055FF" />
                    },
                    { 
                      name: 'Spring Boot', 
                      icon: <SiSpringboot size={48} color="#6DB33F" />
                    },
                  ].map((tech, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (i + 6) * 0.1, duration: 0.3 }}
                      className="flex justify-center items-center p-3 rounded-lg bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors group cursor-default"
                      title={tech.name}
                    >
                      {tech.icon}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Ferramentas */}
              <div className="space-y-4">
                <h3 className="text-zinc-400 text-sm font-medium text-center">ferramentas</h3>
                <div className="flex flex-col gap-4">
                  {[
                    { 
                      name: 'VS Code', 
                      icon: <VscVscode size={48} color="#007ACC" />
                    },
                    { 
                      name: 'Figma', 
                      icon: <SiFigma size={48} color="#F24E1E" />
                    },
                    { 
                      name: 'Git', 
                      icon: <SiGit size={48} color="#F1502F" />
                    },
                  ].map((tech, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: (i + 11) * 0.1, duration: 0.3 }}
                      className="flex justify-center items-center p-3 rounded-lg bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors group cursor-default"
                      title={tech.name}
                    >
                      {tech.icon}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="space-y-4">
                <h3 className="text-zinc-400 text-sm font-medium text-center">links</h3>
                <div className="flex flex-col gap-4">
                  <motion.a
                    href="https://github.com/dantonna"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4, duration: 0.3 }}
                    className="flex justify-center items-center p-3 rounded-lg bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors group"
                    title="GitHub"
                  >
                    <SiGithub size={48} color="#FFFFFF" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
      </motion.div>
    </motion.div>
  );
}
