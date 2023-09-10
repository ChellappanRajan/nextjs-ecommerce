import React from 'react'
import BillboardClient from './components/client'
import prismadb from '@/lib/prismadb'
interface BillboardsProps{
  params:{storeId:string}
}


export default async function Billboards({params}:BillboardsProps) {
  const billboards = await prismadb.billboard.findMany({
    where:{
      storeId:params.storeId
    },
    orderBy:{
      createdAt:'desc'
    }
  });


  return (
    <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6'>
            <BillboardClient data={billboards}></BillboardClient>
        </div>
    </div>
  )
}
