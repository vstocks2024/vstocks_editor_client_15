"use client"
import { createContext, useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
const Context = createContext();

const Provider = ({ children }) => {
    const router = useRouter();
    const [templateid, setTemplateId] = useState("");
    const exposed = {templateid, setTemplateId};

 return <Context.Provider value={exposed}>{children}</Context.Provider>;
}
export const useTemplate = () => useContext(Context);

export default Provider;