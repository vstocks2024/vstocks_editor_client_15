"use client";
import React from 'react'
import { observer } from 'mobx-react';
import { StoreContext } from "@/store";
import { MdOutlineExpandLess,MdOutlineExpandMore,MdColorLens } from 'react-icons/md';

export const ObjectBackground = observer(() => {
    const [expand,setExpand]=React.useState<boolean>(true);
    const store = React.useContext(StoreContext);
    const reftextboxbgcolor=React.useRef<HTMLInputElement>(null);
    

    const handleTextBoxBackgroundColor=(event:React.ChangeEvent<HTMLInputElement>)=>{
        try{
            
            if(!store.selectedElement) return;
            if(!event.target) return;
            if(!reftextboxbgcolor.current) return;
            if(!reftextboxbgcolor.current.checked) return;
            store.setTextBoxBackgroundColor(store.selectedElement,event.target.value);
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
      <h3 className='border border-green-500 m-0.5 p-0.5'>Background</h3>
          <button><span>{expand ? <MdOutlineExpandLess  size={24}/> :<MdOutlineExpandMore size={24} />}</span></button>
          </div>
      </section>
   {expand ? <section className={`cursor-pointer w-full m-0.5 p-0.5 border-white bg-[#202020] ${expand ? "border":"border-none"}`}>
      <div className='inline-flex flex-row border  border-green-500 w-full m-0.5 p-0.5  items-center justify-between'>
        <div className='inline-flex flex-row items-center justify-between space-x-2 text-xs border border-yellow-400 m-0.5 p-0.5 '>
        <input type='checkbox' size={30} ref={reftextboxbgcolor}   className='bg-transparent accent-black border text-xs'/>
          <input type='color' size={30} onChange={handleTextBoxBackgroundColor} id='textboxbgfill'  className='bg-transparent w-[24px] h-[24px] border-none'/>
          <label  htmlFor='Background Color' className='text-[10px]'>Background Color</label>
        </div>
        <button className='inline-flex items-center justify-center flex-row'><MdColorLens size={24}/></button>
      </div>
    </section> :null}
    </div>
    </>
    )
});

