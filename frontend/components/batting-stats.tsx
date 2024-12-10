import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function BattingStats() {
  const battingData = [
    { name: "Rohit Sharma", runs: 45, balls: 32, fours: 5, sixes: 2, strikeRate: 140.63 },
    { name: "Virat Kohli", runs: 82, balls: 58, fours: 8, sixes: 3, strikeRate: 141.38 },
    { name: "KL Rahul", runs: 28, balls: 24, fours: 3, sixes: 1, strikeRate: 116.67 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Batting Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Batsman</TableHead>
              <TableHead className="text-right">R</TableHead>
              <TableHead className="text-right">B</TableHead>
              <TableHead className="text-right">4s</TableHead>
              <TableHead className="text-right">6s</TableHead>
              <TableHead className="text-right">SR</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {battingData.map((batsman) => (
              <TableRow key={batsman.name}>
                <TableCell>{batsman.name}</TableCell>
                <TableCell className="text-right">{batsman.runs}</TableCell>
                <TableCell className="text-right">{batsman.balls}</TableCell>
                <TableCell className="text-right">{batsman.fours}</TableCell>
                <TableCell className="text-right">{batsman.sixes}</TableCell>
                <TableCell className="text-right">{batsman.strikeRate.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

