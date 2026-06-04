# UFC Fight Predictor UI

A full-stack web application that predicts UFC fight outcomes using a machine learning model trained on 8,500+ historical fights.

## Live Demo

[v0-ufc-fight-predictor-ui.vercel.app](https://v0-ufc-fight-predictor-ui.vercel.app)

## How It Works

Select two fighters from the searchable dropdown and hit Predict. The app calls a FastAPI backend that runs a Random Forest classifier trained on career statistics for 4,400+ UFC fighters. It returns win probabilities for each fighter based on differentials in striking volume, takedown defense, reach, and win record.

**Model accuracy: 69.5%** on held-out test data.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI:** Tailwind CSS, shadcn/ui, Radix UI
- **Language:** TypeScript
- **Deployment:** Vercel

## Backend

The prediction API is a separate FastAPI service. See [ufc-fight-predictor](https://github.com/AChalli/ufc-fight-predictor) for the backend repo.

## Running Locally

Clone the repo and install dependencies:

```bash
git clone https://github.com/AChalli/ufc-fight-predictor-ui.git
cd ufc-fight-predictor-ui
npm install
```

Create a `.env.local` file in the root:
NEXT_PUBLIC_API_URL=http://localhost:8000
Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Make sure the backend is also running locally.

## Notes

- Fighter statistics are career averages, not historical snapshots per fight
- Reach advantage, commonly cited in broadcast commentary, ranked last among all model features
- Striking volume differential (SLpM) is the strongest predictor of fight outcomes
