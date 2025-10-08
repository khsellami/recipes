import { Header } from "@/components/header"
import { RecipeListCard } from "@/components/recipe-list-card"

const recipes = [
  {
    title: "Essential Knife Skills Every Home Cook Should Master",
    category: "COOKING TECHNIQUES",
    author: "ELISE BAUER",
    image: "/chef-knife-cutting-vegetables.jpg",
    slug: "essential-knife-skills",
  },
  {
    title: "How to Season and Care for Your Cast Iron Skillet",
    category: "KITCHEN TIPS",
    author: "EMMA CHRISTENSEN",
    time: "15 mins",
    image: "/cast-iron-skillet-seasoning.jpg",
    slug: "cast-iron-care",
    rating: 5,
  },
  {
    title: "The Best Way to Store Fresh Herbs",
    category: "KITCHEN TIPS",
    author: "ELISE BAUER",
    time: "10 mins",
    image: "/fresh-herbs-in-jars.jpg",
    slug: "store-fresh-herbs",
  },
  {
    title: "How to Make Perfect Rice Every Time",
    category: "COOKING TECHNIQUES",
    author: "EMMA CHRISTENSEN",
    time: "25 mins",
    image: "/fluffy-white-rice-in-pot.jpg",
    slug: "perfect-rice",
    rating: 5,
  },
  {
    title: "Kitchen Organization Tips for Small Spaces",
    category: "KITCHEN TIPS",
    author: "ELISE BAUER",
    image: "/organized-kitchen-drawers.jpg",
    slug: "kitchen-organization",
  },
  {
    title: "How to Properly Measure Ingredients for Baking",
    category: "BAKING BASICS",
    author: "EMMA CHRISTENSEN",
    time: "5 mins",
    image: "/measuring-cups-and-spoons.jpg",
    slug: "measure-ingredients",
  },
]

export default function InTheKitchenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <div className="text-sm text-gray-500 mb-4">
          <span className="text-teal-600 font-medium uppercase tracking-wide">FILED UNDER: IN THE KITCHEN</span>
        </div>
        <h1 className="text-5xl font-serif font-bold text-gray-900 mb-4 text-balance">In The Kitchen</h1>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          Master essential cooking techniques, learn kitchen tips and tricks, and discover expert advice to help you
          become a more confident home cook.
        </p>

        <div className="space-y-8">
          {recipes.map((recipe, index) => (
            <RecipeListCard key={index} {...recipe} />
          ))}
        </div>
      </main>
    </div>
  )
}
