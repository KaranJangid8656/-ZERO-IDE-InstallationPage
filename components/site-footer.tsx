import { ExternalLink } from "lucide-react"

const links = [
  { label: "Documentation", href: "#" },
  { label: "GitHub Repository", href: "#" },
  { label: "Report Issues", href: "#" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <div>
          <h3 className="font-mono text-lg font-bold text-foreground">-Zero IDE</h3>
          <p className="text-sm text-muted-foreground mt-1">
            A real-time collaborative coding environment.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
              <ExternalLink className="h-3 w-3" />
            </a>
          ))}
        </div>

        <p className="text-xs text-muted-foreground">
          {"\u00A9 2026 -Zero IDE. All rights reserved."}
        </p>
      </div>
    </footer>
  )
}
