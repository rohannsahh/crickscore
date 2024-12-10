import { Layout } from '@/components/layout'
import { LiveScoreWidget } from '@/components/live-score-widget'
import { TeamComparison } from '@/components/team-comparison'
import { KeyPlayers } from '@/components/key-players'
import { MatchPrediction } from '@/components/match-prediction'
import { BallCommentary } from '@/components/ball-commentary'
import { BattingStats } from '@/components/batting-stats'
import { BowlingStats } from '@/components/bowling-stats'
import BallTracker from '@/components/ball-tracker'
import { TeamOverview } from '@/components/team-overview'
import { RecentOvers } from '@/components/recent-overs'
import { MatchStatistics } from '@/components/match-statistics'
import { MatchHeader } from '@/components/match-header'


const commentaryData = {
  currentOver: "23.4",
  bowler: "Mitchell Starc",
  commentary: [
    {
      over: "23.4",
      description: "FOUR! Kohli drives this through the covers. Excellent timing and placement.",
      runs: 4,
      type: "boundary"
    },
    {
      over: "23.3",
      description: "Single taken. Pushed towards mid-off, quick running between the wickets.",
      runs: 1,
      type: "normal"
    },
    {
      over: "23.2",
      description: "SIX! Massive hit over long-on! Kohli is making it look easy.",
      runs: 6,
      type: "six"
    },
    {
      over: "23.1",
      description: "Two runs. Worked away on the leg side, good running.",
      runs: 2,
      type: "normal"
    },
    {
      over: "22.6",
      description: "Wide! Starc strays down the leg side.",
      runs: 1,
      type: "wide"
    }
  ]
}
export  default function ScorePreviewPage() {
  return (
    <Layout>
      <div className="container mx-auto p-4 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Match ScorePreview</h1>
        
        <MatchHeader/>
          <LiveScoreWidget />
          <BallCommentary {...commentaryData}/>
          
        <BattingStats/> 
        <BowlingStats/>
        <BallTracker/>
        
        <KeyPlayers />
        <MatchPrediction />
        <div className='flex flex-col bg-blue-100 p-4 gap-4 rounded-xl'>
          <MatchStatistics/>
        <TeamOverview/>
      
        </div>
  <TeamComparison/>
  <RecentOvers/>
        
      </div>
    </Layout>
  )
}

