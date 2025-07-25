"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Separator } from "@/components/ui/separator";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const initialState = {
  email: "",
  password: "",
};

export default function SignIn() {
  const [formData, setFormData] = useState(initialState);
  const router = useRouter();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5008/api/auth/signin",
        formData,
        {
          withCredentials: true,
        }
      );
      if (res) {
        console.log(res);

        toast.success(res?.data?.message);
        //todo
        //res.data.user.role
        if (
          res?.data?.user?.role === "user" ||
          res?.data?.user?.role === "admin"
        ) {
          router.push("/");
        } else if (res?.data?.user?.role === "superadmin") {
          router.push("/super-admin");
        }
      }
    } catch (error) {
      console.log(error);

      console.error("Signup error:", error?.response?.data || error.message);
      toast.error(error?.response?.data?.message);
    }
  };

  console.log(formData);

  return (
    <div className="max-w-[550px] bg-[#ffffff] mx-auto mt-20 mb-10 p-5 border border-[#E2E8F0] rounded-lg">
      <h1 className="text-center text-2xl font-semibold text-gray-950 mb-5 ">
        Create New Account
      </h1>
      <Separator className="bg-gray-400" />
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-5">
        <div className="flex flex-col gap-1 ">
          <Label className="font-medium text-gray-600 text-[16px]">Email</Label>
          <Input
            placeholder="Enter your email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="border border-[#94A3B8] rounded-md px-2 py-5"
          />
        </div>
        <div className="flex flex-col gap-1 ">
          <Label className="font-medium text-gray-600 text-[16px]">
            Password
          </Label>
          <Input
            placeholder="Enter your password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="border border-[#94A3B8] rounded-md px-2 py-5 "
          />
        </div>

        <Button className="bg-[#1E3A8A] hover:bg-[#162E6B] mt-4 p-5 cursor-pointer">
          Sign-In
        </Button>
      </form>
      <div className="flex gap-2 items-center mt-5">
        <p className="text-[15px]">Don't have Account? </p>
        <Link
          href="/auth/sign-up"
          className="text-blue-600 font-medium hover:underline hover:text-blue-700"
        >
          SignUp
        </Link>
      </div>
    </div>
  );
}
