import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function KeyPlayers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Key Players to Watch</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PlayerCard
            name="Virat Kohli"
            role="Batsman"
            team="India"
            stats="Avg: 59.07, SR: 93.17"
            avatarUrl="/avatars/kohli.jpg"
          />
          <PlayerCard
            name="Shakib Al Hasan"
            role="All-rounder"
            team="Bangladesh"
            stats="Bat Avg: 37.57, Bowl Avg: 30.15"
            avatarUrl="/avatars/shakib.jpg"
          />
        </div>
      </CardContent>
    </Card>
  )
}

function PlayerCard({ name, role, team, stats, avatarUrl }: { name: string; role: string; team: string; stats: string; avatarUrl: string }) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
      <Avatar className="h-16 w-16">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-sm text-gray-600">{role} - {team}</p>
        <p className="text-sm text-gray-500 mt-1">{stats}</p>
      </div>
    </div>
  )
}

