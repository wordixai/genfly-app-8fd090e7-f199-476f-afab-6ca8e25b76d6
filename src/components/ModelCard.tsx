interface ModelCardProps {
  name: string;
  provider: string;
  isNew?: boolean;
  tokens: string;
  latency: string;
  growth: string;
  growthColor: string;
  icon: string;
  featured?: boolean;
}

const ModelCard = ({ name, provider, isNew, tokens, latency, growth, growthColor, icon, featured }: ModelCardProps) => {
  return (
    <div className={`group/card text-card-foreground transition-all duration-200 hover:text-slate-12 hover:shadow-lg group bg-background rounded-lg border p-4 shadow-sm hover:border-primary ${featured ? 'md:border-primary' : 'border-slate-6'}`}>
      <div className="space-y-2">
        <div>
          <a className="hover:underline" href="#">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <h3 className="text-foreground font-medium">{name}</h3>
                {isNew && (
                  <span className="bg-muted text-muted-foreground rounded-sm px-1.5 py-0.5 text-[10px]">New</span>
                )}
              </div>
              <div className="items-center justify-center size-6 flex-shrink-0 rounded-full border border-border/50 shadow bg-muted p-0.5 hidden md:flex transition-transform group-hover:scale-110 group-hover:rotate-12">
                <div className="overflow-hidden rounded-full">
                  <img 
                    width="256" 
                    height="256" 
                    alt={`Favicon for ${provider}`}
                    src={icon}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </a>
          <div className="flex items-center">
            <span className="text-muted-foreground text-xs">
              by <a className="text-primary hover:underline" href="#">{provider}</a>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 pt-2 md:pt-0">
          <div>
            <p className="text-green-10 text-sm font-medium">{tokens}</p>
            <p className="text-muted-foreground text-[10px]">Tokens/wk</p>
          </div>
          <div>
            <p className="text-sm font-medium">{latency}</p>
            <p className="text-muted-foreground text-[10px]">Latency</p>
          </div>
          <div>
            <p className={`text-sm font-medium ${growthColor}`}>{growth}</p>
            <p className="text-muted-foreground text-[10px]">Weekly growth</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelCard;