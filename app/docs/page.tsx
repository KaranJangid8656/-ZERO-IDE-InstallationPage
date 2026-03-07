import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { 
  BookOpen, 
  Terminal, 
  Users, 
  Zap, 
  Code, 
  Globe,
  ChevronRight,
  Hash,
  Play,
  Layers,
  Settings,
  Shield,
  Search
} from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Documentation | -Zero IDE",
  description: "Comprehensive guides, tutorials, and API reference for -Zero IDE. Learn how to install, configure, and collaborate.",
}

const sidebarGroups = [
  {
    title: "Overview",
    icon: <Play className="h-4 w-4" />,
    items: [
      { title: "Introduction", href: "#introduction" },
      { title: "Installation", href: "#installation" },
      { title: "Quick Start", href: "#quick-start" },
    ]
  },
  {
    title: "Core Features",
    icon: <Layers className="h-4 w-4" />,
    items: [
      { title: "Real-Time Sync", href: "#real-time-sync" },
      { title: "Workspace & Terminals", href: "#workspace" },
      { title: "Extensions", href: "#extensions" },
    ]
  },
  {
    title: "Advanced",
    icon: <Settings className="h-4 w-4" />,
    items: [
      { title: "CLI Reference", href: "#cli-reference" },
      { title: "Architecture", href: "#architecture" },
      { title: "Security", href: "#security" },
    ]
  }
]

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      
      <main className="flex-1 flex pt-16 mx-auto w-full max-w-[1400px]">
        {/* Left Sidebar Navigation */}
        <aside className="hidden lg:block w-[280px] shrink-0 border-r border-border/40 overflow-y-auto sticky top-16 h-[calc(100vh-4rem)] p-6 pl-8 custom-scrollbar">
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search documentation..." 
              className="w-full bg-secondary/50 border border-border rounded-md pl-9 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary transition-all"
            />
          </div>

          <nav className="flex flex-col gap-8">
            {sidebarGroups.map((group, idx) => (
              <div key={idx} className="flex flex-col gap-3">
                <h4 className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
                  {group.icon}
                  {group.title}
                </h4>
                <ul className="flex flex-col gap-1.5 border-l border-border/40 ml-2 pl-3">
                  {group.items.map((item, itemIdx) => (
                    <li key={itemIdx}>
                      <a 
                        href={item.href}
                        className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main Content Area */}
        <div className="flex-1 min-w-0 px-6 py-10 lg:px-12 xl:px-20 overflow-y-auto">
          <div className="max-w-3xl prose prose-invert prose-pre:bg-[#111111] prose-pre:border prose-pre:border-border/40 mx-auto lg:mx-0 font-sans">
            <div className="flex items-center gap-2 text-primary font-mono text-sm mb-4">
              <BookOpen className="h-4 w-4" />
              <span>Documentation</span>
              <ChevronRight className="h-3 w-3" />
              <span>Overview</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-foreground mb-4">
              Introduction to -ZERO IDE
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-10">
              Welcome to the official documentation for -Zero IDE. Learn how to build, collaborate, and deploy at lightspeed using our next-generation unified development environment.
            </p>

            <hr className="border-border/40 my-10" />

            {/* Introduction */}
            <section id="introduction" className="scroll-mt-24 mb-16">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 group cursor-pointer">
                <Hash className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                What is -Zero IDE?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                -Zero IDE is a lightweight, high-performance editor built with web technologies but designed to run natively on your machine or fully in the browser. It combines the speed of modern hardware with the collaborative power of cloud-native architecture.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="border border-border/40 bg-secondary/20 p-5 rounded-xl">
                  <Zap className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Zero Latency Sync</h3>
                  <p className="text-sm text-muted-foreground">Conflict-free replicated data types (CRDTs) ensure your cursor and keystrokes sync instantly.</p>
                </div>
                <div className="border border-border/40 bg-secondary/20 p-5 rounded-xl">
                  <Terminal className="h-6 w-6 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">Built-in CLI</h3>
                  <p className="text-sm text-muted-foreground">Integrated terminal multiplexing with native shell support right out of the box.</p>
                </div>
              </div>
            </section>

            {/* Installation */}
            <section id="installation" className="scroll-mt-24 mb-16">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 group cursor-pointer">
                <Hash className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                Installation
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can install the -Zero CLI and IDE globally via NPM or use our standalone binaries for your OS. We recommend the NPM route if you are already in a Node.js ecosystem.
              </p>
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-[#0a0a0a] rounded-lg border border-border overflow-hidden">
                  <div className="flex items-center px-4 py-2 bg-[#111] border-b border-border/40">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="ml-4 font-mono text-xs text-muted-foreground">terminal</span>
                  </div>
                  <pre className="p-4 overflow-x-auto text-sm font-mono text-gray-300">
                    <code><span className="text-primary">$</span> npm install -g @zero-ide/cli<br/><span className="text-primary">$</span> zero init my-project<br/><span className="text-primary">$</span> cd my-project &amp;&amp; zero open</code>
                  </pre>
                </div>
              </div>
            </section>

            {/* Quick Start */}
            <section id="quick-start" className="scroll-mt-24 mb-16">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 group cursor-pointer">
                <Hash className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                Quick Start
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Get up and running with a fully configured React template right out of the box. No manual Webpack or Babel configuration needed.
              </p>
              <div className="relative group mt-6">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
                <div className="relative bg-[#0a0a0a] rounded-lg border border-border overflow-hidden p-6 py-8 flex flex-col items-center justify-center gap-4 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 mb-2">
                    <Play className="h-8 w-8 text-primary ml-1" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">Interactive Quick Start</h3>
                  <p className="text-sm text-muted-foreground max-w-sm">Click the button below to bootstrap a live Node.js sandbox instantly using the browser engine.</p>
                  <button className="mt-2 px-6 py-2.5 bg-primary/10 hover:bg-primary/20 hover:scale-105 border border-primary/30 text-primary transition-all rounded-full font-medium text-sm">
                    Open Default Template
                  </button>
                </div>
              </div>
            </section>

            {/* Real-time sync */}
            <section id="real-time-sync" className="scroll-mt-24 mb-16">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 group cursor-pointer">
                <Hash className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                Real-Time Collaboration
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Collaboration is built into the core. Instead of sending full document snapshots, -Zero uses an append-only event log (Yjs/CRDT) which merges concurrent edits perfectly without locks.
              </p>
              <h3 className="text-lg font-semibold mt-6 mb-2">Starting a Session</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To start collaborating, simply click the <strong>Share</strong> button in the top right of the editor, or run the following command to generate a secure invite link:
              </p>
              <pre className="bg-[#0a0a0a] border border-border rounded-lg p-4 font-mono text-sm text-gray-300 overflow-x-auto">
                <code><span className="text-primary">$</span> zero collab --create<br/>✓ Room created! Share this link: https://zero.dev/join/x78f-9qwe</code>
              </pre>
            </section>

            {/* Workspace */}
            <section id="workspace" className="scroll-mt-24 mb-16">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 group cursor-pointer">
                <Hash className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                Workspace & Terminals
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                -Zero IDE gives you complete control over your window management. Split panes infinitely, open floating terminal tabs, and map distinct shells directly to multiple environments.
              </p>
              <div className="grid grid-cols-1 mt-6 gap-6">
                <div className="rounded-xl border border-border overflow-hidden">
                  <div className="bg-[#111] p-3 border-b border-border/40 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Terminal className="h-4 w-4 text-muted-foreground" />
                      <span className="text-xs font-mono text-muted-foreground font-medium">Split-Pane Preview</span>
                    </div>
                  </div>
                  <div className="bg-[#050505] p-6 flex flex-col sm:flex-row gap-4 h-[200px]">
                    <div className="flex-1 bg-[#111] border border-border/40 rounded-md p-4 flex flex-col justify-end">
                      <span className="font-mono text-xs text-primary mb-1">$ build starting...</span>
                      <span className="font-mono text-xs text-green-500">✓ webpack compiled explicitly</span>
                    </div>
                    <div className="flex-1 bg-[#111] border border-border/40 rounded-md p-4 flex flex-col justify-end">
                      <span className="font-mono text-xs text-primary mb-1">$ npm run test</span>
                      <span className="font-mono text-xs text-gray-400">Running suites...</span>
                      <span className="font-mono text-xs text-green-500">Pass: 24 specs</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Extensions */}
            <section id="extensions" className="scroll-mt-24 mb-16">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 group cursor-pointer">
                <Hash className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                Extensions ecosystem
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Boost your productivity with custom tooling. You can search, install, and create custom web extensions the same way you do locally.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="bg-secondary/20 border border-border/60 rounded-xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#111] border border-border/40 shrink-0 flex items-center justify-center">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg" alt="VSCode" className="w-5 h-5 opacity-70" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">VS Code Compatibility</h4>
                    <p className="text-xs text-muted-foreground mt-1">Most generic VS Code extensions map instantly. Just drop the VSIX file or install via command palette.</p>
                  </div>
                </div>
                <div className="bg-secondary/20 border border-border/60 rounded-xl p-5 flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#111] border border-border/40 shrink-0 flex items-center justify-center">
                    <Code className="h-5 w-5 text-gray-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">Theme Authors</h4>
                    <p className="text-xs text-muted-foreground mt-1">Easily map TextMate grammar tokens natively. We support dynamic CSS variables to reskin the entire IDE directly.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* CLI Reference */}
            <section id="cli-reference" className="scroll-mt-24 mb-16">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 group cursor-pointer">
                <Hash className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                CLI Reference
              </h2>
              <div className="overflow-x-auto mt-6">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="py-3 px-4 font-semibold text-foreground">Command</th>
                      <th className="py-3 px-4 font-semibold text-foreground">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/40">
                    <tr className="hover:bg-secondary/10 transition-colors">
                      <td className="py-3 px-4 font-mono text-sm text-primary">zero open [path]</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">Opens the specified directory in the editor.</td>
                    </tr>
                    <tr className="hover:bg-secondary/10 transition-colors">
                      <td className="py-3 px-4 font-mono text-sm text-primary">zero collab</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">Manage real-time collaboration sessions.</td>
                    </tr>
                    <tr className="hover:bg-secondary/10 transition-colors">
                      <td className="py-3 px-4 font-mono text-sm text-primary">zero ext [cmd]</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">Install, remove, or list extensions.</td>
                    </tr>
                    <tr className="hover:bg-secondary/10 transition-colors">
                      <td className="py-3 px-4 font-mono text-sm text-primary">zero config</td>
                      <td className="py-3 px-4 text-sm text-muted-foreground">Open the global JSON configuration file.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Architecture */}
            <section id="architecture" className="scroll-mt-24 mb-16">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 group cursor-pointer">
                <Hash className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                Architecture
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The -Zero IDE platform is built on a distributed, cloud-native architecture optimized for speed and reliability.
              </p>
              <div className="space-y-6 mt-6">
                <div className="bg-[#0a0a0a] border border-border/60 rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    Client-Side Engine
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Powered by Monaco Editor (the same core as VS Code) and React. It uses WebAssembly for compute-heavy language servers running directly in the browser to eliminate round-trip latency.
                  </p>
                </div>
                <div className="bg-[#0a0a0a] border border-border/60 rounded-xl p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Layers className="h-5 w-5 text-primary" />
                    Sync Layer
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    State synchronization is handled by Yjs over WebRTC and WebSockets. This peer-to-peer approach means traffic is end-to-end encrypted and bypasses servers whenever possible.
                  </p>
                </div>
              </div>
            </section>

            {/* Security */}
            <section id="security" className="scroll-mt-24 mb-16">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-4 group cursor-pointer">
                <Hash className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                Security Model
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Security is deeply integrated into our advanced collaboration environment. Because you share live codebases, we enforce strict isolation and encryption policies.
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <li className="flex items-start gap-3 bg-secondary/10 p-4 rounded-lg border border-border/30">
                  <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground text-sm">End-to-End Encryption</h4>
                    <p className="text-xs text-muted-foreground mt-1">All collaboration data, including keystrokes and terminal logs, is encrypted using AES-256-GCM.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-secondary/10 p-4 rounded-lg border border-border/30">
                  <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground text-sm">Air-Gapped Workspaces</h4>
                    <p className="text-xs text-muted-foreground mt-1">Remote developmental environments run inside heavily restricted, single-use containerized Sandboxes.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-secondary/10 p-4 rounded-lg border border-border/30">
                  <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground text-sm">Role-Based Access</h4>
                    <p className="text-xs text-muted-foreground mt-1">Define read, write, and execute permissions natively. Block terminal access for specific guests instantly.</p>
                  </div>
                </li>
              </ul>
            </section>

          </div>
        </div>

        {/* Right Sidebar (Table of Contents) */}
        <aside className="hidden xl:block w-[240px] shrink-0 sticky top-16 h-[calc(100vh-4rem)] p-6 pt-10 border-l border-border/40">
          <h5 className="font-semibold text-sm mb-4">On this page</h5>
          <ul className="flex flex-col gap-2.5 text-sm">
            <li>
              <a href="#introduction" className="text-muted-foreground hover:text-foreground transition-colors">What is -Zero IDE?</a>
            </li>
            <li>
              <a href="#installation" className="text-muted-foreground hover:text-foreground transition-colors">Installation</a>
            </li>
            <li>
              <a href="#quick-start" className="text-muted-foreground hover:text-foreground transition-colors">Quick Start</a>
            </li>
            <li>
              <a href="#real-time-sync" className="text-muted-foreground hover:text-foreground transition-colors">Real-Time Collaboration</a>
            </li>
            <li className="pl-4">
              <a href="#real-time-sync" className="text-muted-foreground hover:text-foreground transition-colors text-xs">Starting a Session</a>
            </li>
            <li>
              <a href="#workspace" className="text-muted-foreground hover:text-foreground transition-colors">Workspace & Terminals</a>
            </li>
            <li>
              <a href="#extensions" className="text-muted-foreground hover:text-foreground transition-colors">Extensions</a>
            </li>
            <li>
              <a href="#cli-reference" className="text-muted-foreground hover:text-foreground transition-colors">CLI Reference</a>
            </li>
            <li>
              <a href="#architecture" className="text-muted-foreground hover:text-foreground transition-colors">Architecture</a>
            </li>
            <li>
              <a href="#security" className="text-muted-foreground hover:text-foreground transition-colors">Security</a>
            </li>
          </ul>
        </aside>
      </main>
      
      <SiteFooter />
    </div>
  )
}
