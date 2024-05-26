"use client";
import React from 'react'
import { observer } from 'mobx-react';
import { Element } from '@/components/entity/Element';
import { StoreContext } from "@/store";
import { MdOutlineExpandLess,MdOutlineExpandMore } from 'react-icons/md';

export const Layers = observer(() => {
    const store = React.useContext(StoreContext);
    const [expand,setExpand]=React.useState<boolean>(true);
  return (
    <>
    <div className='border border-pink-500 m-0.5 p-0.5'>
    <div onClick={()=>setExpand(!expand)} className={`cursor-pointer border border-red-600 m-0.5 p-0.5 dark:border-gray-50 font-semibold flex flex-row justify-between items-center text-xs bg-[#151515] ${expand===true ? "border-red-500 border ":"border-b-[0.2px]"}`}>
      <div className='compheadsec1'>
        <h3 className='border border-green-500 m-0.5 '>Layers</h3>
        <button ><span>{expand  ? <MdOutlineExpandLess  size={24}/> :<MdOutlineExpandMore size={24} />}</span></button>
        </div>
    </div>
    {expand  ? <section className={`cursor-pointer w-full border-white bg-[#202020] ${expand ? "border":"border-none"}`}>
        {store.editorElements.map((element) => {
          return <Element key={element.id} element={element} />;
        })}
    </section>:null}
    </div>
    </>
  )
});


