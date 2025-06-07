import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import GetStartedSection from '@/components/GetStartedSection';
import FeatureCards from '@/components/FeatureCards';
import TopAppsSection from '@/components/TopAppsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="tabular-nums">
        <div className="flex flex-1 flex-col items-center min-h-[calc(100vh-80px)] md:min-h-screen mx-auto bg-background text-foreground mb-16 mt-0 max-w-full lg:mt-8">
          <HeroSection />
          <StatsSection />
          <GetStartedSection />
          <FeatureCards />
          <TopAppsSection />
        </div>
      </main>
    </div>
  );
};

export default Index;