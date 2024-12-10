import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function WagonWheel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Wagon Wheel</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Wagon wheel visualization goes here</p>
        </div>
      </CardContent>
    </Card>
  )
}

