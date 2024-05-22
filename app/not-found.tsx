"use client";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import React from "react";
import { usePathname } from "next/navigation";

function NotFound() {
  const path = usePathname().split("/")[1];
  return (
    <>
      <div className="z-10 rounded-2xl flex flex-col items-center w-full mt-2 font-graftyne dark:bg-[#ffffff33] bg-zinc-200 md:bg-transparent lg:bg-transparent dark:md:bg-transparent p-10 text-zinc-700 dark:text-white">
        <h1 className="z-10 font-trap text-9xl text-success">404</h1>
        <span className="w-11/12 lg:w-1/2 z-10">
          <h1 className="font-graftyne text-center text-lg z-10 lowercase">
            {path} not found
            <br />
            <hr className="h-px my-8 border-0 dark:bg-[#ffffff33] bg-zinc-300 z-10 text-lg lowercase" />
            Get started by creating pages in app directory
          </h1>
        </span>
        <Link
          className="mt-5 z-10 cursor-pointer font-trap hover:text-success text-md"
          href="/"
        >
          get home
        </Link>
      </div>
    </>
  );
}

export default NotFound;
