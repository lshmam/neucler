"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check } from "lucide-react"

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

const steps = [
  { id: 1, title: "Business Info" },
  { id: 2, title: "Contact Details" },
  { id: 3, title: "Current Setup" },
  { id: 4, title: "Goals" },
]

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    businessName: "",
    industry: "",
    employeeCount: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    currentSolution: "",
    monthlyLeads: "",
    primaryGoal: "",
    timeline: "",
  })

  const updateFormData = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep((prev) => prev + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1)
  }

  const handleSubmit = () => {
    console.log("Quote request submitted:", formData)
    onClose()
    setCurrentStep(1)
    setFormData({
      businessName: "",
      industry: "",
      employeeCount: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      currentSolution: "",
      monthlyLeads: "",
      primaryGoal: "",
      timeline: "",
    })
  }

  const progress = (currentStep / 4) * 100

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground">Get Your Custom Quote</DialogTitle>
        </DialogHeader>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    currentStep > step.id
                      ? "bg-terracotta text-white"
                      : currentStep === step.id
                        ? "bg-foreground text-background"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {currentStep > step.id ? <Check className="w-4 h-4" /> : step.id}
                </div>
                <span className="text-xs mt-1 text-muted-foreground hidden sm:block">{step.title}</span>
              </div>
            ))}
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-terracotta transition-all duration-300" style={{ width: `${progress}%` }} />
          </div>
        </div>

        {/* Step Content */}
        <div className="space-y-4">
          {currentStep === 1 && (
            <>
              <div>
                <Label htmlFor="businessName">Business Name</Label>
                <Input
                  id="businessName"
                  value={formData.businessName}
                  onChange={(e) => updateFormData("businessName", e.target.value)}
                  placeholder="Enter your business name"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="industry">Industry</Label>
                <Select value={formData.industry} onValueChange={(value) => updateFormData("industry", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="automotive">Automotive / Auto Shop</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="services">Professional Services</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="employeeCount">Number of Employees</Label>
                <Select
                  value={formData.employeeCount}
                  onValueChange={(value) => updateFormData("employeeCount", value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select employee count" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-5">1-5</SelectItem>
                    <SelectItem value="6-20">6-20</SelectItem>
                    <SelectItem value="21-50">21-50</SelectItem>
                    <SelectItem value="51-100">51-100</SelectItem>
                    <SelectItem value="100+">100+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          {currentStep === 2 && (
            <>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => updateFormData("firstName", e.target.value)}
                    placeholder="First name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateFormData("lastName", e.target.value)}
                    placeholder="Last name"
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  placeholder="you@company.com"
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  placeholder="+1 (555) 000-0000"
                  className="mt-1"
                />
              </div>
            </>
          )}

          {currentStep === 3 && (
            <>
              <div>
                <Label htmlFor="currentSolution">Current Solution</Label>
                <Select
                  value={formData.currentSolution}
                  onValueChange={(value) => updateFormData("currentSolution", value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="What do you currently use?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Nothing / Manual Process</SelectItem>
                    <SelectItem value="basic">Basic Phone System</SelectItem>
                    <SelectItem value="crm">CRM Software</SelectItem>
                    <SelectItem value="competitor">Competitor AI Solution</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="monthlyLeads">Monthly Leads/Calls</Label>
                <Select value={formData.monthlyLeads} onValueChange={(value) => updateFormData("monthlyLeads", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="How many leads/calls per month?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-50">0-50</SelectItem>
                    <SelectItem value="51-200">51-200</SelectItem>
                    <SelectItem value="201-500">201-500</SelectItem>
                    <SelectItem value="501-1000">501-1000</SelectItem>
                    <SelectItem value="1000+">1000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}

          {currentStep === 4 && (
            <>
              <div>
                <Label htmlFor="primaryGoal">Primary Goal</Label>
                <Select value={formData.primaryGoal} onValueChange={(value) => updateFormData("primaryGoal", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="What's your main goal?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="leads">Convert More Leads</SelectItem>
                    <SelectItem value="afterhours">24/7 Availability</SelectItem>
                    <SelectItem value="efficiency">Improve Efficiency</SelectItem>
                    <SelectItem value="cost">Reduce Costs</SelectItem>
                    <SelectItem value="growth">Scale Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="timeline">Implementation Timeline</Label>
                <Select value={formData.timeline} onValueChange={(value) => updateFormData("timeline", value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="When do you want to start?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">As soon as possible</SelectItem>
                    <SelectItem value="1month">Within 1 month</SelectItem>
                    <SelectItem value="3months">Within 3 months</SelectItem>
                    <SelectItem value="exploring">Just exploring</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="rounded-full bg-transparent"
          >
            Back
          </Button>
          {currentStep < 4 ? (
            <Button onClick={nextStep} className="bg-foreground hover:bg-foreground/90 text-background rounded-full">
              Next
            </Button>
          ) : (
            <Button onClick={handleSubmit} className="bg-terracotta hover:bg-terracotta/90 text-white rounded-full">
              Submit Request
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
