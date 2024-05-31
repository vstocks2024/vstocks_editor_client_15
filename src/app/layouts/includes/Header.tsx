import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown ,FaAngleUp } from "react-icons/fa";
export default function Header(){
    const [hamburger,setHamburger]=useState<boolean>(true);
    const [isOpen,setIsOpen]=useState<boolean>(true);
    const isLoggedIn=()=>{
        return <>
        </>
    }
    return (<>
    <header className="relative border border-white bg-[#2E67DD]">
        <div className="container mx-auto border border-green-500 m-0.5 p-0.5">
            <div className="min-[977px]:hidden border border-white m-[1px] p-[1px]">
                <div className="border border-green-500 flex flex-row items-center justify-between m-[1px] p-[1px] ">
                    <div className="inline-flex flex-row space-x-2 items-center justify-between border border-pink-500 m-[1px] p-[1px]">
                        <button className="border border-white m-[1px] p-[1px]"><GiHamburgerMenu color="#FFF"/></button>
                        <div className=""><h1 className=" text-[40px]">Vstocks</h1></div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                     Login Todo
                    </div>
                </div>
                <div className={`fixed h-[98%] w-[275px] px-4 z-10  top-0 left-0 bg-white border border-green-500  m-0.5 p-0.5`}>
                    <div className="flex flex-col items-center justify-start">
                   <div className="bg-[#2E67DD] h-[72px] w-full py-4 px-6"><h3 className="text-white text-lg">Vstocks</h3></div>
                   <div className="w-full  py-6 flex flex-row items-center  justify-start">
                    <ul className=" border border-red-500 space-y-4 w-full ">
                       <li className="text-black w-full hover:bg-[#2E67DD] hover:text-white ">Home</li>
                       <li onMouseEnter={()=>setIsOpen(true)} onMouseLeave={()=>setIsOpen(false)} className="text-black w-full border border-green-500 hover:bg-[#2E67DD] hover:text-white "><div className="inline-flex w-full flex-row items-center justify-between "><h3>Templates</h3> {isOpen===true ? <FaAngleUp size={15}/>:<FaAngleDown size={15}/>}</div></li>
                       <li className="text-black hover:bg-[#2E67DD] hover:text-white ">My Projects</li>
                      <li className="text-black hover:bg-[#2E67DD] hover:text-white ">Premium</li>
                    </ul>

                   </div>
                  </div>
                </div>
            
                </div>
               
                <nav className=" border border-pink-500 m-0.5 p-0.5">
                   <ul className="border border-white m-0.5 p-0.5">
                      
                   </ul>
               </nav>
        </div>
    </header>
    </>);
}