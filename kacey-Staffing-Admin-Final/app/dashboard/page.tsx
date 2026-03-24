"use client"

import { ProtectedRoute } from "@/components/protected-route"
import J1AdminDashboard from "@/components/j1-admin-dashboard"
import ErrorBoundary from "@/components/error-boundary"

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <ErrorBoundary>
        <J1AdminDashboard />
      </ErrorBoundary>
    </ProtectedRoute>
  )
}
