"use client";
import React, { memo } from 'react'
import { observer } from 'mobx-react';
import { StoreContext } from "@/store";
import { MdColorLens, MdOutlineExpandLess,MdOutlineExpandMore } from 'react-icons/md';

export const Stroke =  observer(() => {
    const store=React.useContext(StoreContext);
    const [expand,setExpand]=React.useState<boolean>(true);
    const refstrokecheckbox=React.useRef<HTMLInputElement>(null);
    const handleTextBoxStrokeMiterLimit=(event:React.ChangeEvent<HTMLInputElement>)=>{
        try{
            if(!store.selectedElement) return;
            if(!event.target) return;
            store.setTextBoxStrokeMiterLimit(store.selectedElement,parseFloat(event.target.value));

        }
        catch(err){
            console.log(err);
        }
    }
    const handleTextBoxStrokeLineJoin=(event:React.ChangeEvent<HTMLSelectElement>)=>{
        try{
            if(!store.selectedElement) return;
            if(!event.target) return;
            if(!event.currentTarget) return;
            store.setTextBoxStrokeLineJoin(store.selectedElement,event.currentTarget.value);
        }
        catch(err){
            console.log(err);
        }
    }
    const handleTextBoxStrokeLineCap=(event:React.ChangeEvent<HTMLSelectElement>)=>{
        try{
            if(!store.selectedElement) return;
            if(!event.target) return;
            if(!event.currentTarget) return;
            store.setTextBoxStrokeLineCap(store.selectedElement,event.currentTarget.value);
        }
        catch(err){
            console.log(err);
        }
    }
    const handleTextBoxUniformStroke=(event:React.ChangeEvent<HTMLInputElement>)=>{
        try{
            if(!store.selectedElement) return;
            if(!event.target) return;
            store.setTextBoxUniformStrokeWidth(store.selectedElement,event.target.checked);
        }
        catch(err){
         console.log(err)
        }
    }
    const handleTextBoxStrokeWidth=(event:React.ChangeEvent<HTMLInputElement>)=>{
        try{
            if(!store.selectedElement) return;
            if(!event.target) return;
            store.setTextBoxStrokeWidth(store.selectedElement,parseFloat(event.target.value));
        }
        catch(err){
            console.log(err)
        }

    }
    const handleTextBoxStrokeColor=(event:React.ChangeEvent<HTMLInputElement>)=>{
        try{
        if(!store.selectedElement) return;
        if(!refstrokecheckbox.current) return;
        if(!refstrokecheckbox.current.checked) return;
        if(!event.target) return;
        store.setTextBoxStrokeColor(store.selectedElement,event.target.value);
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
    <h3 className='widgetheading'>Stroke</h3>
        <button ><span>{expand ? <MdOutlineExpandLess  size={24}/> :<MdOutlineExpandMore size={24} />}</span></button>
        </div>
    </section>
    {expand   ? <section className={` innersection ${expand ? "border-b-[0.2px]":"border-none"}`}>
        <div className='flex flex-col items-center gap-y-3 justify-between px-3 py-2'>
        <div className='flex flex-row items-center w-full gap-x-1  justify-between'>
            <div className='inline-flex  w-3/5 flex-row items-center gap-x-1 justify-start'>
            <input type='checkbox' ref={refstrokecheckbox}   className= 'checkboxclass'/>
            <input type='color' value={store.selectedElement?.placement.stroke ? store.selectedElement.placement.stroke: undefined} onChange={handleTextBoxStrokeColor} className='colorboxclass'/>
            <h4 className=' flex items-center cursor-default text-[11px] '>Stroke Color</h4>
            </div>
            <div className='inline-flex  w-1/5  flex-col items-center gap-y-1 justify-between '>
            <label className='flex items-center text-center text-[11px] text-[#999999]' htmlFor='width'>Width</label>
            <input onChange={handleTextBoxStrokeWidth} value={store.selectedElement?.placement.strokeWidth ? store.selectedElement.placement.strokeWidth : undefined} className='focus:outline-none w-full text-sm bg-transparent border-b'/>
            </div>
            <div className=' inline-flex  w-1/5 flex-col items-center justify-center'>
                 <button onClick={()=>{}}><MdColorLens size={24}/></button>
            </div>
        </div>
        <div className='flex flex-row items-center w-full  justify-between '>
            <div className='inline-flex flex-row items-center justify-between space-x-1'>
            <input type='checkbox'  checked={store.selectedElement?.placement.strokeUniform ? store.selectedElement.placement.strokeUniform :false} onChange={handleTextBoxUniformStroke} className='checkboxclass'/>
                <label htmlFor='uniform stroke' className='text-[11px]'>Uniform Stroke</label>
            </div>
        </div>
        <div className='flex flex-row gap-x-1 items-center justify-between w-full '>
         <div className='inline-flex w-[30%] flex-col items-center justify-between gap-y-1 '>
         <label htmlFor='Line Cap' className='text-[11px] font-semibold text-[#999999]'>Line Cap</label>
                    <select onChange={handleTextBoxStrokeLineCap}  value={store.selectedElement?.placement.strokeLineCap ? store.selectedElement.placement.strokeLineCap : "butt"} className='text-[11px] w-full font-semibold appearance-none border-b focus:outline-none border-[#444444] bg-transparent bg-black text-white'>
                        <option value={"butt"}>Butt</option>
                        <option value={"round"}>Round</option>
                        <option value={"square"}>Square</option>
                    </select>
         </div>
         <div className='inline-flex w-[30%] flex-col items-center justify-between gap-y-1 '>
         <label htmlFor='Line Join' className='text-[11px] font-semibold text-[#999999]'>Line Join</label>
                    <select onChange={handleTextBoxStrokeLineJoin} value={store.selectedElement?.placement.strokeLineJoin ? store.selectedElement.placement.strokeLineJoin : "milter"} className='text-[11px] w-full border-b font-semibold appearance-none focus:outline-none border-[#444444] bg-black text-white bg-transparent'>
                        <option value={"bevil"}>Bevill</option>
                        <option value={"round"}>Round</option>
                        <option value={"milter"}>Milter</option>
                    </select>
         </div>
         <div className='inline-flex w-[30%] flex-col items-center justify-between gap-y-1 '>
         <label htmlFor='Milter' className='text-[11px] font-semibold text-[#999999]'>Milter</label>
                    <input value={store.selectedElement?.placement.strokeMiterLimit ? store.selectedElement.placement.strokeMiterLimit : undefined} onChange={handleTextBoxStrokeMiterLimit} disabled={store.selectedElement?.placement.strokeLineJoin ? store.selectedElement.placement.strokeLineJoin==="milter" ? false : true : true } className='focus:outline-none w-full border-[#444444] text-[11px] bg-transparent border-b'/>
         </div>

        </div>
        <div className='flex flex-row gap-x-2 items-center justify-start w-full'>
            <div className='inline-flex gap-y-1 w-1/5 flex-col items-center justify-between'>
            <label className='text-[11px] text-[#999999]' htmlFor='Dash'>Dash</label>
                <input autoComplete='off' className='focus:outline-none w-full text-[11px] bg-transparent border-[#444444] border-b-[1px] '/>
            </div>
            <div className='inline-flex flex-col w-1/5 gap-y-1 items-center justify-between'>
            <label className='text-[11px] text-[#999999]' htmlFor='Gap'>Gap</label>
            <input autoComplete='off' className='focus:outline-none w-full text-[11px] bg-transparent border-[#444444] border-b-[1px] '/>
            </div>
            <div className='inline-flex flex-col w-1/5 gap-y-1 items-center justify-between'>
            <label className='text-[11px] text-[#999999]' htmlFor='Dash'>Dash</label>
                <input autoComplete='off' className=' w-full focus:outline-none text-[11px] bg-transparent border-[#444444] border-b-[1px] '/>
            </div>
            <div className='inline-flex flex-col w-1/5 gap-y-1 items-center justify-between '>
            <label className='text-[11px] text-[#999999]' htmlFor='Gap'>Gap</label>
                <input autoComplete='off' className=' w-full focus:outline-none text-[11px] bg-transparent border-[#444444] border-b-[1px] '/>
            </div>
        </div>
        </div>
      
    </section>:null}
    </div>
    </>
  )
});


