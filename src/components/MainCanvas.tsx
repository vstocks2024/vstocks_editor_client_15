
import { StoreContext } from '@/store';
import { observer } from 'mobx-react';
import React, { useState ,useEffect } from 'react'
import { IoMdVolumeOff,IoMdVolumeHigh} from "react-icons/io";
import { AiOutlineClose } from 'react-icons/ai';
import { BsThreeDotsVertical } from "react-icons/bs";

export const MainCanvas = observer(() => {
  const store = React.useContext(StoreContext);
  const [resizeopen,setResizeOpen]=useState<boolean>(false);
  const [toggleRatio,setToggleRatio]=useState({wr:1.76258025,ar:0.579354839});
  const [windowDimenions,setWindowDimenions]=useState<object>({
    wW:window.innerWidth,
    wH:window.innerHeight
  });

  const handleWindowCanvasResize=()=>{
   setWindowDimenions({
    wW:window.innerWidth,
    wH:window.innerHeight
   })
   store.setCanvasWidthandHeight(store.canvas,(window.innerWidth/toggleRatio.wr),(window.innerWidth/toggleRatio.wr)*toggleRatio.ar);
  }

  useEffect(()=>{
    window.addEventListener("resize",handleWindowCanvasResize);
    return()=>{
      window.removeEventListener("resize",handleWindowCanvasResize);
      store.setCanvasWidthandHeight(store.canvas,(window.innerWidth/toggleRatio.wr),(window.innerWidth/toggleRatio.wr)*toggleRatio.ar);
    }
    
  },[windowDimenions])
  
  function handleFacebookEvent(){
    // 
    store.setCanvasWidthandHeight(store.canvas,775,449);
    setToggleRatio({wr:1.76258025,ar:0.579354839});
    
   setResizeOpen(false);
  }
  function handleInstagramPost(){
    // 
    store.setCanvasWidthandHeight(store.canvas,449,449);
    setToggleRatio({wr:3.035556,ar:1});
    setResizeOpen(false);
  }
  function handleInstagramStory(){
    // 
    store.setCanvasWidthandHeight(store.canvas,261.29,449);
    setToggleRatio({wr:5.22791,ar:1.71839718});
    setResizeOpen(false);
  }
  
  return (
    // <div className='flex border border-green-500 m-0.5 grow shrink basis-0 p-4 min-w-[785] h-[510px] max-w-[1035px]'>
    //   <div className='flex flex-col border  border-yellow-400 m-0.5 p-0.5 w-full min-h-[478px] min-w-[753px] max-h-[478px] max-w-[1003px] justify-center items-center '>
    <div className='flex w-full flex-col items-center justify-center grow shrink basis-0 m-[1px] p-[1px] h-[510px] min-[977px]:min-w-[33%] min-[977px]:max-w-[74%]'>
    <div className='flex flex-col w-full m-[1px] p-[1px] justify-center items-center '>
        <div className='inline-flex m-[1px] gap-x-2 flex-row items-center justify-center p-1  border border-green-500 gap-3'>
          <button onClick={()=>
            setResizeOpen(true)
      
          } className='bg-[#202020] text-[12px]  hover:bg-[#101010]  h-full px-4 py-2 font-bold rounded'>Resize</button>
          <button className=''><IoMdVolumeOff className={` rounded-md   brightness-50`} size={24}/></button>
          <button className=''><BsThreeDotsVertical color='#FFF' size={18}/></button>
        </div>
      
        {/* <div className='flex w-full  min-w-[750px] min-h-[422px] max-w-[1003px]  max-h-[438px] justify-center items-center  border-solid border-slate-400 border-[0.01px]'> */}
    {/* <canvas id="lower-canvas" className={`absolute touch-none  select-none min-w-[750px] min-h-[422px] h-[436px] w-[775px]  max-w-[775px]  max-h-[436px] border-[0.1px] border-green-300`}/> */}

      {/* New Code is written for above two div */}
    <div className='relative m-[1px] p-[1px]  flex w-full h-full justify-center items-center  border-solid border-slate-400 border '>
    <canvas id="lower-canvas" className={`absolute w-full shrink touch-none select-none border border-green-300`}/>
    {
          resizeopen===true ? (<> <div className="fixed flex flex-grow items-center justify-center p-2 md:p-2  top-0 left-0 w-full h-full bg-black bg-opacity-50">
             <div className={`fixed border border-red-500 m-0.5 p-0.5  z-50 flex flex-col rounded-md  bg-black w-[350px] h-[250px]`}>
             <div className="relative border cursor-pointer border-green-400 m-0.5 p-0.5  flex flex-row items-center justify-between">
              <h3 className='border border-yellow-400 m-0.5 p-0.5'>Template Variant</h3>
                        <AiOutlineClose
                          onClick={() => {
                          setResizeOpen(false);
                            
                          }}
                          size={30}
                          className="border border-black m-0.5 p-1"
                          color="#FFFFFF"
                        />
                        </div>
                        <div className='border flex flex-col h-full items-center justify-center border-green-400 m-0.5 p-0.5'>
                        <div className='border items-center justify-between h-full py-4 border-pink-400 inline-flex flex-col m-0.5 px-3'>
                                   <button onClick={()=>{handleFacebookEvent()}} className={`${store.canvas?.width===775 && store.canvas?.height===450 ? "bg-slate-200 text-black" :"bg-[#202020] text-white"} w-full px-2 py-2 text-[16px] border border-white text-center rounded-md`}>Facebook Event Cover (1920 x 1080)</button>
                                   <button onClick={()=>{handleInstagramPost()}} className={`${store.canvas?.width===261.29 && store.canvas?.height===450 ? "bg-slate-200 text-black" :"bg-[#202020] text-white"} w-full px-2 py-2 text-[16px] border border-white text-center rounded-md`}>Instagram Post (1080 x 1920)</button>
                                   <button onClick={()=>{handleInstagramStory()}} className={`${store.canvas?.width===450 && store.canvas?.height===450 ? "bg-slate-200 text-black" :"bg-[#202020] text-white"} w-full px-2 py-2 text-[16px] border border-white text-center rounded-md`}>Instagram Story (1080 x 1080)</button>
                          </div>
                        </div>

             </div>
            </div></>):null
        }
    </div>
    </div>
    </div>
  )
});


