"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
const SigninPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const { data, error } = await authClient.signIn.email({
        email, password,
      });

      if (error) {
        if (error.code === "INVALID_EMAIL_OR_PASSWORD") {
          toast.error("Wrong email or password!");
        } else {
          toast.error(error.message || "Something went wrong!");
        }
        return;
      }

      router.push("/");
      router.refresh();
    } catch (err) {
      toast.error("Login failed. Please try again.");
    }
  };

  const handleGoogle = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Toaster />
      <div className="bg-white w-full max-w-md rounded-2xl shadow-md p-8">

        
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-sm text-gray-500 mt-1">Login to your BookBorrow account</p>
        </div>

  
        <button
          onClick={handleGoogle}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition mb-4"
        >
  <FcGoogle className="w-5 h-5" />
          Continue with Google
        </button>

        
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

    
        <form onSubmit={onSubmit} className="flex flex-col gap-4">

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              required
              placeholder="john@example.com"
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Password</label>
            <input
              name="password"
              type="password"
              required
              placeholder="Enter your password"
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-amber-400 hover:bg-amber-500 text-amber-900 font-semibold py-2.5 rounded-lg transition mt-1"
          >
            Login
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-5">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-amber-600 font-medium hover:underline">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default SigninPage;