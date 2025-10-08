import Link from "next/link"
import { Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Newsletter Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-teal-600 flex items-center justify-center">
                  <div className="h-6 w-6 rounded-full border-2 border-white" />
                </div>
                <span className="text-2xl font-bold text-teal-600">Simply</span>
                <span className="text-2xl font-bold text-gray-900">RECIPES</span>
              </div>
            </div>
            <h3 className="text-xl font-serif font-bold mb-2">Ready to cook?</h3>
            <p className="text-gray-600 mb-4">Sign up for our weekly newsletters!</p>
            <div className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6">SIGN UP</Button>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <span className="text-sm font-semibold text-gray-900">LET'S BE FRIENDS!</span>
              <div className="flex gap-2">
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full bg-orange-600 hover:bg-orange-700 text-white border-0"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full bg-orange-600 hover:bg-orange-700 text-white border-0"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.5 0C5.6 0 0 5.6 0 12.5c0 5.5 3.6 10.2 8.5 11.8.6.1.8-.3.8-.6v-2c-3.5.8-4.2-1.7-4.2-1.7-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.4-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 5-1.6 8.5-6.3 8.5-11.8C25 5.6 19.4 0 12.5 0z" />
                  </svg>
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full bg-orange-600 hover:bg-orange-700 text-white border-0"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="rounded-full bg-orange-600 hover:bg-orange-700 text-white border-0"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.5 6.2c-.8.4-1.7.6-2.6.7.9-.6 1.6-1.4 2-2.4-.9.5-1.8.9-2.8 1.1-.8-.9-2-1.4-3.3-1.4-2.5 0-4.5 2-4.5 4.5 0 .4 0 .7.1 1-3.7-.2-7-2-9.2-4.7-.4.7-.6 1.4-.6 2.3 0 1.6.8 3 2 3.8-.7 0-1.4-.2-2-.5v.1c0 2.2 1.6 4 3.6 4.4-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 1.9 2.4 3.3 4.5 3.3-1.6 1.3-3.7 2-5.9 2-.4 0-.8 0-1.2-.1 2.2 1.4 4.8 2.2 7.5 2.2 9 0 14-7.5 14-14v-.6c1-.7 1.8-1.6 2.5-2.5z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <ul className="space-y-3">
              <li>
                <Link href="/recipes" className="text-teal-600 hover:text-teal-700 font-semibold">
                  RECIPES
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="text-teal-600 hover:text-teal-700 font-semibold">
                  QUICK & EASY
                </Link>
              </li>
              <li>
                <Link href="/in-the-kitchen" className="text-teal-600 hover:text-teal-700 font-semibold">
                  IN THE KITCHEN
                </Link>
              </li>
              <li>
                <Link href="/recipes" className="text-teal-600 hover:text-teal-700 font-semibold">
                  BUYING GUIDES
                </Link>
              </li>
              <li>
                <Link href="/holidays-seasons" className="text-teal-600 hover:text-teal-700 font-semibold">
                  HOLIDAYS & SEASONS
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <ul className="space-y-3">
              <li>
                <Link href="/about-us" className="text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Editorial Guidelines
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Advertise
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-gray-900">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span className="font-bold text-gray-900">People Inc.</span>
            <span>Simply Recipes is part of the</span>
            <Link href="#" className="text-teal-600 hover:text-teal-700 underline">
              People Inc.
            </Link>
            <span>publishing family.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
