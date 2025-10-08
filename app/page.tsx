import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { TrendingSection } from "@/components/trending-section"
import { WeeklySection } from "@/components/weekly-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="flex flex-col lg:flex-row">
        <HeroSection />
        <div className="flex-1 bg-[#f8f9fa] px-6 py-12 lg:px-12">
          <StatsSection />
          <TrendingSection />
          <WeeklySection />
        </div>
      </main>
    </div>
  )
}
