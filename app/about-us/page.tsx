import { Header } from "@/components/header"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-5xl font-serif font-bold text-gray-900 mb-8 text-balance">About Simply Recipes</h1>

        <div className="prose prose-lg max-w-none">
          <div className="mb-12">
            <img
              src="/kitchen-cooking-family.jpg"
              alt="Simply Recipes Kitchen"
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-xl font-semibold text-gray-900">
              Simply Recipes is a trusted resource for home cooks with more than 3,000 tested recipes, guides, and meal
              plans, drawing over 15 million readers each month from around the world.
            </p>

            <p>
              We're supported by a diverse group of recipe developers, food writers, recipe and product testers,
              photographers, and other creative professionals.
            </p>

            <h2 className="text-3xl font-serif font-bold text-gray-900 mt-12 mb-6">Our Mission</h2>
            <p>
              Our mission is to help home cooks of all levels find inspiration and confidence in the kitchen. We believe
              that cooking should be accessible, enjoyable, and rewarding for everyone.
            </p>

            <h2 className="text-3xl font-serif font-bold text-gray-900 mt-12 mb-6">Our Story</h2>
            <p>
              Simply Recipes was founded in 2003 by Elise Bauer as a way to share family recipes and connect with other
              home cooks. What started as a personal blog has grown into one of the most trusted recipe websites on the
              internet.
            </p>
            <p>
              Every recipe on Simply Recipes is tested multiple times by our team of experienced recipe developers and
              testers. We don't publish a recipe until we're confident it will work in your kitchen.
            </p>

            <h2 className="text-3xl font-serif font-bold text-gray-900 mt-12 mb-6">Our Values</h2>
            <ul className="space-y-3 list-disc pl-6">
              <li>
                <strong>Trust:</strong> Every recipe is thoroughly tested and reviewed before publication
              </li>
              <li>
                <strong>Accessibility:</strong> We write clear, easy-to-follow instructions for cooks of all skill
                levels
              </li>
              <li>
                <strong>Community:</strong> We value the feedback and stories from our readers
              </li>
              <li>
                <strong>Quality:</strong> We use high-quality ingredients and proven techniques
              </li>
              <li>
                <strong>Authenticity:</strong> We respect traditional recipes while embracing innovation
              </li>
            </ul>

            <h2 className="text-3xl font-serif font-bold text-gray-900 mt-12 mb-6">Editorial Guidelines</h2>
            <p>
              Our editorial team follows strict guidelines to ensure accuracy, clarity, and usefulness in every piece of
              content we publish. We test recipes multiple times, fact-check all information, and regularly update our
              content to reflect the latest cooking techniques and food trends.
            </p>

            <h2 className="text-3xl font-serif font-bold text-gray-900 mt-12 mb-6">Contact Us</h2>
            <p>
              We love hearing from our readers! Whether you have a question about a recipe, want to share your cooking
              success, or have suggestions for future content, we're here to help.
            </p>
            <p className="text-teal-600 font-semibold">Email us at: hello@simplyrecipes.com</p>
          </div>
        </div>
      </main>
    </div>
  )
}
