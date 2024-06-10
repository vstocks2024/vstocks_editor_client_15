"use client";
import axios from "axios";
import { observer } from "mobx-react";
import { StoreContext } from "@/store";
import React, { useEffect, useState } from "react";
import {
  MdColorLens,
  MdOutlineExpandLess,
  MdOutlineExpandMore,
} from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import {
  MdFormatUnderlined,
  MdFormatOverline,
  MdFormatStrikethrough,
} from "react-icons/md";
import { family_variants_arr } from "@/types";
import {
  isEditorAudioElement,
  isEditorImageElement,
  isEditorVideoElement,
} from "@/store/Store";




export const Font = observer(() => {
  const store = React.useContext(StoreContext);
  const [expand, setExpand] = React.useState<boolean>(true);
  const [results, setResults] = React.useState([]);
  const [family, setFamily] = React.useState<string>("");
  const [variants, setVariants] = React.useState([]);
  
  const reftextcolorfill = React.useRef<HTMLInputElement>(null);
  
  

  const fontsizearr: Number[] = [];
  for (let i = 8; i < 101; i++) {
    fontsizearr.push(i);
  }

  var family_ind = 0;

  // This function is to set the Font Name  of Text Box
  const handleFontFamily = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (!event) return;
    if (!event.target) return;

    try {
      family_ind = results.findIndex(
        (val) => val["family"] === event.target.value
      );
      //console.log(results[family_ind]["variants"]);
      console.log(results[family_ind]["files"]);
      setVariants(results[family_ind]["variants"]);
      //console.log(variants);
      
      
    } catch (err) {
      console.log(err);
    }
  };
  // End of this function

  const handleFontSize = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (!event) return;
    if (!event.target) return;
    if (!store.selectedElement) return;
    try {
      console.log(typeof parseInt(event.target.value));
      store.setTextBoxFontSize(
        store.selectedElement,
        parseInt(event.target.value)
      );
    } catch (err) {
      console.log(err);
    }
  };


  // This function is to set the Font Weight
  const handleFontWeight = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (!event) return;
    if (!event.target) return;
    if (!store.selectedElement) return;
    try {
      console.log(event.target.value);
      if(event.target.value.split("i").length>1){
        const arr=event.target.value.split("i");
        console.log(arr[0]);
       store.setTextBoxFontWeight(store.selectedElement,arr[0]);
      }
      else if(event.target.value.split("i").length<=1){
          if(event.target.value==="regular"){       
            store.setTextBoxFontWeight(store.selectedElement,400);
          }
          else{
          store.setTextBoxFontWeight(store.selectedElement,Number(event.target.value));
          }
      }
      
    } catch (err) {
      console.log(err);
    }
  };

  // End of this function

 // This function handle set Font Family

 const handleSetFontFamily=async(event: React.ChangeEvent<HTMLInputElement>)=>{
  try{
   console.log()
  }
  catch(err){
    console.log(new Error());
  }

 }

 



 //End of this function


  const handleTextBoxFill = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!store.selectedElement) return;
      if (!reftextcolorfill.current) return;
      if (!reftextcolorfill.current.checked) return;
      if (!event.target) return;
      store.setTextBoxFill(store.selectedElement, event.target.value);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLineHeight = (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!store.selectedElement) return;
      store.setTextBoxLineHeight(
        store.selectedElement,
        parseFloat(event.target.value)
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleLineThrough = () => {
    try {
      if (!store.selectedElement) return;
      store.setTextBoxLineThrough(store.selectedElement);
    } catch (err) {
      console.log(err);
    }
  };
  const handleOverLine = () => {
    try {
      if (!store.selectedElement) return;
      store.setTextBoxOverLine(store.selectedElement);
    } catch (err) {
      console.log(err);
    }
  };
  const handleUnderLine = () => {
    try {
      if (!store.selectedElement) return;
      store.setTextBoxUnderLine(store.selectedElement);
    } catch (err) {
      console.log(err);
    }
  };
  const getFonts = async (url: any) => {
    try {
      const query = await fetch(url);
      const response = await query.json();
      if (response["items"].length > 0) {
        setResults(response["items"]);
      }
    } catch (err) {
      console.log(err);
    }
  };


  // This is font family function
  const getfontFamily =async()=>{
    try{
      const query=await fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDUxAEdaAzpfth29oW8K4TcUBdV2Uacv58&family=${family}`);
      const response = await query.json();
      console.log(response);
      return  response;

    }
    catch(err){
      console.log(err);
    }
  }

// End of this code

  React.useEffect(() => {
    getFonts(process.env.NEXT_PUBLIC_GET_FONT_URL as string);
    console.log(results);
  }, []);

 // Calling
  React.useEffect(()=>{

  },[]);
  return (
    <>
      <div className="border border-pink-500 p-0.5 m-0.5">
        <section
          onClick={() => setExpand(!expand)}
          className={`comphead ${
            expand === true ? "border-none" : "border-b-[0.2px]"
          }`}
        >
          <div className="compheadsec1">
            <h3 className="border border-green-500 m-0.5 p-0.5">Font</h3>
            <button>
              <span>
                {expand ? (
                  <MdOutlineExpandLess size={24} />
                ) : (
                  <MdOutlineExpandMore size={24} />
                )}
              </span>
            </button>
          </div>
        </section>
        {expand ? (
          <section
            className={`cursor-pointer w-full border-white bg-[#202020] ${
              expand ? "border" : "border-none"
            }`}
          >
            <div className="flex flex-col items-center gap-y-3 px-3 py-2 justify-between border border-green-500">
              <div className="flex flex-row items-center justify-between w-full  border border-red-500 m-[1px] p-[1px]">
                <div className="inline-flex w-[75%] flex-row items-center justify-between border border-blue-500 m-[1px] p-[1px]">
                  <div className="inline-flex flex-col gap-y-1 w-4/5 items-start justify-between border border-orange-500 m-[1px] p-[1px]">
                    <label
                      htmlFor="Family"
                      className="m-[1px] p-[1px] font-semibold text-start text-[11px] text-[#999999]"
                    >
                      Family
                    </label>
                    {results.length > 0 ? (
                      <select
                        
                        onChange={handleFontFamily}
                        className="focus:outline-none text-white w-full bg-black border-b-[1px] border-[#444444] bg-transparent text-[11px] cursor-pointer"
                      >
                        {results.map((val: any, ind: any, oa: any) => {
                          return (
                            <option
                              value={`${val["family"]}`}
                              className="bg-white text-black text-[16px]"
                              key={`${val[`family`]}_${ind}`}
                            >
                              {val[`family`]}
                            </option>
                          );
                        })}{" "}
                      </select>
                    ) : (
                      <select></select>
                    )}
                  </div>
                  <div>
                    <HiDotsVertical size={24} />
                  </div>
                </div>
                <div className="inline-flex flex-col w-1/4 gap-y-1 items-center justify-between border border-blue-500 m-[1px] p-[1px]">
                  <label className="font-semibold text-[11px] text-[#999999]">
                    Size
                  </label>
                  <select
                    onChange={handleFontSize}
                    defaultValue={
                      store.selectedElement &&
                      !isEditorAudioElement(store.selectedElement) &&
                      !isEditorImageElement(store.selectedElement) &&
                      !isEditorVideoElement(store.selectedElement)
                        ? store.selectedElement.properties.fontSize
                        : 8
                    }
                    className=" w-full bg-black border-b-[1px] border-[#444444] bg-transparent text-[12px] text-white focus:outline-none"
                  >
                    {fontsizearr.map((val: Number, ind, oa) => {
                      return (
                        <>
                          <option
                            className="bg-white text-black text-[16px]"
                            key={`${val}_${ind}`}
                            value={`${val}`}
                          >{`${val}`}</option>
                        </>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between w-full  border border-red-500 m-[1px] p-[1px]">
                <div className=" w-1/2 inline-flex flex-col items-start justify-between border border-blue-500 m-[1px] p-[1px]">
                  <label
                    htmlFor="Variant"
                    className=" font-semibold text-[11px]  text-[#999999]"
                  >
                    Variant
                  </label>
                  <select
                    defaultValue={"Select Variant"}
                    onChange={handleFontWeight}
                    className="focus:outline-none text-white w-full bg-black border-b-[1px] border-[#444444] bg-transparent text-[11px] select-none cursor-pointer"
                  >
                    <option hidden disabled>
                      Select Variant
                    </option>
                    {results.length > 0 && variants.length > 0
                      ? variants.map((val, ind, oa) => {
                          return (
                            <>
                              {`${val}`.split("i").length > 1 ? (
                                <option
                                  className="bg-white text-[16px] text-black italic"
                                  value={`${val}`}
                                >
                                  {family_variants_arr[`${val}`]}
                                </option>
                              ) : (
                                <option
                                  className="bg-white text-black text-[16px] not-italic"
                                  value={`${val}`}
                                >
                                  {family_variants_arr[`${val}`]}
                                </option>
                              )}
                            </>
                          );
                        })
                      : null}
                  </select>
                </div>
                <div className=" w-1/2 inline-flex flex-row items-center border justify-between space-x-2 border-blue-500 m-[1px] p-[1px]">
                  <button onClick={handleUnderLine} className="">
                    <span>
                      <MdFormatUnderlined
                        className={` cursor-pointer ${
                          store.selectedElement?.placement.underline === true
                            ? "brightness-200"
                            : "brightness-50"
                        } `}
                        size={24}
                      />
                    </span>
                  </button>
                  <button onClick={handleOverLine} className="">
                    <span>
                      <MdFormatOverline
                        className={` cursor-pointer ${
                          store.selectedElement?.placement.overline === true
                            ? "brightness-200"
                            : "brightness-50"
                        } `}
                        size={24}
                      />
                    </span>
                  </button>
                  <button onClick={handleLineThrough} className="">
                    <span>
                      <MdFormatStrikethrough
                        className={` cursor-pointer ${
                          store.selectedElement?.placement.linethrough === true
                            ? "brightness-200"
                            : " brightness-50"
                        } `}
                        size={24}
                      />
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between   border border-red-500 m-[1px] p-[1px]">
                <div className="inline-flex flex-row items-center justify-start   border-blue-500 border m-[1px] p-[1px]">
                  <div className="inline-flex flex-col w-1/4 items-start justify-between space-y-1 border border-green-500 m-[1px] p-[1px]">
                    <label
                      htmlFor="L. Height"
                      className=" border border-yellow-400 font-semibold text-[11px]  text-[#999999]"
                    >
                      L.Height
                    </label>
                    <input
                      className="border w-full border-yellow-400 bg-transparent text-[11px] focus:outline-none  cursor-pointer"
                      onChange={handleLineHeight}
                      value={
                        store.selectedElement?.placement.lineHeight
                          ? store.selectedElement?.placement.lineHeight
                          : ""
                      }
                    />
                  </div>
                  <div className="inline-flex flex-col  items-start w-1/4 justify-between space-y-1 border border-green-500 m-[1px] p-[1px]">
                    <label
                      htmlFor="Spacing"
                      className="font-semibold text-[11px] border border-yellow-400  text-[#999999]"
                    >
                      Spacing
                    </label>
                    <input
                      className=" border border-yellow-400 w-full  bg-transparent text-[11px] focus:outline-none  cursor-pointer"
                      value={0.5}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-between w-full   border border-red-500 m-[1px] p-[1px]">
                <div className="inline-flex flex-row border-blue-500 border m-[1px] p-[1px]  items-center justify-between space-x-1">
                  <input
                    type="checkbox"
                    ref={reftextcolorfill}
                    className="bg-transparent border"
                  />
                  <input
                    type="color"
                    onChange={handleTextBoxFill}
                    className="bg-transparent h-6 w-5 border-none "
                  />
                  <h3 className="text-[12px]">Text Color</h3>
                </div>
                <div className="flex flex-col border border-blue-500 p-[1px] m-[1px]  items-center justify-center">
                  <MdColorLens size={24} />
                </div>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </>
  );
});
