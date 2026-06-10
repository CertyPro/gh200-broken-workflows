# Solutions

Try to fix each lab before reading. The four live workflows are fixed by the
changes below.

### 01 - Invalid YAML
`on` needs a colon:
```yaml
on:
  push:
    branches: [main]
```

### 02 - Wrong trigger
`pushh` is not an event. Use `push`:
```yaml
on:
  push:
    branches: [main]
```

### 03 - Missing checkout
Add checkout as the first step:
```yaml
steps:
  - uses: actions/checkout@v4
  - uses: actions/setup-node@v4
    with:
      node-version: "20"
  - run: npm ci
  - run: npm test
```

### 04 - Permission denied
Grant write at the workflow or job level:
```yaml
permissions:
  contents: write
```
The default token is read-only on many repositories, so write actions need an
explicit grant. This is least privilege in action: only add the scope you need.

### 05 - Wrong Node version
Use a supported version: `node-version: "20"`.

### 06 - Failing test
Read the assertion in the log, then fix `src/calculator.js` or the test so the
expectation is correct. `npm test` must exit 0.

### 07 - Bad secret reference
Reference the exact secret name configured in Settings, Secrets and variables,
Actions. Secrets are masked in logs, so verify the name in settings.

### 08 - Cache not working
Add `cache: "npm"` to `actions/setup-node` and make sure a lockfile
(`package-lock.json`) is committed so the cache key can be computed.

### 09 - Artifact not found
The `name` in `actions/upload-artifact` and `actions/download-artifact` must
match exactly.

### 10 - Matrix failure
Add `strategy: { fail-fast: false }` so a single failing leg does not cancel the
rest, making every failure visible in one run.
