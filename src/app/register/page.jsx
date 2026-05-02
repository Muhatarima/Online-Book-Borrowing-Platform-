"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

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

      router.push("/login");
    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  return (
    <div className="container mx-auto flex justify-center items-center m-7">
      <Toaster />
      <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
        <TextField isRequired name="name"
          validate={(value) => value.length < 3 ? "Name must be at least 3 characters" : null}
        >
          <Label>Name</Label>
          <Input placeholder="John Doe" />
          <FieldError />
        </TextField>

        <TextField isRequired name="email" type="email"
          validate={(value) => !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) ? "Please enter a valid email address" : null}
        >
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>

        <TextField isRequired minLength={8} name="password" type="password"
          validate={(value) => {
            if (value.length < 8) return "Password must be at least 8 characters";
            if (!/[A-Z]/.test(value)) return "Password must contain at least one uppercase letter";
            if (!/[0-9]/.test(value)) return "Password must contain at least one number";
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
          <FieldError />
        </TextField>

        <div className="flex gap-2">
          <Button type="submit"><Check />Submit</Button>
          <Button type="reset" variant="secondary">Reset</Button>
        </div>
      </Form>
    </div>
  );
};

export default SignUpPage;