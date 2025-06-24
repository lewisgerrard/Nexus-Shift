"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Building2, Users, MapPin, Phone, Mail, Calendar, Edit, Trash2 } from "lucide-react"
import Link from "next/link"
import { EditClientDialog } from "../../components/edit-client-dialog"
import { AddContactDialog } from "../../components/add-contact-dialog"
import { EditContactDialog } from "../../components/edit-contact-dialog"
import { deleteClient, getContactsByClientId, deleteContact } from "../../actions"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

type Props = {
  params: { id: string }
}

export default function ClientDetailPage({ params }: Props) {
  const [client, setClient] = useState(null)
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [editingContact, setEditingContact] = useState(null)
  const router = useRouter()

  const fetchClient = async () => {
    try {
      console.log("Fetching client with ID:", params.id)

      const response = await fetch(`/api/clients/${params.id}`, {
        cache: "no-store",
      })

      console.log("Response status:", response.status)

      if (!response.ok) {
        setError("Client not found")
        return
      }

      const data = await response.json()
      console.log("API response data:", data)

      if (data.success && data.client) {
        setClient(data.client)
        console.log("Client set:", data.client)
      } else {
        console.error("API returned error:", data.error)
        setError(data.error || "Failed to load client")
      }
    } catch (error) {
      console.error("Error fetching client:", error)
      setError("Failed to load client")
    }
  }

  const fetchContacts = async () => {
    try {
      const result = await getContactsByClientId(Number.parseInt(params.id))
      if (result.success) {
        setContacts(result.contacts)
      }
    } catch (error) {
      console.error("Error fetching contacts:", error)
    }
  }

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      await Promise.all([fetchClient(), fetchContacts()])
      setLoading(false)
    }
    loadData()
  }, [params.id])

  const handleDeleteClient = async () => {
    try {
      const result = await deleteClient(Number.parseInt(params.id))
      if (result.success) {
        router.push("/portal/dashboard/clients")
      } else {
        alert("Failed to delete client: " + result.message)
      }
    } catch (error) {
      alert("Error deleting client")
    }
  }

  const handleDeleteContact = async (contactId: number) => {
    try {
      const result = await deleteContact(contactId)
      if (result.success) {
        fetchContacts() // Refresh contacts list
      } else {
        alert("Failed to delete contact: " + result.message)
      }
    } catch (error) {
      alert("Error deleting contact")
    }
  }

  const getStatusColor = (status: string) => {
    switch (status?.toLowerCase()) {
      case "active":
        return "bg-secondary text-primary"
      case "pending":
        return "bg-primary text-white"
      case "inactive":
        return "bg-gray-200 text-gray-800"
      default:
        return "bg-gray-200 text-gray-800"
    }
  }

  const getSizeColor = (size: string) => {
    switch (size?.toLowerCase()) {
      case "micro (1–10 employees)":
        return "bg-secondary/20 text-primary border border-secondary"
      case "small (11–50 employees)":
        return "bg-primary/20 text-primary border border-primary"
      case "medium (51–250 employees)":
        return "bg-secondary text-primary"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  // Debug logging
  console.log("Current state - loading:", loading, "client:", client, "error:", error)

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-primary px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-2">Loading Client...</h1>
            <p className="text-secondary text-lg">Please wait while we load the client details</p>
          </div>
        </div>
      </div>
    )
  }

  if (error || !client) {
    return (
      <div className="min-h-screen bg-white">
        <div className="bg-primary px-8 py-12">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-white mb-2">Client Not Found</h1>
            <p className="text-secondary text-lg">Error: {error || "The requested client could not be found"}</p>
            <p className="text-white text-sm mt-2">Debug: Client ID = {params.id}</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 py-12">
          <Button asChild className="bg-secondary hover:bg-secondary/90 text-primary font-semibold">
            <Link href="/portal/dashboard/clients">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Clients
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Button
              asChild
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-primary"
            >
              <Link href="/portal/dashboard/clients">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Clients
              </Link>
            </Button>
            <div className="flex gap-4">
              <EditClientDialog client={client} onSuccess={fetchClient} />
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete Client
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Delete Client</AlertDialogTitle>
                    <AlertDialogDescription>
                      Are you sure you want to delete {client.name}? This action cannot be undone and will also delete
                      all associated contacts.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handleDeleteClient} className="bg-red-600 hover:bg-red-700">
                      Delete
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">{client.name || "Unknown Client"}</h1>
            <p className="text-secondary text-lg">Client Details & Management</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Client Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-secondary text-primary">
              <CardTitle className="flex items-center text-xl font-bold">
                <Building2 className="h-6 w-6 mr-3" />
                Company Information
              </CardTitle>
            </CardHeader>
            <CardContent className="bg-white p-8 space-y-6">
              <div>
                <label className="text-sm font-bold text-gray-500 uppercase tracking-wide">Company Name</label>
                <p className="text-xl font-semibold text-primary mt-1">{client.name || "N/A"}</p>
              </div>
              <div>
                <label className="text-sm font-bold text-gray-500 uppercase tracking-wide">Size</label>
                <div className="mt-2">
                  <Badge className={`${getSizeColor(client.size)} text-sm font-semibold px-3 py-1`}>
                    {client.size || "Unknown"}
                  </Badge>
                </div>
              </div>
              <div>
                <label className="text-sm font-bold text-gray-500 uppercase tracking-wide">Status</label>
                <div className="mt-2">
                  <Badge className={`${getStatusColor(client.status)} text-sm font-semibold px-3 py-1`}>
                    {client.status || "Unknown"}
                  </Badge>
                </div>
              </div>
              {client.industry && (
                <div>
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-wide">Industry</label>
                  <p className="text-lg text-primary mt-1">{client.industry}</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader className="bg-primary text-white">
              <CardTitle className="flex items-center text-xl font-bold">
                <Users className="h-6 w-6 mr-3" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="bg-white p-8 space-y-6">
              {client.email && (
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-secondary mr-4" />
                  <span className="text-lg text-primary">{client.email}</span>
                </div>
              )}
              {client.phone && (
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-secondary mr-4" />
                  <span className="text-lg text-primary">{client.phone}</span>
                </div>
              )}
              {client.address && (
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-secondary mr-4 mt-1" />
                  <span className="text-lg text-primary">{client.address}</span>
                </div>
              )}
              <div className="flex items-center">
                <Calendar className="h-5 w-5 text-secondary mr-4" />
                <span className="text-lg text-primary">
                  Added {client.created_at ? new Date(client.created_at).toLocaleDateString() : "Unknown"}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contacts Section */}
        <Card className="border-0 shadow-lg">
          <CardHeader className="bg-secondary text-primary">
            <div className="flex items-center justify-between">
              <CardTitle className="text-xl font-bold">Client Contacts</CardTitle>
              <AddContactDialog clientId={Number.parseInt(params.id)} onSuccess={fetchContacts} />
            </div>
          </CardHeader>
          <CardContent className="bg-white p-0">
            <div className="overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gray-50 border-b-2 border-gray-200">
                    <TableHead className="font-bold text-primary py-4">Name</TableHead>
                    <TableHead className="font-bold text-primary py-4">Role</TableHead>
                    <TableHead className="font-bold text-primary py-4">Email</TableHead>
                    <TableHead className="font-bold text-primary py-4">Phone</TableHead>
                    <TableHead className="font-bold text-primary py-4">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contacts.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-16">
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                            <Users className="h-8 w-8 text-gray-400" />
                          </div>
                          <p className="text-lg text-gray-600 mb-2">No contacts found</p>
                          <p className="text-gray-500">Add the first contact for this client</p>
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : (
                    contacts.map((contact) => (
                      <TableRow
                        key={contact.id}
                        className="hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100"
                      >
                        <TableCell className="font-semibold text-primary py-4">
                          {contact.first_name} {contact.last_name}
                        </TableCell>
                        <TableCell className="text-gray-700 py-4">{contact.role || "—"}</TableCell>
                        <TableCell className="text-gray-700 py-4">{contact.email || "—"}</TableCell>
                        <TableCell className="text-gray-700 py-4">{contact.phone || "—"}</TableCell>
                        <TableCell className="py-4">
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setEditingContact(contact)}
                              className="border-secondary text-secondary hover:bg-secondary hover:text-primary"
                            >
                              <Edit className="h-3 w-3" />
                            </Button>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  className="border-red-300 text-red-600 hover:bg-red-50"
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Delete Contact</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Are you sure you want to delete {contact.first_name} {contact.last_name}? This
                                    action cannot be undone.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => handleDeleteContact(contact.id)}
                                    className="bg-red-600 hover:bg-red-700"
                                  >
                                    Delete
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Notes Section */}
        {client.notes && (
          <Card className="border-0 shadow-lg mt-8">
            <CardHeader className="bg-primary text-white">
              <CardTitle className="text-xl font-bold">Notes</CardTitle>
            </CardHeader>
            <CardContent className="bg-white p-8">
              <p className="text-lg text-primary whitespace-pre-wrap leading-relaxed">{client.notes}</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Edit Contact Dialog */}
      {editingContact && (
        <EditContactDialog
          contact={editingContact}
          onSuccess={() => {
            fetchContacts()
            setEditingContact(null)
          }}
          onClose={() => setEditingContact(null)}
        />
      )}
    </div>
  )
}
