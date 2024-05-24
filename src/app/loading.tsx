"use client"
import { ImSpinner } from "react-icons/im";
export default function EditorLoadingPage(){
    return <>
    <main className="w-full h-screen relative">
      <ImSpinner className=" absolute top-1/2 left-1/2 animate-spin" size={100}/>
    </main>
    </>
}