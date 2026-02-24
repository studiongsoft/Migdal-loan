import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FooterIllustration } from "@/components/FooterIllustration";

export default function Home() {
  return (
    <main className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-[var(--color-white)]">
      {/* Header - Logo always visible */}
      <div className="relative z-20 shrink-0">
        <Header />
      </div>

      {/* Main Content Area - 40px from header */}
      <div className="mt-4 flex flex-1 flex-col items-center px-[16px] md:px-0">
        {/* Hero Section */}
        <div className="flex w-full max-w-[1920px] flex-col items-center">
          <HeroSection />
        </div>
      </div>

      {/* Footer Illustration - positioned at bottom left - Hidden on mobile */}
      <div className="absolute bottom-0 left-[-20px] hidden md:block">
        <FooterIllustration />
      </div>
    </main>
  );
}
