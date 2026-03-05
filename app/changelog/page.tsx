import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Changelog | -Zero IDE",
  description: "Release notes and version history for -Zero IDE.",
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
  changes: Change[]
}

const releases: Release[] = [
  {
    version: "1.0.0",
    date: "March 1, 2026",
    title: "Official Release",
    changes: [
      { type: "added", text: "Real-time collaborative editing with Yjs CRDT engine" },
      { type: "added", text: "Multi-cursor support showing all participants in a room" },
      { type: "added", text: "Collaboration rooms with shareable room IDs" },
      { type: "added", text: "Monaco Editor integration with IntelliSense and syntax highlighting" },
      { type: "added", text: "Integrated terminal with multi-pane support" },
      { type: "added", text: "Cross-platform builds for Windows, macOS (ARM + Intel), and Linux" },
      { type: "added", text: "CLI tool for opening projects and managing sessions" },
      { type: "added", text: "Extension marketplace with theme and language pack support" },
    ],
  },
  {
    version: "0.9.0",
    date: "February 10, 2026",
    title: "Release Candidate",
    changes: [
      { type: "improved", text: "Reduced WebSocket reconnection time from 5s to under 500ms" },
      { type: "improved", text: "Optimized CRDT sync payload size by 40% for large documents" },
      { type: "fixed", text: "Cursor position drift when multiple users edit the same line" },
      { type: "fixed", text: "macOS DMG installer failing on Apple Silicon when Gatekeeper is enabled" },
      { type: "added", text: "Presence indicators showing who is viewing which file" },
      { type: "added", text: "Dark and light theme toggle with system preference detection" },
    ],
  },
  {
    version: "0.8.0",
    date: "January 15, 2026",
    title: "Beta 3",
    changes: [
      { type: "added", text: "Redis Pub/Sub backend for horizontal scaling across server instances" },
      { type: "added", text: "Room persistence with MongoDB for session recovery" },
      { type: "improved", text: "Editor startup time reduced by 30% with lazy module loading" },
      { type: "fixed", text: "Memory leak in long-running collaboration sessions" },
      { type: "fixed", text: "Linux .deb package missing desktop entry file" },
    ],
  },
  {
    version: "0.7.0",
    date: "December 5, 2025",
    title: "Beta 2",
    changes: [
      { type: "added", text: "Vim and Emacs keybinding presets" },
      { type: "added", text: "File tree sidebar with drag-and-drop support" },
      { type: "improved", text: "Syntax highlighting now supports 50+ languages" },
      { type: "fixed", text: "High CPU usage when idle with no active collaboration" },
      { type: "fixed", text: "Terminal output garbled with certain Unicode characters" },
    ],
  },
  {
    version: "0.6.0",
    date: "November 1, 2025",
    title: "Beta 1",
    changes: [
      { type: "added", text: "Initial public beta release" },
      { type: "added", text: "Core editing experience with Monaco Editor" },
      { type: "added", text: "Basic real-time sync with Socket.IO and Yjs" },
      { type: "added", text: "Windows and macOS installers" },
      { type: "added", text: "Command palette with fuzzy search" },
    ],
  },
]

const typeBadge: Record<ChangeType, { label: string; classes: string }> = {
  added: {
    label: "Added",
    classes: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  },
  improved: {
    label: "Improved",
    classes: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
  },
  fixed: {
    label: "Fixed",
    classes: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  },
}

export default function ChangelogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pt-16">
        <section className="px-6 py-16">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Changelog
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Release notes and version history for -Zero IDE.
            </p>

            <div className="mt-14 relative">
              {/* Timeline line */}
              <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden md:block" />

              <div className="flex flex-col gap-14">
                {releases.map((release, i) => (
                  <div key={release.version} className="relative md:pl-10">
                    {/* Timeline dot */}
                    <div
                      className={`absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 hidden md:block ${
                        i === 0
                          ? "border-foreground bg-foreground"
                          : "border-border bg-background"
                      }`}
                    />

                    <div className="flex flex-col gap-1 mb-5">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-mono text-xs text-muted-foreground border border-border rounded-md px-2 py-0.5">
                          v{release.version}
                        </span>
                        <span className="text-xs text-muted-foreground">{release.date}</span>
                      </div>
                      <h2 className="text-xl font-bold text-foreground">{release.title}</h2>
                    </div>

                    <div className="flex flex-col gap-2">
                      {release.changes.map((change, j) => {
                        const badge = typeBadge[change.type]
                        return (
                          <div
                            key={j}
                            className="flex items-start gap-3 rounded-lg border border-border bg-card p-3"
                          >
                            <span
                              className={`mt-0.5 shrink-0 rounded border px-1.5 py-0.5 text-[10px] font-mono font-medium uppercase tracking-wider ${badge.classes}`}
                            >
                              {badge.label}
                            </span>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {change.text}
                            </p>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
