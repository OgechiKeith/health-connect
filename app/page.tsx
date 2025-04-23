import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ClipboardList, Stethoscope, PillIcon, CreditCard, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/10 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Comprehensive Healthcare at Your Fingertips
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                HealthConnect brings together patients, clinicians, pharmacies, and billing in one seamless digital
                platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link href="/register">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto lg:mx-0 w-full max-w-[500px] aspect-video rounded-xl bg-muted/50 overflow-hidden">
              <img
                src="https://img.freepik.com/free-photo/medical-banner-with-doctor-working-laptop_23-2149611193.jpg"
                alt="Digital Health Platform Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                HealthConnect offers a comprehensive suite of digital health services
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mt-12">
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="w-full h-32 rounded-md bg-primary/10 flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg"
                    alt="Registration Service"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <ClipboardList className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Registration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Quick and secure patient registration with data validation and event publishing.
                </p>
                <Button variant="link" size="sm" className="mt-4 p-0" asChild>
                  <Link href="/registration" className="flex items-center">
                    Register now <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="w-full h-32 rounded-md bg-primary/10 flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg"
                    alt="Clinician Portal"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Stethoscope className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Clinician Portal</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Manage patient consultations, document notes, and share diagnostic results.
                </p>
                <Button variant="link" size="sm" className="mt-4 p-0" asChild>
                  <Link href="/clinician" className="flex items-center">
                    Access portal <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="w-full h-32 rounded-md bg-primary/10 flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src="https://img.freepik.com/free-photo/medicine-capsules-global-health-with-geometric-pattern-digital-remix_53876-126742.jpg"
                    alt="Pharmacy Service"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <PillIcon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Pharmacy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Process prescriptions, check drug interactions, and fulfill medication orders.
                </p>
                <Button variant="link" size="sm" className="mt-4 p-0" asChild>
                  <Link href="/pharmacy" className="flex items-center">
                    View pharmacy <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="transition-all hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="w-full h-32 rounded-md bg-primary/10 flex items-center justify-center mb-4 overflow-hidden">
                  <img
                    src="https://img.freepik.com/free-photo/person-using-medical-billing-statement-form_53876-133698.jpg"
                    alt="Billing Service"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Billing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Generate invoices, process payments, and manage financial transactions.
                </p>
                <Button variant="link" size="sm" className="mt-4 p-0" asChild>
                  <Link href="/billing" className="flex items-center">
                    Manage billing <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* User Tabs Section */}
      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">For Patients & Providers</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                HealthConnect serves both patients and healthcare providers with specialized features
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-4xl mt-12">
            <Tabs defaultValue="patients" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="patients">For Patients</TabsTrigger>
                <TabsTrigger value="providers">For Providers</TabsTrigger>
              </TabsList>
              <TabsContent value="patients" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Patient Features</CardTitle>
                    <CardDescription>Everything you need to manage your healthcare journey</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Image
                      src="https://img.freepik.com/free-photo/doctor-with-stethoscope-hands-hospital-background_1423-1.jpg"
                      width="650"
                      height="365"
                      alt="Patient Care"
                      className="aspect-video overflow-hidden rounded-xl object-cover mb-4"
                    />
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 text-primary"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <div className="text-sm">
                          <p className="font-medium">Easy Registration</p>
                          <p className="text-muted-foreground">Simple and secure sign-up process</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 text-primary"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <div className="text-sm">
                          <p className="font-medium">Appointment Scheduling</p>
                          <p className="text-muted-foreground">Book and manage appointments online</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 text-primary"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <div className="text-sm">
                          <p className="font-medium">Prescription Tracking</p>
                          <p className="text-muted-foreground">Monitor your medications and refills</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 text-primary"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <div className="text-sm">
                          <p className="font-medium">Secure Payments</p>
                          <p className="text-muted-foreground">Pay bills online with secure processing</p>
                        </div>
                      </div>
                    </div>
                    <Button asChild className="w-full">
                      <Link href="/register">Create Patient Account</Link>
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="providers" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Provider Features</CardTitle>
                    <CardDescription>Tools designed for healthcare professionals</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Image
                      src="https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg"
                      width="650"
                      height="365"
                      alt="Healthcare Providers"
                      className="aspect-video overflow-hidden rounded-xl object-cover mb-4"
                    />
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 text-primary"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <div className="text-sm">
                          <p className="font-medium">Patient Management</p>
                          <p className="text-muted-foreground">Comprehensive patient record access</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 text-primary"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <div className="text-sm">
                          <p className="font-medium">E-Prescribing</p>
                          <p className="text-muted-foreground">Send prescriptions directly to pharmacies</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 text-primary"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <div className="text-sm">
                          <p className="font-medium">Scheduling System</p>
                          <p className="text-muted-foreground">Manage your calendar and appointments</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="rounded-full bg-primary/10 p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4 text-primary"
                          >
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </div>
                        <div className="text-sm">
                          <p className="font-medium">Billing Integration</p>
                          <p className="text-muted-foreground">Streamlined billing and insurance processing</p>
                        </div>
                      </div>
                    </div>
                    <Button asChild className="w-full">
                      <Link href="/provider-signup">Provider Sign Up</Link>
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Ready to Transform Your Healthcare Experience?
              </h2>
              <p className="max-w-[700px] md:text-xl">
                Join thousands of patients and providers already using HealthConnect
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/register">Create Account</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent">
                
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

