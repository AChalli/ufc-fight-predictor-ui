import { UFCPredictor } from "@/components/ufc-predictor"
import { Activity, TrendingUp, Zap } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Activity className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="font-bold text-lg text-foreground">UFC Predictor</h1>
                <p className="text-xs text-muted-foreground">Fight Analytics</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span>Live Stats</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                <span>AI Powered</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 py-12 lg:py-16 relative">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Zap className="h-4 w-4" />
              <span>Advanced Fight Prediction Algorithm</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
              Predict the{" "}
              <span className="text-primary">Octagon Outcome</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Select two fighters and let our AI analyze their stats, fighting styles, and historical data
              to predict the winner.
            </p>
          </div>

          {/* Predictor */}
          <UFCPredictor />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground">
            Built for entertainment purposes only.
          </p>
        </div>
      </footer>
    </main>
  )
}
