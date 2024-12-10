import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function RecentOvers() {
  const recentOvers = [
    { over: 23, balls: ["1", "4", "0", "W", "1", "2"] },
    { over: 22, balls: ["1", "1", "0", "4", "6", "1"] },
    { over: 21, balls: ["0", "1", "1", "2", "0", "1"] },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Overs</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentOvers.map((over) => (
            <div key={over.over} className="flex items-center space-x-2">
              <span className="font-semibold min-w-[3rem]">Over {over.over}:</span>
              <div className="flex space-x-1">
                {over.balls.map((ball, index) => (
                  <Badge
                    key={index}
                    variant={ball === "W" ? "destructive" : ball === "4" || ball === "6" ? "default" : "outline"}
                  >
                    {ball}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

