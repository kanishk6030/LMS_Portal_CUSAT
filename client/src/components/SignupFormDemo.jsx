"use client";
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { useAuth } from "../context/AuthContext";
import { GoogleLogin } from "@react-oauth/google";

export function SignupFormDemo() {
  const { user,register, googleLogin ,authLoading} = useAuth();
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({...form,[e.target.name]: e.target.value})
    console.log("Form submitted");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({
        name:form.name,
        email:form.email,
        password:form.password,
      });
      console.log("Registered successfully" , user);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div
      className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 text-center">
        Welcome to CUSAT LMS PORTAL!
      </h2>
      <form className="my-2" onSubmit={handleSubmit}>
        <div
          className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="name">Name</Label>
            <Input 
            id="name"
            placeholder="Kanishk" 
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="infocusatm@fc.com"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
          type="submit">
          {authLoading ? "Loading..." : "Sign up"} &rarr;
          <BottomGradient />
        </button>

        <div
          className="my-2 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />

        <div className="flex flex-col space-y-4">
            <GoogleLogin
      onSuccess={async (credentialResponse) => {
        console.log("Google Response:", credentialResponse);

        // ✅ credentialResponse.credential should now be a valid JWT (id_token)
        const credential = credentialResponse.credential;

        try {
          await googleLogin(credential); // send tokenId to backend
          console.log("Google login successful");
        } catch (err) {
          console.error("Google login failed", err);
        }
      }}
      onError={() => {
        console.log("❌ Login Failed");
      }}
    />
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span
        className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span
        className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
