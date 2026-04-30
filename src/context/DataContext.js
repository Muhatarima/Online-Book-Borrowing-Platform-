"use client";

import { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/books")
      .then(res => res.json())
      .then(result => setData(result));
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}