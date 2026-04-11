// Stub for @sentry/electron/renderer in browser context.
// The Outline Manager app imports @sentry/electron which is not available
// when running as a web app. This stub provides no-op implementations.

export function init(_options?: unknown): void {}

export function captureEvent(_event?: unknown): void {}

export function captureException(_error?: unknown): void {}

export function captureMessage(_message?: string): void {}
