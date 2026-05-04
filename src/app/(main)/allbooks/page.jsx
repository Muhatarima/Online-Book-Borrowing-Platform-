"use client";
import { useBooks } from "@/context/BooksContext";
import { useRouter } from "next/navigation";

const CATEGORIES = ["All", "Story", "Tech", "Science"];

export default function BooksPage() {
  const { filter = [], search, setSearch, category, setCategory } = useBooks();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6">

        <div className="flex gap-2 overflow-x-auto pb-2 mb-4 md:hidden">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition ${
                category === cat
                  ? "bg-amber-400 text-amber-900"
                  : "bg-white text-gray-600 border border-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex gap-6">

          <aside className="hidden md:block w-44 shrink-0">
            <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wider mb-3">
              Category
            </h3>
            <ul className="flex flex-col gap-2">
              {CATEGORIES.map(cat => (
                <li
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`cursor-pointer px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                    category === cat
                      ? "bg-amber-400 text-amber-900"
                      : "bg-white text-gray-600 hover:bg-amber-50 hover:text-amber-700 border border-gray-200"
                  }`}
                >
                  {cat}
                </li>
              ))}
            </ul>
          </aside>

          <div className="flex-1 min-w-0">

            <input
              type="text"
              placeholder="🔍 Search by title..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full bg-white border border-gray-200 text-amber-900 px-4 py-3 rounded-xl mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 shadow-sm"
            />

            <p className="text-sm text-gray-400 mb-4">
              {filter.length} books found
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {filter.map(book => (
                <div
                  key={book.id}
                  className="bg-white border border-gray-100 rounded-xl overflow-hidden flex flex-col hover:shadow-md transition"
                >
                  <img
                    src={book.image_url}
                    alt={book.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3 flex flex-col gap-1 flex-1">
                    <span className="text-xs text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full w-fit font-medium">
                      {book.category}
                    </span>
                    <h3 className="font-semibold text-sm text-gray-800 line-clamp-2">
                      {book.title}
                    </h3>
                    <p className="text-xs text-gray-400">{book.author}</p>
                    <button
                      onClick={() => router.push(`/allbooks/${book.id}`)}
                      className="mt-auto w-full bg-amber-400 hover:bg-amber-500 text-amber-900 text-sm font-semibold py-2 rounded-lg transition"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}