"use client"

import { useState, useTransition } from "react"
import { notFound } from "next/navigation"
import { MapPin, Edit, Save, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { updateClient } from "../../actions"
import { AddContactDialog } from "../../components/add-contact-dialog"
import { EditContactDialog } from "../../components/edit-contact-dialog"

// Update the demo clients data structure
const demoClients = [
  {
    id: 1,
    name: "TechStart Solutions",
    address: "123 Innovation Drive, San Francisco, CA 94105",
    business_type: "Technology",
    status: "active",
    contacts: [
      {
        id: 1,
        first_name: "Sarah",
        last_name: "Johnson",
        role: "CEO",
        email: "sarah@techstart.com",
        phone: "+1 (555) 123-4567",
      },
      {
        id: 2,
        first_name: "Mike",
        last_name: "Chen",
        role: "CTO",
        email: "mike@techstart.com",
        phone: "+1 (555) 123-4568",
      },
    ],
  },
  {
    id: 2,
    name: "Green Earth Consulting",
    address: "456 Eco Street, Portland, OR 97201",
    business_type: "Consulting",
    status: "pending",
    contacts: [
      {
        id: 3,
        first_name: "Michael",
        last_name: "Chen",
        role: "CEO",
        email: "michael@greenearth.com",
        phone: "+1 (555) 987-6543",
      },
    ],
  },
  {
    id: 3,
    name: "Artisan Bakery Co.",
    address: "789 Main Street, Austin, TX 73301",
    business_type: "Retail",
    status: "active",
    contacts: [
      {
        id: 4,
        first_name: "Emily",
        last_name: "Rodriguez",
        role: "Owner",
        email: "emily@artisanbakery.com",
        phone: "+1 (555) 456-7890",
      },
    ],
  },
  {
    id: 4,
    name: "FinanceFlow Inc.",
    address: "321 Business Blvd, New York, NY 10001",
    business_type: "Finance",
    status: "inactive",
    contacts: [
      {
        id: 5,
        first_name: "David",
        last_name: "Kim",
        role: "CFO",
        email: "david@financeflow.com",
        phone: "+1 (555) 321-0987",
      },
    ],
  },
  {
    id: 5,
    name: "HealthWise Clinic",
    address: "654 Medical Center Dr, Chicago, IL 60601",
    business_type: "Healthcare",
    status: "active",
    contacts: [
      {
        id: 6,
        first_name: "Lisa",
        last_name: "Thompson",
        role: "Director",
        email: "lisa@healthwise.com",
        phone: "+1 (555) 654-3210",
      },
    ],
  },
]

interface ClientDetailPageProps {
  params: {
    id: string
  }
}

export default function ClientDetailPage({ params }: ClientDetailPageProps) {
  const clientId = Number.parseInt(params.id)
  const client = demoClients.find((c) => c.id === clientId)

  const [isEditing, setIsEditing] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [refreshKey, setRefreshKey] = useState(0)

  // Update the form data state
  const [formData, setFormData] = useState({
    name: client?.name || "",
    address: client?.address || "",
    business_type: client?.business_type || "",
    status: client?.status || "",
  })

  if (!client) {
    notFound()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800 border-green-200"
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "inactive":
        return "bg-gray-100 text-gray-800 border-gray-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const handleEdit = () => {
    setIsEditing(true)
  }

  const handleCancel = () => {
    setIsEditing(false)
    // Reset form data to original values
    setFormData({
      name: client.name,
      address: client.address,
      business_type: client.business_type,
      status: client.status,
    })
  }

  const handleSave = () => {
    startTransition(async () => {
      try {
        const formDataObj = new FormData()
        Object.entries(formData).forEach(([key, value]) => {
          formDataObj.append(key, value)
        })

        const result = await updateClient(client.id, formDataObj)
        console.log("Update result:", result)

        if (result.success) {
          setIsEditing(false)
          // Refresh the page to show updated data
          window.location.reload()
        }
      } catch (error) {
        console.error("Error updating client:", error)
      }
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleContactChange = () => {
    // Force a re-render by updating the refresh key
    setRefreshKey((prev) => prev + 1)
    // In a real app, you would refetch the data here
    window.location.reload()
  }

  return (
    <div className="space-y-6" key={refreshKey}>
      {/* Header */}
      <div>
        {isEditing ? (
          <div className="space-y-2">
            <Input
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="text-3xl font-bold text-primary border-0 p-0 h-auto bg-transparent shadow-none"
              style={{ fontSize: "1.875rem", lineHeight: "2.25rem" }}
            />
          </div>
        ) : (
          <div>
            <h1 className="text-3xl font-bold text-primary">{formData.name}</h1>
          </div>
        )}
      </div>

      {/* Client Information Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-primary">Client Information</CardTitle>
          <div className="flex space-x-2">
            {isEditing ? (
              <>
                <Button variant="outline" size="sm" onClick={handleCancel} disabled={isPending}>
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
                <Button
                  size="sm"
                  onClick={handleSave}
                  disabled={isPending}
                  className="bg-secondary hover:bg-secondary/90 text-primary"
                >
                  <Save className="h-4 w-4 mr-2" />
                  {isPending ? "Saving..." : "Save"}
                </Button>
              </>
            ) : (
              <Button variant="outline" size="sm" onClick={handleEdit}>
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Basic Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3 pt-0">
                <MapPin className="h-5 w-5 text-secondary mt-1" />
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600">Address</p>
                  {isEditing ? (
                    <Textarea
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      className="mt-1"
                      rows={2}
                    />
                  ) : (
                    <p className="text-gray-700">{formData.address}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Status</p>
                {isEditing ? (
                  <Select value={formData.status} onValueChange={(value) => handleInputChange("status", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <Badge className={getStatusColor(formData.status)}>
                    {formData.status.charAt(0).toUpperCase() + formData.status.slice(1)}
                  </Badge>
                )}
              </div>

              <div>
                <p className="text-sm font-medium text-gray-600 mb-2">Business Type</p>
                {isEditing ? (
                  <Select
                    value={formData.business_type}
                    onValueChange={(value) => handleInputChange("business_type", value)}
                  >
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
                ) : (
                  <Badge variant="outline" className="border-secondary text-secondary">
                    {formData.business_type}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Contacts Card */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-primary">Contacts</CardTitle>
          <AddContactDialog clientId={client.id} onContactAdded={handleContactChange} />
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    First Name
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Name
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Phone
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {client.contacts.map((contact) => (
                  <tr key={contact.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {contact.first_name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.last_name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contact.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <a href={`mailto:${contact.email}`} className="text-secondary hover:underline">
                        {contact.email}
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <a href={`tel:${contact.phone}`} className="text-secondary hover:underline">
                        {contact.phone}
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <EditContactDialog contact={contact} onContactUpdated={handleContactChange} />
                    </td>
                  </tr>
                ))}
                {client.contacts.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                      No contacts found. Click "Add Contact" to get started.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
