import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Input } from '../ui/input'
import { GrGroup } from 'react-icons/gr'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import NewGroupDialog from './NewGroupDialog'

const NewChat = () => {
  const { users } = useSelector((state) => state.users)
  const [newGroupDialog, setNewGroupDialog] = useState(false)

  const handleNewGroupClick = () => {
    setNewGroupDialog(true)
    // You can open dialog logic here
  }

  return (
    <div className='px-2 py-3 flex flex-col gap-3'>
      <div>New Chat</div>

      <div className='flex flex-col gap-3'>
        {/* Search Input */}
        <Input placeholder='Search name or email' />

        {/* New Group Section */}
        <div className='flex flex-col gap-1'>
          <div
            onClick={handleNewGroupClick}
            className='flex items-center gap-2 px-4  py-2 rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300 transition'
          >
            <GrGroup className='h-5 w-5 text-gray-700' />
            <div>New Group</div>
          </div>
        </div>

        {/* Users List */}
        <div className='flex flex-col gap-1'>
          {users.map((item, index) => (
            <div key={index} className='flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 cursor-pointer'>
              <Avatar className='h-[40px] w-[40px]'>
                <AvatarImage
                  src={item?.profile ? item.profile : 'https://github.com/shadcn.png'}
                />
                <AvatarFallback>..</AvatarFallback>
              </Avatar>

              <div>
                <div className='font-medium'>{item?.name}</div>
                <div className='text-muted-foreground text-sm'>{item?.email}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {
        newGroupDialog && <NewGroupDialog open={newGroupDialog} setOpen={setNewGroupDialog}/>
      }
    </div>
  )
}

export default NewChat
