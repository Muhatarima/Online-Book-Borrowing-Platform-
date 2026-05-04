"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";





export default function Navbar() {
  const { data: session } = authClient.useSession();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
    router.refresh();
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">

    
        <Link href="/" className="text-amber-400 font-bold text-xl">
          BookBorrow
        </Link>

       
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-gray-300 hover:text-amber-400 text-sm font-medium transition">
            Home
          </Link>
          <Link href="/allbooks" className="text-gray-300 hover:text-amber-400 text-sm font-medium transition">
            All Books
          </Link>
          
            <Link href="/profile" className="text-gray-300 hover:text-amber-400 text-sm font-medium transition">
              My Profile
            </Link>
          
        </div>

        <div className="hidden md:flex items-center gap-3">
          {session ? (
            <>
              <span className="text-sm text-gray-400 flex items-center gap-2">
                {session.user?.image && (
                  <img src={session.user.image} className="w-7 h-7 rounded-full object-cover" />
                )}
                {session.user?.name}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1.5 rounded-lg flex items-center gap-1 transition"
              >
                <ArrowRightOnRectangleIcon className="w-4 h-4" />
                Logout
              </button>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <button className="text-gray-300 hover:text-amber-400 text-sm font-medium transition">
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button className="bg-amber-400 hover:bg-amber-500 text-amber-900 text-sm font-semibold px-4 py-1.5 rounded-lg transition">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>

        <div className="flex md:hidden items-center gap-2">
          {session ? (
            <>
              <Link href="/profile">
                <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-sm overflow-hidden">
                  {session.user?.image ? (
                    <img src={session.user.image} className="w-full h-full object-cover" />
                  ) : (
                    session.user?.name?.charAt(0).toUpperCase()
                  )}
                </div>
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white p-2 rounded-lg"
              >
                <ArrowRightOnRectangleIcon className="w-4 h-4" />
              </button>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login" className="text-gray-300 text-sm font-medium">
                Login
              </Link>
              <Link href="/register">
                <button className="bg-amber-400 text-amber-900 text-xs font-semibold px-3 py-1.5 rounded-lg">
                  Register
                </button>
              </Link>
            </div>
          )}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-300 p-2"
          >
            {menuOpen ? (
             <XMarkIcon className="w-5 h-5" />
            ) : (
              <Bars3Icon className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

  
      {menuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 px-4 py-4 flex flex-col gap-4">
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-gray-300 hover:text-amber-400 text-sm font-medium transition"
          >
            🏠 Home
          </Link>
          <Link
            href="/allbooks"
            onClick={() => setMenuOpen(false)}
            className="text-gray-300 hover:text-amber-400 text-sm font-medium transition"
          >
            📚 All Books
          </Link>
          {session ? (
            <Link
              href="/profile"
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-amber-400 text-sm font-medium transition"
            >
              👤 My Profile
            </Link>
          ) : (
            <>
              <Link
                href="/login"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-amber-400 text-sm font-medium transition"
              >
                🔑 Login
              </Link>
              <Link
                href="/register"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-amber-400 text-sm font-medium transition"
              >
                ✏️ Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}