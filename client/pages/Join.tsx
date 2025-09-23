import { MultiStepForm } from "@/components/MultiStepForm";

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
              <span className="text-unlock-light">
                for early access to Unlock's services and be the first to invest
                smarter.
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Multi-Step Form Section */}
      <MultiStepForm />
    </div>
  );
}
