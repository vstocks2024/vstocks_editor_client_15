"use client";
import React from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import {
  MdDownload,
  MdVideocam,
  MdWebStories,
  MdAnimation,
  MdTitle,
  MdLibraryMusic,
  MdOutlineFormatColorFill,
  MdMovieFilter,
} from "react-icons/md";
import { IoImages } from "react-icons/io5";
import { PiSmileyStickerFill,  PiShapesFill } from "react-icons/pi";
import { Store } from "@/store/Store";
import axios from "axios";
import { getObjectURL } from "./functions/get_put_url";

export const Menu = observer(() => {
  const store = React.useContext(StoreContext);
  return (
    <div className="inline-flex flex-col border border-white m-1  py-4 bg-[#202020]">
      {MENU_OPTIONS.map((option) => {
        return (
          <button
            key={option.name}
            onClick={() => {store.selectedMenuOption===option.name ? store.selectedMenuOption=null: option.action(store) }}
            className=" hover:brightness-200 bg-transparent px-[2px] py-1 w-[64px] h-[60px] justify-center items-center align-middle flex ">
            <span className=" flex flex-col justify-center items-center w-12 h-11 gap-1">
            <option.icon
              className={`${store.selectedMenuOption===option.name ? "brightness-200":"brightness-75" }`}
              size={24}
              color={
                `${store.selectedMenuOption === option.name} ? "#00a0f5" : "black" `
              }
            />
            <span
              className={`w-full text-white text-center  text-[11px] leading-relaxed ${store.selectedMenuOption === option.name ? "font-bold brightness-200" : "font-light brightness-75"}`}>
              {option.name}
            </span>
            </span>
            <span></span>
            <span></span>
          </button>
        );
      })}
      
    </div>
  );
});

const MENU_OPTIONS = [
  {
    name: "Text",
    icon: MdTitle,
    action: (store: Store) => {
      store.setSelectedMenuOption("Text")
    },
  },
  {
    name: "Images",
    icon: IoImages,
    action: (store: Store) => {
      store.setSelectedMenuOption("Images");
    },
  },
  {
    name: "Audio",
    icon: MdLibraryMusic,
    action: (store: Store) => {
      store.setSelectedMenuOption("Audio");
    },
  },
  {
    name: "Shapes",
    icon: PiShapesFill,
    action: (store: Store) => {
      store.setSelectedMenuOption("Shapes");
    }
  },
  {
    name: "Stickers",
    icon: PiSmileyStickerFill,
    action: (store: Store) => {
      store.setSelectedMenuOption("Stickers");
    }
  },
  {
    name: "Video",
    icon: MdVideocam,
    action: (store: Store) => {
      store.setSelectedMenuOption("Video");
      
    },
  },
  {
    name: "Assets",
    icon: MdWebStories,
    action: (store: Store) => {
      store.setSelectedMenuOption("Assets");
    },
  },
  /*{
    name: "Animation",
    icon: MdAnimation,
    action: (store: Store) => {
      store.setSelectedMenuOption("Animation");
    },
  },*/
  /*{
    name: "Effects",
    icon: MdMovieFilter,
    action: (store: Store) => {
      store.setSelectedMenuOption("Effect");
    },
  },
  {
    name: "Fill",
    icon: MdOutlineFormatColorFill,
    action: (store: Store) => {
      store.setSelectedMenuOption("Fill");
    },
  },*/
  {
    name: "Export",
    icon: MdDownload,
    action: (store: Store) => {
      store.setSelectedMenuOption("Export");
    },
  },
];
