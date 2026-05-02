"use client";
import { useBooks } from "@/context/BooksContext";
import { useRouter } from "next/navigation";

const CATEGORIES = ["All", "Story", "Tech", "Science"];

export default function BooksPage() {
  const { filter = [], search, setSearch, category, setCategory } = useBooks();
  const router = useRouter();

  return (
    <div className="container mx-auto p-6 flex gap-6">

      {/* Sidebar */}
      <aside className="w-40 shrink-0">
        <h3 className="font-semibold mb-3">Category</h3>
        <ul className="flex flex-col gap-2">
          {CATEGORIES.map(cat => (
            <li
              key={cat}
              onClick={() => setCategory(cat)}
              className={`cursor-pointer px-3 py-2 rounded-lg text-sm ${
                category === cat
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main */}
      <div className="flex-1">

        {/* Search */}
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full border p-3 rounded-lg mb-6"
        />

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filter.map(book => (
            <div
              key={book.id}
              className="animate__animated animate__fadeIn border rounded-lg p-4 flex flex-col gap-2"
            >
              <img
                src={book.image_url}
                alt={book.title}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="font-semibold text-sm">{book.title}</h3>
              <button
                onClick={() => router.push(`/allbooks/${book.id}`)}
                className="mt-auto bg-black text-white text-sm py-2 rounded"
              >
                Details
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}