import { Header } from "@/components/header"
import { RecipeCard } from "@/components/recipe-card"

const allRecipes = [
  {
    category: "COOKIES",
    title: "The Surprising Ingredient for the Best Chocolate Chip Cookies",
    time: "25 mins",
    image: "/chocolate-chip-cookies-on-cooling-rack.jpg",
  },
  {
    category: "GROCERIES",
    title: "The Best Frozen Pizza To Buy at the Supermarket",
    time: "",
    image: "/frozen-pizza-with-fork.jpg",
  },
  {
    category: "SOUPS",
    title: "The 15-Minute Soup I Make for Instant Comfort",
    time: "15 mins",
    image: "/bowl-of-soup-with-vegetables.jpg",
  },
  {
    category: "CASSEROLES",
    title: "This Retro Scalloped Cabbage Is Even Better Than the Potato Version",
    time: "60 mins",
    image: "/scalloped-cabbage-casserole.jpg",
  },
]

export default function RecipesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">All Recipes</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allRecipes.map((recipe, index) => (
            <RecipeCard key={index} {...recipe} />
          ))}
        </div>
      </main>
    </div>
  )
}
