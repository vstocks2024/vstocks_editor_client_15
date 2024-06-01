import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BsPlusCircleFill } from "react-icons/bs";
import { MenuFooter } from "./MenuFooter";

export const CanvasFooter = () => {
  const [menufooter,setMenuFooter]=useState<boolean>(false);
  return (
    <div className="bg-[rgb(32,32,32)] border relative border-green-500 m-[1px] p-[1px] w-full">
      {menufooter===true ? <><MenuFooter/></>:null}
   <button onClick={()=>setMenuFooter(!menufooter)} className={`absolute flex min-[977px]:hidden -top-[calc(50%-10px)]  left-[calc(50%-20px)]`}><BsPlusCircleFill  color="#2E67DD" size={40}/></button>
      <div className=" border border-pink-500 m-[1px] p-[1px] flex flex-row items-center justify-end px-1">

        <div className="flex flex-row items-center justify-center m-0.5">
          <div>
            <FaMinus size={12} />
          </div>
          <div className="inline-flex flex-col gap-y-1 outline-none appearance-none focus:outline-none border-b m-0.5 p-0.5 items-center justify-between">
            <h5 className="text-gray-100 text-[10px] text-start w-full m-0.5 px-1">Zoom</h5>
            <select className="text-[10px]">
              <option>25%</option>
              <option>50%</option>
              <option>75%</option>
              <option>100%</option>
              <option>125%</option>
              <option>150%</option>
              <option>175%</option>
              <option>200%</option>
              <option>250%</option>
              <option>300%</option>
            </select>
          </div>
          <div>
            <FaPlus size={12} />
          </div>
        </div>
      </div>
    </div>
  );
};
