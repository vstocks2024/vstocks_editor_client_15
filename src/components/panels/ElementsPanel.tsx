"use client";
import React from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { Element } from "@/components/entity/Element";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
//import Widget from '@/components/entity/Widget';
import { Layers } from "@/components/widgetcomponents/Layers";
import { Dimensions } from "@/components/widgetcomponents/Dimensions";
import {Background} from "@/components/widgetcomponents/Background";
import { Alignment } from "@/components/widgetcomponents/Alignment";
import { Arrange } from "@/components/widgetcomponents/Arrange";
import { Flip } from "@/components/widgetcomponents/Flip";
import { Transform } from "@/components/widgetcomponents/Transform";
import { TextAlignment } from "@/components/widgetcomponents/TextAlignment";
import { Font } from "@/components/widgetcomponents/Font";
import { Header } from "@/components/widgetcomponents/Header";
import { Opacity } from "@/components/widgetcomponents/Opacity";
import { Stroke } from "@/components/widgetcomponents/Stroke";
import { TextShadow } from "@/components/widgetcomponents/TextShadow";
import { ObjectBackground } from "../widgetcomponents/ObjectBackground";


type ElementsPanelProps={
  elementtype:string | undefined;
}

export const ElementsPanel = observer(({elementtype}:ElementsPanelProps) => {
  const store = React.useContext(StoreContext);
  
  return (
    // min-w-[269.102px]
  <div className="max-w-[19.8%] min-w-[269px] border border-pink-500 hidden min-[977px]:flex  h-full  min-[977px]:flex-col  min-[977px]:items-center 
  min-[977px]:justify-start">
    {elementtype=== undefined ? <><Header header={"Canvas"} /><section className=" sidesection">
         <Layers/>
         <Dimensions/>
         <Background/>
        </section></> :null}
    {elementtype==="video" ? <><Header header={"Animation"} /><section className="sidesection">
          <Layers/>
          <Alignment/>
          <Arrange/>
          <Flip/>
          <Transform/>
          <Opacity/>    
      </section></> :null}
      {elementtype==="image" ? <><Header header={"Image"} /> <section className="sidesection">
          <Layers/>
          <Alignment/>
          <Arrange/>
          <Flip/>
          <Transform/>
          <Stroke/>
          <TextShadow/>
          <Opacity/>    
      </section></> :null}
      {elementtype==="text" ? <><Header header={"Text"} />   <section className="sidesection">
          <Layers/>
          <Alignment/>
          <Arrange/>
          <Flip/>
          <Transform/>
          <TextAlignment/>
          <Font/>
          <ObjectBackground/>
          <Stroke/>
          <TextShadow/>
          <Opacity/> 
      </section></> :null}
    </div>
  )});
