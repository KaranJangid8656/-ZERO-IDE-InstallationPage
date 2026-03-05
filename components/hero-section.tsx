"use client"

import { useState } from "react"
import { Download, Apple, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EditorSimulation } from "@/components/editor-simulation"

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
    <section className="relative px-6 pt-36 pb-20 overflow-hidden">
      {/* Metallic sheen glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-foreground/[0.04] blur-[100px]" />
      <div className="pointer-events-none absolute top-20 left-1/3 -translate-x-1/2 h-[200px] w-[400px] rounded-full bg-foreground/[0.03] blur-[60px]" />

      <div className="relative z-10 mx-auto max-w-7xl flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
        {/* Left -- text content */}
        <div className="flex flex-col items-start gap-6 lg:max-w-md xl:max-w-lg shrink-0">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-mono text-muted-foreground shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-foreground/40 animate-pulse" />
            Version 1.0.0
          </span>

          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            {'Install '}
            <span className="bg-gradient-to-b from-foreground via-foreground/80 to-muted-foreground bg-clip-text text-transparent">
              -Zero IDE
            </span>
          </h1>

          <div className="flex flex-col gap-1">
            <p className="text-xl text-foreground font-medium md:text-2xl">
              Code collaboration made simple
            </p>
            <p className="text-lg text-muted-foreground">
              Develop together, anywhere
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 mt-2">
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
            <Button size="lg" className="gap-2 text-base font-semibold w-64 py-6 cursor-pointer bg-foreground text-background hover:bg-foreground/90">
              <Download className="h-5 w-5" />
              {current.label}
            </Button>
          </div>

          <p className="text-xs text-muted-foreground">
            {'Free for developers and open for collaboration.'}
          </p>
        </div>

        {/* Right -- live editor simulation */}
        <div className="flex-1 min-w-0">
          <EditorSimulation />
        </div>
      </div>
    </section>
  )
}
