import { RecipeCard } from "@/components/recipe-card"
import { ArrowRight } from "lucide-react"

const trendingRecipes = [
  {
    category: "COOKIES",
    title: "The Surprising Ingredient for the Best Chocolate Chip Cookies, According to a Pro Baker",
    time: "25 mins",
    image: "/chocolate-chip-cookies-on-cooling-rack.jpg",
  },
  {
    category: "GROCERIES",
    title: "The Best Frozen Pizza To Buy at the Supermarket, According to Pizza Experts",
    time: "",
    image: "/frozen-pizza-with-fork.jpg",
  },
  {
    category: "INGREDIENT GUIDES",
    title: "How To Wash Pears To Remove Dirt and Pesticides, According to an Expert",
    time: "",
    image: "/yellow-pears-on-white-background.jpg",
  },
  {
    category: "SOUPS",
    title: "The 15-Minute Soup I Make for Instant Comfort",
    time: "15 mins",
    image: "/bowl-of-soup-with-vegetables.jpg",
  },
  {
    category: "CELEBRITY",
    title: "This Retro Scalloped Cabbage Is Even Better Than the Potato Version",
    time: "",
    image: "/scalloped-cabbage-casserole.jpg",
  },
  {
    category: "SOUPS",
    title: "The Loaded Potato Soup You'll Want To Make All Winter Long",
    time: "60 mins",
    image: "/loaded-potato-soup-bowl.jpg",
  },
  {
    category: "INGREDIENT GUIDES",
    title: "My 1-Ingredient Upgrade for Better Roasted Vegetables (It's Already in Your Fridge)",
    time: "",
    image: "/roasted-vegetables-on-sheet-pan.jpg",
  },
  {
    category: "GROCERIES",
    title: "The Best Store-Bought Pancake Mix, According to a Chef",
    time: "",
    image: "/stack-of-pancakes-with-syrup.jpg",
  },
]

export function TrendingSection() {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-serif font-bold text-gray-900">Trending Today</h2>
        <button className="flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700">
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trendingRecipes.map((recipe, index) => (
          <RecipeCard key={index} {...recipe} />
        ))}
      </div>
    </section>
  )
}
