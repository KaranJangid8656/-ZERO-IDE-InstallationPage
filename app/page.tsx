import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { CollaborationShowcase } from "@/components/collaboration-showcase"
import { PlatformDownloads } from "@/components/platform-downloads"
import { InstallationGuide } from "@/components/installation-guide"
import { AfterInstall } from "@/components/after-install"
import { LiveCollaborationSteps } from "@/components/live-collaboration-steps"
import { JoinRoomSteps } from "@/components/join-room-steps"
import { LiveCodeCollaboration } from "@/components/live-code-collaboration"
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
        <LiveCodeCollaboration />
        <Divider />
        <LiveCollaborationSteps />
        <JoinRoomSteps />
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

      </main>
      <SiteFooter />
    </div>
  )
}
