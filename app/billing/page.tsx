import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CreditCard, DollarSign, FileText, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BillingPage() {
  return (
    <div className="container py-10">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Billing Portal</h1>
          <p className="text-muted-foreground">Manage invoices, process payments, and handle financial transactions</p>
        </div>

        <div className="w-full rounded-xl overflow-hidden mb-6 mt-2">
          <Image
            src="https://img.freepik.com/free-photo/medical-billing-statement-form-concept_53876-133697.jpg"
            width={1200}
            height={400}
            alt="Billing Portal"
            className="w-full h-[200px] object-cover"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Invoices</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">£4,250 total outstanding</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Payments Today</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">£1,240</div>
              <p className="text-xs text-muted-foreground">8 transactions processed</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">£28,450</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Overdue Payments</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">£1,850 past due for 30+ days</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="invoices" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="invoices">Invoices</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="claims">Insurance Claims</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          <TabsContent value="invoices" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Invoice Management</CardTitle>
                <CardDescription>Create and manage patient invoices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button asChild>
                    <Link href="/billing/invoices/new">Create New Invoice</Link>
                  </Button>
                  <div className="rounded-lg border">
                    <div className="flex items-center justify-between border-b p-4">
                      <div className="grid gap-1">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">Sarah Johnson</p>
                          <Badge variant="outline">Pending</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Invoice #INV-2023-001 • £120.00 • Due: 06/15/2023
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button size="sm">Process Payment</Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-b p-4">
                      <div className="grid gap-1">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">Michael Chen</p>
                          <Badge variant="outline">Pending</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Invoice #INV-2023-002 • £85.50 • Due: 06/23/2023
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button size="sm">Process Payment</Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between border-b p-4 bg-red-50 dark:bg-red-950/20">
                      <div className="grid gap-1">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">Robert Williams</p>
                          <Badge className="bg-red-100 text-red-800 hover:bg-red-100/80 dark:bg-red-900/30 dark:text-red-300">
                            Overdue
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Invoice #INV-2023-003 • £250.00 • Due: 05/04/2023
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button size="sm">Process Payment</Button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-4">
                      <div className="grid gap-1">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">Emily Rodriguez</p>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100/80 dark:bg-green-900/30 dark:text-green-300">
                            Paid
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Invoice #INV-2023-004 • £75.00 • Paid: 05/17/2023
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          Send Receipt
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="payments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Payment Processing</CardTitle>
                <CardDescription>Process and track patient payments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex w-full items-center space-x-2">
                    <input
                      type="search"
                      placeholder="Search payments..."
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <Button>Search</Button>
                  </div>
                  <div className="rounded-lg border">
                    <div className="flex items-center justify-between border-b p-4">
                      <div className="grid gap-1">
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">
                          Payment #PAY-2023-001 • £120.00 • Method: Credit Card
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                    <div className="flex items-center justify-between border-b p-4">
                      <div className="grid gap-1">
                        <p className="font-medium">Michael Chen</p>
                        <p className="text-sm text-muted-foreground">
                          Payment #PAY-2023-002 • £85.50 • Method: Insurance
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                    <div className="flex items-center justify-between border-b p-4">
                      <div className="grid gap-1">
                        <p className="font-medium">Emily Rodriguez</p>
                        <p className="text-sm text-muted-foreground">
                          Payment #PAY-2023-003 • £75.00 • Method: Online Payment
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-4">
                      <div className="grid gap-1">
                        <p className="font-medium">Jessica Thompson</p>
                        <p className="text-sm text-muted-foreground">Payment #PAY-2023-004 • £150.00 • Method: Check</p>
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
          <TabsContent value="claims" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Insurance Claims</CardTitle>
                <CardDescription>Manage and track insurance claims</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <Button asChild>
                    <Link href="/billing/claims/new">Submit New Claim</Link>
                  </Button>
                  <div className="rounded-lg border">
                    <div className="flex items-center justify-between border-b p-4">
                      <div className="grid gap-1">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">Sarah Johnson</p>
                          <Badge variant="outline">Submitted</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Claim #CLM-2023-001 • £350.00 • Blue Cross Blue Shield
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Track Status
                      </Button>
                    </div>
                    <div className="flex items-center justify-between border-b p-4">
                      <div className="grid gap-1">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">Michael Chen</p>
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100/80 dark:bg-green-900/30 dark:text-green-300">
                            Approved
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Claim #CLM-2023-002 • £425.00 • Aetna</p>
                      </div>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                    <div className="flex items-center justify-between border-b p-4">
                      <div className="grid gap-1">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">Robert Williams</p>
                          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80 dark:bg-yellow-900/30 dark:text-yellow-300">
                            Pending Review
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">Claim #CLM-2023-003 • £550.00 • Medicare</p>
                      </div>
                      <Button variant="outline" size="sm">
                        Track Status
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-4">
                      <div className="grid gap-1">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">Emily Rodriguez</p>
                          <Badge className="bg-red-100 text-red-800 hover:bg-red-100/80 dark:bg-red-900/30 dark:text-red-300">
                            Denied
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Claim #CLM-2023-004 • £275.00 • United Healthcare
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button size="sm">Appeal</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Financial Reports</CardTitle>
                <CardDescription>Generate and view financial reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Revenue Summary</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[200px] w-full bg-muted/30 rounded-md flex items-center justify-center">
                          <p className="text-sm text-muted-foreground">Revenue Chart Placeholder</p>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Total Revenue (MTD):</span>
                            <span className="font-medium">£28,450</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Outstanding Invoices:</span>
                            <span className="font-medium">£4,250</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Insurance Claims Pending:</span>
                            <span className="font-medium">£12,750</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Payment Methods</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="h-[200px] w-full bg-muted/30 rounded-md flex items-center justify-center">
                          <p className="text-sm text-muted-foreground">Payment Methods Chart Placeholder</p>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Credit Card:</span>
                            <span className="font-medium">45%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Insurance:</span>
                            <span className="font-medium">35%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Online Payment:</span>
                            <span className="font-medium">15%</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Other:</span>
                            <span className="font-medium">5%</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <h3 className="text-lg font-medium">Available Reports</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Button variant="outline" className="justify-start">
                        Monthly Revenue Report
                      </Button>
                      <Button variant="outline" className="justify-start">
                        Outstanding Invoices Report
                      </Button>
                      <Button variant="outline" className="justify-start">
                        Insurance Claims Status
                      </Button>
                      <Button variant="outline" className="justify-start">
                        Patient Payment History
                      </Button>
                      <Button variant="outline" className="justify-start">
                        Service Revenue Breakdown
                      </Button>
                      <Button variant="outline" className="justify-start">
                        Annual Financial Summary
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

