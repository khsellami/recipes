import { Header } from "@/components/header"
import { RecipeCard } from "@/components/recipe-card"

export default function RecipeOfTheDayPage() {
  const featuredRecipe = {
    category: "CASSEROLES",
    title: "Cheesy Green Onion Casserole - The Ultimate Comfort Food",
    time: "45 mins",
    image: "/close-up-of-cheesy-casserole-with-green-onions.jpg",
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">Recipe of the Day</h1>
        <div className="max-w-2xl">
          <RecipeCard {...featuredRecipe} />
        </div>
      </main>
    </div>
  )
}
