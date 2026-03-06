import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { CollaborationShowcase } from "@/components/collaboration-showcase"
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
      </main>
      <SiteFooter />
    </div>
  )
}
