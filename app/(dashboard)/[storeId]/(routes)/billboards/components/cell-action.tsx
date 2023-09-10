"use client";
import React from 'react'
import { BillboardColumn } from './columns';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Copy, Edit, MoreHorizontal, Trash } from 'lucide-react';
import toast from 'react-hot-toast';

interface CellActionProps{
  data:BillboardColumn;
}

export default function CellAction({data}:CellActionProps) {
  const onCopy = (id:string)=>{
    navigator.clipboard.writeText(id);
    toast.success("Billboard id copied to the clipboard.");
}
  return (
    <div >
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button variant="ghost" className='h-8 w-8 p-0'>
      <span className='sr-only'>
      Open Menu
      </span>
      <MoreHorizontal className='h-4 w-4'></MoreHorizontal>
      </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent align='end'>
    <DropdownMenuLabel>Actions</DropdownMenuLabel>
    <DropdownMenuItem onClick={()=>onCopy(data.id)}>
      <Copy className='mr-2 h-4 w-4'/>
      Copy Id
      </DropdownMenuItem>
    <DropdownMenuItem>
      <Edit className='mr-2 h-4 w-4'></Edit>
      Update
      </DropdownMenuItem>
      <DropdownMenuItem>
      <Trash className='mr-2 h-4 w-4'/>
      Delete
      </DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

    </div>
  )
}
