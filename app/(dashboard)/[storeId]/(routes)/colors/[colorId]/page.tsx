import prismadb from '@/lib/prismadb'
import React from 'react'
import SizeForm from './components/color-form'

interface SizePageProps{
  params:{colorId:string}
}

export default async function SizePage({params}:SizePageProps) {
  const color = await prismadb.color.findUnique({
    where:{
      id:params.colorId
    }
  })
  return (
    <div className='flex-col'>
     <div className='flex-1 space-y-4 p-8 pt-6'>
      <SizeForm initialData={color}></SizeForm>
     </div>
    </div>
  )
}
