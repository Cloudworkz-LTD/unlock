import { useEffect, useRef } from "react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  featured?: boolean;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || testimonials.length === 0) {
      return;
    }

    let animationFrameId: number;
    let scrollPosition = container.scrollLeft;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;

      if (container) {
        container.scrollLeft = scrollPosition;
        const maxScroll = container.scrollWidth / 2;

        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
          container.scrollLeft = 0;
        }
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [testimonials.length]);

  return (
    <div
      ref={scrollContainerRef}
      className="testimonial-carousel flex gap-6 w-full overflow-x-hidden pb-4"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <style>{`
        .testimonial-carousel::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {[...testimonials, ...testimonials].map((testimonial, index) => (
        <div
          key={`${testimonial.name}-${index}`}
          className={`flex-shrink-0 w-[323px] h-[275px] rounded-[10px] border border-unlock-gray-medium py-10 px-6 flex flex-col justify-between ${
            testimonial.featured ? "bg-unlock-dark" : "bg-unlock-gray-light"
          }`}
        >
          <p
            className={`${
              testimonial.featured ? "text-unlock-light" : "text-unlock-dark"
            } font-aeonik text-base font-light leading-[1.4]`}
          >
            {testimonial.quote}
          </p>
          <div className="flex flex-col">
            <h4
              className={`${
                testimonial.featured ? "text-unlock-light" : "text-unlock-dark"
              } font-aeonik text-base font-normal leading-[1.5]`}
            >
              {testimonial.name}
            </h4>
            <p
              className={`${
                testimonial.featured ? "text-unlock-light" : "text-unlock-dark"
              } font-aeonik text-xs font-light leading-[1.5]`}
            >
              {testimonial.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
