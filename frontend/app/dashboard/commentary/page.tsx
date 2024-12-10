import { BallCommentary } from "@/components/ball-commentary"
import { Layout } from "@/components/layout"
export default function CommentaryPage() {
  //api call
  const commentaryData = {
    currentOver: "23.4",
    bowler: "Mitchell Starc",
    commentary: [
      {
        over: "23.4",
        description: "FOUR! Kohli drives this through the covers. Excellent timing and placement.",
        runs: 4,
        type: "boundary"
      },
      {
        over: "23.3",
        description: "Single taken. Pushed towards mid-off, quick running between the wickets.",
        runs: 1,
        type: "normal"
      },
      {
        over: "23.2",
        description: "SIX! Massive hit over long-on! Kohli is making it look easy.",
        runs: 6,
        type: "six"
      },
      {
        over: "23.1",
        description: "Two runs. Worked away on the leg side, good running.",
        runs: 2,
        type: "normal"
      },
      {
        over: "22.6",
        description: "Wide! Starc strays down the leg side.",
        runs: 1,
        type: "wide"
      }
    ]
  }

  return (<>
    <Layout>
    <div className="container mx-auto p-4">
        <BallCommentary {...commentaryData} />
      </div>
    </Layout>
    </>
  )
}

