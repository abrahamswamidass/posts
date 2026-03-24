#!/usr/bin/env bash
# Regenerate posts.json by scanning all .html files (excluding index.html).
# Run this before committing whenever you add or rename a post.

cd "$(dirname "$0")"

python3 - <<'EOF'
import os, re, json

posts = []
for f in sorted(os.listdir('.')):
    if f.endswith('.html') and f != 'index.html':
        with open(f) as fh:
            content = fh.read()
        title = re.search(r'<title>(.*?)</title>', content, re.IGNORECASE)
        title = title.group(1) if title else f.replace('.html', '').replace('-', ' ').title()
        posts.append({'file': f, 'title': title})

with open('posts.json', 'w') as out:
    json.dump(posts, out, indent=2, ensure_ascii=False)
    out.write('\n')

print(f"Written {len(posts)} post(s) to posts.json")
EOF
