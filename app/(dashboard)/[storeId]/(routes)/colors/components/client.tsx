"use client";

import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Color } from '@prisma/client';

import ApiList from '@/components/ui/apil-list';
import { DataTable } from '@/components/ui/data-table';
import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { ColorColumn, columns } from './columns';

interface ColorClientProps{
  data:ColorColumn[]
}

export default function ColorClient({data}:ColorClientProps) {
  const router = useRouter();
  const params = useParams();
  return (
   <>
    <div className='flex items-center justify-between'>
      <Heading title={`Colors (${data.length})`}
      description='Manage Colors for your store'></Heading>
    <Button
    onClick={()=>router.push(`/${params.storeId}/colors/new`)}
    >
    <Plus className='mr-2 w-4 h-4'></Plus>
    Add New
    </Button>
    </div>
   <Separator/>
   <DataTable searchKey="name" columns={columns} data={data}></DataTable>
   <Heading title='API' description='API calls for Colors'></Heading>
   <Separator></Separator>
   <ApiList entityIdName='colorId' entityName='colors'></ApiList>
    </>
  )
}
