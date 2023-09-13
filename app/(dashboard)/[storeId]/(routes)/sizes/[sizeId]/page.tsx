import prismadb from '@/lib/prismadb'
import React from 'react'
import SizeForm from './components/size-form'

interface SizePageProps{
  params:{sizeId:string}
}

export default async function SizePage({params}:SizePageProps) {
  const billboard = await prismadb.size.findUnique({
    where:{
      id:params.sizeId
    }
  })
  return (
    <div className='flex-col'>
     <div className='flex-1 space-y-4 p-8 pt-6'>
      <SizeForm initialData={billboard}></SizeForm>
     </div>
    </div>
  )
}
