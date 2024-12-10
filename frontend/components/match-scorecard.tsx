"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

interface BatsmanStats {
  name: string
  runs: number
  balls: number
  fours: number
  sixes: number
  strikeRate: number
  isStriker?: boolean
}

interface BowlerStats {
  name: string
  overs: string
  maidens: number
  runs: number
  wickets: number
  economy: number
  dots: number
}

interface LastBall {
  runs: number | string
  type?: "regular" | "wide" | "boundary" | "six"
}

export function MatchScorecard() {
  const batsmen: BatsmanStats[] = [
    {
      name: "Virat Kohli",
      runs: 52,
      balls: 43,
      fours: 6,
      sixes: 2,
      strikeRate: 120.93,
      isStriker: true,
    },
    {
      name: "KL Rahul",
      runs: 28,
      balls: 32,
      fours: 3,
      sixes: 1,
      strikeRate: 87.50,
    },
  ]

  const bowler: BowlerStats = {
    name: "Mitchell Starc",
    overs: "7.4",
    maidens: 0,
    runs: 42,
    wickets: 1,
    economy: 5.47,
    dots: 24,
  }

  const lastBalls: LastBall[] = [
    { runs: 1, type: "regular" },
    { runs: 4, type: "boundary" },
    { runs: 0, type: "regular" },
    { runs: "W", type: "regular" },
    { runs: 2, type: "regular" },
    { runs: 6, type: "six" },
  ]

  return (
    <div className="container mx-auto p-4">
      <Card className="bg-white/95 backdrop-blur">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-2xl font-bold">India vs Australia</CardTitle>
          <p className="text-muted-foreground">1st ODI • Melbourne Cricket Ground</p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Score Summary */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <h3 className="text-muted-foreground font-medium">Team Score</h3>
                  <div className="text-4xl font-bold">142/3</div>
                  <div className="text-sm text-muted-foreground">Overs: 23.4</div>
                  <div className="text-sm">CRR: 6.0 • REQ: 5.8</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <h3 className="text-muted-foreground font-medium">Target</h3>
                  <div className="text-4xl font-bold">287</div>
                  <div className="text-sm text-muted-foreground">50 Overs</div>
                  <div className="text-sm">Required: 145 runs from 26.2 overs</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Separator />

          {/* Batting Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Batting</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-muted-foreground">
                    <th className="pb-2">Batter</th>
                    <th className="text-right pb-2">R</th>
                    <th className="text-right pb-2">B</th>
                    <th className="text-right pb-2 hidden sm:table-cell">4s</th>
                    <th className="text-right pb-2 hidden sm:table-cell">6s</th>
                    <th className="text-right pb-2">SR</th>
                  </tr>
                </thead>
                <tbody>
                  {batsmen.map((batsman) => (
                    <tr key={batsman.name} className="border-t">
                      <td className="py-2">
                        {batsman.name} {batsman.isStriker && "*"}
                      </td>
                      <td className="text-right py-2">{batsman.runs}</td>
                      <td className="text-right py-2">({batsman.balls})</td>
                      <td className="text-right py-2 hidden sm:table-cell">{batsman.fours}</td>
                      <td className="text-right py-2 hidden sm:table-cell">{batsman.sixes}</td>
                      <td className="text-right py-2">{batsman.strikeRate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Separator />

          {/* Bowling Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Bowling</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-muted-foreground">
                    <th className="pb-2">Bowler</th>
                    <th className="text-right pb-2">O</th>
                    <th className="text-right pb-2">M</th>
                    <th className="text-right pb-2">R</th>
                    <th className="text-right pb-2">W</th>
                    <th className="text-right pb-2 hidden sm:table-cell">Econ</th>
                    <th className="text-right pb-2 hidden sm:table-cell">Dots</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="py-2">{bowler.name} *</td>
                    <td className="text-right py-2">{bowler.overs}</td>
                    <td className="text-right py-2">{bowler.maidens}</td>
                    <td className="text-right py-2">{bowler.runs}</td>
                    <td className="text-right py-2">{bowler.wickets}</td>
                    <td className="text-right py-2 hidden sm:table-cell">{bowler.economy}</td>
                    <td className="text-right py-2 hidden sm:table-cell">{bowler.dots}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <Separator />

          {/* Last 6 Balls */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Last 6 Balls</h3>
            <div className="flex flex-wrap gap-2 justify-center">
              {lastBalls.map((ball, index) => (
                <div
                  key={index}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
                    ball.type === "boundary"
                      ? "bg-green-100 text-green-700"
                      : ball.type === "six"
                      ? "bg-purple-100 text-purple-700"
                      : ball.runs === "W"
                      ? "bg-red-100 text-red-700"
                      : "bg-blue-50 text-blue-700"
                  }`}
                >
                  {ball.runs}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

