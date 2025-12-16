/**
 * Data formatting utilities
 */

export function sanitizeText(text: string | null | undefined): string | undefined {
  if (!text) return undefined;

  return text
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&nbsp;/g, ' ') // Replace &nbsp; with space
    .replace(/&amp;/g, '&') // Decode &amp;
    .replace(/&lt;/g, '<') // Decode &lt;
    .replace(/&gt;/g, '>') // Decode &gt;
    .replace(/&quot;/g, '"') // Decode &quot;
    .replace(/&#39;/g, "'") // Decode &#39;
    .replace(/\s+/g, ' ') // Collapse multiple spaces
    .trim();
}

export function titleCase(text: string | null | undefined): string | undefined {
  if (!text) return undefined;

  const sanitized = sanitizeText(text);
  if (!sanitized) return undefined;

  return sanitized
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
