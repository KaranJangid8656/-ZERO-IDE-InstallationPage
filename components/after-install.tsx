import { FolderOpen, Users, Share2, Code2, Zap } from "lucide-react"

const steps = [
  {
    icon: <FolderOpen className="h-5 w-5" />,
    title: "Open -Zero IDE",
    description: "Launch the application from your desktop or applications folder.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Create a collaboration room",
    description: "Start a new session to begin working with your team.",
  },
  {
    icon: <Share2 className="h-5 w-5" />,
    title: "Share the room ID",
    description: "Send the unique room ID to other developers to invite them.",
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Code together",
    description: "Multiple users can join and start editing code together.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Real-time sync",
    description: "Changes appear instantly using real-time synchronization.",
  },
]

export function AfterInstall() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-foreground mb-2 text-center">
          What Happens After Installation
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Start collaborating in seconds.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center transition-all hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/[0.04]"
            >
              <span className="absolute top-3 right-3 text-xs font-mono text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-foreground mb-4">
                {step.icon}
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-1">{step.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
