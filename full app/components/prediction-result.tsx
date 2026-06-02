"use client"

import { Trophy, TrendingUp, Target, Zap } from "lucide-react"
import type { Fighter } from "@/lib/fighters"
import { cn } from "@/lib/utils"

interface PredictionResultProps {
  fighter1: Fighter
  fighter2: Fighter
  prediction: {
    fighter1Probability: number
    fighter2Probability: number
    winner: string
    confidence: string
    keyFactor: string
  }
}

export function PredictionResult({ fighter1, fighter2, prediction }: PredictionResultProps) {
  const isFighter1Winner = prediction.winner === fighter1.name

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        {/* Header */}
        <div className="bg-primary/10 border-b border-primary/20 p-4 text-center">
          <div className="flex items-center justify-center gap-2 text-primary">
            <Trophy className="h-5 w-5" />
            <span className="font-semibold uppercase tracking-wider text-sm">Fight Prediction</span>
          </div>
        </div>

        {/* Fighter Matchup */}
        <div className="p-6">
          <div className="flex items-center justify-between gap-4 mb-6">
            {/* Fighter 1 */}
            <div className={cn("flex-1 text-center", isFighter1Winner && "relative")}>
              {isFighter1Winner && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                  <span className="px-2 py-0.5 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded">
                    Winner
                  </span>
                </div>
              )}
              <div className={cn(
                "p-4 rounded-lg transition-all",
                isFighter1Winner ? "bg-primary/10 ring-2 ring-primary" : "bg-muted/30"
              )}>
                <p className={cn(
                  "font-bold text-lg mb-1",
                  isFighter1Winner ? "text-primary" : "text-foreground"
                )}>
                  {fighter1.name}
                </p>
                <p className="text-sm text-muted-foreground">{fighter1.record}</p>
              </div>
            </div>

            {/* VS */}
            <div className="shrink-0 text-muted-foreground font-bold text-lg">VS</div>

            {/* Fighter 2 */}
            <div className={cn("flex-1 text-center", !isFighter1Winner && "relative")}>
              {!isFighter1Winner && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2">
                  <span className="px-2 py-0.5 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground rounded">
                    Winner
                  </span>
                </div>
              )}
              <div className={cn(
                "p-4 rounded-lg transition-all",
                !isFighter1Winner ? "bg-primary/10 ring-2 ring-primary" : "bg-muted/30"
              )}>
                <p className={cn(
                  "font-bold text-lg mb-1",
                  !isFighter1Winner ? "text-primary" : "text-foreground"
                )}>
                  {fighter2.name}
                </p>
                <p className="text-sm text-muted-foreground">{fighter2.record}</p>
              </div>
            </div>
          </div>

          {/* Probability Bar */}
          <div className="mb-6">
            <div className="flex justify-between text-sm font-semibold mb-2">
              <span className={cn(isFighter1Winner ? "text-primary" : "text-foreground")}>
                {prediction.fighter1Probability}%
              </span>
              <span className="text-muted-foreground uppercase text-xs tracking-wider">Win Probability</span>
              <span className={cn(!isFighter1Winner ? "text-primary" : "text-foreground")}>
                {prediction.fighter2Probability}%
              </span>
            </div>
            <div className="h-4 rounded-full bg-muted overflow-hidden flex">
              <div
                className={cn(
                  "h-full transition-all duration-500",
                  isFighter1Winner ? "bg-primary" : "bg-muted-foreground"
                )}
                style={{ width: `${prediction.fighter1Probability}%` }}
              />
              <div
                className={cn(
                  "h-full transition-all duration-500",
                  !isFighter1Winner ? "bg-primary" : "bg-muted-foreground"
                )}
                style={{ width: `${prediction.fighter2Probability}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mt-1">
              <span>{fighter1.name.split(" ")[1] || fighter1.name}</span>
              <span>{fighter2.name.split(" ")[1] || fighter2.name}</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
              <div className="p-2 rounded-md bg-primary/10">
                <TrendingUp className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Confidence</p>
                <p className="font-semibold text-foreground">{prediction.confidence}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30">
              <div className="p-2 rounded-md bg-primary/10">
                <Target className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Key Factor</p>
                <p className="font-semibold text-foreground">{prediction.keyFactor}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-muted/30 border-t border-border p-4">
          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <Zap className="h-4 w-4" />
            <span>Prediction generated using historical fight data analysis</span>
          </div>
        </div>
      </div>
    </div>
  )
}
