import { Button } from "@/components/ui/button";

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
                  Discover expert insights, tips, and strategies to maximize your investment returns.
                </p>
                
                {/* Button */}
                <div className="pt-4">
                  <Button 
                    className="bg-unlock-green hover:bg-unlock-green/90 text-unlock-light font-medium text-sm uppercase tracking-wide px-8 py-6 rounded-[10px] font-aeonik"
                  >
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
      
      {/* Blog Content Section - Placeholder for now */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl font-medium text-foreground mb-4">Latest Articles</h2>
            <p className="text-muted-foreground">Coming soon - blog articles will be displayed here.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
