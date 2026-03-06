"use client"

import { useState, useEffect } from "react"
import { Mic, MicOff, MessageSquare, Phone, Volume2, TerminalSquare, Send } from "lucide-react"

export function LiveCodeCollaboration() {
  const [step, setStep] = useState(0)

  // 15 steps, 1.2s each for a long, complex animation
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 15)
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 sm:py-32 overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            A Complete Collaborative Workspace
          </h2>
        </div>

        {/* IDE Simulation Wrapped in .dark and with explicit colors to force dark theme */}
        <div className="mx-auto w-[85%] dark">
          <div className="flex flex-col rounded-2xl bg-[#16171a] border border-white/5 overflow-hidden shadow-2xl h-[510px] lg:h-[595px] relative">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#1e1f23]">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <div className="h-3 w-3 rounded-full bg-green-500/80" />
              </div>
              
              <div className="flex bg-black/30 border border-white/5 rounded-md px-3 py-1 text-[10px] text-gray-400 font-mono">
                frontend/src/components/Header.tsx
              </div>

              <div className="flex items-center gap-1.5 text-white">
                <TerminalSquare className="h-4 w-4 text-primary" />
                <span className="font-mono text-xs font-bold tracking-wider">-Zero IDE</span>
              </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
              {/* Left Sidebar (Voice & Chat) */}
              <div className="w-56 border-r border-white/5 bg-[#16171a] flex flex-col hidden md:flex">
                
                {/* Voice Channel */}
                <div className="p-4 border-b border-white/5">
                  <p className="text-[10px] font-bold uppercase text-gray-500 mb-3 flex items-center gap-2">
                    <Volume2 className="h-3 w-3" /> Voice Channels
                  </p>
                  
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 px-2 py-1.5 bg-primary/20 rounded-md">
                      <Phone className="h-3 w-3 text-primary" />
                      <span className="text-xs font-medium text-white">Team Standup</span>
                    </div>
                    
                    {/* Users in Voice */}
                    <div className="pl-4 space-y-2 mt-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-5 w-5 rounded-full bg-blue-500 flex items-center justify-center text-[8px] text-white font-bold">KJ</div>
                          <span className="text-xs text-gray-400">Karan</span>
                        </div>
                        <MicOff className="h-2.5 w-2.5 text-gray-600" />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`h-5 w-5 rounded-full bg-emerald-500 flex items-center justify-center text-[8px] text-white font-bold transition-all ${step % 2 !== 0 ? 'ring-2 ring-emerald-500/50 ring-offset-1 ring-offset-[#16171a]' : ''}`}>AL</div>
                          <span className={`text-xs ${step % 2 !== 0 ? 'text-white' : 'text-gray-400'}`}>Alex</span>
                        </div>
                        {step % 2 !== 0 ? <Mic className="h-2.5 w-2.5 text-emerald-500" /> : <MicOff className="h-2.5 w-2.5 text-gray-600" />}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-5 w-5 rounded-full bg-purple-500 flex items-center justify-center text-[8px] text-white font-bold">SM</div>
                          <span className="text-xs text-gray-400">Sam</span>
                        </div>
                        <MicOff className="h-2.5 w-2.5 text-gray-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Panel */}
                <div className="flex-1 flex flex-col p-4 overflow-hidden bg-[#121316]">
                  <p className="text-[10px] font-bold uppercase text-gray-500 mb-3 flex items-center gap-2">
                    <MessageSquare className="h-3 w-3" /> Server Chat
                  </p>
                  <div className="flex-1 space-y-3 overflow-hidden flex flex-col justify-end pb-2">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[9px] font-medium text-emerald-500">Alex</span>
                      <div className="bg-[#1e1f23] rounded-lg rounded-tl-none p-2 text-[10px] text-gray-300 w-fit">Hey everyone! Let's update the responsive navigation.</div>
                    </div>
                    
                    <div className={`flex flex-col gap-0.5 transition-all duration-300 ${step >= 3 ? 'opacity-100' : 'opacity-0 hidden'}`}>
                      <span className="text-[9px] font-medium text-purple-500">Sam</span>
                      <div className="bg-[#1e1f23] rounded-lg rounded-tl-none p-2 text-[10px] text-gray-300 w-fit">Sure, I'll handle the mobile menu dropdown.</div>
                    </div>

                    <div className={`flex flex-col gap-0.5 self-end items-end transition-all duration-300 ${step >= 8 ? 'opacity-100' : 'opacity-0 hidden'}`}>
                      <span className="text-[9px] font-medium text-blue-500">Karan</span>
                      <div className="bg-primary/20 border border-primary/20 rounded-lg rounded-tr-none p-2 text-[10px] text-white w-fit">I'll fix the padding on the logo.</div>
                    </div>
                  </div>
                  
                  {/* Chat Input */}
                  <div className="mt-2 relative">
                    <div className="w-full bg-[#1e1f23] border border-white/5 rounded-md py-1.5 px-3 text-[10px] text-gray-500 pr-8">
                      {step >= 5 && step < 8 ? (
                        <span className="text-gray-300">I'll fix the padding...</span>
                      ) : "Message server..."}
                    </div>
                    <Send className="h-2.5 w-2.5 text-gray-600 absolute right-3 top-2" />
                  </div>
                </div>
              </div>

              {/* Main Code Editor */}
              <div className="flex-1 bg-[#1a1b1e] font-mono text-xs sm:text-sm leading-relaxed overflow-hidden relative">
                
                {/* Line Numbers Sidebar */}
                <div className="absolute left-0 top-0 bottom-0 w-10 bg-[#16171a] border-r border-white/5 flex flex-col items-center pt-6 text-[10px] text-gray-600 select-none">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className="h-6 flex items-center">{i + 1}</div>
                  ))}
                </div>

                {/* Code Content */}
                <div className="pl-14 pt-6">
                  <div className="text-gray-500 absolute right-6 top-6 text-[10px] select-none opacity-20">TypeScript / React</div>

                  <div className="text-purple-400">export <span className="text-purple-400">function</span> <span className="text-blue-400">SiteHeader</span>() {"{"}</div>
                  
                  <div className="pl-4 h-6 flex items-center text-gray-400">
                    <span className="text-purple-400">const</span> [isMobileMenuOpen, setIsMobileMenuOpen] = <span className="text-yellow-200">useState</span>(<span className="text-orange-400">false</span>);
                  </div>

                  <div className="pl-4 h-6 flex items-center text-white"><span className="text-purple-400">return</span> (</div>
                  <div className="pl-8 h-6 flex items-center text-white">
                    <span className="text-blue-300">&lt;header</span> <span className="text-blue-200">className</span>=<span className="text-green-300">"fixed top-0 z-50 border-b"</span><span className="text-blue-300">&gt;</span>
                  </div>
                  
                  {/* Edit line 1 */}
                  <div className="pl-12 relative h-6 flex items-center text-white">
                    <span className="text-blue-300">&lt;div</span> <span className="text-blue-200">className</span>=<span className="text-green-300">"</span>
                    <span className="text-green-300">
                      mx-auto flex max-w-6xl
                      {step >= 9 && <span className="bg-blue-500/20 text-green-300 px-0.5 rounded"> items-center justify-between</span>}
                    </span>
                    <span className="text-green-300">"</span><span className="text-blue-300">&gt;</span>

                    {/* Karan Cursor */}
                    <div className={`absolute top-0 z-20 flex flex-col items-center transition-all duration-700 ${
                      step < 9 ? "left-[180px] opacity-0" : 
                      step === 9 ? "left-[240px] opacity-100" :
                      step === 10 ? "left-[320px] opacity-100" :
                      step === 11 ? "left-[420px] opacity-100" :
                      "left-[420px] opacity-0"
                    }`}>
                      <div className="w-[1.5px] h-4 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                      <div className="bg-blue-500 text-white text-[8px] px-1.5 py-0.5 rounded shadow-lg mt-1 font-sans font-bold">Karan</div>
                    </div>
                  </div>

                  {/* Navigation Edit */}
                  <div className="pl-16 mt-4 relative h-6 flex items-center text-white">
                    {step >= 4 ? (
                      <><span className="text-blue-300">&lt;nav</span> <span className="text-blue-200">className</span>=<span className="text-green-300">"hidden md:flex gap-4"</span><span className="text-blue-300">&gt;</span></>
                    ) : (
                      <span className="text-gray-600 italic text-xs">// Navigation links go here</span>
                    )}

                    {/* Sam Cursor */}
                    <div className={`absolute top-0 z-20 flex flex-col items-center transition-all duration-500 ${
                      step < 3 ? "left-[80px] opacity-0" : 
                      step === 3 ? "left-[80px] opacity-100" :
                      step === 4 ? "left-[220px] opacity-100" :
                      "left-[220px] opacity-0"
                    }`}>
                      <div className="w-[1.5px] h-4 bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
                      <div className="bg-purple-500 text-white text-[8px] px-1.5 py-0.5 rounded shadow-lg mt-1 font-sans font-bold">Sam</div>
                    </div>
                  </div>

                  {/* Mobile Menu Edit */}
                  <div className="pl-16 mt-2 relative h-12 flex flex-col justify-center">
                    {step >= 6 && (
                      <div className="flex flex-col gap-1">
                        <div><span className="text-blue-300">&lt;div</span> <span className="text-blue-200">className</span>=<span className="text-green-300">"md:hidden"</span><span className="text-blue-300">&gt;</span></div>
                        <div className="pl-4"><span className="text-blue-300">&lt;MobileMenu</span> <span className="text-blue-200">isOpen</span>=<span className="text-blue-400">{'{'}isMobileOpen{'}'}</span> <span className="text-blue-300">/&gt;</span></div>
                      </div>
                    )}

                    {/* Alex Cursor */}
                    <div className={`absolute top-0 z-20 flex flex-col items-center transition-all duration-500 ${
                      step < 5 ? "top-4 left-[80px] opacity-0" : 
                      step === 5 ? "top-4 left-[80px] opacity-100" :
                      step === 6 ? "top-4 left-[180px] opacity-100" :
                      step === 7 ? "top-8 left-[320px] opacity-100" :
                      "top-8 left-[320px] opacity-0"
                    }`}>
                      <div className="w-[1.5px] h-4 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                      <div className="bg-emerald-500 text-white text-[8px] px-1.5 py-0.5 rounded shadow-lg mt-1 font-sans font-bold">Alex</div>
                    </div>
                  </div>

                  <div className="pl-12 mt-4 text-gray-500 opacity-40"><span className="text-blue-300">&lt;/div&gt;</span></div>
                  <div className="pl-8 text-gray-500 opacity-40"><span className="text-blue-300">&lt;/header&gt;</span></div>
                  <div className="pl-4 text-gray-500 opacity-40">)</div>
                  <div className="text-gray-500 opacity-40">{"}"}</div>
                </div>

                {/* Floating Active Users Indicator */}
                <div className="absolute bottom-6 right-6 flex items-center gap-2.5 bg-[#16171a]/80 backdrop-blur-md border border-white/5 rounded-full px-3.5 py-1.5 shadow-xl">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] font-bold text-gray-300">3 Online</span>
                  <div className="flex -space-x-1.5 ml-1">
                    <div className="h-4 w-4 rounded-full bg-blue-500 border border-[#16171a]" />
                    <div className="h-4 w-4 rounded-full bg-emerald-500 border border-[#16171a]" />
                    <div className="h-4 w-4 rounded-full bg-purple-500 border border-[#16171a]" />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
