import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Box, Sparkles, CheckCircle, ArrowUpCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Changelog | -Zero IDE",
  description: "Release notes, updates, and version history for -Zero IDE.",
}

type ChangeType = "added" | "improved" | "fixed"

interface Change {
  type: ChangeType
  text: string
}

interface Release {
  version: string
  date: string
  title: string
  description?: string
  changes: Change[]
}

const releases: Release[] = []

const typeBadge: Record<ChangeType, { label: string; classes: string; icon: any }> = {
  added: {
    label: "Added",
    classes: "bg-secondary text-foreground border-border/60",
    icon: <Sparkles className="h-3 w-3 text-muted-foreground" />
  },
  improved: {
    label: "Improved",
    classes: "bg-secondary text-foreground border-border/60",
    icon: <ArrowUpCircle className="h-3 w-3 text-muted-foreground" />
  },
  fixed: {
    label: "Fixed",
    classes: "bg-secondary text-foreground border-border/60",
    icon: <CheckCircle className="h-3 w-3 text-muted-foreground" />
  },
}

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      
      <main className="flex-1 w-full max-w-[900px] mx-auto pt-24 pb-32 px-6">
        <div className="mb-20 text-center relative">
          {/* UNDER DEVELOPMENT WATERMARK */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-[170px] w-full pointer-events-none select-none overflow-hidden flex justify-center opacity-[0.3] z-0">
            <span className="font-mono text-[7vw] md:text-[5vw] font-black leading-none uppercase tracking-[-0.05em] whitespace-nowrap">
              UNDER DEVELOPMENT
            </span>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center p-3 bg-secondary/30 rounded-2xl mb-6 border border-border/50">
              <Box className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-foreground mb-4">
              Beta Changelog
            </h1>
          </div>
        </div>

        <div className="relative border-l border-border/40 ml-4 md:ml-0 md:pl-10 space-y-20">
          {releases.map((release, i) => (
            <div key={release.version} className="relative group">
              {/* Timeline Indicator */}
              <div
                className={`absolute -left-[45px] md:-left-[45px] top-1.5 h-3 w-3 rounded-full border-2 transition-colors duration-300 ${
                  i === 0
                    ? "border-primary bg-primary shadow-[0_0_10px_rgba(var(--color-primary),0.8)]"
                    : "border-border bg-background group-hover:border-primary/50"
                }`}
              />
              {i === 0 && (
                <div className="absolute -left-[45px] md:-left-[45px] top-1.5 h-3 w-3 rounded-full bg-primary animate-ping opacity-20" />
              )}

              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-4">
                <span className="font-mono text-2xl font-bold tracking-tight text-foreground">
                  v{release.version}
                </span>
                <span className="text-sm font-medium text-muted-foreground bg-secondary/50 px-3 py-1 rounded-full w-fit">
                  {release.date}
                </span>
              </div>

              <h2 className="text-xl font-semibold text-foreground/90 mb-3">{release.title}</h2>
              
              {release.description && (
                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                  {release.description}
                </p>
              )}

              <div className="flex flex-col gap-3">
                {release.changes.map((change, j) => {
                  const badge = typeBadge[change.type]
                  return (
                    <div
                      key={j}
                      className="group/item flex items-start gap-4 rounded-xl border border-transparent hover:border-border/40 hover:bg-secondary/10 p-2 -ml-2 transition-colors"
                    >
                      <div
                        className={`mt-0.5 shrink-0 flex items-center gap-1.5 rounded-md border px-2 py-1 flex-row text-[11px] font-mono font-bold uppercase tracking-widest ${badge.classes}`}
                      >
                        {badge.icon}
                        {badge.label}
                      </div>
                      <span className="text-sm text-muted-foreground/90 leading-relaxed pt-1 group-hover/item:text-foreground transition-colors">
                        {change.text}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </main>
      
      <SiteFooter />
    </div>
  )
}
