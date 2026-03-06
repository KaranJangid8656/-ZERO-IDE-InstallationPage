"use client"

import { useState, useEffect } from "react"
import { Mic, MicOff, MessageSquare, Phone, Volume2, TerminalSquare, Send, User, Terminal, ChevronRight, ChevronDown, Folder, FileCode, FileJson, Hash, Settings, History, ListFilter, Braces, Code, Cpu, Files, Search, GitBranch, Play, Blocks, UserCircle, CheckCircle2, XCircle, AlertCircle, Sparkles, Bell } from "lucide-react"

export function LiveCodeCollaboration() {
  const [step, setStep] = useState(0)

  // 15 steps, 0.6s each for faster animation
  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 15)
    }, 600)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 sm:py-32 overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl translate-y-7">
            A Complete Collaborative Workspace
          </h2>
        </div>

        {/* IDE Simulation Wrapped in .dark and with explicit colors to force dark theme */}
        <div className="mx-auto w-[76.5%] dark">
          <div className="flex flex-col rounded-2xl bg-[#16171a] border border-white/5 overflow-hidden shadow-2xl h-[505px] lg:h-[595px] relative">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#1e1f23] shrink-0">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.4)]" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.4)]" />
                <div className="h-3 w-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
              </div>
              
              <div className="flex items-center gap-2 bg-black/40 border border-white/10 rounded-full px-4 py-1.5 text-[10px] text-gray-400 font-mono shadow-inner group">
                <Folder className="h-3 w-3 text-blue-400/70" />
                <span className="opacity-60 group-hover:opacity-100 transition-opacity">frontend / src / components / </span>
                <span className="text-emerald-400 font-bold tracking-wide">Header.tsx</span>
              </div>

              <div className="flex items-center gap-1.5 text-white">
                <div className="bg-primary/20 p-1 rounded">
                  <TerminalSquare className="h-4 w-4 text-primary" />
                </div>
                <span className="font-mono text-xs font-bold tracking-wider">-Zero IDE</span>
              </div>
            </div>

            <div className="flex flex-1 overflow-hidden">
              {/* ACTIVITY BAR (Far Left) */}
              <div className="w-[50px] bg-[#0a0b0d] border-r border-white/5 flex flex-col items-center py-4 gap-4 shrink-0 hidden sm:flex">
                <div className="p-2 text-white border-l-2 border-primary bg-white/5 rounded-sm">
                  <Files className="h-5 w-5" />
                </div>
                <div className="p-2 text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">
                  <Search className="h-5 w-5" />
                </div>
                <div className="p-2 text-gray-500 hover:text-gray-300 transition-colors cursor-pointer relative">
                  <GitBranch className="h-5 w-5" />
                  <span className="absolute top-1.5 right-1.5 h-3 w-3 bg-primary text-[8px] flex items-center justify-center rounded-full text-white font-bold">1</span>
                </div>
                <div className="p-2 text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">
                  <Play className="h-5 w-5" />
                </div>
                <div className="p-2 text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">
                  <Blocks className="h-5 w-5" />
                </div>
                
                <div className="mt-auto p-2 text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">
                  <UserCircle className="h-5 w-5" />
                </div>
                <div className="p-2 text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">
                  <Settings className="h-5 w-5" />
                </div>
              </div>

              {/* SIDEBAR (Explorer, Outline, Timeline) */}
              <div className="w-32 border-r border-white/5 bg-[#0a0b0d] flex flex-col hidden md:flex shrink-0">
                
                {/* EXPLORER SECTION */}
                <div className="flex flex-col flex-1 overflow-hidden">
                  <div className="flex items-center gap-1.5 px-3 py-2 bg-[#16171a] border-b border-white/5 group cursor-default text-gray-400">
                    <ChevronDown className="h-3 w-3 group-hover:text-gray-300" />
                    <p className="text-[10px] font-bold uppercase tracking-wider">Explorer</p>
                  </div>
                  <div className="flex-1 overflow-y-auto p-2 space-y-0.5 select-none custom-scrollbar pb-4 shadow-inner">
                    <div className="flex items-center gap-2 px-2 py-1 text-[11px] text-gray-400">
                      <Folder className="h-3.5 w-3.5 text-blue-400/80 fill-blue-400/10" />
                      <span>app</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 text-[11px] text-gray-400 ml-2">
                       <Folder className="h-3.5 w-3.5 text-blue-400/80" />
                       <span>api</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 text-[11px] text-gray-200 bg-white/5 rounded border-l-2 border-primary ml-2">
                      <Folder className="h-3.5 w-3.5 text-blue-400/80 fill-blue-400/20" />
                      <span>components</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 text-[11px] text-emerald-400 font-medium ml-4 group">
                      <FileCode className="h-3.5 w-3.5" />
                      <span>Header.tsx</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 text-[11px] text-gray-400 ml-4 opacity-70">
                      <FileCode className="h-3.5 w-3.5" />
                      <span>Hero.tsx</span>
                    </div>
                    <div className="flex items-center gap-2 px-2 py-1 text-[11px] text-gray-400 ml-4 opacity-70">
                      <FileCode className="h-3.5 w-3.5" />
                      <span>Sidebar.tsx</span>
                    </div>
                  </div>
                </div>

                {/* OUTLINE SECTION */}
                <div className="border-t border-white/5">
                   <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#16171a]/50 hover:bg-[#16171a] cursor-default group transition-colors">
                      <ChevronDown className="h-3 w-3 text-gray-500 group-hover:text-gray-300" />
                      <p className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">Outline</p>
                   </div>
                   <div className="p-2 space-y-0.5 opacity-90 max-h-32 overflow-hidden">
                      <div className="flex items-center gap-2 px-2 py-0.5 text-[10px] text-blue-400">
                        <Braces className="h-3 w-3 shrink-0" />
                        <span className="truncate">navItems</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-0.5 text-[10px] text-purple-400">
                        <Code className="h-3 w-3 shrink-0" />
                        <span className="truncate font-medium">SiteHeader</span>
                      </div>
                   </div>
                </div>

                {/* TIMELINE SECTION */}
                <div className="border-t border-white/5">
                   <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#16171a]/50 hover:bg-[#16171a] cursor-default group transition-colors">
                      <ChevronDown className="h-3 w-3 text-gray-500 group-hover:text-gray-300" />
                      <p className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">Timeline</p>
                   </div>
                   <div className="p-2 space-y-2 opacity-80 max-h-24 overflow-hidden">
                      <div className="flex flex-col pl-2 border-l border-white/10 gap-0.5 relative">
                        <div className="absolute -left-[4.5px] top-1 h-2 w-2 rounded-full bg-emerald-500/50 shadow-[0_0_5px_rgba(16,185,129,0.5)]" />
                        <span className="text-[9px] text-gray-400 font-bold leading-none">Synced</span>
                        <span className="text-[8px] text-gray-500 italic leading-none">now • Karan</span>
                      </div>
                   </div>
                </div>
              </div>

              {/* Main Area: Editor + Terminal */}
              <div className="flex-1 flex flex-col overflow-hidden relative">
                
                {/* Code Editor */}
                <div className="flex-1 bg-[#1a1b1e] font-mono text-[10px] sm:text-[11px] leading-relaxed overflow-hidden relative">
                  <div className="absolute left-0 top-0 bottom-0 w-10 bg-[#16171a] border-r border-white/5 flex flex-col items-center pt-6 text-[10px] text-gray-600 select-none">
                    {[...Array(24)].map((_, i) => (
                      <div key={i} className="h-6 flex items-center">{i + 1}</div>
                    ))}
                  </div>

                  <div className="pl-14 pt-6">
                    <div className="text-gray-500 absolute right-6 top-6 text-[10px] select-none opacity-20 whitespace-nowrap tracking-widest uppercase">TypeScript / Header.tsx</div>
                    
                    <div className="text-purple-400 whitespace-nowrap">export <span className="text-purple-400">function</span> <span className="text-blue-400">SiteHeader</span>() {"{"}</div>
                    <div className="pl-4 h-6 flex items-center text-gray-400 whitespace-nowrap">
                      <span className="text-purple-400">const</span> [isMobileMenuOpen, setIsMobileMenuOpen] = <span className="text-yellow-200">useState</span>(<span className="text-orange-400">false</span>);
                    </div>
                    <div className="pl-4 h-6 flex items-center text-white whitespace-nowrap"><span className="text-purple-400">return</span> (</div>
                    <div className="pl-8 h-6 flex items-center text-white whitespace-nowrap underline decoration-primary/30 underline-offset-4 shadow-sm shadow-black/20">
                      <span className="text-blue-300">&lt;header</span> <span className="text-blue-200">className</span>=<span className="text-green-300">"fixed top-0 z-50 border-b"</span><span className="text-blue-300">&gt;</span>
                    </div>

                    <div className="pl-12 relative h-6 flex items-center text-white whitespace-nowrap">
                      <span className="text-blue-300">&lt;div</span> <span className="text-blue-200">className</span>=<span className="text-green-300">"</span>
                      <span className="text-green-300">
                        mx-auto flex max-w-6xl
                        {step >= 9 && <span className="bg-blue-500/20 text-green-300 px-0.5 rounded shadow-[0_0_8px_rgba(59,130,246,0.3)]"> items-center justify-between</span>}
                      </span>
                      <span className="text-green-300">"</span><span className="text-blue-300">&gt;</span>

                      {/* Karan Cursor */}
                      <div className={`absolute top-0 z-20 flex flex-col items-center transition-all duration-350 ${
                        step < 7 ? "left-[180px] opacity-0 translate-y-1" : 
                        step <= 14 ? "opacity-100 translate-y-0" :
                        "left-[420px] opacity-0 translate-y-1"
                      } ${step <= 9 ? "left-[240px]" : step <= 11 ? "left-[320px]" : "left-[420px]"}`}>
                        <div className="w-[2px] h-4 bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,1)]" />
                        <div className="bg-blue-500 text-white text-[8px] px-2 py-0.5 rounded shadow-lg mt-1 font-sans font-bold shadow-black/60 tracking-wider">Karan</div>
                      </div>
                    </div>

                    <div className="pl-16 mt-4 relative h-6 flex items-center text-white whitespace-nowrap">
                      {step >= 4 ? (
                        <><span className="text-blue-300">&lt;nav</span> <span className="text-blue-200">className</span>=<span className="text-green-300">"hidden md:flex gap-4"</span><span className="text-blue-300">&gt;</span></>
                      ) : (
                        <span className="text-gray-600 italic text-xs animate-pulse tracking-wide">// Collaborative sync...</span>
                      )}

                      {/* Ted Cursor */}
                      <div className={`absolute top-0 z-20 flex flex-col items-center transition-all duration-250 ${
                        step < 2 ? "left-[80px] opacity-0" : 
                        step <= 9 ? "opacity-100" :
                        "left-[220px] opacity-0"
                      } ${step <= 3 ? "left-[80px]" : "left-[220px]"}`}>
                        <div className="w-[2px] h-4 bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,1)]" />
                        <div className="bg-purple-500 text-white text-[8px] px-2 py-0.5 rounded shadow-lg mt-1 font-sans font-bold shadow-black/60 tracking-wider">Ted</div>
                      </div>
                    </div>

                    <div className="pl-16 mt-2 relative h-12 flex flex-col justify-center whitespace-nowrap">
                      {step >= 6 && (
                        <div className="flex flex-col gap-1 transition-all duration-300 animate-in fade-in slide-in-from-left-2">
                          <div><span className="text-blue-300">&lt;div</span> <span className="text-blue-200">className</span>=<span className="text-green-300">"md:hidden"</span><span className="text-blue-300">&gt;</span></div>
                          <div className="pl-4"><span className="text-blue-300">&lt;MobileMenu</span> <span className="text-blue-200">isOpen</span>=<span className="text-blue-400">{'{'}isMobileOpen{'}'}</span> <span className="text-blue-300">/&gt;</span></div>
                        </div>
                      )}

                      {/* Jennie Cursor */}
                      <div className={`absolute top-0 z-20 flex flex-col items-center transition-all duration-250 ${
                        step < 4 ? "top-4 left-[80px] opacity-0" : 
                        step <= 12 ? "opacity-100" :
                        "top-8 left-[320px] opacity-0"
                      } ${step <= 5 ? "top-4 left-[80px]" : step <= 7 ? "top-4 left-[180px]" : "top-8 left-[320px]"}`}>
                        <div className="w-[2px] h-4 bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,1)]" />
                        <div className="bg-emerald-500 text-white text-[8px] px-2 py-0.5 rounded shadow-lg mt-1 font-sans font-bold shadow-black/60 tracking-wider">Jennie</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* IDE Terminal Area */}
                <div className="h-52 border-t border-white/5 bg-[#0a0b0d] flex flex-col overflow-hidden shrink-0">
                  <div className="flex items-center gap-4 px-4 py-1.5 border-b border-white/5 bg-[#16171a] shrink-0">
                    <div className="flex items-center gap-1.5 text-[10px] text-white border-b border-primary pb-0.5 border-b-2 whitespace-nowrap uppercase tracking-tighter">
                       <Terminal className="h-3 w-3" />
                       <span className="font-bold">Terminal</span>
                    </div>
                    <div className="text-[10px] text-gray-500 whitespace-nowrap uppercase tracking-tighter">Output</div>
                    <div className="text-[10px] text-gray-500 whitespace-nowrap uppercase tracking-tighter">Debug Console</div>
                  </div>
                  <div className="flex-1 p-3 font-mono text-[9px] sm:text-[10px] text-gray-400 overflow-y-auto custom-scrollbar flex flex-col gap-1.5">
                    <div className="flex items-start gap-2 shrink-0">
                      <ChevronRight className="h-3 w-3 text-emerald-500 mt-0.5 shrink-0" />
                      <div className="flex flex-col gap-0.5">
                        <span className="text-gray-300 font-bold tracking-tight">npm run dev</span>
                        <div className="flex items-center gap-2 text-[9px]">
                           <span className="text-emerald-500 font-black">✓</span>
                           <span className="bg-emerald-500/10 px-1.5 rounded text-emerald-400">Ready in 1.4s</span>
                        </div>
                      </div>
                    </div>

                    <div className={`flex items-start gap-2 transition-all duration-300 ${step >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 h-0 overflow-hidden'}`}>
                      <ChevronRight className="h-3 w-3 text-blue-500 mt-0.5 shrink-0" />
                      <div className="flex flex-col gap-0.5 text-blue-300/90">
                        <span className="font-bold">git pull origin main</span>
                        <span className="text-gray-500 text-[8px] leading-tight">Updating a1b2c3d..e5f6g7h <br/> Fast-forward</span>
                      </div>
                    </div>

                    <div className={`flex items-start gap-2 transition-all duration-300 ${step >= 5 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 h-0 overflow-hidden'}`}>
                      <ChevronRight className="h-3 w-3 text-purple-500 mt-0.5 shrink-0" />
                      <div className="flex flex-col gap-0.5 text-purple-300/90">
                        <span className="font-bold">npm install framer-motion</span>
                        <span className="text-emerald-500/90 text-[8px] leading-none mt-1">
                           added 12 packages from 8 contributors
                        </span>
                      </div>
                    </div>

                    <div className={`flex items-start gap-2 transition-all duration-300 ${step >= 9 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 h-0 overflow-hidden'}`}>
                      <ChevronRight className="h-3 w-3 text-orange-400 mt-0.5 shrink-0" />
                      <div className="flex flex-col gap-0.5 text-orange-300/80">
                        <span className="font-bold">touch components/NewComponent.tsx</span>
                        <span className="text-gray-500 text-[8px]">Creating file... done.</span>
                      </div>
                    </div>

                    <div className={`flex items-start gap-2 mt-auto text-[9px] text-gray-600 italic transition-all duration-500 ${step >= 12 ? 'opacity-100' : 'opacity-0'}`}>
                       <span className="animate-pulse font-black text-primary">_</span>
                       <span className="tracking-tighter font-medium">Connected to Karan's Dev Server.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Sidebar (Voice & Chat) */}
              <div className="w-52 border-l border-white/5 bg-[#121316] flex flex-col hidden lg:flex shrink-0">
                {/* Voice Channel */}
                <div className="p-4 border-b border-white/5 bg-[#16171a]/30">
                  <p className="text-[10px] font-bold uppercase text-gray-500 mb-4 flex items-center gap-2 tracking-widest">
                    <Volume2 className="h-3 w-3" /> Karan's Dev Server
                  </p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 px-3 py-2 bg-primary/20 rounded-lg ring-1 ring-primary/40 shadow-inner group transition-all hover:bg-primary/25 cursor-default">
                      <Phone className="h-3.5 w-3.5 text-primary animate-pulse" />
                      <span className="text-xs font-bold text-white tracking-tight">Team Standup</span>
                    </div>
                    <div className="pl-1 space-y-2 mt-4">
                      <div className="flex items-center justify-between group">
                        <div className="flex items-center gap-2.5 outline outline-1 outline-white/5 rounded-full pr-3.5 py-0.5 bg-white/5 shadow-inner transition-transform hover:scale-[1.02]">
                          <div className="h-5.5 w-5.5 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_10px_rgba(59,130,246,0.5)] border border-white/10">
                            <User className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-[11px] text-gray-300 font-bold">Karan</span>
                        </div>
                        <MicOff className="h-3 w-3 text-gray-600 transition-colors" />
                      </div>
                      <div className="flex items-center justify-between group">
                        <div className={`flex items-center gap-2.5 rounded-full pr-3.5 py-0.5 transition-all duration-300 shadow-inner hover:scale-[1.02] ${step % 2 !== 0 ? 'bg-emerald-500/15 outline outline-1 outline-emerald-500/60 shadow-[0_0_10px_rgba(16,185,129,0.2)]' : 'bg-white/5 outline outline-1 outline-white/5'}`}>
                          <div className={`h-5.5 w-5.5 rounded-full bg-emerald-500 flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.5)] border border-white/10 transition-transform ${step % 2 !== 0 ? 'scale-115 ring-2 ring-emerald-400/50' : ''}`}>
                            <User className="h-3 w-3 text-white" />
                          </div>
                          <span className={`text-[11px] font-bold transition-colors ${step % 2 !== 0 ? 'text-white' : 'text-gray-400'}`}>Jennie</span>
                        </div>
                        {step % 2 !== 0 ? <Mic className="h-3 w-3 text-emerald-500 animate-pulse drop-shadow-[0_0_5px_rgba(16,185,129,1)]" /> : <MicOff className="h-3 w-3 text-gray-600" />}
                      </div>
                      <div className="flex items-center justify-between group">
                        <div className="flex items-center gap-2.5 outline outline-1 outline-white/5 rounded-full pr-3.5 py-0.5 bg-white/5 shadow-inner transition-transform hover:scale-[1.02]">
                          <div className="h-5.5 w-5.5 rounded-full bg-purple-500 flex items-center justify-center shadow-[0_0_10px_rgba(168,85,247,0.5)] border border-white/10">
                            <User className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-[11px] text-gray-300 font-bold group-hover:text-white transition-colors">Ted</span>
                        </div>
                        <MicOff className="h-3 w-3 text-gray-600" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Panel */}
                <div className="flex-1 flex flex-col p-4 overflow-hidden relative">
                  <p className="text-[10px] font-bold uppercase text-gray-500 mb-4 flex items-center gap-2 tracking-widest">
                    <MessageSquare className="h-3 w-3" /> Server Chat
                  </p>
                  <div className="flex-1 space-y-4 overflow-hidden flex flex-col justify-end pb-4 scroll-smooth">
                    <div className="flex flex-col gap-1.5 items-start max-w-full group">
                      <span className="text-[10px] font-black text-emerald-500 ml-1 tracking-tight">Jennie</span>
                      <div className="bg-[#1e1f23] rounded-2xl rounded-tl-none px-3.5 py-2 text-[11px] text-gray-200 w-fit shadow-xl border border-white/5 max-w-[95%] transition-transform hover:scale-[1.01]">additional files??</div>
                    </div>
                    {/* ... other chat bubbles ... */}
                    <div className={`flex flex-col gap-1.5 items-end self-end transition-all duration-300 ${step >= 8 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                      <span className="text-[10px] font-black text-blue-500 mr-1 tracking-tight italic">Karan • You</span>
                      <div className="bg-primary/20 border border-primary/40 rounded-2xl rounded-tr-none px-3.5 py-2 text-[11px] text-white w-fit shadow-2xl max-w-[95%] transition-transform hover:scale-[1.01] font-medium">Looking great team!</div>
                    </div>
                  </div>
                  
                  {/* Chat Input */}
                  <div className="mt-4 relative group">
                    <div className="w-full bg-[#1e1f23]/80 border border-white/10 rounded-xl py-2.5 px-4 text-[11px] text-gray-500 pr-12 shadow-inner group-hover:border-primary/30 transition-all backdrop-blur-sm">
                      {step >= 5 && step < 8 ? (
                        <span className="text-white font-bold tracking-tight">Looking great team!</span>
                      ) : "Message @team..."}
                    </div>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 bg-primary/20 hover:bg-primary/30 transition-colors rounded-lg flex items-center justify-center border border-primary/30 cursor-pointer shadow-lg shadow-primary/10">
                       <Send className="h-3.5 w-3.5 text-primary drop-shadow-[0_0_3px_rgba(var(--primary),0.5)]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* STATUS BAR (Very Bottom) */}
            <div className="h-6 bg-[#0a0b0d] border-t border-white/5 flex items-center px-3 justify-between text-gray-400 shrink-0 select-none">
              <div className="flex items-center gap-4 h-full">
                <div className="flex items-center gap-1.5 px-1 hover:bg-white/10 h-full transition-colors cursor-pointer text-white">
                  <GitBranch className="h-3 w-3 text-primary" />
                  <span className="text-[10px] font-bold">main*</span>
                </div>
                <div className="flex items-center gap-1.5 px-1 hover:bg-white/10 h-full transition-colors cursor-pointer">
                  <History className="h-3 w-3" />
                  <span className="text-[10px] font-medium italic">Synced</span>
                </div>
                <div className="flex items-center gap-3 ml-2">
                   <div className="flex items-center gap-1 opacity-90 transition-opacity hover:opacity-100">
                      <XCircle className="h-2.5 w-2.5 text-red-400/80" />
                      <span className="text-[9px] font-bold">0</span>
                   </div>
                   <div className="flex items-center gap-1 opacity-90 transition-opacity hover:opacity-100">
                      <AlertCircle className="h-2.5 w-2.5 text-yellow-400/80" />
                      <span className="text-[9px] font-bold">0</span>
                   </div>
                </div>
              </div>

              <div className="flex items-center gap-4 h-full">
                <div className="flex items-center gap-1.5 px-1 hover:bg-white/10 h-full transition-colors cursor-pointer hidden md:flex">
                  <Sparkles className="h-3 w-3 text-primary animate-pulse" />
                  <span className="text-[10px] font-bold text-white">Zero AI</span>
                </div>
                <div className="text-[10px] font-medium hidden sm:block">Ln 14, Col 22</div>
                <div className="text-[10px] font-medium hidden sm:block">Spaces: 2</div>
                <div className="text-[10px] font-medium uppercase tracking-tight">UTF-8</div>
                <div className="flex items-center gap-1.5 px-1 hover:bg-white/10 h-full transition-colors cursor-pointer">
                  <CheckCircle2 className="h-3 w-3 text-emerald-400/80" />
                  <span className="text-[10px] font-bold uppercase">Prettier</span>
                </div>
                <div className="px-1 hover:bg-white/10 h-full transition-colors cursor-pointer flex items-center">
                  <Bell className="h-3 w-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
