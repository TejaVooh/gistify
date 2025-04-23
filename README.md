# Gistify

Gistify is a minimal, AI-powered app that takes a link to a video, image, reel, or post — and returns a clean, concise summary (or gist) of its content.

Built for clarity, speed, and meaningful understanding — not for vanity metrics.

---

## Use Cases

- **Casual Users**: Quickly get the gist of YouTube videos, reels, or blog posts without watching or reading the whole thing.
- **Educators and Researchers**: Extract actionable notes or meaning from videos.
- **Content Consumers**: Evaluate whether a piece of media is worth engaging with.

---

## Version 1 Features

- Paste any public link (e.g., YouTube, Instagram reel, Tweet, blog post).
- Click Gistify and receive:
  - About — what the content is about
  - Gist — the core idea or essence
  - Related To — topics, domains, or people referenced

---

## Tech Stack

| Layer       | Tools                                                             |
|-------------|-------------------------------------------------------------------|
| Frontend    | React + Vite + TailwindCSS (TypeScript)                           |
| Transcription | Whisper (OpenAI) for audio content like YouTube or reels         |
| Summarization | OpenAI GPT / LLaMA / TinyLLM via Python or local runner           |
| Backend     | Python (FastAPI or Flask, in development)                         |
| Hosting     | GitHub Pages (frontend), planned backend deployment on Render/Fly.io |
| Roadmap     | Edge AI deployment via Ollama, MLC.ai, TinyLLM                    |

---

## Local Frontend Setup

This section describes how to run the frontend locally.

```bash
# Clone the repo
git clone https://github.com/TejaVooh/gistify.git
cd gistify

# Install frontend dependencies
npm install

# Start the development server
npm run dev
```

---

## Backend Setup (Summarization Service)

The backend is currently under development and will support:

1. **Transcription**  
   - For YouTube: uses `yt_dlp` and Whisper  
   - For reels or blog posts: placeholder parsing or rule-based logic

2. **Summarization**  
   - Uses OpenAI GPT or a local model (e.g., TinyLLM, LLaMA via Ollama)

3. **Response Format**  
   - JSON with `about`, `gist`, and `related_to` fields

---

## Planned Backend Installation

```bash
# Backend (Python environment)
pip install -r requirements.txt

# Key dependencies will include:
# - openai
# - whisper
# - yt_dlp
# - fastapi or flask
# - ffmpeg-python
```

---

## Coming Soon

- Sentiment-aware sections like:
  - Useful
  - Debatable
  - Not Useful
- User feedback-based summary refinement
- Rate limiting and model fallback
- Edge-optimized inference using Ollama or TinyLLM
- Export or share gist to Markdown or Notion

---

## Development Notes

- Frontend and backend are being developed independently to allow quick testing and deployment.
- The power version (current) prioritizes high-quality transcription and summarization before optimizing for edge AI or local-only solutions.
- Transcription via Whisper is essential for video/audio-based summaries and will remain part of the stack.

---

## Contributing

We are in early development. If you're interested in helping build this project, feel free to fork the repository and submit a pull request. The `dev` branch is open for contributions.
