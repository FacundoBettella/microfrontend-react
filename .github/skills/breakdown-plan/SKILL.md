---
name: breakdown-plan
description: Lightweight issue planning skill for this React module-federation workspace. Generates Epic > Feature > Story/Enabler > Test structure, dependencies, and execution checklist.
---

# Breakdown Plan Skill (Microfrontend)

## Purpose

Generate a practical GitHub planning package for work that spans one or more remotes in this repository:
- container
- auth
- marketing
- dashboard

Use this skill when you need to break a feature into trackable issues with clear ownership, dependencies, and release readiness.

## Inputs

Provide:
- Feature name
- Business goal (1-3 sentences)
- Scope by app: container/auth/marketing/dashboard
- UX constraints (if any)
- Technical constraints (APIs, shared contracts, routing, auth, performance)
- Non-functional requirements (security, accessibility, test coverage)

Optional:
- Target milestone/release
- Team capacity or sprint limit

## Outputs

Create these files:
- /docs/ways-of-work/plan/{epic-name}/{feature-name}/project-plan.md
- /docs/ways-of-work/plan/{epic-name}/{feature-name}/issues-checklist.md

## Required Output Structure

### 1) Project Overview
- Feature summary
- Business value
- Success criteria (measurable)
- Risks and mitigations

### 2) Work Hierarchy
Use this hierarchy:
- Epic
- Feature
- User Stories
- Technical Enablers
- Tests
- Tasks (implementation details)

### 3) Microfrontend Ownership Matrix
For each item define:
- Owning app (container/auth/marketing/dashboard)
- Cross-app dependencies
- Contract impact (props/events/routes/shared libs)
- Deployment coupling risk

### 4) Issue Templates (Concise)
For each issue include:
- Title
- Problem/goal
- Acceptance criteria
- Dependencies (blocked by / blocks)
- Labels (type, priority, app)
- Estimate (story points)
- Definition of done

### 5) Priority and Sequencing
Use:
- P0: release blocker
- P1: critical path
- P2: important, non-blocking
- P3: nice to have

Order work by dependency-first delivery:
1. Contract/enabler changes
2. Remote implementation
3. Container integration
4. End-to-end validation

### 6) Testing Requirements
Minimum per story:
- Unit tests for core logic
- Integration tests for app boundary behavior
- E2E test for the user path across remotes when applicable
- Accessibility checks for critical paths

### 7) Security and Quality Gates
Always include checks for:
- Input validation at boundaries
- XSS-safe rendering
- Auth/permission behavior (if relevant)
- Error/loading/empty states
- Bundle impact awareness

## Rules
- Keep stories INVEST-compliant.
- Split stories larger than 8 points.
- No issue without acceptance criteria.
- No cross-app work without explicit dependency links.
- If assumptions exist, list them clearly.

## Example Prompt

"Use breakdown-plan for feature 'Unified Sign-in Entry'.
Goal: route users from marketing CTA to auth remote and return to dashboard.
Scope: marketing, auth, container.
Constraints: preserve existing routes; add telemetry for drop-off.
NFR: WCAG AA on forms, P95 interaction < 200ms, tests required."

## Example Labels
- type: epic | feature | story | enabler | test | task
- priority: p0 | p1 | p2 | p3
- app: container | auth | marketing | dashboard
- area: routing | ui | state | api | security | testing