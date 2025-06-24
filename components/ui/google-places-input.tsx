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
          className="absolute w-full mt-1 rounded-md max-h-60 overflow-auto"
          style={{
            zIndex: 10000,
            backgroundColor: "#ffffff",
            border: "2px solid #d1d5db",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          }}
        >
          {suggestions.map((suggestion, index) => (
            <div
              key={suggestion.place_id}
              className="px-4 py-3 cursor-pointer border-b last:border-b-0"
              onClick={() => handleSuggestionClick(suggestion)}
              style={{
                backgroundColor: index === selectedIndex ? "#00C2CB" : "#ffffff",
                color: index === selectedIndex ? "#ffffff" : "#0B1F3A",
                borderBottomColor: "#e5e7eb",
                fontWeight: "500",
                fontSize: "14px",
                lineHeight: "1.25rem",
              }}
              onMouseEnter={() => setSelectedIndex(index)}
              onMouseLeave={() => setSelectedIndex(-1)}
            >
              {suggestion.formatted_address}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
