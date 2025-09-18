import { UnlockButton } from "@/components/ui/unlock-button";

export default function About() {
  return (
    <div className="min-h-screen bg-unlock-dark">
      {/* Hero Section */}
      <section 
        className="relative flex items-center justify-center min-h-[722px] px-4 md:px-8 lg:px-24 xl:px-[100px] py-20 lg:py-24"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/6b33f16c2b826f3811c0560ba5628bd5d7752172?width=2880')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 xl:gap-[113px]">
            {/* Content */}
            <div className="flex flex-col items-start gap-8 flex-1 max-w-3xl">
              {/* Title Block */}
              <div className="flex flex-col items-start gap-4 w-full">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light font-aeonik text-unlock-light leading-[0.9] tracking-[-0.02em] w-full">
                  About Unlock
                </h1>
                <div className="w-16 h-1 bg-unlock-green"></div>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl lg:text-2xl text-unlock-light font-light font-aeonik leading-[1.3] max-w-2xl">
                We're revolutionizing due diligence with AI-powered insights that help investors make smarter, data-driven decisions with confidence and clarity.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <UnlockButton
                  size="default"
                  className="rounded-[10px] bg-unlock-green text-unlock-light font-medium uppercase tracking-wide hover:bg-unlock-green/90"
                >
                  Join Our Mission
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

            {/* Right side content/space for future content */}
            <div className="hidden lg:block lg:w-1/3 flex-shrink-0">
              {/* This space can be used for future content like stats, image, or other elements */}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 px-4 md:px-8 lg:px-24 bg-unlock-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Content */}
            <div className="flex flex-col items-start gap-8 flex-1">
              <h2 className="text-unlock-dark font-aeonik text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-[110%] tracking-tight">
                Our Mission
              </h2>
              <p className="text-unlock-dark font-aeonik text-lg md:text-xl font-light leading-[130%] max-w-2xl">
                At Unlock, we believe that every investor deserves access to comprehensive, unbiased, and actionable due diligence insights. Our mission is to democratize investment intelligence through cutting-edge AI technology and expert analysis.
              </p>
              <p className="text-unlock-dark font-aeonik text-base md:text-lg font-light leading-[130%] max-w-2xl">
                We're not here to tell you what to invest in—we're here to give you the clarity and confidence to make those decisions yourself.
              </p>
            </div>

            {/* Visual Element */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                <svg
                  className="w-72 h-72 lg:w-80 lg:h-80"
                  viewBox="0 0 320 320"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="160"
                    cy="160"
                    r="120"
                    stroke="#00BB77"
                    strokeWidth="2"
                    fill="none"
                    opacity="0.3"
                  />
                  <circle
                    cx="160"
                    cy="160"
                    r="80"
                    stroke="#00BB77"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.6"
                  />
                  <circle
                    cx="160"
                    cy="160"
                    r="40"
                    fill="#00BB77"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 px-4 md:px-8 lg:px-24 bg-unlock-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-12 lg:gap-16">
            {/* Section Title */}
            <h2 className="text-unlock-light font-aeonik text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-[110%] text-center">
              Our Values
            </h2>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full">
              {/* Value 1 - Transparency */}
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="w-16 h-16 rounded-full bg-unlock-green flex items-center justify-center">
                  <svg className="w-8 h-8 text-unlock-light" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-unlock-light font-aeonik text-xl md:text-2xl font-light">
                  Transparency
                </h3>
                <p className="text-unlock-light font-aeonik text-base font-light leading-[130%] max-w-xs">
                  We provide clear, factual insights without hidden agendas or sales pitches.
                </p>
              </div>

              {/* Value 2 - Accuracy */}
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="w-16 h-16 rounded-full bg-unlock-green flex items-center justify-center">
                  <svg className="w-8 h-8 text-unlock-light" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-unlock-light font-aeonik text-xl md:text-2xl font-light">
                  Accuracy
                </h3>
                <p className="text-unlock-light font-aeonik text-base font-light leading-[130%] max-w-xs">
                  Our AI-enhanced analysis ensures precise, reliable data you can trust.
                </p>
              </div>

              {/* Value 3 - Innovation */}
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="w-16 h-16 rounded-full bg-unlock-green flex items-center justify-center">
                  <svg className="w-8 h-8 text-unlock-light" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l.09 13L12 2zm0 20l-.09-13L12 22zm6.06-8.24L12 7.34v5.32l6.06 1.1zm-12.12 0L12 7.34v5.32l-6.06 1.1z"/>
                  </svg>
                </div>
                <h3 className="text-unlock-light font-aeonik text-xl md:text-2xl font-light">
                  Innovation
                </h3>
                <p className="text-unlock-light font-aeonik text-base font-light leading-[130%] max-w-xs">
                  We leverage cutting-edge AI technology to deliver faster, smarter insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 px-4 md:px-8 lg:px-24 bg-unlock-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-12 lg:gap-16">
            {/* Section Title */}
            <div className="text-center">
              <h2 className="text-unlock-dark font-aeonik text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-[110%] mb-4">
                The Team Behind Unlock
              </h2>
              <p className="text-unlock-dark font-aeonik text-lg md:text-xl font-light leading-[130%] max-w-3xl mx-auto">
                Our diverse team combines expertise in finance, technology, and data science to deliver unparalleled due diligence insights.
              </p>
            </div>

            {/* Team CTA */}
            <div className="flex flex-col items-center gap-6 text-center">
              <p className="text-unlock-dark font-aeonik text-base font-light leading-[130%] max-w-2xl">
                We're building something extraordinary. Join our mission to transform how investors make decisions.
              </p>
              <UnlockButton
                variant="outline"
                size="default"
                className="rounded-[10px] border-unlock-dark text-unlock-dark font-medium uppercase tracking-wide hover:bg-unlock-dark hover:text-unlock-light"
              >
                Join Our Team
              </UnlockButton>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-32 px-4 md:px-8 lg:px-24 bg-unlock-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-8 text-center">
            <h2 className="text-unlock-green font-aeonik text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-[110%] max-w-4xl">
              Ready to unlock smarter investment decisions?
            </h2>
            <p className="text-unlock-light font-aeonik text-lg md:text-xl font-light leading-[130%] max-w-2xl">
              Join our waiting list and be among the first to experience the future of due diligence.
            </p>
            <UnlockButton
              size="default"
              className="rounded-[10px] bg-unlock-green text-unlock-light font-medium uppercase tracking-wide hover:bg-unlock-green/90"
            >
              Join Our Waiting List
            </UnlockButton>
          </div>
        </div>
      </section>
    </div>
  );
}
