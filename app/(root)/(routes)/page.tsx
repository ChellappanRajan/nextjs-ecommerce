"use client";

import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";


export default function SetupPage() {

  const isOpen = useStoreModal((store)=>store.isOpen);
  const onOpen = useStoreModal((store)=>store.onOpen);

  useEffect(()=>{
    if(!isOpen){
      onOpen();
    }
  },[isOpen,onOpen]);

  return null;
}
