"use client";
import React from 'react'
import { observer } from 'mobx-react';
import { StoreContext } from "@/store";
import { MdLock, MdLockOpen, MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md';

export const Transform = observer(() => {
  const store = React.useContext(StoreContext);
    const [expand,setExpand]=React.useState<boolean>(true);
    const [lock,setLock]=React.useState<boolean>(false);
    //const refWidth=React.useRef<HTMLInputElement>(null);
    const handleChangeWidth=(event:React.ChangeEvent<HTMLInputElement>)=>{
      try{
        if(!store.selectedElement) return;
        const newwidth:number=parseFloat(event.target.value);
        store.setObjectWidth(store.selectedElement,newwidth);

      }
      catch(err)
      {
        console.log(err);
      }
    }
    const handleChangeHeight=(event:React.ChangeEvent<HTMLInputElement>)=>{
      try{
        if(!store.selectedElement) return;
        const newHeight:number=parseFloat(event.target.value);
        store.setObjectHeight(store.selectedElement,newHeight);
      }
      catch(err)
      {
        console.log(err);
      }

    }
    const handleChangeLeft=(event:React.ChangeEvent<HTMLInputElement>)=>{
      try{
        if(!store.selectedElement) return;
        const newLeft:number=parseFloat(event.target.value);
        store.setObjectLeftPosition(store.selectedElement,newLeft)
      }
      catch(err)
      {
        console.log(err);
      }
    }
    const handleChangeTop=(event:React.ChangeEvent<HTMLInputElement>)=>{
      try{
        if(!store.selectedElement) return;
        const newTop:number=parseFloat(event.target.value);
        store.setObjectTopPosition(store.selectedElement,newTop)
      }
      catch(err)
      {
        console.log(err);
      }

    }

    const handleChangeRotation=(event:React.ChangeEvent<HTMLInputElement>)=>{
      try{
        if(!store.selectedElement) return;
        const newAngle:number=parseFloat(event.target.value);
        store.setObjectRotation(store.selectedElement,newAngle);
      }
      catch(err)
      {
        console.log(err);
      }

    }
    return (
      <>
      <div className='topdivlayer'>
       <section onClick={()=>setExpand(!expand)} className={`comphead ${expand===true ? "border-none":"border-b-[0.2px]"}`}>
        <div className='compheadsec1'>
        <h3 className='widgetheading'>Transform</h3>
          <button ><span>{expand ? <MdOutlineExpandLess  size={24}/> :<MdOutlineExpandMore size={24} />}</span></button>
          </div>
      </section>
      {expand   ? <section className={` innersection ${expand ? "border-b-[0.2px]":"border-none"}`}>
        <div className='flex flex-row py-2 px-3 items-start'>
          <div  className='flex flex-col m-[1px] p-[1px] w-[28%] gap-y-1'>
            <div className='flex flex-col items-start justify-between m-[1px] p-[1px] gap-y-1 w-full  font-semibold text-center text-[11px]'>
              <label htmlFor='Width' className=' text-[11px] text-gray-500 '>Width</label>
              <input disabled={lock} onChange={handleChangeWidth} value={store.selectedElement?.placement.width ? store.selectedElement.placement.width.toFixed(2) : 0} id='width' className="w-full  text-white text-start bg-transparent focus:outline-none text-[11px]" />
            </div>
            <div className='flex flex-col items-start justify-between  m-[1px] p-[1px] gap-y-1 w-full font-semibold text-center text-[11px]'>
              <label htmlFor='height' className='text-[11px] text-gray-500'>Height</label>
              <input disabled={lock} onChange={handleChangeHeight} value={store.selectedElement?.placement.height ? store.selectedElement.placement.height.toFixed(2) :0} className=" w8text-start  text-white bg-transparent focus:outline-none text-[11px]" />
            </div>
            </div>
            <div className='flex flex-col  m-[1px] p-[1px] h-full items-center justify-center w-[16%]'>
            <div className='flex flex-col justify-center items-center  m-[1px] p-[1px]'>
              <div className='h-8  border-t border-r border-gray-500 w-1/4'/>
              <button onClick={()=>{setLock(!lock)}}  className=' text-white'>{ lock ? <MdLock size={20}/> :<MdLockOpen size={20}/>}</button>
              <div className='h-8   border-b border-r border-gray-500 w-1/4'/>
            </div>
            </div>
        <div  className='flex flex-col m-[1px] p-[1px]  w-[28%] gap-y-1 items-center justify-between '>
            <div className='inline-flex flex-col m-[1px] p-[1px] gap-y-1  justify-between font-semibold items-center text-[11px]'>
              <label htmlFor='Left' className='w-full text-[11px] text-gray-500 '>Left</label>
              <input disabled={lock} onChange={handleChangeLeft} value={store.selectedElement?.placement.x ? store.selectedElement.placement.x.toFixed(2) :0}  className=" w-full text-white bg-transparent focus:outline-none  text-[11px]"  />
            </div>
            <div className='inline-flex flex-col m-[1px] p-[1px] gap-y-1 justify-between font-semibold items-center text-[11px]'>
              <label htmlFor='Top' className='w-full text-[11px] text-gray-500'>Top</label>
              <input disabled={lock}  onChange={handleChangeTop} value={store.selectedElement?.placement.y ? store.selectedElement.placement.y.toFixed(2) :0}   className="w-full text-white  bg-transparent focus:outline-none text-[11px]"  />
            </div>
            </div>
        <div  className='inline-flex flex-col w-[28%]  m-[1px] p-[1px] items-center justify-center'>
            <div className=' items-center justify-between gap-y-1 m-[1px] p-[1px]   inline-flex flex-col  font-semibold '>
              <label htmlFor='Rotation' className='w-full text-[11px] text-gray-500'>Rotation</label>
              <input value={store.selectedElement?.placement.rotation ? store.selectedElement.placement.rotation : 0} disabled={lock} onChange={handleChangeRotation} className=" w-full text-white bg-transparent focus:outline-none text-[11px]" />
            </div>
            
          </div>
        </div>
    </section>:null}
    </div>
      </>
  )
})


