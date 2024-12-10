"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface BallCommentaryProps {
  currentOver: string
  bowler: string
  commentary: Array<{
    over: string
    description: string
    runs?: number
    type?: "boundary" | "six" | "wicket" | "wide" | "normal"
  }>
}

export function BallCommentary({ currentOver, bowler, commentary }: BallCommentaryProps) {
  const currentOverBalls = commentary
    .filter((ball) => Math.floor(parseFloat(ball.over)) === Math.floor(parseFloat(currentOver)))
    .reverse()

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Ball by Ball Commentary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Current Over Display */}
        <div className="bg-gray-50 p-4 rounded-lg space-y-4">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              Current Over ({currentOver})
            </div>
            <div className="text-sm text-gray-600">
              Bowler: {bowler}
            </div>
          </div>
          <div className="flex gap-2">
            {currentOverBalls.map((ball, index) => (
              <div
                key={index}
                className={cn(
                  "w-10 h-10 rounded flex items-center justify-center font-medium text-sm",
                  ball.type === "boundary" && "bg-blue-100 text-blue-700",
                  ball.type === "six" && "bg-purple-100 text-purple-700",
                  ball.type === "wicket" && "bg-red-100 text-red-700",
                  ball.type === "wide" && "bg-yellow-100 text-yellow-700",
                  ball.type === "normal" && "bg-gray-100 text-gray-700"
                )}
              >
                {ball.runs}
              </div>
            ))}
          </div>
        </div>

        {/* Commentary List */}
        <div className="space-y-4">
          {commentary.map((ball, index) => (
            <div
              key={index}
              className="flex gap-4 p-2 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="w-12 shrink-0">
                <div
                  className={cn(
                    "w-1 h-full rounded-full",
                    ball.type === "boundary" && "bg-blue-500",
                    ball.type === "six" && "bg-purple-500",
                    ball.type === "wicket" && "bg-red-500",
                    ball.type === "wide" && "bg-yellow-500",
                    ball.type === "normal" && "bg-gray-200"
                  )}
                />
              </div>
              <div>
                <div className="font-medium text-sm text-gray-600">
                  {ball.over}
                </div>
                <div className="text-sm">
                  {ball.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="boundaries">Boundaries</TabsTrigger>
            <TabsTrigger value="wickets">Wickets</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardContent>
    </Card>
  )
}

