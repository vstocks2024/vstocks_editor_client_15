"use client";
import React from 'react'
import { observer } from 'mobx-react';
import { StoreContext } from "@/store";
import { MdColorLens, MdOutlineExpandLess,MdOutlineExpandMore } from 'react-icons/md';
import {fabric} from 'fabric';


export const TextShadow =  observer(() => {
  const store = React.useContext(StoreContext);
    const [expand,setExpand]=React.useState<boolean>(true);
    const reftextshadowcolor=React.useRef<HTMLInputElement>(null);
    const reftextshadowoffsetX=React.useRef<HTMLInputElement>(null);
    const reftextshadowoffsetY=React.useRef<HTMLInputElement>(null);
    const reftextshadowblur=React.useRef<HTMLInputElement>(null);
    
    
    const handleTextBoxShadow=(event:React.ChangeEvent<HTMLInputElement>)=>{
      try{
        if(!store.selectedElement) return;
        if(!reftextshadowcolor.current || !reftextshadowoffsetX.current || !reftextshadowoffsetY.current || !reftextshadowblur.current) return;
        const newShadow=new fabric.Shadow({color:`${reftextshadowcolor.current.value}`,offsetX:parseFloat(`${reftextshadowoffsetX.current.value}`),offsetY:parseFloat(`${reftextshadowoffsetY.current.value}`),blur:parseFloat(`${reftextshadowblur.current.value}`)})
        store.setTextBoxShadow(store.selectedElement,newShadow);
          }
    catch(err){
      console.log(err);
    }
  }
  return (
    <>
    <div className='topdivlayer'>
    <section onClick={()=>setExpand(!expand)} className={`comphead ${expand===true ? "border-none":"border-b-[0.2px]"}`}>
      <div className='compheadsec1'>
      <h3 className='widgetheading'>Shadow</h3>
        <button ><span>{expand ? <MdOutlineExpandLess  size={24}/> :<MdOutlineExpandMore size={24} />}</span></button>
        </div>
    </section>
    {expand ? <section className={` innersection ${expand ? "border-b-[0.2px]":"border-none"}`}>
      <div className='flex flex-col items-center justify-between gap-y-3 px-3 py-2' >
       <div className='flex flex-row items-center w-full justify-between'>
        <div className='inline-flex flex-row  items-center justify-between space-x-1'>
        <input type='checkbox'  className='checkboxclass'/>
        <input type='color' onChange={handleTextBoxShadow} ref={reftextshadowcolor} className='colorboxclass'/>
      <h4 className='text-[11px]'>Shadow Color</h4>
        </div>
        <div className='inline-flex flex-col items-center justify-center'><button onClick={()=>{}}><MdColorLens size={24}/></button></div>
       </div>
       <div className='flex flex-row w-full items-center justify-start gap-x-2'>
           <div className='inline-flex w-1/4 flex-col  items-center justify-between space-y-1 '>
           <label className='text-center text-[11px] text-[#999999]' htmlFor='Offset X'>Offset X</label>
          <input ref={reftextshadowoffsetX}   className='focus:outline-none w-full border-[#444444]  text-[11px] bg-transparent border-b'/>
           </div>
           <div className='  inline-flex w-1/4 flex-col  items-center justify-between space-y-1'>
           <label className=' text-center text-[11px]  text-[#999999]' htmlFor='Offset Y'>Offset Y</label>
          <input ref={reftextshadowoffsetY}   className=' border-[#444444] focus:outline-none w-full text-[11px] bg-transparent border-b'/>
           </div>
           <div className=' inline-flex w-1/4 flex-col  items-center justify-between space-y-1 '>
           <label className=' text-center text-[11px] text-[#999999]' htmlFor='Blur'>Blur</label>
          <input ref={reftextshadowblur}   className='focus:outline-none border-[#444444] w-full text-[11px] bg-transparent border-b'/>
           </div>
       </div>
      </div>
    </section>:null}
    </div>
    </>
  )
});
