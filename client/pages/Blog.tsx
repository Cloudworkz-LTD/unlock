import { Button } from "@/components/ui/button";
import BlogCard from "@/components/BlogCard";

export default function Blog() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-unlock-dark text-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-25 py-24 md:py-32 lg:py-38">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-28">
            {/* Content */}
            <div className="flex-1 max-w-2xl">
              <div className="space-y-8">
                {/* Title */}
                <h1 className="text-4xl md:text-6xl lg:text-8xl xl:text-[96px] font-extralight leading-[0.81] tracking-[-0.03em] text-white font-aeonik">
                  Unlocking the Secrets of Successful Investing
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl font-light leading-relaxed text-white font-aeonik max-w-[629px]">
                  Discover expert insights, tips, and strategies to maximize
                  your investment returns.
                </p>

                {/* Button */}
                <div className="pt-4">
                  <Button className="bg-unlock-green hover:bg-unlock-green/90 text-unlock-light font-medium text-sm uppercase tracking-wide px-8 py-6 rounded-[10px] font-aeonik">
                    Explore
                  </Button>
                </div>
              </div>
            </div>

            {/* Icon */}
            <div className="flex-shrink-0">
              <svg
                className="w-48 h-72 md:w-56 md:h-80 lg:w-70 lg:h-[450px] stroke-unlock-green"
                width="280"
                height="451"
                viewBox="0 0 280 451"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M120.808 1C158.737 1.00008 188.967 11.3232 209.709 30.2344C230.445 49.1402 241.759 76.6832 241.759 111.25V225.97H279.5V339.75C279.5 374.316 268.087 401.859 247.301 420.766C226.508 439.678 196.277 450 158.548 450C120.818 450 90.7502 439.677 70.1191 420.767C49.4937 401.861 38.2412 374.318 38.2412 339.75V225H0.5V111.25C0.5 76.681 11.6543 49.1374 32.2295 30.2324C52.8102 11.3226 82.8782 1 120.808 1ZM120.868 69.8213C105.33 69.8214 93.8408 73.2336 86.2393 80.4082C78.6316 87.5887 75.0117 98.4479 75.0117 113.123V226H112.753V337.938C112.753 352.207 116.484 362.903 124.145 370.022C131.797 377.135 143.283 380.596 158.609 380.596C174.119 380.596 185.749 377.136 193.502 370.024C201.263 362.905 205.049 352.209 205.049 337.938V232.185H205.019V224.97H167.309V113.123C167.309 98.4427 163.54 87.584 155.786 80.4053C148.04 73.2339 136.407 69.8213 120.868 69.8213Z"
                  stroke="#00BB77"
                  strokeWidth="1"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Articles Section */}
      <section className="py-12 lg:py-25 px-6 md:px-12 lg:px-25 bg-unlock-dark">
        <div className="max-w-7xl mx-auto">
          {/* Social Media Header */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-5 px-0 sm:px-4">
            <p className="text-white text-lg md:text-xl font-aeonik">
              Read more in our social media
            </p>
            <div className="flex items-center gap-4">
              <svg className="w-8 h-8 stroke-unlock-green" viewBox="0 0 32 32" fill="none">
                <path d="M23.9987 2.66602H19.9987C18.2306 2.66602 16.5349 3.36839 15.2847 4.61864C14.0344 5.86888 13.332 7.56457 13.332 9.33268V13.3327H9.33203V18.666H13.332V29.3327H18.6654V18.666H22.6654L23.9987 13.3327H18.6654V9.33268C18.6654 8.97906 18.8058 8.63992 19.0559 8.38987C19.3059 8.13982 19.6451 7.99935 19.9987 7.99935H23.9987V2.66602Z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <svg className="w-8 h-8 stroke-unlock-green" viewBox="0 0 32 32" fill="none">
                <path d="M21.332 10.666C23.4538 10.666 25.4886 11.5089 26.9889 13.0092C28.4892 14.5095 29.332 16.5443 29.332 18.666V27.9993H23.9987V18.666C23.9987 17.9588 23.7177 17.2805 23.2176 16.7804C22.7176 16.2803 22.0393 15.9993 21.332 15.9993C20.6248 15.9993 19.9465 16.2803 19.4464 16.7804C18.9463 17.2805 18.6654 17.9588 18.6654 18.666V27.9993H13.332V18.666C13.332 16.5443 14.1749 14.5095 15.6752 13.0092C17.1755 11.5089 19.2103 10.666 21.332 10.666Z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.0013 12H2.66797V28H8.0013V12Z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5.33464 7.99935C6.80739 7.99935 8.0013 6.80544 8.0013 5.33268C8.0013 3.85992 6.80739 2.66602 5.33464 2.66602C3.86188 2.66602 2.66797 3.85992 2.66797 5.33268C2.66797 6.80544 3.86188 7.99935 5.33464 7.99935Z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="space-y-5">
            {/* First Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {/* Featured Large Article */}
              <div className="lg:col-span-2">
                <BlogCard
                  image="https://api.builder.io/api/v1/image/assets/TEMP/a5efcff7f4361d68149e04d25da045847475efc8?width=1576"
                  title="Modern Investment Strategies for Today's Market"
                  description="Explore effective ways to balance risk and return in the current financial landscape."
                  date="11 Jan 2022"
                  readTime="5 min read"
                  featured={true}
                />
              </div>

              {/* Side Article */}
              <div>
                <BlogCard
                  image="https://api.builder.io/api/v1/image/assets/TEMP/6f1a3f588f805e2f9754ed081ec0250326cb71d1?width=740"
                  title="Building a Resilient Portfolio for Long-Term Growth"
                  description="Tips on diversification and asset selection to ensure future financial stability."
                  date="11 Jan 2022"
                  readTime="5 min read"
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <BlogCard
                image="https://api.builder.io/api/v1/image/assets/TEMP/1f038e1d0ab51ae1f049bf7eb5e6d26e3ccc2674?width=740"
                title="The Impact of Technology on Future Investments"
                description="How AI, automation, and fintech are transforming investment opportunities."
                date="11 Jan 2022"
                readTime="5 min read"
              />

              <BlogCard
                image="https://api.builder.io/api/v1/image/assets/TEMP/48cd7a662d1e2c090087d3e650fc69c5dc16d304?width=740"
                title="Sustainable Investing and ESG: Profits with Purpose"
                description="Combining financial gains with environmental and social responsibility"
                date="11 Jan 2022"
                readTime="5 min read"
              />

              <BlogCard
                image="https://api.builder.io/api/v1/image/assets/TEMP/b237944acbd74a623ef534b8d6026ad5501c3ddd?width=740"
                title="Cryptocurrency and Digital Assets: The Next Frontier"
                description="Understanding the role of crypto in today's market and its future potential."
                date="11 Jan 2022"
                readTime="5 min read"
              />
            </div>

            {/* Third Row with Newsletter */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {/* Newsletter Card */}
              <div className="bg-unlock-green p-6 lg:p-11 rounded-lg flex flex-col justify-between min-h-[520px]">
                <div>
                  <h3 className="text-white font-serif text-3xl lg:text-5xl font-semibold leading-tight mb-6">
                    Stay Updated with Our Newsletter
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="bg-black/20 rounded px-6 py-3">
                    <input
                      type="email"
                      placeholder="Enter Email Address"
                      className="bg-transparent text-unlock-light placeholder-unlock-light text-sm w-full focus:outline-none font-aeonik"
                    />
                  </div>
                  <Button className="w-full bg-white hover:bg-white/90 text-unlock-dark font-medium text-sm uppercase tracking-wide py-3 rounded font-aeonik">
                    Subscribe
                  </Button>
                </div>
              </div>

              <BlogCard
                image="https://api.builder.io/api/v1/image/assets/TEMP/dabfb7f6f278593556d842971a0624a606f24bee?width=1560"
                title="Protecting Investments Against Inflation"
                description="Strategies to safeguard capital amid rising prices and economic shifts."
                date="11 Jan 2022"
                readTime="5 min read"
              />
            </div>

            {/* Fourth Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <BlogCard
                image="https://api.builder.io/api/v1/image/assets/TEMP/4032324780ae008ed3515f106a7dd2aac3c7f6f8?width=740"
                title="Comparing Short-Term vs Long-Term Investment Approaches"
                description="Choosing the right strategy based on goals and market conditions."
                date="11 Jan 2022"
                readTime="5 min read"
              />

              <BlogCard
                image="https://api.builder.io/api/v1/image/assets/TEMP/5a880fbfc793f80990133c111a9b44994440d4fb?width=740"
                title="Future Trends in Real Estate Investment"
                description="Insights into evolving residential and commercial property markets."
                date="11 Jan 2022"
                readTime="5 min read"
              />

              <BlogCard
                image="https://api.builder.io/api/v1/image/assets/TEMP/af88d30be0a531301b2e01b308fc6b164120165a?width=740"
                title="Preparing Financially for Economic Uncertainty"
                description="Diversification tactics to maintain stability during market fluctuations."
                date="11 Jan 2022"
                readTime="5 min read"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
