# Broken labs

Ten common GitHub Actions failures. For each: the symptom, what to look for, and
the task. Four are live, runnable broken workflows in
[`.github/workflows/`](../.github/workflows/) that you fix in your own fork or
copy. The rest are snippets you diagnose. Fixes are in
[`../solutions/`](../solutions/) - try first, peek later.

This is domain **2.0 Consume and troubleshoot workflows** (20% of GH-200). The
skill is reading a failed run and knowing where to look.

## How to use

1. Fork this repository (or use it as a template).
2. Open the **Actions** tab and look at the failing runs.
3. Read the logs, find the cause, fix the file, and confirm the run goes green.

## The labs

### 01 - Invalid YAML (live: broken-01-yaml.yml)
Symptom: "Invalid workflow file". The workflow never runs. Look at the line under
the name: `on` has no colon. Task: make the YAML valid.

### 02 - Wrong trigger (live: broken-02-trigger.yml)
Symptom: you push but nothing runs. The event name is misspelled (`pushh`). Task:
fix the event so it runs on push.

### 03 - Missing checkout (live: broken-03-checkout.yml)
Symptom: `npm ci` fails, no package.json found. The runner starts empty. Task:
add `- uses: actions/checkout@v4` before setting up Node.

### 04 - Permission denied (live: broken-04-permissions.yml)
Symptom: `git push` fails with 403. The token is read-only. Task: add a
`permissions: contents: write` block so the job can write.

### 05 - Wrong Node version
Symptom: the build fails on an old Node that lacks `node --test`. Snippet:
```yaml
- uses: actions/setup-node@v4
  with:
    node-version: "12"
- run: npm test
```
Task: set a supported version (18, 20, or 22).

### 06 - Failing test
Symptom: the `npm test` step exits non-zero and fails the job. Task: read the test
output, find the failing assertion, and fix the code or the test. (Try editing a
function in `src/calculator.js` to break it, then fix it.)

### 07 - Bad secret reference
Symptom: a step that expects a secret gets an empty value. Snippet:
```yaml
- run: deploy --token "${{ secrets.DEPLOY_TOKEN }}"
```
when the repository secret is actually named `DEPLOY_KEY`. Task: reference the
correct secret name (secrets are never printed, so check the settings, not the
logs).

### 08 - Cache not working
Symptom: every run re-downloads dependencies. Snippet:
```yaml
- uses: actions/setup-node@v4
  with:
    node-version: "20"
    # cache option is missing
```
Task: add `cache: "npm"` (and ensure a lockfile exists) so the cache key resolves.

### 09 - Artifact not found
Symptom: the download job fails with "artifact not found". The upload used name
`build-report` but the download asked for `report`. Task: make the upload and
download names match.

### 10 - Matrix failure
Symptom: one matrix leg fails and cancels the others. Task: read which leg failed,
then add `fail-fast: false` so all legs finish and you can see every failure at
once.
