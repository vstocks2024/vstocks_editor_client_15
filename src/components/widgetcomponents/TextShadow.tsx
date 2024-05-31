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
    <div className='border border-pink-500 p-0.5 m-0.5'>
    <section onClick={()=>setExpand(!expand)} className={`comphead ${expand===true ? "border-none":"border-b-[0.2px]"}`}>
      <div className='compheadsec1'>
      <h3 className='border border-green-500 m-0.5 p-0.5'>Shadow</h3>
        <button ><span>{expand ? <MdOutlineExpandLess  size={24}/> :<MdOutlineExpandMore size={24} />}</span></button>
        </div>
    </section>
    {expand ? <section className={`cursor-pointer w-full border border-white bg-[#202020] ${expand ? "border-b-[0.2px]":"border-none"}`}>
      <div className='flex flex-col items-center justify-between border border-green-500 m-[1px] p-[1px]' >
       <div className='flex flex-row items-center w-full justify-between border border-red-500 m-[1px] p-[1px]'>
        <div className='inline-flex flex-row  items-center justify-between space-x-1 border border-blue-500 m-[1px] p-[1px]'>
        <input type='checkbox'  className=' accent-white bg-transparent cursor-pointer border-[0.1px] '/>
        <input type='color' onChange={handleTextBoxShadow} ref={reftextshadowcolor} className='h-7 w-6 bg-transparent cursor-pointer'/>
      <h4 className='text-[11px]'>Shadow Color</h4>
        </div>
        <div className='inline-flex flex-col items-center justify-center border border-blue-500 m-[1px] p-[1px]'><button onClick={()=>{}}><MdColorLens size={24}/></button></div>
       </div>
       <div className='flex flex-row items-center justify-start border border-blue-500 m-[1px] p-[1px]'>
           <div className='inline-flex flex-col m-[1px] p-[1px] items-center justify-between space-y-1'>
           <label className='text-center text-[11px] text-[#999999]' htmlFor='Offset X'>Offset X</label>
          <input ref={reftextshadowoffsetX}   className='focus:outline-none text-sm bg-transparent border-b'/>
           </div>
       </div>
      </div>
    </section>:null}
    </div>
    </>
  )
});
