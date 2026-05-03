"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { FiLogOut, FiUser } from "react-icons/fi";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/");
    router.refresh();
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">

       
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl"></span>
          <span className="text-xl font-bold text-amber-400">BookBorrow</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
          <Link href="/" className="hover:text-amber-400 transition">Home</Link>
          <Link href="/allbooks" className="hover:text-amber-400 transition">All Books</Link>
          <Link href="/profile" className="hover:text-amber-400 transition">My Profile</Link>
        </div>

        <div className="flex items-center gap-3">
          {isPending ? (
            <span className="w-5 h-5 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
          ) : session ? (
            <>
              <Link href="/profile" className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-1.5 rounded-lg transition">
                <FiUser className="text-amber-400 text-sm" />
                <span className="text-sm text-gray-200 hidden sm:block">
                  {session.user.name}
                </span>
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-3 py-1.5 rounded-lg transition"
              >
                <FiLogOut className="text-sm" />
                <span className="hidden sm:block">Logout</span>
              </button>
            </>
          ) : (
            <>
              <Link href="/login">
                <button className="text-sm text-gray-300 hover:text-amber-400 font-medium transition px-3 py-1.5">
                  Login
                </button>
              </Link>
              <Link href="/register">
                <button className="bg-amber-400 hover:bg-amber-500 text-amber-900 text-sm font-semibold px-4 py-1.5 rounded-lg transition">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;