import { ArrowRight } from "lucide-react"

export function WeeklySection() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-serif font-bold text-gray-900">Simply (Weeknight) Recipes</h2>
        <button className="flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700">
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400">
        Additional recipes section
      </div>
    </section>
  )
}
