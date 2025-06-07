import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import RoutingCurves from './RoutingCurves';
import FeaturedModels from './FeaturedModels';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center gap-24 px-6 md:gap-28 md:px-8 md:pt-8">
      <div className="flex w-full max-w-4xl flex-col justify-center py-8 md:py-0">
        <div className="mb-3 flex flex-col gap-2 md:-mb-48 md:gap-1">
          <h1 className="my-0 w-full py-0 text-5xl font-semibold">
            <span className="mb-1 hidden md:block">The Unified</span>
            <span className="hidden md:block">Interface For LLMs</span>
            <span className="flex flex-col gap-0.5 text-3xl md:hidden">
              <div>The Unified</div>
              <div>Interface For LLMs</div>
            </span>
          </h1>
          <p className="text-slate-11 text-md mb-4 md:mb-8 md:pt-2 md:text-xl">
            Better <a href="#" className="text-primary hover:underline">prices</a>, better{' '}
            <a href="#" className="text-primary hover:underline">uptime</a>, no subscription.
          </p>
        </div>
        
        <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-16 min-w-full flex-shrink-0">
          <div className="group/card text-card-foreground rounded-xl transition-all duration-200 hover:border-slate-7 hover:text-slate-12 border hover:shadow-lg bg-background relative w-full p-2 shadow-md md:translate-y-5">
            <div className="absolute -right-10 top-1/2 hidden -translate-y-1/2 translate-x-1/3 md:flex">
              <RoutingCurves />
            </div>
            <div className="flex w-full items-center justify-between gap-3 flex-row">
              <Input 
                className="w-full appearance-none py-2 transition duration-150 ease-in-out placeholder:text-foreground/30 shadow-border focus:shadow-inner focus:outline-none text-muted-foreground bg-background focus:bg-background/80 h-10 flex-1 rounded-lg border-0 px-4"
                placeholder="Start a message..."
              />
              <Button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 focus-visible:ring-1 focus-visible:ring-ring gap-2 leading-6 bg-primary text-primary-foreground shadow hover:bg-primary/90 py-4 group aspect-square h-10 px-3 transition-colors md:aspect-auto md:flex-shrink-0">
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>
          
          <FeaturedModels />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;