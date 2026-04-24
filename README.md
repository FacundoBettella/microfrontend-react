# React Module Federation

Microfrontend workspace built with Module Federation.

## Apps

- `container`: host application
- `auth`: authentication remote
- `marketing`: marketing remote
- `dashboard`: dashboard remote

## Copilot In This Repo

This repository includes GitHub Copilot customizations under `.github/` to make repeated work more consistent.

- `.github/prompts/`: one-off prompts for explanations or focused tasks
- `.github/skills/`: reusable workflows for recurring implementation and planning work
- `.github/agents/`: specialist agents for deeper frontend and deployment tasks

## How To Use Copilot Here

Use a prompt when you need a direct answer or a one-time change.

Examples:
- "Explain how `auth` is mounted in `container`."
- "Review route sync between `container` and `auth`."

Use a skill when you want a repeatable structure or guardrails.

Examples:
- "Use `mfe-feature-implementation` for feature 'Add dashboard remote to container'."
- "Use `breakdown-plan` for feature 'Unified sign-in entry'."

## Repo Layout

`packages/` contains the microfrontends.

`.github/` contains Copilot prompts, skills, and agents for this workspace.