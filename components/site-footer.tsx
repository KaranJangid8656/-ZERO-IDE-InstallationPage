"use client"
import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, ExternalLink, TerminalSquare, Globe, Rocket, Shield } from "lucide-react"

const footerSections = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Architecture", href: "#" },
      { label: "Security", href: "#" },
      { label: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "#" },
      { label: "Community Plugins", href: "#" },
      { label: "Webhooks", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "GitHub", href: "https://github.com", icon: <Github className="h-4 w-4" /> },
      { label: "Discord", href: "#" },
      { label: "Twitter", href: "#", icon: <Twitter className="h-4 w-4" /> },
      { label: "LinkedIn", href: "#", icon: <Linkedin className="h-4 w-4" /> },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Contact", href: "#", icon: <Mail className="h-4 w-4" /> },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/60 bg-background overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] left-[-10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      {/* Large Brand Title Background (Animated) */}
      <div className="absolute bottom-[137px] left-0 w-full select-none pointer-events-none opacity-[0.03] overflow-hidden whitespace-nowrap py-4">
        <div className="animate-marquee inline-block">
          <span className="font-mono text-[18vw] font-black leading-none uppercase tracking-[-0.05em] px-[5vw]">
            -ZERO IDE
          </span>
          <span className="font-mono text-[18vw] font-black leading-none uppercase tracking-[-0.05em] px-[5vw]">
            -ZERO IDE
          </span>
          <span className="font-mono text-[18vw] font-black leading-none uppercase tracking-[-0.05em] px-[5vw]">
            -ZERO IDE
          </span>
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-12">
        {/* Massive CTA Section */}
        <div className="flex flex-col items-center text-center gap-8 mb-32 py-12 border-b border-border/40">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-foreground max-w-3xl">
            READY TO CODE AT <span className="text-primary">LIGHTSPEED?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Join thousands of developers building the future together. Experience zero-lag collaboration today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 rounded-full bg-foreground text-background font-bold text-sm hover:scale-105 transition-transform">
              Get Started Now
            </button>
            <button className="px-8 py-4 rounded-full bg-secondary/50 border border-border/80 text-foreground font-bold text-sm hover:bg-secondary transition-colors">
              Read Documentation
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-32 -mt-[95px]">
          {/* Brand Column */}
          <div className="col-span-2 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <Link href="/" className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(var(--color-primary),0.1)]">
                  <TerminalSquare className="h-6 w-6 text-primary" />
                </div>
                <span className="font-mono text-xl font-bold tracking-tighter">-ZERO IDE</span>
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                The next-generation collaborative coding environment. Built for the modern web, high-performance teams, and distributed workflows.
              </p>
            </div>
            
          </div>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-5">
              <h4 className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/50">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-all duration-300"
                    >
                      {link.icon && <span className="opacity-50 group-hover:opacity-100 transition-opacity">{link.icon}</span>}
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>


        {/* Bottom Bar */}
        <div className="mt-[414px] pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
             <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest">
              &copy; 2026 -ZERO IDE. Engineering the future of code.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
              <div className="w-1 h-1 rounded-full bg-primary" />
              v1.0.4-stable
            </span>
            <div className="h-4 w-[1px] bg-border/60" />
            <Link href="#" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="#" className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors">
              Privacy
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </footer>
  )
}
