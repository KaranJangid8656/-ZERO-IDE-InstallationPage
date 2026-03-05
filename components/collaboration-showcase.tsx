"use client"

import { useEffect, useState } from "react"
import { EditorSimulation } from "@/components/editor-simulation"
import { MessageCircle, Mic, TerminalSquare } from "lucide-react"

const notifications = [
  {
    title: (
      <>
        Karan created a file <span className="font-mono text-[11px]">socketHandler.js</span>
      </>
    ),
    body: "Synced to everyone in the session.",
  },
  {
    title: "Jennie started a live code review",
    body: "Reviewing server.ts changes.",
  },
  {
    title: "Ted joined the voice channel",
    body: "Audio connected • Low latency.",
  },
]

const chatMessages = [
  {
    author: "Karan • you",
    colorClass: "text-sky-400",
    text: "Let’s move the CRDT merge to a separate helper.",
  },
  {
    author: "Jennie",
    colorClass: "text-pink-300",
    text: "I’ll wire up the broadcast logs and metrics.",
  },
  {
    author: "Ted",
    colorClass: "text-emerald-300",
    text: "Pushing a quick fix to the WebSocket heartbeat.",
  },
  {
    author: "Jennie",
    colorClass: "text-pink-300",
    text: "Karan, can you expose the socketHandler in the API?",
  },
  {
    author: "Karan • you",
    colorClass: "text-sky-400",
    text: "Yep, adding it to the server.ts exports now.",
  },
  {
    author: "Ted",
    colorClass: "text-emerald-300",
    text: "Heartbeat looks stable — latency under 40ms.",
  },
]

export function CollaborationShowcase() {
  const [showNotification, setShowNotification] = useState(false)
  const [notificationIndex, setNotificationIndex] = useState(0)
  const [chatState, setChatState] = useState({
    // start with a full chat log so the block looks busy from the beginning
    list: chatMessages.slice(0, chatMessages.length),
    nextIndex: chatMessages.length,
  })

  useEffect(() => {
    const show = () => {
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 1600)
      setNotificationIndex((prev) => (prev + 1) % notifications.length)
    }

    // initial pop
    show()
    // repeat pop
    const id = setInterval(show, 3800)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const id = setInterval(() => {
      setChatState((prev) => {
        const next = chatMessages[prev.nextIndex % chatMessages.length]
        const updated = [...prev.list, next]
        const trimmed = updated.length > 5 ? updated.slice(updated.length - 5) : updated
        return {
          list: trimmed,
          nextIndex: (prev.nextIndex + 1) % chatMessages.length,
        }
      })
    }, 2300)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="px-6 pb-20 mt-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(260px,2fr)] items-stretch">
          <div className="relative">
            <div className="scale-[1.03] origin-top rounded-2xl shadow-2xl shadow-foreground/[0.10]">
              <EditorSimulation />
            </div>

            {/* In-editor notification */}
            <div className="pointer-events-none absolute right-6 top-16">
              <div
                className={`flex items-start gap-3 rounded-xl border border-border/80 bg-background/95 px-4 py-3 shadow-lg backdrop-blur-sm transform transition-all duration-500 ease-out ${
                  showNotification ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="space-y-1">
                  <p className="text-xs font-medium text-foreground">
                    {notifications[notificationIndex].title}
                  </p>
                  <p className="text-[11px] text-muted-foreground">
                    {notifications[notificationIndex].body}
                  </p>
                </div>
              </div>
            </div>

            {/* Devs online badge */}
            <div className="pointer-events-none absolute bottom-4 right-6">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-background/95 px-3 py-1.5 text-[11px] font-medium text-muted-foreground border border-border/80">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>3 </span>
              </div>
            </div>
          </div>

          {/* Right side: live chat + voice */}
          <div className="flex flex-col gap-4">
            {/* Live chat */}
            <div className="flex-1 rounded-2xl border border-border bg-card/95 shadow-lg p-4 flex flex-col">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary/60 text-foreground">
                    <MessageCircle className="h-3.5 w-3.5" />
                  </span>
                  <span>Live chat</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <TerminalSquare className="h-4 w-4 text-foreground" />
                  <span className="font-bold text-foreground">-Zero IDE</span>
                </div>
              </div>

              <div className="flex-1 space-y-2 text-xs text-foreground/90 overflow-hidden">
                {chatState.list.map((msg, i) => (
                  <div
                    key={`${msg.author}-${i}`}
                    className="flex flex-col gap-0.5 animate-in fade-in slide-in-from-bottom-1 duration-300"
                  >
                    <span className={`font-medium text-[11px] ${msg.colorClass}`}>{msg.author}</span>
                    <span className="text-muted-foreground">{msg.text}</span>
                  </div>
                ))}

                <div className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-secondary/50 px-2 py-1 text-[11px] text-muted-foreground">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="flex items-center gap-[2px]">
                    Jennie is typing
                    <span className="inline-block h-1 w-1 rounded-full bg-muted-foreground/80 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="inline-block h-1 w-1 rounded-full bg-muted-foreground/80 animate-bounce" style={{ animationDelay: "120ms" }} />
                    <span className="inline-block h-1 w-1 rounded-full bg-muted-foreground/80 animate-bounce" style={{ animationDelay: "240ms" }} />
                  </span>
                </div>
              </div>
            </div>

            {/* Voice status */}
            <div className="rounded-2xl border border-border bg-card/95 shadow-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary/60 text-foreground">
                    <Mic className="h-3.5 w-3.5" />
                  </span>
                  <span>Voice channel</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                  <TerminalSquare className="h-4 w-4 text-foreground" />
                  <span className="font-bold text-foreground">-Zero IDE</span>
                </div>
              </div>

              <div className="flex flex-col gap-2 text-[11px]">
                <div className="flex items-center justify-between px-2.5 py-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">Karan</span>
                    <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/15">
                      <Mic className="h-2.5 w-2.5 text-emerald-400" />
                    </span>
                  </div>
                  <div className="flex h-4 items-end gap-[1px]">
                    <span className="w-[2px] bg-emerald-400/80 h-2 rounded-full" />
                    <span className="w-[2px] bg-emerald-400/60 h-3 rounded-full" />
                    <span className="w-[2px] bg-emerald-400/90 h-4 rounded-full" />
                    <span className="w-[2px] bg-emerald-400/50 h-3 rounded-full" />
                  </div>
                </div>

                <div className="flex items-center justify-between px-2.5 py-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">Jennie</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground">Muted</span>
                </div>

                <div className="flex items-center justify-between px-2.5 py-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-foreground">Ted</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground">Connected</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

