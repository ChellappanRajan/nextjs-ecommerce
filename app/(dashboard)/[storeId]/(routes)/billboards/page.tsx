import React from 'react'
import BillboardClient from './components/client'
interface BillboardsProps{}


export default function Billboards() {
  return (
    <div className='flex-col'>
        <div className='flex-1 space-y-4 p-8 pt-6'>
            <BillboardClient></BillboardClient>
        </div>
    </div>
  )
}
