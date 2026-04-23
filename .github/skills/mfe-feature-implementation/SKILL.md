---
name: mfe-feature-implementation
description: Converts a frontend feature request into a concrete React module-federation implementation blueprint with file-level changes, contracts, and test strategy.
---

# MFE Feature Implementation Skill

## Purpose

Produce an execution-ready implementation blueprint for features that involve one or more apps in this workspace:
- container
- auth
- marketing
- dashboard

Use this skill when planning is done and the next step is technical implementation design.

## Inputs

Provide:
- Feature name and user outcome
- Scope by app (container/auth/marketing/dashboard)
- Existing routes/components to extend
- Data/API dependencies
- Security and accessibility requirements
- Performance constraints

Optional:
- Existing issue links
- Design references
- Deadline or release constraint

## Outputs

Create a structured implementation blueprint including:
- Architecture decisions summary
- File-by-file change plan
- Public contracts impacted (props/events/routes/shared interfaces)
- State ownership and data flow map
- Error/loading/empty state behavior
- Test matrix (unit/integration/e2e)
- Rollout and fallback strategy

## Required Sections

### 1) Scope and Boundaries
- In scope
- Out of scope
- Backward compatibility notes

### 2) Component and Hook Design
- New components/hooks/services
- Responsibility of each unit
- Reusability and extension points

### 3) Module Federation Contracts
For each contract change, define:
- Producer app
- Consumer app(s)
- Contract shape before/after
- Compatibility strategy

### 4) State and Data Access
- Local state vs shared state decisions
- API adapter boundaries
- Caching/retry/error strategy

### 5) Security and UX Safeguards
- Input validation boundaries
- Safe rendering strategy for user content
- Auth and authorization checks
- Accessibility checks (focus, semantics, keyboard)

### 6) Testing Matrix
Minimum:
- Unit tests for business logic and hooks
- Integration tests for app boundaries
- E2E for user-critical cross-remote path
- Regression checks for changed contracts

### 7) Delivery Plan
- Step-by-step implementation sequence
- Suggested PR slices
- Risk controls and rollback notes

## Rules
- Favor small, composable components and hooks.
- Avoid cross-app hidden coupling.
- Any contract change must include compatibility guidance.
- Do not skip error/loading/empty states.
- If uncertainty exists, list assumptions explicitly.

## Example Prompt

"Use mfe-feature-implementation for feature 'Post-login Smart Redirect'.
Scope: auth + container + dashboard.
Goal: after sign-in, redirect based on role while preserving deep-link intent.
Constraints: preserve existing route contracts and avoid breaking marketing CTA flow.
NFR: WCAG AA, no increase >15 KB in initial bundle, tests required."