# AWS Data Engineer Portfolio (React + TypeScript)

A recruiter-ready, animated single-page portfolio built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion**.

## Features

- Modern futuristic UI with glassmorphism cards
- Dark/light theme toggle
- Animated hero with typing effect
- Scroll-based section animations
- Sticky navbar with active section highlighting
- Skills progress animations
- Project cards with architecture placeholders and badges
- Horizontal architecture showcase
- Animated experience timeline
- Certifications and contact form
- Lazy-loaded sections for performance

## Project Structure

```txt
src/
  components/
  sections/
  hooks/
  assets/
  data/
  pages/
```

## Setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deployment

### Option 1: AWS Amplify
1. Push this repository to GitHub.
2. In AWS Amplify, create a new app and connect the repo.
3. Build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy.

### Option 2: S3 + CloudFront
1. Run `npm run build`.
2. Create an S3 bucket (static website hosting optional).
3. Upload `dist/` content to S3.
4. Create a CloudFront distribution with S3 as origin.
5. Invalidate cache after updates.

## Customization

- Update content in `src/data/portfolioData.ts`.
- Replace `public/resume.pdf` with your actual resume.
- Swap architecture placeholders with real SVG/PNG diagrams.

