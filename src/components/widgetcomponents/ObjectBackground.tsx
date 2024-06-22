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
      <div className='topdivlayer'>
      <section onClick={()=>setExpand(!expand)} className={`comphead ${expand===true ? "border-none":"border-b-[0.2px]"}`}>
      <div className='compheadsec1'>
      <h3 className='widgetheading'>Background</h3>
          <button><span>{expand ? <MdOutlineExpandLess  size={24}/> :<MdOutlineExpandMore size={24} />}</span></button>
          </div>
      </section>
   {expand ? <section className={` innersection ${expand ? "border-b-[0.2px]":"border-none"}`}>
      <div className='flex flex-row  w-full py-2 px-3  items-center justify-between'>
        <div className='inline-flex flex-row items-center justify-between space-x-1 text-xs  m-[1px] p-[1px] '>
        <input type='checkbox' ref={reftextboxbgcolor}   className='checkboxclass'/>
          <input type='color' onChange={handleTextBoxBackgroundColor} id='textboxbgfill'  className='colorboxclass'/>
          <label  htmlFor='Background Color' className='text-[10px]'>Background Color</label>
        </div>
        <div><button className='inline-flex flex-col items-center justify-center  m-[1px] p-[1px]'><MdColorLens size={24}/></button></div>
      </div>
    </section> :null}
    </div>
    </>
    )
});

