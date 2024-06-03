import React, { useEffect, useRef, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { BsPlusCircleFill } from "react-icons/bs";
import { MenuFooter } from "./MenuFooter";

export const CanvasFooter = () => {
  const [menufooter,setMenuFooter]=useState<boolean>(false);
  const menufooterRef=useRef<HTMLDivElement>(null);
  const handleCloseMenuFooter=(event:any)=>{
    if(!menufooterRef.current?.contains(event?.target)){
      setMenuFooter(false);
    }
  }
  useEffect(()=>{
    document.addEventListener("click",handleCloseMenuFooter,true);

    return()=>{
      document.removeEventListener("click",handleCloseMenuFooter)
    }
  },[])


  return (
    <div className="bg-[rgb(32,32,32)] relative w-full">
      {menufooter===true ? <React.Fragment><div ref={menufooterRef}><MenuFooter /></div></React.Fragment>:null}
   <button onClick={()=>setMenuFooter(!menufooter)} className={`absolute flex min-[977px]:hidden -top-[calc(50%-10px)]  left-[calc(50%-20px)]`}><BsPlusCircleFill  color="#2E67DD" size={40}/></button>
      <div className="flex flex-row items-center justify-end px-1">

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
