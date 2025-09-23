interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

export default function BlogCard({
  image,
  title,
  description,
  date,
  readTime,
  featured = false,
}: BlogCardProps) {
  return (
    <article className="flex flex-col p-4 min-h-[520px] bg-transparent rounded-lg">
      {/* Image */}
      <div className="flex-1 mb-2">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Metadata */}
      <div className="flex justify-between items-center mb-2">
        {/* Category Tag */}
        <div className="flex items-center justify-center px-3 py-1 border border-unlock-green rounded-full">
          <span className="text-unlock-green text-xs font-semibold uppercase font-sans">
            All
          </span>
        </div>

        {/* Date & Read Time */}
        <div className="flex items-center gap-2 text-muted-foreground text-xs font-aeonik">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-unlock-green text-xl md:text-2xl lg:text-[28px] font-medium leading-[1.4] mb-2 font-aeonik">
        {title}
      </h3>

      {/* Description */}
      <p className="text-unlock-light text-sm leading-[1.5] font-aeonik">
        {description}
      </p>
    </article>
  );
}
