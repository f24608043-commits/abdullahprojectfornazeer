# TODO - Fix Vercel deployment (404 NOT_FOUND)

- [x] Inspect current Vercel config and identify correct deployment target for this TanStack Start app
- [x] Replace `vercel.json` to use the correct builder/entry (SSR/server output)
- [x] Ensure required build output is present for the chosen Vercel setup (dist/server/assets/worker-entry-*.js)
- [x] Update server.js entrypoint to point at actual TanStack Start worker bundle
- [x] Push updated config to GitHub
