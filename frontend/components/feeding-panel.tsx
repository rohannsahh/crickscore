"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AlertCircle, Flag, HandMetal, MessageCircle, Minus, RotateCcw, Shield, Siren, User, X, Play, Pause, CloudLightning, Award, Eye } from 'lucide-react'

// Mock data for players
const batsmen = [
  { id: "1", name: "Virat Kohli" },
  { id: "2", name: "Rohit Sharma" },
  { id: "3", name: "KL Rahul" },
  { id: "4", name: "Shubman Gill" },
]

const bowlers = [
  { id: "1", name: "Jasprit Bumrah" },
  { id: "2", name: "Mohammed Shami" },
  { id: "3", name: "Ravindra Jadeja" },
  { id: "4", name: "Ravichandran Ashwin" },
]

export function FeedingPanel() {
  const [selectedRun, setSelectedRun] = useState<number | null>(null)
  const [selectedExtra, setSelectedExtra] = useState<string | null>(null)
  const [selectedAction, setSelectedAction] = useState<string | null>(null)
  const [selectedStriker, setSelectedStriker] = useState<string>("")
  const [selectedNonStriker, setSelectedNonStriker] = useState<string>("")
  const [selectedBowler, setSelectedBowler] = useState<string>("")

  const handleRunSelect = (run: number) => {
    setSelectedRun(run === selectedRun ? null : run)
    setSelectedExtra(null)
    setSelectedAction(null)
  }

  const handleExtraSelect = (extra: string) => {
    setSelectedExtra(extra === selectedExtra ? null : extra)
    setSelectedRun(null)
    setSelectedAction(null)
  }

  const handleActionSelect = (action: string) => {
    setSelectedAction(action === selectedAction ? null : action)
    setSelectedRun(null)
    setSelectedExtra(null)
  }

  const handleDoneClick = () => {
    if (selectedRun !== null) {
      console.log(`Updating score: ${selectedRun} runs`)
    } else if (selectedExtra !== null) {
      console.log(`Updating score: ${selectedExtra}`)
    } else if (selectedAction !== null) {
      console.log(`Performing action: ${selectedAction}`)
    }
    console.log(`Striker: ${selectedStriker}, Non-striker: ${selectedNonStriker}, Bowler: ${selectedBowler}`)
    setSelectedRun(null)
    setSelectedExtra(null)
    setSelectedAction(null)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Scoring Panel</span>
          <Button
            variant="destructive"
            size="lg"
            disabled={!selectedRun && !selectedExtra && !selectedAction}
            onClick={handleDoneClick}
            className="px-8"
          >
            Done
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Player Selection Section */}
        <div className="space-y-4 lg:col-span-3">
          <div className="font-semibold text-lg flex items-center gap-2">
            <User className="w-5 h-5" />
            <span>Player Selection</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select value={selectedStriker} onValueChange={setSelectedStriker}>
              <SelectTrigger>
                <SelectValue placeholder="Select Striker" />
              </SelectTrigger>
              <SelectContent>
                {batsmen.map((batsman) => (
                  <SelectItem key={batsman.id} value={batsman.id}>
                    {batsman.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedNonStriker} onValueChange={setSelectedNonStriker}>
              <SelectTrigger>
                <SelectValue placeholder="Select Non-striker" />
              </SelectTrigger>
              <SelectContent>
                {batsmen.map((batsman) => (
                  <SelectItem key={batsman.id} value={batsman.id}>
                    {batsman.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedBowler} onValueChange={setSelectedBowler}>
              <SelectTrigger>
                <SelectValue placeholder="Select Bowler" />
              </SelectTrigger>
              <SelectContent>
                {bowlers.map((bowler) => (
                  <SelectItem key={bowler.id} value={bowler.id}>
                    {bowler.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <Separator className="col-span-3 my-4" />

        {/* Runs Section */}
        <div className="space-y-4">
          <div className="font-semibold text-lg flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span>Runs</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2, 3, 4, 6].map((run) => (
              <Button
                key={run}
                variant={selectedRun === run ? "default" : "outline"}
                className={`h-16 text-xl font-semibold ${
                  selectedRun === run
                    ? "bg-blue-500 hover:bg-blue-700 text-white"
                    : run === 4
                    ? "border-green-500 text-green-600 hover:bg-green-100"
                    : run === 6
                    ? "border-purple-500 text-purple-600 hover:bg-purple-100"
                    : ""
                }`}
                onClick={() => handleRunSelect(run)}
              >
                {run}
              </Button>
            ))}
          </div>
        </div>

        {/* Extras Section */}
        <div className="space-y-4">
          <div className="font-semibold text-lg flex items-center gap-2">
            <AlertCircle className="w-5 h-5" />
            <span>Extras</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "Wide", icon: <Minus className="w-4 h-4" /> },
              { name: "No Ball", icon: <X className="w-4 h-4" />, highlight: true },
              { name: "Bye", icon: <RotateCcw className="w-4 h-4" /> },
              { name: "Leg Bye", icon: <Flag className="w-4 h-4" /> },
            ].map((extra) => (
              <Button
                key={extra.name}
                variant={selectedExtra === extra.name.toLowerCase() ? "default" : "outline"}
                className={`h-16 text-base font-semibold ${
                  selectedExtra === extra.name.toLowerCase()
                    ? "bg-yellow-600 hover:bg-yellow-700 text-white"
                    : extra.highlight
                    ? "border-red-500 text-red-600 hover:bg-red-100"
                    : ""
                }`}
                onClick={() => handleExtraSelect(extra.name.toLowerCase())}
              >
                {extra.icon}
                <span className="ml-2">{extra.name}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Special Actions Section */}
        <div className="space-y-4">
          <div className="font-semibold text-lg flex items-center gap-2">
            <Siren className="w-5 h-5" />
            <span>Special Actions</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {[
              { name: "Wicket", icon: <X className="w-4 h-4" />, color: "bg-red-600 hover:bg-red-700", highlight: true },
              { name: "Appeal", icon: <HandMetal className="w-4 h-4" />, color: "bg-orange-600 hover:bg-orange-700" },
              { name: "Review", icon: <MessageCircle className="w-4 h-4" />, color: "bg-purple-600 hover:bg-purple-700" },
              { name: "Overthrow", icon: <RotateCcw className="w-4 h-4" />, color: "bg-green-600 hover:bg-green-700" },
            ].map((action) => (
              <Button
                key={action.name}
                variant={selectedAction === action.name.toLowerCase() ? "default" : "outline"}
                className={`h-16 text-base font-semibold ${
                  selectedAction === action.name.toLowerCase()
                    ? `${action.color} text-white`
                    : action.highlight
                    ? "border-red-500 text-red-600 hover:bg-red-100"
                    : ""
                }`}
                onClick={() => handleActionSelect(action.name.toLowerCase())}
              >
                {action.icon}
                <span className="ml-2">{action.name}</span>
              </Button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <Separator className="my-4" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {[
              { name: "Ball Start", icon: <Play className="w-4 h-4" /> },
              { name: "Bowler Stop", icon: <Pause className="w-4 h-4" /> },
              { name: "Ball in Air", icon: <CloudLightning className="w-4 h-4" /> },
              { name: "Catch Drop", icon: <Award className="w-4 h-4" /> },
              { name: "Boundary Check", icon: <Flag className="w-4 h-4" /> },
              { name: "Third Umpire", icon: <User className="w-4 h-4" />, highlight: true },
              { name: "Misfield", icon: <Eye className="w-4 h-4" /> },
              { name: "Others", icon: <Siren className="w-4 h-4" /> },
            ].map((action) => (
              <Button
                key={action.name}
                variant={selectedAction === action.name.toLowerCase() ? "default" : "outline"}
                className={`h-16 text-base font-semibold ${
                  selectedAction === action.name.toLowerCase()
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : action.highlight
                    ? "border-orange-500 text-orange-600 hover:bg-orange-100"
                    : ""
                }`}
                onClick={() => handleActionSelect(action.name.toLowerCase())}
              >
                {action.icon}
                <span className="ml-2">{action.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

