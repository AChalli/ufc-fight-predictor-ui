"use client"

import { useState } from "react"
import { Swords, Sparkles, RefreshCw } from "lucide-react"
import { FighterSearch } from "./fighter-search"
import { PredictionResult } from "./prediction-result"
import { Button } from "@/components/ui/button"
import type { Fighter } from "@/lib/fighters"
import { cn } from "@/lib/utils"

function generatePrediction(fighter1: Fighter, fighter2: Fighter) {
  // Simulate prediction based on fighter records
  const parseRecord = (record: string) => {
    const parts = record.split("-").map(Number)
    return { wins: parts[0], losses: parts[1], draws: parts[2] || 0 }
  }

  const r1 = parseRecord(fighter1.record)
  const r2 = parseRecord(fighter2.record)

  const winRate1 = r1.wins / (r1.wins + r1.losses + r1.draws)
  const winRate2 = r2.wins / (r2.wins + r2.losses + r2.draws)

  const total = winRate1 + winRate2
  let prob1 = Math.round((winRate1 / total) * 100)
  let prob2 = 100 - prob1

  // Add some randomness
  const variance = Math.floor(Math.random() * 10) - 5
  prob1 = Math.max(20, Math.min(80, prob1 + variance))
  prob2 = 100 - prob1

  const winner = prob1 > prob2 ? fighter1.name : fighter2.name
  const maxProb = Math.max(prob1, prob2)

  let confidence: string
  if (maxProb >= 70) confidence = "High"
  else if (maxProb >= 55) confidence = "Medium"
  else confidence = "Low"

  const factors = ["Ground game", "Striking", "Cardio", "Experience", "Reach advantage", "Fight IQ", "Chin", "Power"]
  const keyFactor = factors[Math.floor(Math.random() * factors.length)]

  return {
    fighter1Probability: prob1,
    fighter2Probability: prob2,
    winner,
    confidence,
    keyFactor,
  }
}

export function UFCPredictor() {
  const [fighter1, setFighter1] = useState<Fighter | null>(null)
  const [fighter2, setFighter2] = useState<Fighter | null>(null)
  const [prediction, setPrediction] = useState<ReturnType<typeof generatePrediction> | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handlePredict = () => {
    if (!fighter1 || !fighter2) return
    setIsLoading(true)
    setPrediction(null)

    // Simulate API delay
    setTimeout(() => {
      const result = generatePrediction(fighter1, fighter2)
      setPrediction(result)
      setIsLoading(false)
    }, 1500)
  }

  const handleReset = () => {
    setFighter1(null)
    setFighter2(null)
    setPrediction(null)
  }

  const canPredict = fighter1 && fighter2 && !isLoading

  return (
    <div className="space-y-8">
      {/* Fighter Selection */}
      <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto,1fr] gap-6 lg:gap-8 items-end">
          {/* Fighter 1 */}
          <FighterSearch
            label="Fighter 1"
            selectedFighter={fighter1}
            onSelect={setFighter1}
            excludeFighterId={fighter2?.id}
          />

          {/* VS Divider */}
          <div className="hidden lg:flex flex-col items-center justify-end pb-4">
            <div className="relative">
              <div className="absolute inset-0 blur-xl bg-primary/30 rounded-full" />
              <div className="relative w-16 h-16 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                <Swords className="h-7 w-7 text-primary" />
              </div>
            </div>
          </div>

          {/* Mobile VS */}
          <div className="lg:hidden flex items-center justify-center">
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-border" />
              <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center">
                <Swords className="h-5 w-5 text-primary" />
              </div>
              <div className="h-px w-16 bg-border" />
            </div>
          </div>

          {/* Fighter 2 */}
          <FighterSearch
            label="Fighter 2"
            selectedFighter={fighter2}
            onSelect={setFighter2}
            excludeFighterId={fighter1?.id}
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button
            size="lg"
            onClick={handlePredict}
            disabled={!canPredict}
            className={cn(
              "w-full sm:w-auto px-12 py-6 text-lg font-semibold transition-all duration-300",
              canPredict && "shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30"
            )}
          >
            {isLoading ? (
              <>
                <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-5 w-5" />
                Predict Winner
              </>
            )}
          </Button>

          {(fighter1 || fighter2) && (
            <Button
              size="lg"
              variant="outline"
              onClick={handleReset}
              className="w-full sm:w-auto"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          )}
        </div>
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="relative">
            <div className="absolute inset-0 blur-2xl bg-primary/20 rounded-full animate-pulse" />
            <div className="relative w-20 h-20 rounded-full bg-card border-2 border-primary flex items-center justify-center">
              <Sparkles className="h-8 w-8 text-primary animate-pulse" />
            </div>
          </div>
          <p className="mt-4 text-muted-foreground animate-pulse">Analyzing fight data...</p>
        </div>
      )}

      {/* Prediction Result */}
      {prediction && fighter1 && fighter2 && !isLoading && (
        <PredictionResult fighter1={fighter1} fighter2={fighter2} prediction={prediction} />
      )}
    </div>
  )
}
