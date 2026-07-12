# Learning Workspace

This is the **hands-on half** of the [12-month Data & AI roadmap](https://abrahamswamidass.github.io/posts/learning/roadmap/../data-ai-roadmap.html). The roadmap tells you *what* to learn each month; this workspace is where you actually **do** it — write code, take notes, save what you build, and track every study day.

## Layout

```
workspace/
├── README.md                  ← you are here
├── progress.md                ← durable, git-committed progress record
├── templates/                 ← copy-paste blocks for logs & experiments
│   ├── daily-log-entry.md
│   └── code-experiment.md
├── tracker/                   ← interactive dashboard (open in a browser)
│   ├── index.html
│   └── data.js                ← auto-generated from the curriculum
└── month-01-foundations/      ← one working folder per month
    ├── README.md              ← objective, concepts, done-when checklist
    ├── notes.md               ← concepts in your own words
    ├── log.md                 ← day-by-day entries
    ├── code/                  ← experiments, scripts, notebooks
    └── visuals/               ← diagrams, charts, screenshots, HTML/SVG
```

## The daily loop

1. **Open this month's folder** (e.g. `month-01-foundations/`) and skim its `README.md`.
2. **Study + build.** Follow the curriculum page's prompts and challenge. Write throwaway code in `code/`, save any diagram or visualization Claude generates into `visuals/`.
3. **Log the day.** Copy the block from [`templates/daily-log-entry.md`](templates/daily-log-entry.md) into that month's `log.md`, newest at the top. Two minutes, every session.
4. **Capture what clicked** in `notes.md` — in your own words. If you can write it without looking, you own it.
5. **Mark it.** Tick the done-when items in the month `README.md`, and update the streak in [`progress.md`](progress.md). Or use the [interactive tracker](tracker/index.html) for at-a-glance progress.

## Two records, on purpose

- **`progress.md` + the `log.md` files are the source of truth** — they're committed to git, so your history survives forever and shows up in your GitHub contribution graph (great signal for the job hunt).
- **The `tracker/` dashboard is a convenience view** — it saves check-marks and study-days in your browser (localStorage) for a quick visual, but treat the markdown as the real record.

## Conventions

- **Name visuals by date + topic:** `2026-07-13-star-schema.svg`, `2026-07-14-spark-dag.png`.
- **One folder per experiment** inside `code/`: `01-star-schema/`, `02-scd-type2/` — with a one-line note at the top of each file saying what it proves.
- **Commit often.** Every study day should end with a commit: `git add . && git commit -m "m01 day 3: star schema + SCD notes"`. The habit *is* the portfolio.

## Regenerating

`progress.md`, each month `README.md`, and `tracker/data.js` are generated from the curriculum pages by `scratchpad/gen_workspace.py`. If you edit the roadmap, re-run it to keep them in sync. Your `notes.md`, `log.md`, `code/`, and `visuals/` are yours — the generator never overwrites them once they exist.
