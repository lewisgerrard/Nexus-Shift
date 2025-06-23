"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Edit } from "lucide-react"

interface Client {
  id?: number
  company_name: string
  contact_name: string
  email: string
  phone: string
  client_type: string
  status: string
  notes: string
}

interface ClientFormDialogProps {
  client?: Client
  onSave: (client: Client) => void
  trigger?: React.ReactNode
}

export function ClientFormDialog({ client, onSave, trigger }: ClientFormDialogProps) {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<Client>({
    company_name: client?.company_name || "",
    contact_name: client?.contact_name || "",
    email: client?.email || "",
    phone: client?.phone || "",
    client_type: client?.client_type || "Business",
    status: client?.status || "Active",
    notes: client?.notes || "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      let response
      if (client?.id) {
        // Update existing client
        response = await fetch(`/api/clients/${client.id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
      } else {
        // Create new client
        response = await fetch("/api/clients", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        })
      }

      if (response.ok) {
        const savedClient = await response.json()
        onSave(savedClient)
        setOpen(false)
        // Reset form for new clients
        if (!client?.id) {
          setFormData({
            company_name: "",
            contact_name: "",
            email: "",
            phone: "",
            client_type: "Business",
            status: "Active",
            notes: "",
          })
        }
      } else {
        console.error("Failed to save client")
      }
    } catch (error) {
      console.error("Error saving client:", error)
    } finally {
      setLoading(false)
    }
  }

  const defaultTrigger = client?.id ? (
    <Button size="sm" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10">
      <Edit className="w-3 h-3" />
    </Button>
  ) : (
    <Button className="bg-secondary hover:bg-secondary/90 text-primary">
      <Plus className="w-4 h-4 mr-2" />
      Add Client
    </Button>
  )

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger || defaultTrigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-primary">{client?.id ? "Edit Client" : "Add New Client"}</DialogTitle>
          <DialogDescription className="text-primary/70">
            {client?.id ? "Update client information" : "Enter the details for the new client"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="company_name" className="text-primary">
                Company Name *
              </Label>
              <Input
                id="company_name"
                value={formData.company_name}
                onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                required
                className="border-gray-300 focus:border-secondary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact_name" className="text-primary">
                Contact Name *
              </Label>
              <Input
                id="contact_name"
                value={formData.contact_name}
                onChange={(e) => setFormData({ ...formData, contact_name: e.target.value })}
                required
                className="border-gray-300 focus:border-secondary"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-primary">
                Email *
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border-gray-300 focus:border-secondary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-primary">
                Phone
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="border-gray-300 focus:border-secondary"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="client_type" className="text-primary">
                Client Type
              </Label>
              <Select
                value={formData.client_type}
                onValueChange={(value) => setFormData({ ...formData, client_type: value })}
              >
                <SelectTrigger className="border-gray-300 focus:border-secondary">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Business">Business</SelectItem>
                  <SelectItem value="Individual">Individual</SelectItem>
                  <SelectItem value="Non-Profit">Non-Profit</SelectItem>
                  <SelectItem value="Government">Government</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="status" className="text-primary">
                Status
              </Label>
              <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })}>
                <SelectTrigger className="border-gray-300 focus:border-secondary">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                  <SelectItem value="Pending">Pending</SelectItem>
                  <SelectItem value="Suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes" className="text-primary">
              Notes
            </Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={3}
              className="border-gray-300 focus:border-secondary"
              placeholder="Additional notes about this client..."
            />
          </div>
          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)} disabled={loading}>
              Cancel
            </Button>
            <Button type="submit" disabled={loading} className="bg-secondary hover:bg-secondary/90 text-primary">
              {loading ? "Saving..." : client?.id ? "Update Client" : "Add Client"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
