"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function PromoBanner() {
    const [isVisible, setIsVisible] = useState(true)

    if (!isVisible) return null

    return (
        <div className="bg-foreground text-background py-2.5 px-4 relative">
            <div className="container mx-auto flex items-center justify-center">
                <p className="text-sm font-medium text-center">
                    Start your 7 day free trial today
                </p>
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded transition-colors"
                    aria-label="Dismiss banner"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}
