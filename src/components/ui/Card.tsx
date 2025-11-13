interface CardProps {
  id: number;
  name: string;
  rating: number;
  description: string;
  image: string;
  onViewDetails: (product: {
    id: number;
    name: string;
    description: string;
    image: string;
    rating: number;
  }) => void;
}

export function Card({
  id,
  name,
  rating,
  description,
  image,
  onViewDetails,
}: CardProps) {
  return (
    <div className="border-2 p-4 rounded-2xl flex flex-col justify-between bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      <div className="w-full overflow-hidden rounded-xl mb-3">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-xl hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h1 className="text-[18px] font-semibold py-1 capitalize text-foreground">
          {name}
        </h1>

        {/* Rating */}
        <div className="flex gap-2 py-2 items-center">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4.5 h-4.5 ${
                  i < rating ? "text-yellow-500" : "text-gray-300"
                }`}
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

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-3">{description}</p>
      </div>

      {/* Button */}
      <div className="mt-4">
        <button
          className="w-full bg-black hover:bg-slate-800 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
          onClick={() =>
            onViewDetails({ id, name, description, image, rating })
          }
        >
          View Details
        </button>
      </div>
    </div>
  );
}
