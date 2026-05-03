import Image from "next/image";
import Link from "next/link";

const Card = ({ book }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition">
      
      <div className="w-full h-48 relative">
        <Image
          src={book.image_url}
          fill
          className="object-cover"
          alt={book.title}
        />
      </div>

      
      <div className="flex flex-col gap-2 p-4 flex-1">
        <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full w-fit">
          {book.category}
        </span>
        <h2 className="text-sm font-bold text-gray-800 line-clamp-2">{book.title}</h2>
        <p className="text-xs text-gray-500">{book.author}</p>
        <p className="text-xs text-gray-400 mt-auto">{book.available_quantity} copies left</p>

        <Link href={`/allbooks/${book.id}`}>
          <button className="w-full mt-2 bg-amber-400 hover:bg-amber-500 text-amber-900 text-sm font-semibold py-2 rounded-lg transition">
            View Details
          </button>
        </Link>
      </div>

    </div>
  );
};

export default Card;