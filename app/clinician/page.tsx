import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, ClipboardList, MessageSquare, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ClinicianPortalPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Clinician Portal</h1>
          <p className="text-muted-foreground">Manage patient consultations, diagnoses, and prescriptions</p>
        </div>

        <div className="w-full rounded-xl overflow-hidden mb-6 mt-2">
          <Image
            src="https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg"
            width={1200}
            height={400}
            alt="Clinician Portal"
            className="w-full h-[200px] object-cover"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">245</div>
              <p className="text-xs text-muted-foreground">+4 new patients this week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Appointments Today</CardTitle>
              <CalendarDays className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">3 pending confirmations</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Diagnoses</CardTitle>
              <ClipboardList className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">2 urgent cases requiring review</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Messages</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">3 unread messages from patients</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="appointments" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="patients">Patients</TabsTrigger>
            <TabsTrigger value="diagnoses">Diagnoses</TabsTrigger>
            <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
          </TabsList>
          <TabsContent value="appointments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Today's Appointments</CardTitle>
                <CardDescription>Manage your schedule and patient appointments for today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Appointment items */}
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">9:00 AM - Annual Check-up</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                        <Button size="sm">Start Session</Button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Michael Chen</p>
                        <p className="text-sm text-muted-foreground">10:30 AM - Follow-up Consultation</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                        <Button size="sm">Start Session</Button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Emily Rodriguez</p>
                        <p className="text-sm text-muted-foreground">1:15 PM - New Patient Consultation</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                        <Button size="sm">Start Session</Button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Robert Williams</p>
                        <p className="text-sm text-muted-foreground">3:00 PM - Medication Review</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Reschedule
                        </Button>
                        <Button size="sm">Start Session</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="patients" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Patient Management</CardTitle>
                <CardDescription>Search and manage your patient records</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex w-full items-center space-x-2">
                    <input
                      type="search"
                      placeholder="Search patients..."
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <Button>Search</Button>
                  </div>
                  <div className="rounded-lg border">
                    <div className="flex items-center justify-between border-b p-4">
                      <div className="grid gap-1">
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">ID: P-12345 • DOB: 05/12/1985</p>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/clinician/patients/12345">View Record</Link>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between border-b p-4">
                      <div className="grid gap-1">
                        <p className="font-medium">Michael Chen</p>
                        <p className="text-sm text-muted-foreground">ID: P-12346 • DOB: 11/23/1978</p>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/clinician/patients/12346">View Record</Link>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between border-b p-4">
                      <div className="grid gap-1">
                        <p className="font-medium">Emily Rodriguez</p>
                        <p className="text-sm text-muted-foreground">ID: P-12347 • DOB: 03/17/1992</p>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/clinician/patients/12347">View Record</Link>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-4">
                      <div className="grid gap-1">
                        <p className="font-medium">Robert Williams</p>
                        <p className="text-sm text-muted-foreground">ID: P-12348 • DOB: 09/04/1965</p>
                      </div>
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/clinician/patients/12348">View Record</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="diagnoses" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pending Diagnoses</CardTitle>
                <CardDescription>Review and complete patient diagnoses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">Consultation Date: 05/15/2023</p>
                      </div>
                      <Button size="sm" asChild>
                        <Link href="/clinician/diagnoses/12345">Complete Diagnosis</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Michael Chen</p>
                        <p className="text-sm text-muted-foreground">Consultation Date: 05/16/2023</p>
                      </div>
                      <Button size="sm" asChild>
                        <Link href="/clinician/diagnoses/12346">Complete Diagnosis</Link>
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4 bg-red-50 dark:bg-red-950/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">Emily Rodriguez</p>
                          <span className="rounded-full bg-red-100 px-2 py-1 text-xs font-medium text-red-800 dark:bg-red-900/30 dark:text-red-300">
                            Urgent
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">Consultation Date: 05/17/2023</p>
                      </div>
                      <Button size="sm" asChild>
                        <Link href="/clinician/diagnoses/12347">Complete Diagnosis</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="prescriptions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Prescription Management</CardTitle>
                <CardDescription>Create and manage patient prescriptions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button asChild>
                    <Link href="/clinician/prescriptions/new">Create New Prescription</Link>
                  </Button>
                  <div className="rounded-lg border">
                    <div className="flex items-center justify-between border-b p-4">
                      <div className="grid gap-1">
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">Lisinopril 10mg - Expires: 06/15/2023</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Renew
                        </Button>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-b p-4">
                      <div className="grid gap-1">
                        <p className="font-medium">Michael Chen</p>
                        <p className="text-sm text-muted-foreground">Metformin 500mg - Expires: 07/23/2023</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Renew
                        </Button>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4">
                      <div className="grid gap-1">
                        <p className="font-medium">Robert Williams</p>
                        <p className="text-sm text-muted-foreground">Atorvastatin 20mg - Expires: 08/04/2023</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Renew
                        </Button>
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

