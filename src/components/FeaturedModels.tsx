import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ModelCard from './ModelCard';

const FeaturedModels = () => {
  const models = [
    {
      name: "Gemini 2.5 Pro Preview 06-05",
      provider: "google",
      isNew: true,
      tokens: "15.4B",
      latency: "2.2s",
      growth: "--",
      growthColor: "text-slate-9",
      icon: "https://openrouter.ai/images/icons/GoogleGemini.svg"
    },
    {
      name: "GPT-4.1",
      provider: "openai",
      tokens: "47.0B",
      latency: "771ms",
      growth: "-1.71%",
      growthColor: "text-red-10",
      icon: "https://openrouter.ai/images/icons/OpenAI.svg",
      featured: true
    },
    {
      name: "Claude Sonnet 4",
      provider: "anthropic",
      tokens: "214.4B",
      latency: "1.6s",
      growth: "-18.11%",
      growthColor: "text-red-10",
      icon: "https://openrouter.ai/images/icons/Anthropic.svg"
    }
  ];

  return (
    <div className="w-full min-w-80 space-y-3 md:w-auto">
      {/* Mobile routing curves */}
      <div className="block md:hidden">
        <svg width="100%" className="h-10" viewBox="0 0 320 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <title>Routing Curves</title>
          <g stroke="currentColor" strokeWidth="1.5">
            <path d="M155 2C160 15 60 5 60 18" className="origin-center transition-all duration-300 text-slate-6" />
            <path d="M160 2C160 12 160 15 160 18" className="origin-center transition-all duration-300 text-primary" />
            <path d="M165 2C160 15 260 5 260 18" className="origin-center transition-all duration-300 text-slate-6" />
          </g>
          <g className="text-slate-7">
            <circle cy="24" cx="60" r="3" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7" />
            <circle cy="24" cx="160" r="4" fill="currentColor" className="origin-center transition-all duration-300 text-primary" />
            <circle cy="24" cx="260" r="3" fill="currentColor" className="origin-center transition-all duration-300 text-slate-7" />
          </g>
        </svg>
        
        {/* Mobile provider icons */}
        <div className="grid grid-cols-3 gap-4 pb-3">
          {['GoogleGemini', 'OpenAI', 'Anthropic'].map((provider, index) => (
            <Button key={provider} variant="ghost" className="h-11 flex items-center justify-center rounded-lg p-4">
              <div className="flex items-center justify-center flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 size-8 transition-transform group-hover:scale-110 group-hover:rotate-12">
                <div className="overflow-hidden rounded-full">
                  <img 
                    width="256" 
                    height="256" 
                    alt={`Favicon for ${provider.toLowerCase()}`}
                    src={`https://openrouter.ai/images/icons/${provider}.svg`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Button>
          ))}
        </div>
        
        {/* Mobile featured model */}
        <ModelCard {...models[1]} />
        
        <div className="flex items-center justify-between px-2 pt-4">
          <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
          <a className="text-primary text-xs hover:underline flex items-center" href="#">
            View Trending
            <ExternalLink className="inline-block ml-px size-3" />
          </a>
        </div>
      </div>
      
      {/* Desktop featured models */}
      <div className="hidden space-y-3 md:block">
        <div className="flex items-center justify-between">
          <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
          <Button variant="link" className="h-6 rounded-md px-1.5 shadow-xs text-primary gap-0 text-xs hover:underline">
            View Trending
            <ExternalLink className="inline-block ml-px size-3" />
          </Button>
        </div>
        
        {models.map((model, index) => (
          <ModelCard key={index} {...model} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedModels;