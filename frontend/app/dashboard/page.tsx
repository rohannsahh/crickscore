import { ProtectedRoute } from "@/components/protected-route"
import { Layout } from "@/components/layout"
import { MatchHeader } from "@/components/match-header"
import { LiveScoreWidget } from "@/components/live-score-widget"

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <Layout>
        <div className="container mx-auto p-4 space-y-6">
          
          <MatchHeader />
          <LiveScoreWidget />
        </div>
      </Layout>
    </ProtectedRoute>
  )
}

