/**
 * Auto-calculates the current academic session year.
 * Indian schools: session starts June, so:
 *   - June 2026 onward → "2026-27"
 *   - Before June 2026 → "2025-26"
 */

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth(); // 0-indexed: 0=Jan, 5=June

// If June (5) or later → new session starts
const startYear = month >= 5 ? year : year - 1;
const endYear = (startYear + 1).toString().slice(-2); // last 2 digits

export const SESSION_YEAR = `${startYear}-${endYear}`;
// e.g. "2026-27"