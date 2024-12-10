"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Star, User } from 'lucide-react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"
import { PieChart, Pie, Cell, Legend, Tooltip as RechartsTooltip } from "recharts"

const matchData = [
  { over: 0, runs: 0 },
  { over: 10, runs: 4 },
  { over: 20, runs: 8 },
  { over: 30, runs: 15 },
  { over: 40, runs: 23 },
  { over: 50, runs: 35 },
  { over: 60, runs: 47 },
  { over: 70, runs: 58 },
  { over: 80, runs: 69 },
  { over: 90, runs: 89 },
]

const shotData = [
  { name: "Cover Drive", value: 35, color: "#0ea5e9" },
  { name: "Flick", value: 25, color: "#d946ef" },
  { name: "Cut", value: 20, color: "#f97316" },
  { name: "Pull", value: 15, color: "#10b981" },
  { name: "Others", value: 5, color: "#6b7280" },
]

export function TeamOverview() {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Team Overview</h2>
        <div className="flex gap-4">
          <span className="text-blue-600 font-medium">India</span>
          <span className="text-gray-600">Australia</span>
        </div>
      </div>

      {/* Playing XI Section */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-6">Playing XI</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Batsmen */}
            <div>
              <h4 className="text-sm text-gray-500 mb-4">Batsmen</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarFallback>RS</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Rohit Sharma (c)</div>
                      <div className="text-sm text-gray-500">Opening Batsman</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">45 (38)</div>
                    <div className="text-sm text-gray-500">SR: 118.42</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bowlers */}
            <div>
              <h4 className="text-sm text-gray-500 mb-4">Bowlers</h4>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="bg-green-100">
                      <AvatarFallback>JB</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Jasprit Bumrah</div>
                      <div className="text-sm text-gray-500">Fast Bowler</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">2-34 (8.0)</div>
                    <div className="text-sm text-gray-500">Econ: 4.25</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Performers & Upcoming Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Top Performers</h3>
            <div className="flex items-center gap-3">
              <Avatar className="h-12 w-12">
                <AvatarFallback>VK</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Virat Kohli</span>
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="text-blue-600">89 Runs</div>
                <div className="text-sm text-gray-500">MoM Candidate</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4">Upcoming Batsmen</h3>
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback>HP</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-medium">Hardik Pandya</div>
                <div className="text-sm text-gray-500">All-rounder</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Stats Tabs */}
      <Tabs defaultValue="batting" className="w-full">
        <TabsList>
          <TabsTrigger value="batting" className="flex-1">Batting Stats</TabsTrigger>
          <TabsTrigger value="bowling" className="flex-1">Bowling Stats</TabsTrigger>
          <TabsTrigger value="fielding" className="flex-1">Fielding Stats</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Stats Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-6">Current Match Stats</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={matchData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="over" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="runs"
                    stroke="#0ea5e9"
                    strokeWidth={2}
                    dot={{ fill: "#0ea5e9" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6 text-center">
              <div>
                <div className="text-sm text-gray-500">Runs</div>
                <div className="text-xl font-bold text-blue-600">89</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Balls</div>
                <div className="text-xl font-bold">67</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Strike Rate</div>
                <div className="text-xl font-bold text-green-600">132.84</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-6">Shot Analysis</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={shotData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label
                  >
                    {shotData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend />
                  <RechartsTooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 text-center">
              <div>
                <div className="text-sm text-gray-500">Control %</div>
                <div className="text-xl font-bold text-purple-600">87.5</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Dot Ball %</div>
                <div className="text-xl font-bold text-orange-600">32.8</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

