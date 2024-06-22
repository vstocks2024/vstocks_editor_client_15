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
    <div className='topdivlayer'>
    <div onClick={()=>setExpand(!expand)} className={`comphead ${expand===true ? "border-none":"border-b-[0.2px]"}`}>
      <div className='compheadsec1'>
        <h3 className='widgetheading'>Layers</h3>
        <button ><span>{expand  ? <MdOutlineExpandLess  size={24}/> :<MdOutlineExpandMore size={24} />}</span></button>
        </div>
    </div>
    {expand  ? <section className={` innersection ${expand ? "border-b-[0.2px]":"border-none"}`}>
      <div className='flex flex-col px-1.5 py-2 w-full'>
        {store.editorElements.map((element) => {
          return <Element key={element.id} element={element} />;
        })}
      </div>
    </section>:null}
    </div>
    </>
  )
});


