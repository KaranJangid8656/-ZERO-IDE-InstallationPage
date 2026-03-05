import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { CollaborationShowcase } from "@/components/collaboration-showcase"
import { PlatformDownloads } from "@/components/platform-downloads"
import { InstallationGuide } from "@/components/installation-guide"
import { AfterInstall } from "@/components/after-install"
import { SecuritySection } from "@/components/security-section"
import { SiteFooter } from "@/components/site-footer"

function Divider() {
  return (
    null
  )
}

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <CollaborationShowcase />
        <Divider />
        <PlatformDownloads />
        <Divider />
        <div className="bg-muted/30">
          <InstallationGuide />
        </div>
        <Divider />
        <div className="bg-muted/30">
          <AfterInstall />
        </div>
        <Divider />
        <SecuritySection />
      </main>
      <SiteFooter />
    </div>
  )
}
