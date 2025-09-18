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

      {/* Underwater Background Section */}
      <section
        className="relative flex flex-col items-center min-h-[469px] py-8 px-4 md:px-8 lg:px-24 xl:px-32 2xl:px-36"
        style={{
          backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/370eeb296a8b4a65a63c48a44464742bee4db7fa?width=2880')`,
          backgroundSize: "100% 384.362%",
          backgroundPosition: "0px -666.828px",
          backgroundRepeat: "no-repeat",
          backgroundColor: "lightgray",
        }}
      >
        <div className="flex flex-col items-center gap-16 lg:gap-20 w-full max-w-7xl">
          {/* Title */}
          <div className="flex flex-col items-start w-full max-w-[416px]">
            <h2 className="text-unlock-light font-aeonik text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-[110%] tracking-[-0.02em] w-full">
              Investor Insights
            </h2>
          </div>

          {/* Insights Grid */}
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 xl:gap-[70px] w-full">
            {/* Insight 1 */}
            <div className="flex-1">
              <p className="text-unlock-light font-aeonik text-base font-light leading-[130%] tracking-[-0.02em]">
                Over four in ten (45%) self-directed investors do not view
                'losing some money' as a potential risk of investing, despite
                disclaimers​
              </p>
            </div>

            {/* Insight 2 */}
            <div className="flex-1">
              <p className="text-unlock-light font-aeonik text-base font-light leading-[130%] tracking-[-0.02em]">
                38% of self-directed investors are driven solely by emotional
                and social motivations, especially those involved in high-risk,
                high-return investments
              </p>
            </div>

            {/* Insight 3 */}
            <div className="flex-1">
              <p className="text-unlock-light font-aeonik text-base font-light leading-[130%] tracking-[-0.02em]">
                41% of newer self-directed investors believe that losing some of
                the money they invest is a genuine risk, indicating lower risk
                awareness
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Inspiration Section */}
      <section className="py-16 lg:py-20 xl:py-24 px-4 md:px-8 lg:px-24 xl:px-32 2xl:px-36 bg-unlock-green">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-16">
            {/* Left - Heading */}
            <div className="flex-1">
              <h2 className="text-white font-aeonik text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-[110%] tracking-[-0.02em]">
                Our Inspiration
              </h2>
            </div>

            {/* Right - Description */}
            <div className="w-full lg:max-w-[690px]">
              <p className="text-white font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-[110%]">
                Unlock was born out of the need to provide investors with
                comprehensive insights and guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Due Diligence Insights Section */}
      <section className="py-16 lg:py-20 xl:py-24 px-4 md:px-8 lg:px-24 xl:px-32 2xl:px-36 bg-unlock-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-end gap-8 lg:gap-10">
            {/* Header Content */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16 w-full">
              {/* Left - Main Title */}
              <div className="w-full lg:max-w-[693px]">
                <h2 className="text-unlock-dark font-aeonik text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-[110%]">
                  Due Diligence Insights for a Thriving UK Alternative Market
                </h2>
              </div>

              {/* Right - Description */}
              <div className="w-full lg:w-[399px] flex flex-col gap-32">
                <p className="text-unlock-dark font-aeonik text-base font-normal leading-[130%]">
                  In today's dynamic UK market, alternative investments are
                  becoming an increasingly vital component of diversified
                  portfolios. To navigate this complex landscape, thorough and
                  strategic due diligence is essential for uncovering
                  opportunities and mitigating risks. Whether you're assessing
                  private equity, real estate, or hedge funds, staying ahead of
                  market trends and regulatory requirements can unlock smarter,
                  more responsible investment decisions.
                </p>
              </div>
            </div>

            {/* Statistics Grid */}
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-5 w-full">
              {/* Statistic 1 - 72% */}
              <div className="flex flex-col items-start gap-9 w-full lg:w-[400px]">
                <div className="flex items-end">
                  <span className="text-unlock-green font-aeonik text-8xl md:text-9xl lg:text-[150px] font-extralight leading-[90%] tracking-[-0.02em]">
                    72
                  </span>
                  <span className="text-unlock-green font-aeonik text-5xl md:text-6xl lg:text-[64px] font-medium leading-[90%] tracking-[-0.02em] mb-2">
                    %
                  </span>
                </div>
                <div className="w-full max-w-[350px]">
                  <p className="text-unlock-dark font-aeonik text-base font-light leading-[150%]">
                    investors plan to increase their allocations to alternative
                    investments in the next 12 months, with 32% aiming to grow
                    their holdings by 10% or more.
                  </p>
                </div>
              </div>

              {/* Statistic 2 - 80% */}
              <div className="flex flex-col items-start gap-9 w-full lg:w-[400px]">
                <div className="flex items-end">
                  <span className="text-unlock-green font-aeonik text-8xl md:text-9xl lg:text-[150px] font-extralight leading-[90%] tracking-[-0.02em]">
                    80
                  </span>
                  <span className="text-unlock-green font-aeonik text-5xl md:text-6xl lg:text-[64px] font-medium leading-[90%] tracking-[-0.02em] mb-2">
                    %
                  </span>
                </div>
                <div className="w-full max-w-[350px]">
                  <p className="text-unlock-dark font-aeonik text-base font-light leading-[150%]">
                    The importance of ESG (Environmental, Social, and
                    Governance) due diligence continues to rise, with 80% of UK
                    dealmakers now prioritizing ESG factors in their transaction
                    processes. Moreover, 50% of these investors consider ESG a
                    potential deal stopper​
                  </p>
                </div>
              </div>

              {/* Statistic 3 - +70% */}
              <div className="flex flex-col items-start gap-9 w-full lg:w-[400px]">
                <div className="flex items-end">
                  <span className="text-unlock-green font-aeonik text-8xl md:text-9xl lg:text-[150px] font-extralight leading-[90%] tracking-[-0.02em]">
                    +70
                  </span>
                  <span className="text-unlock-green font-aeonik text-5xl md:text-6xl lg:text-[64px] font-medium leading-[90%] tracking-[-0.02em] mb-2">
                    %
                  </span>
                </div>
                <div className="w-full max-w-[350px]">
                  <p className="text-unlock-dark font-aeonik text-base font-light leading-[150%]">
                    Of UK institutional investors now incorporate Environmental,
                    Social, and Governance (ESG) factors as a critical part of
                    their due diligence when evaluating alternative investments
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 lg:py-16 px-4 md:px-8 lg:px-24 xl:px-32 2xl:px-36 bg-unlock-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-8">
            {/* Heading */}
            <div className="w-full max-w-[556px]">
              <h2 className="text-unlock-dark font-aeonik text-xl md:text-2xl lg:text-3xl font-normal leading-[140%] text-center">
                Partnering with Industry Leaders to Deliver Unmatched Due
                Diligence
              </h2>
            </div>

            {/* Partner Logos */}
            <div className="w-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/9d033399df82085c111bb63d53b2bcde1ec9f1b4?width=2480"
                alt="Industry partner logos"
                className="w-full h-auto flex justify-center items-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section with Logo */}
      <section className="py-24 lg:py-32 px-4 md:px-8 lg:px-24 xl:px-32 2xl:px-36 bg-unlock-dark">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 lg:gap-16">
            {/* Left Side - Logo & Heading */}
            <div className="flex items-center gap-12 lg:gap-16 flex-1">
              {/* Lock Icon */}
              <svg
                className="w-16 h-24 lg:w-20 lg:h-32 flex-shrink-0"
                width="82"
                height="130"
                viewBox="0 0 82 130"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M70.5821 64.9911V31.9944C70.5821 11.9569 57.4434 0 35.4478 0C13.4522 0 0.5 11.9569 0.5 31.9944V65H11.4179V98.0056C11.4179 118.043 24.4855 130 46.3656 130C68.2458 130 81.5 118.043 81.5 98.0056V64.9911H70.5821ZM46.3834 109.661C37.5532 109.661 33.2624 105.678 33.2624 97.4823V65H22.3446V32.5355C22.3446 24.1 26.511 20.1706 35.4656 20.1706C44.4202 20.1706 48.7553 24.1 48.7553 32.5355V64.9911H59.6643V67.0756H59.6732V97.4823C59.6732 105.678 55.3202 109.661 46.3834 109.661Z"
                  fill="#00BB77"
                />
              </svg>

              {/* Mixed Color Heading */}
              <div className="max-w-[687px]">
                <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal font-aeonik leading-[90%]">
                  <span className="text-unlock-light">Unlock: </span>
                  <span className="text-unlock-green">
                    Connecting Investors Through Insights
                  </span>
                </h2>
              </div>
            </div>

            {/* Right Side - Description & CTA */}
            <div className="flex flex-col items-start gap-4 w-full lg:w-auto lg:max-w-[226px] flex-shrink-0">
              <p className="text-unlock-light font-aeonik text-sm font-normal leading-[150%] w-full">
                Discover how Unlock can help you make smarter investment
                decisions and gain a competitive edge.
              </p>

              <div className="flex items-center gap-4">
                <UnlockButton
                  size="default"
                  className="rounded bg-white text-unlock-dark font-medium uppercase tracking-wide hover:bg-white/90"
                >
                  Join
                </UnlockButton>
              </div>
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
    </div>
  );
}
