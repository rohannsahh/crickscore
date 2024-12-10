"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'

interface BallProps {
  value: string | number
  type?: "regular" | "four" | "six" | "wicket" | "dot"
}

function Ball({ value, type = "regular" }: BallProps) {
  const getStyles = () => {
    switch (type) {
      case "four":
        return "bg-blue-100 text-blue-600"
      case "six":
        return "bg-purple-100 text-purple-600"
      case "wicket":
        return "bg-red-100 text-red-600"
      case "dot":
        return "bg-gray-100 text-gray-600"
      default:
        return "bg-green-100 text-green-600"
    }
  }

  return (
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${getStyles()}`}
    >
      {value}
    </div>
  )
}

export function LiveScoreboard() {
  const [score, setScore] = useState({
    team: "India",
    runs: 142,
    wickets: 3,
    overs: 23.4,
    runRate: 6.0,
    reqRate: 5.8,
  })

  const [target, setTarget] = useState({
    runs: 287,
    overs: 50,
    required: "145 runs from 26.2 overs",
  })

  const [batsmen, setBatsmen] = useState([
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
  ])

  const [bowler, setBowler] = useState({
    name: "Mitchell Starc",
    overs: "7.4",
    maidens: 0,
    runs: 42,
    wickets: 1,
    economy: 5.47,
    dots: 24,
  })

  const [lastBalls, setLastBalls] = useState([
    { value: "1", type: "regular" },
    { value: "4", type: "four" },
    { value: "0", type: "dot" },
    { value: "W", type: "wicket" },
    { value: "2", type: "regular" },
    { value: "6", type: "six" },
  ])

  return (
    <div className="space-y-6">
      {/* Match Header */}
      <div className="bg-blue-600 text-white p-6 rounded-lg text-center space-y-2">
        <h1 className="text-2xl font-bold">India vs Australia</h1>
        <p className="text-blue-100">1st ODI • Melbourne Cricket Ground</p>
      </div>

      {/* Score Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6 text-center space-y-2">
            <h3 className="text-blue-600 font-medium">India</h3>
            <div className="text-4xl font-bold">{score.runs}/{score.wickets}</div>
            <div className="text-gray-600">Overs: {score.overs}</div>
            <div className="text-sm text-gray-500">
              CRR: {score.runRate} • REQ: {score.reqRate}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white shadow-sm">
          <CardContent className="p-6 text-center space-y-2">
            <h3 className="text-blue-600 font-medium">Target</h3>
            <div className="text-4xl font-bold">{target.runs}</div>
            <div className="text-gray-600">{target.overs} Overs</div>
            <div className="text-sm text-gray-500">Required: {target.required}</div>
          </CardContent>
        </Card>
      </div>

      {/* Batting and Bowling */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Batting</h3>
          <div className="space-y-4 bg-gray-50 p-4 rounded-lg">
            {batsmen.map((batsman, index) => (
              <div key={index} className="flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{batsman.name}</span>
                    {batsman.isStriker && <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
                  </div>
                  <div className="text-lg font-bold text-blue-600">
                    {batsman.runs} ({batsman.balls})
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">
                    {batsman.fours} × 4s, {batsman.sixes} × 6s
                  </div>
                  <div className="text-sm text-blue-600">SR: {batsman.strikeRate}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-600">Bowling</h3>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{bowler.name}</span>
                  <Star className="w-4 h-4 text-red-500" />
                </div>
                <div className="text-lg font-bold text-red-600">
                  {bowler.wickets}-{bowler.runs}-{bowler.overs}
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Dots: {bowler.dots}</div>
                <div className="text-sm text-red-600">Econ: {bowler.economy}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Last 6 Balls */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Last 6 Balls</h3>
        <div className="flex gap-2">
          {lastBalls.map((ball, index) => (
            <Ball key={index} value={ball.value} type={ball.type} />
          ))}
        </div>
      </div>
    </div>
  )
}

