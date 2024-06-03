import React from "react";
import Footer from "./includes/Footer";
import Header from "./includes/Header";
import { StoreContext } from "@/store";
import { observer } from "mobx-react";


export const MainLayout=observer(({children}:{children:React.ReactNode})=>{
   const store = React.useContext(StoreContext);
    return (<>
    {/* <Header/> */}
    {children}
    {/* {store.maximize===true ? null:<Footer/>} */}
    </>)
});