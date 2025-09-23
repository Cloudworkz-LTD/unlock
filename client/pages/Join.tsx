import { UnlockButton } from "@/components/ui/unlock-button";

export default function Join() {
  return (
    <div className="min-h-screen bg-unlock-dark">
      {/* Sign Up Hero Section */}
      <section className="px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-[100px] py-16 md:py-20 lg:py-24 xl:py-[100px]">
        <div className="flex flex-col items-center gap-8 lg:gap-10 max-w-7xl mx-auto">
          {/* Sign Up Title */}
          <div className="flex flex-col items-center gap-2 w-full">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[96px] font-extralight font-aeonik leading-[0.81] tracking-[-0.03em] text-center w-full">
              <span className="text-unlock-green font-normal">Sign up </span>
              <span className="text-unlock-light">for early access to Unlock's services and be the first to invest smarter.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Email Signup Form Section */}
      <section className="px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-24 py-16 lg:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center gap-8 lg:gap-12">
            {/* Form Description */}
            <div className="text-center max-w-2xl">
              <p className="text-unlock-light font-aeonik text-lg md:text-xl font-light leading-[1.3]">
                Join our waiting list to be among the first to access Unlock's comprehensive due diligence services and investment insights.
              </p>
            </div>

            {/* Email Form */}
            <div className="w-full max-w-md">
              <form className="flex flex-col gap-4">
                {/* Email Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-unlock-light font-aeonik text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg bg-unlock-light text-unlock-dark font-aeonik text-base border border-unlock-gray-medium focus:outline-none focus:ring-2 focus:ring-unlock-green focus:border-transparent"
                    required
                  />
                </div>

                {/* Name Input */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-unlock-light font-aeonik text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 rounded-lg bg-unlock-light text-unlock-dark font-aeonik text-base border border-unlock-gray-medium focus:outline-none focus:ring-2 focus:ring-unlock-green focus:border-transparent"
                    required
                  />
                </div>

                {/* Submit Button */}
                <UnlockButton
                  type="submit"
                  size="default"
                  className="w-full mt-4 rounded-lg bg-unlock-green text-unlock-light font-medium uppercase tracking-wide hover:bg-unlock-green/90"
                >
                  Join Waiting List
                </UnlockButton>
              </form>
            </div>

            {/* Additional Information */}
            <div className="text-center max-w-lg">
              <p className="text-unlock-light/80 font-aeonik text-sm font-light leading-[1.4]">
                By joining our waiting list, you'll receive updates about our launch and exclusive early access to our platform. We respect your privacy and will never share your information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-24 py-16 lg:py-20 bg-unlock-light">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center gap-12 lg:gap-16">
            {/* Section Title */}
            <h2 className="text-unlock-dark font-aeonik text-3xl md:text-4xl lg:text-5xl font-light leading-[110%] text-center">
              What You'll Get as an Early Member
            </h2>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 w-full">
              {/* Benefit 1 */}
              <div className="flex flex-col items-center text-center gap-6 p-6">
                <div className="w-16 h-16 bg-unlock-green rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-unlock-dark font-aeonik text-xl font-medium">
                  Priority Access
                </h3>
                <p className="text-unlock-dark/80 font-aeonik text-base font-light leading-[1.4]">
                  Be the first to access our platform when we launch, with exclusive early-bird pricing and features.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="flex flex-col items-center text-center gap-6 p-6">
                <div className="w-16 h-16 bg-unlock-green rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-unlock-dark font-aeonik text-xl font-medium">
                  Exclusive Insights
                </h3>
                <p className="text-unlock-dark/80 font-aeonik text-base font-light leading-[1.4]">
                  Receive curated investment insights and market analysis reports before they're available to the public.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="flex flex-col items-center text-center gap-6 p-6">
                <div className="w-16 h-16 bg-unlock-green rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-unlock-dark font-aeonik text-xl font-medium">
                  Community Access
                </h3>
                <p className="text-unlock-dark/80 font-aeonik text-base font-light leading-[1.4]">
                  Join an exclusive community of like-minded investors and gain access to networking opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-24 py-16 lg:py-20 bg-unlock-dark">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex flex-col items-center gap-8">
            <h2 className="text-unlock-light font-aeonik text-2xl md:text-3xl lg:text-4xl font-light leading-[110%]">
              Ready to Transform Your Investment Strategy?
            </h2>
            <p className="text-unlock-light/80 font-aeonik text-lg font-light leading-[1.3] max-w-2xl">
              Don't miss out on the opportunity to be among the first to experience next-generation due diligence services.
            </p>
            <UnlockButton
              size="default"
              className="rounded-lg bg-unlock-green text-unlock-light font-medium uppercase tracking-wide hover:bg-unlock-green/90"
            >
              Join Our Waiting List
            </UnlockButton>
          </div>
        </div>
      </section>
    </div>
  );
}
