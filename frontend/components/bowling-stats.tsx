import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function BowlingStats() {
  const bowlingData = [
    { name: "Mitchell Starc", overs: "7.2", maidens: 0, runs: 42, wickets: 2, economy: 5.73 },
    { name: "Pat Cummins", overs: "6.0", maidens: 1, runs: 28, wickets: 1, economy: 4.67 },
    { name: "Adam Zampa", overs: "5.0", maidens: 0, runs: 35, wickets: 1, economy: 7.00 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Bowling Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Bowler</TableHead>
              <TableHead className="text-right">O</TableHead>
              <TableHead className="text-right">M</TableHead>
              <TableHead className="text-right">R</TableHead>
              <TableHead className="text-right">W</TableHead>
              <TableHead className="text-right">Econ</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {bowlingData.map((bowler) => (
              <TableRow key={bowler.name}>
                <TableCell>{bowler.name}</TableCell>
                <TableCell className="text-right">{bowler.overs}</TableCell>
                <TableCell className="text-right">{bowler.maidens}</TableCell>
                <TableCell className="text-right">{bowler.runs}</TableCell>
                <TableCell className="text-right">{bowler.wickets}</TableCell>
                <TableCell className="text-right">{bowler.economy.toFixed(2)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

