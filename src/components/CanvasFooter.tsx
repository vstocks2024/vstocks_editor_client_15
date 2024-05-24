import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export const CanvasFooter = () => {
  return (
    <div className="border bg-[#202020] border-green-400 m-0.5 w-full">
      <div className="flex flex-row items-center justify-end m-0.5   border border-red-500">
        <div className="flex flex-row items-center justify-center m-0.5">
          <div>
            <FaMinus size={12} />
          </div>
          <div className="inline-flex flex-col gap-y-1 outline-none appearance-none focus:outline-none border-b border border-white m-0.5 p-0.5 items-center justify-between">
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
