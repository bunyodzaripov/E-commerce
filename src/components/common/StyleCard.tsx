import { Link } from "react-router-dom";

export default function StyleCard({
  label,
  image,
}: {
  label: string;
  image: string;
}) {
  return (
    <Link to={`/products/${label.toLowerCase()}`}>
      <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-white cursor-pointer group">
        <span className="absolute top-4 left-8 z-10 text-[24px] md:text-[36px] font-bold text-black">
          {label}
        </span>

        <img
          src={image}
          alt="style card image"
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </Link>
  );
}
