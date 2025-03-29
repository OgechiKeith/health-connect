import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { PillIcon, Package, CheckCircle, AlertCircle } from "lucide-react"
import Image from "next/image"

export default function PharmacyPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Pharmacy Portal</h1>
          <p className="text-muted-foreground">
            Manage prescriptions, check drug interactions, and fulfill medication orders
          </p>
        </div>

        <div className="w-full rounded-xl overflow-hidden mb-6 mt-2">
          <Image
            src="https://img.freepik.com/free-photo/pharmacist-holding-medicine-box-pharmacy_1170-5728.jpg"
            width={1200}
            height={400}
            alt="Pharmacy Portal"
            className="w-full h-[200px] object-cover"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Prescriptions</CardTitle>
              <PillIcon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">3 require pharmacist review</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Processing</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">5 ready for pickup today</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">In the last 7 days</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Issues</CardTitle>
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Require immediate attention</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="new" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="new">New</TabsTrigger>
            <TabsTrigger value="processing">Processing</TabsTrigger>
            <TabsTrigger value="ready">Ready for Pickup</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          <TabsContent value="new" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>New Prescriptions</CardTitle>
                <CardDescription>Review and process new prescription orders</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">Sarah Johnson</p>
                          <Badge variant="outline">New Patient</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Lisinopril 10mg - 30 day supply</p>
                        <p className="text-sm text-muted-foreground">Prescribed by: Dr. Robert Smith</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Review
                        </Button>
                        <Button size="sm">Process</Button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4 bg-yellow-50 dark:bg-yellow-950/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">Michael Chen</p>
                          <Badge className="bg-yellow-200 text-yellow-900 hover:bg-yellow-200/80 dark:bg-yellow-900/30 dark:text-yellow-400">
                            Interaction Alert
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Warfarin 5mg - 30 day supply</p>
                        <p className="text-sm text-muted-foreground">Prescribed by: Dr. Jennifer Lee</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Review
                        </Button>
                        <Button size="sm">Process</Button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Emily Rodriguez</p>
                        <p className="text-sm text-muted-foreground">Amoxicillin 500mg - 10 day supply</p>
                        <p className="text-sm text-muted-foreground">Prescribed by: Dr. David Wilson</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Review
                        </Button>
                        <Button size="sm">Process</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="processing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Processing</CardTitle>
                <CardDescription>Prescriptions currently being processed</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Robert Williams</p>
                        <p className="text-sm text-muted-foreground">Atorvastatin 20mg - 90 day supply</p>
                        <p className="text-sm text-muted-foreground">Status: Filling</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button size="sm">Complete</Button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Jessica Thompson</p>
                        <p className="text-sm text-muted-foreground">Metformin 500mg - 30 day supply</p>
                        <p className="text-sm text-muted-foreground">Status: Awaiting Insurance Approval</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button size="sm">Complete</Button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Daniel Brown</p>
                        <p className="text-sm text-muted-foreground">Levothyroxine 50mcg - 30 day supply</p>
                        <p className="text-sm text-muted-foreground">Status: Ready for Pharmacist Check</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button size="sm">Complete</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="ready" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Ready for Pickup</CardTitle>
                <CardDescription>Prescriptions ready for patient pickup</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">Lisinopril 10mg - Ready since: 05/15/2023</p>
                        <p className="text-sm text-muted-foreground">Patient notified: Yes</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Notify Again
                        </Button>
                        <Button size="sm">Mark as Picked Up</Button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Michael Chen</p>
                        <p className="text-sm text-muted-foreground">Metformin 500mg - Ready since: 05/16/2023</p>
                        <p className="text-sm text-muted-foreground">Patient notified: Yes</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Notify Again
                        </Button>
                        <Button size="sm">Mark as Picked Up</Button>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Emily Rodriguez</p>
                        <p className="text-sm text-muted-foreground">Amoxicillin 500mg - Ready since: 05/17/2023</p>
                        <p className="text-sm text-muted-foreground">Patient notified: No</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Notify Patient
                        </Button>
                        <Button size="sm">Mark as Picked Up</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Prescription History</CardTitle>
                <CardDescription>View and search past prescription records</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex w-full items-center space-x-2">
                    <input
                      type="search"
                      placeholder="Search prescriptions..."
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <Button>Search</Button>
                  </div>
                  <div className="rounded-lg border">
                    <div className="flex items-center justify-between border-b p-4">
                      <div className="grid gap-1">
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">Lisinopril 10mg - Dispensed: 04/15/2023</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                    <div className="flex items-center justify-between border-b p-4">
                      <div className="grid gap-1">
                        <p className="font-medium">Michael Chen</p>
                        <p className="text-sm text-muted-foreground">Metformin 500mg - Dispensed: 04/23/2023</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                    <div className="flex items-center justify-between border-b p-4">
                      <div className="grid gap-1">
                        <p className="font-medium">Robert Williams</p>
                        <p className="text-sm text-muted-foreground">Atorvastatin 20mg - Dispensed: 05/04/2023</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-4">
                      <div className="grid gap-1">
                        <p className="font-medium">Emily Rodriguez</p>
                        <p className="text-sm text-muted-foreground">Amoxicillin 500mg - Dispensed: 05/10/2023</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
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

