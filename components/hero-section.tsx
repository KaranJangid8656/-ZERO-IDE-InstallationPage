"use client"

import { useState } from "react"
import { Download, Apple, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"

type Platform = "windows" | "macos" | "linux"

const platformData: Record<Platform, { label: string; file: string }> = {
  windows: { label: "Download for Windows", file: "zero-setup.exe" },
  macos: { label: "Download for macOS", file: "zero.dmg" },
  linux: { label: "Download for Linux", file: "zero.tar.gz" },
}

function WindowsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
    </svg>
  )
}

export function HeroSection() {
  const [platform, setPlatform] = useState<Platform>("windows")
  const current = platformData[platform]

  return (
    <section className="relative px-6 pt-50 pb-20 overflow-hidden">
      {/* Enhanced Dynamic Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-background" />
        
        {/* Animated Mesh Gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[100%] h-[100%] opacity-40">
          <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px] animate-[pulse_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-[20%] right-[15%] w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[160px] animate-[pulse_14s_ease-in-out_infinite_2s]" />
          <div className="absolute top-[40%] right-[5%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] animate-[pulse_18s_ease-in-out_infinite_4s]" />
        </div>

        {/* Floating Cyber Particles */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-foreground/10 animate-float"
              style={{
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${20 + Math.random() * 20}s`,
                animationDelay: `${Math.random() * -20}s`,
              }}
            />
          ))}
        </div>

        {/* Subtle Focal Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.08)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)]" />

      </div>

      <div className="relative z-10 mx-auto max-w-7xl flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* Left -- text content (Move to left as it was earlier) */}
        <div className="flex flex-col items-start gap-6 lg:max-w-md xl:max-w-lg shrink-0">
          <h1 className="flex flex-col items-start gap-2 tracking-tight text-foreground text-balance">
            <span className="text-xl md:text-2xl font-medium text-muted-foreground/80">
              Install
            </span>
            <span className="font-mono text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-b from-foreground via-foreground/80 to-muted-foreground bg-clip-text text-transparent">
              -Zero IDE
            </span>
          </h1>

          <div className="flex flex-col gap-1">
            <p className="text-lg text-muted-foreground pl-[60px]">
              Code collaboration made simple
            </p>
            <p className="text-lg text-muted-foreground pl-[75px]">
              Develop together, anywhere
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 mt-2 pl-[60px]">
            <div className="flex items-center gap-1 rounded-full border border-border bg-secondary/30 p-1">
              <button
                onClick={() => setPlatform("windows")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all cursor-pointer ${
                  platform === "windows"
                    ? "bg-foreground text-background font-medium shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <WindowsIcon className="h-3.5 w-3.5" />
                Windows
              </button>
              <button
                onClick={() => setPlatform("macos")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all cursor-pointer ${
                  platform === "macos"
                    ? "bg-foreground text-background font-medium shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Apple className="h-3.5 w-3.5" />
                macOS
              </button>
              <button
                onClick={() => setPlatform("linux")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all cursor-pointer ${
                  platform === "linux"
                    ? "bg-foreground text-background font-medium shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Monitor className="h-3.5 w-3.5" />
                Linux
              </button>
            </div>
            <Button size="lg" className="gap-2 text-base font-semibold w-[243px] py-[22.5px] cursor-pointer bg-foreground text-background hover:bg-foreground/90 rounded-full ml-[20px]">
              <Download className="h-5 w-5" />
              {current.label}
            </Button>
          </div>

          <p className="text-xs text-muted-foreground pl-[60px]">
            {'Free for developers and open for collaboration.'}
          </p>
        </div>

        {/* Right -- Premium Holographic Globe */}
        <div className="flex-1 flex items-center justify-center p-4 relative hidden lg:flex group">
          <div className="relative w-[500px] h-[500px] animate-wobble" style={{ perspective: '2000px' }}>
            
            {/* Outer Orbital Ring (Fixed) */}
            <div className="absolute inset-[-20px] rounded-full border border-primary/5 shadow-[0_0_50px_var(--color-primary)] pointer-events-none opacity-20 animate-pulse" />

            {/* Tilted Wrapper for the entire Globe */}
            <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(20deg) rotateZ(-15deg)' }}>
              
              {/* Rotating Globe Core */}
              <div className="absolute inset-0 animate-[spin_40s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
                
                {/* Longitudes (Vertical lines) */}
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={`v-${i}`}
                    className="absolute inset-0 border border-primary/30 rounded-full"
                    style={{ transform: `rotateY(${i * 15}deg)`, borderWidth: i % 3 === 0 ? '1.5px' : '0.5px' }}
                  />
                ))}

                {/* Latitudes (Horizontal lines) */}
                {[...Array(9)].map((_, i) => {
                  const y = (i - 4) * 55; 
                  const radius = 250;
                  const scale = Math.sqrt(Math.max(0, 1 - Math.pow(y / radius, 2)));
                  return (
                    <div key={`h-container-${i}`} className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
                      <div 
                        className="absolute inset-0 border border-primary/40 rounded-full"
                        style={{ 
                          transform: `translateY(${y}px) rotateX(90deg) scale(${scale})`,
                          borderWidth: i === 4 ? '2px' : '0.5px'
                        }}
                      />
                      {/* Data Nodes at intersections */}
                      {[0, 90, 180, 270].map((angle) => (
                        <div
                          key={`node-${i}-${angle}`}
                          className="absolute w-1 h-1 bg-primary rounded-full shadow-[0_0_8px_var(--color-primary)] opacity-80"
                          style={{
                            transform: `translateY(${y}px) rotateY(${angle}deg) translateZ(${radius * scale}px)`,
                          }}
                        />
                      ))}
                    </div>
                  );
                })}
              </div>

              {/* Scanning Energy Ring */}
              <div 
                className="absolute inset-0 border-2 border-primary/60 rounded-full shadow-[0_0_30px_var(--color-primary)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"
                style={{ 
                  animation: 'scan 4s ease-in-out infinite',
                  transformStyle: 'preserve-3d',
                }} 
              />
            </div>

            {/* Atmosphere & Core Glow */}
            <div className="absolute inset-0 m-auto w-48 h-48 bg-primary/20 rounded-full blur-[80px] animate-pulse pointer-events-none" />
            <div className="absolute inset-0 m-auto w-12 h-12 bg-primary/40 rounded-full blur-[40px] pointer-events-none" />
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes spin {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        @keyframes wobble {
          0%, 100% { transform: rotateX(0deg) rotateY(0deg); }
          25% { transform: rotateX(2deg) rotateY(3deg); }
          75% { transform: rotateX(-2deg) rotateY(-3deg); }
        }
        @keyframes scan {
          0%, 100% { transform: translateY(-250px) rotateX(90deg) scale(0.1); opacity: 0; }
          40%, 60% { opacity: 0.8; }
          50% { transform: translateY(0px) rotateX(90deg) scale(1); }
          100% { transform: translateY(250px) rotateX(90deg) scale(0.1); opacity: 0; }
        }
        @keyframes float {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
          20% { opacity: 0.5; }
          80% { opacity: 0.5; }
          100% { transform: translateY(-100px) translateX(30px) rotate(360deg); opacity: 0; }
        }
        .animate-wobble {
          animation: wobble 15s ease-in-out infinite;
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  )
}
