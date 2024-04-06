'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import React from 'react'
import { githubIcon } from '@/lib/icons'
import { ModeToggle } from '@/components/theme/theme-toggle'
import SearchDialog from '@/components/navbar/components/SearchDialog'

export default function NavBar() {
  const router = useRouter()
  return (
    <div className='flex w-full items-center justify-between py-4'>
      <div className='text-2xl font-bold'></div>
      <div className='flex w-full shrink-0 gap-2 sm:w-fit'>
        <SearchDialog />
        <div className='flex items-center gap-2'>
          <ModeToggle />
          <Button
            variant='outline'
            size='icon'
            onClick={() => {
              router.push('https://github.com/ngogiahuan/weather-app-nextjs')
            }}
          >
            {githubIcon}
          </Button>
        </div>
      </div>
    </div>
  )
}
