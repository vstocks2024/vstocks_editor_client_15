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
      <section onClick={()=>setExpand(!expand)} className={`comphead ${expand===true ? "border-none":"border-b-[0.2px]"}`}>
          <h3>Background</h3>
          <button><span>{expand ? <MdOutlineExpandLess  size={24}/> :<MdOutlineExpandMore size={24} />}</span></button>
      </section>
   {expand ? <section className={`cursor-pointer px-3 py-2 border-white bg-[#202020] ${expand ? "border-b-[0.2px]":"border-none"}`}>
      <form noValidate className='inline-flex flex-row  items-center justify-between'>
        <input type='checkbox' ref={reftextboxbgcolor}   className='bg-transparent accent-black size-4 border text-xs'/>
        <div className='flex text-xs  box-border flex-row my-2 h-[28px]'>
          <input type='color' onChange={handleTextBoxBackgroundColor} id='textboxbgfill'  className='bg-transparent border-none mx-2 mt-[2.5px] align-middle w-[24px] h-[24px] ' />
          <label  htmlFor='Background Color' className='pt-[6.4px] items-center align-middle'>Background Color</label>
          <span className='grow shrink basis-0 w-[90px]  self-stretch '></span>
          </div>
          <button><span className='align-middle'><MdColorLens size={24}/></span></button>
      </form>
    </section> :null}
    </>
    )
});

