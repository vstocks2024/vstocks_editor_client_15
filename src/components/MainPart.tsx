import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
import { StoreContext } from "@/store";
import axios from "axios";

import {
  MdSave,
  MdFileDownload,
  MdContentCut,
  MdOutlineContentCopy,
  MdContentPaste,
  MdUndo,
  MdRedo,
  MdPlayArrow,
  MdPause,
  MdFullscreen,
  MdDelete,
  MdLayers,
} from "react-icons/md";

import { getObjectURL } from "./functions/get_put_url";
import { Store } from "@/store/Store";
import { EditorElement } from "@/types";
import { usePathname, useRouter } from "next/navigation";
import { isHtmlVideoElement } from "@/utils";
import { useTemplate } from "@/app/context/template";

export const MainPart = observer(() => {
  
  const template=useTemplate();
  
  const store = React.useContext(StoreContext);
  const Icon = store.playing ? MdPause : MdPlayArrow;

  const handleDeleteButton = async () => {
    try {
      if (!localStorage.getItem("template_id")) return;
      const template_id = localStorage.getItem("template_id");
      if (!store.selectedElement) return;
      const element_id = store.selectedElement?.id;
      await axios
        .delete(
          `${process.env.NEXT_PUBLIC_URL}/delete_element/${template_id}/${element_id}`
        )
        .then((resolve) => {
          console.log(resolve);
        })
        .catch((reject) => {
          console.log(reject);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleGetTemplateById = async () => {
    try {
      await axios
        .get(
          `${process.env.NEXT_PUBLIC_URL}/get_template_by_id/${template.templateid}`
        )
        .then(async (resolve) => {
          store.setVideos([]);
          store.removeAllEditorElements();
          localStorage.setItem("template_id", resolve.data.id);
          const template_arr = resolve.data.template_data;
          template_arr.forEach(async (ele: EditorElement) => {
            if (ele.type === "video") {
              const fileid = ele.id;
              const videoid_fileid = ele.id.split(".");
              const filename = ele.name;
              await getObjectURL(
                `users/uploads/videos/category/mahashivaratri/${videoid_fileid[0]}`
              )
                .then((url) => {
                  console.log(url);
                  ele.properties.src = url;
                  console.log(ele.properties.src);
                  //store.addVideoResource({fileid:fileid,filename:filename,filesource:url});
                  store.addEditorElementAfterFetch(ele);
                })
                .catch((err) => {
                  console.log(err);
                });
            } else if (ele.type === "image") {
              const fileid = ele.id;
              const imageid_fileid = ele.id.split(".");
              const filename = ele.name;
              await getObjectURL(
                `users/uploads/images/category/mahashivaratri/${imageid_fileid[0]}`
              )
                .then((url) => {
                  console.log(url);
                  ele.properties.src = url;
                  console.log(ele.properties.src);
                  //store.addImageResource({fileid:fileid,filename:filename,filesource:url});
                  store.addEditorElementAfterFetch(ele);
                })
                .catch((err) => {
                  console.log(err);
                });
            } else if (ele.type === "text") {
              store.addEditorElementAfterFetch(ele);
            } else if (ele.type === "audio") {
            }
            
          });
        })
        .catch((reject) => {
          console.log(reject);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSaveTemplate4 = async () => {
    try {
      console.log(store.editorElements);
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_URL}/create_template`,
          store.editorElements,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then(async (resolve) => {
          console.log(resolve);
          location.reload();
        })
        .catch((reject) => {
          console.log(reject);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSave3 = async () => {
    var arrCoverVideo: Object[] = [];
    var arrCoverImage: Object[] = [];
    var arrTextBox: Object[] = [];
    try {
      store.editorElements?.forEach((ele) => {
        if (ele.fabricObject?.type == "coverVideo") {
          arrCoverVideo = [...arrCoverVideo, ele];
          console.log(arrCoverVideo);
        } else if (ele.fabricObject?.type == "coverImage") {
          arrCoverImage = [...arrCoverImage, ele];
          console.log(arrCoverImage);
        } else if (ele.fabricObject?.type == "textbox") {
          arrTextBox = [...arrTextBox, ele];
          console.log(arrTextBox);
        }
      });
      const newCanvasObj = {
        version: "5.3.0",
        objects: {
          coverVideo: arrCoverVideo,
          coverImage: arrCoverImage,
          textbox: arrTextBox,
        },
        background: store.canvas?.backgroundColor,
      };
      await axios
        .post("${process.env.NEXT_PUBLIC_URL}/create_template", newCanvasObj)
        .then((resolve) => {
          console.log(resolve);
        })
        .catch((reject) => {
          console.log(reject);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleGetAllTemplates = async () => {
    try {
      await axios
        .get("http://localhost:2020/templates/list_all_templates")
        .then((resolve) => {
          console.log(resolve);
        })
        .catch((reject) => {
          console.log(reject);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleGetTemplate = async () => {
    await axios
      .get(
        "http://localhost:2020/templates/get_template_id/65c1030005708b1bc840f166"
      )
      .then((resolve) => {
        //store.canvas?.add(result.data);
        console.log(resolve["data"]["coverVideo"]);
        console.log(resolve["data"]["coverImage"]);
        console.log(resolve["data"]["textbox"]);
      })
      .catch((err) => console.log(err));
  };
  const handleSave2 = async () => {
    const newCanvas = {
      template_details: store.editorElements,
    };
    console.log(newCanvas);
    await axios
      .post(
        "http://localhost:2020/templates/create_template2",
        store.editorElements
      )
      .then((response) => {
        response["data"].forEach((ele: any) => {
          console.log(ele["placement"]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleSave = async () => {
    console.log(store.editorElements);
    var arrCoverVideo: Object[] = [];
    var arrCoverImage: Object[] = [];
    var arrTextBox: Object[] = [];
    store.canvas?.getObjects().forEach((ele) => {
      if (ele.type == "coverVideo") {
        arrCoverVideo = [...arrCoverVideo, ele];
      } else if (ele.type == "coverImage") {
        arrCoverImage = [...arrCoverImage, ele];
      } else if (ele.type == "textbox") {
        arrTextBox = [...arrTextBox, ele];
      }
    });
    const newCanvasObj = {
      version: "5.3.0",
      objects: {
        coverVideo: arrCoverVideo,
        coverImage: arrCoverImage,
        textbox: arrTextBox,
      },
      background: store.canvas?.backgroundColor,
    };
    await axios
      .post("http://localhost:2020/templates/create_template", newCanvasObj)
      .then((resolve) => {
        console.log(resolve.data.result.objects);
      })
      .catch((reject) => {
        console.log(reject);
      });
  };
  const getEditorElementsData = () => {
    console.log(store.editorElements);
  };
  const handlePlayPauseButton = () => {
    if (store.editorElements.length <= 0) {
      store.setPlaying(false);
      return;
    }
    store.setPlaying(!store.playing);
  };
  useEffect(() => {
   handleGetTemplateById();
   if(store.editorElements.length>0){
    store.setPlaying(true);
}
   }, []);
  return (
    <div className=" bg-[#202020]  dark:bg-[#202020] border border-red-500 flex justify-content-center p-3">
      <div className="justify-between items-center flex-row border  border-white flex w-full">
        <div className="flex items-center border border-green-500 m-1 justify-start p-2 w-full">
          <button className="w-10 h-10">
            <span>
              <MdSave
                size={24}
                onClick={handleSaveTemplate4}
                className="cursor-pointer"
              />
            </span>
            <span></span>
            <span></span>
          </button>
          <button className="w-10 h-10">
            <span>
              <MdFileDownload
                size={24}
                onClick={handleGetTemplateById}
                className=" cursor-pointer"
              />
            </span>
            <span></span>
            <span></span>
          </button>
          <button className="w-10 h-10">
            <span>
              <MdContentCut
                size={24}
                className={`cursor-pointer ${
                  store.selectedElement ? "brightness-100" : "brightness-50"
                } `}
              />
            </span>
            <span></span>
            <span></span>
          </button>
          <button className="w-10 h-10">
            <span>
              <MdOutlineContentCopy
                size={24}
                className={`cursor-pointer ${
                  store.selectedElement ? "brightness-100" : "brightness-50"
                } `}
              />
            </span>
            <span></span>
            <span></span>
          </button>
          <button className="w-10 h-10">
            <span>
              <MdContentPaste size={24} className=" cursor-pointer" />
            </span>
            <span></span>
            <span></span>
          </button>
          <button className="w-10 h-10">
            <span>
              <MdUndo size={24} className=" cursor-pointer" />
            </span>
            <span></span>
            <span></span>
          </button>
          <button className="w-10 h-10">
            <span>
              <MdRedo size={24} className=" cursor-pointer" />
            </span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="flex items-center border border-green-500 m-1 justify-end p-2 w-full">
          <button className="w-10 h-10">
            <span>
              <MdFullscreen size={24} className=" cursor-pointer" />
            </span>
            <span></span>
            <span></span>
          </button>
          <button className="w-10 h-10">
            <span>
              <MdDelete
                size={24}
                className={`cursor-pointer ${
                  store.selectedElement ? "brightness-100" : "brightness-50"
                }`}
                onClick={handleDeleteButton}
              />
            </span>
            <span></span>
            <span></span>
          </button>
          <button className="w-10 h-10">
            <span>
              <Icon
                size={24}
                onClick={handlePlayPauseButton}
                className="cursor-pointer"
              ></Icon>
            </span>
            <span></span>
            <span></span>
          </button>
          <button className="w-10 h-10">
            <span>
              <MdLayers size={24} className="cursor-pointer" />
            </span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
  );
});
