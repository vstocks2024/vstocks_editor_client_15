
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
  return (<div className=" hidden min-[977px]:flex min-[977px]:flex-col min-[977px]:justify-start w-[17%] h-full  bg-[#303030]" >
      <div className=" inline-flex items-center flex-row h-10 bg-black  justify-between">
        <h3 className="m-1 p-1 font-bold text-[14px]">{store.selectedMenuOption}</h3>
        <button onClick={()=>{store.selectedMenuOption=null}} className=" m-0.5 p-0.5">
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
