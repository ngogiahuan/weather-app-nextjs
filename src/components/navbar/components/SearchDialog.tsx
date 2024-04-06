'use client'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut
} from '@/components/ui/command'
import { commandIcon } from '@/lib/icons'
import { DialogTrigger } from '@radix-ui/react-dialog'
import React from 'react'

export default function SearchDialog() {
  const [open, setOpen] = React.useState(false)

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant='outline' className='flex w-60 items-center justify-between gap-4'>
            <p className=' text-sm font-light text-muted-foreground'>Search here...</p>
            <div className='flex items-center gap-2 rounded-md bg-muted px-2 py-1 text-muted-foreground'>
              {commandIcon} K
            </div>
          </Button>
        </DialogTrigger>
        <DialogContent className='p-0 sm:max-w-[425px]'>
          <Command>
            <CommandInput placeholder='Type a command or search...' />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading='Suggestions'>
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Calculator</CommandItem>
              </CommandGroup>
              <CommandSeparator />
            </CommandList>
          </Command>
        </DialogContent>
      </Dialog>
    </div>
  )
}
