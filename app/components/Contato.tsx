import React, { useState, useRef } from 'react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

// Ícone SVG customizado do WhatsApp
const WhatsappIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

interface ContatoProps {
  setView: (view: string) => void;
}

export default function Contato({ setView }: ContatoProps) {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [mensagem, setMensagem] = useState('');
  const maxCaracteres = 1000;

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    if (form.current) {
      emailjs.sendForm(
        'service_t6gn5ug',
        'template_3zwwj3k',
        form.current,
        'S_-v9daexkkfmxo1X'
      )
      .then(() => {
          alert('Mensagem enviada com sucesso!');
          setMensagem('');
          form.current?.reset();
      }, (error) => {
          alert(`Erro ao enviar mensagem: ${error.text}`);
          console.error('EmailJS Error:', error);
      })
      .finally(() => {
        setIsSending(false);
      });
    }
  };

  return (
    <motion.div
      key="contact"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-5xl mx-auto z-10 mt-12 px-4 font-mono pb-20"
    >
        {/* Navegação Superior */}
        <header className="flex flex-col items-center mb-24 space-y-8">
          <button onClick={() => setView('home')} className="flex items-center gap-3 text-white hover:text-purple-400 transition-colors group">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
              ✧
            </motion.div>
            <span className="font-mono tracking-widest text-lg group-hover:tracking-[0.2em] transition-all">dantona</span>
          </button>
          <nav className="flex gap-8 text-sm tracking-wider">
            <button onClick={() => setView('about')} className="text-zinc-500 hover:text-white transition-colors">/sobre mim</button>
            <button onClick={() => setView('projects')} className="text-zinc-500 hover:text-white transition-colors">/projetos</button>
            <button className="text-white border-b border-white pb-1">/contato</button>
          </nav>
        </header>

      
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white flex items-center tracking-tight">
            contato
            <motion.span 
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block w-[14px] h-[36px] md:h-[42px] bg-[#555] ml-3"
            ></motion.span>
          </h1>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
       
          <div>
            <form ref={form} className="space-y-4" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="user_name"
                  className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-4 text-sm focus:outline-none focus:border-[#444] text-white transition-colors placeholder-[#444]"
                  placeholder="nome"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-4 text-sm focus:outline-none focus:border-[#444] text-white transition-colors placeholder-[#444]"
                  placeholder="email"
                  required
                />
              </div>
              
              <div className="relative">
                <textarea
                  name="message"
                  rows={5}
                  maxLength={maxCaracteres}
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                  className="w-full bg-[#0a0a0a] border border-[#1a1a1a] rounded-xl p-4 text-sm focus:outline-none focus:border-[#444] text-white transition-colors resize-none placeholder-[#444]"
                  placeholder="mensagem..."
                  required
                ></textarea>
                <div className="absolute bottom-4 right-4 text-xs text-[#444]">
                  {mensagem.length}/{maxCaracteres}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`bg-[#111] hover:bg-[#222] text-white px-8 py-3.5 rounded-xl text-sm transition-colors border border-[#222] hover:border-[#444] flex items-center gap-3 w-full md:w-auto ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSending ? 'enviando...' : 'enviar'} <Send size={14} />
              </button>
            </form>
          </div>

         
          <div>
            <div className="flex flex-col gap-12">
              
              {/* Categoria*/}
              <div>
                <h3 className="text-white mb-6 text-sm tracking-wider">conexões</h3>
                <div className="flex flex-col gap-5">
                  <a href="mailto:gabrieldantonna@gmail.com" className="flex items-center gap-4 text-[#888] hover:text-white transition-colors group w-fit">
                    <Mail size={20} className="group-hover:text-white transition-colors" />
                    <span className="text-sm border-b border-transparent group-hover:border-white transition-colors pb-0.5">gabrieldantonna@gmail.com</span>
                  </a>
                  <a href="https://wa.me/5592995196867" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-[#888] hover:text-white transition-colors group w-fit">
                    <WhatsappIcon size={20} className="group-hover:text-white transition-colors" />
                    <span className="text-sm border-b border-transparent group-hover:border-white transition-colors pb-0.5">+55 (92) 99519-6867</span>
                  </a>
                  <a href="https:linkedin.com/in/gabrieldantonna" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-[#888] hover:text-white transition-colors group w-fit">
                    <Linkedin size={20} className="group-hover:text-white transition-colors" />
                    <span className="text-sm border-b border-transparent group-hover:border-white transition-colors pb-0.5">linkedin.com/gabrieldantonna</span>
                  </a>
                  <a href="https:github.com/dantonna" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-[#888] hover:text-white transition-colors group w-fit">
                    <Github size={20} className="group-hover:text-white transition-colors" />
                    <span className="text-sm border-b border-transparent group-hover:border-white transition-colors pb-0.5">github.com/dantonna</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
    </motion.div>
  );
}