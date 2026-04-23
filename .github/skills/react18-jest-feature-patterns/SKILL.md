---
name: react18-jest-feature-patterns
description: Official-aligned React 18 + Jest testing skill with practical patterns for component behavior, async flows, mocks, timers, and extensible sections for future standards.
---

# React 18 + Jest Testing Patterns

Reference skill for day-to-day frontend testing with React 18, Jest, and React Testing Library.

## Official References

- React docs (testing guidance): https://react.dev/learn/testing
- React docs (`act`): https://react.dev/reference/react/act
- Jest docs (getting started): https://jestjs.io/docs/getting-started
- Jest docs (mock functions): https://jestjs.io/docs/mock-functions
- Testing Library docs (queries): https://testing-library.com/docs/queries/about
- Testing Library docs (user-event): https://testing-library.com/docs/user-event/intro
- Testing Library docs (async): https://testing-library.com/docs/dom-testing-library/api-async

## When To Use This Skill

Use this skill when you need to:
- write new tests for React 18 components and hooks,
- standardize existing test files,
- fix flaky async behavior,
- improve confidence in user-facing flows.

## Baseline Standards

- Prefer `@testing-library/react` and user-centered assertions.
- Prefer `screen` queries and semantic selectors (`getByRole`, `findByRole`).
- Use `userEvent` for interactions; use `fireEvent` only when needed.
- Assert visible behavior, not implementation details.
- Keep one behavior per test whenever possible.

## Core Patterns

### 1) Rendering and Accessible Queries

```tsx
import { render, screen } from '@testing-library/react';
import { LoginButton } from './LoginButton';

test('shows login action', () => {
	render(<LoginButton />);
	expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
});
```

### 2) User Interactions (Preferred)

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SignInForm } from './SignInForm';

test('submits email and password', async () => {
	const onSubmit = jest.fn();
	render(<SignInForm onSubmit={onSubmit} />);

	await userEvent.type(screen.getByLabelText(/email/i), 'a@site.com');
	await userEvent.type(screen.getByLabelText(/password/i), 'password123');
	await userEvent.click(screen.getByRole('button', { name: /continue/i }));

	expect(onSubmit).toHaveBeenCalledWith({ email: 'a@site.com', password: 'password123' });
});
```

### 3) Async UI States (Loading -> Success/Error)

```tsx
import { render, screen, waitFor } from '@testing-library/react';
import { ProfilePanel } from './ProfilePanel';

test('renders profile data after load', async () => {
	render(<ProfilePanel userId="42" />);

	expect(screen.getByText(/loading/i)).toBeInTheDocument();
	expect(await screen.findByText(/welcome, maria/i)).toBeInTheDocument();

	await waitFor(() => {
		expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
	});
});
```

### 4) Mocks: Functions, Modules, and Network

```tsx
// Function mock
const onSuccess = jest.fn();

// Module mock
jest.mock('../api/authClient', () => ({
	signIn: jest.fn(),
}));
```

Recommendations:
- Mock external boundaries (network, storage, analytics), not local logic.
- Prefer MSW for request-level behavior in integration tests.
- Reset mocks between tests when state leakage is possible.

### 5) React 18 `act` Usage

In React 18, most `render`, `userEvent`, and async Testing Library helpers are already wrapped.
Use explicit `act` for manual state transitions outside these helpers.

```tsx
import { act } from 'react';

act(() => {
	// manual state transition only when needed
});
```

### 6) Timers and Debounced Behavior

```tsx
jest.useFakeTimers();

test('fires search after debounce', () => {
	// trigger input change here
	jest.advanceTimersByTime(300);
	// assert debounced result
});

afterEach(() => {
	jest.useRealTimers();
});
```

### 7) Custom Render with Providers

```tsx
import { render } from '@testing-library/react';
import { AppProviders } from './test-utils/AppProviders';

export function renderWithProviders(ui: React.ReactElement) {
	return render(ui, { wrapper: AppProviders });
}
```

### 8) Hook Testing (React 18)

```tsx
import { renderHook } from '@testing-library/react';
import { useAuthRedirect } from './useAuthRedirect';

test('returns dashboard route for authenticated user', () => {
	const { result } = renderHook(() => useAuthRedirect({ isAuthenticated: true }));
	expect(result.current).toBe('/dashboard');
});
```

## Test Design Checklist

- Does the test assert user-visible behavior?
- Are queries semantic and accessible-first?
- Are success, loading, empty, and error states covered?
- Are external boundaries mocked at the right level?
- Is async behavior awaited correctly (`findBy`, `waitFor`)?
- Is cleanup/isolation ensured between tests?
- Ask always if you need more context and ask for check my understanding of the implementation

## Extension Slots (For Future Skills)

### A) Project-Specific Conventions
- Add naming conventions for test files.
- Add required helper utilities and wrapper setup.
- Add approved mock boundaries per app (container/auth/marketing/dashboard).

### B) Coverage Gates
- Add minimum thresholds by app/layer.
- Add critical-path test requirements.

### C) Performance Test Hooks
- Add render-count assertions for sensitive components.
- Add bundle/route-level performance smoke checks.

### D) Security Test Add-ons
- Add XSS-focused render tests.
- Add auth and permission boundary tests.

### E) CI Integration
- Add CI commands and failure triage flow.
- Add flaky-test quarantine policy.

## Usage Prompt Template

Use react18-jest-feature-patterns for [feature or bug].
Apps involved: [container/auth/marketing/dashboard].
Focus: [component behavior | async states | mocks | hooks | timers].
Constraints: [coverage, CI, performance, a11y].
Expected output: test cases, file targets, and rationale.