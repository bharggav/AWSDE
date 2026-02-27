
# Bharggav Galla - AWS DATA ENGINEER Portfolio (React + TypeScript)


Recruiter-ready, animated single-page portfolio built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion**.

## Features

- Futuristic glassmorphism UI with smooth animation and micro-interactions
- Dark/light mode toggle with persisted preference
- Typing hero intro + CTA actions
- Sticky navbar with active section highlighting
- Scroll-based reveal animations across sections
- Typed data models for skills, projects, and experience
- Lazy-loaded sections for better performance
- Resume download placeholder and deployment-ready build output

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

## Quick Start

```bash
git clone <your-repo-url>
cd AWSDE
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Troubleshooting

### `npm ERR! enoent Could not read package.json`
This means you're running npm in the wrong directory.

Use:

```bash
cd /path/to/AWSDE
ls package.json
npm run build
```

If you cloned into a lowercase folder (like `awsde`), `cd` into that exact folder name.



## Git Conflict Help (especially `package-lock.json`)

If you are getting merge/rebase conflicts, use this safe workflow:

```bash
# 1) keep your branch up-to-date
git fetch origin

# 2) rebase or merge main
# choose one:
git rebase origin/main
# OR
# git merge origin/main
```

If conflict happens in `package-lock.json`, do **not** hand-edit it. Regenerate it:

```bash
# keep package.json from your intended branch, then regenerate lockfile
rm -f package-lock.json
npm install
git add package-lock.json
```

Then continue:

```bash
# rebase flow
git rebase --continue

# merge flow
git commit
```

Quick conflict checks:

```bash
git status
rg -n "^(<<<<<<<|=======|>>>>>>>)" .
```

## Deployment

### Option 1: AWS Amplify
1. Push this repository to GitHub.
2. In AWS Amplify, create a new app and connect the repo.
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy.

### Option 2: S3 + CloudFront
1. Run `npm run build`.
2. Create an S3 bucket.
3. Upload `dist/` contents to S3.
4. Create CloudFront distribution with S3 origin.
5. Invalidate cache after each update.

## Customization

- Edit portfolio content in `src/data/portfolioData.ts`.
- Replace `public/resume.pdf` with your resume.
- Replace architecture placeholders with real diagrams.


## Clean Branch Workflow (avoid old-branch conflicts)

If your old branch has too many conflicts, create a clean branch from `master` (or `main`) and re-apply latest code:

```bash
# from repo root
git fetch origin

# create clean base
git checkout master || git checkout main
git pull

git checkout -b master-clean-update

# copy latest app files from old branch
# (replace OLD_BRANCH with your branch name)
git checkout OLD_BRANCH -- .

npm install
npm run lint
npm run build

git add .
git commit -m "Reapply latest portfolio changes on clean branch"
```

Then open a PR from `master-clean-update` to your target branch.
