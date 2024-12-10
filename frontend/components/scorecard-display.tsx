import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import Image from 'next/image'

interface ScorecardProps {
  teams: {
    name: string
    flagUrl: string
    score: string
    overs: string
  }[]
  result: string
  batting: {
    name: string
    runs: number
    balls: number
    fours: number
    sixes: number
  }[]
  bowling: {
    name: string
    overs: number
    maidens: number
    runs: number
    wickets: number
  }[]
  recentBalls: string[]
  extras: string
}

export function ScorecardDisplay({ teams, result, batting, bowling, recentBalls, extras }: ScorecardProps) {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Match Scorecard</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center mb-4">
          {teams.map((team, index) => (
            <div key={team.name} className="flex items-center space-x-2">
              <Image src={team.flagUrl} alt={`${team.name} flag`} width={32} height={24} className="rounded" />
              <div>
                <h3 className="font-bold">{team.name}</h3>
                <p className="text-sm">{team.score} ({team.overs} ov)</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center font-semibold mb-4">{result}</p>
        <Separator className="my-4" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Batting</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Batsman</TableHead>
                  <TableHead className="text-right">R</TableHead>
                  <TableHead className="text-right">B</TableHead>
                  <TableHead className="text-right">4s</TableHead>
                  <TableHead className="text-right">6s</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {batting.map((batsman) => (
                  <TableRow key={batsman.name}>
                    <TableCell>{batsman.name}</TableCell>
                    <TableCell className="text-right">{batsman.runs}</TableCell>
                    <TableCell className="text-right">{batsman.balls}</TableCell>
                    <TableCell className="text-right">{batsman.fours}</TableCell>
                    <TableCell className="text-right">{batsman.sixes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Bowling</h4>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Bowler</TableHead>
                  <TableHead className="text-right">O</TableHead>
                  <TableHead className="text-right">M</TableHead>
                  <TableHead className="text-right">R</TableHead>
                  <TableHead className="text-right">W</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bowling.map((bowler) => (
                  <TableRow key={bowler.name}>
                    <TableCell>{bowler.name}</TableCell>
                    <TableCell className="text-right">{bowler.overs}</TableCell>
                    <TableCell className="text-right">{bowler.maidens}</TableCell>
                    <TableCell className="text-right">{bowler.runs}</TableCell>
                    <TableCell className="text-right">{bowler.wickets}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
        <Separator className="my-4" />
        <div>
          <h4 className="font-semibold mb-2">Last 24 Balls</h4>
          <div className="flex flex-wrap gap-2">
            {recentBalls.map((ball, index) => (
              <Badge key={index} variant={ball === '0' ? "outline" : "default"}>
                {ball}
              </Badge>
            ))}
          </div>
        </div>
        <Separator className="my-4" />
        <div>
          <h4 className="font-semibold mb-2">Extras</h4>
          <p>{extras}</p>
        </div>
      </CardContent>
    </Card>
  )
}

