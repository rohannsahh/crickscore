"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts"

const runDistributionData = [
  { name: "Singles", value: 42, color: "#94a3b8" },
  { name: "Doubles", value: 12, color: "#3b82f6" },
  { name: "Boundaries", value: 12, color: "#8b5cf6" },
  { name: "Sixes", value: 4, color: "#d946ef" },
]

interface BallProps {
  value: number | string
  type: "regular" | "four" | "six" | "wide" | "wicket"
}

function Ball({ value, type }: BallProps) {
  const getBallStyle = (type: string) => {
    switch (type) {
      case "four":
        return "bg-blue-100 text-blue-700"
      case "six":
        return "bg-purple-100 text-purple-700"
      case "wide":
        return "bg-yellow-100 text-yellow-700"
      case "wicket":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div
      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${getBallStyle(
        type
      )}`}
    >
      {value}
    </div>
  )
}

export function MatchStatistics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {/* Run Distribution */}
      <Card>
        <CardHeader>
          <CardTitle>Run Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
            <div>
              <div className="text-2xl font-bold">42</div>
              <div className="text-sm text-gray-500">Singles</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">12</div>
              <div className="text-sm text-gray-500">Boundaries</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">4</div>
              <div className="text-sm text-gray-500">Sixes</div>
            </div>
          </div>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={runDistributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {runDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Current Partnership */}
      <Card>
        <CardHeader>
          <CardTitle>Current Partnership</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="font-medium">Kohli & Rahul</div>
              <div className="text-sm text-gray-500">
                76 runs (62 balls)
              </div>
            </div>
            <div className="space-y-1">
              <Progress value={55} className="h-2" />
              <div className="flex justify-between text-sm">
                <div>
                  <div className="font-medium">Kohli&apos;s Contribution</div>
                  <div className="text-xl font-bold">42 (35)</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">Rahul&apos;s Contribution</div>
                  <div className="text-xl font-bold">34 (27)</div>
                </div>
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <div>Run Rate: 7.35</div>
              <div>Boundaries: 8</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Last 5 Overs */}
      <Card>
        <CardHeader>
          <CardTitle>Last 5 Overs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="text-sm font-medium w-16">Over 23</div>
              <div className="flex gap-2">
                <Ball value={4} type="four" />
                <Ball value={1} type="regular" />
                <Ball value={6} type="six" />
                <Ball value={2} type="regular" />
                <Ball value={1} type="regular" />
                <Ball value={4} type="four" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Extras Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Extras Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-500">Wides</div>
                <div className="text-2xl font-bold text-orange-600">5</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Byes</div>
                <div className="text-2xl font-bold text-purple-600">3</div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="text-sm text-gray-500">No Balls</div>
                <div className="text-2xl font-bold text-red-600">2</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Leg Byes</div>
                <div className="text-2xl font-bold text-green-600">4</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

