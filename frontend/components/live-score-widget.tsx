export function LiveScoreWidget() {
  return (
    <section className="bg-white border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Batting</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 px-3 text-sm font-medium text-gray-600">Batsman</th>
              <th className="text-center py-2 px-3 text-sm font-medium text-gray-600">R</th>
              <th className="text-center py-2 px-3 text-sm font-medium text-gray-600">B</th>
              <th className="text-center py-2 px-3 text-sm font-medium text-gray-600">4s</th>
            </tr>
          </thead>
          <tbody>
            <BatsmanRow name="Tanzim Hasan Sakib" runs={8} balls={8} fours={1} isStriker />
            <BatsmanRow name="Towhid Hridoy" runs={63} balls={42} fours={4} />
          </tbody>
        </table>
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-4 mt-6">Bowling</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 px-3 text-sm font-medium text-gray-600">Bowler</th>
              <th className="text-center py-2 px-3 text-sm font-medium text-gray-600">O</th>
              <th className="text-center py-2 px-3 text-sm font-medium text-gray-600">M</th>
              <th className="text-center py-2 px-3 text-sm font-medium text-gray-600">R</th>
              <th className="text-center py-2 px-3 text-sm font-medium text-gray-600">W</th>
            </tr>
          </thead>
          <tbody>
            <BowlerRow name="Nitish Kumar Reddy" overs="3.0" maidens={0} runs={31} wickets={1} isBowling />
            <BowlerRow name="Mayank Yadav" overs="4.0" maidens={0} runs={32} wickets={2} />
          </tbody>
        </table>
      </div>

      <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="ml-2 text-sm font-medium text-gray-700">LIVE</span>
          </div>
          <div className="text-sm text-gray-600">
            Last updated: <span className="font-medium">Just now</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function BatsmanRow({ name, runs, balls, fours, isStriker = false }: { name: string; runs: number; balls: number; fours: number; isStriker?: boolean }) {
  return (
    <tr className="border-b border-gray-100">
      <td className="py-3 px-3">
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-800">{name}</span>
          {isStriker && <span className="ml-2 px-1.5 py-0.5 text-xs bg-blue-50 text-blue-600 rounded">Strike</span>}
        </div>
      </td>
      <td className="text-center py-3 px-3 text-sm">{runs}</td>
      <td className="text-center py-3 px-3 text-sm">{balls}</td>
      <td className="text-center py-3 px-3 text-sm">{fours}</td>
    </tr>
  )
}

function BowlerRow({ name, overs, maidens, runs, wickets, isBowling = false }: { name: string; overs: string; maidens: number; runs: number; wickets: number; isBowling?: boolean }) {
  return (
    <tr className="border-b border-gray-100">
      <td className="py-3 px-3">
        <div className="flex items-center">
          <span className="text-sm font-medium text-gray-800">{name}</span>
          {isBowling && <span className="ml-2 px-1.5 py-0.5 text-xs bg-green-50 text-green-600 rounded">Bowling</span>}
        </div>
      </td>
      <td className="text-center py-3 px-3 text-sm">{overs}</td>
      <td className="text-center py-3 px-3 text-sm">{maidens}</td>
      <td className="text-center py-3 px-3 text-sm">{runs}</td>
      <td className="text-center py-3 px-3 text-sm">{wickets}</td>
    </tr>
  )
}

