import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export function ManhattanChart() {
  const data = [
    { over: 1, runs: 6 },
    { over: 2, runs: 8 },
    { over: 3, runs: 4 },
    { over: 4, runs: 12 },
    { over: 5, runs: 7 },
    { over: 6, runs: 15 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Manhattan Chart</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="over" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="runs" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}

