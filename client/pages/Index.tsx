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

      {/* Boat Background Section */}
      <section className="px-4 md:px-8 lg:px-10 py-8 lg:py-12">
        <div className="max-w-7xl mx-auto">
          <div
            className="relative h-[400px] md:h-[449px] rounded-[10px] overflow-hidden flex items-center justify-between px-4 md:px-10 lg:px-10"
            style={{
              backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url('https://cdn.builder.io/api/v1/image/assets%2F1eaa4255fd854d84bde8758c04e23344%2Ff643326cf0d34403934d58a749837989?format=webp&width=2460')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            {/* Text Content Block - Left Side */}
            <div className="flex flex-col items-start gap-12 lg:gap-[156px] max-w-2xl lg:max-w-[609px] z-10">
              <h2 className="text-unlock-light font-serif text-2xl md:text-3xl lg:text-4xl font-medium leading-[110%] w-full">
                Make informed investment decisions with clear, factual insights
              </h2>
              <p className="text-unlock-light font-serif text-sm md:text-base font-medium leading-[120%] max-w-xs lg:max-w-[295px]">
                Our due diligence reports aggregate financial, legal, and
                operational data from trusted sources, ensuring accuracy and
                transparency
              </p>
            </div>

            {/* Circular SVG Element - Right Side */}
            <div className="hidden lg:block relative">
              <svg
                className="w-72 h-72 xl:w-[372px] xl:h-[369px]"
                width="372"
                height="369"
                viewBox="0 0 372 369"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M336.908 253.675C311.186 314.415 250.984 357.043 180.801 357.043C87.2336 357.043 11.3802 281.264 11.3802 187.787C11.3802 94.311 87.2337 18.5317 180.801 18.5317C274.369 18.5317 350.223 94.3111 350.223 187.787"
                  stroke="#F5F7F0"
                  strokeMiterlimit="10"
                />
                <path
                  d="M305.411 73.1172C333.235 103.273 350.223 143.555 350.223 187.791"
                  stroke="#00BB77"
                  strokeWidth="6"
                  strokeMiterlimit="10"
                />
              </svg>
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
