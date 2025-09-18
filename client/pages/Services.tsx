import { UnlockButton } from "@/components/ui/unlock-button";

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center min-h-[722px] px-4 sm:px-8 md:px-16 lg:px-[100px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/9ec8aa91ee034596b7a7289cf1af4e9adbb76aed?width=2880')`,
        }}
      >
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-[113px] text-center lg:text-left">
            {/* Hero Content */}
            <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto text-center">
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[140px] font-extralight text-white leading-[0.81] tracking-[-4.2px] mb-0">
                  Informed Investing, Simplified
                </h1>
              </div>
              <p className="max-w-[629px] text-white text-lg sm:text-xl font-light leading-[1.2] mb-0">
                Discover our comprehensive due diligence solutions for smarter
                investment decisions.
              </p>
              <div className="flex items-center gap-4">
                <UnlockButton
                  size="lg"
                  className="bg-unlock-green hover:bg-unlock-green/90 text-unlock-light px-8 py-3 rounded-[10px] uppercase text-sm font-medium tracking-wider"
                >
                  JOIN
                </UnlockButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Protection Section */}
      <section className="px-4 sm:px-8 md:px-16 lg:px-[50px] py-16 lg:py-[100px]">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0 lg:-mr-px">
          {/* Left Content */}
          <div className="flex flex-col justify-between h-auto lg:h-[746px] max-w-[400px]">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-light text-unlock-light leading-[1.1] mb-8 lg:mb-16">
                Protect Your Investments with Confidence
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <UnlockButton
                size="lg"
                className="bg-unlock-green hover:bg-unlock-green/90 text-unlock-light px-8 py-3 rounded-[10px] uppercase text-sm font-medium tracking-wider"
              >
                JOIN
              </UnlockButton>
              <UnlockButton
                variant="outline"
                size="lg"
                className="border-unlock-light text-unlock-light hover:bg-unlock-light hover:text-unlock-dark px-8 py-3 rounded-[10px] uppercase text-sm font-medium tracking-wider"
              >
                LEARN MORE
              </UnlockButton>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="flex flex-col gap-10 max-w-[775px] w-full">
            {/* Top Row */}
            <div className="flex flex-col md:flex-row gap-10">
              {/* Risk Mitigation Card */}
              <div className="flex flex-col gap-6 max-w-[340px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8761ae158394f2e8f1939035c7307f9b41425f96?width=80"
                  alt="Risk mitigation icon"
                  className="w-10 h-10"
                />
                <div className="flex flex-col gap-4">
                  <h3 className="text-unlock-green font-aeonik text-2xl lg:text-[32px] font-normal leading-[1.2]">
                    Risk Mitigation for Investors
                  </h3>
                  <p className="text-unlock-light font-aeonik text-base font-light leading-[1.5]">
                    Our mission is to ensure that every investor gets access to
                    high-quality, detailed insights to make informed investment
                    decisions. We started with a simple goal: to provide clarity
                    in a complex investment landscape. Over the years, we've
                    grown into a trusted partner for investors worldwide,
                    helping them navigate investment opportunities with
                    confidence.
                  </p>
                </div>
              </div>

              {/* Transparency & Trust Card */}
              <div className="flex flex-col gap-6 max-w-[340px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/26ecdc8b0ffe15ae04f36888f8852cf17d8d86d2?width=80"
                  alt="Handshake icon"
                  className="w-10 h-10"
                />
                <div className="flex flex-col gap-4">
                  <h3 className="text-unlock-green font-aeonik text-2xl lg:text-[32px] font-normal leading-[1.2]">
                    Our Commitment to Transparency and Trust: Building Strong
                    Relationships
                  </h3>
                  <p className="text-unlock-light font-aeonik text-base font-light leading-[1.5]">
                    Unlock is committed to fostering transparency and trust in
                    the investment process through open and honest communication
                    of our due diligence findings.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="flex flex-col md:flex-row gap-10">
              {/* Due Diligence Card */}
              <div className="flex flex-col gap-6 max-w-[340px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/9907ff30875fbfbea22a13a2b0f10a054075bbed?width=80"
                  alt="Search check icon"
                  className="w-10 h-10"
                />
                <div className="flex flex-col gap-4">
                  <h3 className="text-unlock-green font-aeonik text-2xl lg:text-[32px] font-normal leading-[1.2]">
                    Due Diligence Made Accessible
                  </h3>
                  <p className="text-unlock-light font-aeonik text-base font-light leading-[1.5]">
                    Unlock democratises access to thorough and reliable due
                    diligence, enabling more investors to benefit from
                    high-quality investment analysis without the prohibitive
                    costs.
                  </p>
                </div>
              </div>

              {/* Educational Resource Hub Card */}
              <div className="flex flex-col gap-6 max-w-[340px]">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/c25c6d74d881acda6e5461c7fba1d1cdab6963d3?width=80"
                  alt="Blocks icon"
                  className="w-10 h-10"
                />
                <div className="flex flex-col gap-4">
                  <h3 className="text-unlock-green font-aeonik text-2xl lg:text-[32px] font-normal leading-[1.2]">
                    Unlock's Educational Resource Hub: Empowering Investors with
                    Knowledge
                  </h3>
                  <p className="text-unlock-light font-aeonik text-base font-light leading-[1.5]">
                    Our website is your go-to resource hub for learning about
                    due diligence, investment strategies, and market insights
                    through blogs, tutorials, and webinars.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Due Diligence Section */}
      <section className="bg-unlock-green px-4 sm:px-8 md:px-16 lg:px-[100px] py-16 lg:py-[100px]">
        <div className="flex flex-col gap-12">
          {/* Section Title */}
          <h2 className="text-white font-aeonik text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-light leading-[1.1] max-w-[818px]">
            Comprehensive Due Diligence for Smarter Investments
          </h2>

          {/* Content Layout */}
          <div className="flex flex-col lg:flex-row items-end gap-8 lg:gap-[62px]">
            {/* Left Content */}
            <div className="flex flex-col justify-between h-auto lg:h-[265px] max-w-[356px] w-full">
              <p className="text-white font-aeonik text-base leading-[1.5] mb-8 lg:mb-0">
                Investors often face challenges in obtaining reliable and
                comprehensive information about potential investments, leading
                to uncertainty and missed opportunities.
              </p>
              <div className="flex justify-start">
                <UnlockButton
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-unlock-green px-8 py-3 rounded uppercase text-sm font-medium tracking-wider"
                >
                  SIGN UP
                </UnlockButton>
              </div>
            </div>

            {/* Right Content - Service Cards */}
            <div className="flex flex-col md:flex-row items-start gap-5 lg:gap-[20px] flex-1">
              {/* Snapshot Reports Card */}
              <div className="flex flex-col gap-9 max-w-[400px] w-full">
                <div className="flex items-end">
                  <span className="text-white font-aeonik text-8xl sm:text-9xl lg:text-[150px] font-extralight leading-[0.9] tracking-[-3px]">
                    1
                  </span>
                  <span className="text-white text-6xl sm:text-7xl lg:text-[100px] font-medium leading-[0.9] tracking-[-2px] mb-2">
                    .
                  </span>
                </div>
                <div className="flex flex-col gap-6">
                  <h3 className="text-white font-aeonik text-2xl lg:text-[32px] font-normal leading-[1.2]">
                    Snapshot Reports
                  </h3>
                  <p className="text-white font-aeonik text-base font-light leading-[1.5] max-w-[293px]">
                    Get a quick, "at a glance" understanding of a business's
                    potential and current standing.
                  </p>
                </div>
              </div>

              {/* Deep Dive Reports Card */}
              <div className="flex flex-col gap-9 max-w-[400px] w-full">
                <div className="flex items-end">
                  <span className="text-white font-aeonik text-8xl sm:text-9xl lg:text-[150px] font-extralight leading-[0.9] tracking-[-3px]">
                    2
                  </span>
                  <span className="text-white text-6xl sm:text-7xl lg:text-[100px] font-medium leading-[0.9] tracking-[-2px] mb-2">
                    .
                  </span>
                </div>
                <div className="flex flex-col gap-6">
                  <h3 className="text-white font-aeonik text-2xl lg:text-[32px] font-normal leading-[1.2]">
                    Deep Dive Reports
                  </h3>
                  <p className="text-white font-aeonik text-base font-light leading-[1.5] max-w-[287px]">
                    Gain comprehensive analysis and insights through active
                    participation from the business being analysed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Report Details Section */}
      <section className="bg-unlock-light px-4 sm:px-8 md:px-16 lg:px-[100px] py-16 lg:py-[100px]">
        <div className="flex flex-col gap-15">
          {/* Tab Headers */}
          <div className="flex flex-col sm:flex-row">
            {/* Active Tab - Snapshot Report */}
            <div className="flex-1 flex justify-center items-start p-6 border-b-4 border-unlock-green">
              <h3 className="text-unlock-dark font-aeonik text-2xl sm:text-3xl lg:text-[48px] font-medium leading-[1.1]">
                Snapshot Report
              </h3>
            </div>
            {/* Inactive Tab - Deep Dive Report */}
            <div className="flex-1 flex justify-center items-start p-6 border-b-2 border-gray-300">
              <h3 className="text-unlock-dark font-aeonik text-2xl sm:text-3xl lg:text-[48px] font-light leading-[1.1]">
                Deep Dive Report
              </h3>
            </div>
          </div>

          {/* Tab Content */}
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-[152px] pt-8">
            {/* Left Content */}
            <div className="flex flex-col gap-8 lg:gap-[190px] max-w-[598px] w-full">
              <h4 className="text-unlock-green font-serif text-2xl sm:text-3xl lg:text-[36px] font-semibold leading-[1.1] max-w-[400px]">
                Quick Insights for Informed Preliminary Investment Decisions
              </h4>
              <p className="text-unlock-dark font-aeonik text-base leading-[1.3]">
                Unlock's Snapshot Report offers a rapid overview of a business's potential and current standing. It provides preliminary insights based on publicly available data, helping investors identify red flags and assess potential investments efficiently.
              </p>
            </div>

            {/* Right Content - Feature List */}
            <div className="flex flex-col max-w-[467px] w-full">
              <div className="flex flex-col">
                <div className="flex items-start gap-3 py-4 px-3 border-b border-gray-300">
                  <p className="flex-1 text-unlock-dark font-aeonik text-lg leading-[1.3]">
                    Quickly assess business potential with Unlock's Snapshot Report.
                  </p>
                </div>
                <div className="flex items-start gap-3 py-4 px-3 border-b border-gray-300">
                  <p className="flex-1 text-unlock-dark font-aeonik text-lg leading-[1.3]">
                    Identify red flags and make informed investment decisions.
                  </p>
                </div>
                <div className="flex items-start gap-3 py-4 px-3 border-b border-gray-300">
                  <p className="flex-1 text-unlock-dark font-aeonik text-lg leading-[1.3]">
                    Gain insights for smarter investment decisions with Unlock.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="bg-unlock-light py-16 lg:py-[100px]">
        <div className="px-4 sm:px-8 md:px-16 lg:px-[100px]">
          <div className="flex flex-col gap-7">
            {/* Section Title */}
            <div className="flex justify-center items-center">
              <h2 className="text-unlock-dark font-aeonik text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-light leading-[1.1]">
                Client Testimonials
              </h2>
            </div>

            {/* Testimonials Grid */}
            <div className="flex overflow-x-auto gap-6 pb-4">
              {/* Testimonial 1 - Elena Morozova */}
              <div className="flex-shrink-0 w-[323px] h-[275px] bg-unlock-gray-light border border-unlock-gray-medium rounded-[10px] p-10 flex flex-col justify-between">
                <p className="text-unlock-dark font-aeonik text-base font-light leading-[1.4]">
                  Unlock transformed the way we assess risk. Their data dashboards are sharp, intuitive, and investor-ready. I finally feel like we're making decisions with clarity, not guesswork
                </p>
                <div className="flex flex-col">
                  <h4 className="text-unlock-dark font-aeonik text-base font-normal leading-[1.5]">
                    Elena Morozova
                  </h4>
                  <p className="text-unlock-dark font-aeonik text-xs font-light leading-[1.5]">
                    Managing Partner at Novus Capital
                  </p>
                </div>
              </div>

              {/* Testimonial 2 - John Doe */}
              <div className="flex-shrink-0 w-[323px] h-[275px] bg-unlock-gray-light border border-unlock-gray-medium rounded-[10px] p-10 flex flex-col justify-between">
                <p className="text-unlock-dark font-aeonik text-base font-light leading-[1.4]">
                  Unlock's due diligence services have been invaluable in helping me make informed investment decisions. Their meticulous research and analysis have given me the confidence to invest with clarity and certainty.
                </p>
                <div className="flex flex-col">
                  <h4 className="text-unlock-dark font-aeonik text-base font-normal leading-[1.5]">
                    John Doe
                  </h4>
                  <p className="text-unlock-dark font-aeonik text-xs font-light leading-[1.5]">
                    Investor, ABC Company
                  </p>
                </div>
              </div>

              {/* Testimonial 3 - James Carter */}
              <div className="flex-shrink-0 w-[323px] h-[275px] bg-unlock-gray-light border border-unlock-gray-medium rounded-[10px] p-10 flex flex-col justify-between">
                <p className="text-unlock-dark font-aeonik text-base font-light leading-[1.4]">
                  Their team doesn't just deliver insights — they uncover opportunities. Thanks to Unlock, we spotted a trend early that became one of our strongest portfolio wins last year.
                </p>
                <div className="flex flex-col">
                  <h4 className="text-unlock-dark font-aeonik text-base font-normal leading-[1.5]">
                    James Carter
                  </h4>
                  <p className="text-unlock-dark font-aeonik text-xs font-light leading-[1.5]">
                    Angel Investor, Fintech Sector
                  </p>
                </div>
              </div>

              {/* Testimonial 4 - Tariq El-Amin */}
              <div className="flex-shrink-0 w-[323px] h-[275px] bg-unlock-gray-light border border-unlock-gray-medium rounded-[10px] p-10 flex flex-col justify-between">
                <p className="text-unlock-dark font-aeonik text-base font-light leading-[1.4]">
                  Before Unlock, our analytics felt like a black box. Now, every metric has a narrative, and every report drives action. It's like having an in-house intelligence unit.
                </p>
                <div className="flex flex-col">
                  <h4 className="text-unlock-dark font-aeonik text-base font-normal leading-[1.5]">
                    Tariq El-Amin
                  </h4>
                  <p className="text-unlock-dark font-aeonik text-xs font-light leading-[1.5]">
                    Venture Partner at Apex Growth
                  </p>
                </div>
              </div>

              {/* Testimonial 5 - Laura Gutiérrez */}
              <div className="flex-shrink-0 w-[323px] h-[275px] bg-unlock-gray-light border border-unlock-gray-medium rounded-[10px] p-10 flex flex-col justify-between">
                <p className="text-unlock-dark font-aeonik text-base font-light leading-[1.4]">
                  Unlock brings precision to a chaotic market. Their investor-focused dashboards helped us streamline our pitch decks and wow LPs with confidence.
                </p>
                <div className="flex flex-col">
                  <h4 className="text-unlock-dark font-aeonik text-base font-normal leading-[1.5]">
                    Laura Gutiérrez
                  </h4>
                  <p className="text-unlock-dark font-aeonik text-xs font-light leading-[1.5]">
                    Co-Founder at Capital Bloom
                  </p>
                </div>
              </div>

              {/* Testimonial 6 - David Kwan (Featured) */}
              <div className="flex-shrink-0 w-[323px] h-[275px] bg-unlock-dark border border-unlock-gray-medium rounded-[10px] p-10 flex flex-col justify-between">
                <p className="text-unlock-light font-aeonik text-base font-light leading-[1.4]">
                  We used to rely on generic market reports. Unlock built us a custom analytics engine tailored to our vertical. It's now our competitive edge.
                </p>
                <div className="flex flex-col">
                  <h4 className="text-unlock-light font-aeonik text-base font-normal leading-[1.5]">
                    David Kwan
                  </h4>
                  <p className="text-unlock-light font-aeonik text-xs font-extralight leading-[1.5]">
                    Principal at Skyline Ventures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
