"use client"

import { useState, useEffect } from "react"
import {
  BarChart,
  ChevronLeft,
  Search,
  Users,
  FileText,
  Globe,
  CheckCircle,
  XCircle,
  Clock,
  Download,
  Filter,
  MoreHorizontal,
  Menu,
  Eye,
  User,
  Settings,
  Shield,
  LogOut,
  Trash,
  Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/hooks/use-toast"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { supabase } from "@/lib/supabase"

export type J1Application = {
  id: string
  first_name: string
  last_name: string
  email: string
  phone: string
  country: string
  program: string
  other_program?: string | null
  education_level: string
  university: string
  gpa?: number
  date_of_birth?: string | null
  experience?: string | null
  visa_filed: boolean
  visa_screen_certificate: boolean
  ielts_toefl: boolean
  authorized_to_work: boolean
  resume_url?: string | null
  transcript_url?: string | null
  consent?: boolean
  status: string
  created_at: string
  updated_at: string
}
import * as XLSX from "xlsx-js-style"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useAuth } from "@/hooks/use-auth"
import { TableSkeleton } from "./table-skeleton"
import ErrorBoundary from "./error-boundary"

export default function J1AdminDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard")
  const [isMobile, setIsMobile] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [applications, setApplications] = useState<J1Application[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedApplication, setSelectedApplication] = useState<J1Application | null>(null)
  const { toast } = useToast()

  const [dateRange, setDateRange] = useState({ from: "", to: "" })
  const [selectedCountry, setSelectedCountry] = useState("")
  const [selectedProgram, setSelectedProgram] = useState("")
  const [applicationToDelete, setApplicationToDelete] = useState<string | null>(null)
  const [selectedStatus, setSelectedStatus] = useState("")
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(20)
  const [totalPages, setTotalPages] = useState(1)

  const { user, signOut } = useAuth()

  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    fetchApplications()
  }, [])

  const fetchApplications = async () => {
    try {
      setLoading(true)
      
      const { data, error } = await supabase
        .from("j1_applications")
        .select("*")
        .order("created_at", { ascending: false })

      if (error) throw error
      const applicationsData = data || []
      setApplications(applicationsData)
      
      // Calculate total pages
      setTotalPages(Math.ceil(applicationsData.length / itemsPerPage))
      // Reset to first page when data changes
      setCurrentPage(1)
      
      // Show success message
      toast({
        title: "Success",
        description: `Loaded ${applicationsData.length} applications`,
        variant: "default",
      })
    } catch (error) {
      console.error("Error fetching applications:", error)
      toast({
        title: "Error",
        description: "Failed to fetch applications. Please check your connection.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    try {
      await signOut()
      toast({
        title: "Signed out",
        description: "You have been successfully signed out.",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      })
    }
  }

  // Filter applications based on search term
  const filteredApplications = applications.filter(
    (app) =>
      app.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.country.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentApplications = filteredApplications.slice(indexOfFirstItem, indexOfLastItem)
  
  // Update total pages whenever filtered applications change
  useEffect(() => {
    setTotalPages(Math.ceil(filteredApplications.length / itemsPerPage))
    // Reset to first page when filters change
    setCurrentPage(1)
  }, [filteredApplications.length, itemsPerPage, searchTerm, selectedCountry, selectedProgram, dateRange])
  
  // Pagination navigation functions
  const goToPage = (pageNumber: number) => {
    setCurrentPage(Math.max(1, Math.min(pageNumber, totalPages)))
  }
  
  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
  }
  
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  // Calculate statistics
  const totalApplications = applications.length
  const thisWeekApplications = applications.filter((app) => {
    const appDate = new Date(app.created_at)
    const weekAgo = new Date()
    weekAgo.setDate(weekAgo.getDate() - 7)
    return appDate >= weekAgo
  }).length

  const completedApplications = applications.filter((app) => app.resume_url && app.transcript_url && app.consent).length
  const pendingApplications = totalApplications - completedApplications

  // Define types for statistics
  interface StatItem {
    name: string;
    value: number;
  }

  // Country distribution
  const countryStats = applications.reduce(
    (acc, app) => {
      acc[app.country] = (acc[app.country] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  const countryData = Object.entries(countryStats)
    .map(([country, count]) => ({ name: country, value: count } as StatItem))
    .sort((a, b) => b.value - a.value)
    .slice(0, 5)

  const programStats = applications.reduce(
    (acc, app) => {
      // Use other_program if program is "other" and other_program exists
      const programName = app.program === "other" && app.other_program ? app.other_program : app.program
      acc[programName] = (acc[programName] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  const programData = Object.entries(programStats).map(([program, count]) => ({ name: program, value: count } as StatItem))

  const exportToExcel = (data: J1Application[], filename: string) => {
    try {
      if (!data || data.length === 0) {
        toast({
          title: "No Data",
          description: "There is no data to export.",
          variant: "destructive",
        })
        return
      }
      const exportData = data.map((app) => ({
        "Application ID": app.id,
        "First Name": app.first_name,
        "Last Name": app.last_name,
        Email: app.email,
        Phone: app.phone,
        Country: app.country,
        "Date of Birth": app.date_of_birth ? new Date(app.date_of_birth).toLocaleDateString() : "",
        "Education Level": app.education_level,
        University: app.university,
        Program: app.program === "other" && app.other_program ? app.other_program : app.program,
        Experience: app.experience,
        "Authorized to Work": app.authorized_to_work ? "Yes" : "No",
        "Visa Filed": app.visa_filed ? "Yes" : "No",
        "Visa Screen Certificate": app.visa_screen_certificate ? "Yes" : "No",
        "IELTS/TOEFL": app.ielts_toefl ? "Yes" : "No",
        "Resume Uploaded": app.resume_url ? "Yes" : "No",
        "Transcript Uploaded": app.transcript_url ? "Yes" : "No",
        "Consent Given": app.consent ? "Yes" : "No",
        "Application Date": app.created_at ? new Date(app.created_at).toLocaleDateString() : "",
        "Last Updated": app.updated_at ? new Date(app.updated_at).toLocaleDateString() : "",
        Status: app.resume_url && app.transcript_url && app.consent ? "Complete" : "Pending",
      }))

      const wb = XLSX.utils.book_new()
      const ws = XLSX.utils.json_to_sheet(exportData)
      const colWidths = Object.keys(exportData[0] || {}).map((key) => ({
        wch: Math.max(key.length, 15),
      }))
      ws["!cols"] = colWidths
      XLSX.utils.book_append_sheet(wb, ws, "J1 Applications")
      XLSX.writeFile(wb, filename)

      toast({
        title: "Export Successful",
        description: `${data.length} applications exported to ${filename}`,
      })
    } catch (error) {
      toast({
        title: "Export Failed",
        description: "Failed to export data. Please try again.",
        variant: "destructive",
      })
    }
  }

  const handleDeleteApplication = async (applicationId: string) => {
    try {
      // Validate the applicationId
      if (!applicationId) {
        toast({
          title: "Invalid Operation",
          description: "Cannot delete application: Invalid application ID",
          variant: "destructive",
        })
        return
      }

      // Double check the application exists
      const appToDelete = applications.find(app => app.id === applicationId)
      if (!appToDelete) {
        toast({
          title: "Not Found",
          description: "Application not found in current data",
          variant: "destructive",
        })
        return
      }

      setIsDeleting(true)
      console.log(`Attempting to delete application with ID: ${applicationId}`)
      
      // Force hard delete with cascade
      const { data, error } = await supabase
        .from('j1_applications')
        .delete()
        .eq('id', applicationId)
        .select()

      if (error) {
        console.error("Database error during deletion:", error)
        throw error
      }

      console.log("Delete operation response:", data)
      
      // Verify deletion with a select query
      const { data: checkData, error: checkError } = await supabase
        .from('j1_applications')
        .select('id')
        .eq('id', applicationId)
        .maybeSingle()
      
      if (checkError) {
        console.error("Error verifying deletion:", checkError)
      } else if (checkData) {
        console.error("Application still exists after deletion attempt:", checkData)
        throw new Error("Delete operation did not remove the record from database")
      } else {
        console.log("Verified: Application successfully deleted from database")
      }

      // If verification shows the record still exists, try a direct SQL query as a fallback
      if (checkData && checkData.id) {
        console.log("Record still exists, attempting deletion with direct SQL query...")
        
        try {
          // Execute a direct SQL delete query
          const { error: sqlError } = await supabase
            .rpc('force_delete_application', { application_id: applicationId })
          
          if (sqlError) {
            console.error("SQL delete error:", sqlError)
            throw new Error("Failed to delete with direct SQL")
          } else {
            console.log("SQL delete operation completed")
          }
        } catch (sqlExecError) {
          console.error("Failed to execute SQL delete:", sqlExecError)
          
          // As a last resort, try the basic delete again
          const { error: retryError } = await supabase
            .from('j1_applications')
            .delete()
            .eq('id', applicationId)
            
          if (retryError) {
            console.error("Retry delete failed:", retryError)
          } else {
            console.log("Retry delete may have succeeded")
          }
        }
      }

      // Update local state
      setApplications(applications.filter(app => app.id !== applicationId))
      setSelectedApplication(null)
      
      toast({
        title: "Application Deleted",
        description: "The application has been successfully deleted from the database.",
      })
    } catch (error) {
      console.error('Error deleting application:', error)
      
      // Provide more specific error messages based on the error type
      let errorMessage = "Failed to delete application. Please try again."
      
      if (error instanceof Error) {
        console.error('Error message:', error.message)
        console.error('Error stack:', error.stack)
        
        if (error.message.includes("permission") || error.message.includes("access")) {
          errorMessage = "Permission denied. You may not have rights to delete this record."
        } else if (error.message.includes("foreign key") || error.message.includes("constraint")) {
          errorMessage = "Cannot delete due to database constraints. This record may be referenced by other data."
        } else if (error.message.includes("network") || error.message.includes("connection")) {
          errorMessage = "Network error. Please check your connection and try again."
        }
      }
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      })
      
      // Still update the local state if needed for UI consistency
      // Comment this out if you want to strictly reflect database state
      // setApplications(applications.filter(app => app.id !== applicationId))
    } finally {
      setIsDeleting(false)
      
      // Refresh the applications list to ensure UI is in sync with database
      fetchApplications()
    }
  }

  const renderDashboard = () => (
    <>
      <div className="flex justify-end mb-4">
        <p className="text-sm text-gray-600">
          {new Date().toLocaleDateString("en", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
        <Card>
          <CardContent className="p-4 flex items-center">
            <div className="bg-blue-50 p-3 rounded-full mr-4">
              <Users className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Applications</p>
              <div className="flex items-center">
                <h3 className="text-2xl font-bold mr-2">{totalApplications}</h3>
                <span className="text-xs px-1.5 py-0.5 bg-green-100 text-green-600 rounded">
                  +{thisWeekApplications} this week
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center">
            <div className="bg-green-50 p-3 rounded-full mr-4">
              <CheckCircle className="h-6 w-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Completed</p>
              <div className="flex items-center">
                <h3 className="text-2xl font-bold mr-2">{completedApplications}</h3>
                <span className="text-xs px-1.5 py-0.5 bg-green-100 text-green-600 rounded">
                  {totalApplications > 0 ? Math.round((completedApplications / totalApplications) * 100) : 0}%
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center">
            <div className="bg-amber-50 p-3 rounded-full mr-4">
              <Clock className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Pending</p>
              <div className="flex items-center">
                <h3 className="text-2xl font-bold mr-2">{pendingApplications}</h3>
                <span className="text-xs px-1.5 py-0.5 bg-amber-100 text-amber-600 rounded">
                  {totalApplications > 0 ? Math.round((pendingApplications / totalApplications) * 100) : 0}%
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 flex items-center">
            <div className="bg-purple-50 p-3 rounded-full mr-4">
              <Globe className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Countries</p>
              <div className="flex items-center">
                <h3 className="text-2xl font-bold mr-2">{Object.keys(countryStats).length}</h3>
                <span className="text-xs text-gray-500">represented</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Countries */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">Top Countries</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {countryData.slice(0, 5).map((country) => (
                <div key={country.name} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{country.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${totalApplications > 0 ? (country.value / totalApplications) * 100 : 0}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{country.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">Program Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {programData.slice(0, 5).map((program) => (
                <div key={program.name} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{program.name}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: `${totalApplications > 0 ? (program.value / totalApplications) * 100 : 0}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{program.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Applications */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-medium">Recent Applications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Applicant</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>Program</TableHead>
                  <TableHead>Education</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Applied</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {applications.slice(0, 5).map((app) => (
                  <TableRow key={app.id}>
                    <TableCell>
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-3">
                          <AvatarFallback>
                            {app.first_name[0]}
                            {app.last_name[0]}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">
                            {app.first_name} {app.last_name}
                          </p>
                          <p className="text-xs text-gray-500">{app.email}</p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{app.country}</TableCell>
                    <TableCell>{app.program === "other" && app.other_program ? app.other_program : app.program}</TableCell>
                    <TableCell>{app.education_level}</TableCell>
                    <TableCell>
                      <Badge variant={app.resume_url && app.transcript_url && app.consent ? "default" : "secondary"}>
                        {app.resume_url && app.transcript_url && app.consent ? "Complete" : "Pending"}
                      </Badge>
                    </TableCell>
                    <TableCell>{new Date(app.created_at).toLocaleDateString()}</TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => setSelectedApplication(app)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </>
  )

  const renderApplications = () => (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h2 className="text-xl font-semibold">J1 Applications</h2>
        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="outline" size="sm" className="flex items-center gap-1 bg-transparent">
            <Filter className="h-4 w-4" />
            <span className="md:inline">{isMobile ? "" : "Filter"}</span>
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1 bg-transparent"
            onClick={() =>
              exportToExcel(filteredApplications, `applications-${new Date().toISOString().split("T")[0]}.xlsx`)
            }
          >
            <Download className="h-4 w-4" />
            <span className="md:inline">{isMobile ? "" : "Export"}</span>
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row justify-between mb-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by name, email, or country..."
                className="pl-10 pr-4 py-2 w-full md:w-[400px]"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {loading ? (
            <TableSkeleton />
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Applicant</TableHead>
                    <TableHead>Country</TableHead>
                    <TableHead>Program</TableHead>
                    <TableHead>Education</TableHead>
                    <TableHead>University</TableHead>
                    <TableHead>Documents</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Applied</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredApplications.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={9} className="text-center py-10 text-gray-500">
                        No applications found. Try adjusting your filters.
                      </TableCell>
                    </TableRow>
                  ) : (
                    currentApplications.map((app) => (
                    <TableRow key={app.id}>
                      <TableCell>
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-3">
                            <AvatarFallback>
                              {app.first_name[0]}
                              {app.last_name[0]}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">
                              {app.first_name} {app.last_name}
                            </p>
                            <p className="text-xs text-gray-500">{app.email}</p>
                            <p className="text-xs text-gray-500">{app.phone}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{app.country}</TableCell>
                      <TableCell>{app.program === "other" && app.other_program ? app.other_program : app.program}</TableCell>
                      <TableCell>{app.education_level}</TableCell>
                      <TableCell>{app.university}</TableCell>
                      <TableCell>
                        <div className="flex gap-1">
                          {app.resume_url && (
                            <Badge variant="outline" className="text-xs">
                              Resume
                            </Badge>
                          )}
                          {app.transcript_url && (
                            <Badge variant="outline" className="text-xs">
                              Transcript
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant={app.resume_url && app.transcript_url && app.consent ? "default" : "secondary"}>
                          {app.resume_url && app.transcript_url && app.consent ? "Complete" : "Pending"}
                        </Badge>
                      </TableCell>
                      <TableCell>{new Date(app.created_at).toLocaleDateString()}</TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setSelectedApplication(app)}>
                              <Eye className="h-4 w-4 mr-2" />
                              View Details
                            </DropdownMenuItem>
                            {app.resume_url && (
                              <DropdownMenuItem onClick={() => window.open(app.resume_url!, "_blank")}>
                                <Download className="h-4 w-4 mr-2" />
                                Download Resume
                              </DropdownMenuItem>
                            )}
                            {app.transcript_url && (
                              <DropdownMenuItem onClick={() => window.open(app.transcript_url!, "_blank")}>
                                <Download className="h-4 w-4 mr-2" />
                                Download Transcript
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                              className="text-red-600"
                              onClick={(e) => {
                                e.stopPropagation()
                                setApplicationToDelete(app.id)
                              }}
                            >
                              <Trash className="h-4 w-4 mr-2" />
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  )))}
                </TableBody>
              </Table>
              
              {/* Pagination UI */}
              {!loading && filteredApplications.length > 0 && (
                <div className="mt-4">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={goToPreviousPage} 
                          aria-disabled={currentPage === 1}
                          className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                        />
                      </PaginationItem>
                      
                      {/* For Mobile: Show simplified pagination */}
                      {isMobile ? (
                        <>
                          <PaginationItem>
                            <PaginationLink isActive>{currentPage}</PaginationLink>
                          </PaginationItem>
                          <PaginationItem>
                            <span className="text-sm text-muted-foreground px-2">of {totalPages}</span>
                          </PaginationItem>
                        </>
                      ) : (
                        <>
                          {/* First Page */}
                          {currentPage > 2 && (
                            <PaginationItem>
                              <PaginationLink onClick={() => goToPage(1)}>1</PaginationLink>
                            </PaginationItem>
                          )}
                          
                          {/* Ellipsis if needed */}
                          {currentPage > 3 && (
                            <PaginationItem>
                              <PaginationEllipsis />
                            </PaginationItem>
                          )}
                          
                          {/* Previous Page */}
                          {currentPage > 1 && (
                            <PaginationItem>
                              <PaginationLink onClick={() => goToPage(currentPage - 1)}>
                                {currentPage - 1}
                              </PaginationLink>
                            </PaginationItem>
                          )}
                          
                          {/* Current Page */}
                          <PaginationItem>
                            <PaginationLink isActive>{currentPage}</PaginationLink>
                          </PaginationItem>
                          
                          {/* Next Page */}
                          {currentPage < totalPages && (
                            <PaginationItem>
                              <PaginationLink onClick={() => goToPage(currentPage + 1)}>
                                {currentPage + 1}
                              </PaginationLink>
                            </PaginationItem>
                          )}
                          
                          {/* Ellipsis if needed */}
                          {currentPage < totalPages - 2 && (
                            <PaginationItem>
                              <PaginationEllipsis />
                            </PaginationItem>
                          )}
                          
                          {/* Last Page */}
                          {currentPage < totalPages - 1 && (
                            <PaginationItem>
                              <PaginationLink onClick={() => goToPage(totalPages)}>
                                {totalPages}
                              </PaginationLink>
                            </PaginationItem>
                          )}
                        </>
                      )}
                      
                      <PaginationItem>
                        <PaginationNext 
                          onClick={goToNextPage}
                          aria-disabled={currentPage === totalPages}
                          className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                  
                  <div className="text-sm text-center text-gray-500 mt-2">
                    Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredApplications.length)} of {filteredApplications.length} applications
                  </div>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </>
  )

  const renderReports = () => {
    const getFilteredData = () => {
      let filtered = applications

      if (dateRange.from) {
        filtered = filtered.filter((app) => new Date(app.created_at) >= new Date(dateRange.from))
      }
      if (dateRange.to) {
        filtered = filtered.filter((app) => new Date(app.created_at) <= new Date(dateRange.to))
      }
      if (selectedCountry && selectedCountry !== "all") {
        filtered = filtered.filter((app) => app.country === selectedCountry)
      }
      if (selectedProgram && selectedProgram !== "all") {
        filtered = filtered.filter((app) => {
          const displayProgram = app.program === "other" && app.other_program ? app.other_program : app.program;
          return displayProgram === selectedProgram;
        })
      }
      if (selectedStatus && selectedStatus !== "all") {
        if (selectedStatus === "complete") {
          filtered = filtered.filter((app) => app.resume_url && app.transcript_url && app.consent)
        } else if (selectedStatus === "pending") {
          filtered = filtered.filter((app) => !(app.resume_url && app.transcript_url && app.consent))
        }
      }

      return filtered
    }

    const filteredData = getFilteredData()
    const countries = [...new Set(applications.map((app) => app.country))].sort()
    // Get all program names including other_program values when program is "other"
    const programs = [...new Set(applications.map((app) => 
      app.program === "other" && app.other_program ? app.other_program : app.program
    ))].sort()

    return (
      <>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Reports & Export</h2>
        </div>

        {/* Export Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{applications.length}</div>
              <p className="text-sm text-gray-500">Total Applications</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">{completedApplications}</div>
              <p className="text-sm text-gray-500">Complete Applications</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-amber-600">{pendingApplications}</div>
              <p className="text-sm text-gray-500">Pending Applications</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-purple-600">{Object.keys(countryStats).length}</div>
              <p className="text-sm text-gray-500">Countries</p>
            </CardContent>
          </Card>
        </div>

        {/* Export Options */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">Quick Export Options</CardTitle>
            <CardDescription>Download pre-configured reports instantly</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Button
                onClick={() => exportToExcel(applications, "all-applications.xlsx")}
                className="flex items-center gap-2 h-auto py-4 flex-col"
                variant="outline"
              >
                <Download className="h-6 w-6" />
                <div className="text-center">
                  <div className="font-medium">All Applications</div>
                  <div className="text-xs text-gray-500">{applications.length} records</div>
                </div>
              </Button>

              <Button
                onClick={() =>
                  exportToExcel(
                    applications.filter((app) => app.resume_url && app.transcript_url && app.consent),
                    "complete-applications.xlsx",
                  )
                }
                className="flex items-center gap-2 h-auto py-4 flex-col"
                variant="outline"
              >
                <CheckCircle className="h-6 w-6" />
                <div className="text-center">
                  <div className="font-medium">Complete Only</div>
                  <div className="text-xs text-gray-500">{completedApplications} records</div>
                </div>
              </Button>

              <Button
                onClick={() =>
                  exportToExcel(
                    applications.filter((app) => !(app.resume_url && app.transcript_url && app.consent)),
                    "pending-applications.xlsx",
                  )
                }
                className="flex items-center gap-2 h-auto py-4 flex-col"
                variant="outline"
              >
                <Clock className="h-6 w-6" />
                <div className="text-center">
                  <div className="font-medium">Pending Only</div>
                  <div className="text-xs text-gray-500">{pendingApplications} records</div>
                </div>
              </Button>

              <Button
                onClick={() =>
                  exportToExcel(
                    applications.filter((app) => {
                      const appDate = new Date(app.created_at)
                      const weekAgo = new Date()
                      weekAgo.setDate(weekAgo.getDate() - 7)
                      return appDate >= weekAgo
                    }),
                    "this-week-applications.xlsx",
                  )
                }
                className="flex items-center gap-2 h-auto py-4 flex-col"
                variant="outline"
              >
                <FileText className="h-6 w-6" />
                <div className="text-center">
                  <div className="font-medium">This Week</div>
                  <div className="text-xs text-gray-500">{thisWeekApplications} records</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Custom Export with Filters */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Custom Export</CardTitle>
            <CardDescription>Apply filters and export specific data</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              <div>
                <Label htmlFor="from-date" className="text-sm font-medium">
                  From Date
                </Label>
                <Input
                  id="from-date"
                  type="date"
                  value={dateRange.from}
                  onChange={(e) => setDateRange((prev) => ({ ...prev, from: e.target.value }))}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="to-date" className="text-sm font-medium">
                  To Date
                </Label>
                <Input
                  id="to-date"
                  type="date"
                  value={dateRange.to}
                  onChange={(e) => setDateRange((prev) => ({ ...prev, to: e.target.value }))}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="country" className="text-sm font-medium">
                  Country
                </Label>
                <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="All Countries" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Countries</SelectItem>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="program" className="text-sm font-medium">
                  Program
                </Label>
                <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="All Programs" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Programs</SelectItem>
                    {programs.map((program) => (
                      <SelectItem key={program} value={program}>
                        {program}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="status" className="text-sm font-medium">
                  Status
                </Label>
                <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="complete">Complete</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">{filteredData.length} applications match your filters</div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setDateRange({ from: "", to: "" })
                    setSelectedCountry("")
                    setSelectedProgram("")
                    setSelectedStatus("")
                  }}
                >
                  Clear Filters
                </Button>
                <Button
                  onClick={() => {
                    const filename = `filtered-applications-${new Date().toISOString().split("T")[0]}.xlsx`
                    exportToExcel(filteredData, filename)
                  }}
                  disabled={filteredData.length === 0}
                  className="flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Export Filtered Data ({filteredData.length})
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </>
    )
  }

  // Get user initials for avatar
  const getUserInitials = () => {
    if (user?.email) {
      const emailParts = user.email.split("@")[0]
      return emailParts.slice(0, 2).toUpperCase()
    }
    return "AD"
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile Sidebar Toggle */}
      {isMobile && (
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-4 right-4 z-50 rounded-full h-12 w-12 shadow-lg bg-white"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      )}

      {/* Sidebar */}
      <div
        className={`${isMobile ? "fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out" : "w-64"} ${isMobile && !sidebarOpen ? "-translate-x-full" : "translate-x-0"} bg-white border-r border-gray-200 flex flex-col`}
      >
        {isMobile && (
          <div className="flex justify-end p-4">
            <Button variant="ghost" size="icon" onClick={() => setSidebarOpen(false)}>
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
        )}
        <div className="p-6 border-b border-gray-200">
          <h1 className="text-2xl font-semibold text-blue-600">Admin</h1>
        </div>
        <div className="flex-1 py-4 overflow-y-auto">
          <nav className="space-y-1 px-2">
            <button
              onClick={() => setActiveSection("dashboard")}
              className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-r-md ${activeSection === "dashboard" ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
            >
              <BarChart className="mr-3 h-5 w-5" />
              Dashboard
            </button>
            <button
              onClick={() => setActiveSection("applications")}
              className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-r-md ${activeSection === "applications" ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
            >
              <FileText className="mr-3 h-5 w-5" />
              Applications
            </button>
            <button
              onClick={() => setActiveSection("reports")}
              className={`flex items-center w-full px-4 py-3 text-sm font-medium rounded-r-md ${activeSection === "reports" ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600" : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"}`}
            >
              <Download className="mr-3 h-5 w-5" />
              Reports
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 flex items-center justify-between px-4 py-4 md:px-6">
          <div className="flex items-center">
            {isMobile && (
              <Button variant="ghost" size="icon" className="mr-2" onClick={() => setSidebarOpen(true)}>
                <Menu className="h-5 w-5" />
              </Button>
            )}
            <h1 className="text-xl font-semibold text-gray-800">
              {activeSection === "dashboard"
                ? "Dashboard"
                : activeSection === "applications"
                  ? "Applications"
                  : "Reports"}
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-blue-500 text-white">{getUserInitials()}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">Admin User</p>
                    <p className="text-xs leading-none text-muted-foreground">{user?.email || "admin@example.com"}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Shield className="mr-2 h-4 w-4" />
                  <span>Admin Panel</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          {activeSection === "dashboard" && renderDashboard()}
          {activeSection === "applications" && renderApplications()}
          {activeSection === "reports" && renderReports()}
        </main>
      </div>

      {/* Application Details Modal */}
      <Dialog open={!!selectedApplication} onOpenChange={() => setSelectedApplication(null)}>
        <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Application Details</DialogTitle>
            <div className="flex items-center justify-between">
              <DialogDescription>
                Complete information for {selectedApplication?.first_name} {selectedApplication?.last_name}
              </DialogDescription>
              {selectedApplication && (
                <Button 
                  variant="destructive" 
                  size="sm"
                  onClick={() => {
                    if (window.confirm('Are you sure you want to delete this application?')) {
                      handleDeleteApplication(selectedApplication.id)
                    }
                  }}
                  disabled={isDeleting}
                >
                  {isDeleting ? (
                    <span className="flex items-center">
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Deleting...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Trash className="h-4 w-4 mr-2" />
                      Delete
                    </span>
                  )}
                </Button>
              )}
            </div>
          </DialogHeader>
          {selectedApplication && (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-sm text-gray-500">Personal Information</h4>
                  <div className="mt-2 space-y-2">
                    <p>
                      <span className="font-medium">Name:</span> {selectedApplication.first_name}{" "}
                      {selectedApplication.last_name}
                    </p>
                    <p>
                      <span className="font-medium">Email:</span> {selectedApplication.email}
                    </p>
                    <p>
                      <span className="font-medium">Phone:</span> {selectedApplication.phone}
                    </p>
                    <p>
                      <span className="font-medium">Country:</span> {selectedApplication.country}
                    </p>
                    <p>
                      <span className="font-medium">Date of Birth:</span>{" "}
                      {selectedApplication.date_of_birth ? new Date(selectedApplication.date_of_birth).toLocaleDateString() : "Not provided"}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-gray-500">Education & Program</h4>
                  <div className="mt-2 space-y-2">
                    <p>
                      <span className="font-medium">Education Level:</span> {selectedApplication.education_level}
                    </p>
                    <p>
                      <span className="font-medium">University:</span> {selectedApplication.university}
                    </p>
                    <p>
                      <span className="font-medium">Program:</span> {selectedApplication.program === "other" && selectedApplication.other_program ? selectedApplication.other_program : selectedApplication.program}
                    </p>
                    <p>
                      <span className="font-medium">Experience:</span> {selectedApplication.experience}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-sm text-gray-500">Requirements Status</h4>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <div className="flex items-center gap-2">
                    {selectedApplication.authorized_to_work ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-500" />
                    )}
                    <span className="text-sm">Authorized to Work</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {selectedApplication.visa_filed ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-500" />
                    )}
                    <span className="text-sm">Visa Filed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {selectedApplication.visa_screen_certificate ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-500" />
                    )}
                    <span className="text-sm">Visa Screen Certificate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {selectedApplication.ielts_toefl ? (
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    ) : (
                      <XCircle className="h-4 w-4 text-red-500" />
                    )}
                    <span className="text-sm">IELTS/TOEFL</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-sm text-gray-500">Documents</h4>
                <div className="mt-2 flex gap-2">
                  {selectedApplication.resume_url && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(selectedApplication.resume_url!, "_blank")}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Resume
                    </Button>
                  )}
                  {selectedApplication.transcript_url && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(selectedApplication.transcript_url!, "_blank")}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Transcript
                    </Button>
                  )}
                </div>
              </div>

              <div className="text-xs text-gray-500">
                <p>Applied: {new Date(selectedApplication.created_at).toLocaleString()}</p>
                <p>Last Updated: {new Date(selectedApplication.updated_at).toLocaleString()}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={applicationToDelete !== null} onOpenChange={() => setApplicationToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this application and all associated data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-600 text-white hover:bg-red-700"
              onClick={() => {
                if (applicationToDelete) {
                  handleDeleteApplication(applicationToDelete)
                  setApplicationToDelete(null)
                }
              }}
              disabled={isDeleting}
            >
              {isDeleting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                "Delete"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
