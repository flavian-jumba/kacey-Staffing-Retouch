"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function SimpleDashboard() {
  const [activeSection, setActiveSection] = useState("dashboard")

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-semibold text-blue-600">J1 Admin</h1>
        </div>
        <nav className="p-4 space-y-2">
          <Button
            variant={activeSection === "dashboard" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveSection("dashboard")}
          >
            Dashboard
          </Button>
          <Button
            variant={activeSection === "applications" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveSection("applications")}
          >
            Applications
          </Button>
          <Button
            variant={activeSection === "reports" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveSection("reports")}
          >
            Reports
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold">156</div>
              <p className="text-gray-600">Total Applications</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-green-600">89</div>
              <p className="text-gray-600">Completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-amber-600">67</div>
              <p className="text-gray-600">Pending</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="text-2xl font-bold text-blue-600">12</div>
              <p className="text-gray-600">Countries</p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Applications */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded">
                <div>
                  <div className="font-medium">John Smith</div>
                  <div className="text-sm text-gray-600">john@example.com</div>
                </div>
                <div className="text-right">
                  <Badge variant="success">Complete</Badge>
                  <div className="text-sm text-gray-600">2 days ago</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border rounded">
                <div>
                  <div className="font-medium">Sarah Johnson</div>
                  <div className="text-sm text-gray-600">sarah@example.com</div>
                </div>
                <div className="text-right">
                  <Badge variant="warning">Pending</Badge>
                  <div className="text-sm text-gray-600">1 day ago</div>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border rounded">
                <div>
                  <div className="font-medium">Mike Davis</div>
                  <div className="text-sm text-gray-600">mike@example.com</div>
                </div>
                <div className="text-right">
                  <Badge variant="success">Complete</Badge>
                  <div className="text-sm text-gray-600">3 days ago</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
