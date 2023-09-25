"use client";

import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Product } from '@prisma/client';

import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import React from 'react';
import { ProductColumn, columns } from './columns';
import { DataTable } from '@/components/ui/data-table';
import ApiList from '@/components/ui/apil-list';

interface ProductClientProps{
  data:ProductColumn[];

}

export default function ProductClient({data}:ProductClientProps) {
  const router = useRouter();
  const params = useParams();
  return (
   <>
    <div className='flex items-center justify-between'>
      <Heading title={`Products (${data.length})`}
      description='Manage Products for your store'></Heading>
    <Button
    onClick={()=>router.push(`/${params.storeId}/products/new`)}
    >
    <Plus className='mr-2 w-4 h-4'></Plus>
    Add New
    </Button>
    </div>
   <Separator/>
   <DataTable searchKey="name" columns={columns} data={data}></DataTable>
   <Heading title='API' description='API calls for Products'></Heading>
   <Separator></Separator>
   <ApiList entityIdName='productId' entityName='products'></ApiList>
    </>
  )
}
