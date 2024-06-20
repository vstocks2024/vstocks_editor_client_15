"use client";
import React from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { MdAdd } from "react-icons/md";

type TextResourceProps = {

  fontSize: number | undefined;
  fontFamily: string | undefined;
  sampleText: string;
};
export const TextResource = observer(
  ({ fontSize,sampleText ,fontFamily }: TextResourceProps) => {
    const store = React.useContext(StoreContext);
    return (
      <div className="items-center bg-slate-800 m-[15px] flex flex-row">
        <div
          className="flex-1 text-white px-2 py-1"
          style={{
            fontSize: `${fontSize}px`,
          }}
        >
          {sampleText}
        </div>
        <button
          className="hover:bg-[#00a0f5] bg-[rgba(0,0,0,.25)] rounded z-10 text-white font-bold py-1"
          onClick={() =>
            store.addText({
              text:sampleText,
              fontSize:fontSize,
              fontFamily:fontFamily,
              
            })
          }
        >
          <MdAdd size="25" />
        </button>
      </div>
    );
  }
);
