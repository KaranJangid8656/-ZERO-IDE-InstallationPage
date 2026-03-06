"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { TerminalSquare, Github, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { label: "Download", href: "/" },
  { label: "Docs", href: "/docs" },
  { label: "Changelog", href: "/changelog" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-2xl transition-all">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 h-16">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
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
                    ? "text-foreground font-medium"
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

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <a href="https://github.com/KaranJangid8656/-Zero-IDE-InstallationPage" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors mr-1 sm:mr-0">
            <Github className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <Button size="sm" asChild className="font-semibold cursor-pointer bg-foreground text-background hover:bg-foreground/90 h-8 px-3 sm:px-4 hidden sm:inline-flex">
            <Link href="/">
               Download
            </Link>
          </Button>
          
          {/* Mobile menu toggle */}
          <button 
            className="md:hidden ml-1 p-1.5 text-muted-foreground hover:text-foreground rounded-md hover:bg-muted/50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border/60 bg-background/95 backdrop-blur-3xl px-6 py-4 animate-in slide-in-from-top-2">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              )
            })}
            <div className="pt-2 sm:hidden">
              <Button size="sm" asChild className="w-full font-semibold cursor-pointer bg-foreground text-background hover:bg-foreground/90">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Download</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
