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
          <div className="flex flex-col items-center gap-8">
            {/* Main Content - Centered */}
            <div className="flex flex-col items-center gap-8 max-w-4xl">
              {/* Title */}
              <div className="flex flex-col items-center gap-2 w-full">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extralight font-aeonik text-unlock-light leading-[0.81] tracking-[-0.042em] text-center w-full">
                  Your Partner for Informed Investing
                </h1>
              </div>

              {/* Description */}
              <p className="text-lg md:text-xl text-unlock-light font-light font-aeonik leading-[1.2] text-center max-w-[629px]">
                It is our mission to empower investors with the insights they
                need to make smarter, more informed decisions.
              </p>

              {/* Button */}
              <div className="flex items-center gap-4">
                <UnlockButton
                  size="default"
                  className="rounded-[10px] bg-unlock-green text-unlock-light font-medium uppercase tracking-wide hover:bg-unlock-green/90"
                >
                  Join
                </UnlockButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Statement Section */}
      <section className="relative py-16 lg:py-20 xl:py-24 px-4 md:px-8 lg:px-24 xl:px-32 2xl:px-36 bg-unlock-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
            {/* Left - Vision Statement with decorative border */}
            <div className="relative flex-1 max-w-3xl">
              {/* Decorative SVG Border */}
              <div className="absolute inset-0 flex items-start justify-start overflow-hidden pointer-events-none">
                <svg
                  className="w-full max-w-[763px] h-auto opacity-80"
                  width="763"
                  height="247"
                  viewBox="0 0 763 247"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M643.908 4.0245H0.994141V246.438H762.007V4.0245"
                    stroke="#F5F7F0"
                    strokeWidth="0.83"
                    strokeMiterlimit="10"
                  />
                  <path
                    d="M360.33 4.02344H645.065"
                    stroke="#00BB77"
                    strokeWidth="6"
                    strokeMiterlimit="10"
                  />
                </svg>
              </div>

              {/* Vision Text */}
              <div className="relative z-10 pt-12 mb-9">
                <h2 className="text-unlock-green font-serif text-3xl font-semibold leading-tight max-w-[690px] pt-[3px] pb-11 pl-8">
                  A world where every investor makes decisions with clarity and
                  confidence, backed by thorough due diligence.
                </h2>
              </div>
            </div>

            {/* Right - Description */}
            <div className="flex-shrink-0 max-w-md lg:max-w-sm xl:max-w-md">
              <p className="text-unlock-light font-aeonik text-base font-light leading-[150%] mt-10">
                Unlock is a trusted provider of meticulous due diligence on
                investment opportunities. Our history is rooted in serving
                investors by transforming uncertainty into clarity. With a
                commitment to our core values and overarching goals, we empower
                you to make smarter, more informed decisions, invest
                confidently, and gain a competitive edge in the investment
                world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Empowering Investors Section */}
      <section className="py-16 lg:py-20 xl:py-24 px-4 md:px-8 lg:px-24 xl:px-32 2xl:px-36 bg-unlock-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-start gap-8">
            {/* Heading */}
            <div className="flex items-center gap-2.5 w-full min-h-[132px]">
              <h2 className="text-unlock-light font-aeonik text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-[110%] max-w-[820px]">
                Empowering Investors Through Comprehensive Due Diligence
              </h2>
            </div>

            {/* Content */}
            <div className="flex flex-col items-start gap-8 w-full max-w-[820px]">
              {/* Description */}
              <p className="text-unlock-light font-aeonik text-base font-light leading-[150%] w-full">
                Our mission is to ensure that every investor gets access to
                high-quality, detailed insights to make informed investment
                decisions. We started with a simple goal: to provide clarity in
                a complex investment landscape. Over the years, we've grown into
                a trusted partner for investors worldwide, helping them navigate
                investment opportunities with confidence.
              </p>

              {/* Button */}
              <UnlockButton
                variant="outline"
                size="default"
                className="rounded border border-unlock-light text-unlock-light font-medium uppercase tracking-wide hover:bg-unlock-light hover:text-unlock-dark"
              >
                Join Our Waiting List
              </UnlockButton>
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
                At Unlock, we believe that every investor deserves access to
                comprehensive, unbiased, and actionable due diligence insights.
                Our mission is to democratize investment intelligence through
                cutting-edge AI technology and expert analysis.
              </p>
              <p className="text-unlock-dark font-aeonik text-base md:text-lg font-light leading-[130%] max-w-2xl">
                We're not here to tell you what to invest in—we're here to give
                you the clarity and confidence to make those decisions yourself.
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
                  <circle cx="160" cy="160" r="40" fill="#00BB77" />
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
                  <svg
                    className="w-8 h-8 text-unlock-light"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-unlock-light font-aeonik text-xl md:text-2xl font-light">
                  Transparency
                </h3>
                <p className="text-unlock-light font-aeonik text-base font-light leading-[130%] max-w-xs">
                  We provide clear, factual insights without hidden agendas or
                  sales pitches.
                </p>
              </div>

              {/* Value 2 - Accuracy */}
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="w-16 h-16 rounded-full bg-unlock-green flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-unlock-light"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="text-unlock-light font-aeonik text-xl md:text-2xl font-light">
                  Accuracy
                </h3>
                <p className="text-unlock-light font-aeonik text-base font-light leading-[130%] max-w-xs">
                  Our AI-enhanced analysis ensures precise, reliable data you
                  can trust.
                </p>
              </div>

              {/* Value 3 - Innovation */}
              <div className="flex flex-col items-center gap-6 text-center">
                <div className="w-16 h-16 rounded-full bg-unlock-green flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-unlock-light"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l.09 13L12 2zm0 20l-.09-13L12 22zm6.06-8.24L12 7.34v5.32l6.06 1.1zm-12.12 0L12 7.34v5.32l-6.06 1.1z" />
                  </svg>
                </div>
                <h3 className="text-unlock-light font-aeonik text-xl md:text-2xl font-light">
                  Innovation
                </h3>
                <p className="text-unlock-light font-aeonik text-base font-light leading-[130%] max-w-xs">
                  We leverage cutting-edge AI technology to deliver faster,
                  smarter insights.
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
                Our diverse team combines expertise in finance, technology, and
                data science to deliver unparalleled due diligence insights.
              </p>
            </div>

            {/* Team CTA */}
            <div className="flex flex-col items-center gap-6 text-center">
              <p className="text-unlock-dark font-aeonik text-base font-light leading-[130%] max-w-2xl">
                We're building something extraordinary. Join our mission to
                transform how investors make decisions.
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
              Join our waiting list and be among the first to experience the
              future of due diligence.
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
