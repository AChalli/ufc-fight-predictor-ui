"use client"

import { useState, useRef, useEffect } from "react"
import { Search, User, ChevronDown } from "lucide-react"
import type { Fighter } from "@/lib/fighters"
import { cn } from "@/lib/utils"

interface FighterSearchProps {
  label: string
  fighters: Fighter[]
  selectedFighter: Fighter | null
  onSelect: (fighter: Fighter) => void
  excludeFighterId?: string
}

export function FighterSearch({ label, fighters, selectedFighter, onSelect, excludeFighterId }: FighterSearchProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const filteredFighters = fighters.filter(
    (fighter) =>
      fighter.id !== excludeFighterId &&
      fighter.name.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSelect = (fighter: Fighter) => {
    onSelect(fighter)
    setSearch("")
    setIsOpen(false)
  }

  return (
    <div ref={containerRef} className="relative w-full">
      <label className="block text-sm font-medium text-muted-foreground mb-2 uppercase tracking-wider">
        {label}
      </label>
      <div
        className={cn(
          "relative flex items-center gap-3 p-4 rounded-lg border bg-secondary/50 cursor-pointer transition-all duration-200",
          isOpen ? "border-primary ring-2 ring-primary/20" : "border-border hover:border-primary/50"
        )}
        onClick={() => {
          setIsOpen(true)
          setTimeout(() => inputRef.current?.focus(), 0)
        }}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
          <User className="h-6 w-6 text-muted-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          {selectedFighter ? (
            <div>
              <p className="font-semibold text-foreground truncate">{selectedFighter.name}</p>
              <p className="text-sm text-muted-foreground truncate">
                {selectedFighter.record}
              </p>
            </div>
          ) : (
            <p className="text-muted-foreground">Select a fighter...</p>
          )}
        </div>
        <ChevronDown className={cn("h-5 w-5 text-muted-foreground transition-transform", isOpen && "rotate-180")} />
      </div>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-full rounded-lg border border-border bg-popover shadow-xl">
          <div className="p-3 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Search fighters..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-input rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>
          <div className="max-h-64 overflow-y-auto">
            {fighters.length === 0 ? (
              <p className="p-4 text-center text-muted-foreground">Loading fighters...</p>
            ) : filteredFighters.length === 0 ? (
              <p className="p-4 text-center text-muted-foreground">No fighters found</p>
            ) : (
              filteredFighters.map((fighter, index) => (
                <button
                  key={`${fighter.name}-${index}`}
                  onClick={() => handleSelect(fighter)}
                  className="w-full flex items-center gap-3 p-3 hover:bg-muted/50 transition-colors text-left"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted shrink-0">
                    <User className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground truncate">{fighter.name}</p>
                    <p className="text-xs text-muted-foreground truncate">
                      {fighter.weightClass} · {fighter.record}
                    </p>
                  </div>
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  )
}