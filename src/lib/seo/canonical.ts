/**
 * Utility functions for generating canonical URLs
 */

/**
 * Generate canonical URL from a file path
 * @param filePath - The file path relative to src/app (e.g., "business/break-even-calculator/page.tsx")
 * @returns The canonical URL path (e.g., "/business/break-even-calculator")
 */
export function getCanonicalFromPath(filePath: string): string {
  // Remove "page.tsx" from the end
  const withoutPage = filePath.replace(/\/page\.tsx$/, '');
  
  // Convert to URL path
  return `/${withoutPage}`;
}

/**
 * Generate canonical URL metadata object
 * @param path - The URL path (e.g., "/business/break-even-calculator")
 * @returns The alternates.canonical metadata object
 */
export function generateCanonical(path: string) {
  return {
    alternates: {
      canonical: path,
    },
  };
}
