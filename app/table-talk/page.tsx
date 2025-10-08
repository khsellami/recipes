import { Header } from "@/components/header"
import { RecipeListCard } from "@/components/recipe-list-card"

const articles = [
  {
    title: "The Family Recipe That Brings Us Together Every Holiday",
    category: "FAMILY STORIES",
    author: "ELISE BAUER",
    image: "/family-dinner-table-holiday.jpg",
    slug: "family-recipe-holiday",
  },
  {
    title: "Why Sunday Dinners Matter More Than Ever",
    category: "TRADITIONS",
    author: "EMMA CHRISTENSEN",
    time: "5 min read",
    image: "/sunday-dinner-table-setting.jpg",
    slug: "sunday-dinners-matter",
  },
  {
    title: "Teaching My Kids to Cook: Lessons from the Kitchen",
    category: "FAMILY COOKING",
    author: "ELISE BAUER",
    time: "8 min read",
    image: "/parent-teaching-child-to-cook.jpg",
    slug: "teaching-kids-to-cook",
    rating: 5,
  },
  {
    title: "The Lost Art of Handwritten Recipe Cards",
    category: "NOSTALGIA",
    author: "EMMA CHRISTENSEN",
    time: "6 min read",
    image: "/vintage-recipe-cards-handwritten.jpg",
    slug: "handwritten-recipe-cards",
  },
  {
    title: "How Food Connects Us Across Generations",
    category: "FAMILY STORIES",
    author: "ELISE BAUER",
    time: "7 min read",
    image: "/grandmother-cooking-with-grandchild.jpg",
    slug: "food-connects-generations",
    rating: 5,
  },
]

export default function TableTalkPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <div className="text-sm text-gray-500 mb-4">
          <span className="text-teal-600 font-medium uppercase tracking-wide">FILED UNDER: TABLE TALK</span>
        </div>
        <h1 className="text-5xl font-serif font-bold text-gray-900 mb-4 text-balance">Table Talk</h1>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">
          Join the conversation about food, family, and the stories that bring us together around the table. Explore
          traditions, memories, and the meaningful connections we create through cooking and sharing meals.
        </p>

        <div className="space-y-8">
          {articles.map((article, index) => (
            <RecipeListCard key={index} {...article} />
          ))}
        </div>
      </main>
    </div>
  )
}
