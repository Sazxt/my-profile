/**
 * Utility function to handle asset paths with base path support
 * @param path - The asset path (e.g., "/next.svg")
 * @returns The full path with base path prefix
 */
export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return `${basePath}${path}`;
}

/**
 * Get the base path from environment variables
 * @returns The base path string
 */
export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
} 