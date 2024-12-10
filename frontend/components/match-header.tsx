export function MatchHeader() {
  return (
    <section className="bg-white border border-gray-200 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Scorecard</h2>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
          View Full Score Card
        </button>
      </div>

      <div className="flex flex-col space-y-6">
        <div className="flex items-center justify-between">
          <TeamScore name="IND" flag="🇮🇳" score="297/6" overs="20.0" />
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium text-gray-500">vs</span>
            <div className="w-2 h-2 bg-gray-300 rounded-full my-2"></div>
          </div>
          <TeamScore name="BAN" flag="🇧🇩" score="164/7" overs="20.0" />
        </div>

        <div className="bg-blue-50 text-blue-800 py-2 px-4 rounded-md text-center">
          <p className="font-semibold">India won by 133 runs</p>
        </div>

        <LastBalls />

        <div className="text-sm text-gray-600">
          <span className="font-medium">Extras:</span>
          11 (1 b, 0 lb, 4 wd, 0 nb, 1 P, 0)
        </div>
      </div>
    </section>
  )
}

function TeamScore({ name, flag, score, overs }: { name: string; flag: string; score: string; overs: string }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-12 h-8 flex items-center justify-center border border-gray-200 rounded">
        <span className="text-lg">{flag}</span>
      </div>
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{score}</p>
        <p className="text-xs text-gray-500">Over {overs}</p>
      </div>
    </div>
  )
}

function LastBalls() {
  const balls = [1, 1, 0, 1, 4, 0]
  return (
    <div className="space-y-4">
      <h4 className="font-medium text-gray-700">Last 24 Balls</h4>
      <div className="flex flex-wrap gap-2">
        {balls.map((ball, index) => (
          <span
            key={index}
            className={`w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-sm ${
              ball === 4 ? 'bg-blue-50 text-blue-600' : 'bg-gray-50'
            }`}
          >
            {ball}
          </span>
        ))}
      </div>
    </div>
  )
}

