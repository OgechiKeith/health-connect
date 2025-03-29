import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">HealthConnect</h3>
            <p className="text-sm text-muted-foreground">
              A comprehensive digital health platform for patients and healthcare providers.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/registration" className="text-muted-foreground hover:text-foreground">
                  Patient Registration
                </Link>
              </li>
              <li>
                <Link href="/clinician" className="text-muted-foreground hover:text-foreground">
                  Clinician Portal
                </Link>
              </li>
              <li>
                <Link href="/pharmacy" className="text-muted-foreground hover:text-foreground">
                  Pharmacy Services
                </Link>
              </li>
              <li>
                <Link href="/billing" className="text-muted-foreground hover:text-foreground">
                  Billing & Payments
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/hipaa" className="text-muted-foreground hover:text-foreground">
                  HIPAA Compliance
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Email: support@healthconnect.com</li>
              <li className="text-muted-foreground">Phone: (555) 123-4567</li>
              <li className="text-muted-foreground">Hours: Mon-Fri, 8am-6pm</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} HealthConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

