"use client";

import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Billboard } from '@prisma/client';

import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';

interface BillboardClientProps{
  data:Billboard[];

}

export default function BillboardClient({data}:BillboardClientProps) {
  const router = useRouter();
  const params = useParams();
  return (
   <>
    <div className='flex items-center justify-between'>
      <Heading title={`Billboard (${data.length})`}
      description='Manage billboards for your store'></Heading>
    <Button
    onClick={()=>router.push(`/${params.storeId}/billboards/new`)}
    >
    <Plus className='mr-2 w-4 h-4'></Plus>
    Add New
    </Button>
    </div>
   <Separator/>
    </>
  )
}
