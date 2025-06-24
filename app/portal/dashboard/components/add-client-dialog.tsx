"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Plus, Loader2 } from "lucide-react"
import { addClient } from "../actions"

export function AddClientDialog() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleOpenDialog = () => {
    console.log("🔄 Opening add client dialog...")
    setOpen(true)
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
      console.log("📝 Form data:", Object.fromEntries(formData))

      if (isPreviewEnvironment) {
        // In preview, just show demo message
        setTimeout(() => {
          alert("📋 Preview Mode: Client would be added to your real database when deployed!")
          setOpen(false)
          setLoading(false)
        }, 1000)
      } else {
        // In production, actually add the client
        console.log("🔄 Adding client to database...")

        // Map the simplified form fields to the database fields
        const clientData = new FormData()
        clientData.append("contactName", formData.get("name") as string)
        clientData.append("companyName", formData.get("name") as string)
        clientData.append("email", "") // Empty for simplified form
        clientData.append("phone", "") // Empty for simplified form
        clientData.append("address", formData.get("address") as string)
        clientData.append("clientType", formData.get("size") as string) // Map size to clientType for database
        clientData.append("status", formData.get("status") as string)
        clientData.append("notes", "") // Empty for simplified form

        const result = await addClient(clientData)

        if (result.success) {
          console.log("✅ Client added successfully")
          alert("✅ Client added successfully!")
          setOpen(false)
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
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Textarea id="address" name="address" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="size">Size</Label>
              <Select name="size" required>
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
              <Label htmlFor="status">Status</Label>
              <Select name="status" required>
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
