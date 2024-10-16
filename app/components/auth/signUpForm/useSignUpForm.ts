"use client";

import { axiosInstance } from "@/app/utils/axiosInstance";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const useSignUpForm = () => {
  const router = useRouter();
  const { status } = useSession();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!email || !name || !password || !companyName) {
      setError("Please fill all fields");
      setLoading(false);
      return;
    }
    if (password.length < 6) {
      setError("Password should be at least 6 characters long");
      setLoading(false);
      return;
    }
    if (password.length >= 20) {
      setError("The password field must not be greater than 20 characters");
      setLoading(false);
      return;
    }

    try {
      await axiosInstance.post(`/api/register`, {
        name,
        email,
        password,
        companyName,
      });
      router.push("/");
    } catch (error: any) {
      setError(
        error.response?.data?.message ||
          (error.response && error.response.status === 400
            ? "Registration failed. Please try again."
            : "Email Already Exists")
      );
    } finally {
      setLoading(false);
    }
  };
  const googleAction = () => {
    signIn("google", { redirect: false }).then((callback) => {
      if (callback?.error) {
        setError("Invalid Credentials");
      }
      if (callback?.ok && !callback?.error) {
        toast("Logged in", {
          icon: "👏",
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
          },
        });
      }
    });
  };
  return {
    name,
    email,
    password,
    companyName,
    loading,
    error,
    setName,
    setEmail,
    setPassword,
    setCompanyName,
    setLoading,
    setError,
    submitHandler,
    googleAction,
  };
};
