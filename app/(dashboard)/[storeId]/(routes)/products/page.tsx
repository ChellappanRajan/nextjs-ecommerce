import React from 'react'
import ProductClient from './components/client'
import prismadb from '@/lib/prismadb'
import { ProductColumn } from './components/columns';
import {format} from 'date-fns';
import { formatter } from '@/lib/utils';
interface ProductsProps{
  params:{storeId:string}
}


export default async function Products({params}:ProductsProps) {
  const products = await prismadb.product.findMany({
    where:{
      storeId:params.storeId
    },
    include:{
      category:true,
      size:true,
      color:true
    },
    orderBy:{
      createdAt:'desc'
    }
  });

  const formattedProducts:ProductColumn[] =products.map((item)=>({
    id:item.id,
    isFeatured:item.isFeatured,
    isArchived:item.isArchived,
    price:formatter.format(item.price.toNumber()),
    name:item.name,
    category:item.category.name,
    color:item.color.value,
    size:item.size.value, 
    createdAt:format(item.createdAt,'MMMM do, yyyy')
  }));


  return (
    <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6'>
            <ProductClient data={formattedProducts}></ProductClient>
        </div>
    </div>
  )
}
