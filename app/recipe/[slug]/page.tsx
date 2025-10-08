import { Header } from "@/components/header"
import { Clock, Users, Heart, Printer, Share2, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function RecipePage({ params }: { params: { slug: string } }) {
  const recipeName = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="mx-auto max-w-4xl px-6 py-12">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <span className="text-teal-600 font-medium uppercase tracking-wide">RECIPE</span>
        </div>

        {/* Recipe Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-4 text-balance">{recipeName}</h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-6">
            A delicious and easy recipe that brings together simple ingredients to create an unforgettable dish your
            whole family will love.
          </p>

          {/* Author & Meta */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm text-gray-600">
              By <span className="font-semibold text-gray-900">ELISE BAUER</span>
            </span>
            <span className="text-gray-300">|</span>
            <span className="text-sm text-gray-600">Updated November 03, 2024</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-teal-600 fill-current" />
              ))}
            </div>
            <span className="text-sm text-gray-600">(127 ratings)</span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Heart className="h-4 w-4" />
              Save Recipe
            </Button>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Printer className="h-4 w-4" />
              Print
            </Button>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
          </div>
        </div>

        {/* Recipe Image */}
        <div className="aspect-video rounded-lg overflow-hidden mb-8">
          <img
            src="/chocolate-chip-cookies-on-cooling-rack.jpg"
            alt={recipeName}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Recipe Info Cards */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <Clock className="h-6 w-6 mx-auto mb-2 text-teal-600" />
            <div className="text-sm text-gray-500 mb-1">Prep Time</div>
            <div className="font-semibold text-gray-900">15 mins</div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <Clock className="h-6 w-6 mx-auto mb-2 text-teal-600" />
            <div className="text-sm text-gray-500 mb-1">Cook Time</div>
            <div className="font-semibold text-gray-900">30 mins</div>
          </div>
          <div className="border border-gray-200 rounded-lg p-4 text-center">
            <Users className="h-6 w-6 mx-auto mb-2 text-teal-600" />
            <div className="text-sm text-gray-500 mb-1">Servings</div>
            <div className="font-semibold text-gray-900">6-8</div>
          </div>
        </div>

        {/* Ingredients Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Ingredients</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300" />
                <span className="text-gray-700">2 cups all-purpose flour</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300" />
                <span className="text-gray-700">1 teaspoon baking soda</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300" />
                <span className="text-gray-700">1/2 teaspoon salt</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300" />
                <span className="text-gray-700">1 cup (2 sticks) butter, softened</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300" />
                <span className="text-gray-700">3/4 cup granulated sugar</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300" />
                <span className="text-gray-700">3/4 cup packed brown sugar</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300" />
                <span className="text-gray-700">2 large eggs</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300" />
                <span className="text-gray-700">2 teaspoons vanilla extract</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300" />
                <span className="text-gray-700">2 tablespoons milk powder</span>
              </li>
              <li className="flex items-start gap-3">
                <input type="checkbox" className="mt-1 h-4 w-4 rounded border-gray-300" />
                <span className="text-gray-700">2 cups chocolate chips</span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Instructions Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Instructions</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold">
                1
              </div>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Preheat the oven:</strong> Preheat your oven to 375°F (190°C). Line two baking sheets with
                  parchment paper.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold">
                2
              </div>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Mix dry ingredients:</strong> In a medium bowl, whisk together the flour, baking soda, salt,
                  and milk powder. Set aside.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold">
                3
              </div>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Cream butter and sugars:</strong> In a large bowl, beat the softened butter with both sugars
                  until light and fluffy, about 3-4 minutes.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold">
                4
              </div>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Add eggs and vanilla:</strong> Beat in the eggs one at a time, then add the vanilla extract
                  and mix until well combined.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold">
                5
              </div>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Combine wet and dry:</strong> Gradually add the flour mixture to the butter mixture, mixing on
                  low speed until just combined. Fold in the chocolate chips.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold">
                6
              </div>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Chill the dough:</strong> Cover the bowl and refrigerate for at least 30 minutes (or up to
                  overnight) for best results.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold">
                7
              </div>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Bake:</strong> Scoop rounded tablespoons of dough onto the prepared baking sheets, spacing
                  them 2 inches apart. Bake for 10-12 minutes, until the edges are golden but the centers still look
                  slightly underdone.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-semibold">
                8
              </div>
              <div className="flex-1">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Cool and serve:</strong> Let the cookies cool on the baking sheet for 5 minutes before
                  transferring to a wire rack. Enjoy warm or at room temperature!
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Tips Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Tips & Variations</h2>
          <div className="bg-teal-50 rounded-lg p-6 space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">The Secret Ingredient</h3>
              <p className="text-gray-700 leading-relaxed">
                The milk powder is the secret to extra chewy cookies! It adds a subtle caramel flavor and improves the
                texture significantly.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Storage</h3>
              <p className="text-gray-700 leading-relaxed">
                Store cookies in an airtight container at room temperature for up to 5 days, or freeze for up to 3
                months.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Make Ahead</h3>
              <p className="text-gray-700 leading-relaxed">
                The dough can be made ahead and refrigerated for up to 3 days, or frozen for up to 3 months. Bake
                directly from frozen, adding 1-2 minutes to the baking time.
              </p>
            </div>
          </div>
        </div>

        {/* Nutrition Info */}
        <div className="border-t border-gray-200 pt-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Nutrition Information</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <div className="text-gray-500">Calories</div>
              <div className="font-semibold text-gray-900">280</div>
            </div>
            <div>
              <div className="text-gray-500">Fat</div>
              <div className="font-semibold text-gray-900">14g</div>
            </div>
            <div>
              <div className="text-gray-500">Carbs</div>
              <div className="font-semibold text-gray-900">36g</div>
            </div>
            <div>
              <div className="text-gray-500">Protein</div>
              <div className="font-semibold text-gray-900">3g</div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4">
            Nutrition information is calculated using an ingredient database and should be considered an estimate.
          </p>
        </div>
      </main>
    </div>
  )
}
