import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import PatientRegistrationForm from "@/components/patient-registration-form"
import ProviderRegistrationForm from "@/components/provider-registration-form"
import Image from "next/image"

export default function RegistrationPage() {
  return (
    <div className="container max-w-5xl py-10 md:py-16">
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl mb-3">Registration Portal</h1>
        <p className="text-muted-foreground max-w-[700px]">
          Join our digital health platform to access comprehensive healthcare services. Choose the appropriate
          registration form below.
        </p>
      </div>

      <div className="w-full rounded-xl overflow-hidden mb-10">
        <Image
          src="https://img.freepik.com/free-photo/doctor-filling-up-medical-form-with-patient-clipboard_1301-7783.jpg"
          width={1200}
          height={400}
          alt="Registration Portal"
          className="w-full h-[250px] object-cover"
        />
      </div>

      <Tabs defaultValue="patient" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="patient">Patient Registration</TabsTrigger>
          <TabsTrigger value="provider">Provider Registration</TabsTrigger>
        </TabsList>
        <TabsContent value="patient">
          <Card>
            <CardHeader>
              <CardTitle>Patient Registration</CardTitle>
              <CardDescription>Create a new patient account to access our healthcare services</CardDescription>
            </CardHeader>
            <CardContent>
              <PatientRegistrationForm />
            </CardContent>
            <CardFooter className="flex flex-col items-start border-t px-6 py-4">
              <p className="text-sm text-muted-foreground mb-2">
                Already have an account?{" "}
                <a href="/login" className="text-primary hover:underline">
                  Log in
                </a>
              </p>
              <p className="text-xs text-muted-foreground">
                By registering, you agree to our{" "}
                <a href="/terms" className="underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="underline">
                  Privacy Policy
                </a>
                .
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="provider">
          <Card>
            <CardHeader>
              <CardTitle>Provider Registration</CardTitle>
              <CardDescription>Create a healthcare provider account to join our network</CardDescription>
            </CardHeader>
            <CardContent>
              <ProviderRegistrationForm />
            </CardContent>
            <CardFooter className="flex flex-col items-start border-t px-6 py-4">
              <p className="text-sm text-muted-foreground mb-2">
                Already have an account?{" "}
                <a href="/login" className="text-primary hover:underline">
                  Log in
                </a>
              </p>
              <p className="text-xs text-muted-foreground">
                By registering, you agree to our{" "}
                <a href="/terms" className="underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="/privacy" className="underline">
                  Privacy Policy
                </a>
                .
              </p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-12 text-center">
        <h2 className="text-xl font-semibold mb-4">Why Register with HealthConnect?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 bg-muted rounded-lg">
            <h3 className="font-medium mb-2">Seamless Experience</h3>
            <p className="text-sm text-muted-foreground">Access all your healthcare needs in one integrated platform</p>
          </div>
          <div className="p-6 bg-muted rounded-lg">
            <h3 className="font-medium mb-2">Secure & Compliant</h3>
            <p className="text-sm text-muted-foreground">
              Your data is protected with HIPAA-compliant security measures
            </p>
          </div>
          <div className="p-6 bg-muted rounded-lg">
            <h3 className="font-medium mb-2">Real-time Updates</h3>
            <p className="text-sm text-muted-foreground">
              Get notifications for appointments, prescriptions, and billing
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

