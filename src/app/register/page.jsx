"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

const SignUpPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const { data, error } = await authClient.signUp.email({
        name, email, password
      });

      if (error) {
        if (error.code === "USER_ALREADY_EXISTS") {
          toast.error("Email already registered! Please login.");
          router.push("/login");
        } else {
          toast.error(error.message || "Something went wrong!");
        }
        return;
      }
      toast.success("Account created! Please login.");
      router.push("/login");
    } catch (err) {
      toast.error("Signup failed. Try again.");
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
          <h1 className="text-2xl font-bold text-gray-800">Create Account</h1>
          <p className="text-sm text-gray-500 mt-1">Join BookBorrow and start reading</p>
        </div>

  
        <button
          onClick={handleGoogle}
          className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition mb-4"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>

      
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">or</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

  
        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>

          <TextField isRequired name="name"
            validate={(value) => value.length < 3 ? "Name must be at least 3 characters" : null}
            className="flex flex-col gap-1"
          >
            <Label className="text-sm font-medium text-gray-700">Full Name</Label>
            <Input placeholder="John Doe" className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
            <FieldError className="text-xs text-red-500" />
          </TextField>

          <TextField isRequired name="email" type="email"
            validate={(value) => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) ? "Please enter a valid email address" : null}
            className="flex flex-col gap-1"
          >
            <Label className="text-sm font-medium text-gray-700">Email</Label>
            <Input placeholder="john@example.com" className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
            <FieldError className="text-xs text-red-500" />
          </TextField>

          <TextField isRequired minLength={8} name="password" type="password"
            validate={(value) => {
              if (value.length < 8) return "Password must be at least 8 characters";
              if (!/[A-Z]/.test(value)) return "Must contain at least one uppercase letter";
              if (!/[0-9]/.test(value)) return "Must contain at least one number";
              return null;
            }}
            className="flex flex-col gap-1"
          >
            <Label className="text-sm font-medium text-gray-700">Password</Label>
            <Input placeholder="Enter your password" className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400" />
            <Description className="text-xs text-gray-400">Min 8 chars, 1 uppercase, 1 number</Description>
            <FieldError className="text-xs text-red-500" />
          </TextField>

          <Button
            type="submit"
            className="w-full bg-amber-400 hover:bg-amber-500 text-amber-900 font-semibold py-2.5 rounded-lg transition mt-2"
          >
            <Check /> Create Account
          </Button>

          <Button
            type="reset"
            variant="secondary"
            className="w-full border border-gray-300 text-gray-600 py-2.5 rounded-lg hover:bg-gray-50 transition text-sm"
          >
            Reset
          </Button>
        </Form>

       
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-amber-600 font-medium hover:underline">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default SignUpPage;