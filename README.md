# AI Systems Notebook

Personal research website for Shingi Kamucheka. It is designed for field notes, project updates, research summaries, and learning-in-public writing about Demesne and local AI systems.

## Publishing on GitHub Pages

1. Create an empty public repository named `<your-github-username>.github.io`.
2. Upload or push this project to its `main` branch.
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. Push a change or run the **Deploy research notebook to GitHub Pages** workflow manually.

Using the standard personal-site repository name publishes the notebook at `https://<your-github-username>.github.io/` and keeps clean routes such as `/notes` and `/demesne`.

## Adding a new note

1. Duplicate `app/notes/kv-cache/page.tsx` into a new folder such as `app/notes/my-new-note/page.tsx`.
2. Replace the title, metadata, deck, and article sections.
3. Add the note summary to `lib/content.ts` and set its `href` to the new route.
4. Run `npm run dev` to read the draft locally.
5. Commit and push; GitHub Pages will rebuild the site.

Use each note to separate hypothesis, setup, observation, interpretation, limitations, and further reading. Keep measured claims narrower than the evidence.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static GitHub Pages artifact is generated in `dist/client`.
