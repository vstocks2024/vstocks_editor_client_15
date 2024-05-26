"use client";
import React, { useEffect } from "react";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";
import { ImageResource } from "../entity/ImageResource";
import { UploadButton } from "../shared/UploadButton";
import { getObjectURL } from "../functions/get_put_url";
import axios from "axios";

export const ImageResourcesPanel = observer(() => {
  const store = React.useContext(StoreContext);
  const init_user_uploaded_images = async () => {
    try {
      store.setImages([]);
      await axios
        .get(`${process.env.NEXT_PUBLIC_URL}/user/list_user_uploaded_images`)
        .then(async (resolve) => {
          if (resolve.data.data?.length > 0) {
            resolve.data.data.forEach(async (ele: any) => {
              const fileid = ele.id;
              const imageid_fileid = ele.id.split(".");
              const filename = ele.image_name;
              const url: string = await getObjectURL(
                `user_uploaded_images/${imageid_fileid[0]}`
              );
              
              store.addImageResource({
                fileid: fileid,
                filename: filename,
                filesource: url,
              });
            });
          }
        })
        .catch((reject) => {
          console.log(reject);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const init1 = async () => {
    try {
      store.setImages([]);
      await axios
        .get(`${process.env.NEXT_PUBLIC_URL}/list_images`)
        .then(async (resolve) => {
          if (resolve.data.data?.length > 0) {
            resolve.data.data.forEach(async (ele: any) => {
              const fileid = ele.id;
              const imageid_fileid = ele.id.split(".");
              const filename = ele.image_name;
              const url: string = await getObjectURL(
                `users/uploads/images/category/mahashivaratri/${imageid_fileid[0]}`
              );
              

              store.addImageResource({
                fileid: fileid,
                filename: filename,
                filesource: url,
              });
            });
          }
        })
        .catch((reject) => {
          console.log(reject);
        });
    } catch (err) {
      console.log(err);
    }
  };

  // const init=async ()=>
  // {
  //   store.setImages([]);
  //   try{
  //   await axios.get("http://localhost:2020/images/list_images").then((resolve)=>
  //   {
  //     const result=resolve.data;
  //    if(result.resolve.Contents.length>0)
  //    {
  //     result.resolve.Contents.forEach(async (ele:any)=>
  //     {
  //       const file=ele["Key"];
  //       const arrfile=file.split("/");
  //       const filename:string=arrfile[arrfile.length-1];
  //       const url:string=await getObjectURL(file);
  //       store.addImageResource({fileid:fileid,filename:filename,filesource:url});

  //     })
  //    }
  //   });}
  //   catch(err)
  //   {
  //     console.log(err);
  //   }
  // }
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("newimage", file);
    await axios
      .post(`${process.env.NEXT_PUBLIC_URL}/new_image`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((resolve) => {
        console.log(resolve);
        init1();
      })
      .catch((reject) => {
        console.log(reject);
      });
  };
  useEffect(() => {
    init1();
  }, []);
  return (
    <div className="items-center justify-start border border-red-500 flex flex-col m-0.5 p-0.5">
        <UploadButton
        accept="image/*"
        className=" uploadbutton"
        onChange={handleFileChange}
      />
    <div className=" border border-blue-500 m-0.5 p-1 overflow-y-auto h-[405px]  w-full">
        {store.images.map((file, index) => {
          return (
            <ImageResource
              key={file["fileid"]}
              fileid={file["fileid"]}
              filename={file["filename"]}
              filesource={file["filesource"]}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
});
