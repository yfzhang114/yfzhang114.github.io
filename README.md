# Yi-Fan Zhang's personal homepage

Static personal website deployed with GitHub Pages from the `main` branch.

## Update content

- `_src/site-data.mjs`: citation snapshots, selected publications, news.
- `_src/template.html`: biography, research interests, experience, awards, and service.
- `styles.css` and `designs.css`: layout and the selected warm personal design.
- `app.js`: accessible navigation state.
- `photo.jpg`: profile portrait.

After editing content, run `node build.mjs` and commit the generated `index.html` with the source changes. No package installation is needed. The generated page works without JavaScript.

For a local preview, run `python3 -m http.server 18766 --bind 127.0.0.1` and open http://127.0.0.1:18766/ .

Citation statistics are dated snapshots. Paper and author-role labels should be checked against the linked original sources when updating them.
