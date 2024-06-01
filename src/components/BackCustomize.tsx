"use client";

import { useRouter } from "next/navigation";
import React from "react";

export const BackCustomize = () => {
  const router = useRouter();
  return (
    <div className=" inline-flex flex-row  px-1.5 w-full">
      <div className="justify-start m-1  inline-flex flex-row items-center">
        <button
          onClick={() => router.back()}
          className="bg-white  text-black py-2 px-3  rounded"
        >
          Back
        </button>
      </div>
      <div className="inline-flex flex-row  items-center justify-center  m-1  w-full">
        {" "}
        <h1 className="item-center justify-center text-center text-xl ">
          Customize Your Template
        </h1>
      </div>
    </div>
  );
};