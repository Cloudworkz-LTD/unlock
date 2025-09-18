import { UnlockButton } from "@/components/ui/unlock-button";

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative flex items-center justify-center min-h-[722px] px-4 sm:px-8 md:px-16 lg:px-[100px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/9ec8aa91ee034596b7a7289cf1af4e9adbb76aed?width=2880')`
        }}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[113px] text-center lg:text-left">
            {/* Hero Content */}
            <div className="flex-1 max-w-2xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Our Services
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
                Unlock your potential with our comprehensive range of professional services designed to transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <UnlockButton size="lg" className="bg-unlock-green hover:bg-unlock-green/90 text-white">
                  Explore Services
                </UnlockButton>
                <UnlockButton variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-unlock-dark">
                  Get Started
                </UnlockButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Content Section - Placeholder for now */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What We Offer
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Discover our comprehensive range of services designed to unlock your potential and drive your success forward.
          </p>
          
          <div className="bg-unlock-light/5 rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Services Content Coming Soon
            </h3>
            <p className="text-muted-foreground mb-6">
              We're working on adding detailed service offerings. Continue prompting to help us build out this section with specific services, features, and pricing.
            </p>
            <UnlockButton variant="outline">Help Us Build This</UnlockButton>
          </div>
        </div>
      </section>
    </div>
  );
}
