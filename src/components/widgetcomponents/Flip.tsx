"use client";
import { observer } from 'mobx-react';
import React from 'react'
import { IconType } from 'react-icons/lib';
import { StoreContext } from "@/store";
import { LuFlipHorizontal2, LuFlipVertical2 } from 'react-icons/lu';
import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md'
import { isHtmlVideoElement,isHtmlImageElement,isHtmlAudioElement } from '@/utils';

export const Flip = observer(() => {
  const store = React.useContext(StoreContext);
    const [expand,setExpand]=React.useState<boolean>(true);
    const flip_row:IconType[]=[LuFlipHorizontal2 ,LuFlipVertical2];
    const handleFlipHorizontal=()=>{
    if(!store.selectedElement) return ;
      store.setFlipHorizontal(store.selectedElement);
    }

    const handleFlipVertical=()=>{
      if(!store.selectedElement) return ;
      store.setFlipVertical(store.selectedElement);
    }
    
  return (
    <>
    <div className='topdivlayer'>
       <section onClick={()=>setExpand(!expand)} className={`comphead ${expand===true ? "border-none":"border-b-[0.2px]"}`}>
       <div className='compheadsec1'>
       <h3 className='widgetheading'>Flip</h3>
          <button ><span>{expand ? <MdOutlineExpandLess  size={24}/> :<MdOutlineExpandMore size={24} />}</span></button>
          </div>
      </section>
      {expand   ? <section className={` innersection ${expand ? "border-b-[0.2px]":"border-none"}`}>
        <div className='inline-flex flex-row items-center justify-start space-x-3  px-3 py-2'>
        <button onClick={handleFlipHorizontal}  className=''>
          <span><LuFlipHorizontal2 className={`cursor-pointer`} size={24}/></span>
        </button>
        <button onClick={handleFlipVertical}  className=''>
          <span><LuFlipVertical2 className={`cursor-pointer`} size={24}/></span>
        </button>
        </div>
    </section>:null}
    </div>
    </>
  )
});


