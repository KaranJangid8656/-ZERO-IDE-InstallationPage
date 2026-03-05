"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { TerminalSquare, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { label: "Download", href: "/" },
  { label: "Docs", href: "/docs" },
  { label: "Changelog", href: "/changelog" },
  { label: "Demo", href: "/demo" },
]

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-2xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 h-16">
        <Link href="/" className="flex items-center gap-2 -ml-18">
          <TerminalSquare className="h-5 w-5 text-foreground" />
          <span className="font-mono text-sm font-bold text-foreground">-Zero IDE</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-3 py-1.5 rounded-md text-sm transition-colors ${
                  isActive
                    ? "text-foreground font-medium bg-muted"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[calc(50%+0.5px)] w-4 h-0.5 rounded-full bg-foreground" />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-3 -mr-20">
          <ThemeToggle />
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <Button size="sm" asChild className="font-semibold cursor-pointer bg-foreground text-background hover:bg-foreground/90">
            <Link href="/">Download</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
