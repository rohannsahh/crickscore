import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function TeamComparison() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <ComparisonItem label="Batting Average" team1={42.5} team2={38.2} />
          <ComparisonItem label="Bowling Economy" team1={7.2} team2={7.8} />
          <ComparisonItem label="Win Rate (%)" team1={65} team2={58} />
        </div>
      </CardContent>
    </Card>
  )
}

function ComparisonItem({ label, team1, team2 }: { label: string; team1: number; team2: number }) {
  const total = team1 + team2
  const team1Percentage = (team1 / total) * 100
  
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{team1} vs {team2}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-500"
          style={{ width: `${team1Percentage}%` }}
        ></div>
      </div>
    </div>
  )
}

