import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function MatchPrediction() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Match Prediction</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">India</div>
            <div className="text-sm text-gray-500">60% chance</div>
          </div>
          <div className="w-1/2 h-4 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500" style={{ width: '60%' }}></div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">Bangladesh</div>
            <div className="text-sm text-gray-500">40% chance</div>
          </div>
        </div>
        <p className="mt-4 text-sm text-gray-600">
          Based on recent form, head-to-head records, and current team compositions, 
          India has a slight edge in this match. However, Bangladesh has shown strong 
          performances in recent games and could pose a significant challenge.
        </p>
      </CardContent>
    </Card>
  )
}

