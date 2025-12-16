/**
 * Utility functions
 */

export function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ');
}

export function truncate(text: string, length: number = 100): string {
  return text.length > length ? text.substring(0, length) + '...' : text;
}
