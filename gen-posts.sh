#!/usr/bin/env bash
# Regenerate posts.json by scanning all .html files (excluding index.html).
# Scans root and one level of subdirectories; captures mtime and folder as category.
# Run this before committing whenever you add or rename a post.

cd "$(dirname "$0")"

python3 - <<'EOF'
import os, re, json
from datetime import datetime, timezone

SKIP_DIRS = {'.git', '.github'}

posts = []

def process_file(filepath, category=None):
    with open(filepath) as fh:
        content = fh.read()
    title_match = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE)
    title = title_match.group(1) if title_match else (
        os.path.basename(filepath).replace('.html', '').replace('-', ' ').title()
    )
    # Use date of first git commit for the file (creation date); fall back to mtime
    import subprocess
    result = subprocess.run(
        ['git', 'log', '--follow', '--diff-filter=A', '--format=%aI', '--', filepath],
        capture_output=True, text=True
    )
    first_commit = result.stdout.strip().splitlines()
    if first_commit:
        date = first_commit[-1][:10]
    else:
        mtime = os.path.getmtime(filepath)
        date = datetime.fromtimestamp(mtime, tz=timezone.utc).strftime('%Y-%m-%d')
    entry = {'file': filepath.lstrip('./'), 'title': title, 'date': date}
    if category:
        entry['category'] = category
    posts.append(entry)

# Root-level HTML files
for f in sorted(os.listdir('.')):
    if f.endswith('.html') and f != 'index.html' and os.path.isfile(f):
        process_file(f)

# One level deep in subdirectories
for d in sorted(os.listdir('.')):
    if os.path.isdir(d) and d not in SKIP_DIRS and not d.startswith('.'):
        category = d.replace('-', ' ').title()
        for f in sorted(os.listdir(d)):
            fpath = os.path.join(d, f)
            if f.endswith('.html') and os.path.isfile(fpath):
                process_file(fpath, category=category)

# Sort newest first
posts.sort(key=lambda p: p['date'], reverse=True)

with open('posts.json', 'w') as out:
    json.dump(posts, out, indent=2, ensure_ascii=False)
    out.write('\n')

# Also inline the JSON into index.html so it works without a server
posts_json = json.dumps(posts, indent=2, ensure_ascii=False)
with open('index.html') as fh:
    html = fh.read()

import re as _re
html = _re.sub(
    r'(<script type="application/json" id="posts-data">)[\s\S]*?(</script>)',
    f'\\1\n{posts_json}\n\\2',
    html
)
with open('index.html', 'w') as fh:
    fh.write(html)

print(f"Written {len(posts)} post(s) to posts.json and index.html")
EOF
