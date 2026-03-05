"use client"

import { useState, useEffect, useRef } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Users, Circle, Play, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

const initialCode = `import { createServer } from "node:http"
import { WebSocketServer } from "ws"

const server = createServer()
const wss = new WebSocketServer({ server })

wss.on("connection", (ws) => {
  console.log("Client connected")

  ws.on("message", (data) => {
    // Broadcast to all clients
    wss.clients.forEach((client) => {
      if (client !== ws) {
        client.send(data)
      }
    })
  })
})

server.listen(3000, () => {
  console.log("Server running on port 3000")
})`

const simulatedEdits = [
  { line: 7, col: 27, text: "\n\n  ws.send(JSON.stringify({ type: 'welcome', id: ws.id }))", delay: 800 },
  { line: 12, col: 0, text: "      // CRDT merge before broadcast\n", delay: 1500 },
  { line: 15, col: 0, text: "    console.log(`Received: ${data}`)\n", delay: 2200 },
]

interface CursorPos {
  name: string
  color: string
  line: number
  col: number
}

const collaborators: CursorPos[] = [
  { name: "Alice", color: "rgb(244, 114, 182)", line: 7, col: 10 },
  { name: "Bob", color: "rgb(96, 165, 250)", line: 12, col: 5 },
]

function LineNumbers({ count }: { count: number }) {
  return (
    <div className="select-none pr-4 text-right text-muted-foreground/40 font-mono text-xs leading-6">
      {Array.from({ length: count }, (_, i) => (
        <div key={i}>{i + 1}</div>
      ))}
    </div>
  )
}

export default function DemoPage() {
  const [code, setCode] = useState(initialCode)
  const [isPlaying, setIsPlaying] = useState(false)
  const [cursors, setCursors] = useState<CursorPos[]>([])
  const [editIndex, setEditIndex] = useState(0)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const lineCount = code.split("\n").length

  function reset() {
    setCode(initialCode)
    setCursors([])
    setEditIndex(0)
    setIsPlaying(false)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  function play() {
    reset()
    setIsPlaying(true)
    setCursors(collaborators)
  }

  useEffect(() => {
    if (!isPlaying) return
    if (editIndex >= simulatedEdits.length) {
      setIsPlaying(false)
      return
    }

    const edit = simulatedEdits[editIndex]
    timeoutRef.current = setTimeout(() => {
      setCode((prev) => {
        const lines = prev.split("\n")
        const targetLine = Math.min(edit.line, lines.length)
        lines.splice(targetLine, 0, edit.text.replace(/\n/g, ""))
        return lines.join("\n")
      })

      setCursors((prev) =>
        prev.map((c, i) => ({
          ...c,
          line: edit.line + (i === 0 ? 0 : 2),
          col: edit.col + (i === 0 ? edit.text.length : 0),
        }))
      )

      setEditIndex((prev) => prev + 1)
    }, edit.delay)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [isPlaying, editIndex])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pt-16">
        <section className="px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Live Demo
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              See real-time collaboration in action. Watch as simulated users edit code together.
            </p>

            {/* Controls */}
            <div className="mt-10 flex items-center gap-4">
              <Button
                onClick={play}
                disabled={isPlaying}
                className="gap-2 bg-foreground text-background hover:bg-foreground/90 cursor-pointer"
              >
                <Play className="h-4 w-4" />
                {isPlaying ? "Running..." : "Start Simulation"}
              </Button>
              <Button variant="outline" onClick={reset} className="gap-2 cursor-pointer">
                <RotateCcw className="h-4 w-4" />
                Reset
              </Button>
            </div>

            {/* Participants */}
            <div className="mt-6 flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>Participants:</span>
              </div>
              {collaborators.map((c) => (
                <div key={c.name} className="flex items-center gap-1.5 text-sm">
                  <Circle className="h-2.5 w-2.5" style={{ color: c.color, fill: c.color }} />
                  <span className="text-muted-foreground">{c.name}</span>
                </div>
              ))}
              {cursors.length === 0 && (
                <span className="text-xs text-muted-foreground/60 italic">
                  Press start to connect
                </span>
              )}
            </div>

            {/* Editor */}
            <div className="mt-6 rounded-xl border border-border bg-card overflow-hidden">
              {/* Title bar */}
              <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                  <span className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                  <span className="h-3 w-3 rounded-full bg-muted-foreground/20" />
                </div>
                <span className="ml-2 font-mono text-xs text-muted-foreground">server.ts</span>
                <div className="ml-auto flex items-center gap-2 text-xs text-muted-foreground/60">
                  {cursors.length > 0 && (
                    <>
                      <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span>Live</span>
                    </>
                  )}
                </div>
              </div>

              {/* Code area */}
              <div className="flex overflow-x-auto p-4 font-mono text-xs leading-6 relative">
                <LineNumbers count={lineCount} />
                <pre className="flex-1 text-foreground/90 whitespace-pre">
                  <code>{code}</code>

                  {/* Cursor labels */}
                  {cursors.map((cursor) => (
                    <div
                      key={cursor.name}
                      className="absolute pointer-events-none transition-all duration-300"
                      style={{
                        top: `${cursor.line * 24 + 16}px`,
                        left: `${cursor.col * 7.2 + 60}px`,
                      }}
                    >
                      <div
                        className="w-0.5 h-5 rounded-full"
                        style={{ backgroundColor: cursor.color }}
                      />
                      <span
                        className="absolute -top-5 left-0 rounded px-1.5 py-0.5 text-[10px] font-sans font-medium text-background whitespace-nowrap"
                        style={{ backgroundColor: cursor.color }}
                      >
                        {cursor.name}
                      </span>
                    </div>
                  ))}
                </pre>
              </div>
            </div>

            {/* Info cards */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                {
                  title: "Conflict-Free",
                  desc: "Yjs CRDT ensures all participants converge to the same document state, no matter the edit order.",
                },
                {
                  title: "Low Latency",
                  desc: "WebSocket connections via Socket.IO deliver changes in under 50ms on average.",
                },
                {
                  title: "Scalable",
                  desc: "Redis Pub/Sub enables horizontal scaling across multiple server instances seamlessly.",
                },
              ].map((card) => (
                <div key={card.title} className="rounded-xl border border-border bg-card p-5">
                  <h3 className="font-mono text-sm font-semibold text-foreground">{card.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
