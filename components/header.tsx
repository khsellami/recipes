import { Heart, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
  const navItems = [
    { label: "RECIPE OF THE DAY", href: "/recipe-of-the-day" },
    { label: "RECIPES", href: "/recipes" },
    { label: "IN THE KITCHEN", href: "/in-the-kitchen" },
    { label: "TABLE TALK", href: "/table-talk" },
    { label: "HOLIDAYS & SEASONS", href: "/holidays-seasons" },
    { label: "ABOUT US", href: "/about-us" },
  ]

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <svg className="h-6 w-6 text-teal-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="text-xl font-serif font-semibold">Simply</span>
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs font-medium text-gray-700 hover:text-teal-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-red-500">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
