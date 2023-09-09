"use client";
import { ImagePlus, Trash } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { Button } from './button';
import Image from 'next/image';
import { CldUploadWidget, } from 'next-cloudinary';


interface ImageUploadProps{
    disabled:boolean;
    onChange:(value:string)=>void;
    onRemove:(value:string)=>void;
    value:string[]
}

export default function ImageUpload({
disabled,
onChange,
onRemove,
value
}:ImageUploadProps) {

    const [isMounted,setMounted] = useState(false);
  
    useEffect(()=>{
        setMounted(true);
    },[]);

    if(!isMounted){
        return null;
    }
    const onUpload = (result:any)=>{
        onChange(result.info.secure_url);
    };


  return (
    <div>
        <div className='mb-4 flex items-center gap-4'>
            {value.map(url=>(
                <div className='relative w-[200px] h-[200px] rounded-md overflow-hidden'  key={url}>
                    <div className='z-10 absolute top-2 right-2'>
                       <Button type='button' onClick={()=>onRemove(url)} variant="destructive" size="icon">
                       <Trash className="h-4 w-4"></Trash>
                       </Button>
                    </div>
                    <Image
                    fill
                    className='object-cover'
                    alt='Image'
                    src={url}
                    >

                    </Image>
                </div>
            ))}
           <CldUploadWidget onUpload={onUpload} uploadPreset='aktx9gl5'>
           {({ open }) => {
    const onClick = ()=> {
      open();
    }
    return (
      <Button type='button' disabled={disabled} variant="secondary" className="button" onClick={onClick}>
  
        <ImagePlus className='w-4 h-4'></ImagePlus>
        Upload an Image
      </Button>
    );
  }}
           </CldUploadWidget>
        </div>
    </div>
  )
}
