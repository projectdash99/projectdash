# Product Requirements Document
## Multi-Model AI Chat Platform

**Status:** In development
**Team:** 2 people (you + developer friend)
**Last updated:** July 2026

---

## 1. Overview

A web-based AI chatbot platform that lets users converse with multiple AI models
(Gemini, DeepSeek, and additional models via OpenRouter) from a single, unified,
premium interface — similar in category to Claude, ChatGPT, and Grok, but designed
to feel more refined than all three. A native mobile app is planned as a future phase,
so the design system and architecture are built to translate directly to mobile
without requiring a redesign.

---

## 2. Goals

- Ship a working, full-stack AI chat web app using entirely free-tier tools and APIs
- Support multiple AI models in one interface with easy switching
- Build a premium, distinctive UI/UX that stands out from existing competitors
- Keep the architecture simple enough for a two-person team to build and maintain
- Lay groundwork that allows a native mobile app to be built later without a rebuild

## 3. Non-Goals (for this phase)

- Native mobile app (planned for later, not part of current build)
- Paid/premium subscription tiers or billing
- Model comparison / side-by-side mode (noted as a possible future feature only)
- Enterprise/team accounts

---

## 4. Tech Stack

| Layer | Choice |
|---|---|
| Frontend framework | Next.js (App Router) |
| Styling | Tailwind CSS |
| UI components | shadcn/ui |
| Animation | Framer Motion |
| AI response streaming | Vercel AI SDK |
| Backend | Next.js API routes (Node.js); Express or FastAPI only if heavier backend logic is needed later |
| Database | Supabase (PostgreSQL) |
| Authentication | Supabase Auth |
| NoSQL | Not used — Postgres + JSONB covers flexible data needs |
| Hosting (frontend) | Vercel |
| Hosting (extra backend, if needed) | Render |
| Code collaboration | GitHub (shared repo) |
| AI code editor | Antigravity |

## 5. AI Models Integrated

- **Gemini** — primary model, native integration in Antigravity, generous free tier
- **DeepSeek** — used for backend/logic-heavy tasks, free tier (5M tokens on signup)
- **OpenRouter** — gateway for accessing additional models (GPT, Claude, Grok, etc.)
  through a single API key without managing multiple provider keys individually

---

## 6. Design Direction

**Philosophy:** Premium, minimal, calm, spacious, Apple-inspired, editorial, AI-first.

**Avoid:** Cyberpunk/gaming aesthetics, heavy shadows, overly colorful UI, generic
SaaS dashboard look, dense layouts.

**Signature differentiator:** An editorial serif font (e.g. Fraunces/Newsreader) used
for greetings and hero text, paired with clean Inter sans-serif for all standard UI —
combined with a soft gradient "AI Orb" as the consistent brand element across empty
states, loading indicators, and branding.

**Key UI patterns (drawn from reference research):**
- Collapsible sidebar (280px expanded / 72px collapsed) with chat history grouped by
  Today / Yesterday / Last 7 Days / Older
- Centered empty state with gradient orb, serif greeting, and quick-action cards
  (Research, Write, Code, Analyze, Summarize)
- Floating glass-pill composer, sticky to bottom, with model selector chip, search
  toggle, deeper-research toggle, and voice input
- Assistant messages rendered text-first with no bubble background (article-style);
  user messages right-aligned in a soft accent-colored bubble
- Collapsible right panel for Sources, Files, Artifacts, and predictive follow-up
  suggestions
- Full light/dark mode support

Full detail lives in `ui-prompt.json` (structured) and `ui-prompt.txt` (plain-English)
— both handed to the AI code editor for UI generation.

---

## 7. Build Order

1. **Frontend first** — build the UI/UX completely (empty state, chat view, composer,
   sidebar, responsive layouts) before wiring up any backend
2. **Setup** — GitHub repo, Supabase project, Vercel project, API keys (Gemini, DeepSeek)
3. **Backend** — API routes, Vercel AI SDK streaming, model connections, routing logic
4. **Database** — Supabase Auth, users/conversations/messages tables, history persistence
5. **Core features** — streaming responses, chat history, new/delete chat, rate limiting
6. **Testing & polish** — auth flow, model integrations, mobile bugs, loading/error states
7. **Deployment** — Vercel deploy, environment variables, live testing

---

## 8. Open / Future Considerations

- Native mobile app (post-web-launch)
- Model comparison / side-by-side response view
- Rate limiting implementation details (Upstash Redis being considered)
- Whether to add a vector database (Pinecone/Weaviate/pgvector) if RAG-style features
  are added later — not needed for the current scope

---

## 9. Team & Tools

- **Team:** 2 people, working via shared GitHub repo
- **Communication:** decided against Discord/WhatsApp/Instagram — using GitHub directly
  for project coordination
- **Shared accounts:** recommended single shared project email for all tool signups
  (GitHub, Vercel, Supabase, Render, API keys) rather than splitting across personal
  accounts
