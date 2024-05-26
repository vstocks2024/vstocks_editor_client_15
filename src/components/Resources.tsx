
import React from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { ExportVideoPanel } from "./panels/ExportVideoPanel";
import { AnimationsPanel } from "./panels/AnimationsPanel";
import { AudioResourcesPanel } from "./panels/AudioResourcesPanel";
import { FillPanel } from "./panels/FillPanel";
import { ImageResourcesPanel } from "./panels/ImageResourcesPanel";
import { TextResourcesPanel } from "./panels/TextResourcesPanel";
import { VideoResourcesPanel } from "./panels/VideoResourcesPanel";
import { EffectsPanel } from "./panels/EffectsPanel";
import { AssetsPanel } from "./panels/AssetsPanel";
import {ShapesPanel} from "./panels/ShapesPanel";
import {StickersPanel} from "./panels/StickersPanel";
import { IoMdArrowBack } from "react-icons/io";


export const Resources = observer(() => {
  const store = React.useContext(StoreContext);
  const selectedMenuOption = store.selectedMenuOption;
  return (
    <div className=" flex flex-col justify-start border border-green-500 w-[17%] m-0.5 p-0.5 h-[510px]  bg-[#303030]" >
      <div className=" inline-flex items-center flex-row border border-pink-500 m-0.5 p-0.5 h-10 bg-[#202020]  justify-between">
        <h3 className="border border-white m-1 p-1 text-[12px]">{store.selectedMenuOption}</h3>
        <button onClick={()=>{store.selectedMenuOption=null}} className="border border-green-500 m-0.5 p-0.5">
          <IoMdArrowBack size={24}/>
        </button>
        </div>
        
      {selectedMenuOption === "Video" ? <VideoResourcesPanel /> : null}
      {selectedMenuOption === "Audio" ? <AudioResourcesPanel /> : null}
      {selectedMenuOption === "Images" ? <ImageResourcesPanel /> : null}
      {selectedMenuOption === "Text" ? <TextResourcesPanel /> : null}
      {selectedMenuOption === "Animation" ? <AnimationsPanel /> : null}
      {selectedMenuOption === "Effect" ? <EffectsPanel /> : null}
      {selectedMenuOption === "Export" ? <ExportVideoPanel /> : null}
      {selectedMenuOption === "Fill" ? <FillPanel /> : null}
      {selectedMenuOption === "Assets" ? <AssetsPanel /> : null}
      {selectedMenuOption === "Stickers" ? <StickersPanel /> : null}
      {selectedMenuOption === "Shapes" ? <ShapesPanel /> : null}
      
    </div>
  );
});
