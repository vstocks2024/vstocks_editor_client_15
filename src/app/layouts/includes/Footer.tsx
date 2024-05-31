"use client ";

import Link from "next/link";
import React from "react";
import { MdFacebook } from "react-icons/md";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer(){
  
    return ( <div className={`bg-[#2E67DD] shadow-headershadow   h-auto`}>
           <footer className=" container mx-auto">
            <div className="flex flex-col justify-center items-center py-8">
              <div className=" cursor-pointer">
              <Link href={"/"}><Image alt="" className="hover:brightness-200" src="/logo.svg" width={40} height={50} /></Link>
              </div>
              <p className=" hover:brightness-200 text-nowrap font-poppins400 font-normal  text-white text-center py-8">
              There are three responses to a piece <br />
               of design - yes, no, and WOW!
              </p>
              <div className="font-normal py-2 sm:py-4 text-white  space-x-2 sm:font-medium  sm:space-x-6 lg:space-x-12 justify-between">
              <span className="hover:font-bold hover:transition-all duration-100 hover:brightness-200 cursor-pointer  ">Privacy Policy</span>
        <span className="hover:font-bold hover:transition-all duration-100 hover:brightness-200 cursor-pointer   ">Contact Us</span>
        <span className="hover:font-bold hover:transition-all duration-100 hover:brightness-200 cursor-pointer  ">Terms and conditions</span>
        <span className="hover:font-bold hover:transition-all duration-100 hover:brightness-200 cursor-pointer  ">About</span>
        <span className="hover:font-bold hover:transition-all duration-100 hover:brightness-200 cursor-pointer  ">FAQs</span>

              </div>
              <div className="flex flex-row justify-center items-center py-2 sm:py-4">
              <Link  href={"/"} className=" cursor-pointer">
    <div className="rounded-full p-2 m-1 "><MdFacebook color="#FFFFFF" size={35}/></div>
    </Link>
        <Link  href={"/"} className=" cursor-pointer">
        <div className="rounded-full p-3 m-1 "><FaTwitter color="#FFFFFF" size={22}/></div>
        </Link>
        <Link href={"/"}  className="cursor-pointer">
          <div className="rounded-full p-3 m-1 ">
            <FaInstagram color="#FFFFFF" size={25}/>
          </div>
        </Link>

              </div>

            </div>
           </footer>
           </div>
           );

}