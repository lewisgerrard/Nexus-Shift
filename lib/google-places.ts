"use server"

interface PlaceResult {
  formatted_address: string
  place_id: string
}

interface PlacesResponse {
  predictions: PlaceResult[]
  status: string
}

export async function searchPlaces(input: string): Promise<PlaceResult[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY // Server-side only, no NEXT_PUBLIC_

  if (!apiKey || input.length < 3) {
    return []
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
        input,
      )}&types=address&components=country:us|country:ca|country:gb&key=${apiKey}`,
    )

    if (!response.ok) {
      console.error("Google Places API error:", response.status)
      return []
    }

    const data: PlacesResponse = await response.json()

    if (data.status !== "OK" && data.status !== "ZERO_RESULTS") {
      console.error("Google Places API status:", data.status)
      return []
    }

    return data.predictions || []
  } catch (error) {
    console.error("Error fetching places:", error)
    return []
  }
}

export async function getPlaceDetails(placeId: string): Promise<string | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY

  if (!apiKey) {
    return null
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=formatted_address&key=${apiKey}`,
    )

    if (!response.ok) {
      return null
    }

    const data = await response.json()
    return data.result?.formatted_address || null
  } catch (error) {
    console.error("Error fetching place details:", error)
    return null
  }
}
