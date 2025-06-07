import { User, CreditCard, Key, Mail } from 'lucide-react';

const GetStartedSection = () => {
  const steps = [
    {
      number: 1,
      title: "Signup",
      description: "Create an account to get started. You can set up an org for your team later.",
      icon: User,
      visual: (
        <div className="w-full max-w-56 pt-4 md:px-2 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            <div className="h-4 w-6 flex flex-col justify-center">
              <div className="h-1 bg-primary/20 rounded"></div>
              <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
            </div>
            <div className="h-4 w-12 flex flex-col justify-center">
              <div className="h-1 bg-primary/20 rounded"></div>
              <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
            </div>
          </div>
          <div className="flex flex-row gap-2 max-w-56">
            {['Google', 'GitHub', 'MetaMask', 'Email'].map((provider, index) => (
              <div key={provider} className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                {index === 0 && <div className="w-5 h-5 bg-blue-500 rounded"></div>}
                {index === 1 && <div className="w-5 h-5 bg-gray-800 rounded"></div>}
                {index === 2 && <div className="w-5 h-5 bg-orange-500 rounded"></div>}
                {index === 3 && <Mail className="w-5 h-5 text-primary" />}
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      number: 2,
      title: "Buy credits",
      description: "Credits can be used with any model or provider.",
      icon: CreditCard,
      visual: (
        <div className="w-full max-w-56 pt-4 md:px-2 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-primary" />
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-4 w-6 flex flex-col justify-center">
                <div className="h-1 bg-primary/20 rounded"></div>
                <div className="h-0.5 bg-primary/10 rounded mt-0.5"></div>
              </div>
            ))}
          </div>
          <div className="space-y-2">
            <div className="h-6 bg-primary/5 rounded flex items-center px-2">
              <span className="text-xs text-muted-foreground">Apr 1</span>
              <div className="flex-1 flex items-center gap-2 mx-2">
                <div className="h-2 flex-1 bg-primary/10 rounded"></div>
                <div className="h-2 flex-1 bg-primary/10 rounded"></div>
              </div>
              <span className="text-sm font-medium">$99</span>
            </div>
            <div className="h-6 bg-primary/5 rounded flex items-center px-2">
              <span className="text-xs text-muted-foreground">Mar 30</span>
              <div className="flex-1 flex items-center gap-2 mx-2">
                <div className="h-2 flex-1 bg-primary/10 rounded"></div>
                <div className="h-2 flex-1 bg-primary/10 rounded"></div>
              </div>
              <span className="text-sm font-medium">$10</span>
            </div>
          </div>
        </div>
      )
    },
    {
      number: 3,
      title: "Get your API key",
      description: (
        <>
          Create an API key and start making requests.{' '}
          <a href="#" className="text-primary hover:underline">Fully OpenAI compatible</a>.
        </>
      ),
      icon: Key,
      visual: (
        <div className="w-full max-w-56 pt-4 md:px-2 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Key className="w-5 h-5 text-primary" />
            <div className="h-6 flex-1 bg-primary/5 rounded flex items-center px-2">
              <span className="text-xs text-muted-foreground tracking-wide">OPENROUTER_API_KEY</span>
            </div>
          </div>
          <div className="h-6 bg-primary/5 rounded flex items-center px-2">
            <span className="text-xs tracking-wider">••••••••••••••••</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="space-y-8 md:space-y-12 max-w-4xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col gap-4">
            <div className="flex items-center gap-2 md:gap-3">
              <div className="w-7 h-7 md:w-8 md:h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary text-sm font-medium">
                {step.number}
              </div>
              <h3 className="text-base md:text-lg font-semibold">{step.title}</h3>
            </div>
            <div className="min-h-10 md:min-h-12">
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
            {step.visual}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStartedSection;