import { Search, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="border-b border-border bg-background">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-sm"></div>
            <span className="font-semibold text-lg">OpenRouter</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Models</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Chat</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Rankings</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Docs</a>
          </nav>
          <Button variant="outline" size="sm">Sign In</Button>
        </div>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Header;