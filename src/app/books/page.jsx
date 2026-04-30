

import Card from "../Components/Card";

async function getBooks() {
  const res = await fetch("http://localhost:5000/books");
  return res.json();
}

export default async function AllBooksPage() {
  const books = await getBooks();

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4 container mx-auto">
      {books?.length > 0 ? (
        books.map((book) => <Card key={book.id} book={book} />)
      ) : (
        <p>No books available</p>
      )}
    </div>
  );
}