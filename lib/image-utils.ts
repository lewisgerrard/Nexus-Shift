/**
 * Image optimization utilities for better performance
 */

export interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

/**
 * Generate WebP fallback sources for better compression
 */
export function generateImageSources(src: string, width?: number, height?: number) {
  const baseUrl = src.startsWith("/") ? src : `/${src}`

  // For placeholder images, return as-is
  if (baseUrl.includes("placeholder.svg")) {
    return {
      webp: baseUrl,
      fallback: baseUrl,
    }
  }

  // For actual images, we can add WebP conversion logic here
  // This would typically be handled by your image CDN or build process
  const webpSrc = baseUrl.replace(/\.(jpg|jpeg|png)$/i, ".webp")

  return {
    webp: webpSrc,
    fallback: baseUrl,
  }
}

/**
 * Get responsive image sizes for different breakpoints
 */
export function getResponsiveSizes(breakpoints?: {
  mobile?: number
  tablet?: number
  desktop?: number
}) {
  const { mobile = 100, tablet = 50, desktop = 33 } = breakpoints || {}

  return `(max-width: 768px) ${mobile}vw, (max-width: 1024px) ${tablet}vw, ${desktop}vw`
}

/**
 * Image loading priorities based on position
 */
export function getImagePriority(position: "hero" | "above-fold" | "below-fold"): boolean {
  return position === "hero" || position === "above-fold"
}
