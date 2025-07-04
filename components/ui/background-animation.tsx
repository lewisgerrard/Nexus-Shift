"use client"

export function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
      {/* Floating Data Particles */}
      <div className="absolute top-10 left-5 w-1 h-1 bg-secondary rounded-full animate-ping opacity-40" />
      <div className="absolute top-20 right-10 w-2 h-2 bg-primary rounded-full animate-pulse opacity-30" />
      <div className="absolute top-40 left-1/4 w-1 h-1 bg-secondary rounded-full animate-bounce opacity-50" />
      <div className="absolute top-60 right-1/3 w-2 h-2 bg-primary/60 rounded-full animate-ping opacity-40" />
      <div className="absolute bottom-40 left-10 w-1 h-1 bg-secondary rounded-full animate-pulse opacity-30" />
      <div className="absolute bottom-60 right-20 w-2 h-2 bg-primary rounded-full animate-bounce opacity-40" />

      {/* Continuous Circuit Lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <pattern id="tech-grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M0 5h2.5v-2.5h2.5v2.5h2.5" stroke="#00C2CB" strokeWidth="0.2" fill="none">
              <animate attributeName="stroke-dasharray" values="0,10;10,0;0,10" dur="4s" repeatCount="indefinite" />
            </path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#tech-grid)" />
      </svg>

      {/* Floating Tech Elements */}
      <div
        className="absolute top-1/4 left-5 w-8 h-8 border border-secondary/20 rounded rotate-45 animate-spin opacity-20"
        style={{ animationDuration: "20s" }}
      />
      <div className="absolute top-3/4 right-5 w-6 h-6 border border-primary/20 rounded-full animate-pulse opacity-30" />
      <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-secondary/10 rounded rotate-12 animate-bounce opacity-25" />
    </div>
  )
}
