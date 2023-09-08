import { useEffect, useState } from "react"

export const useOrigin = ()=>{
    const [isMounted,setMounted] = useState(false);
    const origin = (typeof window !== undefined && window.location.origin ) ?? undefined;

    useEffect(()=>{
        setMounted(true);
    },[]);

    if(!isMounted){
        return undefined;
    }
    return origin;
}