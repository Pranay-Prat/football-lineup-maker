import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import JsonLd from "@/components/seo/JsonLd";

export default async function Home() {
  return (
    <>
      <JsonLd />
      <div className="min-h-screen bg-background font-sans">
        <main>
          <HeroSection />
          <AboutSection />
        </main>
      </div>
    </>
  );
}

