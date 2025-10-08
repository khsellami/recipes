import { Heart, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface RecipeCardProps {
  category: string
  title: string
  time?: string
  image: string
  slug?: string
}

export function RecipeCard({ category, title, time, image, slug }: RecipeCardProps) {
  const recipeSlug =
    slug ||
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

  return (
    <Link href={`/recipe/${recipeSlug}`} className="block">
      <article className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 bg-white/90 hover:bg-white rounded-full"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        <div className="p-4">
          <div className="text-xs font-medium text-teal-600 uppercase tracking-wide mb-2">{category}</div>
          <h3 className="text-lg font-serif font-semibold text-gray-900 mb-2 leading-snug group-hover:text-teal-600 transition-colors text-balance">
            {title}
          </h3>
          {time && (
            <div className="flex items-center gap-1 text-sm text-gray-500">
              <Clock className="h-4 w-4" />
              <span>{time}</span>
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}
