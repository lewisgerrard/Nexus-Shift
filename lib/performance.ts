/**
 * Performance monitoring utilities
 */

export function measurePageLoad() {
  if (typeof window === "undefined") return

  window.addEventListener("load", () => {
    // Measure Core Web Vitals
    if ("performance" in window) {
      const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming

      const metrics = {
        // First Contentful Paint
        fcp: performance.getEntriesByName("first-contentful-paint")[0]?.startTime || 0,
        // Largest Contentful Paint
        lcp: 0, // Would be measured via PerformanceObserver
        // Cumulative Layout Shift
        cls: 0, // Would be measured via PerformanceObserver
        // First Input Delay
        fid: 0, // Would be measured via PerformanceObserver
        // Time to Interactive
        tti: navigation.loadEventEnd - navigation.fetchStart,
        // Total Load Time
        loadTime: navigation.loadEventEnd - navigation.navigationStart,
      }

      // Log metrics in development
      if (process.env.NODE_ENV === "development") {
        console.table(metrics)
      }

      // In production, you might send these to an analytics service
      // analytics.track('page_performance', metrics);
    }
  })
}

/**
 * Preload critical resources
 */
export function preloadCriticalResources() {
  if (typeof window === "undefined") return

  // Preload critical fonts
  const fontLink = document.createElement("link")
  fontLink.rel = "preload"
  fontLink.href = "/fonts/inter-var.woff2" // Adjust path as needed
  fontLink.as = "font"
  fontLink.type = "font/woff2"
  fontLink.crossOrigin = "anonymous"
  document.head.appendChild(fontLink)

  // Preload hero image
  const heroImageLink = document.createElement("link")
  heroImageLink.rel = "preload"
  heroImageLink.href = "/images/hero-bg.webp" // Adjust path as needed
  heroImageLink.as = "image"
  document.head.appendChild(heroImageLink)
}
