"use client"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Edit, Loader2 } from "lucide-react"
import { updateClient } from "../actions"

interface Client {
  id: number
  contact_name: string
  company_name: string
  email: string
  phone: string
  address: string
  client_type: string
  status: string
  notes: string
  created_at: string
  updated_at?: string
}

interface EditClientDialogProps {
  client: Client
}

export function EditClientDialog({ client }: EditClientDialogProps) {
  const [open, setOpen] = useState(false)
  const [isPending, startTransition] = useTransition()

  console.log("EditClientDialog rendered with client:", client)

  const handleSubmit = async (formData: FormData) => {
    console.log("Form submitted with data:", Object.fromEntries(formData))

    startTransition(async () => {
      try {
        const result = await updateClient(client.id, formData)
        console.log("Update result:", result)

        if (result.success) {
          setOpen(false)
          // Refresh the page to show updated data
          window.location.reload()
        }
      } catch (error) {
        console.error("Error updating client:", error)
      }
    })
  }

  const handleClick = () => {
    console.log("Edit button clicked")
    setOpen(true)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={handleClick}>
          <Edit className="h-4 w-4 mr-2" />
          Edit Client
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-primary">Edit Client</DialogTitle>
        </DialogHeader>
        <form action={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="contactName" className="text-primary">
                Contact Name
              </Label>
              <Input id="contactName" name="contactName" defaultValue={client.contact_name} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="companyName" className="text-primary">
                Company Name
              </Label>
              <Input id="companyName" name="companyName" defaultValue={client.company_name} required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-primary">
              Email
            </Label>
            <Input id="email" name="email" type="email" defaultValue={client.email} required />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-primary">
                Phone
              </Label>
              <Input id="phone" name="phone" defaultValue={client.phone} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="clientType" className="text-primary">
                Client Type
              </Label>
              <Select name="clientType" defaultValue={client.client_type} required>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Technology">Technology</SelectItem>
                  <SelectItem value="Consulting">Consulting</SelectItem>
                  <SelectItem value="Retail">Retail</SelectItem>
                  <SelectItem value="Finance">Finance</SelectItem>
                  <SelectItem value="Healthcare">Healthcare</SelectItem>
                  <SelectItem value="Web Development">Web Development</SelectItem>
                  <SelectItem value="Mobile App">Mobile App</SelectItem>
                  <SelectItem value="Design">Design</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="status" className="text-primary">
              Status
            </Label>
            <Select name="status" defaultValue={client.status} required>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="text-primary">
              Address
            </Label>
            <Textarea id="address" name="address" defaultValue={client.address} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes" className="text-primary">
              Notes
            </Label>
            <Textarea
              id="notes"
              name="notes"
              defaultValue={client.notes}
              placeholder="Additional notes about the client..."
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isPending} className="bg-secondary hover:bg-secondary/90 text-primary">
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                "Update Client"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
