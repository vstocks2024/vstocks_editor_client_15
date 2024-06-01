"use client";
import React from 'react'
import { observer } from 'mobx-react';
import { Element } from '@/components/entity/Element';
import { StoreContext } from "@/store";
import { IconType } from 'react-icons/lib';
import {MdOutlineExpandMore,MdOutlineExpandLess, MdAlignHorizontalLeft ,MdAlignHorizontalCenter, MdAlignHorizontalRight ,MdAlignVerticalTop ,MdAlignVerticalCenter ,MdAlignVerticalBottom ,MdVerticalDistribute,MdHorizontalDistribute ,MdLock,MdLockOpen } from "react-icons/md";
import { MdFormatAlignLeft,MdFormatAlignCenter,MdFormatAlignRight,MdFormatAlignJustify } from "react-icons/md";


export const Alignment =  observer(() => {
  const store = React.useContext(StoreContext);
    const [expand,setExpand]=React.useState<boolean>(true);
    const handleAlignHorizontalLeft=()=>{
      if(!store.selectedElement) return;
      store.setObjectAlignmentToLeft(store.selectedElement);
    }
    const handleAlignHorizontalCenter=()=>{
      if(!store.selectedElement) return;
      store.setObjectAlignmentHorizontalCenter(store.selectedElement);

    }
    const handleAlignHorizontalRight=()=>{
      if(!store.selectedElement) return;
      store.setObjectAlignmentToRight(store.selectedElement);      
    }

    const handleHorizontalDistribute=()=>
    {
      if(!store.selectedElement) return;
      store.setObjectAlignmentCanvasCenter(store.selectedElement);
    }

    const handleAlignVerticalTop=()=>
    {
      if(!store.selectedElement) return;
      store.setObjectAligmentToTop(store.selectedElement);

    }
    const handleAlignVerticalCenter=()=>{
      if(!store.selectedElement) return;
      store.setObjectAlignmentVerticalCenter(store.selectedElement);

    }
    const handleAlignVerticalBottom=()=>{
      if(!store.selectedElement) return;
      store.setObjectAlignmentToBottom(store.selectedElement);
    }
    
    

  return ( <>
  <div className='border border-pink-500 p-0.5 m-0.5'>
<section onClick={()=>setExpand(!expand)} className={`comphead ${expand===true ? "border-none":"border-b-[0.2px]"}`}>
          <div className='compheadsec1'>
          <h3 className='border border-green-500 m-0.5 p-0.5'>Alignment</h3>
          <button ><span>{expand ? <MdOutlineExpandLess  size={24}/> :<MdOutlineExpandMore size={24} />}</span></button>
          </div>
</section>
{expand  ? <section className={`cursor-pointer w-full border-white dark:border-white bg-[#202020] ${expand ? "border":"border-none"}`}>
      <div className='flex flex-col items-start justify-between  gap-y-1  py-2 px-3'>
      <div className='m-0.5 p-0.5 inline-flex flex-row  items-center justify-start space-x-3'>
     <button className='' type='button' onClick={handleAlignHorizontalLeft}>
          <span><MdAlignHorizontalLeft size={24}/></span>
          
        </button>
        <button className='' onClick={handleAlignHorizontalCenter} type='button'>
          <span><MdAlignHorizontalCenter size={24}/></span>
          
        </button>
        <button className='' onClick={handleAlignHorizontalRight} type='button'>
          <span><MdAlignHorizontalRight size={24}/></span>
          
        </button>
        <button className='' onClick={handleHorizontalDistribute} type='button'>
          <span><MdHorizontalDistribute size={24}/></span>
          
        </button>
        
      </div>
      <div className='m-0.5 p-0.5 inline-flex flex-row  items-center justify-start space-x-3'>
      <button   className='' onClick={handleAlignVerticalTop} type='button'>
          <span><MdAlignVerticalTop size={24}/></span>
          
        </button>
        <button   className='' type='button'>
          <span><MdAlignVerticalCenter onClick={handleAlignVerticalCenter} size={24}/></span>
          
        </button>
        <button   className='' onClick={handleAlignVerticalBottom}  type='button'>
          <span><MdAlignVerticalBottom size={24}/></span>
          
        </button>
        <button   className='' onClick={handleHorizontalDistribute} type='button'>
          <span><MdVerticalDistribute size={24}/></span>
          
        </button>
      </div>
      </div>
    </section> :null}
    </div>
    </>);});
  

