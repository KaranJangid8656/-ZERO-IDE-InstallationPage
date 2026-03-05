import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BookOpen, Terminal, Users, Zap, Code, Globe } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Docs | -Zero IDE",
  description: "Documentation for -Zero IDE - learn how to install, configure, and collaborate in real time.",
}

const sections = [
  {
    id: "getting-started",
    title: "Getting Started",
    icon: <BookOpen className="h-5 w-5" />,
    content: [
      {
        heading: "Installation",
        text: "Download -Zero IDE for your platform from the downloads page. Run the installer and follow the on-screen prompts. The editor is ready to use immediately after installation with zero configuration required.",
      },
      {
        heading: "First Launch",
        text: "On first launch, -Zero IDE opens with a welcome tab that guides you through basic configuration. You can choose your preferred theme, keybindings (VS Code, Vim, Emacs), and default language settings.",
      },
      {
        heading: "Opening a Project",
        text: 'Use File > Open Folder or drag a project directory into the editor window. -Zero IDE automatically detects the project type and configures language support, linting, and formatting based on your project files.',
      },
    ],
  },
  {
    id: "collaboration",
    title: "Real-Time Collaboration",
    icon: <Users className="h-5 w-5" />,
    content: [
      {
        heading: "Creating a Room",
        text: 'Click the "Collaborate" button in the toolbar or press Ctrl+Shift+C to create a new collaboration room. A unique room ID is generated that you can share with teammates.',
      },
      {
        heading: "Joining a Room",
        text: 'Enter a room ID via File > Join Room or use the command palette (Ctrl+Shift+P) and type "Join Room". You will see other participants\' cursors and selections in real time.',
      },
      {
        heading: "Conflict Resolution",
        text: "-Zero IDE uses Yjs CRDT (Conflict-free Replicated Data Types) to handle simultaneous edits. Conflicts are resolved automatically and deterministically so all participants always see the same state.",
      },
    ],
  },
  {
    id: "editor",
    title: "Editor Features",
    icon: <Code className="h-5 w-5" />,
    content: [
      {
        heading: "IntelliSense",
        text: "Powered by Monaco Editor, -Zero IDE provides smart autocompletion, parameter hints, and quick info for JavaScript, TypeScript, Python, Go, Rust, and more. Language servers connect automatically when detected.",
      },
      {
        heading: "Integrated Terminal",
        text: "Open an integrated terminal with Ctrl+` to run commands without leaving the editor. Supports multiple terminal instances, split panes, and custom shell configuration.",
      },
      {
        heading: "Extensions",
        text: "-Zero IDE supports a growing ecosystem of extensions. Browse and install extensions from the built-in marketplace. Extensions can add language support, themes, debuggers, and custom tools.",
      },
    ],
  },
  {
    id: "commands",
    title: "CLI Reference",
    icon: <Terminal className="h-5 w-5" />,
    content: [
      {
        heading: "zero open",
        text: "Opens a file or folder in -Zero IDE. Usage: zero open [path]. If no path is provided, opens the current directory.",
      },
      {
        heading: "zero collab",
        text: "Starts a collaboration session from the command line. Usage: zero collab --create or zero collab --join <room-id>.",
      },
      {
        heading: "zero ext",
        text: "Manage extensions from the terminal. Usage: zero ext install <name>, zero ext remove <name>, zero ext list.",
      },
    ],
  },
  {
    id: "architecture",
    title: "Architecture",
    icon: <Zap className="h-5 w-5" />,
    content: [
      {
        heading: "Client",
        text: "The editor client is built with React and TypeScript. Monaco Editor provides the core editing experience. Yjs handles local CRDT state, and Socket.IO manages the WebSocket connection to the server.",
      },
      {
        heading: "Server",
        text: "The backend runs on Node.js with Express. Socket.IO handles WebSocket connections for real-time sync. Redis Pub/Sub enables horizontal scaling across multiple server instances.",
      },
      {
        heading: "Database",
        text: "MongoDB stores persistent data including user profiles, room metadata, and project snapshots. Document history and version control data is stored for recovery and audit purposes.",
      },
    ],
  },
  {
    id: "api",
    title: "API Reference",
    icon: <Globe className="h-5 w-5" />,
    content: [
      {
        heading: "REST API",
        text: "The -Zero IDE server exposes a REST API for room management, user authentication, and project operations. All endpoints require authentication via bearer tokens.",
      },
      {
        heading: "WebSocket Events",
        text: "Real-time communication uses Socket.IO events including doc:update, cursor:move, presence:join, and presence:leave. See the full event reference for payload schemas.",
      },
      {
        heading: "Webhooks",
        text: "Configure webhooks to receive notifications when rooms are created, users join or leave, or documents are saved. Useful for integrating with CI/CD pipelines and team notification systems.",
      },
    ],
  },
]

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pt-16">
        <section className="px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl text-balance">
              Documentation
            </h1>
            <p className="mt-3 text-lg text-muted-foreground">
              Everything you need to get started with -Zero IDE.
            </p>

            <nav className="mt-10 flex flex-wrap gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:border-foreground/20"
                >
                  {section.icon}
                  {section.title}
                </a>
              ))}
            </nav>

            <div className="mt-16 flex flex-col gap-20">
              {sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-24">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
                  </div>

                  <div className="flex flex-col gap-8">
                    {section.content.map((item) => (
                      <div key={item.heading} className="rounded-xl border border-border bg-card p-6">
                        <h3 className="font-mono text-sm font-semibold text-foreground mb-2">
                          {item.heading}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>
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
