'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function NavBar() {
  const router = useRouter()
  return (
    <div className='flex w-full items-center justify-between  px-32 py-4'>
      <div className='text-2xl font-bold'>
        Weather App by{' '}
        <span
          className='font-light text-blue-500 underline hover:cursor-pointer'
          onClick={() => router.push('https://github.com/ngogiahuan')}
        >
          ngogiahuan
        </span>
      </div>
      <div className='flex w-full shrink-0 gap-2 sm:w-fit'>
        <Button>Home</Button>
      </div>
    </div>
  )
}
