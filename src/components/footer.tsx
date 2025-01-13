export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-pinyon-script text-2xl mb-4">Locations</h3>
            <div className="space-y-2">
              <p>Atlanta</p>
              <p>900 3rd Street</p>
              <p>Atlanta, GA 30308</p>
            </div>
          </div>
          <div>
            <h3 className="font-pinyon-script text-2xl mb-4">Hours</h3>
            <div className="space-y-2">
              <p>Monday - Thursday: 5pm - 10pm</p>
              <p>Friday - Saturday: 5pm - 11pm</p>
              <p>Sunday: 5pm - 9pm</p>
            </div>
          </div>
          <div>
            <h3 className="font-pinyon-script text-2xl mb-4">Contact</h3>
            <div className="space-y-2">
              <p>Phone: (678) 555-0123</p>
              <p>Email: info@colletta.com</p>
            </div>
          </div>
          <div>
            <h3 className="font-pinyon-script text-2xl mb-4">Follow Us</h3>
            <div className="space-y-2">
              <p>Instagram</p>
              <p>Facebook</p>
              <p>Twitter</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Colletta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

