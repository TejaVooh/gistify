# Gistify

Gistify is a simple app that takes an accessible link to a video, image, reel, or post — and returns a clean summary (or gist) of the content.

Built for clarity, speed, and minimalism.

## Version 1 Features

- Paste any public link (YouTube, Instagram reel, tweet, blog post, etc.)
- Click **Gistify** to get:
  - About – What it's about
  - Gist – The essence
  - Related To – Topics, people, or domains
- Output shown on screen with a copy option (no data saved)

## Tech Stack

- Frontend: React + Vite + TailwindCSS (TypeScript)
- LLM: OpenAI / Local LLMs (e.g., LLaMA / Ollama)  
- Deploy: GitHub Pages (planned)

## Coming Soon

- Sentiment-based sections like:
  - Useful
  - Debatable
  - Not Useful
- Rate-limiting alerts for free LLM usage
- Save/share functionality

## Dev Setup

```bash
# Clone & setup
git clone https://github.com/TejaVooh/gistify.git
cd gistify
npm install

# Run locally
npm run dev
