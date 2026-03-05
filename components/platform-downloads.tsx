"use client"

import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DownloadOption {
  label: string
  file: string
}

interface PlatformCardProps {
  icon: React.ReactNode
  title: string
  description: string
  options: DownloadOption[]
}

function PlatformCard({ icon, title, description, options }: PlatformCardProps) {
  return (
    <div className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/[0.04]">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2 mt-auto">
        {options.map((option) => (
          <Button
            key={option.file}
            variant="secondary"
            className="w-full justify-between gap-2 font-mono text-sm cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <span className="text-secondary-foreground">{option.label}</span>
              <span className="text-muted-foreground text-xs">{option.file}</span>
            </span>
            <Download className="h-4 w-4 text-muted-foreground" />
          </Button>
        ))}
      </div>
    </div>
  )
}

function WindowsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
    </svg>
  )
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function LinuxIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.368 1.884 1.43.199.02.397.005.587-.048.346-.098.56-.375.54-.774-.003-.09-.017-.2-.048-.3l-.098-.276c-.168-.477-.377-.917-.387-1.44-.012-.52.01-1.193.14-1.96.17-.932.268-1.79.164-2.498-.073-.393-.2-.74-.398-1.023-.26-.334-.7-.456-1.148-.395-.107-.38-.284-.76-.593-1.09-.072-.08-.153-.138-.235-.2a3.94 3.94 0 00.13-.48.915.915 0 00.07-.173c.086-.319.049-.668.013-1.019-.066-.7-.17-1.43-.166-2.1.004-.663.064-1.263-.036-1.903-.067-.394-.186-.8-.396-1.135-.21-.34-.5-.603-.858-.727-.287-.102-.6-.082-.898.024l-.02.009c-.198.09-.38.222-.54.367-.324.293-.592.678-.82 1.04-.44.702-.755 1.335-1.078 1.989-.305.618-.587 1.257-.9 1.81-.17.3-.36.578-.568.83-.12.143-.25.285-.4.418-.112-.127-.248-.245-.388-.36-.217-.168-.46-.308-.7-.413-.237-.103-.484-.17-.72-.187-.232-.015-.46.014-.672.076-.42.127-.803.404-1.069.8-.266.397-.424.883-.424 1.423 0 .529.17 1.035.424 1.432.264.395.648.673 1.069.8.212.062.44.09.672.076a2.44 2.44 0 00.72-.187c.24-.105.483-.245.7-.413.14-.115.276-.233.388-.36.15.133.28.275.4.418.207.252.397.53.568.83.313.553.595 1.192.9 1.81.323.654.638 1.287 1.078 1.989.228.362.496.747.82 1.04.16.145.342.277.54.367l.02.009c.298.106.611.126.898.024.358-.124.648-.387.858-.727.21-.335.33-.741.396-1.135.1-.64.04-1.24.036-1.903-.004-.67.1-1.4.166-2.1.036-.351.073-.7-.013-1.019a.918.918 0 00-.07-.173 3.932 3.932 0 01-.13-.48c.083-.062.164-.12.235-.2.31-.33.486-.71.593-1.09.449.061.889.061 1.149-.395.198-.283.325-.63.398-1.023.104-.708.006-1.566-.164-2.497-.13-.767-.152-1.44-.14-1.96.01-.524.22-.964.387-1.441l.098-.276c.03-.1.045-.21.048-.3.02-.4-.194-.676-.54-.774a1.47 1.47 0 00-.587-.048c-.771.062-1.493.652-1.884 1.43l-.003.003" />
    </svg>
  )
}

export function PlatformDownloads() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-foreground mb-2 text-center">
          Platform Downloads
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Choose your operating system and get started.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <PlatformCard
            icon={<WindowsIcon />}
            title="Windows"
            description="64-bit installer"
            options={[
              { label: "Download", file: "zero-setup.exe" },
            ]}
          />
          <PlatformCard
            icon={<AppleIcon />}
            title="macOS"
            description="Universal & Intel builds"
            options={[
              { label: "Apple Silicon", file: "zero.dmg" },
              { label: "Intel", file: "zero-intel.dmg" },
            ]}
          />
          <PlatformCard
            icon={<LinuxIcon />}
            title="Linux"
            description="Multiple package formats"
            options={[
              { label: "Ubuntu", file: ".deb" },
              { label: "Fedora", file: ".rpm" },
              { label: "Portable", file: ".tar.gz" },
            ]}
          />
        </div>
      </div>
    </section>
  )
}
