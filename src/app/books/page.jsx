

import Card from "../Components/Card";
import Sidebar from "../Components/Sidebar";

async function getBooks() {
  const res = await fetch("http://localhost:5000/books");
  return res.json();
}

export default async function AllBooksPage() {
  const books = await getBooks();

  return (
    <div className="grid lg:grid-cols-3 container mx-auto">
      <div className="col-span-1 grid ">
        {books?.map((book) => (
                  <Sidebar key={book.id} book={book} />
               ))}
      </div>
      <div className="col-span-2">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4">
      {books?.length > 0 ? (
        books.map((book) => <Card key={book.id} book={book} />)
      ) : (
        <p className="text-indigo-900 text-center">No books available</p>
      )}
    </div>
      </div>
    </div>
  );
}