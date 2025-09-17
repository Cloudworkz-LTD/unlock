import { UnlockButton } from "@/components/ui/unlock-button";

export default function Index() {
  return (
    <div className="min-h-screen bg-unlock-dark">
      {/* Hero Section */}
      <section className="px-4 md:px-8 lg:px-24 py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-28 max-w-7xl mx-auto">
          {/* Content */}
          <div className="flex flex-col items-start gap-8 lg:w-2/3">
            {/* Title Block */}
            <div className="flex flex-col items-start gap-2 w-full">
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light font-aeonik text-unlock-green leading-[0.81] tracking-[-0.03em] w-full">
                Due Diligence
              </h1>
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight font-aeonik text-white leading-[0.81] tracking-[-0.03em] w-full">
                for Smarter
              </h1>
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight font-aeonik text-white leading-[0.81] tracking-[-0.03em] w-full">
                Investments
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-white font-light font-aeonik leading-[1.2] max-w-2xl">
              Unlock delivers data-backed due diligence reports, using AI and
              expert analysis to provide investors with clear, actionable
              insights.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <UnlockButton
                size="default"
                className="rounded-[10px] bg-unlock-green text-unlock-light font-medium uppercase tracking-wide"
              >
                Join
              </UnlockButton>
              <UnlockButton
                variant="outline"
                size="default"
                className="rounded-[10px] border-unlock-light text-unlock-light font-medium uppercase tracking-wide hover:bg-unlock-light hover:text-unlock-dark"
              >
                Learn More
              </UnlockButton>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/3 flex justify-center lg:justify-end">
            <div className="relative w-72 h-[450px] md:w-80 md:h-[500px] lg:w-72 lg:h-[454px]">
              <div>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F1eaa4255fd854d84bde8758c04e23344%2Fe2d3df77f0f141dfa42167108d54aaf2"
                  alt="Professional businessman in suit"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-unlock-dark border-t border-unlock-gray-dark/20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light font-aeonik text-white mb-6">
              Why Choose <span className="text-unlock-green">Unlock</span>?
            </h2>
            <p className="text-lg text-unlock-light font-light font-aeonik max-w-2xl mx-auto leading-[1.2]">
              Experience the difference with our cutting-edge features designed
              to empower your investment journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-lg bg-unlock-gray-dark/20 border border-unlock-gray-dark/30">
              <div className="w-16 h-16 bg-unlock-green rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium font-aeonik text-white mb-4">
                AI-Powered Analysis
              </h3>
              <p className="text-unlock-light font-light font-aeonik leading-[1.2]">
                Advanced AI algorithms analyze market data and financial reports
                to deliver comprehensive insights.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-unlock-gray-dark/20 border border-unlock-gray-dark/30">
              <div className="w-16 h-16 bg-unlock-green rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium font-aeonik text-white mb-4">
                Expert Validation
              </h3>
              <p className="text-unlock-light font-light font-aeonik leading-[1.2]">
                Our team of financial experts reviews and validates all reports
                to ensure accuracy and reliability.
              </p>
            </div>

            <div className="text-center p-8 rounded-lg bg-unlock-gray-dark/20 border border-unlock-gray-dark/30">
              <div className="w-16 h-16 bg-unlock-green rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium font-aeonik text-white mb-4">
                Actionable Insights
              </h3>
              <p className="text-unlock-light font-light font-aeonik leading-[1.2]">
                Clear, actionable recommendations that help you make informed
                investment decisions with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-unlock-dark border-t border-unlock-gray-dark/20">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-light font-aeonik text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-unlock-light font-light font-aeonik mb-8 max-w-2xl mx-auto leading-[1.2]">
            Join thousands of investors who trust Unlock for their due diligence
            needs.
          </p>
          <UnlockButton
            size="lg"
            className="min-w-[250px] rounded-[10px] bg-unlock-green text-unlock-light font-medium uppercase tracking-wide"
          >
            Join Now
          </UnlockButton>
        </div>
      </section>
    </div>
  );
}
