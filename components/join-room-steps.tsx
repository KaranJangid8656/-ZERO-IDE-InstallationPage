"use client"

import { useState, useEffect } from "react"
import { LogIn, Users, MousePointer2, CheckCircle2, TerminalSquare } from "lucide-react"

export function JoinRoomSteps() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 6)
    }, 1200)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 sm:py-32 overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center lg:gap-16">
          {/* Animated Editor Simulation Box */}
          <div className="flex-1 min-w-0 dark">
            <div className="flex flex-col rounded-2xl bg-[#1a1b1e] border border-white/5 overflow-hidden shadow-2xl h-[400px]">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#1e1f23]">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center gap-1.5 text-gray-300">
                  <TerminalSquare className="h-4 w-4" />
                  <span className="font-mono text-xs font-bold tracking-wider">-Zero IDE</span>
                </div>
              </div>
              
              {/* Box Content */}
              <div className="flex-1 relative flex items-center justify-center p-8 bg-[#16171a]">
                 {/* Decorative background grid */}
                 <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                 
                 <div className="relative z-10 w-full max-w-sm rounded-xl border border-white/5 bg-[#1a1b1e] p-6 shadow-2xl flex flex-col items-center text-center">
                   
                   <h3 className="text-lg font-medium text-white mb-4">Join Server</h3>
                   
                   {/* Input Field */}
                   <div className="w-full relative mb-4">
                     <div className={`w-full rounded-md border text-left px-3 py-2.5 text-sm transition-all duration-300 ${
                       step >= 1 ? "border-primary/50 ring-1 ring-primary/20 bg-black/20" : "border-white/10 bg-black/10"
                     }`}>
                       <span className={`font-mono ${step >= 1 ? "text-white" : "text-gray-500"}`}>
                         {step >= 1 ? "MXR-48291" : "Enter Server ID..."}
                       </span>
                       {step === 1 && <span className="absolute ml-1 inline-block w-0.5 h-4 bg-primary animate-pulse top-3"></span>}
                     </div>
                   </div>

                   {/* Join Button */}
                   <button 
                     className={`relative flex items-center justify-center gap-2 w-full rounded-md bg-white px-4 py-2.5 text-black text-sm font-medium shadow-sm transition-all duration-300 ${
                       step === 2 || step === 3 ? "scale-95 bg-primary/90 text-white" : "scale-100"
                     }`}
                   >
                     <LogIn className="h-4 w-4" /> Join Server
                     
                     {/* Animated Cursor */}
                     <div 
                       className={`absolute transition-all duration-700 pointer-events-none z-50 ${
                         step <= 1 ? "opacity-100 translate-x-16 translate-y-16" :
                         step === 2 ? "opacity-100 translate-x-0 translate-y-2 !duration-300" :
                         "opacity-0 translate-x-4 translate-y-8"
                       }`}
                     >
                       <MousePointer2 className="h-6 w-6 text-white drop-shadow-md fill-black" />
                     </div>
                   </button>
                   
                   {/* Success Overlay */}
                   <div 
                     className={`absolute inset-0 z-20 rounded-xl bg-[#1a1b1e] flex flex-col items-center justify-center p-6 transition-all duration-500 ${
                       step >= 4 ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
                     }`}
                   >
                     <CheckCircle2 className="h-12 w-12 text-green-500 mb-4" />
                     <h4 className="text-lg font-bold text-white mb-1">Success!</h4>
                     <p className="text-sm font-medium text-gray-400">Joined Karan's Server</p>
                   </div>

                 </div>
              </div>
            </div>
          </div>

          {/* Text/Steps Side */}
          <div className="flex flex-col gap-8 lg:max-w-md xl:max-w-lg shrink-0">
            <div className="mb-2">
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl text-left">
                Join a Server
              </h2>
            </div>
            <div className="space-y-6 pt-2">
              {/* Step 1 */}
              <div className={`relative pl-12 transition-all duration-300 ${step <= 1 ? "opacity-100" : "opacity-50"}`}>
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm ring-1 ring-primary/20">
                  1
                </div>
                <h3 className="text-lg font-medium text-foreground">Enter Server ID</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Enter the unique Server ID shared by your teammate directly into the "Join Server" dialog.
                </p>
              </div>

              {/* Step 2 */}
              <div className={`relative pl-12 transition-all duration-300 ${step === 2 || step === 3 ? "opacity-100" : "opacity-50"}`}>
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm ring-1 ring-primary/20">
                  2
                </div>
                <h3 className="text-lg font-medium text-foreground">Join Server</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Click 'Join Server' to securely connect to the pair programming server. 
                </p>
              </div>

              {/* Step 3 */}
              <div className={`relative pl-12 transition-all duration-300 ${step >= 4 ? "opacity-100" : "opacity-50"}`}>
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm ring-1 ring-primary/20">
                  3
                </div>
                <h3 className="text-lg font-medium text-foreground">You're In!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  You are instantly dropped into Karan's Server to start collaborating in real time without any setup.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
