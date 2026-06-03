"use client"

import { Trophy, TrendingUp, Zap } from "lucide-react"
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