---
name: module-federation-explainer
description: Explain how Module Federation works in this repository using the real container and remote setup.
argument-hint: Optional focus like routing, remoteEntry, mount, or debugging
---

# Module Federation Explainer Prompt

Use this prompt when you want a repo-specific explanation of how Module Federation works in this workspace.

## Prompt

Explain how Module Federation works in this repository in simple Spanish.

Context:
- Host app: `packages/container`
- Remote apps: `packages/auth`, `packages/marketing`, `packages/dashboard`
- I want the explanation based on the actual webpack and bootstrap files in this repo.

Please structure the answer like this:
1. What the host does
2. What each remote exposes
3. How `remoteEntry.js` is used
4. How `mount` works in this project
5. How routing is synchronized between container and remotes
6. How to run and debug the apps locally
7. The 3 most common mistakes in this repo

Constraints:
- Use simple wording
- Include concrete file references
- Keep the explanation practical, not theoretical
- If something is missing or inconsistent, call it out explicitly

## Example Variations

### Short explanation

Explain Module Federation in this repo for a junior frontend developer in under 200 words.

### Debugging focus

Explain why a remote might fail to load in this repo. Check remotes, exposes, `publicPath`, ports, and `remoteEntry.js` URLs.

### Architecture focus

Explain the responsibilities of `container`, `auth`, and `marketing`, and describe where routing and rendering boundaries are defined.