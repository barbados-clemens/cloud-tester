# Demo Testing Workspace

1. Clone/fork repo
2. Install deps `npm install`
3. Run `NX_CLOUD_API=http://<your-deployed-url> npx nx connect`
4. Follow on boarding instructions in the provided link in the terminal
   - You most likely need the `nxCloudId` inside the `nx.json` file
5. Login into Nx Cloud from the terminal: `nx login`
6. run `npx nx build` and...
   - [ ] You get a run link that shows you your terminal output when viewing the task in the UI
   - [ ] If you have read and write access, make sure you get a cache hit
     - run `npx nx reset` then `npx nx build`
