# DECISIONS.md — Architecture Decision Records

## D-001: Package Manager
**Date:** 2026-08-29
**Decision:** Use npm instead of pnpm
**Reason:** npm is available and working. Can switch to pnpm later if needed.

## D-002: Font Loading
**Date:** 2026-08-29
**Decision:** Use next/font/google for all fonts
**Reason:** Automatic self-hosting, display: swap, subset optimization.

## D-003: State Management
**Date:** 2026-08-29
**Decision:** No client state management library needed
**Reason:** Site is primarily static content. Server components handle data.
