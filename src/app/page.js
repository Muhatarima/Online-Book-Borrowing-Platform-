"use client";
import hero from"@/assets/herobok.png"
import Image from "next/image";
import Link from "next/link";
import Card from "./Components/Card";

import { useBooks } from "@/context/BooksContext";


const Home =()=> {

  const {books} = useBooks();
const text = books.filter((m) => m.isNew === true);
    
        
  return (
    <div>

     <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <Image src={hero} alt="book" className="max-w-sm rounded-lg shadow-2xl"/>
    <div>
      <h1 className="text-5xl text-amber-400 font-bold">Find Your <span className="text-amber-900" >Next Read!</span></h1>
      <p className="py-6 text-cyan-50">
        Discover thousands of books across every genre.
Borrow instantly. Read at your own pace.
Return when you're done — no fees, no stress.
Your reading journey starts here.
      </p>
      <Link href='/allbooks' >      <button className="btn hover:bg-amber-400 hover:text-amber-950 bg-amber-300  text-amber-800">Browse Now</button>
</Link>

  
    

    </div>
  </div>
</div>
  <div className="mt-6 container mx-auto flex justify-between items-center bg-amber-100 p-2" >
    <button  className="btn bg-amber-500 border-0 text-amber-900 px-3 py-1">New Books</button>
          <marquee id="marquee" behavior="scroll" direction="left" scrollamount="4">
  {text.map((m) => (
    <span key={m.id} className="mx-4 text-sm font-semibold text-amber-800">
      {m.title}
    </span>
  ))}
</marquee>
    </div>
<div className="grid lg:grid-cols-4 gap-3 p-4 container mx-auto">
 {books.slice(0, 4).map((book) => (
  <Card key={book.id} book={book} />
))}
</div>
    </div>
  );
}
export default Home
