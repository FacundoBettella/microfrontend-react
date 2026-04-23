---
name: free-deployment-template
description: Reusable deployment planning skill for tutorial apps that starts on free hosting and provides a path to production-scale environments.
---

# Deployment Skill

## Purpose

Create a practical deployment blueprint for frontend or microfrontend apps using free-tier services first, with clear migration steps for future production needs.

## Inputs

Provide:
- App/repo structure (single app or microfrontends)
- Framework/build tools
- Hosting constraints (free-only, region, custom domain)
- CI/CD preference (GitHub Actions default)
- Security constraints (auth, CORS, redirect URLs, secrets)

Optional:
- SLA expectations
- Team size and release frequency
- Monitoring tooling preference

## Outputs

Create:
- /docs/deployment/deployment-plan.md
- /docs/deployment/operations-runbook.md

Optional (if asked to implement):
- GitHub workflow files in /.github/workflows/

## Required Sections

### 1) Architecture Inventory
- Apps/services and responsibilities
- Build outputs and artifact locations
- Runtime dependencies

### 2) Environment Matrix
- local / staging / production
- base URLs and remoteEntry URLs
- env variables by environment
- secret ownership and storage location

### 3) Provider Decision Matrix
- Recommended free provider
- Why it fits this app
- Limits/risks
- Future migration target

### 4) CI/CD Blueprint
- Trigger strategy (push/PR/manual)
- Steps: install, lint, test, build, deploy
- Failure gates and notifications
- Caching strategy and artifact retention

### 5) Release and Rollback
- Versioning/tagging strategy
- Deployment order (for microfrontends: remotes first, host last)
- Verification checklist
- Rollback procedure

### 6) Security Baseline
- Secret handling
- CSP/CORS and origin allowlist
- Auth callback/redirect validation
- Dependency and supply-chain checks

### 7) Cost and Scale Path
- Free-tier limits and alert points
- Trigger conditions to upgrade
- Minimal-change migration plan

## Module Federation Notes

Always document:
- Exposed modules per remote
- Consuming host/remotes
- Remote URL strategy per environment
- Compatibility contract and fallback behavior if a remote fails

## Example Prompt

"Use free-deployment-template for this React module federation repo.
Deploy container, auth, marketing, and dashboard with free hosting.
Use GitHub Actions, include preview environments, and provide rollback steps.
Output deployment-plan.md and operations-runbook.md."