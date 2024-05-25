"use client";

import { useRouter } from "next/navigation";
import React from "react";

export const BackCustomize = () => {
  const router = useRouter();
  return (
    <div className=" inline-flex flex-row border border-pink-600 w-full m-1">
      <div className="justify-start m-1 inline-flex flex-row items-center">
        <button
          onClick={() => router.back()}
          className="bg-white  text-black py-2 px-3  rounded-md"
        >
          Back
        </button>
      </div>
      <div className="inline-flex flex-row  items-center justify-center border border-white m-1  w-full">
        {" "}
        <h1 className=" border border-pink-400  item-center justify-center text-center text-xl ">
          Customize Your Template
        </h1>
      </div>
    </div>
  );
};
