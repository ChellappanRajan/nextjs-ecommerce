"use client";

import { useEffect, useState } from "react";

import { StoreModals } from "@/components/modals/store-modal";

export const ModalProvider = ()=>{

    const[isMounded,setIsMounted] = useState(false);

    useEffect(()=>{
        setIsMounted(true);
    },[])


    if(!isMounded){
        //To avoid hydration error we are using this
        return null;
    }

    return(
        <StoreModals/>
    )

}