import { BrewGuidePreview } from "@/components/home/BrewGuidePreview";
import { BrewOfTheDay } from "@/components/home/BrewOfTheDay";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { FlavorQuiz } from "@/components/home/FlavorQuiz";
import { HeroSection } from "@/components/home/HeroSection";
import { ReviewsCarousel } from "@/components/home/ReviewsCarousel";

export default function Home() {
  return (
    <main className="bg-coffee-latte">
      <HeroSection />
      <FeaturedProducts />
      <BrewOfTheDay />
      <ReviewsCarousel />
      <FlavorQuiz />
      <BrewGuidePreview />
    </main>
  );
}
