"use client"

import { useState, useTransition } from "react"
import { notFound } from "next/navigation"
import { ArrowLeft, Mail, Phone, MapPin, Edit, Save, X } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { updateClient } from "../../actions"

// Demo client data - in a real app, this would come from a database
const demoClients = [
  {
    id: 1,
    contact_name: "Sarah Johnson",
    company_name: "TechStart Solutions",
    email: "sarah@techstart.com",
    phone: "+1 (555) 123-4567",
    address: "123 Innovation Drive, San Francisco, CA 94105",
    client_type: "Technology",
    status: "active",
    notes: "Looking to expand their digital presence with a modern website and mobile app.",
    created_at: "2024-01-15",
    updated_at: "2024-01-15",
  },
  {
    id: 2,
    contact_name: "Michael Chen",
    company_name: "Green Earth Consulting",
    email: "michael@greenearth.com",
    phone: "+1 (555) 987-6543",
    address: "456 Eco Street, Portland, OR 97201",
    client_type: "Consulting",
    status: "pending",
    notes: "Environmental consulting firm needing a complete brand overhaul.",
    created_at: "2024-02-03",
    updated_at: "2024-02-03",
  },
  {
    id: 3,
    contact_name: "Emily Rodriguez",
    company_name: "Artisan Bakery Co.",
    email: "emily@artisanbakery.com",
    phone: "+1 (555) 456-7890",
    address: "789 Main Street, Austin, TX 73301",
    client_type: "Retail",
    status: "active",
    notes: "Local bakery chain looking to establish online ordering system.",
    created_at: "2024-01-28",
    updated_at: "2024-01-28",
  },
  {
    id: 4,
    contact_name: "David Kim",
    company_name: "FinanceFlow Inc.",
    email: "david@financeflow.com",
    phone: "+1 (555) 321-0987",
    address: "321 Business Blvd, New York, NY 10001",
    client_type: "Finance",
    status: "inactive",
    notes: "Financial services company requiring compliance-focused web solutions.",
    created_at: "2023-12-10",
    updated_at: "2023-12-10",
  },
  {
    id: 5,
    contact_name: "Lisa Thompson",
    company_name: "HealthWise Clinic",
    email: "lisa@healthwise.com",
    phone: "+1 (555) 654-3210",
    address: "654 Medical Center Dr, Chicago, IL 60601",
    client_type: "Healthcare",
    status: "active",
    notes: "Medical practice needing patient portal and appointment scheduling system.",
    created_at: "2024-02-20",
    updated_at: "2024-02-20",
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
  const [formData, setFormData] = useState({
    contact_name: client?.contact_name || "",
    company_name: client?.company_name || "",
    email: client?.email || "",
    phone: client?.phone || "",
    address: client?.address || "",
    client_type: client?.client_type || "",
    status: client?.status || "",
    notes: client?.notes || "",
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
      contact_name: client.contact_name,
      company_name: client.company_name,
      email: client.email,
      phone: client.phone,
      address: client.address,
      client_type: client.client_type,
      status: client.status,
      notes: client.notes,
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

  return (
    <div className="flex-1 space-y-8 p-8">
      {/* Header Section */}
      <div className="space-y-6">
        {/* Back Button */}
        <Link
          href="/portal/dashboard"
          className="inline-flex items-center text-sm text-gray-600 hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Link>

        {/* Client Header */}
        <div className="space-y-2">
          {isEditing ? (
            <div className="space-y-3">
              <Input
                value={formData.contact_name}
                onChange={(e) => handleInputChange("contact_name", e.target.value)}
                className="text-4xl font-bold text-primary border-0 p-0 h-auto bg-transparent shadow-none"
                style={{ fontSize: "2.25rem", lineHeight: "2.5rem" }}
              />
              <Input
                value={formData.company_name}
                onChange={(e) => handleInputChange("company_name", e.target.value)}
                className="text-xl text-gray-600 border-0 p-0 h-auto bg-transparent shadow-none"
                style={{ fontSize: "1.25rem", lineHeight: "1.75rem" }}
              />
            </div>
          ) : (
            <div>
              <h1 className="text-4xl font-bold text-primary">{formData.contact_name}</h1>
              <p className="text-xl text-gray-600 mt-2">{formData.company_name}</p>
            </div>
          )}
        </div>
      </div>

      {/* Client Information Card */}
      <Card className="shadow-sm">
        <CardHeader className="pb-6">
          <div className="flex items-center justify-between">
            <CardTitle className="text-2xl text-primary">Client Information</CardTitle>
            <div className="flex space-x-3">
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
          </div>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-600 mb-1">Email Address</p>
                  {isEditing ? (
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="text-base"
                    />
                  ) : (
                    <a
                      href={`mailto:${formData.email}`}
                      className="text-base text-secondary hover:text-secondary/80 transition-colors break-all"
                    >
                      {formData.email}
                    </a>
                  )}
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-600 mb-1">Phone Number</p>
                  {isEditing ? (
                    <Input
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="text-base"
                    />
                  ) : (
                    <a
                      href={`tel:${formData.phone}`}
                      className="text-base text-secondary hover:text-secondary/80 transition-colors"
                    >
                      {formData.phone}
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Status & Type */}
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-gray-600 mb-3">Status</p>
                {isEditing ? (
                  <Select value={formData.status} onValueChange={(value) => handleInputChange("status", value)}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                    </SelectContent>
                  </Select>
                ) : (
                  <Badge className={`${getStatusColor(formData.status)} text-sm px-3 py-1`}>
                    {formData.status.charAt(0).toUpperCase() + formData.status.slice(1)}
                  </Badge>
                )}
              </div>

              <div>
                <p className="text-sm font-medium text-gray-600 mb-3">Client Type</p>
                {isEditing ? (
                  <Select
                    value={formData.client_type}
                    onValueChange={(value) => handleInputChange("client_type", value)}
                  >
                    <SelectTrigger className="w-full">
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
                  <Badge variant="outline" className="border-secondary text-secondary text-sm px-3 py-1">
                    {formData.client_type}
                  </Badge>
                )}
              </div>
            </div>
          </div>

          {/* Address Section */}
          <div className="pt-6 border-t border-gray-100">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                <MapPin className="h-5 w-5 text-secondary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-600 mb-2">Address</p>
                {isEditing ? (
                  <Textarea
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    rows={2}
                    className="text-base"
                  />
                ) : (
                  <p className="text-base text-gray-700 leading-relaxed">{formData.address}</p>
                )}
              </div>
            </div>
          </div>

          {/* Notes Section */}
          <div className="pt-6 border-t border-gray-100">
            <div className="space-y-3">
              <p className="text-sm font-medium text-gray-600">Notes</p>
              {isEditing ? (
                <Textarea
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                  rows={4}
                  placeholder="Additional notes about the client..."
                  className="text-base"
                />
              ) : (
                <p className="text-base text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">{formData.notes}</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
