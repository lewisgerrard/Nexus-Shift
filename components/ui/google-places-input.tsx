"use client"

import type React from "react"
import { useEffect, useRef, useState, useCallback } from "react"
import { Input } from "@/components/ui/input"
import { searchPlaces, getPlaceDetails } from "@/lib/google-places"

interface GooglePlacesInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
  disabled?: boolean
}

interface PlaceResult {
  formatted_address: string
  place_id: string
}

export function GooglePlacesInput({
  value,
  onChange,
  placeholder = "Enter address",
  className,
  disabled = false,
}: GooglePlacesInputProps) {
  const [suggestions, setSuggestions] = useState<PlaceResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)
  const debounceRef = useRef<NodeJS.Timeout>()

  const fetchSuggestions = useCallback(async (input: string) => {
    if (input.length < 3) {
      setSuggestions([])
      setShowSuggestions(false)
      return
    }

    setIsLoading(true)
    try {
      const results = await searchPlaces(input)
      console.log("Fetched suggestions:", results) // Debug log
      setSuggestions(results)
      setShowSuggestions(results.length > 0)
      setSelectedIndex(-1)
    } catch (error) {
      console.error("Error fetching suggestions:", error)
      setSuggestions([])
      setShowSuggestions(false)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const debouncedFetchSuggestions = useCallback(
    (input: string) => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
      debounceRef.current = setTimeout(() => {
        fetchSuggestions(input)
      }, 300)
    },
    [fetchSuggestions],
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    onChange(newValue)
    debouncedFetchSuggestions(newValue)
  }

  const handleSuggestionClick = async (suggestion: PlaceResult) => {
    console.log("Clicked suggestion:", suggestion) // Debug log
    setIsLoading(true)
    try {
      const details = await getPlaceDetails(suggestion.place_id)
      onChange(details || suggestion.formatted_address)
    } catch (error) {
      onChange(suggestion.formatted_address)
    } finally {
      setShowSuggestions(false)
      setSuggestions([])
      setIsLoading(false)
      inputRef.current?.focus()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions || suggestions.length === 0) return

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev))
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
        break
      case "Enter":
        e.preventDefault()
        if (selectedIndex >= 0 && selectedIndex < suggestions.length) {
          handleSuggestionClick(suggestions[selectedIndex])
        }
        break
      case "Escape":
        setShowSuggestions(false)
        setSelectedIndex(-1)
        break
    }
  }

  const handleBlur = () => {
    // Delay hiding suggestions to allow for clicks
    setTimeout(() => {
      setShowSuggestions(false)
      setSelectedIndex(-1)
    }, 200)
  }

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current)
      }
    }
  }, [])

  return (
    <div className="relative">
      <Input
        ref={inputRef}
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={className}
        disabled={disabled}
        autoComplete="off"
      />

      {isLoading && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 z-[10000]">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#00C2CB]"></div>
        </div>
      )}

      {showSuggestions && suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          style={{
            position: "absolute",
            top: "100%",
            left: "0",
            right: "0",
            zIndex: 10000,
            marginTop: "4px",
            backgroundColor: "#ffffff",
            border: "2px solid #d1d5db",
            borderRadius: "6px",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            maxHeight: "240px",
            overflowY: "auto",
          }}
        >
          {suggestions.map((suggestion, index) => (
            <div
              key={suggestion.place_id}
              onClick={() => handleSuggestionClick(suggestion)}
              onMouseEnter={() => setSelectedIndex(index)}
              onMouseLeave={() => setSelectedIndex(-1)}
              style={{
                padding: "12px 16px",
                cursor: "pointer",
                backgroundColor: index === selectedIndex ? "#00C2CB" : "#ffffff",
                borderBottom: index < suggestions.length - 1 ? "1px solid #e5e7eb" : "none",
                fontSize: "14px",
                fontWeight: "500",
                lineHeight: "1.25rem",
                color: index === selectedIndex ? "#ffffff" : "#000000", // Changed to pure black
                fontFamily: "system-ui, -apple-system, sans-serif", // Explicit font family
                textAlign: "left" as const,
                whiteSpace: "nowrap" as const,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              <span
                style={{
                  color: index === selectedIndex ? "#ffffff" : "#000000",
                  display: "block",
                  width: "100%",
                }}
              >
                {suggestion.formatted_address}
              </span>
            </div>
          ))}

          {/* Debug info - remove this after testing */}
          <div
            style={{
              padding: "8px 16px",
              backgroundColor: "#f3f4f6",
              borderTop: "1px solid #e5e7eb",
              fontSize: "12px",
              color: "#000000",
              fontFamily: "monospace",
            }}
          >
            Debug: {suggestions.length} suggestions loaded
          </div>
        </div>
      )}
    </div>
  )
}
