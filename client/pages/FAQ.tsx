export default function FAQ() {
  return (
    <div className="min-h-screen bg-unlock-dark">
      {/* FAQ Hero Section */}
      <section className="flex flex-col items-start justify-center px-4 sm:px-8 lg:px-[100px] py-16 lg:py-24">
        <div className="flex flex-col items-start max-w-4xl text-left w-full">
          {/* Title */}
          <div className="mb-10">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-[96px] font-extralight leading-[81%] tracking-[-2.88px] text-unlock-green font-aeonik">
              FAQs
            </h1>
          </div>

          {/* Description */}
          <div className="max-w-[629px]">
            <p className="text-white text-lg sm:text-xl font-light leading-[120%] font-aeonik">
              Find answers to common questions about Unlock's services to help
              you make informed decisions.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
