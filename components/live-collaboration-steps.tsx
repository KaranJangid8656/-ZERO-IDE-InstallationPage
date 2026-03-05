"use client"

import { useState, useEffect } from "react"
import { Copy, Plus, Users, ShieldCheck, Zap } from "lucide-react"

export function LiveCollaborationSteps() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 5)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 sm:py-32 overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl text-left">
            Real-Time Pair Programming
          </h2>
        </div>

        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Left Side: Animated Editor Simulation Box */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col rounded-2xl bg-muted/20 border border-border/30 overflow-hidden shadow-sm h-[400px]">
              {/* Window Header */}
              <div className="flex items-center px-4 py-3 border-b border-border/40 bg-muted/30">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto px-4 py-1 text-xs font-mono text-muted-foreground bg-background rounded-md border border-border/50">
                  -Zero IDE Workspace
                </div>
              </div>
              
              {/* Box Content */}
              <div className="flex-1 relative flex items-center justify-center p-8 bg-background/50">
                 {/* Decorative background grid */}
                 <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                 
                 <div className="relative z-10 w-full max-w-sm rounded-xl border border-border/40 bg-background p-6 shadow-xl flex flex-col items-center text-center">
                   <div className="h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                     <Users className="h-6 w-6" />
                   </div>
                   <h3 className="text-lg font-medium text-foreground mb-2">Live Collaboration</h3>
                   <p className="text-sm text-muted-foreground mb-6">Create a secure room to start pair programming with your team.</p>
                   
                   <button 
                     className={`flex items-center justify-center gap-2 w-full rounded-md bg-foreground px-4 py-3 text-background text-sm font-medium shadow-sm transition-all duration-300 ${
                       step === 1 || step === 2 ? "scale-95 bg-primary/90 text-primary-foreground" : "scale-100"
                     }`}
                   >
                     <Plus className="h-4 w-4" /> Create Room
                   </button>
                   
                   {/* Animated Popup for Room ID */}
                   <div 
                     className={`absolute -bottom-16 left-1/2 -translate-x-1/2 w-full max-w-[280px] rounded-lg border border-border/50 bg-card p-4 shadow-2xl transition-all duration-500 ${
                       step >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                     }`}
                   >
                     <div className="flex items-center justify-between mb-2">
                       <p className="text-xs font-medium text-muted-foreground">Room Created</p>
                       <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                     </div>
                     <div className="flex items-center justify-between rounded-md bg-muted/50 px-3 py-2 border border-border/50">
                        <span className="font-mono text-sm font-bold text-primary tracking-wider">MXR-48291</span>
                        <Copy className={`h-4 w-4 ${step === 3 ? "text-primary scale-110" : "text-muted-foreground"}`} />
                     </div>
                   </div>
                 </div>
              </div>
            </div>
          </div>

          {/* Right Side: Steps */}
          <div className="flex flex-col gap-8 lg:max-w-md xl:max-w-lg shrink-0">
            <div className="space-y-6">
              {/* Step 1 */}
              <div className={`relative pl-12 transition-all duration-300 ${step === 0 || step === 1 ? "opacity-100" : "opacity-50"}`}>
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm ring-1 ring-primary/20">
                  1
                </div>
                <h3 className="text-lg font-medium text-foreground">Create a Room</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Launch the IDE and click the "Create Room" button to initialize a new secure collaborative workspace.
                </p>
              </div>

              {/* Step 2 */}
              <div className={`relative pl-12 transition-all duration-300 ${step === 2 || step === 3 ? "opacity-100" : "opacity-50"}`}>
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm ring-1 ring-primary/20">
                  2
                </div>
                <h3 className="text-lg font-medium text-foreground">Generate Room ID</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  A unique, secure Room ID is instantly generated. Copy this ID to your clipboard.
                </p>
              </div>

              {/* Step 3 */}
              <div className={`relative pl-12 transition-all duration-300 ${step === 4 ? "opacity-100" : "opacity-50"}`}>
                <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm ring-1 ring-primary/20">
                  3
                </div>
                <h3 className="text-lg font-medium text-foreground">Share & Collaborate</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Share the ID with teammates. Once they join, you can write, review, and debug code together in real-time.
                </p>
              </div>
            </div>

            {/* Features summary tags */}
            <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t border-border/40">
              <div className="flex items-center gap-1.5 rounded-full bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground border border-border/50">
                <ShieldCheck className="h-3.5 w-3.5" /> End-to-end Encrypted
              </div>
              <div className="flex items-center gap-1.5 rounded-full bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground border border-border/50">
                <Zap className="h-3.5 w-3.5" /> Zero Latency
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
