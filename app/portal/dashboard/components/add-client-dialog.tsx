"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { GooglePlacesInput } from "@/components/ui/google-places-input"
import { Plus, Loader2 } from "lucide-react"
import { addClient } from "../actions"

export function AddClientDialog() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [address, setAddress] = useState("")

  const handleOpenDialog = () => {
    console.log("🔄 Opening add client dialog...")
    setOpen(true)
  }

  // Add this new debugging function
  const debugFormData = () => {
    const form = document.querySelector("form") as HTMLFormElement
    if (form) {
      const formData = new FormData(form)
      console.log("🔍 Current form data:")
      for (const [key, value] of formData.entries()) {
        console.log(`- ${key}:`, value, `(type: ${typeof value})`)
      }
      console.log("Address state:", address)
    }
  }

  // Check if we're in preview environment
  const isPreviewEnvironment =
    typeof window !== "undefined" &&
    (window.location.hostname.includes("v0.dev") || window.location.hostname.includes("localhost"))

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      const formData = new FormData(e.currentTarget)

      // Extract and validate form data
      const name = formData.get("name") as string
      const size = formData.get("size") as string
      const status = formData.get("status") as string

      console.log("📝 Form data extracted:", { name, size, address, status })

      // Client-side validation
      if (!name?.trim()) {
        alert("❌ Name is required")
        setLoading(false)
        return
      }
      if (!size?.trim()) {
        alert("❌ Size is required")
        setLoading(false)
        return
      }
      if (!status?.trim()) {
        alert("❌ Status is required")
        setLoading(false)
        return
      }

      if (isPreviewEnvironment) {
        // In preview, just show demo message
        setTimeout(() => {
          alert("📋 Preview Mode: Client would be added to your real database when deployed!")
          setOpen(false)
          setLoading(false)
          // Reset form
          setAddress("")
        }, 1000)
      } else {
        // In production, actually add the client
        console.log("🔄 Adding client to database...")

        // Create properly formatted FormData for the server action
        const serverFormData = new FormData()
        serverFormData.append("name", name.trim())
        serverFormData.append("size", size.trim())
        serverFormData.append("address", address.trim())
        serverFormData.append("status", status.trim())

        const result = await addClient(serverFormData)

        if (result.success) {
          console.log("✅ Client added successfully")
          alert("✅ Client added successfully!")
          setOpen(false)
          // Reset form
          setAddress("")
          // Refresh the page to show the new client
          window.location.reload()
        } else {
          console.error("❌ Failed to add client:", result.message)
          alert("❌ Failed to add client: " + (result.message || "Unknown error"))
        }
        setLoading(false)
      }
    } catch (error) {
      console.error("❌ Error:", error)
      alert("❌ Error adding client. Please try again.")
      setLoading(false)
    }
  }

  return (
    <>
      <Button onClick={handleOpenDialog} className="bg-secondary hover:bg-secondary/90 text-primary">
        <Plus className="h-4 w-4 mr-2" />
        Add Client
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle className="text-primary">Add New Client</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Enter client/company name"
                onChange={(e) => console.log("Name changed:", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <GooglePlacesInput
                value={address}
                onChange={setAddress}
                placeholder="Search for address..."
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="size">Size *</Label>
              <Select name="size" required onValueChange={(value) => console.log("Size changed:", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Micro (1–10 employees)">Micro (1–10 employees)</SelectItem>
                  <SelectItem value="Small (11–50 employees)">Small (11–50 employees)</SelectItem>
                  <SelectItem value="Medium (51–250 employees)">Medium (51–250 employees)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status *</Label>
              <Select name="status" required onValueChange={(value) => console.log("Status changed:", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="on-hold">On Hold</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-end space-x-2 pt-4">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button type="button" variant="outline" onClick={debugFormData} className="text-xs">
                Debug Form
              </Button>
              <Button type="submit" disabled={loading} className="bg-secondary hover:bg-secondary/90 text-primary">
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Adding...
                  </>
                ) : (
                  "Add Client"
                )}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
