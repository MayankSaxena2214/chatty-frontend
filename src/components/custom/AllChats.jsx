import { ListFilter, Search, SquarePen } from 'lucide-react'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { formatDistanceToNow } from 'date-fns';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedChat } from '@/redux/slice/chat.slice';

const AllChats = () => {
  const {
    chats,
    selectedChat
  }=useSelector((state)=>state.chats);
  const dispatch=useDispatch();
  
  return (
    <div className='flex items-stretch shrink-0 h-full'>
      <div className='w-[10%] border '>Hi</div>
      <div className="flex flex-col gap-1 w-full p-2">
        <div className='flex justify-between items-center'>
          <div>Chats</div>
          <div className="flex items-center gap-2">
            <SquarePen className='h-4 w-4 text-gray-800 cursor-pointer' />
            <ListFilter className='h-4 w-4 text-gray-800 cursor-pointer' />
          </div>
        </div>

        <div className='relative'>
          <Search className='absolute top-2  left-2 h-4 w-4 text-gray-800' />
          <Input className={'pl-8'} />
        </div>


        <div className="flex max-h-[80dvh] overflow-y-auto flex-col py-2">
          {
            chats.map((chat, index) => {
              return <div onClick={()=>dispatch(setSelectedChat(chat))} className={` px-2 py-2 flex items-center gap-2 cursor-pointer ${selectedChat?._id == chat._id ? 'bg-gray-200' : ''}`} >
                <div className="rounded-full h-[60px] shrink-0 w-[60px] bg-gray-100"></div>
                <div className="flex flex-col w-full">
                  <div className="flex justify-between w-full items-start">

                    <Tooltip>
                      <TooltipTrigger className=' text-start'>
                        <div className='w-[140px] truncate'>{chat?.name || "Abc User"}</div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{chat?.name || "Abc User"}</p>
                      </TooltipContent>
                    </Tooltip>
                    <div>{formatDistanceToNow(chat?.createdAt, { addSuffix: true }).replace("about", "")}</div>
                  </div>
                  <div>{chat?.lastMessage ? "Last Message" : "No Last Message"}</div>
                </div>
              </div>
            })
          }
        </div>


      </div>
    </div>
  )
}

export default AllChats
