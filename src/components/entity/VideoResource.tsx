"use client";
import React from "react";
import { StoreContext } from "@/store";
import { formatTimeToMinSec } from "@/utils";
import { observer } from "mobx-react";
import { MdAdd } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoIosPricetag } from "react-icons/io";

import axios from "axios";
type VideoResourceProps = {
  fileid:string
  filename:string;
  filesource: string;
  index: number;
};
export const VideoResource = observer(
  ({fileid,filename,filesource,index }: VideoResourceProps) => {
    const store = React.useContext(StoreContext);
    const ref = React.useRef<HTMLVideoElement>(null);
    const [formatedVideoLength, setFormatedVideoLength] =React.useState("00:00");
   
     // Code for Delete Video Buttton
    const handleVideoDeleteButton=async()=>
    {
     try{
      console.log("Hi from delete video button");
         await axios.delete(`${process.env.NEXT_PUBLIC_URL}/video/delete/${fileid}`).then((response)=>{
              console.log(response);  
         }).catch((reject)=>{
              console.log(reject)
         });
      }
      catch(error){
        console.log(error);
      }
       
    }
    /// End of delete video code button
   


    return (
      <div className="rounded-lg  bg-slate-800 m-2 flex flex-col items-center justify-start relative">
        <div className="bg-transparent text-white py-1 absolute  text-sm bottom-2 left-2">
          {formatedVideoLength}
          </div>
          <button className="hover:bg-[#00a0f5]  rounded z-10 text-white font-bold py-1 absolute text-lg top-2 left-2  bg-transparent">
            <IoIosPricetag size={20}/>
          </button>
          <button className="hover:bg-[#00a0f5] rounded z-10 text-white font-bold py-1 absolute text-lg top-2 right-2 bg-transparent"
          onClick={handleVideoDeleteButton}><MdDelete size={20}/></button>
        <button
          className="hover:bg-[#00a0f5] bg-transparent rounded z-10 text-white font-bold py-1 absolute text-lg bottom-2 right-2"
          onClick={() => {store.addVideo(fileid,filename,index) }}>
          <MdAdd size={20} />
        </button>
        <video
          onLoadedData={() => {
            const videoLength = ref.current?.duration ?? 0;
            setFormatedVideoLength(formatTimeToMinSec(videoLength));
            
          }}
          crossOrigin='anonymous'
          ref={ref}
          className='aspect-video transition-all'
          src={filesource}
          height={150}
          width={150}
          id={`video-${index}`}
          muted
          onMouseOver={()=>
          {
            ref.current?.play();
          }}
          onMouseOut={()=>
          {
            ref.current?.pause();
          }}
          ></video>
      </div>
    );
  }
);



