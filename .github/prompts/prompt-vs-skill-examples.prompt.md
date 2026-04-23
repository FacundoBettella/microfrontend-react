---
name: prompt-vs-skill
description: Explain the difference between prompt files and skills with examples from this repo.
argument-hint: Optional focus like simple explanation, examples, or when to use each
---

# Prompt Vs Skill In This Repo

## Quick Difference

A prompt is the request.

A skill is the method used to solve that kind of request repeatedly.

## Simple Analogy

Prompt: "Build this wall."

Skill: the construction process, checklist, and standards used every time to build walls correctly.

## In This Repository

### Prompt Example

Use this when you want an answer or a one-off task.

```md
Explain how the `auth` remote is mounted inside `container` in this repo.
Show:
1. The webpack remote/expose connection
2. The `mount` contract
3. How navigation sync works
4. Which files I should read first
Keep it short and practical.
```

### Skill Example

Use this when you want a repeatable workflow for similar requests.

Existing skill in this repo:
- `.github/skills/mfe-feature-implementation.md`

What that skill does:
- Defines inputs the agent should request
- Defines output structure
- Forces cross-remote contract thinking
- Includes testing, security, rollout, and compatibility checks

Example of using the skill:

```md
Use `mfe-feature-implementation` for feature "Add dashboard remote to container".
Scope: container + dashboard.
Goal: load dashboard from `/dashboard/*` and preserve route isolation.
Constraints: do not break existing auth or marketing remotes.
NFR: tests required, keep shared dependencies aligned.
```

## When To Use Each

Use a prompt when:
- You want an explanation
- You want a focused one-time change
- You are exploring or debugging something specific

Use a skill when:
- You will ask for the same kind of work often
- You want consistent output format
- You need guardrails for architecture, testing, or cross-app impact

## Rule Of Thumb

If you are asking "what do I need right now?", write a prompt.

If you are asking "how should this type of work always be handled?", use or create a skill.

## Good Prompt Examples For This Project

```md
Explain the full lifecycle of `remoteEntry.js` in this repo, from build to runtime consumption.
```

```md
Review the `auth` remote integration and tell me where route sync can break.
```

```md
Add a new remote called `dashboard` and list the minimal file changes needed in webpack and container routing.
```

```md
Compare `createBrowserHistory` vs `createMemoryHistory` in these microfrontends and explain why both are used.
```