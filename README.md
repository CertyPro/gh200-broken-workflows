# GH-200 Broken Workflows

Fix deliberately broken GitHub Actions workflows, by
[Certy](https://github.com/CertyPro).

This is the troubleshooting repository for the **GitHub Actions (GH-200)** exam.
Domain **2.0 Consume and troubleshoot workflows** is 20% of the exam, and the only
way to get good at it is to read failing runs and fix them.

> Every run in the Actions tab here is meant to be red. Your job is to turn it
> green.

## How to use

1. Click **Use this template** (or **Fork**) to get your own copy, and make it
   **public** so Actions runs.
2. Open the **Actions** tab. Several workflows are failing on purpose.
3. Work through [`broken-labs/`](broken-labs/): read the symptom, open the failing
   run, read the logs, fix the file, and confirm it goes green.
4. Stuck? The fixes are in [`solutions/`](solutions/).

## What is in here

- A tiny Node app (`src/`, `tests/`) so that, once you fix a workflow, the build
  can actually pass.
- [`.github/workflows/`](.github/workflows/) - four live, broken workflows:
  invalid YAML, a wrong trigger, a missing checkout, and a permissions error.
- [`broken-labs/`](broken-labs/) - ten labs (the four live ones plus six snippet
  diagnoses).
- [`solutions/`](solutions/) - the fixes, with explanations.

## Links

- Free GH-200 course and mock exam: https://certy.pro
- Course content and cheat sheets: https://github.com/CertyPro/certy-gh200-course-content
- Author workflows from scratch: https://github.com/CertyPro/gh200-student-actions-lab

## Licence

[MIT](LICENSE).
