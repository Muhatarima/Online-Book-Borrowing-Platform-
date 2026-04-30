"use client";

import { DataProvider } from "@/context/DataContext";

export default function Providers({ children }) {
  return <DataProvider>{children}</DataProvider>;
}