import { UnlockButton } from "@/components/ui/unlock-button";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-20 pb-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              Welcome to{" "}
              <span className="text-unlock-dark">Unlock</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Discover endless possibilities and unlock your potential with our innovative platform designed to transform your experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <UnlockButton size="lg" className="min-w-[200px]">
                Get Started
              </UnlockButton>
              <UnlockButton variant="outline" size="lg" className="min-w-[200px]">
                Learn More
              </UnlockButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-unlock-light/5">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Why Choose Unlock?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our cutting-edge features designed to empower your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-card border border-border">
              <div className="w-16 h-16 bg-unlock-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-unlock-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Secure</h3>
              <p className="text-muted-foreground">
                Your data is protected with enterprise-grade security measures and encryption.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-card border border-border">
              <div className="w-16 h-16 bg-unlock-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-unlock-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Fast</h3>
              <p className="text-muted-foreground">
                Lightning-fast performance ensures you can focus on what matters most.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-card border border-border">
              <div className="w-16 h-16 bg-unlock-dark rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-unlock-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Intuitive</h3>
              <p className="text-muted-foreground">
                Designed with user experience in mind for effortless navigation and use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already unlocked their potential with our platform.
          </p>
          <UnlockButton size="lg" className="min-w-[250px]">
            Join Now
          </UnlockButton>
        </div>
      </section>
    </div>
  );
}
