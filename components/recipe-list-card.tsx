"use client"

import Link from "next/link"
import { Heart, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface RecipeListCardProps {
  title: string
  category: string
  author: string
  time?: string
  image: string
  slug: string
  rating?: number
}

export function RecipeListCard({ title, category, author, time, image, slug, rating }: RecipeListCardProps) {
  return (
    <Link href={`/recipe/${slug}`} className="group block">
      <article className="flex gap-4 pb-6 border-b border-gray-200 hover:bg-gray-50 transition-colors p-4 -m-4 rounded-lg">
        <div className="relative w-48 h-32 flex-shrink-0 rounded-lg overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/90 hover:bg-white"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
          >
            <Heart className="h-4 w-4 text-gray-700" />
          </Button>
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-semibold text-orange-600 uppercase tracking-wide mb-2">{category}</div>
          <h3 className="text-xl font-serif font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{author}</p>
          {time && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Clock className="h-4 w-4" />
              <span>{time}</span>
            </div>
          )}
          {rating && (
            <div className="flex items-center gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 ${i < rating ? "text-teal-600 fill-current" : "text-gray-300"}`}
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  )
}
