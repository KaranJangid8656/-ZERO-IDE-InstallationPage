"use client"

import { useState } from "react"
import { Monitor, Apple, Terminal } from "lucide-react"

const platforms = [
  {
    id: "windows",
    label: "Windows",
    icon: <Monitor className="h-4 w-4" />,
    steps: [
      "Download the installer",
      "Run the setup file",
      "Launch -Zero IDE and create a collaboration server",
    ],
  },
  {
    id: "macos",
    label: "macOS",
    icon: <Apple className="h-4 w-4" />,
    steps: [
      "Download the DMG file",
      "Drag -Zero IDE to Applications",
      "Open the application",
    ],
  },
  {
    id: "linux",
    label: "Linux",
    icon: <Terminal className="h-4 w-4" />,
    steps: [
      "Download the appropriate package",
      "Install using the package manager",
      "Launch the application",
    ],
  },
]

export function InstallationGuide() {
  const [active, setActive] = useState("windows")
  const current = platforms.find((p) => p.id === active)!

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold text-foreground mb-2 text-center">
          Installation Guide
        </h2>
        <p className="text-muted-foreground text-center mb-10">
          Get up and running in three simple steps.
        </p>

        {/* Tab selector */}
        <div className="flex justify-center gap-1 mb-10 rounded-lg border border-border bg-secondary/30 p-1 w-fit mx-auto">
          {platforms.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all cursor-pointer ${
                active === p.id
                  ? "bg-foreground text-background shadow-sm"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {p.icon}
              {p.label}
            </button>
          ))}
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />

          <div className="flex flex-col gap-8">
            {current.steps.map((step, i) => (
              <div key={i} className="flex items-start gap-5">
                <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-card text-sm font-mono font-bold text-foreground">
                  {i + 1}
                </div>
                <div className="pt-2">
                  <p className="text-foreground text-base leading-relaxed">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
