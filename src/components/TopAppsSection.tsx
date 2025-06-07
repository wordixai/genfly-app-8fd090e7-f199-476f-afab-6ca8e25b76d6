import { BarChart3, ChevronDown, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TopAppsSection = () => {
  const apps = [
    { rank: 1, name: "Cline", description: "Autonomous coding agent right in your IDE", tokens: "29.2B", url: "https://cline.bot/" },
    { rank: 2, name: "Roo Code", description: "A whole dev team of AI agents in your editor", tokens: "23.8B", url: "https://roocode.com/" },
    { rank: 3, name: "Kilo Code", description: "AI coding agent for VS Code", tokens: "10.2B", url: "https://kilocode.ai/" },
    { rank: 4, name: "liteLLM", description: "Open-source library to simplify LLM calls", tokens: "6.17B", url: "https://litellm.ai/" },
    { rank: 5, name: "SillyTavern", description: "LLM frontend for power users", tokens: "5.5B", url: "https://sillytavern.app/" },
    { rank: 6, name: "Chub AI", description: "GenAI for everyone", tokens: "4.13B", url: "https://chub.ai/" },
    { rank: 7, name: "HammerAI", description: "Chat with AI characters for free", tokens: "2.02B", url: "https://www.hammerai.com/" },
    { rank: 8, name: "OpenRouter: Chatroom", description: "Chat with multiple LLMs at once", tokens: "1.5B", url: "https://openrouter.ai/" },
    { rank: 9, name: "Infinite Worlds", description: "Build your own adventures, share them with friends", tokens: "1.43B", url: "https://infiniteworlds.app/" },
    { rank: 10, name: "shapes inc", description: "General purpose social agents", tokens: "1.05B", url: "https://shapes.inc/" }
  ];

  const apps2 = [
    { rank: 11, name: "Quack", description: "Design and interact with characters", tokens: "996M", url: "https://quack.im/" },
    { rank: 12, name: "RolePlai - Ai Chat", description: "", tokens: "917M", url: "https://roleplai.app/", isNew: true },
    { rank: 13, name: "Kortix AI", description: "", tokens: "833M", url: "https://kortix.ai/", isNew: true },
    { rank: 14, name: "Caveduck", description: "AI character chat", tokens: "813M", url: "https://www.caveduck.io/" },
    { rank: 15, name: "Open WebUI", description: "Extensible, self-hosted AI interface", tokens: "700M", url: "https://openwebui.com/" },
    { rank: 16, name: "Jupi", description: "Roleplay & fantasy chat", tokens: "632M", url: "https://www.jupi.chat/" },
    { rank: 17, name: "Khui AI", description: "", tokens: "609M", url: "https://www.khuiai.com/", isNew: true },
    { rank: 18, name: "Linkd", description: "", tokens: "595M", url: "https://linkd.inc/", isNew: true },
    { rank: 19, name: "Aider", description: "AI pair programming in your terminal", tokens: "580M", url: "https://aider.chat/" },
    { rank: 20, name: "novelcrafter", description: "Your personal novel writing toolbox. Plan, write and tinker with your story.", tokens: "580M", url: "https://novelcrafter.com/" }
  ];

  const AppRow = ({ app }: { app: typeof apps[0] & { isNew?: boolean } }) => (
    <div className="grid grid-cols-12 items-center rounded-lg">
      <div className="col-span-1 text-left text-slate-11">{app.rank}.</div>
      <div className="col-span-1">
        <div className="flex items-center justify-center rounded-md p-1.5 size-10 shadow-inner bg-muted/40">
          <div className="overflow-hidden rounded size-5">
            <div className="h-full w-full bg-gradient-to-br from-blue-400 to-purple-600 rounded"></div>
          </div>
        </div>
      </div>
      <div className="col-span-6 pl-6 text-left">
        <a className="block truncate font-medium text-slate-11 hover:text-slate-12 hover:underline transition-colors group cursor-pointer flex items-center">
          {app.name}
          <ChevronRight className="inline w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
        <div className="truncate text-xs text-slate-9">
          {app.isNew ? <span className="text-primary">new</span> : app.description}
        </div>
      </div>
      <div className="col-span-4 text-right">
        <span className="text-sm font-medium text-muted-foreground">{app.tokens}</span>
        <span className="text-xs text-slate-9 ml-1">tokens</span>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-5 max-w-4xl">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <BarChart3 className="size-5 text-slate-9" />
            <h3 className="text-md font-medium text-slate-11">Top Apps</h3>
          </div>
          <p className="text-xs font-medium text-slate-11 hidden md:block">
            Largest public apps{' '}
            <a href="#" className="text-primary hover:underline">opting into</a> usage tracking on OpenRouter
          </p>
        </div>
        <div className="group relative">
          <Button variant="outline" className="border rounded-full text-sm pl-4 pr-2">
            Today
            <ChevronDown className="size-4" />
          </Button>
        </div>
      </div>
      
      <div className="transition-opacity grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16">
        <div className="flex flex-col space-y-5">
          {apps.map((app) => (
            <AppRow key={app.rank} app={app} />
          ))}
        </div>
        <div className="flex flex-col space-y-5">
          {apps2.map((app) => (
            <AppRow key={app.rank} app={app} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopAppsSection;