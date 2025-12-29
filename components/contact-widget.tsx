"use client"

import { useState } from "react"
import { MessageCircle, X, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ContactWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the data to your backend
        console.log("Form submitted:", formData)
        setIsSubmitted(true)

        // Reset after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false)
            setIsOpen(false)
            setFormData({ name: "", phone: "" })
        }, 3000)
    }

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Floating Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-14 h-14 rounded-full bg-foreground text-background shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center hover:scale-105 ${isOpen ? "rotate-0" : "animate-pulse"
                    }`}
            >
                {isOpen ? (
                    <X className="w-6 h-6" />
                ) : (
                    <MessageCircle className="w-6 h-6" />
                )}
            </button>

            {/* Popup Form */}
            <div
                className={`absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-border overflow-hidden transition-all duration-300 ${isOpen
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-4 scale-95 pointer-events-none"
                    }`}
            >
                {!isSubmitted ? (
                    <>
                        <div className="bg-foreground px-6 py-4">
                            <h3 className="text-background font-semibold text-lg">Get in Touch</h3>
                            <p className="text-background/80 text-sm">
                                We&apos;ll text you back shortly!
                            </p>
                        </div>
                        <form onSubmit={handleSubmit} className="p-6 space-y-4">
                            <div>
                                <Label htmlFor="name" className="text-sm font-medium text-foreground">
                                    Your Name
                                </Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({ ...formData, name: e.target.value })
                                    }
                                    required
                                    className="mt-1.5"
                                />
                            </div>
                            <div>
                                <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                                    Phone Number
                                </Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="+1 (555) 123-4567"
                                    value={formData.phone}
                                    onChange={(e) =>
                                        setFormData({ ...formData, phone: e.target.value })
                                    }
                                    required
                                    className="mt-1.5"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-foreground hover:bg-foreground/90 text-background rounded-full"
                            >
                                <Send className="w-4 h-4 mr-2" />
                                Send Message
                            </Button>
                        </form>
                    </>
                ) : (
                    <div className="p-8 text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                            Thanks!
                        </h3>
                        <p className="text-muted-foreground">
                            You will receive a text shortly.
                        </p>
                    </div>
                )}
            </div>
        </div>
    )
}
