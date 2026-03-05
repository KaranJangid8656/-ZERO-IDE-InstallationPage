"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { Circle } from "lucide-react"

// Syntax highlighting helper
function tokenizeLine(line: string): React.ReactNode[] {
  const tokens: React.ReactNode[] = []
  let remaining = line
  let key = 0

  const patterns: [RegExp, string][] = [
    [/^(\/\/.*|\/\*.*)/, "text-muted-foreground/60 italic"],                  // comments
    [/^(import|export|from|const|let|var|function|return|if|else|new|typeof|class|extends|async|await|default)\b/, "text-rose-400"],  // keywords
    [/^("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/, "text-amber-300"],  // strings
    [/^(\d+)/, "text-orange-300"],                                            // numbers
    [/^(true|false|null|undefined|NaN|Infinity)\b/, "text-orange-300"],       // literals
    [/^(console)\b/, "text-cyan-300"],                                        // console
    [/^(log|send|on|forEach|listen|stringify|parse|splice|join|split|map|filter|reduce)\b/, "text-sky-300"],  // methods
    [/^(WebSocketServer|JSON)\b/, "text-teal-300"],                           // built-in objects
    [/^(\{|\}|\(|\)|\[|\])/, "text-foreground/60"],                           // brackets
    [/^(=>|===|!==|&&|\|\||\.{3}|\+=|-=)/, "text-foreground/50"],             // operators
  ]

  while (remaining.length > 0) {
    let matched = false
    for (const [regex, cls] of patterns) {
      const m = remaining.match(regex)
      if (m) {
        tokens.push(<span key={key++} className={cls}>{m[0]}</span>)
        remaining = remaining.slice(m[0].length)
        matched = true
        break
      }
    }
    if (!matched) {
      // Grab the next chunk of plain text until a pattern might match
      const nextSpecial = remaining.slice(1).search(/[/"'`\d()\[\]{}]|import|export|from|const|let|var|function|return|if|else|new|console|true|false|null|undefined|WebSocketServer|JSON|log|send|on|forEach|listen|stringify|=>|===/)
      if (nextSpecial === -1) {
        tokens.push(<span key={key++} className="text-foreground/80">{remaining}</span>)
        break
      }
      tokens.push(<span key={key++} className="text-foreground/80">{remaining.slice(0, nextSpecial + 1)}</span>)
      remaining = remaining.slice(nextSpecial + 1)
    }
  }

  return tokens
}

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
  { line: 7, col: 27, text: '  ws.send(JSON.stringify({ type: "welcome" }))', delay: 1200 },
  { line: 12, col: 0, text: "    // CRDT merge before broadcast", delay: 2000 },
  { line: 16, col: 0, text: "    console.log(`Received: ${data}`)", delay: 2800 },
]

const cursorTimeline: Record<string, { line: number; col: number }[]> = {
  Karan: [
    { line: 7, col: 40 },
    { line: 12, col: 28 },
    { line: 16, col: 30 },
  ],
  // Jennie stays on the same line while "typing" across it
  Jennie: [
    { line: 12, col: 4 },
    { line: 12, col: 18 },
    { line: 12, col: 32 },
  ],
  Ted: [
    { line: 10, col: 6 },
    { line: 14, col: 20 },
    { line: 18, col: 8 },
  ],
}

interface CursorPos {
  name: string
  color: string
  line: number
  col: number
}

const collaborators: CursorPos[] = [
  { name: "Karan", color: "rgb(59, 130, 246)", line: 7, col: 10 }, // blue
  { name: "Jennie", color: "rgb(244, 114, 182)", line: 12, col: 5 }, // pink
  { name: "Ted", color: "rgb(52, 211, 153)", line: 16, col: 8 }, // teal
]

function LineNumbers({ count }: { count: number }) {
  return (
    <div className="select-none pr-4 text-right text-muted-foreground/70 font-mono text-[11px] leading-[22px]">
      {Array.from({ length: count }, (_, i) => (
        <div key={i}>{i + 1}</div>
      ))}
    </div>
  )
}

export function EditorSimulation() {
  const [code, setCode] = useState(initialCode)
  const [cursors, setCursors] = useState<CursorPos[]>([])
  const [editIndex, setEditIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const cycleRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const lines = code.split("\n")
  const lineCount = lines.length

  const reset = useCallback(() => {
    setCode(initialCode)
    setCursors([])
    setEditIndex(0)
    setIsPlaying(false)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }, [])

  const play = useCallback(() => {
    setCode(initialCode)
    setCursors(collaborators)
    setEditIndex(0)
    setIsPlaying(true)
  }, [])

  useEffect(() => {
    const t = setTimeout(play, 600)
    return () => clearTimeout(t)
  }, [play])

  useEffect(() => {
    if (!isPlaying) return
    if (editIndex >= simulatedEdits.length) {
      setIsPlaying(false)
      cycleRef.current = setTimeout(() => {
        reset()
        setTimeout(play, 400)
      }, 3000)
      return
    }

    const edit = simulatedEdits[editIndex]
    timeoutRef.current = setTimeout(() => {
      setCode((prev) => {
        const l = prev.split("\n")
        const targetLine = Math.min(edit.line, l.length)
        l.splice(targetLine, 0, edit.text)
        return l.join("\n")
      })

      setCursors((prev) =>
        prev.map((c) => {
          // Jennie: stays on one line and "types" across it
          if (c.name === "Jennie") {
            const typingLine = 12
            const baseCol = 4
            const step = Math.min(editIndex + 1, 6) // more steps = moves further like typing
            return {
              ...c,
              line: typingLine,
              col: baseCol + step * 4,
            }
          }

          // Others follow their own path
          const path = cursorTimeline[c.name]
          if (!path) return c
          const step = Math.min(editIndex, path.length - 1)
          const target = path[step]
          return {
            ...c,
            line: target.line,
            col: target.col,
          }
        })
      )

      setEditIndex((prev) => prev + 1)
    }, edit.delay)

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [isPlaying, editIndex, reset, play])

  useEffect(() => {
    return () => {
      if (cycleRef.current) clearTimeout(cycleRef.current)
    }
  }, [])

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden shadow-lg shadow-foreground/[0.03]">
      {/* macOS-style title bar */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57] shadow-inner" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e] shadow-inner" />
          <span className="h-3 w-3 rounded-full bg-[#28c840] shadow-inner" />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <span className="font-mono text-[11px] text-muted-foreground/90">server.ts</span>
        </div>
        <div className="flex items-center gap-3">
          {collaborators.map((c) => (
            <div key={c.name} className="flex items-center gap-1.5 text-[11px] text-muted-foreground/90">
              <Circle className="h-2 w-2" style={{ color: c.color, fill: c.color }} />
              <span>{c.name}</span>
            </div>
          ))}
          {cursors.length > 0 && (
            <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground/90">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Live</span>
            </div>
          )}
        </div>
      </div>

      {/* Code area -- fixed height, no scrolling */}
      <div className="flex p-3 font-mono text-[11px] leading-[22px] relative overflow-hidden h-[512px]">
        <LineNumbers count={26} />
        <div className="flex-1 overflow-hidden">
          <pre className="text-foreground/80 whitespace-pre">
            <code>
              {lines.map((line, i) => (
                <div key={i}>{tokenizeLine(line)}{line === "" && "\u200B"}</div>
              ))}
            </code>
          </pre>

          {/* Cursors */}
          {cursors.map((cursor) => (
            <div
              key={cursor.name}
              className="absolute pointer-events-none transition-all duration-500 ease-out"
              style={{
                top: `${cursor.line * 22 + 12}px`,
                left: `${cursor.col * 6.6 + 52}px`,
              }}
            >
              <div
                className="w-0.5 h-[18px] rounded-full animate-pulse"
                style={{ backgroundColor: cursor.color }}
              />
              <span
                className="absolute -top-4 left-0 rounded px-1 py-px text-[9px] font-sans font-medium text-background whitespace-nowrap"
                style={{ backgroundColor: cursor.color }}
              >
                {cursor.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
