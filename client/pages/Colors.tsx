import { UnlockButton } from "@/components/ui/unlock-button";

export default function Colors() {
  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <h1 className="text-4xl font-bold font-aeonik text-foreground mb-8">
          Unlock Design System
        </h1>
        
        {/* Main Colors */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold font-aeonik text-foreground mb-6 uppercase tracking-wide">
            Main Colors
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-64 h-64 bg-unlock-green rounded-lg mx-auto mb-4"></div>
              <h3 className="text-xl font-medium font-aeonik text-foreground mb-2">Primary Green</h3>
              <p className="text-unlock-gray-dark font-aeonik text-2xl font-light">#00BB77</p>
            </div>
            <div className="text-center">
              <div className="w-64 h-64 bg-unlock-dark rounded-lg mx-auto mb-4"></div>
              <h3 className="text-xl font-medium font-aeonik text-foreground mb-2">Dark</h3>
              <p className="text-unlock-gray-dark font-aeonik text-2xl font-light">#212023</p>
            </div>
            <div className="text-center">
              <div className="w-64 h-64 bg-unlock-light border border-unlock-gray-medium rounded-lg mx-auto mb-4"></div>
              <h3 className="text-xl font-medium font-aeonik text-foreground mb-2">Light</h3>
              <p className="text-unlock-gray-dark font-aeonik text-2xl font-light">#F5F7F0</p>
            </div>
          </div>
        </section>

        {/* Secondary Colors */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold font-aeonik text-foreground mb-6 uppercase tracking-wide">
            Secondary Colors
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-48 h-48 bg-unlock-gray-light border border-unlock-gray-medium rounded-lg mx-auto mb-4"></div>
              <h3 className="text-lg font-medium font-aeonik text-foreground mb-2">Gray Light</h3>
              <p className="text-unlock-gray-dark font-aeonik text-xl font-light">#EBEFE1</p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 bg-unlock-gray-medium rounded-lg mx-auto mb-4"></div>
              <h3 className="text-lg font-medium font-aeonik text-foreground mb-2">Gray Medium</h3>
              <p className="text-unlock-gray-dark font-aeonik text-xl font-light">#D3D3D3</p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 bg-unlock-gray-dark rounded-lg mx-auto mb-4"></div>
              <h3 className="text-lg font-medium font-aeonik text-foreground mb-2">Gray Dark</h3>
              <p className="text-unlock-gray-dark font-aeonik text-xl font-light">#3E3E3E</p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold font-aeonik text-foreground mb-6 uppercase tracking-wide">
            Typography
          </h2>
          <div className="space-y-8">
            <div>
              <h1 className="text-8xl font-light font-aeonik text-foreground leading-tight tracking-tight">
                Due Diligence
              </h1>
              <p className="text-sm text-unlock-gray-dark font-aeonik uppercase tracking-wide mt-2">H1 - Aeonik Light 140px</p>
            </div>
            <div>
              <h2 className="text-5xl font-light font-aeonik text-foreground leading-tight">
                Due Diligence
              </h2>
              <p className="text-sm text-unlock-gray-dark font-aeonik uppercase tracking-wide mt-2">H2 - Aeonik Light 60px</p>
            </div>
            <div>
              <h3 className="text-2xl font-light font-aeonik text-foreground leading-tight tracking-tight">
                Due Diligence
              </h3>
              <p className="text-sm text-unlock-gray-dark font-aeonik uppercase tracking-wide mt-2">H3 - Aeonik Light 32px</p>
            </div>
            <div>
              <p className="text-base font-light font-aeonik text-foreground leading-relaxed">
                Due Diligence
              </p>
              <p className="text-sm text-unlock-gray-dark font-aeonik uppercase tracking-wide mt-2">Body Text - Aeonik Light 16px</p>
            </div>
            <div>
              <p className="text-2xl font-medium font-serif text-foreground leading-tight">
                Due Diligence
              </p>
              <p className="text-sm text-unlock-gray-dark font-aeonik uppercase tracking-wide mt-2">Serif - Noto Serif Medium 36px</p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold font-aeonik text-foreground mb-6 uppercase tracking-wide">
            Button Variants
          </h2>
          <div className="flex flex-wrap gap-4">
            <UnlockButton>Default Button</UnlockButton>
            <UnlockButton variant="secondary">Secondary Button</UnlockButton>
            <UnlockButton variant="outline">Outline Button</UnlockButton>
            <UnlockButton variant="ghost">Ghost Button</UnlockButton>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <UnlockButton size="sm">Small</UnlockButton>
            <UnlockButton size="default">Default</UnlockButton>
            <UnlockButton size="lg">Large</UnlockButton>
          </div>
        </section>
      </div>
    </div>
  );
}
