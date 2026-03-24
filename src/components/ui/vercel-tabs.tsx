"use client"

import * as React from "react"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface Tab {
  id: string
  label: string
}

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: Tab[]
  activeTab?: string
  onTabChange?: (tabId: string) => void
  variant?: 'light' | 'dark'
}

const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ className, tabs, activeTab, onTabChange, variant = 'dark', ...props }, ref) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    const [activeIndex, setActiveIndex] = useState<number>(-1)
    const [hoverStyle, setHoverStyle] = useState({})
    const [activeStyle, setActiveStyle] = useState({ left: "0px", width: "0px" })
    const tabRefs = useRef<(HTMLDivElement | null)[]>([])

    // Sync activeIndex when activeTab prop changes
    useEffect(() => {
      if (activeTab !== undefined) {
        const idx = tabs.findIndex((t) => t.id === activeTab)
        setActiveIndex(idx) // -1 means no active tab in this group
      }
    }, [activeTab, tabs])

    useEffect(() => {
      if (hoveredIndex !== null) {
        const hoveredElement = tabRefs.current[hoveredIndex]
        if (hoveredElement) {
          const { offsetLeft, offsetWidth } = hoveredElement
          setHoverStyle({
            left: `${offsetLeft}px`,
            width: `${offsetWidth}px`,
          })
        }
      }
    }, [hoveredIndex])

    useEffect(() => {
      if (activeIndex >= 0) {
        const activeElement = tabRefs.current[activeIndex]
        if (activeElement) {
          const { offsetLeft, offsetWidth } = activeElement
          setActiveStyle({
            left: `${offsetLeft}px`,
            width: `${offsetWidth}px`,
          })
        }
      }
    }, [activeIndex])

    return (
      <div
        ref={ref}
        className={cn("relative", className)}
        {...props}
      >
        <div className="relative">
          {/* Hover Highlight */}
          <div
            className={cn(
              "absolute h-[34px] transition-all duration-300 ease-out rounded-[6px] flex items-center",
              variant === 'light' ? 'bg-[#8B1A4A]/10' : 'bg-white/10'
            )}
            style={{
              ...hoverStyle,
              opacity: hoveredIndex !== null ? 1 : 0,
            }}
          />

          {/* Active Indicator */}
          {activeIndex >= 0 && (
            <div
              className={cn(
                "absolute bottom-[-4px] h-[2px] transition-all duration-300 ease-out",
                variant === 'light' ? 'bg-[#8B1A4A]' : 'bg-white'
              )}
              style={activeStyle}
            />
          )}

          {/* Tabs */}
          <div className="relative flex space-x-[2px] items-center">
            {tabs.map((tab, index) => (
              <div
                key={tab.id}
                ref={(el) => (tabRefs.current[index] = el)}
                className={cn(
                  "px-4 py-2 cursor-pointer transition-colors duration-300 h-[34px] flex items-center justify-center text-sm font-medium whitespace-nowrap rounded-md",
                  index === activeIndex && activeIndex >= 0
                    ? variant === 'light' ? "text-[#8B1A4A] font-bold" : "text-white"
                    : variant === 'light' ? "text-[#8B1A4A]/70 hover:text-[#8B1A4A] font-semibold" : "text-white/60 hover:text-white/80"
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => {
                  setActiveIndex(index)
                  onTabChange?.(tab.id)
                }}
              >
                {tab.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
)
Tabs.displayName = "Tabs"

export { Tabs }
export type { Tab, TabsProps }
