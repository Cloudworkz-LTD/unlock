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
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = 323;
    const gap = 24;
    const scrollAmount = cardWidth + gap;

    autoScrollInterval.current = setInterval(() => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 3000);

    return () => {
      if (autoScrollInterval.current) {
        clearInterval(autoScrollInterval.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = null;
    }
  };

  const handleMouseLeave = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = 323;
    const gap = 24;
    const scrollAmount = cardWidth + gap;

    autoScrollInterval.current = setInterval(() => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, 3000);
  };

  return (
    <div
      ref={scrollContainerRef}
      className="flex overflow-x-auto gap-6 pb-4 scroll-smooth"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <style>{`
        .testimonial-carousel::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className={`flex-shrink-0 w-[323px] h-[275px] ${
            testimonial.featured
              ? "bg-unlock-dark border-unlock-gray-medium"
              : "bg-unlock-gray-light border-unlock-gray-medium"
          } border rounded-[10px] py-10 px-6 flex flex-col justify-between`}
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
