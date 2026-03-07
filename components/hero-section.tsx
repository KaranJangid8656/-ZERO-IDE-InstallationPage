"use client"

import { useState, useEffect } from "react"
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
  const [mounted, setMounted] = useState(false)
  const current = platformData[platform]

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative px-6 pt-40 pb-20 overflow-hidden">
      {/* Enhanced Dynamic Animated Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-background" />
        
        {/* Animated Mesh Gradients */}
        <div className="absolute top-[-20%] left-[-10%] w-[100%] h-[100%] opacity-40">
          <div className="absolute top-[10%] left-[20%] w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px] animate-[pulse_10s_ease-in-out_infinite]" />
          <div className="absolute bottom-[20%] right-[15%] w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[160px] animate-[pulse_14s_ease-in-out_infinite_2s]" />
          <div className="absolute top-[40%] right-[5%] w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] animate-[pulse_18s_ease-in-out_infinite_4s]" />
        </div>

        {/* Subtle Focal Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(128,128,128,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(128,128,128,0.08)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_50%,#000_60%,transparent_100%)]" />

      </div>




      <div className="relative z-10 mx-auto max-w-7xl flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* Left -- text content (Move to left as it was earlier) */}
        <div className="flex flex-col items-start gap-6 lg:max-w-md xl:max-w-lg shrink-0 ml-[38px]">
          <h1 className="flex flex-col items-start gap-2 tracking-tight text-foreground text-balance">
            <span className="text-xl md:text-2xl font-medium text-muted-foreground/80">
              Install
            </span>
            <span className="font-mono text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-foreground via-primary to-foreground bg-[length:200%_auto] bg-clip-text text-transparent animate-shine">
              -ZERO IDE
            </span>
          </h1>

          <div className="flex flex-col gap-1">
            <p className="text-lg text-muted-foreground/90 pl-[60px] ml-2">
              Code collaboration made simple
            </p>
            <p className="text-lg text-muted-foreground/80 pl-[75px] ml-2">
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

          {/* ---- Terminals rendered OUTSIDE the 3D container so they stay opaque ---- */}
          {/* Background Terminal (Top Left) */}
          <div className="absolute top-[calc(50%-250px-64px)] left-[calc(50%-250px-112px+40px)] w-64 h-48 bg-background border border-primary/40 rounded-lg p-3.5 font-mono text-[11px] text-foreground/90 overflow-hidden shadow-2xl z-30 animate-float-subtle">
            <div className="flex items-center justify-between mb-3 border-b border-primary/30 pb-2">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.4)]" />
                <div className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
              </div>
              <span className="text-[9px] opacity-60 uppercase tracking-widest font-bold">Terminal v1.1.0</span>
            </div>
            <div className="relative h-full [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
              <div className="space-y-2 animate-terminal-scroll">
              <div className="flex gap-3">
                <span className="text-primary font-bold opacity-70">$</span>
                <p className="font-medium tracking-tight">initializing_kernel...</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold opacity-70">$</span>
                <p className="font-medium tracking-tight">auth_success: dev_01</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold opacity-70">$</span>
                <p className="font-medium tracking-tight text-emerald-500/90">mesh_connected: true</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold opacity-70">$</span>
                <p className="font-medium tracking-tight">syncing_workspace: 98%</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold opacity-70">$</span>
                <p className="font-medium tracking-tight">secure_tunnel: active</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold opacity-70">$</span>
                <p className="font-bold text-primary">-ZERO IDE: ready</p>
              </div>
              <div className="flex gap-3">
                <span className="text-primary font-bold opacity-70">$</span>
                <p className="animate-pulse">_</p>
              </div>
            </div>
            </div>
          </div>

          {/* Terminal Status Box (Bottom Right) */}
          <div className="absolute top-[calc(50%+250px-112px+40px)] left-[calc(50%+250px-208px+40px)] w-52 h-28 bg-background border border-primary/40 rounded-lg p-2.5 font-mono text-[10px] text-foreground/90 overflow-hidden shadow-2xl z-30">
            <div className="flex items-center justify-between mb-2 border-b border-primary/20 pb-1.5">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/70" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                <div className="w-2 h-2 rounded-full bg-green-500/70" />
              </div>
              <span className="text-[8px] opacity-40 uppercase tracking-tighter font-bold">Terminal v1.0</span>
            </div>
            <div className="space-y-1">
              <div className="flex gap-2">
                <span className="text-primary/60">$</span>
                <p>connecting_mesh...</p>
              </div>
              <div className="flex gap-2 text-emerald-500/90">
                <span className="text-emerald-500/40">$</span>
                <p>auth_success: dev_01</p>
              </div>
              <div className="flex gap-2 text-primary">
                <span className="text-primary/40">$</span>
                <p className="font-bold">-ZERO IDE: ready</p>
              </div>
              <p className="animate-pulse pl-4 text-primary/60">_</p>
            </div>
          </div>

          {/* Floating Data Labels (outside 3D so they stay opaque) */}
          {mounted && [
            { top: 'calc(50% - 125px)', left: 'calc(50% + 250px + 10px)', text: 'LAT: 40.7128' },
            { top: 'calc(50% + 125px)', left: 'calc(50% - 250px - 15px)',  text: 'LNG: -74.0060' },
            { top: 'calc(50%)',         left: 'calc(50% + 280px)',         text: 'STATUS: ACTIVE' },
          ].map((label, i) => (
            <div 
              key={i}
              className="absolute font-mono text-[10px] text-primary/70 border border-primary/20 bg-background px-2 py-1 rounded animate-float-subtle pointer-events-none z-30"
              style={{ 
                top: label.top,
                left: label.left,
                animationDelay: `${i * -5}s`,
                boxShadow: '0 0 10px rgba(var(--color-primary), 0.15)',
              }}
            >
              <span className="animate-flicker block">{label.text}</span>
            </div>
          ))}

          {/* 3D Globe container */}
          <div 
            className="relative w-[500px] h-[500px] lg:translate-x-10 animate-wobble" 
            style={{ 
              perspective: '2000px',
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Solid Occlusion Core (Hides lines on the back of the globe) */}
            <div 
              className="absolute inset-[1px] bg-background rounded-full border border-primary/10" 
              style={{ transform: 'translateZ(-1px)' }} 
            />

            {/* Tilted Wrapper for the entire Globe */}
            <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(20deg) rotateZ(-15deg)' }}>
              
              {/* Rotating Globe Core */}
              <div className="absolute inset-0 animate-[spin_40s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }}>
                
                {/* Longitudes (Vertical lines) */}
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={`v-${i}`}
                    className="absolute inset-0 border border-primary/35 rounded-full"
                    style={{ transform: `rotateY(${i * 15}deg)`, borderWidth: '1px' }}
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
                        className="absolute inset-0 border border-primary/35 rounded-full"
                        style={{ 
                          transform: `translateY(${y}px) rotateX(90deg) scale(${scale})`,
                          borderWidth: '1px'
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
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
        @keyframes ship-orbit {
          0% { transform: rotateX(70deg) rotateZ(20deg) rotate(0deg); }
          70% { transform: rotateX(70deg) rotateZ(20deg) rotate(330deg); opacity: 1; }
          85% { transform: rotateX(70deg) rotateZ(20deg) rotate(340deg); opacity: 1; }
          100% { transform: rotateX(70deg) rotateZ(20deg) rotate(360deg); opacity: 1; }
        }
        @keyframes ship-blastoff {
          0%, 70% { transform: translateX(-50%) translateY(0px) scale(1); opacity: 1; }
          80% { transform: translateX(-50%) translateY(-10px) scale(1.2); opacity: 1; }
          100% { transform: translateX(-50%) translateY(-700px) scale(0.3); opacity: 0; }
        }
        @keyframes thruster {
          0%, 100% { opacity: 1; scaleY: 1; }
          50% { opacity: 0.6; scaleY: 0.7; }
        }
        @keyframes free-fly {
          0%   { transform: translate(0vw, 0px) rotate(-8deg); opacity: 0; }
          5%   { opacity: 1; }
          30%  { transform: translate(30vw, -80px) rotate(-3deg); opacity: 1; }
          55%  { transform: translate(65vw, 20px) rotate(5deg); opacity: 1; }
          80%  { transform: translate(100vw, -120px) rotate(-10deg); opacity: 1; }
          90%  { transform: translate(110vw, -200px) rotate(-20deg); opacity: 0; }
          91%  { transform: translate(0vw, 80px) rotate(-5deg); opacity: 0; }
          100% { transform: translate(0vw, 0px) rotate(-8deg); opacity: 0; }
        }
        @keyframes float-subtle {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(5px); }
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          30% { opacity: 1; }
          31% { opacity: 0.5; }
          32% { opacity: 1; }
          80% { opacity: 1; }
          81% { opacity: 0.7; }
          82% { opacity: 1; }
        }
        @keyframes shine {
          to { background-position: 200% center; }
        }
        @keyframes terminal-scroll {
          0% { transform: translateY(0); }
          5% { transform: translateY(0); }
          95% { transform: translateY(-80px); }
          100% { transform: translateY(-80px); }
        }
        .animate-terminal-scroll {
          animation: terminal-scroll 12s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
        .animate-ship-orbit {
          animation: ship-orbit 8s ease-in-out infinite;
        }
        .animate-ship-blastoff {
          animation: ship-blastoff 8s ease-in-out infinite;
        }
        .animate-thruster {
          animation: thruster 0.15s ease-in-out infinite;
        }
        .animate-free-fly {
          animation: free-fly 16s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }
        .animate-wobble {
          animation: wobble 15s ease-in-out infinite;
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-float-subtle {
          animation: float-subtle 6s ease-in-out infinite;
        }
        .animate-flicker {
          animation: flicker 4s linear infinite;
        }
        .animate-shine {
          animation: shine 8s linear infinite;
        }
      `}</style>
    </section>
  )
}
