import { Header } from "@/components/header"
import { RecipeListCard } from "@/components/recipe-list-card"

const recipes = [
  {
    title: "Classic Roast Turkey with Herb Butter",
    category: "THANKSGIVING",
    author: "ELISE BAUER",
    time: "3 hrs 30 mins",
    image: "/placeholder.svg?key=tur8y",
    slug: "classic-roast-turkey",
    rating: 5,
  },
  {
    title: "Perfect Pumpkin Pie from Scratch",
    category: "THANKSGIVING",
    author: "EMMA CHRISTENSEN",
    time: "1 hr 45 mins",
    image: "/placeholder.svg?key=pmp9k",
    slug: "perfect-pumpkin-pie",
    rating: 5,
  },
  {
    title: "Christmas Sugar Cookies with Royal Icing",
    category: "CHRISTMAS",
    author: "ELISE BAUER",
    time: "2 hrs",
    image: "/placeholder.svg?key=xm4sc",
    slug: "christmas-sugar-cookies",
  },
  {
    title: "Honey Glazed Ham for Easter",
    category: "EASTER",
    author: "EMMA CHRISTENSEN",
    time: "2 hrs 15 mins",
    image: "/placeholder.svg?key=e4st3",
    slug: "honey-glazed-ham",
    rating: 5,
  },
  {
    title: "Summer Berry Tart with Vanilla Cream",
    category: "SUMMER",
    author: "ELISE BAUER",
    time: "1 hr 30 mins",
    image: "/placeholder.svg?key=s7mm3",
    slug: "summer-berry-tart",
  },
  {
    title: "Spiced Apple Cider for Fall",
    category: "FALL",
    author: "EMMA CHRISTENSEN",
    time: "30 mins",
    image: "/placeholder.svg?key=f4ll9",
    slug: "spiced-apple-cider",
    rating: 5,
  },
]

export default function HolidaysSeasonsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <div className="text-sm text-gray-500 mb-4">
          <span className="text-teal-600 font-medium uppercase tracking-wide">FILED UNDER: HOLIDAYS & SEASONS</span>
        </div>
        <h1 className="text-5xl font-serif font-bold text-gray-900 mb-4 text-balance">Holidays & Seasons</h1>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          Celebrate every season and holiday with our collection of festive recipes and ideas. From Thanksgiving turkey
          to Christmas cookies, Easter brunch to summer BBQ, find the perfect dishes for your special occasions.
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
