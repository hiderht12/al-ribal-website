export const YEARS_OF_EXPERIENCE = 20;

/**
 * Installations counter: starts at 5000 on launch day and climbs by a
 * fixed amount every day after, computed from the calendar date so every
 * visitor (and the server) sees the same number without needing a
 * redeploy or client-side polling. E.g. launch day = 5000, next day =
 * 5002, the day after = 5004, and so on.
 */
const COUNTER_LAUNCH_DATE = new Date("2026-09-07T00:00:00Z");
const COUNTER_BASE_COUNT = 5000;
const COUNTER_DAILY_INCREMENT = 2;
const MS_PER_DAY = 86_400_000;

export function getSuccessfulInstallations(now: Date = new Date()): number {
  const daysSinceLaunch = Math.max(
    0,
    Math.floor((now.getTime() - COUNTER_LAUNCH_DATE.getTime()) / MS_PER_DAY),
  );
  return COUNTER_BASE_COUNT + daysSinceLaunch * COUNTER_DAILY_INCREMENT;
}

export function formatInstallations(count: number): string {
  return String(count);
}
