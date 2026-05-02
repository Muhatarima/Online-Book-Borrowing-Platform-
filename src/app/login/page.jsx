"use client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const SigninPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const { data, error } = await authClient.signIn.email({
        email,
        password,
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

  return (
    <div className="container mx-auto flex justify-center items-center m-7">
      <Toaster />
      <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>

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
          <Button type="submit"><Check />Login</Button>
          <Button type="reset" variant="secondary">Reset</Button>
        </div>

      </Form>
    </div>
  );
};

export default SigninPage;