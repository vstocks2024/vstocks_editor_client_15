"use client";
import React from 'react'
import { observer } from 'mobx-react';
import { Element } from '@/components/entity/Element';
import { StoreContext } from "@/store";
import { MdOutlineExpandLess,MdOutlineExpandMore,MdColorLens } from 'react-icons/md';

export const Background = observer(() => {
    const [expand,setExpand]=React.useState<boolean>(true);
    const [disable,setDisable]=React.useState<boolean>(false);
    const store = React.useContext(StoreContext);
    const refBgColor=React.useRef<HTMLInputElement>(null);
    const handleCanvasBackgroundColor=(event: React.ChangeEvent<HTMLInputElement>)=>
    {
      if(!store.canvas) return ;
      if(!refBgColor.current) return ;
      if(!refBgColor.current.checked) return;
      store.setBackgroundColor(event.target.value);
    }
    return (
      <>
      <div className='topdivlayer'>
      <section onClick={()=>setExpand(!expand)} className={`comphead ${expand===true ? "border-none":"border-b-[0.2px]"}`}>
        <div className='compheadsec1'>
        <h3 className='widgetheading'>Background</h3>
          <button><span>{expand ? <MdOutlineExpandLess  size={24}/> :<MdOutlineExpandMore size={24} />}</span></button>
          </div>
      </section>
   {expand ? <section className={` innersection ${expand ? "border-b-[0.2px]":"border-none"}`}>
      <div className='flex flex-row items-center justify-between px-3 py-2'>
        <div className='inline-flex flex-row items-center justify-start space-x-0.5 m-0.5 p-0.5'>
        <input  type='checkbox' ref={refBgColor}  className='checkboxclass'/>
          <input type='color' disabled={disable} onChange={handleCanvasBackgroundColor} className='colorboxclass'/>
          <label  htmlFor='Background Color' className='text-[10px]'>Background Color</label>
          </div>
          <div><button className='m-0.5 p-0.5'><MdColorLens size={24}/></button></div>
      </div>
    </section> :null}
    </div>
    </>
    )
});

