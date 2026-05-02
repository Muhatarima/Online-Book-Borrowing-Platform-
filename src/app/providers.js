"use client";

import { BooksProvider } from "@/context/BooksContext";

export default function Providers({ children }) {
  return (
    <BooksProvider>
      {children}
    </BooksProvider>
  );
}