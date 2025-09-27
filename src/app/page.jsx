"use client"
import React from 'react'
import AllChats from '@/components/custom/AllChats'
import ChatSide from '@/components/custom/ChatSide'

const page = () => {
  return (
    <div className='flex items-stretch min-h-[93dvh]'>
      <div className='w-[25%] shrink-0 border'>
        <AllChats />
      </div>
      <ChatSide/>
    </div>
  )
}

export default page
