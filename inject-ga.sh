#!/usr/bin/env bash
# Inject Google Analytics into all HTML files that don't already have it.
# Safe to run multiple times — skips files that already contain the snippet.

cd "$(git rev-parse --show-toplevel)"

python3 - "$@" <<'EOF'
import os, sys, glob

GA_ID = "G-WND1ZWTYSM"
SNIPPET = f"""\
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id={GA_ID}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){{dataLayer.push(arguments);}}
    gtag('js', new Date());
    gtag('config', '{GA_ID}');
  </script>"""

patterns = ["*.html", "*/*.html", "*/*/*.html"]
files = []
for p in patterns:
    files.extend(glob.glob(p))

injected = []
for path in sorted(set(files)):
    with open(path) as f:
        content = f.read()
    if "googletagmanager" in content:
        continue
    if "</head>" not in content:
        continue
    new_content = content.replace("</head>", SNIPPET + "\n</head>", 1)
    with open(path, "w") as f:
        f.write(new_content)
    injected.append(path)
    print(f"  injected: {path}")

if not injected:
    print("  all files already have GA — nothing to do.")
EOF
