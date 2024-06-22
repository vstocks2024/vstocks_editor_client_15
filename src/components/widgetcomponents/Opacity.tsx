"use client";
import { observer } from 'mobx-react';
import React,{useRef} from 'react'
import { StoreContext } from "@/store";
import {MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md';

export const Opacity = observer(() => {
  const [expand,setExpand]=React.useState<boolean>(true);
  const store = React.useContext(StoreContext);
  const refPercent=React.useRef<HTMLInputElement>(null);
  const handleChangeSlider=(event:React.ChangeEvent<HTMLInputElement>)=>{
    try{
    if(!refPercent.current) return;
    refPercent.current.value=event.target.value;
    const a=parseFloat(refPercent.current.value);
    const p=a/100;
    if(!store.selectedElement) return ;
    store.setObjectOpacity(store.selectedElement,p);
     }
     catch(err)
     {
      console.log(err);
     }
  }

  return (<> 
    <div className='topdivlayer'>
  <section onClick={()=>setExpand(!expand)} className={`comphead ${expand===true ? "border-none":"border-b-[0.2px]"}`}>
   <div className='compheadsec1'>
   <h3 className='widgetheading'>Opacity</h3>
  <button ><span>{expand ? <MdOutlineExpandLess  size={24}/> :<MdOutlineExpandMore size={24} />}</span></button>
  </div>
</section>
{expand ? <section className={` innersection ${expand ? "border-b-[0.2px]":"border-none"}`}>
         <div className='flex flex-row items-center justify-between gap-x-1 px-3 py-2'>
         <div className='inline-flex flex-col items-center w-[70%] justify-center'>
         <input id="slider" value={store.selectedElement?.placement.opacity ? store.selectedElement?.placement.opacity*100 : 0 } onChange={handleChangeSlider}  className=' appearance-none rounded-s-lg  accent-black cursor-pointer' type="range" max="100" min="0"/>
         </div>
         <div className='inline-flex flex-col items-center gap-y-1 w-[20%] justify-between '>
         <label className='text-[10px]' htmlFor='opacity'>Opacity</label>
        <input className='text-[11px] border-[#444444] border-b w-full' ref={refPercent} disabled value={store.selectedElement?.placement.opacity ? store.selectedElement.placement.opacity*100:0}  id="opacity" type='text' />
         </div>
         <div className='inline-flex flex-col-reverse h-full items-start justify-end  w-[10%] '>
          <span className='text-[11px]'>%</span>
         </div>
         </div>
        </section>:null}
        </div>
        </>
  )
});


