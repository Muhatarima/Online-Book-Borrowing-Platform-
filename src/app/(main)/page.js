"use client";
import hero from "@/assets/herobok.png";
import Image from "next/image";
import Link from "next/link";
import Card from "../Components/Card";
import { useBooks } from "@/context/BooksContext";

const Home = () => {
  const { books } = useBooks();
  const text = books.filter((m) => m.isNew === true);

  return (
    <div className="min-h-screen bg-gray-50">

     
      <div className="bg-amber-50 border-b border-amber-100">
        <div className="container mx-auto px-6 py-16 flex flex-col lg:flex-row items-center gap-12">
          
         
          <div className="flex-1 flex flex-col gap-5">
            <span className="inline-block w-fit bg-amber-100 text-amber-700 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full">
               Online Book Borrowing
            </span>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Find Your{" "}
              <span className="text-amber-500">Next Read!</span>
            </h1>
            <p className="text-gray-500 leading-relaxed max-w-lg">
              Discover thousands of books across every genre.
              Borrow instantly. Read at your own pace.
              Return when you're done — no fees, no stress.
            </p>
            <div className="flex gap-3 mt-2">
              <Link href="/allbooks">
                <button className="bg-amber-400 hover:bg-amber-500 text-amber-900 font-semibold px-6 py-2.5 rounded-lg transition">
                  Browse Now →
                </button>
              </Link>
            </div>
          </div>

         
          <div className="flex-1 flex justify-center">
            <Image
              src={hero}
              alt="book"
              className="max-w-sm w-full rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </div>

     
      <div className="bg-amber-100 border-y border-2 border-amber-950 py-3 flex items-center gap-0">
        <span className="bg-amber-400 text-amber-900 text-xs font-bold uppercase tracking-wider px-5 py-3 shrink-0">
          🆕 New Arrivals
        </span>
        <marquee behavior="scroll" direction="left" scrollamount="4" className="flex-1 px-4">
          {text.map((m) => (
            <span key={m.id} className="mx-8 text-sm font-semibold text-amber-800">
              📖 {m.title}
            </span>
          ))}
        </marquee>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold bg-amber-100 text-amber-800 px-4 py-2 rounded-lg">
              Featured Books
            </h2>
            <p className="text-sm text-gray-400 mt-1">Handpicked reads for you</p>
          </div>
          <Link href="/allbooks">
            <span className="text-sm text-amber-600 font-medium hover:underline cursor-pointer">
              View All →
            </span>
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {books.slice(0, 4).map((book) => (
            <Card key={book.id} book={book} />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;