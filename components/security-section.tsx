import { ShieldCheck, FileCheck, Lock } from "lucide-react"

const items = [
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "SHA256 Checksum",
    description: "Verify file integrity with published checksums.",
  },
  {
    icon: <FileCheck className="h-6 w-6" />,
    title: "Verified Builds",
    description: "Every release is built and signed in CI pipelines.",
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Secure Download",
    description: "All downloads served over HTTPS with TLS encryption.",
  },
]

export function SecuritySection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-foreground mb-2">
          {"Security & Integrity"}
        </h2>
        <p className="text-muted-foreground mb-12">
          Every download is verified and secure.
        </p>

        <div className="grid gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center gap-3 rounded-xl border border-border bg-card p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-foreground">
                {item.icon}
              </div>
              <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
