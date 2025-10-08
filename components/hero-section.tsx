import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="relative lg:w-1/2 min-h-[600px] lg:min-h-screen">
      <img
        src="/close-up-of-cheesy-casserole-with-green-onions.jpg"
        alt="Cheesy casserole"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <Button variant="ghost" size="icon" className="absolute top-6 right-6 bg-white/90 hover:bg-white rounded-full">
        <Heart className="h-5 w-5" />
      </Button>

      <div className="absolute bottom-8 left-8 right-8 bg-white p-6 rounded-lg shadow-lg max-w-sm">
        <div className="text-xs font-medium text-teal-600 uppercase tracking-wide mb-2">Casseroles</div>
        <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3 text-balance">
          My Pumpkin Chicken Pasta Bake Is a Cozy Family Favorite
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          This weeknight-friendly pumpkin chicken pasta bake recipe uses canned pumpkin to create a creamy, silky sauce.
        </p>
      </div>
    </div>
  )
}
