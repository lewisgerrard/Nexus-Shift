"use client"

import Image from "next/image"
import { type OptimizedImageProps, generateImageSources, getImagePriority } from "@/lib/image-utils"

interface ExtendedImageProps extends OptimizedImageProps {
  position?: "hero" | "above-fold" | "below-fold"
  responsive?: boolean
}

export function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
  position = "below-fold",
  responsive = true,
  priority: explicitPriority,
  ...props
}: ExtendedImageProps) {
  const sources = generateImageSources(src, width, height)
  const priority = explicitPriority ?? getImagePriority(position)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={sources.fallback || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="object-cover w-full h-full"
        sizes={responsive ? "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" : undefined}
        {...props}
      />
    </div>
  )
}
