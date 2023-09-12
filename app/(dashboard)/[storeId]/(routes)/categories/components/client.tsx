"use client";

import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Billboard } from '@prisma/client';

import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import { CategoryColumn, columns } from './columns';
import { DataTable } from '@/components/ui/data-table';
import ApiList from '@/components/ui/apil-list';

interface BillboardClientProps{
  data:CategoryColumn[];
}

export default function CategoryClient({data}:BillboardClientProps) {
  const router = useRouter();
  const params = useParams();
  return (
   <>
    <div className='flex items-center justify-between'>
      <Heading title={`Categories (${data.length})`}
      description='Manage categories for your store'></Heading>
    <Button
    onClick={()=>router.push(`/${params.storeId}/categories/new`)}
    >
    <Plus className='mr-2 w-4 h-4'></Plus>
    Add New
    </Button>
    </div>
   <Separator/>
   <DataTable searchKey="name" columns={columns} data={data}></DataTable>
   <Heading title='API' description='API calls for Categories'></Heading>
   <Separator></Separator>
   <ApiList entityIdName='categoryId' entityName='categories'></ApiList>
    </>
  )
}
