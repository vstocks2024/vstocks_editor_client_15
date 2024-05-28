"use client";
import React from "react";
import { EditorElement } from "@/types";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { MdOutlineTextFields, MdMovie, MdDelete, MdLockOpen , MdLock } from "react-icons/md";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { MdPlayArrow } from "react-icons/md";

export type ElementProps = {
  element: EditorElement;
};

export const Element = observer((props: ElementProps) => {
  const store = React.useContext(StoreContext);
  const [hide,setHide]=React.useState<boolean>(true);
  const [lock,setLock]=React.useState<boolean>(false);
  const [editbtn,setEditBtn]=React.useState<boolean>(false);
 
  
  const { element } = props;
  console.log(element);
  // const Icon = element.type === "video" ? MdMovie : MdOutlineTextFields;
  const isSelected = store.selectedElement?.id === element.id;
  const bgColor = isSelected ? "rgba(0, 160, 245, 0.1)" : "";
  return (
    <div
      style={{
        backgroundColor: bgColor,
        
      }}
      className={`inline-flex border border-red-500 m-0.5 p-0.5 text-xs border-b-2 flex-row justify-start items-center ${bgColor} w-full`}
      key={element.id}
      onClick={() => {
        store.setSelectedElement(element);
      }}
    >
      {/* <Icon size="20" color="gray"></Icon> */}
      <div><MdPlayArrow className={`${isSelected===true ? "brightness-200":" brightness-50"}`} size={10}/></div>
      <div className="truncate text-xs flex-1 font-medium">
        <input defaultValue={element.name} disabled={isSelected && editbtn}/>
      </div>
      <div>
        {element.type === "video" ? (
          <video
            className="opacity-0 max-w-[20px] max-h-[20px]"
            src={element.properties.src}
            onLoad={() => {
              store.refreshElements();
            }}
            onLoadedData={() => {
              store.refreshElements();
            }}
            height={20}
            width={20}
            id={element.properties.elementId}
          ></video>
        ) : null}
        {element.type === "image" ? (
          <img
            className="opacity-0 max-w-[20px] max-h-[20px]"
            src={element.properties.src}
            onLoad={() => {
              store.refreshElements();
            }}
            onLoadedData={() => {
              store.refreshElements();
            }}
            height={20}
            width={20}
            id={element.properties.elementId}
          ></img>
        ) : null}
        {element.type === "audio" ? (
          <audio
            className="opacity-0 max-w-[20px] max-h-[20px]"
            src={element.properties.src}
            onLoad={() => {
              store.refreshElements();
            }}
            onLoadedData={() => {
              store.refreshElements();
            }}
            id={element.properties.elementId}
          ></audio>
        ) : null}
      </div>

      {/* Code of hide button */}
      <button
        className= "text-white  text-xs  rounded"
        onClick={(e) => {
          store.setObjectHidden(element);
          setHide(!hide);
          e.preventDefault();
          e.stopPropagation();
        }}
      >
      { hide ? <MdVisibility size={20}/>:<MdVisibilityOff size={20}/>}
      </button>
      {/* End of Code of hide button */}

      <button
        className= "text-white text-xs rounded"
        onClick={(e) => {
          //handleLockButton();
          element.fabricObject.hasControls=!element.fabricObject.hasControls
          element.fabricObject.lockMovementX=!element.fabricObject.lockMovementX;
          element.fabricObject.lockMovementY=!element.fabricObject.lockMovementY;
          element.fabricObject.lockRotation=!element.fabricObject.lockRotation;
          element.fabricObject.lockScalingX=!element.fabricObject.lockScalingX;
          element.fabricObject.lockScalingY=!element.fabricObject.lockScalingY;
          element.fabricObject.lockSkewingX=!element.fabricObject.lockSkewingX;
          element.fabricObject.lockUniScaling=!element.fabricObject.lockUniScaling;
          setLock(!lock);
          
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        {lock ?<MdLock size={20}/>:<MdLockOpen size={20}/>}
      </button>
      <button
        className= "text-white m-0.5 text-xs p-0.5 rounded"
        onClick={(e) => {
          
          setEditBtn(!editbtn);
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <MdModeEdit size={20}/>
      </button>
      <button
        className= " text-white m-0.5 text-xs  p-0.5 rounded"
        onClick={(e) => {
          store.removeEditorElement(element.id);
          store.refreshElements();
          e.preventDefault();
          e.stopPropagation();
        }}>
        <MdDelete  color="blue" size={20}/>
      </button>
    </div>
  );
});
