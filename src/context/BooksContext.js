"use client";
import { createContext, useState, useEffect, useContext, use } from "react";

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
 

  useEffect(() => {
    fetch("https://online-book-borrowing-platform-yifv.vercel.app/api/books")
      .then(res => res.json())
      .then(data => {
        setBooks(data);
        setFilter(data);
      });
  }, []);

  useEffect(() => {
    let result = books;
    if (category !== "All") {
      result = result.filter(book => book.category === category);
    }
    if (search) {
      result = result.filter(book =>
        book.title.toLowerCase().includes(search.toLowerCase())
      );
    }
    setFilter(result);
  }, [category, search, books]);

  return (
    <BooksContext.Provider value={{ books, filter, setSearch, setCategory }}>
      {children}
    </BooksContext.Provider>
  );
}

export function useBooks() {
  return useContext(BooksContext);
}