

interface CardProps {
  id: number;
  name: string;
  rating: number;
  description: string;
  image: string;
}

export function Card({ name, rating, description, image }: CardProps) {
  return (
    <div className="border-2 p-3 rounded-2xl">
      {/* image container */}
      <div>
        <img src={image} alt="" className=""/>
      </div>
      {/* content */}
      <div>
        <h1 className="text-[18px] w-max font-semibold py-1">{name}</h1>
      </div>

      {/* rating */}
      <div className="flex gap-2 py-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-4.5 h-4.5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-sm text-muted-foreground font-medium">
          ({rating}/5)
        </span>
      </div>

      {/* description */}
      <div>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
