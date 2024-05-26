
import { StoreContext } from '@/store';
import { observer } from 'mobx-react';
import React from 'react'
import { IoMdVolumeOff,IoMdVolumeHigh} from "react-icons/io";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 320,
  height:256,
  bgcolor: '#FFFFFF',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const MainCanvas = observer(() => {
  const store = React.useContext(StoreContext);
  

  return (
    <div className='flex border border-green-500 m-0.5 grow shrink basis-0 p-4 min-w-[785] h-[510px] max-w-[1035px]'>
      <div className='flex flex-col w-full min-h-[478px] min-w-[753px] max-h-[478px] max-w-[1003px] justify-center items-center '>
        <div className='inline-flex flex-row items-center justify-center border border-green-500 p-1 w-[210px] h-[40px] max-w-[210px] max-h-[40px] gap-3'>
          <button className='bg-[#202020] text-[12px] border border-pink-500 m-0.5  hover: hover:bg-[#101010]  h-full px-4  rounded-md'>Resize</button>
          <button className='border border-white'><IoMdVolumeOff className={` rounded-md   brightness-50`} size={24}/></button>
        </div>
        <div className='flex w-full  min-w-[750px] min-h-[422px] max-w-[1003px]  max-h-[438px] justify-center items-center  border-solid border-slate-400 border-[0.01px]'>
    <canvas id="lower-canvas" className={`absolute touch-none  select-none min-w-[750px] min-h-[422px] h-[436px] w-[775px]  max-w-[775px]  max-h-[436px] border-[0.1px] border-green-300`}/> 
    </div>
    </div>
    </div>
  )
});


