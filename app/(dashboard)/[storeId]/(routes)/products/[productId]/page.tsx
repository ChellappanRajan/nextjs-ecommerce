import prismadb from '@/lib/prismadb'
import React from 'react'
import ProductForm from './components/product-form'

interface ProductPageProps{
  params:{productId:string,storeId:string}
}

export default async function ProductPage({params}:ProductPageProps) {
  const product = await prismadb.product.findUnique({
    where:{
      id:params.productId
    },
    include:{
      images:true
    }
  });
  const categories = await prisma.category.findMany({
    where:{
      storeId:params.storeId
    }
  })
const colors = await prisma.color.findMany({
    where:{
      storeId:params.storeId
    }
  });
const sizes = await prisma.size.findMany({
    where:{
      storeId:params.storeId
    }
  })
  return (
    <div className='flex-col'>
     <div className='flex-1 space-y-4 p-8 pt-6'>
      <ProductForm initialData={product}
      categories={categories}
      sizes={sizes}
      colors={colors}
      ></ProductForm>
     {/* Existing product id:{billboard?.label} */}
     </div>
    </div>
  )
}
