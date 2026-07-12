#!/usr/bin/env python3
"""Generate the learning workspace scaffold from the curriculum pages."""
import os, re, html, json

ROOT = "/home/user/posts"
ROADMAP = os.path.join(ROOT, "learning", "roadmap")
WS = os.path.join(ROOT, "workspace")
PAGES = "https://abrahamswamidass.github.io/posts/learning/roadmap"

MONTHS = [
    (1,  "foundations",           "data"),
    (2,  "modern-data-stack",     "data"),
    (3,  "spark",                 "data"),
    (4,  "streaming",             "data"),
    (5,  "dataops",               "data"),
    (6,  "architecture-capstone", "data"),
    (7,  "ml-foundations",        "ai"),
    (8,  "llms",                  "ai"),
    (9,  "rag",                   "ai"),
    (10, "agents-mcp",            "ai"),
    (11, "llmops-capstone",       "ai"),
    (12, "portfolio-launch",      "ai"),
]

PHASE_NAME = {"data": "Data Engineering", "ai": "AI Engineering"}

def strip_tags(s):
    s = re.sub(r"<[^>]+>", "", s)
    return html.unescape(s).strip()

def extract(num):
    path = os.path.join(ROADMAP, f"month-{num:02d}.html")
    with open(path) as fh:
        h = fh.read()
    title = strip_tags(re.search(r"<h1>(.*?)</h1>", h, re.S).group(1))
    # concepts / chips (first chips block)
    chips_block = re.search(r'<div class="chips">(.*?)</div>', h, re.S)
    chips = [strip_tags(c) for c in re.findall(r'<span class="chip">(.*?)</span>', chips_block.group(1), re.S)] if chips_block else []
    # done-when checklist
    cl = re.search(r'<ul class="checklist">(.*?)</ul>', h, re.S)
    done = [strip_tags(li) for li in re.findall(r"<li>(.*?)</li>", cl.group(1), re.S)] if cl else []
    return title, chips, done

def w(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w") as fh:
        fh.write(content)

def w_once(path, content):
    """Write only if the file doesn't already exist — never clobber user content."""
    if os.path.exists(path):
        return
    w(path, content)

data_for_tracker = []

for num, slug, phase in MONTHS:
    title, chips, done = extract(num)
    folder = os.path.join(WS, f"month-{num:02d}-{slug}")
    url = f"{PAGES}/month-{num:02d}.html"
    data_for_tracker.append({
        "num": f"{num:02d}", "title": title, "phase": phase,
        "url": url, "doneWhen": done, "concepts": chips,
    })

    # code/ and visuals/ with READMEs + gitkeep
    w(os.path.join(folder, "code", "README.md"),
      f"# Month {num:02d} — Code\n\n"
      f"Experiments, scripts, and notebooks you write to test this month's ideas.\n\n"
      f"Suggested layout: one folder per experiment (e.g. `01-star-schema/`, `02-scd-type2/`).\n"
      f"Keep a one-line note at the top of each file saying what it proves.\n")
    w(os.path.join(folder, "code", ".gitkeep"), "")
    w(os.path.join(folder, "visuals", "README.md"),
      f"# Month {num:02d} — Visuals\n\n"
      f"Diagrams, charts, screenshots, and any HTML/SVG visualizations you generate this month.\n"
      f"Name files by date + topic, e.g. `2026-07-13-star-schema.svg`.\n\n"
      f"Ask Claude for Mermaid or SVG, save the render here, and reference it from `log.md`.\n")
    w(os.path.join(folder, "visuals", ".gitkeep"), "")

    # README.md
    concepts_line = " · ".join(f"`{c}`" for c in chips)
    done_md = "\n".join(f"- [ ] {d}" for d in done)
    w(os.path.join(folder, "README.md"),
      f"# Month {num:02d} · {title}\n\n"
      f"**Phase:** {PHASE_NAME[phase]}  \n"
      f"**Curriculum:** [{url}]({url})\n\n"
      f"Your working area for this month. Build in `code/`, drop diagrams and screenshots "
      f"in `visuals/`, think out loud in `notes.md`, and stamp every study day in `log.md`.\n\n"
      f"## Concepts to master\n{concepts_line}\n\n"
      f"## Done-when checklist\n{done_md}\n\n"
      f"## What goes where\n"
      f"| Path | Use |\n|------|-----|\n"
      f"| `code/` | Experiments, scripts, notebooks that test the ideas |\n"
      f"| `visuals/` | Diagrams, charts, screenshots, HTML/SVG you generate |\n"
      f"| `notes.md` | Concepts in your own words |\n"
      f"| `log.md` | Day-by-day entries (template in `../templates/`) |\n")

    # notes.md (never clobbered)
    glossary = "\n".join(f"- **{c}** — " for c in chips[:10])
    w_once(os.path.join(folder, "notes.md"),
      f"# Month {num:02d} — Notes\n\n"
      f"> Concepts in your own words. If you can explain it here without looking it up, you own it.\n\n"
      f"## Glossary (my words)\n{glossary}\n\n"
      f"## Aha moments\n\n"
      f"## Open questions\n")

    # log.md (never clobbered)
    w_once(os.path.join(folder, "log.md"),
      f"# Month {num:02d} — Daily Log\n\n"
      f"One entry per study day, newest at the top. "
      f"Copy the block from [`../templates/daily-log-entry.md`](../templates/daily-log-entry.md).\n\n"
      f"---\n\n"
      f"## YYYY-MM-DD — Day 1\n"
      f"**Focus:** \n"
      f"**Time:** \n"
      f"**What I did:** \n"
      f"**Code / visuals produced:** \n"
      f"**What clicked:** \n"
      f"**Next session:** \n\n"
      f"---\n")

# progress.md
rows = []
for m in data_for_tracker:
    rows.append(f"| {m['num']} | [{m['title']}](month-{m['num']}-{dict((n,s) for n,s,_ in MONTHS)[int(m['num'])]}/) | {PHASE_NAME[m['phase']]} | ☐ Not started | 0 |  |")
table = "\n".join(rows)
w_once(os.path.join(WS, "progress.md"),
  "# Learning Progress\n\n"
  "Durable, git-committed record of the 12-month Data & AI journey. "
  "For an at-a-glance view, open the interactive dashboard at "
  "[`tracker/`](tracker/index.html) (via GitHub Pages or locally).\n\n"
  "**Started:** ______  **Target window:** 12 months\n\n"
  "## Streak\n"
  "- Total study days: 0\n"
  "- Current streak: 0\n"
  "- Last studied: —\n\n"
  "## Month status\n"
  "| # | Month | Phase | Status | Days logged | Notes |\n"
  "|---|-------|-------|--------|-------------|-------|\n"
  f"{table}\n\n"
  "_Status legend: ☐ Not started · ◐ In progress · ☑ Done_\n")

# tracker/data.js  (inlined so it works on file:// too — no fetch/CORS)
w(os.path.join(WS, "tracker", "data.js"),
  "// Auto-generated from the curriculum pages. Do not edit by hand;\n"
  "// regenerate with scratchpad/gen_workspace.py if the roadmap changes.\n"
  "window.ROADMAP = " + json.dumps(data_for_tracker, indent=2, ensure_ascii=False) + ";\n")

print(f"Scaffolded {len(MONTHS)} months under {WS}")
print("Wrote progress.md and tracker/data.js")
