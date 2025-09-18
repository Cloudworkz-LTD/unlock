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
  
    </div>
  );
}
