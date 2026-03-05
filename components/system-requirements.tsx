import { Cpu, HardDrive, MemoryStick, Monitor } from "lucide-react"

const requirements = [
  { icon: <MemoryStick className="h-5 w-5" />, label: "RAM", value: "4 GB minimum" },
  { icon: <Cpu className="h-5 w-5" />, label: "Processor", value: "Dual-core CPU" },
  { icon: <HardDrive className="h-5 w-5" />, label: "Storage", value: "500 MB free space" },
]

const operatingSystems = [
  "Windows 10+",
  "macOS 12+",
  "Ubuntu 20+",
]

export function SystemRequirements() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-foreground mb-2 text-center">
          System Requirements
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Minimum specs to run -Zero IDE.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Hardware requirements */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-6">
              Hardware
            </h3>
            <div className="flex flex-col gap-5">
              {requirements.map((req) => (
                <div key={req.label} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                    {req.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{req.label}</p>
                    <p className="text-foreground font-medium">{req.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* OS requirements */}
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-sm font-mono uppercase tracking-wider text-muted-foreground mb-6">
              Supported Operating Systems
            </h3>
            <div className="flex flex-col gap-4">
              {operatingSystems.map((os) => (
                <div
                  key={os}
                  className="flex items-center gap-3 rounded-lg bg-secondary/50 px-4 py-3"
                >
                  <Monitor className="h-4 w-4 text-foreground" />
                  <span className="text-foreground font-medium">{os}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
