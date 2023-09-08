"use client";

import React from 'react'
import { Alert, AlertDescription, AlertTitle } from './alert';
import { Copy, Server } from 'lucide-react';
import { Badge, BadgeProps } from './badge';
import { Button } from './button';
import { toast } from 'react-hot-toast';

interface ApiAlertProps{
    title:string;
    description:string;
    variant: 'public' | 'admin'
}

const textMap:Record<ApiAlertProps['variant'],string> = {
    public:"Public",
    admin:"Admin"
}
//TODO:Use Map
const variantMap:Record<ApiAlertProps['variant'],BadgeProps["variant"]> = {
    public:"secondary",
    admin:"destructive"
}

export default function ApiAlert({
title,
description,
variant = 'public'
}:ApiAlertProps) {

    const onCopy = ()=>{
        navigator.clipboard.writeText(description);
        toast.success("API route copied to the clipboard.");
    }
  return (
   <Alert>
    <Server className='h-4 w-4'>
    </Server>
       <AlertTitle className='flex items-center gap-x-2'>
       {title}
       <Badge variant={variantMap[variant]}>
        {textMap[variant]}
       </Badge>
       </AlertTitle>
       <AlertDescription className='flex mt-4 flex-item justify-between items-center'>
        <code className='relative rounded bg-muted px-[0.3rem] font-mono py-[0.2rem] font-semibold'>
        {description}
        </code>
        <Button variant="outline" size="icon" >
            <Copy className='w-4 h-4' onClick={onCopy}></Copy>
        </Button>
       </AlertDescription>
   </Alert>
  )
}
