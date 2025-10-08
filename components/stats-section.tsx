export function StatsSection() {
  return (
    <div className="mb-12 flex items-center justify-center gap-8 text-center">
      <div>
        <div className="text-sm text-gray-500 mb-1">Less stress &</div>
        <div className="text-3xl font-serif font-bold text-teal-600">MORE JOY</div>
        <div className="text-sm text-gray-500 mt-1">since 2003</div>
      </div>
      <div className="w-16 h-16 border-2 border-teal-300 rounded-full flex items-center justify-center">
        <svg className="w-8 h-8 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div>
        <div className="text-sm text-gray-500 mb-1">Helping</div>
        <div className="text-3xl font-serif font-bold text-gray-900">15 Million</div>
        <div className="text-sm text-gray-500 mt-1">home cooks a month</div>
      </div>
      <div>
        <div className="text-sm text-gray-500 mb-1">Over</div>
        <div className="text-3xl font-serif font-bold text-gray-900">3,000</div>
        <div className="text-sm text-gray-500 mt-1">trusted and tested recipes</div>
      </div>
    </div>
  )
}
