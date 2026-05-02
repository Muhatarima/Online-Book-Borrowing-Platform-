"use client";
import { useBooks } from "@/context/BooksContext";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import toast, { Toaster } from "react-hot-toast";

export default function BookDetailsPage() {
  const { id } = useParams();
  const router = useRouter();
  const { books } = useBooks();
  const [session, setSession] = useState(null);


  console.log("id from params:", id, typeof id);
console.log("books:", books);
const book = books.find((b) => String(b.id) === id);

  useEffect(() => {
    authClient.getSession().then(({ data }) => {
      if (!data) router.push("/login"); // private route
      setSession(data);
    });
  }, []);

  const handleBorrow = () => {
    if (!session) {
      router.push("/login");
      return;
    }
    toast.success("Book borrowed successfully! 🎉");
  };

  if (!book) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="container mx-auto p-6 mt-6">
      <Toaster />
      <div className="flex flex-col md:flex-row gap-8">

        {/* Left — Book Cover */}
        <img
          src={book.image_url}
          alt={book.title}
          className="w-full md:w-64 h-80 object-cover rounded-lg shadow-lg"
        />

        {/* Right — Details */}
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <p className="text-gray-500 text-lg">by {book.author}</p>
          <p className="text-gray-700 leading-relaxed">{book.description}</p>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium bg-blue-500 text-blue-950 px-3 py-1 rounded-full">
              {book.category}
            </span>
            <span className="text-sm text-gray-500">
              📚 {book.available_quantity} copies left
            </span>
          </div>

          <button
            onClick={handleBorrow}
            className="bg-black text-white px-6 py-3 rounded-lg w-fit mt-2 hover:bg-gray-800 transition"
          >
            Borrow This Book
          </button>
        </div>

      </div>
    </div>
  );
}